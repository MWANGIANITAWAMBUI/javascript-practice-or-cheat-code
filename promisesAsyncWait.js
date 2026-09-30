//promises have 3 possible states: pending, fulfilled, or rejected.
//A promise is a JavaScript object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//A promise can be in one of three states: pending, fulfilled, or rejected. 
//When a promise is created, it is in the pending state. 
//When the asynchronous operation completes successfully, the promise is fulfilled with a value. 
//If the operation fails, the promise is rejected with a reason (error).
/*somePromise.then(function(result) {
  // runs when the promise is fulfilled
}).catch(function(error) {
  // runs when the promise is rejected
}); */
// the `then` method is used to specify what should happen when the promise is fulfilled, and the `catch` method is used to handle any errors that occur if the promise is rejected.
//In this example, we create a new promise that simulates an asynchronous operation using `setTimeout`.
// The promise is set to reject after 1 second with the message "something broke".
// We then attach `then` and `catch` handlers to the promise to handle the success and failure cases, respectively.
// when the promise is rejected, the `catch` handler is called, and it logs the error message to the console.
// so when you run this code, you will see "start" printed to the console, followed by "end", and then after 1 second, "failure: something broke" will be printed to the console.
// this is because the promise is rejected after 1 second, and the `catch` handler is called to handle the error.
//why is the promise rejected? The promise is rejected because we explicitly call the `reject` function inside the `setTimeout` callback, simulating a failure in the asynchronous operation. 
// In a real-world scenario, this could represent an error occurring during a network request, file operation, or any other asynchronous task.

/*                
console.log("start");

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("something broke");
  }, 1000);
});

promise
  .then((result) => {
    console.log("success:", result);
  })
  .catch((error) => {
    console.log("failure:", error);
  });

console.log("end");
*/

//In this example, we define a function `checkAge` that takes an `age` parameter and returns a promise.
// The promise checks if the age is greater than or equal to 18. If it is, the promise is resolved with the message "You are an adult". 
// If the age is less than 18, the promise is rejected with the message "You are a minor".
// We then call the `checkAge` function twice, once with an age of 25 and once with an age of 15.
// The first call resolves the promise and logs "You are an adult" to the console, while the second call rejects the promise and logs "You are a minor" to the console.
// this demonstrates how promises can be used to handle asynchronous operations and manage success and failure cases in JavaScript.
//it differs from the previous example in that it uses a function to create and return a promise based on the input age, rather than using a `setTimeout` to simulate an asynchronous operation.
// which allows for more flexibility and reusability of the promise logic based on different input values.
// this example also shows how to use the `then` and `catch` methods to handle the resolved and rejected states of the promise, respectively, based on the outcome of the age check.
//  in real-world applications, this pattern can be used to validate user input, check permissions, or perform other asynchronous checks before proceeding with further operations.
/*
function checkAge(age) {
    return new Promise((resolve, reject) => {

        if (age >= 18) {
            resolve("You are an adult");
        } else {
            reject("You are a minor");
        }

    });
}

checkAge(25)
    .then(result => {
        console.log(result);
    });

checkAge(15)
    .catch(error => {
        console.log(error);
    });
    */
// or use this for real life scenarios where you want to handle both success and failure cases in a single chain of promise handling:
    /*
    checkAge(25)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });
    */

//with one .catch at the end of the promise chain, you can handle any errors that occur in any of the previous promises in the chain. 
// This is useful for scenarios where you want to handle both success and failure cases in a single chain of promise handling, rather than having separate `then` and `catch` blocks for each promise.
// In this example, we have a chain of promises that simulate fetching user data, orders, and payments.
// The `getUser`, `getOrders`, and `getPayments` functions return promises that resolve with the respective data after a delay.
// If any of the promises in the chain are rejected, the `catch` block at the end will handle the error and log it to the console.
// so when you run this code, you will see the payments data logged to the console if all promises are fulfilled, or an error message if any of the promises are rejected.
/*

   getUser(id)
  .then((user) => {
    return getOrders(user.id);
  })
  .then((orders) => {
    return getPayments(orders.id);
  })
  .then((payments) => {
    console.log(payments);
  })
  .catch((error) => {
    console.log("something failed:", error);
  });
  */

  /*Task: Write three functions that each return a Promise:

step1() — resolves after 500ms with the number 1
step2(num) — takes a number, resolves after 500ms with num + 1
step3(num) — takes a number, resolves after 500ms with num + 1

Then chain them together with .then() so that:

step1() runs first
its result feeds into step2
that result feeds into step3
the final result gets logged

Use setTimeout inside each Promise, same as the checkAge pattern but with resolve only (no rejection needed here — keep it simple).

function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 500);
  });
}

function step2(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num + 1);
    }, 500);
  });
}

function step3(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num + 1);
    }, 500);
  });
}

step1()
  .then((result) => {
    return step2(result);
  })
  .then((result) => {
    return step3(result);
  })
  .then((result) => {
    console.log(result);
  });

*/

//async/await
//async functions are a way to write asynchronous code in a more synchronous and readable manner.
//  They allow you to use the `await` keyword to pause the execution of the function until a Promise is resolved or rejected, making it easier to work with asynchronous operations without having to chain multiple `.then()` calls.
// In this example, we define three functions `step1`, `step2`, and `step3` that each return a Promise that resolves after 500 milliseconds with a number.
// We then define an `async` function `runSteps` that uses the `await` keyword to call each step in sequence, passing the result of one step to the next.
// Finally, we log the final result to the console. If any of the Promises are rejected, we catch the error and log it to the console.  
//if step2 rejects, the error will be caught in the `catch` block of the `runSteps` function, and the error message will be logged to the console. 
// This allows for better error handling and makes it easier to manage asynchronous operations in a more readable way.
//


function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 500);
  });
}

function step2(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error("Step 2 failed"));
    }, 500);
  });
}

function step3(num) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(num + 1);
    }, 500);
  });
}

async function runSteps() {
  try {
    const result1 = await step1();
    const result2 = await step2(result1);
    const result3 = await step3(result2);

    console.log(result3);
  } catch (error) {
    console.log(error);
  }
}

runSteps();