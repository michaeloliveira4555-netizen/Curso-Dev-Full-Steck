/* 
const prompt = require('prompt-sync')()

LISTA DE EXERCÍCIOS

1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if.

let numero = 12

if( numero % 2 === 0 ){
    console.log("O número digitado é par")
}else
    console.log("O número digitado é ímpar")

2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else.

let idade = 60

if (idade <= 11) {
    console.log("Criança")
} else if (idade <= 17) {
    console.log("Adolescente")
} else if (idade <= 59) {
    console.log("Adulto")
} else {
    console.log("Idoso")
}

3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado",
"Recuperação", ou "Reprovado" utilizando if-else if.

let nota = 4

if ( nota > 10) {
    console.log("Essa nota não é válida")
} else if ( nota >= 7){
    console.log("Aprovado")
}else if ( nota >= 5){
    console.log("Recuperação")
}else if ( nota <= 4){
    console.log("Reprovado")
}

4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.

let tamanho = (prompt("Qual tamanho de sorvete você quer: Grande, Médio ou Pequeno?"))

switch (tamanho){
    case "grande":
        console.log("Você escolheu o tamanho grande")
        break
    case "médio":
        console.log("Você escolheu o tamanho médio")
        break
    case "pequeno":
        console.log("Você escolheu o tamanho pequeno")
        break
    default:
        console.log("Opção inválida")
}   

5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.


let peso = Number(prompt("Qual seu peso?"))
let altura = Number(prompt("Qual sua Altura?"))
    if (peso / (altura ** 2) >= 30){
        console.log("Obesidade")
    }else if (peso / (altura ** 2) >= 25 && (peso / (altura ** 2) <= 29.9)){
        console.log("Sobrepeso")
    }else if (peso / (altura ** 2) >= 18.5 && (peso / (altura ** 2) <= 24.9)){
        console.log("Peso normal")
    }else if (peso / (altura ** 2) <= 18.4){
        console.log("Baixo peso")
    }


6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
● Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C <
A + B
● Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
● Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
● Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)


let ladoA = Number(prompt("Qual a medida do lado A?"))
let ladoB = Number(prompt("Qual a medida do lado B?"))
let ladoC = Number(prompt("Qual a medida do lado C?"))

if(ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB){
    if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
        console.log("Triângulo isósceles")
    }else if (ladoA != ladoB && ladoB != ladoC){
        console.log("Triângulo escaleno")
    }else if (ladoA == ladoB && ladoB == ladoC){
        console.log("Triângulo equilátero")
    }
}else {
    console.log("Não é um triângulo")
}

7. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a
média aritmética desses números.


let soma = 0
let contador = 0

let numero = Number(prompt("Digite um número: "))

while (numero !== 0){
    soma = soma + numero
    contador++
    numero = Number(prompt("Digite outro número: "))
}
let media = (soma / contador)
console.log(`A média aritmética é: ${media}`)

8. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando
um loop for ou while.

let numero = Number(prompt("Digte um número: "))
let fatorial = 1

for (i = 1; i <= numero; i++){
    fatorial = fatorial * i
}
console.log(`O valor fatorial de ${numero} é: ${fatorial}.`)

9. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.


let numero1 = 0
let numero2 = 1


for (let i = 1; i <= 10; i++){
    console.log(numero1)
    let resultado = numero1 + numero2
    numero1 = numero2
    numero2 = resultado
}

10. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados.

let lista = []

for ( let i = 0; i < 7; i++) {
    let lista1 = prompt("Digite um nome: ")
    lista.push(lista1)
}
for (let i = 6; i >= 0; i--) {
    console.log(lista[i])
}

11. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade.

let nome = []
let idade = []

for (let i = 0; i < 9; i++) {
    let nome1 = String(prompt("Digite o nome de uma pessoa: "))
    nome.push(nome1)
    let idade1 = Number(prompt("Defina uma idade para essa pessoa: "))
    idade.push(idade1)
}

for (let i = 0; i < 9; i++) {
    if (idade[i] < 18)
        console.log(nome[i], "tem", idade[i], "e é menor de idade.")
}


12. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa
e retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: 
peso ideal = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.

function calcular (alt, sexo){
    let resultado = 0
    
    if (sexo === "homem"){
       resultado = (72.7 * alt - 58)
    } else {
       resultado = (62.1 * alt - 44.7)
    } 

return resultado
}

let altura = Number(prompt("Qual sua altura? "))
let sexo = String(prompt("Você define-se como homem ou mulher? "))

let resultado = calcular(altura, sexo)

console.log(resultado)


13. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no
seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
○ Matrícula:
○ Nome:
○ Salário bruto:
○ Dedução INSS:
○ Salário líquido:
○ (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a
redução do INSS).

let funcionarios = [
    {matricula: 1, nome: "Pedro", salarioBruto: 1600, deducaoInss: 12},
    {matricula: 2, nome: "João", salarioBruto: 1600, deducaoInss: 12}
]

for (let i = 0; i < funcionarios.length; i++){
    let funcionario = funcionarios[i]
    
    let desconto = (funcionario.salarioBruto * (funcionario.deducaoInss / 100))
    let salarioLiquido = (funcionario.salarioBruto - desconto)

console.log("Contracheque")
console.log("Matrícula: ",funcionario.matricula)
console.log("Nome: ",funcionario.nome)
console.log("Salario Bruto: ",funcionario.salarioBruto)
console.log("Dedução INSS:",funcionario.deducaoInss,"%")
console.log("Salario Líquido: ",salarioLiquido)
console.log("===================================\n")
}

14. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados
sobre salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a
média do número de filhos, o maior salário e o percentual de pessoas com salário até
R$350,00.

function pesquisa(){
    let salario = 0
    let filho = 0
    let pessoas = 0
    let pessoas350 = 0
    let maiorSal = 0

    let salarios = Number(prompt("Qual seu salário?"))

    while(salarios >= 0){
        let filhos = Number(prompt('Quantos filhos você tem?'))
        pessoas++
        filho = filho + filhos
        salario = salario + salarios
        if (salarios > maiorSal){
            maiorSal = salarios
        }
        if (salarios <= 350){
            pessoas350++
        }
        salarios = Number(prompt("Digite o salário da próxima pessoa (ou um número negativo para parar): "))
    }

    let mediasalarios = salario / pessoas
    let mediafilhos = filho / pessoas
    let percentual350 = (pessoas350 / pessoas) * 100

    return{
        mediasalarios,
        mediafilhos,
        maiorSal,
        percentual350
    }

}

let resultado = pesquisa()
console.log(resultado)

15. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da diagonal
principal são iguais a 1 e os demais são nulos.

for (let i = 0; i < 7; i++){
    let linha = [] 

    for (let j = 0; j < 7; j++){

        if( i == j){
            linha.push(1)
        }else{
            linha.push(0)
        }
    }
console.log(linha.join(' '))
}

16. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M.

let M = [
    [1, -2, 3, -4, 5, -6, 7, -8],
    [9, 10, 11, 12, 13, 14, 15, 16],
    [-1, -2, -3, 4, 5, 6, 7, 8],
    [0, 0, 0, 0, 0, 0, 0, -5],
    [-9, -8, -7, -6, -5, -4, 3, 2],
    [1, 2, 3, 4, 5, 6, 7, 8]
]

let c = []

for (let i = 0; i < 6; i++){
    let contadorNegativos = 0

    for(let j = 0; j < 8; j++){
        if(M[i][j] < 0){
        contadorNegativos++
        }
    }

    c.push(contadorNegativos)

}

console.log(c)


17. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
nome e idade.

let pessoa = {
    nome: "Angelo",
    idade: 18
}

console.log(pessoa.idade)
pessoa.email = "angelo@email.com"
console.log(pessoa)



18. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays.

let dados ={
    numeros: 12,
    frases: "Curso dev full steck",
    arrays: [12, 13, 14]
}

function filtrarArrays(objetoOriginal){
    let apenasArrays = {}
    for(let chave in objetoOriginal){
        if (Array.isArray(objetoOriginal[chave])){
            apenasArrays[chave] = objetoOriginal[chave]
        }
    }
    return apenasArrays
}

let resultado = filtrarArrays(dados)
console.log(resultado)

19. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm
precedência sobre as do obj1 em caso de conflitos.

let obj1 = {
    nome: "Pedro", idade: 45, cidade: "São Paulo"
}
let obj2 = {
    nome: "Antônio", idade: 51, cidade: "Restinga"
}

function mesclarObjetos(objeto1, objeto2){
    let obj3 = {}
    for(chave in objeto1)
        obj3[chave] = objeto1[chave]
    for(chave in objeto2)
        obj3[chave] = objeto2[chave]

    return obj3
}

let resultado = mesclarObjetos(obj1, obj2)
console.log(resultado)

20. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é o
número de vezes que a string aparece no array.

let nomes = ["Antônio", "Mateus", "Andre", "Andre", "Pedro", "João", "João"]

let listaNomes = {}

for(chave in nomes){
    let nome = nomes[chave]

    if (listaNomes[nome] !== undefined){
        listaNomes[nome] = listaNomes[nome] + 1
    } else {
        listaNomes[nome] = 1
    }
}
console.log(listaNomes)

21. Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
de vendas por vendedor.

let vendas = [
    {vendedor: "João", valor: 2000},
    {vendedor: "Pedro", valor: 3300},
    {vendedor: "Mateus", valor: 1800},
    {vendedor: "João", valor: 1000}
]

function somaVendas (vendas){
    let total = {}
    
    for(chave in vendas){
        let vendaAtual = vendas[chave]
        let nome = vendaAtual.vendedor
        let valor = vendaAtual.valor

        if(total[nome] !== undefined){
            total[nome] = total[nome] + valor
        } else {
            total[nome] = valor
        }
    }
return total
}
let resultado = somaVendas(vendas)
console.log(resultado)
*/