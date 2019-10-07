const sum = (arr) => {
    if (arr.length === 0) //executar até o tamanho do array ser 0 - estratégia para parar o looping
        return 0
        const [head, ...tail] = arr
    return head + sum(tail)
}

console.log(sum([1, 2, 3]))