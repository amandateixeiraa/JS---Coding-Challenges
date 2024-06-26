// Calculate the sum of digits of number

function sumDigits(num){
    var array = num.toString().split('').map(Number);
    var total = 0;
    if(array.length < 2){
        return num
    } else{
        for(let i = 0; i < array.length; i++){
            total = total + array[i]
        }
        return total;

    }



}

result = sumDigits(12);
console.log(result)