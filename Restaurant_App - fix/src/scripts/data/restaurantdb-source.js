import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantDbSource {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.RESTO_LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL(id));
      if (!response.ok) {
        throw new Error(`Error ${response.status}: ${response.statusText}`);
      }
      const responseJson = await response.json();
      return responseJson.restaurant;
    } catch (error) {
      console.error('Error fetching restaurant detail:', error);
      return null;
    }
  }
}

export default RestaurantDbSource;
