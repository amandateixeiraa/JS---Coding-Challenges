// Find the maximum number in an array of numbers

var numbers = [34, 56, 43, 23, 12, 45, 80, 91];
// maxNum = Math.max(...numbers)
// console.log(maxNum)


//Without using a built in function
var minNum = 0;
var maxNum = 0;
for(let i = 0; i < numbers.length; i++){
    maxNum = numbers[i] 
    if(minNum > maxNum){
        maxNum = minNum
    }
    minNum = maxNum
}
console.log(maxNum)


