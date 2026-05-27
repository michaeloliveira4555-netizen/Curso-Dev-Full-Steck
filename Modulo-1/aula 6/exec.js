


let numeros = [1, 5, 4, 8, 3, 10]
let quantidadePares = 0

for(let pos = 0; pos < numeros.length; pos++){
    if(numeros[pos] % 2 == 0){
        //quantidadePares = quantidadePares + 1
        quantidadePares++
    }
}

console.log(`Quantidade de números pares: ${quantidadePares}`)