// Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers
function positiveNum(numbers){
    var newArray = [];
    for(let i = 0; i < numbers.length; i++){
        var checkNum = numbers[i]
        if(checkNum >= 0){
            newArray.push(checkNum)
        }  
    }
    return newArray
}
result = positiveNum([-1, 3, 45, -12, 57, -3, 10])
console.log(result)