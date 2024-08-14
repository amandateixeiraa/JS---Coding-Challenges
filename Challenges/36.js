// Create a function that converts a string to an array of characters
const text = "Airplane"

function toArray (text){
    let charArray = []
    for(let i = 0; i < text.length; i++){
        let char = text[i]
        charArray.push(char)
    }
    console.log(charArray)
}


toArray(text);