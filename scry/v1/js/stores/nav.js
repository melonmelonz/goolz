import{Store as e}from"../store.js";export const navStore=new e(null);export function gotoIn(o,t){navStore.set({route:o,address:t>>>0,ts:Date.now()})}
