'use strict'
const filter = (arr, func) => {
    let newArr = []

    for(let i = 0; i < arr.length; i++) {
        if(func(arr[i])){ //verifica se o valor do item retorna true, se retornar o valor é passado para o arrey. (como o filter funciona)
            newArr.push(arr[i])
        }
    }
    return newArr
}
export default filter