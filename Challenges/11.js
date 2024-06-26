//Calculate the average of numbers in an array of numbers

var numbers = [20, 30, 40, 50, 60, 70, 80, 90, 100];
var sumNum = 0;
var avg = 0;
for(let i = 0; i < numbers.length; i++){
    sumNum = sumNum + numbers[i]
}
avg = sumNum / numbers.length
console.log(avg)