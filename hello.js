//Destructuring assignment allows you to unpack values from arrays or properties from objects into distinct variables. In this example, we have an object `car` with properties `brand`, `model`, and `year`. We use destructuring to extract the `brand` and `year` properties into separate variables. The `console.log` statements then print the values of these variables to the console.
let car = { brand: "Toyota", model: "Corolla", year: 2020 };
let{brand, year} = car;
console.log(brand); 
console.log(year); 


//Spread 
let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4, 5];
console.log(newNumbers); 
