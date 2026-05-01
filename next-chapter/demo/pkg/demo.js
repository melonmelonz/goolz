/* @ts-self-types="./demo.d.ts" */

export class Demo {
    __destroy_into_raw() {
        const ptr = this.__wbg_ptr;
        this.__wbg_ptr = 0;
        DemoFinalization.unregister(this);
        return ptr;
    }
    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_demo_free(ptr, 0);
    }
    constructor() {
        const ret = wasm.demo_new();
        this.__wbg_ptr = ret;
        DemoFinalization.register(this, this.__wbg_ptr, this);
        return this;
    }
    /**
     * JS-callable: drop a seed at normalized texture coords (0..1).
     * @param {number} fx
     * @param {number} fy
     */
    perturb(fx, fy) {
        wasm.demo_perturb(this.__wbg_ptr, fx, fy);
    }
    /**
     * Render the full scene.
     *
     * `cw` × `ch` — output pixel grid (low-res render buffer; canvas upscales).
     * `cam_x`, `cam_y`, `cam_a` — camera position and yaw (radians).
     * `horizon` — fraction (0..1) of `ch` where the ground meets the sky.
     * `focal` — pseudo-focal length (larger ⇒ flatter ground, shorter ⇒ steep).
     * `pal_phase` — palette rotation in [0..1) so colors cycle over time.
     * `glow` — 0..1, brightens the texture rim around bright V.
     * `sun_x` — 0..1 horizontal position of the sun on screen.
     * `sun_int` — 0..1 sun intensity (lets you pulse it gently).
     * `cloud_t` — drifting phase for cumulus clouds.
     * `mtn_phase` — horizontal phase for mountain parallax.
     * `warp` — 0..1, amplitude of rolling-hill undulation in the ground.
     * `tex_scale` — texture sampling rate; lets acts change "geographic
     *               scale" of the ground (jungle vs. coral granularity).
     * `track_blend` — 0..1, how visible the race track is (0 = pure RD
     *                 wilderness, 1 = full asphalt road carved through).
     * `race_phase` — phase that drives the track-centerline winding.
     * `tunnel_blend` — 0..1, ceiling-mirror blend that turns the sky into
     *                  a Mode-7 tunnel ceiling with neon ribs.
     * `sparkle_amt` — 0..1, density of frutiger-aero sparkle particles
     *                 floating across the upper sky.
     * `psyche_amt` — 0..1, post-pass kaleidoscope: per-pixel hue rotation
     *                modulated by polar coords + radial brightness pulse.
     * `time_of_day` — 0..1, drives the sky color LUT (dawn → noon → dusk
     *                 → night → aurora).
     * `aurora_amt` — 0..1, intensity of horizontal aurora bands across
     *                the upper sky (great for night/transition).
     * @param {number} cw
     * @param {number} ch
     * @param {number} cam_x
     * @param {number} cam_y
     * @param {number} cam_a
     * @param {number} horizon
     * @param {number} focal
     * @param {number} pal_phase
     * @param {number} glow
     * @param {number} sun_x
     * @param {number} sun_int
     * @param {number} cloud_t
     * @param {number} mtn_phase
     * @param {number} warp
     * @param {number} tex_scale
     * @param {number} track_blend
     * @param {number} race_phase
     * @param {number} tunnel_blend
     * @param {number} sparkle_amt
     * @param {number} psyche_amt
     * @param {number} time_of_day
     * @param {number} aurora_amt
     * @returns {Uint8Array}
     */
    render(cw, ch, cam_x, cam_y, cam_a, horizon, focal, pal_phase, glow, sun_x, sun_int, cloud_t, mtn_phase, warp, tex_scale, track_blend, race_phase, tunnel_blend, sparkle_amt, psyche_amt, time_of_day, aurora_amt) {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.demo_render(retptr, this.__wbg_ptr, cw, ch, cam_x, cam_y, cam_a, horizon, focal, pal_phase, glow, sun_x, sun_int, cloud_t, mtn_phase, warp, tex_scale, track_blend, race_phase, tunnel_blend, sparkle_amt, psyche_amt, time_of_day, aurora_amt);
            var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
            var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
            var v1 = getArrayU8FromWasm0(r0, r1).slice();
            wasm.__wbindgen_export(r0, r1 * 1, 1);
            return v1;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
     * Advance the Gray-Scott reaction-diffusion simulation.
     * Toroidal boundary so the texture tiles seamlessly under Mode 7.
     * @param {number} f
     * @param {number} k
     * @param {number} iters
     */
    step(f, k, iters) {
        wasm.demo_step(this.__wbg_ptr, f, k, iters);
    }
    /**
     * @returns {number}
     */
    tex_h() {
        const ret = wasm.demo_tex_h(this.__wbg_ptr);
        return ret >>> 0;
    }
    /**
     * @returns {number}
     */
    tex_w() {
        const ret = wasm.demo_tex_w(this.__wbg_ptr);
        return ret >>> 0;
    }
}
if (Symbol.dispose) Demo.prototype[Symbol.dispose] = Demo.prototype.free;
function __wbg_get_imports() {
    const import0 = {
        __proto__: null,
        __wbg___wbindgen_throw_9c75d47bf9e7731e: function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        },
    };
    return {
        __proto__: null,
        "./demo_bg.js": import0,
    };
}

const DemoFinalization = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(ptr => wasm.__wbg_demo_free(ptr, 1));

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

function getStringFromWasm0(ptr, len) {
    return decodeText(ptr >>> 0, len);
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

let wasmModule, wasmInstance, wasm;
function __wbg_finalize_init(instance, module) {
    wasmInstance = instance;
    wasm = instance.exports;
    wasmModule = module;
    cachedDataViewMemory0 = null;
    cachedUint8ArrayMemory0 = null;
    return wasm;
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);
            } catch (e) {
                const validResponse = module.ok && expectedResponseType(module.type);

                if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else { throw e; }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };
        } else {
            return instance;
        }
    }

    function expectedResponseType(type) {
        switch (type) {
            case 'basic': case 'cors': case 'default': return true;
        }
        return false;
    }
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (module !== undefined) {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();
    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }
    const instance = new WebAssembly.Instance(module, imports);
    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;


    if (module_or_path !== undefined) {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (module_or_path === undefined) {
        module_or_path = new URL('demo_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync, __wbg_init as default };
