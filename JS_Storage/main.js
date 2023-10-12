const allProducts = [
    {
        name: "banana",
        uniqId: 74638,
        price: 8,
        quantity: 200,
        discount: 0.03,
        isDiscount: true,
        img: 'https://m.media-amazon.com/images/I/51ebZJ+DR4L._AC_UF1000,1000_QL80_.jpg'
    },
    {
        name: "cucumber",
        uniqId: 2334,
        price: 4,
        quantity: 100,
        discount: 0,
        isDiscount: false,
        img: 'https://m.media-amazon.com/images/I/71xkI-PIE5L._AC_UF894,1000_QL80_.jpg'
    },
    {
        name: "pear",
        uniqId: 234,
        price: 18,
        quantity: 0,
        discount: 0.5,
        isDiscount: true,
        img: 'https://m.media-amazon.com/images/I/81FpEWe5w1L._AC_UF894,1000_QL80_.jpg'
    },
    {
        name: "apple",
        uniqId: 3322,
        price: 18,
        quantity: 2,
        discount: 0.1,
        isDiscount: true,
        img: 'https://m.media-amazon.com/images/I/918YNa3bAaL.jpg'
    },
    {
        name: "potato",
        uniqId: 333,
        price: 2,
        quantity: 2000,
        discount: 0,
        isDiscount: false,
        img: 'https://m.media-amazon.com/images/I/61yXL70-RaL.jpg'
    },
    {
        name: "coconut",
        uniqId: 3498,
        price: 80,
        quantity: 10,
        discount: 0.1,
        isDiscount: true,
        img: 'https://m.media-amazon.com/images/I/41Fxa5eNlsL._AC_UF1000,1000_QL80_.jpg'
    },
];
const userCart = [];

function generateProductListMarkup() {
    let html = '';
    for (let i = 0; i < allProducts.length; i++) {
        html += `<div class="card col mt-5" style="width: 18rem; margin-right: 10px">
        <div style='min-height: 230px'>
            <img src="${allProducts[i].img}" class="card-img-top" alt="${allProducts[i].name}">
        </div>
        <div class="card-body">
          <h5 class="card-title">${allProducts[i].name}</h5>
          <p class="card-text">${allProducts[i].price}$</p>
          <p class="card-text">${allProducts[i].quantity} items</p>
          <a href="#" class="btn btn-primary">Buy</a>
        </div>
      </div>`;
    };
    document.getElementById('list').innerHTML = html;

    localStorage.setItem('test', 2);
}

document.addEventListener('DOMContentLoaded', generateProductListMarkup);

function addToCart(id, quantity) {
    const newProd = allProducts.find((el) => el.uniqId === id);

    if (!newProd) {
        console.log("оберіть продукт зі списку наявних, будь ласка");
        return false;
    }
    if (newProd.quantity < quantity) {
        return false;
    }
    newProd.quantity = quantity;
    userCart.push(newProd);
    newProd.isInCart = true;


}

function setQuantity(quantity, id) {
    const newProd = allProducts.findIndex((el) => el.uniqId === id);
    allProducts[newProd].quantity = quantity;
}
addToCart(333, 10);
addToCart(3498, 2);
addToCart(234, 3);

function productRemoving(id) {
    const deleteProduct = userCart.findIndex(el.id === id);
    userCart.splice(deleteProduct, 1);
}

function showCartProducts() {
    const result = userCart.map((el) => {
        return { name: el.name, price: el.price };
    });
}
function showCartsProducts() {
    const result = userCart.map((el) => {
        console.log(el);
        return { name: el.name, price: el.price };
    });
    console.log(result);
}
showCartProducts();

function getAmountOfProduct() {
    const amount = userCart.reduce((acc, el) => {
        acc = (el.quantity * el.price) + acc
        return acc
    }, 0)
    return amount
}
getAmountOfProduct();

function sortByPrice() {
    const sorted = allProducts.slice()
    sorted.sort((a, b) => {
        return b.quantity - a.quantity
    })
    console.log(sorted);

}