// 1. Build a type alias for a union of string and number.
// 2. Create an interface for a Product with optional price.
// 3. Extend the Product interface to include a required discountPercent.
// 4. Create an instance of the extended interface and log it to the console.
// If you omit the discountPercent property, TypeScript will throw an error because it is required in the DiscountedProduct interface.
// If you omit the price property, TypeScript will not throw an error because it is optional in the Product interface.
//if you try to assign a value of a different type to the id property, TypeScript will throw an error because the Id type only accepts strings or numbers.


// 1. Define an Id type that accepts strings or numbers.
type Id = string | number;

// 2. Define the Product interface.
interface Product {
  id: Id;
  name: string;
  price?: number;
}

// 3. Extend Product with a required discountPercent.
interface DiscountedProduct extends Product {
  discountPercent: number;
}

// 4. Create and print a DiscountedProduct.
const product: DiscountedProduct = {
  id: "PROD-001",
  name: "Gel nail polish",
  price: 800,
  discountPercent: 10,
};

console.log(product);