// Closures are a fundamental concept in JavaScript that allow functions to access variables from their outer scope even after that outer function has finished executing.
//  This is possible because functions in JavaScript form closures, which means they "remember" the environment in which they were created.
// In this example, we define a function `makeCounter` that creates a private variable `count` and returns an inner function `increment`.
// The `increment` function has access to the `count` variable even after `makeCounter` has finished executing, allowing it to maintain state across multiple calls.
// When we call `makeCounter`, it returns the `increment` function, which we can then call to increment and log the count.
// The first call to `makeCounter` creates a new closure with its own `count` variable, and the second call creates a separate closure with its own `count` variable.
// This demonstrates how closures can be used to create private state and encapsulate functionality in JavaScript.
//so when we call `counter1()` twice, it increments and logs the count for the first closure, while calling `counter2()` creates a new closure with its own separate count variable.
// The output of the code will be:
// 1
// 2
// 1
// 2
// This shows that each closure maintains its own state independently of the other closures. 
/*
function makeCounter() {
  let count = 0;

  function increment() {
    count = count + 1;
    console.log(count);
  }

  return increment;
}

const counter1 = makeCounter();

counter1();
counter1();

const counter2 = makeCounter();

counter2();
counter2();
*/
// the following code defines a function `makeBankAccount` that creates a private variable `balance` and returns an object with two methods: `deposit` and `withdraw`. 
// These methods have access to the `balance` variable, allowing them to modify and log the account balance.
//  The closure ensures that the `balance` variable is preserved across multiple calls to the methods, enabling the account to maintain its state.
// the `makeBankAccount` function takes an initial `startingBalance` as an argument and initializes the `balance` variable with that value.
// the `deposit` method adds the specified `amount` to the `balance` and logs the updated balance, while the `withdraw` method subtracts the specified `amount` from the `balance` and logs the updated balance.
/*

function makeBankAccount(startingBalance){ 
let balance=startingBalance; 
 
function deposit(amount){ 
balance = balance + amount ; 
console.log(balance); 
} 
 
function withdraw (amount){  
balance = balance - amount ;
console.log(balance); 
} 
return {  
   deposit: deposit,  
   withdraw: withdraw
 };  
}

const account = makeBankAccount(100);
account.deposit(50);   // should log 150
account.withdraw(30);  // should log 120
*/


// The following code defines a function `makeFunctions` that creates an array of functions.
//  Each function, when called, logs the value of the variable `i` from the outer scope.
//  However, since `var` is function-scoped, all functions will log the final value of `i` after the loop has completed, which is 3.
//  This demonstrates how closures capture variables by reference rather than by value.
// to fix this issue and have each function log its own value of `i`, we can use `let` instead of `var`, which is block-scoped, or we can use an IIFE (Immediately Invoked Function Expression) to create a new scope for each iteration of the loop.
// so when we call `funcs[0]()`, `funcs[1]()`, and `funcs[2]()`, they will all log the same value of `i`, which is 3, instead of logging 0, 1, and 2 as one might expect.
/*

function makeFunctions() {
  let functions = [];

  for (var i = 0; i < 3; i++) {
    functions.push(function() {
      console.log(i);
    });
  }

  return functions;
}

const funcs = makeFunctions();
funcs[0]();
funcs[1]();
funcs[2]();
*/