use wasm_bindgen::prelude::*;

// ─── Free function used by the JS orchestration layer ───────────────────────

/// Basic binary operation — called by calcDoOp() in JS
#[wasm_bindgen]
pub fn calculate(a: f64, op: &str, b: f64) -> f64 {
    match op {
        "+" => a + b,
        "-" => a - b,
        "*" => a * b,
        "/" => if b == 0.0 { f64::NAN } else { a / b },
        "pow"  => a.powf(b),
        "root" => if b == 0.0 { f64::NAN } else { a.powf(1.0 / b) },
        "mod"  => if b == 0.0 { f64::NAN } else { a % b },
        _ => f64::NAN,
    }
}

/// Scientific unary functions — called by calcSciFunc() in JS
/// mode encodes inv/hyp/deg as a bitmask: bit0=inv, bit1=hyp, bit2=deg
#[wasm_bindgen]
pub fn sci(func: &str, x: f64, mode: u8) -> f64 {
    let inv = (mode & 1) != 0;
    let hyp = (mode & 2) != 0;
    let deg = (mode & 4) != 0;
    let to_rad: f64   = if deg { std::f64::consts::PI / 180.0 } else { 1.0 };
    let from_rad: f64 = if deg { 180.0 / std::f64::consts::PI } else { 1.0 };

    match func {
        "sin" => match (inv, hyp) {
            (false, false) => (x * to_rad).sin(),
            (false, true)  => x.sinh(),
            (true,  false) => x.asin() * from_rad,
            (true,  true)  => x.asinh(),
        },
        "cos" => match (inv, hyp) {
            (false, false) => (x * to_rad).cos(),
            (false, true)  => x.cosh(),
            (true,  false) => x.acos() * from_rad,
            (true,  true)  => x.acosh(),
        },
        "tan" => match (inv, hyp) {
            (false, false) => (x * to_rad).tan(),
            (false, true)  => x.tanh(),
            (true,  false) => x.atan() * from_rad,
            (true,  true)  => x.atanh(),
        },
        "log"  => x.log10(),
        "ln"   => x.ln(),
        "10x"  => 10_f64.powf(x),
        "ex"   => x.exp(),
        "x2"   => if inv { x.sqrt()  } else { x * x },
        "x3"   => if inv { x.cbrt()  } else { x * x * x },
        "abs"  => x.abs(),
        "fact" => {
            let n = x.round() as u64;
            if x < 0.0 || n > 170 { return f64::NAN; }
            (1..=n).map(|i| i as f64).product()
        },
        "pi"   => std::f64::consts::PI,
        "e"    => std::f64::consts::E,
        _ => f64::NAN,
    }
}

// ─── Stateful Calculator struct (unchanged) ─────────────────────────────────

#[wasm_bindgen]
pub struct Calculator {
    display:   f64,
    operand:   f64,
    operator:  u8,
    fresh:     bool,
    has_dot:   bool,
}

#[wasm_bindgen]
impl Calculator {
    #[wasm_bindgen(constructor)]
    #[allow(clippy::new_without_default)]
    pub fn new() -> Calculator {
        Calculator {
            display:  0.0,
            operand:  0.0,
            operator: 0,
            fresh:    true,
            has_dot:  false,
        }
    }

    pub fn digit(&mut self, d: u8) -> f64 {
        if self.fresh {
            self.display = d as f64;
            self.fresh   = false;
            self.has_dot = false;
        } else {
            let s = format_f64(self.display);
            let new_s = if self.display < 0.0 {
                format!("-{}{}", &s[1..], d)
            } else {
                format!("{}{}", s, d)
            };
            self.display = new_s.parse().unwrap_or(self.display);
        }
        self.display
    }

    pub fn dot(&mut self) -> f64 {
        if self.fresh {
            self.display = 0.0;
            self.fresh   = false;
        }
        self.has_dot = true;
        self.display
    }

    pub fn op(&mut self, operator: u8) -> f64 {
        if !self.fresh && self.operator != 0 {
            self.display = apply(self.operand, self.display, self.operator);
        }
        self.operand  = self.display;
        self.operator = operator;
        self.fresh    = true;
        self.display
    }

    pub fn equals(&mut self) -> f64 {
        if self.operator != 0 {
            self.display  = apply(self.operand, self.display, self.operator);
            self.operand  = self.display;
            self.operator = 0;
            self.fresh    = true;
        }
        self.display
    }

    pub fn clear(&mut self) -> f64 {
        self.display  = 0.0;
        self.operand  = 0.0;
        self.operator = 0;
        self.fresh    = true;
        self.has_dot  = false;
        0.0
    }

    pub fn back(&mut self) -> f64 {
        if self.fresh { return self.display; }
        let s = format_f64(self.display);
        if s.len() <= 1 || (s.starts_with('-') && s.len() <= 2) {
            self.display = 0.0;
            self.fresh   = true;
        } else {
            self.display = s[..s.len()-1].parse().unwrap_or(0.0);
        }
        self.display
    }

    pub fn negate(&mut self) -> f64 {
        self.display = -self.display;
        self.display
    }

    pub fn percent(&mut self) -> f64 {
        self.display /= 100.0;
        self.display
    }

    pub fn has_op(&self) -> bool {
        self.operator != 0
    }

    pub fn current_op(&self) -> u8 {
        match self.operator {
            1 => b'+',
            2 => b'-',
            3 => b'*',
            4 => b'/',
            _ => 0,
        }
    }
}

fn apply(a: f64, b: f64, op: u8) -> f64 {
    match op {
        1 => a + b,
        2 => a - b,
        3 => a * b,
        4 => if b == 0.0 { f64::INFINITY } else { a / b },
        _ => b,
    }
}

fn format_f64(v: f64) -> String {
    if v == v.floor() && v.abs() < 1e15 {
        format!("{}", v as i64)
    } else {
        format!("{}", v)
    }
}
