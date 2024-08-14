// Write a function that takes an array of numbers and returns the sum of their squares using the reduce method.

const numArray = [2, 4, 8, 16];
function sumOfSquares(previous, next) {
    return previous + next ** 2;
}
const total = numArray.reduce(sumOfSquares, 0);
console.log(total);


