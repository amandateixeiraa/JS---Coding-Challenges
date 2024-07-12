//Create a function that will merge two arrays and return the result as a new
//array

function twoArrays(array1, array2){
    let newArray = array1.concat(array2);
    return newArray
}

array1 = [1, 2, 3]
array2 = [4, 5, 6]
console.log(twoArrays(array1, array2))