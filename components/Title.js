class Title extends HTMLElement {
  constructor() {
    // 1er paso del lifecycle
    super();
    this.container = document.createElement('div');
    this.titulo = document.createElement('h1');
    this.span = document.createElement('span');
  }

  connectedCallback() {
    // 2do paso del lifecycle
    this.titulo.classList.add('text-center', 'text-4xl', 'mb-10');
    this.titulo.innerText = 'To-Do App';
    this.span.id = 'createdBy';
    this.span.classList.add('block', 'text-center', 'mb-10');
    this.span.innerText = 'App created by: @cristianblar';
    this.container.append(this.titulo, this.span);

    this.appendChild(this.container); // this hace referencia a la etiqueta html
  }
}

// Definición de la etiqueta HTML basada en el componente:
customElements.define('custom-title', Title);
// customElements.define('nombre-etiqueta', ClaseComponente);
