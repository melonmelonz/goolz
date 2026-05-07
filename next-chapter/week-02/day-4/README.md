# Week 2 Day 4 - JavaScript Fundamentals

Variables, functions, conditionals, loops, arrays, objects. The four shapes
AI keeps generating that I want to be able to read and modify on sight.

## Files

| File | Exercise | What it is |
|---|---|---|
| `console-warmup.md` | Ex1 | Console-only drill: `square`, `shout`, `isLong`. Recorded so I can re-run. |
| `loops.html` | Ex2 | Five greetings, then numbered, then filtered, then collected. Plus my 5 takeaways from the week. |
| `books.html` + `books.js` | Ex3 | Render an array of `{title, author}` objects into a `<ul>`. `renderBooks(arr, listEl)` reused for two different lists on the page. |
| `messy.js` | Ex4 (input) | The procedural starting point with `score1..score5`. |
| `clean.js` | Ex4 (output) | Refactor with my accept/reject/modify decisions applied. |
| `refactor-notes.md` | Ex4 (decisions) | The full table of what AI suggested and what I did with each line. |
| `todo.html` + `todo.js` | Ex5 | Mini-app: array of `{text, done}`, render/mutate/re-render pattern, Enter-to-add, checkbox cross-out, clear-all. |

## How to run

Static files. Either open the HTML files directly in the browser, or:

```bash
cd ~/dev/goolz/next-chapter/week-02/day-4
python3 -m http.server 8000
# then open http://localhost:8000/todo.html etc.
```

The Ex4 scripts are node-runnable since they only touch `console.log`:

```bash
node messy.js
node clean.js
```

Both should print `Average: 87.6` and `Highest: 95`.

## Verbal demo function (for the peer mini-demo block)

Picking the 5-line `getHighest` from `clean.js`:

```js
function getHighest(arr) {
  let best = arr[0];
  for (const n of arr) {
    if (n > best) {
      best = n;
    }
  }
  return best;
}
```

Read literally: function getHighest takes arr, declares best initialized to
arr at index zero, walks each n in arr, replaces best when n is greater,
returns best.

Plain English: "Walk the array, remember the largest value seen so far,
return it."

One thing I would change: `best = arr[0]` quietly returns `undefined` if the
array is empty, which then propagates through any later comparison. I would
either guard at the top (`if (arr.length === 0) return null;`) or document
that the function assumes a non-empty array. Same conversation as the
divide-by-zero in `getAverage`. Boundaries are where bugs live.
