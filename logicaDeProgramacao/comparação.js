/* 
COMPARAÇÃO

== Igualdade de valor
=== Igualdade de valor e tipo
>< menor e maior
<=,>= menor ou maior ou igual
!= Valores diferentes
!== Valores e tipos diferentes
*/


let n1 = 10
let n2 = 5
let n3 = 265

let n5 = "10"
console.log(n1 =="10") //True - Não comparou o tipo
console.log(n1 === "10") //False - Valor igual mas tipos diferentes
console.log(n1 === 10) //True

console.log("")

// True
console.log(n2 < 10)

// False
console.log(n2 > 10)

//True
console.log(n1 >= 10)

//True
console.log(n1 <= 10)

//false
console.log(n1 != "10")

//true
console.log(n1 !== "10")








