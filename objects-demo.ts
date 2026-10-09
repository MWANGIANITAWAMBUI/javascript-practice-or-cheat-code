/*
// The code below demonstrates the use of TypeScript's type system to enforce type safety in object properties.
// The `item` object is defined with a `name` property of type `string` and a `price` property of type `number`.
// However, the code attempts to assign a string value to the `price` property, which will result in a compile-time error due to the type mismatch.
// Example of type-safe object property assignment

const item = { name: "Notebook", price: 150 };

item.price = "free";
console.log(item.pricee);
*/


// This code demonstrates the use of TypeScript interfaces to define the shape of an object. 
// The `Product` interface specifies that a product must have an `id`, `name`, and `price`. 
// The `describeProduct` function takes a `Product` object as an argument and returns a string describing the product.
// The first call to `describeProduct` passes a valid `Product` object, while the second call is missing the `price` property, which will result in a compile-time error due to the type mismatch.
// Example call to describeProduct with valid arguments
//console.log(describeProduct({ id: 1, name: "Notebook", price: 150 })); // Output: "Notebook costs 150"
// Example call to describeProduct with missing property
//console.log(describeProduct({ id: 2, name: "Pen" })); // Compile-time error: Property 'price' is missing in type '{ id: number; name: string; }' but required in type 'Product'.

/*
interface Product {
  id: number;
  name: string;
  price?: number;
}

function describeProduct(p: Product): string {
  return `${p.name} costs ${p.price}`;
}

console.log(
  describeProduct({
    id: 1,
    name: "Notebook",
    price: 150
  })
);

console.log(
  describeProduct({
    id: 2,
    name: "Pen"
  })
);


// The code below demonstrates the use of optional properties in TypeScript interfaces.
// The `Product` interface specifies that the `price` property is optional, meaning that it may or may not be present in an object that implements the interface.
// The `describeProduct` function checks if the `price` property is defined before attempting to access it, and returns a different string depending on whether the product has a price or not. 
//console.log(describeProduct({ id: 3,name: "Free Sample",price: 0 })); // Output: "Free Sample costs 0"
//the reason for the output of the last call to describeProduct is that the product has a price of 0, which is a valid number and is not considered undefined.
interface Product {
  id: number;
  name: string;
  price?: number;
}

function describeProduct(p: Product): string {
  if (p.price === undefined) {
    return `${p.name} is free`;
  }

  return `${p.name} costs ${p.price}`;
}

console.log(
  describeProduct({
    id: 1,
    name: "Notebook",
    price: 150
  })
);

console.log(
  describeProduct({
    id: 2,
    name: "Pen"
  })
);

console.log(describeProduct({
  id: 3,
  name: "Free Sample",
  price: 0
}));

*/