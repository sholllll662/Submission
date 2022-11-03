import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
    static async recommendationRestaurant() {
        const response = await fetch(API_ENDPOINT.HOME);
        const responseJson = await response.json();
        if (!responseJson.error) return responseJson.restaurants
        else return responseJson.message
    }

    static async detailRestaurant(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        return response.json();
    }

    static async addNewReview (dataJSON) {
        const response = await fetch(API_ENDPOINT.REVIEW, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataJSON)
        })
        const responseJSON = await response.json()
        if (!responseJSON.error) return responseJSON.message
        else return responseJSON.message
    }
}

export default RestaurantSource;