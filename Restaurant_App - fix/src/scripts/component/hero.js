class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="hero">
                <div class="hero__inner">
                <h2 tabindex="0"  class="hero__title">Selamat datang di Website Restoran</h2>
                <p class="hero__tagline">Disini kami menyediakan restoran dari beberapa wilayah di Indonesia yang bisa anda lihat dibawah ini</p>
                <button>Explore</button>
                </div>
            </div>
          `;
  }
}

customElements.define('hero-bar', Hero);
