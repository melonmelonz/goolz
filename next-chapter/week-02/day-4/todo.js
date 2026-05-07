// todo mini-app.
//
// pattern: data lives in `tasks`, render() reflects it, handlers mutate then
// call render(). same loop I will hit again in React next phase, just hand-
// rolled here so I see the moving parts.
//
// each task is an object so I can track done state for the stretch goal:
//   { text: "thing to do", done: false }

const tasks = [];

const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const clearBtn = document.getElementById("clear-btn");
const list = document.getElementById("task-list");
const message = document.getElementById("message");
const countEl = document.getElementById("count");

function setMessage(text) {
  message.textContent = text;
}

function render() {
  // wipe children without touching innerHTML
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  for (const task of tasks) {
    const li = document.createElement("li");
    if (task.done) {
      li.classList.add("done");
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.addEventListener("change", () => {
      task.done = checkbox.checked;
      // toggle class directly on the li - cheaper than re-rendering the
      // whole list for one cosmetic change. the data is already updated.
      li.classList.toggle("done", task.done);
    });

    const textSpan = document.createElement("span");
    textSpan.className = "text";
    textSpan.textContent = task.text;

    li.appendChild(checkbox);
    li.appendChild(textSpan);
    list.appendChild(li);
  }

  // count line - small UX nicety, also a sanity check while building
  const total = tasks.length;
  const done = tasks.filter((t) => t.done).length;
  countEl.textContent = total === 0 ? "" : `${done}/${total} done`;
}

addBtn.addEventListener("click", () => {
  const newTask = input.value.trim();
  if (newTask === "") {
    setMessage("type something first");
    return;
  }
  setMessage("");
  tasks.push({ text: newTask, done: false });
  input.value = "";
  input.focus();
  render();
});

// Enter in the input should add too - small thing, big quality-of-life win.
// without this you have to mouse over to the button every time, which is the
// kind of friction I would notice immediately as a user.
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addBtn.click();
  }
});

clearBtn.addEventListener("click", () => {
  if (tasks.length === 0) {
    return;
  }
  // tasks.length = 0 truncates in place. tasks = [] would reassign the
  // variable, which const forbids. either expresses "empty the list", but
  // keeping the same array reference matters once anything else holds a
  // reference to it.
  tasks.length = 0;
  setMessage("");
  render();
});

render();
