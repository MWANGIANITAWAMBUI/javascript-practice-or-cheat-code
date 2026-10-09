/*
Task: Write a function called getTotalPrice that takes an array of objects, where each object looks like { name: "item", price: number }, and uses .reduce() to return the sum of all the prices.

Example input:

js
const cart = [
  { name: "Book", price: 15 },
  { name: "Pen", price: 2 },
  { name: "Bag", price: 40 }
];

Expected output: 57
*/

//the above task asks to create a function called getTotalPrice that takes an array of objects, where each object has a name and a price property.
//  The function should use the .reduce() method to calculate the total price of all items in the array.
//Here's a function called `getTotalPrice` that accomplishes the task using the `.reduce()` method:
/*
function getTotalPrice(cart) {
    return cart.reduce((total, item) => total + item.price, 0);
}     
    //complete code
    
const cart = [
  { name: "Book", price: 15 },
  { name: "Pen", price: 2 },
  { name: "Bag", price: 40 }
];

function getTotalPrice(cart) {
  return cart.reduce((total, item) => {
    return total + item.price;
  }, 0);
}

console.log(getTotalPrice(cart));
*/
