// AULA 5 //

let media = 10

if(media >= 6){
    console.log("Aprovado")
    if(media == 10){
        console.log("Parabéns, você tirou a nota máxima!")
    }else if(media >= 8 && media < 10){
        console.log("Ótimo trabalho, você tirou uma nota excelente!")
    }
}else if(media < 6) {
    console.log("Reprovado")
}