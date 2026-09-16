/* a function can be stored inside a variable just like a number or string.
let x = 5;
let name = "Anita";
let myFunc = function() {
  console.log("hi");
};

console.log(typeof x);
console.log(typeof name);
console.log(typeof myFunc);

ans = Number
      string
      function    */


/* A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed. In this example, we have a function `greet` that takes a name and a callback function as parameters. The `greet` function calls the callback function after greeting the user. The `sayGoodbye` function is passed as a callback to `greet`, and it is executed after the greeting message is logged to the console. 
a function can be passed as an argument to another function, and it can be executed after some operation has been completed. 

function doTwice(fn, value) {
    return fn(fn(value));
}

function double(number) {
    return number * 2;
}

console.log(doTwice(double(), 5));
*/

// the example below demonstrates how to use a callback function to process an array of numbers. The `processArray` function takes an array and a callback function as arguments.
//  It iterates through the array, applies the callback function to each element, and returns a new array with the processed values. 
// In this case, we define a `double` function that doubles a number, and we pass it as a callback to `processArray`.
//  The result is a new array with each number doubled.

/*function processArray(arr, callback) {
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        newArray.push(callback(arr[i]));
    }

    return newArray;
}

function double(x) {
    return x * 2;
}

console.log(processArray([1, 2, 3], double));
*/

// the example below demonstrates how to use a callback function to greet a user. 
// The `greetUser` function takes a name and a callback function as arguments. 
// It logs a greeting message to the console and then calls the callback function. 
// In this case, we pass an anonymous function as the callback that logs a message indicating that it runs after the greeting.

/* 
function greetUser(name, callback) {
    console.log("Hello, " + name);
    callback();
}

greetUser("Anita", function() {
    console.log("This runs after the greeting");
});
*/

//the example below demonstrates how to use a callback function to filter an array of numbers.
// The `filterAndLog` function takes an array and a callback function as arguments.
// It iterates through the array, applies the callback function to each element, and logs the elements that pass the filter to the console. 
// The function also returns a new array containing the filtered elements. 
// In this case, we define an `isEven` function that checks if a number is even, and we pass it as a callback to `filterAndLog`. 
// The result is a new array containing only the even numbers from the original array.
// first it lists each even number in the console and then it returns a new array containing only the even numbers from the original array.

/*
function filterAndLog(arr, callback) {
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            console.log(arr[i]);
            newArray.push(arr[i]);
        }
    }

    return newArray;
}
function isEven(x) {
    return x % 2 === 0;
}

console.log(filterAndLog([1, 2, 3, 4, 5, 6], isEven));
*/