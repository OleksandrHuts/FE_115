// const actionsConfig = {
//     add: function() {
//         console.log('Add to Cart');
//     },
//     remove: function() {
//         console.log('Remove from cart');
//     },
//     clear: function() {
//         console.log('Clear cart');
//     },
//     edit: function() {
//         console.log('Edit cart');
//     }
// }

// function buttonAction(event) {
//     console.log(event);
//     const functionKey = event.target.dataset.action;

//     if(functionKey) {
//         actionsConfig[functionKey]()
//     }
// }
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log(event);
});

// document.getElementById('form').submit()