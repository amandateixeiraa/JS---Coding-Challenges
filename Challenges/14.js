//Fibonacc without recursion

var previous = 0;
var current = 1;
var next;
console.log(0)
console.log(1)
for(let i = 0; i <= 10; i++){
    next = previous + current; 
    previous = current; 
    current = next;
    console.log(current)
}