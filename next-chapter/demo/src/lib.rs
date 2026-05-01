// ──────────────────────────────────────────────────────────────────────────
//  TROPICÁLIA — a 64k-style intro
//
//  Stack of techniques fused into a single scene:
//    1. Gray-Scott reaction–diffusion generates a continuously-evolving
//       organic ground texture (coral / leopard / zebra patterns).
//    2. The texture is sampled per-pixel through an SNES "Mode 7"
//       perspective projection so the canvas shows a tropical landscape
//       receding into a sunset horizon, with distance fog blending into
//       the sky.
//    3. The sky is its own little world: gradient, twinkling stars,
//       drifting cumulus clouds, a sun disc with halo & godrays sitting
//       on the horizon, and three parallax layers of distant island
//       silhouettes.
//
//  Output is RGBA via a tropical pink/green/purple palette LUT.
// ──────────────────────────────────────────────────────────────────────────
#![allow(clippy::too_many_arguments)]   // render() pulls 23 dials from JS by design
#![allow(clippy::type_complexity)]      // sky-stop tuple table reads better unaliased
#![allow(clippy::needless_range_loop)]  // explicit indices in tight inner loops are clearer

use wasm_bindgen::prelude::*;

const TEX_W: usize = 192;
const TEX_H: usize = 192;
const TEX_N: usize = TEX_W * TEX_H;

// Tropical palette (position 0..1, RGB).  Loops at 1.0 for cycling.
const PAL: [(f32, [u8; 3]); 7] = [
    (0.00, [ 22,   2,  44]),  // deep purple — substrate
    (0.20, [ 86,  10, 140]),  // royal purple
    (0.38, [200,  40, 180]),  // magenta
    (0.55, [255, 110, 195]),  // hot pink
    (0.70, [255, 200, 110]),  // tropical highlight
    (0.85, [120, 230,  70]),  // lime
    (1.00, [ 22,   2,  44]),  // wrap
];

#[inline(always)]
fn lerp(a: f32, b: f32, t: f32) -> f32 { a + (b - a) * t }

#[inline(always)]
fn clamp01(x: f32) -> f32 { x.clamp(0.0, 1.0) }

fn palette(t: f32) -> [u8; 3] {
    let t = t - t.floor(); // wrap to 0..1
    let mut i = 0;
    while i < PAL.len() - 1 && t > PAL[i + 1].0 { i += 1; }
    let (p0, c0) = PAL[i];
    let (p1, c1) = PAL[i + 1];
    let f = ((t - p0) / (p1 - p0).max(1e-6)).clamp(0.0, 1.0);
    [
        lerp(c0[0] as f32, c1[0] as f32, f) as u8,
        lerp(c0[1] as f32, c1[1] as f32, f) as u8,
        lerp(c0[2] as f32, c1[2] as f32, f) as u8,
    ]
}

// Sky palette LUT keyed by time_of_day (0..1).
// Stops:
//   0.00  DAWN     — coral pink rising over deep purple
//   0.25  NOON     — cyan + warm horizon haze
//   0.50  DUSK     — magenta sunset cooling to ember orange
//   0.75  NIGHT    — indigo void with violet horizon
//   1.00  AURORA   — teal-magenta overlay for the splash exit
// Returns (sky_top, sky_mid, sky_horiz, sun_color_warm).
fn sky_palette(tod: f32) -> ([f32; 3], [f32; 3], [f32; 3], [f32; 3]) {
    // 5 stops × (top, mid, horiz, sun_warm)
    let stops: [([f32;3],[f32;3],[f32;3],[f32;3]); 5] = [
        // 0.00 DAWN
        ([ 22.0,   2.0,  44.0], [ 86.0,  10.0, 140.0], [255.0, 110.0, 195.0], [255.0, 220.0, 200.0]),
        // 0.25 NOON
        ([ 12.0,  60.0, 180.0], [120.0, 200.0, 240.0], [255.0, 235.0, 180.0], [255.0, 250.0, 220.0]),
        // 0.50 DUSK
        ([ 30.0,   8.0,  70.0], [180.0,  40.0,  80.0], [255.0, 140.0,  60.0], [255.0, 180.0, 120.0]),
        // 0.75 NIGHT
        ([  4.0,   0.0,  24.0], [ 20.0,   8.0,  70.0], [ 80.0,  30.0, 140.0], [180.0, 130.0, 220.0]),
        // 1.00 AURORA
        ([ 10.0,  20.0,  80.0], [180.0,  90.0, 200.0], [ 80.0, 255.0, 220.0], [255.0, 200.0, 255.0]),
    ];
    let t = tod.clamp(0.0, 0.9999) * 4.0;     // 0..4
    let i = t as usize;
    let f = t - i as f32;
    let a = &stops[i];
    let b = &stops[(i + 1).min(4)];
    let mix3 = |x: &[f32; 3], y: &[f32; 3]| -> [f32; 3] {
        [
            lerp(x[0], y[0], f),
            lerp(x[1], y[1], f),
            lerp(x[2], y[2], f),
        ]
    };
    (mix3(&a.0, &b.0), mix3(&a.1, &b.1), mix3(&a.2, &b.2), mix3(&a.3, &b.3))
}

