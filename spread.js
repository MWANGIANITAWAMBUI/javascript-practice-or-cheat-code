//Spread 
/*let nums1 = [1, 2, 3];
let nums2 = [4, 5, 6]; 
console.log([...nums1, ...nums2]); 
*/


/*let original = { name: "Anita", age: 25 };
let copy = { ...original, age: 26 };
console.log(copy);
console.log(original);*/


/*function sumAll(...numbers) {
    console.log(numbers);
}

sumAll(1, 2, 3);
sumAll(5, 10);
*/


function sumAll(...numbers) {
    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i];
    }

    return total;
}

console.log(sumAll(1, 2, 3, 4));
console.log(sumAll(5, 10));          
console.log(sumAll(1, 2, 3, 4, 5));  
console.log(sumAll(10, 20, 30, 40)); 