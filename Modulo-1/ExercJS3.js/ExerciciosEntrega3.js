const prompt = require("prompt-sync")()
/*
LlSTA DE TAREFAS 3 - T1/2026

1. Crie um objeto representando um produto com as propriedades: nome, preço,
categoria e quantidade em estoque. Use for...in para percorrer e exibir todas as
propriedades e seus valores. Em seguida, adicione uma nova propriedade
desconto ao objeto e exiba o preço final calculado.

let produto ={
    nome: "Mouse",
    preco: 30,
    categoria: "hardwear",
    estoque: 10
}

for (let chave in produto){
    console.log(`${chave}: ${produto[chave]}`)
}

produto.desconto = 0.10

let precofinal = produto.preco - (produto.preco * produto.desconto)

console.log(`Preço final: ${precofinal}`)

2. Crie dois objetos representando personagens de um jogo, cada um com as
propriedades: nome, vida, ataque e defesa. Use for...in para exibir os atributos de
cada personagem lado a lado e determine qual deles tem maior poder total
(soma de vida + ataque + defesa).

let personagem1 ={
    nome: "goku",
    vida: 100,
    ataque: 90,
    defesa: 85
}

let personagem2 ={
    nome: "vegeta",
    vida: 100,
    ataque: 80,
    defesa: 90
}

for (chave in personagem1){
    console.log(`${chave}: ${personagem1[chave]} | ${chave}: ${personagem2[chave]}`)
}

let podertotal1 = (personagem1.vida+personagem1.ataque+personagem1.defesa)
let podertotal2 = (personagem2.vida+personagem2.ataque+personagem2.defesa)

if(podertotal1 > podertotal2){
    console.log(`O ${personagem1.nome} é o mais forte!`)
}else{
    console.log(`O ${personagem2.nome} é o mais forte!`)
}

3. Crie um objeto representando um funcionário com nome, cargo, salário e anos de
experiência. Use for...in para listar todos os dados. Com base nos anos de
experiência, calcule e exiba o bônus anual: até 2 anos = 5% do salário, de 3 a 5
anos = 10%, acima de 5 anos = 15%.

let funcionario = {
    nome: "João",
    salario: 10000,
    cargo: "Gerente",
    experiencia: 10
}

for (chave in funcionario){
    console.log(`${chave}: ${funcionario[chave]}`)
}
if (funcionario.experiencia <= 2){
    console.log(`${funcionario.nome} receberá 5% de bônus anual, e seu salário será ${funcionario.salario + (funcionario.salario * 0.05)}`)
} else if (funcionario.experiencia >= 3 && funcionario.experiencia <= 5 ) {
    console.log(`${funcionario.nome} receberá 10% de bônus anual, e seu salário será ${funcionario.salario + (funcionario.salario * 0.10)}`)
} else {
    console.log(`${funcionario.nome} receberá 15% de bônus anual, e seu salário será ${funcionario.salario + (funcionario.salario * 0.15)}`)
}

4. Crie um objeto onde cada chave é o nome de um item e o valor é a quantidade
no inventário do jogador (ex: { espada: 1, poção: 5, escudo: 2 }). Use for...in para
listar o inventário completo. Permita que o usuário informe um item para usar:
reduza a quantidade em 1 ou exiba "item esgotado" se for zero.

let inventario = 
    {espada: 2, poção: 5, escudo: 2}

console.log('Inventário atual:')

for(chave in inventario){
    console.log(`${chave}: ${inventario[chave]}`)
}

let item = prompt('Informe um item do inventário para usar (espada, poção, escudo)? ')

if (inventario[item] !== undefined){
    if (inventario[item] > 0){
        (inventario[item] = inventario[item] - 1)
    } else {
        console.log('Item esgotado!')
    }
} else {
    console.log('Esse item é inválido!')
}

console.log('Inventário atual: ')

for(chave in inventario){
    console.log(`${chave}: ${inventario[chave]}`)
}

5. Crie um objeto representando o orçamento mensal de uma pessoa, com
categorias como alimentação, transporte, lazer e saúde, cada uma com valor
planejado e valor gasto. Use for...in para percorrer as categorias e exibir se cada
uma ficou dentro ou acima do orçamento, e calcule o saldo geral do mês.

let orcamento ={
    alimentacao: {planejado: 1000, realizado: 1100},
    transporte: {planejado: 600, realizado: 500},
    lazer: {planejado: 300, realizado: 340},
    saude: {planejado: 150, realizado: 100}
    
}

console.log("Orçamento mensal: ")

let saldoGeral = 0

for (gastos in orcamento){
    let planejado = orcamento[gastos].planejado
    let realizado = orcamento[gastos].realizado

    console.log(`${gastos}: Planejado: ${planejado} e Realizado: ${realizado}`)

    if (planejado>=realizado){
        console.log('Parabéns, você ficou dentro do orçamento!')
    } else {
        console.log('Cuidado você ultrapassou o orçamento.')
    }

    let saldo = planejado - realizado
    saldoGeral = saldoGeral + saldo

}

console.log(`Saldo no final do mês é de: ${saldoGeral}`)

6. Crie um array de objetos representando músicas, cada uma com título, artista e
duração em segundos. Use for...of para exibir cada música no formato "Artista —
Título (mm:ss)". Ao final, use forEach para somar a duração total e exiba-a no
mesmo formato.

let musicas = [
  { titulo: "Bohemian Rhapsody", artista: "Queen", duracao: 354 },
  { titulo: "Hotel California", artista: "Eagles", duracao: 390 },
  { titulo: "Imagine", artista: "John Lennon", duracao: 183 },
]

for (let exibir of musicas) {
  let minutos = Math.floor(exibir.duracao / 60)
  let segundos = exibir.duracao % 60

  console.log(`${exibir.artista} - ${exibir.titulo} - ${minutos}:${segundos}`)
}

let duraçãoSegundos = 0

musicas.forEach(function (musica) {
  duraçãoSegundos = duraçãoSegundos + musica.duracao
})

let minutosTotais = Math.floor(duraçãoSegundos / 60)
let segundosTotais = duraçãoSegundos % 60

console.log(`A duração total é de: ${minutosTotais}:${segundosTotais}!`)

7. Crie um array de objetos com nome e nota de 6 alunos. Use for...of para classificar
cada aluno (Aprovado, Recuperação ou Reprovado) e exibir o resultado. Use
forEach para calcular e exibir separadamente a média dos aprovados e a média
dos reprovados.
*/


