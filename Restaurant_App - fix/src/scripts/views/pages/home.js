import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantListTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="content">
        <article class="headline">
            <div class="headline__content">
              <h2 tabindex="0" class="headline__title">
                Tidak Perlu Khawatir dengan Rasa
              </h2>
              <p class="headline__desc">
                Kami merekomendasikan berbagai restoran pilihan terbaik dari hasil
                survey
              </p>
            </div>
          </article>
          <div class="posts" id="restaurants"></div>

      </div>
        
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
    const restaurants = await RestaurantDbSource.restaurantList();
    const restoContainer = document.querySelector('#restaurants');
    const hero = document.querySelector('hero-bar');

    console.log(restaurants);
    hero.style.display = 'block';

    restaurants.forEach((restaurant) => {
      restoContainer.innerHTML += createRestaurantListTemplate(restaurant);
    });
  },
};

export default Home;
