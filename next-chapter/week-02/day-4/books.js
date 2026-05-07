// step 2: original 4 books, plus step 3a: 2 more
const books = [
  { title: "Atomic Habits", author: "James Clear" },
  { title: "Educated", author: "Tara Westover" },
  { title: "The Mountain Is You", author: "Brianna Wiest" },
  { title: "Becoming", author: "Michelle Obama" },
  // step 3a additions
  { title: "The Soul of a New Machine", author: "Tracy Kidder" },
  { title: "Operating Systems: Three Easy Pieces", author: "Remzi Arpaci-Dusseau" },
];

// step 3c: render wrapped in a function that takes the array and a target list.
// keeping the target as a param so the same function works for both <ul>s on
// the page. clearing children up front so re-renders do not stack.
function renderBooks(bookArray, listEl) {
  // remove existing children without touching innerHTML - safer habit, no
  // chance of accidentally parsing anything as HTML
  while (listEl.firstChild) {
    listEl.removeChild(listEl.firstChild);
  }

  for (const book of bookArray) {
    const li = document.createElement("li");

    // step 3b: title in <strong>, author in normal text.
    // building two child nodes instead of innerHTML so titles and authors are
    // always treated as text. (none of these strings are user input today, but
    // the habit is cheap and saves me later.)
    const titleEl = document.createElement("strong");
    titleEl.textContent = book.title;

    const authorText = document.createTextNode(` -- ${book.author}`);

    li.appendChild(titleEl);
    li.appendChild(authorText);
    listEl.appendChild(li);
  }
}

const listA = document.getElementById("book-list");
renderBooks(books, listA);

// step 3c bonus: call again with a different array of 2 books into the second ul.
const shortList = [
  { title: "The C Programming Language", author: "Kernighan & Ritchie" },
  { title: "Designing Data-Intensive Applications", author: "Martin Kleppmann" },
];

const listB = document.getElementById("book-list-b");
renderBooks(shortList, listB);
