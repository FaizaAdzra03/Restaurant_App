import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantListTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
    <div class="fav__container">
      <div class="fav__content">
        <h2 class="fav__content__heading">Your Favorite Restaurant</h2>
          <div class="posts" id="fav-restaurants"></div>
      </div> 
      <div id="empty-message" class="empty-message" style="display: none;">
        <h3>Tidak ada Restaurant yang Disukai</h3>
      </div>    
   </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
    const restoContainer = document.querySelector('#fav-restaurants');
    const hero = document.querySelector('hero-bar');
    const emptyMessage = document.querySelector('#empty-message');

    hero.style.display = 'none';
    if (restaurants.length === 0) {
      emptyMessage.style.display = 'block';
    } else {
      emptyMessage.style.display = 'none';
      restaurants.forEach((restaurant) => {
        restoContainer.innerHTML += createRestaurantListTemplate(restaurant);
      });
    }
    // restaurants.forEach((restaurant) => {
    //   restoContainer.innerHTML += createRestaurantListTemplate(restaurant);
    // });
  },
};

export default Favorite;
