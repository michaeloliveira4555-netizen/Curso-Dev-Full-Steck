/* Nesta atividade, você deverá criar um programa em JavaScript que mostre a tabuada de um número utilizando um laço de repetição (for ou while).

O programa deve:

criar uma variável com um número

mostrar a tabuada desse número de 1 até 10

exibir os resultados no console */

let x = 5 // multiplicador
let i = 1 // multiplicando
while( i <= 10){
    let resultado = x * y
    console.log(`${x} x ${i} = ${resultado}`)
    i++
}






let x = 5 // Usaremos o valor de x como número para calcular a tabuada!
for (let i = 1; i <= 10; i++) {
  let resultado = x * i
  console.log(`${x} x ${i} = ${resultado}`)
}



let numero1 = 6
let numero2 = 0
while(numero2 <= 10){
    let resultado = numero1 * numero2
    console.log(`${numero1} X ${numero2} = ${resultado}`)
    numero2++
}