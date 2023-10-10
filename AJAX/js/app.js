const API_KEY = '20ecfea5';
const BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;
let PAGE = 1;
let finalPage = 1;
// http://www.omdbapi.com/?i=tt3896198&apikey=20ecfea5

function searchMovie() {
    const movieName = document.getElementById('searchText').value;
    console.log(movieName);
    if(movieName) {
        axios.get(BASE_URL+`&s=${movieName}&page=${PAGE}`)
        .then(function (res) {
            console.log(res.data);
            finalPage = Math.ceil(res.data.totalResults / 10);
            
            generateCards(res.data.Search);
        })
    }
}

function generateCards(resultsData) {
    let html = `<ul class="grid-list">`

    resultsData.forEach(el => {
        html = html + `<li data-id="${el.imdbID}">
        <span class="title">${el.Title}</span>
        <span class="year">${el.Year}</span>
        <img src="${el.Poster}" alt class="poster"/>
        </li>`;
    })
    html = html + '</ul>'
    document.getElementById('list').innerHTML = html;
}

function nextPage(event) {
    event.preventDefault();
    PAGE++;
    gotoPage(PAGE)
}

function gotoPage(page) {
    PAGE = page;
    searchMovie();
}

function goToEnd(event) {
    event.preventDefault();
    PAGE = finalPage;
    gotoPage(PAGE)
}



// // const xhr = new XMLHttpRequest();
// // xhr.open('GET', './parts/about.html')
// // xhr.send()
// // function getPageContent(pageName) {
// //     console.log(pageName);
// //     fetch(`./parts/${pageName}.html`).then((resp) => {
// //         if(resp.status === 200) {
// //             return resp.text();
// //         } else {
// //             console.log('Error with code: ' + resp.status);
// //             if(resp.status === 404) {
// //                 getPageContent('404');
// //             }
// //         }
// //     }).then((res) => {
// //         document.getElementById('page_content').innerHTML = res;
// //     });
// // }

// function getPageContent(pageName) {
//     axios.get(`./parts/${pageName}.html`)
//         .then(function (res) {
//             // обробка успішного запиту
//             console.log(res);
//             document.getElementById('page_content').innerHTML = res.data;
//         })
//         .catch(function (error) {
//             // обробка помилки
//             console.log(error);
//         });
//     // $.get({
//     //     url: `./parts/${pageName}.html`
//     // }).done(function(res) {
//     //     console.log(res);
//     //     document.getElementById('page_content').innerHTML = res;
//     // });
//     // fetch(`./parts/${pageName}.html`).then((resp) => {
//     //     if(resp.status === 200) {
//     //         return resp.text();
//     //     } else {
//     //         console.log('Error with code: ' + resp.status);
//     //         if(resp.status === 404) {
//     //             getPageContent('404');
//     //         }
//     //     }
//     // }).then((res) => {
//     //     document.getElementById('page_content').innerHTML = res;
//     // });
// }

// // async function getPageContent(url) {
// //     const res = await fetch(`./parts/${url}.html`, {
// //         method: 'POST',
// //         body: 'Some data to server'
// //     });
// //     return res.text();
// // }

// const navItems = document.querySelectorAll('.nav_item a');

// function navigateAction(event) {
//     event.preventDefault();

//     getPageContent(event.target.getAttribute('href').substring(1));
// }

// navItems.forEach(link => {
//     link.addEventListener('click', navigateAction)
// })