# Ex4 - "AI, refactor my code"

Prompt I sent to ChatGPT (paraphrased from the spec):

> Refactor this JavaScript so the scores live in an array, and use functions
> to compute the average and the highest score. Use for...of loops if needed.
> Add comments. Modern JS only - const/let, no var.
>
> [paste of messy.js]

What it gave me back, line by line, and what I did with each change.

| AI's change | What it does | My decision | Why |
|---|---|---|---|
| Moved the five `score1..score5` consts into a single `scores` array | One source of data, length is no longer hardcoded | Accept | This is the whole point of the exercise. Adding a sixth score now means appending to the array, not editing five places. |
| Wrapped sum/divide into `getAverage(arr)` | Reusable, named, testable | Accept | Naming the operation also documents intent better than a comment would. |
| Used `arr.reduce((a, b) => a + b, 0)` for the sum | Concise, idiomatic JS | **Modify** -> swapped to `for...of` accumulator | I cannot read `reduce` fluently yet. If a teammate or future-me has to debug a sum, the loop is obvious; reduce would make me stop and parse it. Phase 2 problem. |
| Wrapped the highest-finder into `getHighest(arr)` | Reusable, named | Accept | Same logic as average - good split. |
| Used `Math.max(...scores)` for the highest | One line, idiomatic | **Modify** -> swapped to `for...of` with running max | Spread operator is Phase 2. I can defend a `for...of` loop in a verbal demo today. I cannot defend `...` yet. |
| Added a JSDoc-style comment block above each function | Documentation | Modify -> kept it but trimmed to one line each | Full JSDoc is overkill for two private helpers in a 25-line file. A single intent line is the right dose. |
| No empty-array guard in `getAverage` | n/a | **Reject the omission** -> added `if (arr.length === 0) return 0;` | Dividing by zero gives `NaN`, which silently propagates. Cheap guard, fewer surprises. Boundary check at the only place the size matters. |
| Used `let total = 0` for accumulator | Reassignment is real here | Accept | Correct use of `let`. const would not compile (well, would throw on the reassignment). |
| Replaced `console.log("Average:", average)` exactly as before | Output unchanged | Accept | Spec wants the numbers to match. `Average: 87.6` and `Highest: 95`. Verified with `node clean.js`. |

## What I learned about the workflow

- AI defaults to whatever is fanciest. `reduce` and spread are not wrong, they
  are just above my reading level today, and "code I cannot debug at 2am" is
  worse than verbose code.
- The boundary checks (empty array) are the kind of thing AI skips and I have
  to add. That is the part of this exercise that maps to systems thinking -
  what happens at the edges.
- Accept/reject/modify took maybe 6 minutes once I had the diff in front of
  me. Faster than writing it myself, and I understand every line.

## Output verification

```
$ node messy.js
Average: 87.6
Highest: 95

$ node clean.js
Average: 87.6
Highest: 95
```

Same numbers. Refactor is behavior-preserving.
