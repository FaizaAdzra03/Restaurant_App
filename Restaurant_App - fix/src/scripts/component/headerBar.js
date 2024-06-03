class headerBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav class="header-name">
            <div class="logo" href="#" tabindex="0" alt="logo">
                <i class="fa-solid fa-burger"></i>
                <a class="name" href="#">Hunger Apps</a>
            </div>
            <button type="button" id="hamburger" aria-label="navigation-menu" tabindex="0">☰</button>
            <ul class="nav" id="navigation">
                <li><a href="#/home">Home</a></li>
                <li><a href="#/favorite" class="fav-nav">Favorite</a></li>
                <li><a href="https://github.com/FaizaAdzra03">About Us</a></li>
            </ul>
        </nav>  
          `;
  }
}

customElements.define('header-bar', headerBar);
