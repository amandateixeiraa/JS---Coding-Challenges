/** Create a function that will receive an array of numbers as argument and will return a
new array with distinct elements 
 */

function findDistinct(numbers) {
    let distinctArray = [];

    numbers.forEach(function(item) {
        if (!distinctArray.includes(item)) {
            distinctArray.push(item);
        }
    });

    return distinctArray;
}

let numbers = [1, 1, 2, 3, 3, 4];
let result = findDistinct(numbers);
console.log(result); 

