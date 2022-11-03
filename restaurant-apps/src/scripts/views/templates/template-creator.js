import CONFIG from '../../globals/config';

const restaurantDetailTemplate = (restaurant) => {
    let reviews = ''
    let foods = ''
    let drinks = ''
    restaurant.menus.foods.forEach(food => {
        foods += `<li>${food.name}</li>`
    })
    restaurant.menus.drinks.forEach(drink => {
        drinks += `<li>${drink.name}</li>`
    })
    restaurant.customerReviews.forEach(review => {
        reviews += reviewTemplate(review)
    })
    const show =`
    <h2 class="detail_title">${restaurant.name}</h2>
    <img class="detail_picture" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
    <div class="detail_information">
        <h3>Information</h3>
        <h4>Address</h4>
        <p>${restaurant.address}, ${restaurant.city}</p>
        <h4>Rating</h4>
        <p>${restaurant.rating}</p>
    </div>
    <div class="detail_desc">
        <h3>Description</h3>
        <p>${restaurant.description}</p>
    </div>
    <div class="detail_menu">
    <h3>Menu</h3>
        <div class="FoodAndDrink">
            <h4>Foods</h4>
            <ul>
            ${foods}
            </ul>
        </div>
        <div class="FoodAndDrink">
            <h4>Drinks</h4>
                <ul>
                ${drinks}
                </ul>
        </div>
    </div>
    <div class="restaurant-review_container">
    <div class="restaurant-review">
    <h2 >Review</h2>
        <div class="restaurant-review_form">
            <form id="addReview">
                <input type="text" id="restaurantid" name="id" value="${restaurant.id}" hidden></input>
                <p>
                    <label class="input-label" for="username">Masukkan nama Anda</label>
                    <input type="text" id="username" name="name" required></input>
                </p>
                <p>
                    <label class="textarea-label" for="review">Ceritakan pengalaman Anda </label>
                    <textarea name="review" name="review" required></textarea>
                </p>
                <p>
                    <button type="button" id="sendReview">Kirim</button>
                </p>
            </form>
        </div>
    </div>
    ${reviews}
    </div>
    `
    return show;
}

const reviewTemplate = (review) => `
    <div class="restaurant-review">
        <div class="restaurant-review_item">
            <h5>${review.date}</h5>
            <h4>${review.name}</h4>
            <p>${review.review}</p>
        </div>
    </div>`

const restaurantItemTemplate = (restaurant) => `
    
    
    <div tabindex="0" class="post-item">
        <div class="post-item__content">
            <img class="post-item__thumbnail" alt="${restaurant.name}"
                src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
            <h1 ><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h1>
            <h2 class="post-item__lokasidanrating">
                ⭐️${restaurant.rating} ${restaurant.city}
            </h2>
            
        </div>
        </div>
    `;

const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;
export { 
    restaurantDetailTemplate,
    restaurantItemTemplate,
    createLikeButtonTemplate,
    createLikedButtonTemplate,
};