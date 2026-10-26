// This function takes an array of strings and a callback function as parameters.
// The callback function is applied to each string in the array, and the transformed strings are collected into a new array, which is then returned.
// The function uses a for...of loop to iterate over the input array, applying the callback to each item and pushing the result into the result array.
// Finally, the function returns the result array containing the transformed strings.
// Loop through the array of strings, apply the callback function to each string, and collect the results in a new array.
//this is how we can use the processArray function to transform an array of strings using a callback function that converts each string to uppercase. 
// The result is a new array containing the transformed strings, which is then logged to the console.
// the processArray function demonstrates the use of higher-order functions in TypeScript, where a function can accept another function as an argument and apply it to each element of an array.
// this approach allows for flexible and reusable code, as different callback functions can be passed to processArray to achieve various transformations on the input array of strings.
/*

function processArray(
  items: string[],
  callback: (text: string) => string
): string[] {
  const result: string[] = [];

  for (const item of items) {
    const transformed = callback(item);
    result.push(transformed);
  }

  return result;
}

const words = ["hello", "world"];

const uppercaseWords = processArray(
  words,
  (text) => text.toUpperCase()
);

console.log(uppercaseWords);



function processArray<T, U>(
  arr: T[],
  callback: (item: T) => U
): U[] {
  const result: U[] = [];

  for (const item of arr) {
    result.push(callback(item));
  }

  return result;
}

console.log(
  processArray(["hello", "world"], (text) => text.length)
);

console.log(
  processArray([1, 2, 3], (n) => n * 2)
);

console.log(
  processArray([1, 2, 3], (n) => n.toUpperCase())
);

// The last example will throw an error because the callback function is trying to call toUpperCase on a number, which is not valid.
//  This demonstrates the importance of ensuring that the types of the input array and the callback function are compatible.

*/