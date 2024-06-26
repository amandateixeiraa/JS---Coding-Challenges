// Check if the number is prime

function isPrime(num){
    var list = [];
    if (num <= 1){
        return false 
   } 
   for(let i = 1; i <= num; i++){
        var check = num % i 
        if(check === 0){
            list.push(1)
        }
   }
   if(list.length > 2){
    return false
   } else{return true}
   
}

console.log(isPrime(11))