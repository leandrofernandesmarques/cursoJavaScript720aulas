
// Código com muitas linhas para fazer algo simples:

let idade = 17

let msgMaioridade = ""
if (idade >= 18){
    msgMaioridade = "Maior de idade."
}else msgMaioridade = "Menor de idade"

console.log(msgMaioridade)
console.log("")

idade = 17

//Agora com operador ternário:

/* let msgMaiorMenor = (idade >= 18)? true : false */

//Ficando assim:
let msgMaiorMenor = (idade >= 18)? "É maior":"É menor"
console.log(msgMaiorMenor)