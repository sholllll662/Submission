import RestaurantSource from '../../data/restaurant-source'
import UrlParser from '../../routes/url-parser'
import { restaurantDetailTemplate, createLikeButtonTemplate  } from '../templates/template-creator'
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
    async render() {
        return `
          <div>
            <h1 class="judul" tabindex="0">Detail Restaurant</h1>
            <div id="restaurant" class="detail"></div>
          </div>
          <div id="likeButtonContainer"></div>
        `;
    },

    async afterRender() {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await RestaurantSource.detailRestaurant(url.id)
      const restaurantContainer = document.querySelector('#restaurant')
      restaurantContainer.innerHTML = restaurantDetailTemplate(restaurant.restaurant)
      //const likeButtonContainer = document.querySelector('#likeButtonContainer');
      //likeButtonContainer.innerHTML = createLikeButtonTemplate(); 
      //Pake ini bisa 

      //tpi kok pake ini ga bisaaaaa
      LikeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        restaurant: {
          id: restaurant.id,
          name: restaurant.name,
          pictureId: restaurant.pictureId,
          rating: restaurant.rating,
          city: restaurant.city
        },
      });

      document.querySelector('#sendReview').addEventListener('click', _ => {
        const formData = new FormData(document.querySelector('#addReview'))
        const object = {}
        for (const pair of formData.entries()) {
          object[pair[0]] = pair[1]
        }
        RestaurantSource.addNewReview(object).then(resp => {
          if (resp === 'success') location.reload(true)
        }).catch(err => alert(err))
      })
    },

    
};

export default Detail;