// refactor of messy.js after running the prompt past ChatGPT and applying my
// accept/reject/modify decisions (see refactor-notes.md for the full table).
//
// the goal: keep the SAME outputs (Average: 87.6, Highest: 95) but with the
// scores in one array and the work split into named functions I can read.

const scores = [85, 92, 78, 88, 95];

// average: sum the array with for...of, divide by length.
// rejected the .reduce() version AI handed me - I can read this loop, I cannot
// yet read reduce without stopping to think. clarity first, idioms later.
function getAverage(arr) {
  if (arr.length === 0) {
    return 0; // guard so we never divide by zero
  }
  let total = 0;
  for (const n of arr) {
    total += n;
  }
  return total / arr.length;
}

// highest: walk the array, track the best so far.
// rejected Math.max(...arr) - the spread operator is a Phase 2 thing and I
// want to be able to defend every line in code review.
function getHighest(arr) {
  let best = arr[0];
  for (const n of arr) {
    if (n > best) {
      best = n;
    }
  }
  return best;
}

console.log("Average:", getAverage(scores));
console.log("Highest:", getHighest(scores));
