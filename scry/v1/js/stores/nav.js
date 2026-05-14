import{Store as n}from"../store.js";export const navStore=new n(null);export function gotoIn(t,e,o){navStore.set({route:t,address:e>>>0,len:typeof o=="number"&&o>0?o:1,ts:Date.now()})}
