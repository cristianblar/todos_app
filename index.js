let toDoItems = [];

const storedList = sessionStorage.getItem('todosList');

if (!storedList) {
  sessionStorage.setItem('todosList', '');
} else {
  toDoItems = [...JSON.parse(storedList)];
}

function ToDo(description) {
  this.description = description;
  this.complete = false;
}

ToDo.prototype.completeToDo = function () {
  this.complete = true;
};

function buildToDo(toDo, index) {
  // Tu código acá:
  let toDoShell = document.createElement("div");
  toDoShell.className = "toDoShell";
  let tailwindClassesShell = ["w-full", "h-12", "mb-2"];
  toDoShell.classList.add(...tailwindClassesShell);

  let toDoText = document.createElement("span");
  toDoText.id = index;

  toDoText.innerHTML = toDo.description;
  toDoText.addEventListener("click", completeToDo);
  toDo.complete ? (toDoText.className = "completeText") : "";
  let tailwindClassesSpan = [
    "block",
    "w-full",
    "h-full",
    "rounded-lg",
    "px-4",
    "font-semibold",
    "text-lg",
    "text-left",
    "bg-white",
    "text-lg",
    "leading-10",
    "pt-1",
    "cursor-pointer"
  ];
  toDoText.classList.add(...tailwindClassesSpan);

  toDoShell.appendChild(toDoText);

  return toDoShell;
}

function buildToDos(toDos) {
  // Tu código acá:
  return toDos.map(buildToDo);
}

function displayToDos() {
  // Tu código acá:
  let toDoContainer = document.querySelector("#toDoContainer");
  toDoContainer.innerHTML = "";
  toDoContainer.append(...buildToDos(toDoItems));
}

function completeToDo(event) {
  const index = event.target.id;
  // Tu código acá:
  toDoItems[index].complete = true;
  const removed = toDoItems.splice(index, 1);
  toDoItems.push(removed[0]);
  sessionStorage.setItem('todosList', JSON.stringify(toDoItems));
  displayToDos();
}

if (toDoItems.length) displayToDos();
