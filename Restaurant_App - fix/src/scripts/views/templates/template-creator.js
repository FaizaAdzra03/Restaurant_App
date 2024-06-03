// eslint-disable-next-line import/extensions
import CONFIG from '../../globals/config.js';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="detail_container">
    <div class="detail">
        <div class="restaurant_item">
            <div class="restaurant_img">
                <div class="button">
                    <div id="likeButtonContainer"></div>
                </div>
                <picture>
                    <img class="lazyloaded lazyload" 
                    data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}"
                    alt="Restoran ${restaurant.name || '-'} Kota ${restaurant.city}">
                </picture>
            </div>
            <div class="restaurant_detail">
                <div class="restaurant_name">${restaurant.name}</div>
                <p class="restaurant_rating">Rating : ⭐ <span> ${restaurant.rating}</span></p>
                <p class="address"><i class="fas fa-map-marker-alt"></i> <span>${restaurant.address}, ${restaurant.city}</span></p>
                <p class="categories">Kategoriii: <span>${restaurant.categories.map((category) => category.name).join(', ')}</span></p>
                <p>Makanan : </p>
                <span>${restaurant.menus.foods.map((food) => food.name).join(', ')}</span>
                <p>Minuman : </p>
                <span>${restaurant.menus.drinks.map((drink) => drink.name).join(', ')}</span>
            </div>
        </div>     
        <div class="restaurant_desc">
            <div class="menu">Deskripsi :</div>
            <p>${restaurant.description}</p>
        </div>
    </div>    

    <div class="review">
        <h2>Review</h2>
        <div class="card_review">
            ${restaurant.customerReviews.map((review) => `
            <div class="review_item">
                <div class="reviewer_item">
                    <i class="fa-solid fa-circle-user"></i>
                    <div class="reviewer">
                        <p>${review.name}</p>
                        <p>${review.date}</p>
                    </div>
                </div>
                <div class="desc">
                    <p>${review.review}</p>
                </div>
            </div>
            `).join('')}
        </div>
    </div>
</div>

`;

const createRestaurantListTemplate = (restaurant) => `
    <article class="post-item" >
        <p class="location">Kota. ${restaurant.city || '-'}</p>
        <picture>
            <img class="post-item__thumbnail lazyload" 
            data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}"
            alt="Restoran ${restaurant.name || '-'} Kota ${restaurant.city}">
        </picture>
        <div class="post-item__content">
            <p class="post-item__date">Rating : ⭐ <span> ${restaurant.rating || '-'}</span></p>
            <h1 class="restaurant_name"><a href="/#/detail/${restaurant.id}">${restaurant.name || '-'}</a></h1>
            <p class="post-item__description">${restaurant.description || '-'}</p>
        </div>
    </article>
`;

const createLikeRestaurantButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantListTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
