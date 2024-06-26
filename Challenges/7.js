// Calculate sum of even numbers greater than 10 and less than 30.
var total = 0;
for(i = 10; i <= 30; i++){
    if(i%2 === 0){
        total = total + i;
        
    }
}

console.log(total)