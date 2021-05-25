function addToDo() {
  // Tu código acá:
  let inputField = document.querySelector('#toDoInput');

  if (!inputField.value) return;

  let toDoObj = new ToDo(inputField.value);
  toDoItems.unshift(toDoObj);
  inputField.value = '';
  sessionStorage.setItem('todosList', JSON.stringify(toDoItems));
  displayToDos();
}

class Input extends HTMLElement {
  constructor() {
    // 1er paso del lifecycle
    super();
    this.inputContainer = document.createElement('div');
    this.box = document.createElement('input');
    this.buttonete = document.createElement('button');
  }

  connectedCallback() {
    // 2do paso del lifecycle
    this.box.type = 'text';
    this.box.placeholder = 'To-Do description...';
    this.box.id = 'toDoInput';
    this.box.classList.add(
      'w-full',
      'h-12',
      'rounded-lg',
      'px-4',
      'font-semibold',
      'text-lg',
      'outline-none',
      'mb-2'
    );
    this.buttonete.type = 'button';
    this.buttonete.id = 'addButton';
    this.buttonete.classList.add(
      'w-24',
      'h-12',
      'border-2',
      'border-primaryYellow',
      'rounded-lg',
      'bg-primaryYellow',
      'font-bold'
    );
    this.buttonete.innerText = 'ADD';
    this.buttonete.onclick = () => addToDo();
    this.inputContainer.id = 'inputContainer';
    this.inputContainer.classList.add(
      'w-full',
      'box-border',
      'text-black',
      'flex',
      'flex-wrap',
      'justify-center',
      'mb-2'
    );
    this.inputContainer.append(this.box, this.buttonete);

    this.appendChild(this.inputContainer); // this hace referencia a la etiqueta html
  }
}

// Definición de la etiqueta HTML basada en el componente:
customElements.define('custom-input', Input);
// customElements.define('nombre-etiqueta', ClaseComponente);
