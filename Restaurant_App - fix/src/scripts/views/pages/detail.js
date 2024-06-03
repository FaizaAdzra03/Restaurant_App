import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
    <div class="detail-container">
      <div id="restaurant" class="restaurant"></div>
      <div id="likeButtonContainer"></div>   
    </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantDbSource.detailRestaurant(url.id);
    const detailContainer = document.querySelector('#restaurant');
    const hero = document.querySelector('hero-bar');
    hero.style.display = 'none';

    detailContainer.innerHTML = createRestaurantDetailTemplate(resto);
    console.log(resto);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: resto.id,
        name: resto.name,
        pictureId: resto.pictureId,
        description: resto.description,
        city: resto.city,
        rating: resto.rating,
      },
    });
  },
};

export default Detail;
