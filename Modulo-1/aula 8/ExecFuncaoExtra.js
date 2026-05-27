/*
1. Função com parâmetros e retorno: Criar uma função que calcule a média de três notas
passadas como parâmetros.
Instruções:
 Criar uma função que receba três parâmetros (nota1, nota2,nota3);
A função deve calcular a média das três notas e retornar o valor;
Chamar a função e exibir a média no console.


function notas(nota1, nota2, nota3){
    return ((nota1 + nota2 + nota3) / 3)
}

let media = notas(10,9,8)
console.log(`Sua média foi: ${media}`)

2. Função com parâmetros: Criar uma função que verifique se uma pessoa é maior de
idade ou menor de idade.
Instruções:
 Criar uma função chamada que receba um parâmetro (idade);
Se a idade for 18 ou mais, a função deve retornar a mensagem "Você é maior de idade";
Se a idade for menor que 18, a função deve retornar a mensagem "Você é menor de idade";
Chamar a função passando uma idade e exibir o resultado no console.

function idade(a){
    return a 
}

let idadePessoa = idade(18)
if (idadePessoa >= 18){
    console.log(`Você é maior de idade`)
} else{
    console.log(`Você é menor de idade`)
}
  
3. Função com parâmetros e retorno: Criar uma função que receba dois números e um
operador e retorne o resultado da operação.
Instruções:
Criar uma função chamada calculadora que receba três parâmetros: num1, num2 e operador.
O operador pode ser um dos seguintes: + (soma), - (subtração), *(multiplicação), / (divisão);
A função deve retornar o resultado da operação;
Chamar a função com diferentes operadores e exibir os resultados no console.

function calculadora(a, b, c){
    const soma = a + c;
    const multiplicacao = a * c;
    const divisao = a / c;
    const subtracao = a - c;
    const soma1 = b + c;
    const multiplicacao1 = b * c;
    const divisao1 = b / c;
    const subtracao1 = b - c;

    return [soma, multiplicacao, divisao, subtracao, soma1, multiplicacao1, divisao1, subtracao1]
}
const resultado = calculadora(10, 12, 5)

console.log(`O resultado da soma é: ${resultado[0]}`)
console.log(`O resultado da multiplicação é: ${resultado[1]}`)
console.log(`O resultado da divisão é: ${resultado[2]}`)
console.log(`O resultado da subtração é: ${resultado[3]}`)
console.log(`O resultado da soma é: ${resultado[4]}`)
console.log(`O resultado da multiplicação é: ${resultado[5]}`)
console.log(`O resultado da divisão é: ${resultado[6]}`)
console.log(`O resultado da subtração é: ${resultado[7]}`)
*/