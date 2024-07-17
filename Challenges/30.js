/** Create a function that will add two positive numbers of indefinite size. The numbers
are received as strings and the result should be also provided as string.
*/


function addNum(number1, number2){
    number1 = Number(number1)
    number2 = Number(number2)
    if(number1 < 0 || number2 < 0){
        console.log("Positive numbers only!!")}
    else{
        let total  = number1 + number2
        total = String(total)
        return total
    }
  

}

console.log(addNum(55, 2))