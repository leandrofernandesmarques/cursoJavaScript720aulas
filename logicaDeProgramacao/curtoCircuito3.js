let eValido = true //Se for false não vai executar o código
if (eValido){
    console.log("É Válido!!")
}

//Fica mais fácil como o curto-circuito:
eValido && console.log("É Válido!!")

//Vamos para mais testes:

//2 ITENS:
//          truly ----->truly
const n = "José" && "Maria" //Maria
console.log(n)
// Verificou primeira e passou para segunda (n = Maria)

//        falsy ->truly
const n2 = null && "Maria"//""
console.log(n2)
//Verificou primeira e parou (n2 = null)

//          truly -->falsy
const n3 = "José" && null
console.log(n3)
//verificou primeira e passou para segunda (n3 = null)

//         falsy->falsy
const n4 = null && null//""
console.log(n4)
//Verificou primeira e parou (n4 = null)

console.log("***************************")
//3 ITENS:

//          truly ----->truly
const n5 = "José" && "Maria" && "Marta" //Maria
console.log(n5)
// Verificou primeira e passou para segunda (n = Maria)

//        falsy ->truly
const n6 = null && "Maria" && "Marta"//""
console.log(n6)
//Verificou primeira e parou (n2 = null)

//          truly -->falsy
const n7 = "José" && null && "Marta"
console.log(n7)
//verificou primeira e passou para segunda (n3 = null)

//         falsy->falsy
const n8 = null && null && "Marta"//""
console.log(n8)
//Verificou primeira e parou (n4 = null)

console.log("***************************")

//Bora agora para o ||
//2 ITENS:
//          truly ----->truly
const n11 = "José" || "Maria" //Maria
console.log(n11)
// Verificou primeira e já imprimiu (n = Maria)

//        falsy ->truly
const n12 = null || "Maria"//""
console.log(n12)
//Verificou primeira e passou para segunda e imprimiu

//          truly -->falsy
const n13 = "José" || null
console.log(n13)
//verificou primeira e imprimiu

//         falsy->falsy
const n14 = null || null//""
console.log(n14)
//Verificou primeira verificou a segunda e tudo falsy (imprimiu o null)

console.log("***************************")
//3 ITENS:

//          truly ----->truly
const n15 = "José" || "Maria" || "Marta" //Maria
console.log(n15)


//        falsy ->truly
const n16 = null || "Maria" || "Marta"//""
console.log(n16)


//          truly -->falsy
const n17 = "José" || null || "Marta"
console.log(n17)


//         falsy->falsy
const n18 = null || null || "Marta"//""
console.log(n18)




