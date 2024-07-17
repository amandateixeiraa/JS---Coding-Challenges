/** Create a function that will receive two arrays and will return an array with
elements that are in the first array but not in the second
 */

function arr(numbers1, numbers2) {
    return numbers1.filter(function(item) {
        return !numbers2.includes(item);
    });
}

let numbers1 = [1, 3, 5, 7, 9];
let numbers2 = [1, 4, 7, 8, 2];

const result = arr(numbers1, numbers2);
console.log(result); 
