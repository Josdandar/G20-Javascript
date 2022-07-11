
// let askWord = prompt("Please input a phrase")

// const palindromo = (word) =>{


//     let reversedWord = ""
//     for (let index = word.length-1 ; index >= 0; index--) {
//         reversedWord += word[index]
        
//     }
//     console.log(reversedWord)
//     return reversedWord

// }

// reversedWord(askWord)



const palabra = () => {
    let palabra = prompt("Please type a word or sentence")
    let removedSpace = palabra.replace(" ", "")
    let k = removedSpace.length
    let invertida = '';
    for(let i = (k-1) ; i >= 0 ; i--){
       invertida += removedSpace[i];
        if(removedSpace === invertida){
            return 'Es palindromo'
        }
    }
    return 'No es palindromo'
    }

alert(palabra())


    