/*
8. Crie um array de objetos representando produtos com nome, preço e quantidade.
Use forEach para calcular o valor total em estoque de cada produto (preço ×
quantidade) e exibir um relatório. Ao final, exiba o valor total geral de todo o
estoque.
9. Crie um array de objetos onde cada objeto representa um contato com nome,
telefone e e-mail. Use forEach para listar todos os contatos formatados. Permita
buscar um contato pelo nome usando for...of e exiba os dados encontrados ou
uma mensagem de "não encontrado".
10. Implemente uma pilha usando um array para simular o histórico de um
navegador. Crie as funções visitar(pagina) (push), voltar() (pop) e paginaAtual()
(peek). Simule uma sessão: visite 4 páginas, volte 2 vezes e exiba a página atual a
cada operação.
11. Implemente uma fila usando um array para simular o atendimento de uma
clínica. Crie as funções chegarPaciente(nome) (enqueue), chamarProximo()
(dequeue) e exibirFila(). Simule a chegada de 5 pacientes e o atendimento de 3,
exibindo o estado da fila a cada operação.
12. Implemente uma lista ligada simples usando nós ({ valor, proximo }). Crie as
funções adicionar(tarefa), remover(tarefa) e exibir() que percorre todos os nós.
Simule um gerenciador de tarefas: adicione 4 tarefas, remova uma pelo nome e
exiba a lista antes e depois.
*/
