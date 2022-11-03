import RestaurantSource from '../../data/restaurant-source'
import { restaurantItemTemplate } from '../templates/template-creator'

const home = {
    async render() {
        return `
            <div class="judul">
                <h1 tabindex="0">Daftar Restaurant</h1>
            </div>
            <div id="restaurants" class="posts"></div>
        `;
    },

    async afterRender() {
        const restaurants = await RestaurantSource.recommendationRestaurant()
        const restaurantsContainer = document.querySelector('#restaurants')
        restaurants.forEach(restaurant => {
            restaurantsContainer.innerHTML += restaurantItemTemplate(restaurant)
        })
    },
};

export default home;