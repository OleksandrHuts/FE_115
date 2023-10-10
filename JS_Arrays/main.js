// Array

// const allProducts = [
//     {
//         name: 'banana',
//         uniqId: 74638,
//         price: 8,
//         quantity: 200,
//         discount: 0.03,
//         isDiscount: true
//     },
//     {
//         name: 'cucumber',
//         uniqId: 2334,
//         price: 4,
//         quantity: 100,
//         discount: 0,
//         isDiscount: false
//     },
//     {
//         name: 'pear',
//         uniqId: 234,
//         price: 18,
//         quantity: 0,
//         discount: 0.5,
//         isDiscount: true
//     },
//     {
//         name: 'apple',
//         uniqId: 3322,
//         price: 18,
//         quantity: 2,
//         discount: 0.1,
//         isDiscount: true
//     },
//     {
//         name: 'potato',
//         uniqId: 333,
//         price: 2,
//         quantity: 2000,
//         discount: 0,
//         isDiscount: false
//     },
//     {
//         name: 'coconut',
//         uniqId: 3498,
//         price: 80,
//         quantity: 10,
//         discount: 0.1,
//         isDiscount: true
//     }
// ];

// function createProductTable() {
//     const table = document.getElementById('table');
//     let htmlToInsert = '<ul>';

//     for (let i = 0; i < allProducts.length; i++) {
//         htmlToInsert+= `<li class="product_item"><div>Product name: ${allProducts[i].name}</div><div>Product price: ${allProducts[i].price}</div></li>`;
//     }

//     htmlToInsert += '</ul>';
//     table.innerHTML = htmlToInsert;
// }

// function speak(f){
//     var d=new SpeechSynthesisUtterance();
//     var e=speechSynthesis.getVoices();
//     d.voice=e[2];
//     d.voiceURI="native";
//     d.volume=1;
//     d.rate=1;
//     d.pitch=1;
//     d.text=f;
//     d.lang="en-EN";
//     speechSynthesis.speak(d)
// }
// speak("Hello my master!");

// const userCart = []

// const addToCart(id, quantity) {
//     // push in cart product object
//     // reduct product quantity in All Products
// }

// const users = [
//     {
//         userId: 1237482347834,
//         userName: 'Oleg',
//         isPremium: true,
//         balance: 100
//     },
//     {
//         userId: 182347834,
//         userName: 'Ann',
//         isPremium: false,
//         balance: 2500
//     },
//     {
//         userId: 75934,
//         userName: 'Antony',
//         isPremium: false,
//         balance: 3400
//     },
//     {
//         userId: 12755756834,
//         userName: 'ivan',
//         isPremium: true,
//         balance: 120
//     },
// ];

// const arr = ['cat', 'banana', 'banana', 'banana', 'tomato', 'cucumber', 'apple', 'orange', 'cucumber', 'dog'];
// {
//     cat: 1,
//     banana: 3,
//     cucumber: 2
// }

// const resultObj = arr.reduce((acc, el) => {
//     acc[el] ? acc[el]++ : acc[el] = 1
//     return acc;
// }, {})

// console.log(resultObj);

// const usersBalanceArr = users.reduce((acc, user) => {
//     const {userName, balance} = user;
//     acc.push({userName,balance})

//     return acc;
// }, [])

// const userNames = users.map(user => {
//     user.userName =  user.userName + ' client';
//     return user.userName
// })

// const newUsers = [
//     {
//         userId: 122577348,
//         userName: 'Igor',
//         isPremium: true
//     },
//     {
//         userId: 7458338,
//         userName: 'Jane',
//         isPremium: true
//     }]
// const reversedArr = arr.map(el => el.split('').reverse().join(''));
// const arr = ['cat', 'banana', 'tomato', 'cucumber', 'apple', 'orange', 'dog'];

// 1 -> 50 -> [0]
// 1 -> 2->[0]
// 1 -> -5 -> [1]
// 1 -> -1 -> [2]

// 50 -> 1 [3]
// 50 -> 15 [4]
// 50 -> 10000

// arr.sort().reverse()

// console.log(arr);

// to Get el Index:
// - findIndex()
// - indexOf()

//to Get el itself
// find()

//Створи об'єкт, що описує звичайний дріб. Створи об'єкт, який має методи роботи з дробом
// 2/3 + 7/8 = 16/24 + 21/24
// 1/2 + 1/4 = /4
// 2/3 + 2/6 = /18

// DOM
// querySelector
// querySelectorAll
// getElementById
// getElementsByClassName
// getElementsByTagName

// function generateNavigation() {
//     const navArr = [
//         {
//             url: './home.html',
//             label: 'Home'
//         },
//         {
//             url: './about.html',
//             label: 'About'
//         },
//         {
//             url: './market.html',
//             label: 'Market'
//         },
//         {
//             url: './contact.html',
//             label: 'Contact'
//         },
//         {
//             url: './login.html',
//             label: 'Log In'
//         }
//     ];

//     let htmlResult = '';

//     for (let i = 0; i < navArr.length; i++) {
//         htmlResult += `<li class='nav_item'><a href="${navArr[i].url}">${navArr[i].label}</a></li>`;
//     }
//     document.querySelector('#navList').innerHTML = htmlResult;
// }


// function showTestItems() {
//     // const collection = document.querySelectorAll('.nav_item_test');
//     const collection = document.getElementsByClassName('nav_item_test');

//     const li = document.createElement('li')
//     li.classList.add('nav_item_test')

//     document.querySelector('.testList').append(li)

//     console.log(collection);
// }

// const ERRORS_CONFIG = {
//     userName: {
//         message: 'Please add user name'
//     },
//     userPassword: {
//         message: 'Please type a password'
//     },
//     userEmail: {
//         message: 'Please add valid email'
//     },
//     userAgree: {
//         message: 'Please, check Terms&Conditions'
//     }
// }

// function showError(errorType) {
//     const errorText = ERRORS_CONFIG[errorType].message;
//     const errorWrapper = document.querySelector('.error');

//     errorWrapper.textContent = errorText;
//     errorWrapper.classList.add('active');
// }

// function submitForm() {
//     document.querySelector('.error').classList.remove('active');

//     const userName = document.querySelector('#userName').value;
//     const userPassword = document.querySelector('#userPassword').value;
//     const userEmail = document.querySelector('#userEmail').value;
//     const userAgree = document.querySelector('#agree').checked;

//     if (!userName) {
//         showError('userName');
//         return false;
//     }

//     if (!userPassword) {
//         showError('userPassword');
//         return false;
//     }

//     if (!userEmail || !userEmail.includes('@')) {
//         showError('userEmail');
//         return false;
//     }

//     if (!userAgree) {
//         showError('userAgree');
//         return false;
//     }

//     console.log('We can send data');
// }
// const form = document.querySelector('.form');
// const formCopy = form.cloneNode(true);

// const htmltoinsert = '<a></a>'

// document.querySelector('#containerTwo').remove()

