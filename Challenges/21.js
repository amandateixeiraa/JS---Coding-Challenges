// Rotate an array to the right 1 position

let num =[1, 2, 3, 4, 5];
let lastItem = num.pop()
num.unshift(lastItem)
console.log(num)
