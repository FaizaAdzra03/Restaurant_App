class footerBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="container">
          <h2>Hunger Apps &copy; 2024</h2>
          <p>by Faiza Adzra</p>
        </div>
        `;
  }
}

customElements.define('footer-bar', footerBar);
