// starting point - the spec's procedural mess. saved as-is so I can diff
// against clean.js later.

const score1 = 85;
const score2 = 92;
const score3 = 78;
const score4 = 88;
const score5 = 95;

const sum = score1 + score2 + score3 + score4 + score5;
const average = sum / 5;
console.log("Average:", average);

let highest = score1;
if (score2 > highest) highest = score2;
if (score3 > highest) highest = score3;
if (score4 > highest) highest = score4;
if (score5 > highest) highest = score5;
console.log("Highest:", highest);