// Cheap, GPU-shader-style noisy field built from sin/cos products.
// Used for cumulus cloud puffs.  Range ≈ 0..1.
#[inline(always)]
fn cloud_field(x: f32, y: f32, t: f32) -> f32 {
    let a = (x * 0.0085 - t * 0.45).sin() * (y * 0.038 + 0.4).cos();
    let b = (x * 0.022  - t * 0.70 + 1.7).sin() * (y * 0.075 - 0.3).cos();
    let c = (x * 0.045  - t * 1.05 + 3.1).sin() * (y * 0.140 + 1.3).cos();
    let v = a * 0.55 + b * 0.30 + c * 0.15;
    v * 0.5 + 0.5
}

#[wasm_bindgen]
pub struct Demo {
    u:  Vec<f32>,
    v:  Vec<f32>,
    u2: Vec<f32>,
    v2: Vec<f32>,
    rng: u32,
}

#[wasm_bindgen]
impl Demo {
    #[wasm_bindgen(constructor)]
    #[allow(clippy::new_without_default)]
    pub fn new() -> Demo {
        let mut d = Demo {
            u:  vec![1.0; TEX_N],
            v:  vec![0.0; TEX_N],
            u2: vec![1.0; TEX_N],
            v2: vec![0.0; TEX_N],
            rng: 0xBADC_0FFEu32,
        };
        for _ in 0..14 { d.drop_seed(); }
        d
    }

    fn rand(&mut self) -> f32 {
        let mut x = self.rng;
        x ^= x.wrapping_shl(13);
        x ^= x.wrapping_shr(17);
        x ^= x.wrapping_shl(5);
        if x == 0 { x = 1; }
        self.rng = x;
        (x as f32) / 4_294_967_296.0
    }

    fn drop_seed(&mut self) {
        let cx = (self.rand() * TEX_W as f32) as i32;
        let cy = (self.rand() * TEX_H as f32) as i32;
        let r = 6;
        for dy in -r..=r {
            for dx in -r..=r {
                if dx * dx + dy * dy > r * r { continue; }
                let x = ((cx + dx).rem_euclid(TEX_W as i32)) as usize;
                let y = ((cy + dy).rem_euclid(TEX_H as i32)) as usize;
                let i = y * TEX_W + x;
                self.u[i] = 0.5;
                self.v[i] = 0.25;
            }
        }
    }

    /// JS-callable: drop a seed at normalized texture coords (0..1).
    pub fn perturb(&mut self, fx: f32, fy: f32) {
        let cx = ((fx.clamp(0.0, 1.0) * TEX_W as f32) as i32).max(0);
        let cy = ((fy.clamp(0.0, 1.0) * TEX_H as f32) as i32).max(0);
        let r: i32 = 8;
        for dy in -r..=r {
            for dx in -r..=r {
                if dx * dx + dy * dy > r * r { continue; }
                let x = ((cx + dx).rem_euclid(TEX_W as i32)) as usize;
                let y = ((cy + dy).rem_euclid(TEX_H as i32)) as usize;
                let i = y * TEX_W + x;
                self.u[i] = 0.5;
                self.v[i] = 0.25;
            }
        }
    }

    /// Advance the Gray-Scott reaction-diffusion simulation.
    /// Toroidal boundary so the texture tiles seamlessly under Mode 7.
    pub fn step(&mut self, f: f32, k: f32, iters: u32) {
        const W: usize = TEX_W;
        const H: usize = TEX_H;
        let du = 1.0_f32;
        let dv = 0.5_f32;

        for _ in 0..iters {
            for y in 1..H - 1 {
                let yw = y * W;
                let yw_n = (y - 1) * W;
                let yw_s = (y + 1) * W;
                for x in 1..W - 1 {
                    let i = yw + x;
                    let u = self.u[i];
                    let v = self.v[i];
                    let lu = -u
                        + 0.20 * (self.u[i - 1] + self.u[i + 1] + self.u[yw_n + x] + self.u[yw_s + x])
                        + 0.05 * (self.u[yw_n + x - 1] + self.u[yw_n + x + 1]
                                + self.u[yw_s + x - 1] + self.u[yw_s + x + 1]);
                    let lv = -v
                        + 0.20 * (self.v[i - 1] + self.v[i + 1] + self.v[yw_n + x] + self.v[yw_s + x])
                        + 0.05 * (self.v[yw_n + x - 1] + self.v[yw_n + x + 1]
                                + self.v[yw_s + x - 1] + self.v[yw_s + x + 1]);
                    let uvv = u * v * v;
                    self.u2[i] = (u + du * lu - uvv + f * (1.0 - u)).clamp(0.0, 1.0);
                    self.v2[i] = (v + dv * lv + uvv - (f + k) * v).clamp(0.0, 1.0);
                }
            }
            // Toroidal wrap (rows)
            for x in 0..W {
                self.u2[x]                 = self.u2[(H - 2) * W + x];
                self.v2[x]                 = self.v2[(H - 2) * W + x];
                self.u2[(H - 1) * W + x]   = self.u2[W + x];
                self.v2[(H - 1) * W + x]   = self.v2[W + x];
            }
            // Toroidal wrap (cols)
            for y in 0..H {
                self.u2[y * W]             = self.u2[y * W + W - 2];
                self.v2[y * W]             = self.v2[y * W + W - 2];
                self.u2[y * W + W - 1]     = self.u2[y * W + 1];
                self.v2[y * W + W - 1]     = self.v2[y * W + 1];
            }
            std::mem::swap(&mut self.u, &mut self.u2);
            std::mem::swap(&mut self.v, &mut self.v2);
        }
    }

