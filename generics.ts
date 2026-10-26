//generics are a way to create reusable components that can work with a variety of types rather than a single one.
//  They allow you to define a function, class, or interface that can operate on different data types while still maintaining type safety.
//In TypeScript, generics are denoted by angle brackets <> and can be used to define type parameters that can be specified when the component is used. 
// This allows for greater flexibility and reusability of code, as the same component can be used with different types without sacrificing type safety.
/*
function lastName <T>(names: T[]): T {
    return names[names.length - 1];
}

console.log(lastName(["John", "Doe", "Smith"])); // Output: "Smith"
console.log(lastName([1, 2, 3, 4])); // Output: 4

*/

function lastItem<T>(items: T[]): T {
  return items[items.length - 1];
}

const n = lastItem([1, 2, 3])
const s = lastItem(["a", "b"])

console.log(n);
console.log(s);