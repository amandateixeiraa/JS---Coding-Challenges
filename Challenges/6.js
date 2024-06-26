// Calculate 10!
function calculate(num){
    if (num <= 1) {
        return 1;
    } else {
        return num * calculate(num - 1)
    }
}

 const result = calculate(10);
 console.log(result)