    /// Render the full scene.
    ///
    /// `cw` × `ch` — output pixel grid (low-res render buffer; canvas upscales).
    /// `cam_x`, `cam_y`, `cam_a` — camera position and yaw (radians).
    /// `horizon` — fraction (0..1) of `ch` where the ground meets the sky.
    /// `focal` — pseudo-focal length (larger ⇒ flatter ground, shorter ⇒ steep).
    /// `pal_phase` — palette rotation in [0..1) so colors cycle over time.
    /// `glow` — 0..1, brightens the texture rim around bright V.
    /// `sun_x` — 0..1 horizontal position of the sun on screen.
    /// `sun_int` — 0..1 sun intensity (lets you pulse it gently).
    /// `cloud_t` — drifting phase for cumulus clouds.
    /// `mtn_phase` — horizontal phase for mountain parallax.
    /// `warp` — 0..1, amplitude of rolling-hill undulation in the ground.
    /// `tex_scale` — texture sampling rate; lets acts change "geographic
    ///               scale" of the ground (jungle vs. coral granularity).
    /// `track_blend` — 0..1, how visible the race track is (0 = pure RD
    ///                 wilderness, 1 = full asphalt road carved through).
    /// `race_phase` — phase that drives the track-centerline winding.
    /// `tunnel_blend` — 0..1, ceiling-mirror blend that turns the sky into
    ///                  a Mode-7 tunnel ceiling with neon ribs.
    /// `sparkle_amt` — 0..1, density of frutiger-aero sparkle particles
    ///                 floating across the upper sky.
    /// `psyche_amt` — 0..1, post-pass kaleidoscope: per-pixel hue rotation
    ///                modulated by polar coords + radial brightness pulse.
    /// `time_of_day` — 0..1, drives the sky color LUT (dawn → noon → dusk
    ///                 → night → aurora).
    /// `aurora_amt` — 0..1, intensity of horizontal aurora bands across
    ///                the upper sky (great for night/transition).
    pub fn render(
        &self,
        cw: u32, ch: u32,
        cam_x: f32, cam_y: f32, cam_a: f32,
        horizon: f32, focal: f32,
        pal_phase: f32,
        glow: f32,
        sun_x: f32,
        sun_int: f32,
        cloud_t: f32,
        mtn_phase: f32,
        warp: f32,
        tex_scale: f32,
        track_blend: f32,
        race_phase: f32,
        tunnel_blend: f32,
        sparkle_amt: f32,
        psyche_amt: f32,
        time_of_day: f32,
        aurora_amt: f32,
    ) -> Vec<u8> {
        let cw_us = cw as usize;
        let ch_us = ch as usize;
        let mut out = vec![0u8; cw_us * ch_us * 4];
        let half_w = cw as f32 * 0.5;
        let h_y = (horizon * ch as f32).max(1.0);
        let cos_a = cam_a.cos();
        let sin_a = cam_a.sin();

        // ── Sun position & geometry ──────────────────────────────────
        let sun_px = sun_x.clamp(0.0, 1.0) * cw as f32;
        let sun_py_w = h_y - h_y * 0.04;          // half-submerged at horizon
        let sun_radius = (h_y * 0.18).max(8.0);
        let sun_r2 = sun_radius * sun_radius;
        let halo_radius = sun_radius * 1.85;
        let halo_r2 = halo_radius * halo_radius;
        let ray_radius = (h_y * 2.6).max(60.0);   // cap godray work
        let ray_r2 = ray_radius * ray_radius;

        // ── Sky gradient stops (driven by time-of-day LUT) ───────────
        let (sky_top, sky_mid, sky_horiz, sun_warm) = sky_palette(time_of_day);

        // ── Mountain silhouettes: 3 parallax layers ──────────────────
        // Heights precomputed per column (one short scan).
        // Layers (back→front) get progressively darker, taller and
        // faster scrolling.  Atmospheric haze fades the top edge.
        let peak_max = h_y * 0.30;
        let mut mtn_h: Vec<[f32; 3]> = vec![[0.0; 3]; cw_us];
        let layer_parallax = [0.08_f32, 0.22, 0.50];
        let layer_scale    = [0.013_f32, 0.020, 0.029];
        let layer_amp_mul  = [0.45_f32, 0.65, 0.95];
        for px in 0..cw_us {
            let xf = px as f32;
            for layer in 0..3 {
                let phase_x = xf * layer_scale[layer] + mtn_phase * layer_parallax[layer]
                              + layer as f32 * 17.3;
                let h = ( phase_x.sin() * 0.55
                        + (phase_x * 2.07 + 0.7).sin() * 0.30
                        + (phase_x * 5.13 + 1.9).sin() * 0.15) * 0.5 + 0.5;
                mtn_h[px][layer] = h.powf(1.4) * peak_max * layer_amp_mul[layer];
            }
        }
        let mtn_colors: [[f32; 3]; 3] = [
            [ 78.0, 30.0, 118.0],  // far  — atmospheric haze tint
            [ 46.0, 14.0,  82.0],  // mid
            [ 18.0,  4.0,  42.0],  // near — darkest silhouette
        ];

        for py in 0..ch_us {
            let py_f = py as f32;
            let row = py * cw_us * 4;

            if py_f < h_y {
                // ──────────────────────────── SKY BAND ─────────────────────────────
                let s = py_f / h_y;            // 0 at top, 1 at horizon
                let s2 = s * s;
                let (base_r, base_g, base_b) = if s < 0.5 {
                    let t = s * 2.0;
                    (
                        lerp(sky_top[0], sky_mid[0], t),
                        lerp(sky_top[1], sky_mid[1], t),
                        lerp(sky_top[2], sky_mid[2], t),
                    )
                } else {
                    let t = (s - 0.5) * 2.0;
                    (
                        lerp(sky_mid[0], sky_horiz[0], t),
                        lerp(sky_mid[1], sky_horiz[1], t),
                        lerp(sky_mid[2], sky_horiz[2], t),
                    )
                };

                for px in 0..cw_us {
                    let mut rr = base_r;
                    let mut gg = base_g;
                    let mut bb = base_b;

                    let dxs = px as f32 - sun_px;
                    let dys = py_f - sun_py_w;
                    let dist2 = dxs * dxs + dys * dys;

                    // ── GODRAYS (radial sin streaks, soft-falloff) ────────
                    if dist2 < ray_r2 && dist2 > 1.0 {
                        let dist = dist2.sqrt();
                        let ang = dys.atan2(dxs);
                        let ray = ((ang * 9.0 + cloud_t * 0.25).sin() * 0.5 + 0.5).powi(3);
                        // Quadratic falloff ≈ exp-ish but cheaper
                        let f = 1.0 - (dist / ray_radius);
                        let strength = ray * f * f * sun_int * 0.55;
                        rr += 240.0 * strength;
                        gg += 170.0 * strength;
                        bb += 210.0 * strength;
                    }

                    // ── AURORA BANDS (upper sky only) ────────────────────
                    // Layered horizontal sin-curtains that drift sideways
                    // with `cloud_t`.  Three pseudo-bands: teal, magenta,
                    // chartreuse — typical aurora wash.  Brightness peaks
                    // mid-band and decays to invisible at the top/horizon.
                    if aurora_amt > 0.001 && s < 0.62 {
                        let xf = px as f32;
                        // Wavy y-position of three bands at different
                        // heights, each shifting horizontally over time.
                        let band_pos = [0.18_f32, 0.32, 0.46];
                        let band_col = [
                            ( 60.0_f32, 230.0, 200.0),  // teal
                            (240.0_f32,  90.0, 220.0),  // magenta
                            (170.0_f32, 255.0, 130.0),  // chartreuse
                        ];
                        let mut acc_r = 0.0;
                        let mut acc_g = 0.0;
                        let mut acc_b = 0.0;
                        for bi in 0..3 {
                            let phase = xf * 0.012 + cloud_t * (0.6 + bi as f32 * 0.18);
                            let wob = phase.sin() * 0.025
                                    + (phase * 2.3 + 1.1).sin() * 0.012;
                            let center = band_pos[bi] + wob;
                            let dist_y = (s - center).abs();
                            // Band thickness ~0.08, soft falloff
                            let band = (1.0 - (dist_y / 0.08).min(1.0)).powi(2);
                            // Horizontal flicker so each band shimmers
                            let flick = ((xf * 0.05 + cloud_t * 1.3 + bi as f32 * 1.7).sin()
                                       * 0.5 + 0.5).powi(2);
                            let strength = band * flick * aurora_amt * 0.95;
                            let (cr, cg, cb) = band_col[bi];
                            acc_r += cr * strength;
                            acc_g += cg * strength;
                            acc_b += cb * strength;
                        }
                        rr = (rr + acc_r).min(255.0);
                        gg = (gg + acc_g).min(255.0);
                        bb = (bb + acc_b).min(255.0);
                    }

                    // ── CLOUDS ────────────────────────────────────────────
                    // Parallax-shifted with cam_x so they drift with the world.
                    let cx = px as f32 + cam_x * 0.18;
                    let cv = cloud_field(cx, py_f, cloud_t);
                    // Mask out clouds near sun so the disc stays visible.
                    let sun_mask = clamp01(dist2 / (sun_radius * sun_radius * 5.0));
                    // Density: clouds bias toward upper sky (lower py), thin near horizon.
                    let height_taper = clamp01(s * 1.6) * (1.0 - clamp01((s - 0.85) * 6.0));
                    let mut cd = clamp01((cv - 0.52) * 3.2) * sun_mask * height_taper;
                    if cd > 0.0 {
                        // Soften with extra detail layer for fluffy edges
                        cd *= 0.85 + 0.15 * cv;
                        // Cloud color: warm coral at base, soft pink at top
                        let h_factor = 1.0 - s;  // 1 high in sky, 0 at horizon
                        let cr = lerp(255.0, 235.0, h_factor);
                        let cg = lerp(180.0, 130.0, h_factor);
                        let cb = lerp(220.0, 180.0, h_factor);
                        rr = lerp(rr, cr, cd);
                        gg = lerp(gg, cg, cd);
                        bb = lerp(bb, cb, cd);
                    }

                    // ── SUN HALO ──────────────────────────────────────────
                    if dist2 < halo_r2 {
                        let dist = dist2.sqrt();
                        let halo = clamp01((halo_radius - dist) / (halo_radius - sun_radius * 0.4));
                        let h2 = halo.powi(3) * sun_int * 0.85;
                        rr = (rr + 220.0 * h2).min(255.0);
                        gg = (gg + 130.0 * h2).min(255.0);
                        bb = (bb + 180.0 * h2).min(255.0);
                    }

                    // ── SUN DISC (solid + soft edge, color from LUT) ──────
                    if dist2 < sun_r2 {
                        let dist = dist2.sqrt();
                        let edge = 1.0 - (dist / sun_radius).powi(8);
                        let disc = edge * sun_int;
                        rr = lerp(rr, sun_warm[0], disc);
                        gg = lerp(gg, sun_warm[1], disc * 0.92);
                        bb = lerp(bb, sun_warm[2], disc * 0.78);
                    }

                    // ── STARS (only near top of sky, twinkle by phase) ────
                    if s < 0.55 {
                        let h = ((px.wrapping_mul(374761393))
                            ^ (py.wrapping_mul(668265263))) as u32;
                        if (h % 1300) == 7 {
                            let twinkle = ((pal_phase * std::f32::consts::TAU + (h as f32) * 0.001).sin() * 0.5 + 0.5)
                                * (1.0 - s2);
                            let bright = 220.0 * twinkle;
                            rr = (rr + bright).min(255.0);
                            gg = (gg + bright).min(255.0);
                            bb = (bb + bright).min(255.0);
                        }
                    }

                    // ── MOUNTAIN SILHOUETTES (front-most layer wins) ──────
                    for layer in (0..3).rev() {
                        let mh = mtn_h[px][layer];
                        if mh < 0.5 { continue; }
                        let top_y = h_y - mh;
                        if py_f >= top_y {
                            // Soft top edge: fade in over ~1.5 px for haze
                            let depth = py_f - top_y;
                            let opacity = clamp01(depth / 1.5);
                            // Vertical shading: deeper down → darker
                            let depth_norm = clamp01(depth / mh);
                            let shade = 1.0 - depth_norm * 0.25;
                            let c = mtn_colors[layer];
                            let mr = c[0] * shade;
                            let mg = c[1] * shade;
                            let mb = c[2] * shade;
                            rr = lerp(rr, mr, opacity);
                            gg = lerp(gg, mg, opacity);
                            bb = lerp(bb, mb, opacity);
                            break;
                        }
                    }

                    // ── TUNNEL CEILING (Mode 7 mirror over sky) ───────────
                    // When tunnel_blend > 0 the sky becomes a ceiling that
                    // mirrors the ground via the same Mode-7 projection.
                    // Adds longitudinal neon ribs every ~70 world units that
                    // strobe past the camera with `race_phase`, giving the
                    // sense of a glowing tube enclosing the racer.
                    if tunnel_blend > 0.001 {
                        let dy_c = h_y - py_f;
                        if dy_c >= 0.5 {
                            let z_c = focal / dy_c;
                            let dx = (px as f32 - half_w) * z_c / focal;
                            let wx = cam_x + dx * cos_a - z_c * sin_a;
                            let wy = cam_y + dx * sin_a + z_c * cos_a;
                            let tx = (wx * tex_scale).rem_euclid(TEX_W as f32) as usize;
                            let ty = (wy * tex_scale).rem_euclid(TEX_H as f32) as usize;
                            let v = self.v[ty.min(TEX_H - 1) * TEX_W + tx.min(TEX_W - 1)];
                            // Offset palette so ceiling reads as cooler/different layer
                            let cc = palette(v * 3.0 + pal_phase + 0.5);
                            // Darker ceiling — 0.55x base — feels like an undercroft
                            let mut tr = cc[0] as f32 * 0.55;
                            let mut tg = cc[1] as f32 * 0.55;
                            let mut tb = cc[2] as f32 * 0.55;

                            // Neon ribs every ~70 world units along z
                            let rib_phase = z_c + race_phase * 90.0;
                            let rib_dist = (rib_phase.rem_euclid(70.0) - 35.0).abs();
                            if rib_dist < 4.0 {
                                let s = (1.0 - rib_dist / 4.0).powi(2);
                                tr = (tr + 90.0  * s).min(255.0);
                                tg = (tg + 230.0 * s).min(255.0);
                                tb = (tb + 255.0 * s).min(255.0);
                            }

                            // Edge vignette: darken near left/right of frame
                            // so it reads as a cylindrical wall, not a flat plane.
                            let edge_t = ((px as f32 - half_w).abs() / half_w).min(1.0);
                            let vign = 1.0 - edge_t * edge_t * 0.45;
                            tr *= vign; tg *= vign; tb *= vign;

                            // Distance fog (shorter visible range than ground)
                            let fog_t = (z_c * 0.0050).clamp(0.0, 0.92);
                            let fog_t_inv = 1.0 - fog_t;
                            tr = tr * fog_t_inv + sky_horiz[0] * fog_t * 0.4;
                            tg = tg * fog_t_inv + sky_horiz[1] * fog_t * 0.4;
                            tb = tb * fog_t_inv + sky_horiz[2] * fog_t * 0.4;

                            rr = lerp(rr, tr, tunnel_blend);
                            gg = lerp(gg, tg, tunnel_blend);
                            bb = lerp(bb, tb, tunnel_blend);
                        }
                    }

                    let i = row + px * 4;
                    out[i]     = rr.clamp(0.0, 255.0) as u8;
                    out[i + 1] = gg.clamp(0.0, 255.0) as u8;
                    out[i + 2] = bb.clamp(0.0, 255.0) as u8;
                    out[i + 3] = 255;
                }
            } else {
                // ──────────────────────────── GROUND BAND ─────────────────────────
                let dy = py_f - h_y;
                if dy < 0.5 { continue; }
                let z = focal / dy;

                // Distance fog: 0 (close) → 0.85 (far)
                let fog = (z * 0.0035).clamp(0.0, 0.85);
                let fog_inv = 1.0 - fog;
                let fog_r = sky_horiz[0] * fog;
                let fog_g = sky_horiz[1] * fog;
                let fog_b = sky_horiz[2] * fog;

                // Rolling-hill warp: shifts the sample position so the
                // texture appears to undulate ahead of the camera like
                // gentle terrain.  Two octaves prevent visible periodicity.
                let wave = if warp > 1e-4 {
                    ((z * 0.012 + cloud_t * 0.6).sin() * 0.6
                   + (z * 0.030 + cloud_t * 1.0).sin() * 0.4) * warp * 60.0
                } else { 0.0 };

                for px in 0..cw_us {
                    let dx = (px as f32 - half_w) * z / focal;
                    let wx = cam_x + dx * cos_a - z * sin_a;
                    let wy = cam_y + dx * sin_a + z * cos_a + wave;
                    let tx = (wx * tex_scale).rem_euclid(TEX_W as f32) as usize;
                    let ty = (wy * tex_scale).rem_euclid(TEX_H as f32) as usize;
                    let v = self.v[ty.min(TEX_H - 1) * TEX_W + tx.min(TEX_W - 1)];
                    let c = palette(v * 3.0 + pal_phase);

                    let rim = (v - 0.35).max(0.0) * glow * 1.6;

                    let mut r = (c[0] as f32 + 80.0 * rim).min(255.0) * fog_inv + fog_r;
                    let mut g = (c[1] as f32 + 80.0 * rim).min(255.0) * fog_inv + fog_g;
                    let mut b = (c[2] as f32 + 80.0 * rim).min(255.0) * fog_inv + fog_b;

                    // Sun halo bleeds into the near-horizon ground so the
                    // sky→ground seam looks lit by the sun rather than cut.
                    let dxs = px as f32 - sun_px;
                    let dys = py_f - sun_py_w;
                    let d2  = dxs * dxs + dys * dys;
                    if d2 < halo_r2 {
                        let dist = d2.sqrt();
                        let halo = clamp01((halo_radius - dist) / (halo_radius - sun_radius * 0.4));
                        let h2 = halo.powi(3) * sun_int * 0.55;
                        r = (r + 200.0 * h2).min(255.0);
                        g = (g + 110.0 * h2).min(255.0);
                        b = (b + 170.0 * h2).min(255.0);
                    }

                    // ── RACE TRACK ────────────────────────────────────────
                    // Asphalt ribbon carved through the world by a winding
                    // centerline `tcx(wy, race_phase)`.  The same function
                    // is mirrored in JS so the camera can lock to it.
                    if track_blend > 0.001 {
                        let tcx = (wy * 0.0024 + race_phase * 0.6).sin() * 90.0
                                + (wy * 0.0058 + race_phase * 1.1 + 1.7).sin() * 40.0;
                        let d = wx - tcx;
                        let abs_d = d.abs();
                        let half_w_t: f32 = 95.0;
                        if abs_d < half_w_t + 1.5 {
                            // Asphalt base (cool dark with sheen)
                            let mut tr = 36.0_f32;
                            let mut tg = 28.0_f32;
                            let mut tb = 58.0_f32;

                            // Outer kerbs (last 11 units of half-width):
                            // alternating hot-pink / lime stripes.
                            if abs_d > half_w_t - 11.0 {
                                let band = ((wy * 0.20).floor() as i32).rem_euclid(2);
                                if band == 0 {
                                    tr = 255.0; tg = 100.0; tb = 175.0;
                                } else {
                                    tr = 195.0; tg = 245.0; tb = 110.0;
                                }
                            }

                            // Lane stripes at +/- 38 (subtle white)
                            if (abs_d - 38.0).abs() < 0.9 {
                                tr = (tr + 90.0).min(255.0);
                                tg = (tg + 90.0).min(255.0);
                                tb = (tb + 90.0).min(255.0);
                            }

                            // Dashed centerline
                            let dash = (wy * 0.05).rem_euclid(2.0) < 1.05;
                            if dash && abs_d < 2.4 {
                                tr = 255.0; tg = 248.0; tb = 200.0;
                            }

                            // Apply same fog for depth coherence
                            let mut track_r = tr * fog_inv + fog_r;
                            let mut track_g = tg * fog_inv + fog_g;
                            let mut track_b = tb * fog_inv + fog_b;

                            // Sun halo bleeds onto the track too
                            if d2 < halo_r2 {
                                let dist = d2.sqrt();
                                let halo = clamp01((halo_radius - dist) / (halo_radius - sun_radius * 0.4));
                                let h2 = halo.powi(3) * sun_int * 0.45;
                                track_r = (track_r + 200.0 * h2).min(255.0);
                                track_g = (track_g + 110.0 * h2).min(255.0);
                                track_b = (track_b + 170.0 * h2).min(255.0);
                            }

                            // Soft AA edge → smooth transition between
                            // wilderness RD and the asphalt ribbon.
                            let edge_alpha = clamp01((half_w_t + 1.5 - abs_d) / 1.5);
                            let alpha = edge_alpha * track_blend;
                            r = lerp(r, track_r, alpha);
                            g = lerp(g, track_g, alpha);
                            b = lerp(b, track_b, alpha);
                        }
                    }

                    let i = row + px * 4;
                    out[i]     = r as u8;
                    out[i + 1] = g as u8;
                    out[i + 2] = b as u8;
                    out[i + 3] = 255;
                }
            }
        }

        // ── TOTEMS (Mode 7 neon billboards lining the track) ─────────
        // Tall striped pillars placed at fixed world spacing, alternating
        // sides of the centerline.  Drawn back-to-front so nearer pillars
        // correctly occlude farther ones.  Fades cleanly with track_blend.
        if track_blend > 0.05 {
            let stride: f32 = 95.0;
            let cam_grid = (cam_y / stride).floor() as i32;
            // Iterate from far → near.  k=−2 covers the rare "just passed"
            // pillar so it doesn't pop out of view discontinuously.
            for k in (-2..=24).rev() {
                let idx = cam_grid + k;
                let base_y = idx as f32 * stride;
                // Track centerline at this depth (mirror of ground formula)
                let tcx = (base_y * 0.0024 + race_phase * 0.6).sin() * 90.0
                        + (base_y * 0.0058 + race_phase * 1.1 + 1.7).sin() * 40.0;
                let side = if idx & 1 == 0 { -1.0 } else { 1.0 };
                let t_wx = tcx + side * 130.0;

                // World → camera (Mode 7 inverse)
                let rx = t_wx - cam_x;
                let ry = base_y - cam_y;
                let dxc =  rx * cos_a + ry * sin_a;
                let zc  = -rx * sin_a + ry * cos_a;
                if !(6.0..=2200.0).contains(&zc) { continue; }

                let sx = half_w + (dxc * focal) / zc;
                let dy_proj = focal / zc;
                let sy_base = h_y + dy_proj;

                // Totem ≈ 110 world-units tall, 18-ish world-units wide
                let h_px = (focal * 110.0 / zc).max(3.0).min(ch as f32 * 1.4);
                let w_px = (h_px * 0.16).max(1.0);
                let left  = (sx - w_px * 0.5).floor() as i32;
                let right = (sx + w_px * 0.5).ceil()  as i32;
                if right < 0 || left >= cw as i32 { continue; }
                let top = (sy_base - h_px).floor() as i32;
                let bot = sy_base.ceil() as i32;

                let fog_t = (zc * 0.0035).clamp(0.0, 0.85);
                let fog_t_inv = 1.0 - fog_t;

                // Beacon pulse — phase tied to k so pillars chase past you
                let pulse = (race_phase * 2.4 + idx as f32 * 0.7).sin() * 0.35 + 0.65;

                let yt0 = top.max(0);
                let yt1 = bot.min(ch as i32);
                let xt0 = left.max(0);
                let xt1 = right.min(cw as i32);

                for ypx in yt0..yt1 {
                    let yt = ((sy_base - ypx as f32) / h_px).clamp(0.0, 1.0);
                    // Tri-band: pink base / cyan body / yellow crown
                    let (cr, cg, cb) = if yt < 0.32 {
                        (255.0, 90.0,  200.0)
                    } else if yt < 0.68 {
                        (90.0,  240.0, 255.0)
                    } else {
                        (255.0, 230.0, 110.0)
                    };
                    // Slim vertical highlight in the middle of the column
                    // gives the impression of a glowing tube.
                    let nr = (cr * pulse) * fog_t_inv + sky_horiz[0] * fog_t;
                    let ng = (cg * pulse) * fog_t_inv + sky_horiz[1] * fog_t;
                    let nb = (cb * pulse) * fog_t_inv + sky_horiz[2] * fog_t;
                    let nr = nr.min(255.0);
                    let ng = ng.min(255.0);
                    let nb = nb.min(255.0);
                    let row_off = (ypx as usize) * cw_us * 4;
                    for xpx in xt0..xt1 {
                        let i = row_off + (xpx as usize) * 4;
                        let prev_r = out[i]     as f32;
                        let prev_g = out[i + 1] as f32;
                        let prev_b = out[i + 2] as f32;
                        out[i]     = lerp(prev_r, nr, track_blend) as u8;
                        out[i + 1] = lerp(prev_g, ng, track_blend) as u8;
                        out[i + 2] = lerp(prev_b, nb, track_blend) as u8;
                    }
                }
            }
        }

        // ── SPARKLES (frutiger-aero diamond glints in the upper sky) ──
        // Deterministic positions from a simple LCG so they don't strobe
        // each frame.  Each sparkle has a personal phase that twinkles
        // independently, and a slow horizontal drift coupled to cloud_t.
        if sparkle_amt > 0.001 {
            let count = (180.0 * sparkle_amt) as usize;
            let h_y_i = h_y as i32;
            let mut rng: u32 = 0x9E37_79B9;
            for n in 0..count {
                rng = rng.wrapping_mul(1664525).wrapping_add(1013904223);
                let bx = (rng >> 16) as f32 / 65536.0;
                rng = rng.wrapping_mul(1664525).wrapping_add(1013904223);
                let by = (rng >> 16) as f32 / 65536.0;
                rng = rng.wrapping_mul(1664525).wrapping_add(1013904223);
                let bp = (rng >> 16) as f32 / 65536.0;

                let drift = (cloud_t * 0.12 + n as f32 * 0.7).sin() * 18.0;
                let cx = (bx * cw as f32 + drift).rem_euclid(cw as f32);
                let cy = by * h_y * 0.92;  // upper sky only
                let phase = bp * std::f32::consts::TAU + cloud_t * (1.4 + bp * 1.1);
                let twinkle = (phase.sin() * 0.5 + 0.5).powi(4);
                if twinkle < 0.04 { continue; }
                let intensity = twinkle * sparkle_amt;
                // Diamond/cross sprite: center pixel + 4-axis rays
                let cx_i = cx as i32;
                let cy_i = cy as i32;
                if cx_i < 1 || cy_i < 1 || cx_i >= cw as i32 - 1 || cy_i >= h_y_i - 1 { continue; }
                let cw_i = cw as i32;
                // 5-px cross: write additive glow
                let pts = [
                    ( 0i32,  0i32, 1.00),
                    (-1,  0, 0.55), (1, 0, 0.55),
                    ( 0, -1, 0.55), (0, 1, 0.55),
                    (-2,  0, 0.20), (2, 0, 0.20),
                    ( 0, -2, 0.20), (0, 2, 0.20),
                ];
                for (dx, dy, w) in pts.iter() {
                    let xx = cx_i + dx;
                    let yy = cy_i + dy;
                    if xx < 0 || yy < 0 || xx >= cw_i || yy >= ch as i32 { continue; }
                    let i = (yy as usize) * cw_us * 4 + (xx as usize) * 4;
                    let s = intensity * w;
                    let pr = out[i]     as f32 + 255.0 * s;
                    let pg = out[i + 1] as f32 + 230.0 * s;
                    let pb = out[i + 2] as f32 + 255.0 * s;
                    out[i]     = pr.min(255.0) as u8;
                    out[i + 1] = pg.min(255.0) as u8;
                    out[i + 2] = pb.min(255.0) as u8;
                }
            }
        }

        // ── KALEIDOSCOPE / HUE-ROTATE post-pass ────────────────────
        // YIQ hue rotation with rotation amount modulated by polar
        // coordinates of the pixel, plus a radial brightness pulse.
        // In-place; no second buffer.  Blends smoothly via psyche_amt.
        if psyche_amt > 0.001 {
            let cx_f = cw as f32 * 0.5;
            let cy_f = ch as f32 * 0.5;
            let inv_diag = 1.0 / ((cw as f32 * cw as f32 + ch as f32 * ch as f32).sqrt() * 0.5);
            for py in 0..ch_us {
                let dy_p = py as f32 - cy_f;
                let row_off = py * cw_us * 4;
                for px in 0..cw_us {
                    let dx_p = px as f32 - cx_f;
                    let rad = (dx_p * dx_p + dy_p * dy_p).sqrt() * inv_diag; // 0..1
                    let ang = dy_p.atan2(dx_p);

                    // Hue rotation amount swirls outward and rotates over time.
                    // Slowed substantially: race_phase coupling 1.6→0.35 and the
                    // radial frequency 8→3 to keep the swirl readable instead of
                    // strobing across rings.
                    let hue = race_phase * 0.35 + ang * 2.5 + rad * 3.0
                            + (cloud_t * 0.18).sin() * 1.2;
                    let cosh = hue.cos();
                    let sinh = hue.sin();

                    let i = row_off + px * 4;
                    let r0 = out[i]     as f32;
                    let g0 = out[i + 1] as f32;
                    let b0 = out[i + 2] as f32;

                    // RGB → YIQ
                    let y =  0.299 * r0 + 0.587 * g0 + 0.114 * b0;
                    let ii = 0.596 * r0 - 0.275 * g0 - 0.321 * b0;
                    let qq = 0.212 * r0 - 0.523 * g0 + 0.311 * b0;
                    // rotate I/Q
                    let i2 = ii * cosh - qq * sinh;
                    let q2 = ii * sinh + qq * cosh;
                    // back → RGB
                    let mut r1 = y + 0.956 * i2 + 0.621 * q2;
                    let mut g1 = y - 0.272 * i2 - 0.647 * q2;
                    let mut b1 = y - 1.106 * i2 + 1.703 * q2;

                    // Saturation boost via lerp away from luminance
                    let sat = 1.0 + psyche_amt * 0.45;
                    r1 = y + (r1 - y) * sat;
                    g1 = y + (g1 - y) * sat;
                    b1 = y + (b1 - y) * sat;

                    // Radial brightness pulse: gentle rings sweep outward.
                    // Cut amplitude (60→18) and slowed (race_phase 6→1.2) to
                    // remove the seizure-strobe at full psyche_amt.
                    let pulse = ((rad * 6.0 - race_phase * 1.2).sin() * 0.5 + 0.5).powi(2);
                    let lift = pulse * 18.0 * psyche_amt;

                    let blend = psyche_amt;
                    let rf = lerp(r0, r1 + lift, blend).clamp(0.0, 255.0);
                    let gf = lerp(g0, g1 + lift, blend).clamp(0.0, 255.0);
                    let bf = lerp(b0, b1 + lift, blend).clamp(0.0, 255.0);

                    out[i]     = rf as u8;
                    out[i + 1] = gf as u8;
                    out[i + 2] = bf as u8;
                }
            }
        }

        out
    }

    pub fn tex_w(&self) -> u32 { TEX_W as u32 }
    pub fn tex_h(&self) -> u32 { TEX_H as u32 }
}
