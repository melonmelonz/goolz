/* tslint:disable */
/* eslint-disable */

export class Demo {
    free(): void;
    [Symbol.dispose](): void;
    constructor();
    /**
     * JS-callable: drop a seed at normalized texture coords (0..1).
     */
    perturb(fx: number, fy: number): void;
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
     */
    render(cw: number, ch: number, cam_x: number, cam_y: number, cam_a: number, horizon: number, focal: number, pal_phase: number, glow: number, sun_x: number, sun_int: number, cloud_t: number, mtn_phase: number, warp: number, tex_scale: number, track_blend: number, race_phase: number, tunnel_blend: number, sparkle_amt: number, psyche_amt: number, time_of_day: number, aurora_amt: number): Uint8Array;
    /**
     * Advance the Gray-Scott reaction-diffusion simulation.
     * Toroidal boundary so the texture tiles seamlessly under Mode 7.
     */
    step(f: number, k: number, iters: number): void;
    tex_h(): number;
    tex_w(): number;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_demo_free: (a: number, b: number) => void;
    readonly demo_new: () => number;
    readonly demo_perturb: (a: number, b: number, c: number) => void;
    readonly demo_render: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number, o: number, p: number, q: number, r: number, s: number, t: number, u: number, v: number, w: number, x: number) => void;
    readonly demo_step: (a: number, b: number, c: number, d: number) => void;
    readonly demo_tex_h: (a: number) => number;
    readonly demo_tex_w: (a: number) => number;
    readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
    readonly __wbindgen_export: (a: number, b: number, c: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;

/**
 * Instantiates the given `module`, which can either be bytes or
 * a precompiled `WebAssembly.Module`.
 *
 * @param {{ module: SyncInitInput }} module - Passing `SyncInitInput` directly is deprecated.
 *
 * @returns {InitOutput}
 */
export function initSync(module: { module: SyncInitInput } | SyncInitInput): InitOutput;

/**
 * If `module_or_path` is {RequestInfo} or {URL}, makes a request and
 * for everything else, calls `WebAssembly.instantiate` directly.
 *
 * @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
 *
 * @returns {Promise<InitOutput>}
 */
export default function __wbg_init (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
