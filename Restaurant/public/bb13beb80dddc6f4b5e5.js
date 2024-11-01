const menuItems = [
    {
        imgSrc: require("../../assets/burger.jpg"),
        desc: "A juicy beef patty nestled between soft buns, topped with crisp lettuce, tomatoes, cheese, and savory sauces, perfect for any craving.",
        original_price: "Rs.199",
        offer_price: "Rs.99"
    },
    {
        imgSrc: require("../../assets/fried_chicken.jpg"),
        desc: "Crispy, golden-brown chicken fried to perfection with tender, juicy meat inside. Seasoned to be flavorful and deliciously addictive every bite.",
        original_price: "Rs.249",
        offer_price: "Rs.129"
    },
    {
        imgSrc: require("../../assets/fries.jpg"),
        desc: "Golden, crunchy, and salted just right, fries are the ultimate side dish—perfectly pairing with ketchup, cheese, or dipping sauces.",
        original_price: "Rs.99",
        offer_price: "Rs.49"
    },
    {
        imgSrc: require("../../assets/hotdog.jpg"),
        desc: "A grilled sausage in a soft bun, topped with mustard, ketchup, onions, and relish, delivering bold, satisfying flavors in every bite.",
        original_price: "Rs.149",
        offer_price: "Rs.79"
    },
    {
        imgSrc: require("../../assets/pasta.jpg"),
        desc: "Classic Italian comfort food, with noodles tossed in rich sauces like marinara or alfredo. It’s filling, versatile, and universally loved.",
        original_price: "Rs.299",
        offer_price: "Rs.149"
    },
    {
        imgSrc: require("../../assets/pizza.jpg"),
        desc: "A crispy crust topped with savory tomato sauce, melted cheese, and various toppings like pepperoni or veggies. Always a crowd-pleaser.",
        original_price: "Rs.399",
        offer_price: "Rs.199"
    },
    {
        imgSrc: require("../../assets/salad.jpg"),
        desc: "Fresh, vibrant mix of greens, vegetables, and optional proteins. Light and nutritious, it’s ideal for a healthy, flavor-packed meal.",
        original_price: "Rs.199",
        offer_price: "Rs.99"
    },
    {
        imgSrc: require("../../assets/sandwich.jpg"),
        desc: "Layers of meats, cheeses, and veggies between slices of bread. Customizable, portable, and always satisfying for any meal or snack.",
        original_price: "Rs.149",
        offer_price: "Rs.79"
    }
];

const menus = document.querySelector('.menus');

function renderMenu(items) {
    items.forEach(food => {
        menus.innerHTML += `
            <div class="menu">
                <img src="${food.imgSrc}" alt="Food item" width="120px">
                <div class="food_detail">
                    <p class="desc">${food.desc}</p>
                    <div class="price">
                        <p class="offer_price">${food.offer_price} <span class="original_price">${food.original_price}</span></p>
                        <button class="order-btn">Order Now</button>
                    </div>
                </div>
            </div>
        `;
    });
}

renderMenu(menuItems);

document.querySelectorAll('.order-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('Button is still under construction');
    });
});
