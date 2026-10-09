/*the example below demonstrates the use of TypeScript's type system to enforce type safety in a function that calculates the total price based on the price and quantity of items. 
// The function is defined to accept only numbers for both parameters, ensuring that any incorrect types will result in a compile-time error.
//if we run the code below, we will see that the first call to calculateTotal will work correctly, while the second and third calls will result in compile-time errors due to type mismatches, only if we were to use TypeScript's type annotations.
//  However, since the code is written in plain JavaScript, it will run without errors, but may produce unexpected results.
// output for all 3 will be: 60  60 and NaN respectively, because JavaScript will coerce the string "20" to a number in the second call, but will return NaN for the third call since "twenty" cannot be converted to a number.
function calculateTotal(price, quantity) {
  return price * quantity;
}

console.log(calculateTotal(20, 3));
console.log(calculateTotal("20", 3));
console.log(calculateTotal("twenty", 3));



//to fix the above code and enforce type safety, we can add TypeScript's type annotations to the function parameters. 
// This will ensure that only numbers are accepted for both price and quantity, and any incorrect types will result in a compile-time error.
//the result of running the code below will be that the first call to calculateTotal will work correctly, while the second and third calls will result in compile-time errors due to type mismatches.
//output for the first call will be: 60, while the second and third calls will not compile due to type errors.
//the corrected code with type annotations is as follows:   

function calculateTotal(price: number, quantity: number): number {
  return price * quantity;
}

console.log(calculateTotal(20, 3));
console.log(calculateTotal(20, 3));
console.log(calculateTotal("twenty", 3));



//the example below demonstrates the use of TypeScript's type system to enforce type safety in variable declarations.
//even without type annotations, TypeScript can infer the type of a variable based on its initial value.
//so, if we declare a variable and assign it a value of a certain type, TypeScript will infer that type for the variable and enforce it throughout the code.

let count = 5;
count = "five";

*/
//Then write these two functions from a blank file, with types on the parameters and the return value, and call each once with valid arguments:
//formatPrice takes an amount (number) and a currency code (string), and returns something like "KES 1500".
//sumAll takes an array of numbers and returns their total. Don't use .reduce() this time, use a loop.

function formatPrice(amount: number, currencyCode: string): string {
  return `${currencyCode} ${amount}`;
}   

console.log(formatPrice("KES", 1500));

// the function formatPrice takes an amount and a currency code as parameters, both with their respective types defined. 
// It returns a string that formats the price with the currency code.
// Example call to formatPrice with valid arguments
//console.log(formatPrice(1500, "KES")); // Output: "KES 1500"
/*
function sumAll(numbers: number[]): number {
  let total = 0;
  for (const n of numbers) {
    total += n;
  }
  return total;
}

console.log(sumAll([10, "20", 30]));
console.log(sumAll(10));
console.log(sumAll([]));

// Example call to sumAll with valid arguments
//console.log(sumAll([1, 2, 3, 4, 5])); // Output: 15 
// this for (const n of numbers) loop iterates over each number in the array and adds it to the total, which is then returned.
//the function sumAll takes an array of numbers as a parameter and returns their total, with the return type defined as number.
//the example call to sumAll demonstrates the function's usage with an array of numbers, resulting in the correct total being returned.
// the (numbers: number[]): number syntax indicates that the function expects an array of numbers as input and will return a number as output.
*/