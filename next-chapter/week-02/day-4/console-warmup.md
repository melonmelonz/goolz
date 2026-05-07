# Ex1 - console warmup

Pure console session, no page. DevTools open, Console tab.

## Given

```js
function greet(name) { return `Hello, ${name}!`; }
greet("Alex");                  // "Hello, Alex!"
greet("Sam");                   // "Hello, Sam!"

function addNumbers(a, b) { return a + b; }
addNumbers(3, 4);               // 7
addNumbers(10, 25);             // 35

function isEven(n) { return n % 2 === 0; }
isEven(4);                      // true
isEven(7);                      // false
```

## My turn

```js
function square(n) { return n * n; }
square(5);                      // 25
square(-3);                     // 9

function shout(message) { return message.toUpperCase(); }
shout("hello");                 // "HELLO"
shout("don't yell at me");      // "DON'T YELL AT ME"

function isLong(text) { return text.length > 10; }
isLong("short");                // false
isLong("this string is long");  // true
```

## Notes

- `n * n` vs `Math.pow(n, 2)` vs `n ** 2` all work. `n * n` reads cleanest for the
  squared case. `**` is the one I'd reach for if the exponent were variable.
- `isLong` boundary: `> 10` means an 11-char string returns true, exactly 10 returns
  false. The spec said "more than 10" so `>` is right. `>=` would be a bug.
- `shout` blows up on non-strings (`shout(5)` -> TypeError). For console drills I'm
  not guarding it. In real code I'd type-check at the boundary or coerce with
  `String(message).toUpperCase()`.
