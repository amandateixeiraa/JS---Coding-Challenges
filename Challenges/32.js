/** Create a function that will capitalize the first letter of each word in a text */

function capitalize(text){
    let arrText = text.split(" ")
    let finalText = []
    for(let i = 0; i < arrText.length; i++){
        let index = 0;
        let word = arrText[i]
        let char = word.charAt(index)
        while(/[.,\/#!$%\^&\*;:{}=\-_`"'~()]/.test(char) ){
            char = word.charAt(index += 1)
        }

        let charUpper = char.toUpperCase()
        let replaceChar = word.replace(char, charUpper)
        finalText.push(replaceChar)
    }
    return finalText.join(" ")
   
 
    

}
const result = capitalize("This is the first line. 'Hi guys!'")
console.log(result)



