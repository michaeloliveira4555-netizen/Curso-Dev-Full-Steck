let dia = new Date()
let diasemana = dia.getDay() // aqui pode ser um número e ai retornará o dia da semana correspondente, onde 0 é domingo, 1 é segunda-feira, e assim por diante.
/*
    0 - Domingo
    1 - Segunda-feira
    2 - Terça-feira
    3 - Quarta-feira
    4 - Quinta-feira
    5 - Sexta-feira
    6 - Sábado
*/
console.log(diasemana) //aqui ele vai imprimir o número correspondente ao dia da semana atual, de acordo com a função getDay() do objeto Date.
switch(diasemana){ // aqui ele vai comparar o valor de diasemana com os casos definidos abaixo, e executar o código correspondente ao caso que for igual ao valor de diasemana.
    case 0:
        console.log("Hoje é domingo")
        break
    case 1:
        console.log("Hoje é segunda-feira")
        break
    case 2:
        console.log("Hoje é terça-feira")
        break
    case 3:
        console.log("Hoje é quarta-feira")
        break
    case 4:
        console.log("Hoje é quinta-feira")
        break
    case 5:
        console.log("Hoje é sexta-feira")
        break
    case 6:
        console.log("Hoje é sábado")
        break
    default:
        console.log("Dia da semana inválido")
        break
}       
