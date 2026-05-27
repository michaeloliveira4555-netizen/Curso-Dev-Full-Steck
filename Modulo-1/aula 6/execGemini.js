/*Crie um array com várias idades (ex: let idades = [15, 22, 17, 30, 12, 18]);

Crie uma variável maiores que inicia em 0 para fazer a contagem.

Use o laço for com um if dentro para contar quantas dessas idades são maiores ou iguais a 18.

Exiba o resultado da contagem no console.*/

let idades = [15, 22, 17, 30, 12, 18]
let maiores = 0

for (let maior = 0; maior <= idades.length; maior++) {
    if (idades[maior] >= 18) {
        maiores++
    }
}

console.log(`São ${maiores} maior de idade.`)