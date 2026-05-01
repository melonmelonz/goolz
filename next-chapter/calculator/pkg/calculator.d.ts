/* tslint:disable */
/* eslint-disable */

export class Calculator {
    free(): void;
    [Symbol.dispose](): void;
    back(): number;
    clear(): number;
    current_op(): number;
    digit(d: number): number;
    dot(): number;
    equals(): number;
    has_op(): boolean;
    negate(): number;
    constructor();
    op(operator: number): number;
    percent(): number;
}

/**
 * Basic binary operation — called by calcDoOp() in JS
 */
export function calculate(a: number, op: string, b: number): number;

/**
 * Scientific unary functions — called by calcSciFunc() in JS
 * mode encodes inv/hyp/deg as a bitmask: bit0=inv, bit1=hyp, bit2=deg
 */
export function sci(func: string, x: number, mode: number): number;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
    readonly memory: WebAssembly.Memory;
    readonly __wbg_calculator_free: (a: number, b: number) => void;
    readonly calculate: (a: number, b: number, c: number, d: number) => number;
    readonly calculator_back: (a: number) => number;
    readonly calculator_clear: (a: number) => number;
    readonly calculator_current_op: (a: number) => number;
    readonly calculator_digit: (a: number, b: number) => number;
    readonly calculator_dot: (a: number) => number;
    readonly calculator_equals: (a: number) => number;
    readonly calculator_has_op: (a: number) => number;
    readonly calculator_negate: (a: number) => number;
    readonly calculator_new: () => number;
    readonly calculator_op: (a: number, b: number) => number;
    readonly calculator_percent: (a: number) => number;
    readonly sci: (a: number, b: number, c: number, d: number) => number;
    readonly __wbindgen_export: (a: number, b: number) => number;
    readonly __wbindgen_export2: (a: number, b: number, c: number, d: number) => number;
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
