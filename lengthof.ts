// The `lengthOf` function takes a parameter `value` that can be either a string or an array of strings.
// It returns the length of the string or the number of elements in the array, depending on the type of `value`.
// The function uses a type guard to check if `value` is an array using `Array.isArray()`. 
// If it is an array, it returns the length of the array; otherwise, it returns the length of the string.

function lengthOf(value: string | string[]): number {
  

  return value.length;
}

console.log(lengthOf("hello"));
console.log(lengthOf(["Kenya", "Uganda", "Tanzania"]));