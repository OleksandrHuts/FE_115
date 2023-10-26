// const user = {
//     age: 0,
//     birthDate: 20,
//     gender: 'male',
//     showAge: function() {
//         console.log(this.age);
//     },
//     setAge: function(age) {
//         this.age = age + this.birthDate
//     }
// }

// const admin = {
//     role: 'admin'
// }

// const manager = {
//     restrictions: 'edit/read'
// }

// const client = {
//     role: 'client'
// }

// client.age = 22;

// Object.setPrototypeOf(admin, user)
// Object.setPrototypeOf(client, user)
// Object.setPrototypeOf(manager, admin)
import Circle from "./classes/Circle.js";
import Rectangle from "./classes/Rectangle.js";
import Square from "./classes/Square.js";

const rect1 = new Rectangle(100, 200, 'pink', 20, 50);

rect1.draw()

const sq1 = new Square(300, 'blue', 200, 150);
sq1.draw()

const sr1 = new Circle(400, 'green', 400, 350);
sr1.draw();

function hiddenExample() {
    const password = 12;
}

