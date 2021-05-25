class Header extends HTMLElement {
  constructor() {
    // 1er paso del lifecycle
    super();
    this.container = document.createElement('div');
    this.anchor = document.createElement('a');
    this.image = document.createElement('img');
    this.span = document.createElement('span');
  }

  connectedCallback() {
    // 2do paso del lifecycle
    this.anchor.href = 'https://www.soyhenry.com/';
    this.anchor.target = '_blank';
    this.image.src = './assets/henry.png';
    this.anchor.appendChild(this.image);
    this.span.classList.add(
      'text-black',
      'text-lg',
      'font-bold',
      'text-center'
    );
    this.span.innerText = 'Web Components App';
    this.container.id = 'header';
    this.container.classList.add(
      'flex',
      'justify-between',
      'items-center',
      'px-4',
      'py-2',
      'bg-primaryYellow',
      'mb-10'
    );
    this.container.append(this.anchor, this.span);

    this.appendChild(this.container); // this hace referencia a la etiqueta html
  }
}

// Definición de la etiqueta HTML basada en el componente:
customElements.define('custom-header', Header);
// customElements.define('nombre-etiqueta', ClaseComponente);
