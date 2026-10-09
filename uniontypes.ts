//the example below demonstrates the use of union types in TypeScript.
//  A union type allows a variable to hold values of multiple types. 
// In this case, the function `formatId` accepts a parameter `id` that can be either a number or a string.
//  The function then formats the `id` by converting it to uppercase if it's a string, or simply returning it as a string if it's a number.
//it fails to compile because the `toUpperCase()` method is not available on the `number` type.
//so both calls will fail to compile because the `toUpperCase()` method is not available on the `number` type.
//we will need to narrow the type of `id` to `string` before calling the `toUpperCase()` method, or we can use a type guard to check the type of `id` before calling the method.
/*

function formatId(id: number | string): string {
  return id.toUpperCase();
}
console.log(formatId(123)); 
console.log(formatId("abc123")); 
*/

//the example below demonstrates the use of union types in TypeScript.
// A union type allows a variable to hold values of multiple types. 
// In this case, the function `formatId` accepts a parameter `id` that can be either a number or a string.
// The function then formats the `id` by converting it to uppercase if it's a string, or simply returning it as a string if it's a number.
// To fix the compile-time error, we can use a type guard to check the type of `id` before calling the `toUpperCase()` method.
/*
function formatId(id: number | string): string {
  if (typeof id === "string") {
    return id.toUpperCase();
  }
  return id.toString();
}
console.log(formatId(123)); 
console.log(formatId("abc123")); */

//or similarly 
//this function takes a parameter `id` that can be either a number or a string, and returns a formatted string based on the type of `id`.
//its slightly different from the previous example in that it returns a string with a prefix "ID-" if the `id` is a number, and converts the `id` to uppercase if it's a string.
//the function uses a type guard to check the type of `id` before performing the appropriate formatting.
//the first call to `formatId` passes a number, so the function returns "ID-123". The second call passes a string, so the function returns "ABC123".
/*
function formatId(id: number | string): string {
  if (typeof id === "string") {
    return id.toUpperCase();
  }

  return "ID-" + id;
}
console.log(formatId("abc123"));
console.log(formatId(123)); 

function formatId(id: number | string): string {
  return id.toUpperCase();
}

*/
console.log(lengthOf("hello"));