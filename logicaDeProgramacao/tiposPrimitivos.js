// String, number (int,floats),boolean, undefined, null, symbol

/* String */
let minhaVar = "minha string"
let minhaVar2 = 'minha string'
let minhaVar3 = 'minha "string" com aspas duplas'
console.log(minhaVar3)
let minhaVar4 = "minha \"string\" com aspas duplas"
console.log(minhaVar4)
let minhaVar5 = `Minha template literal com crase`
console.log(minhaVar5)

let idade = 40
console.log(idade)
console.log(`Minha idade é ` + idade)
console.log(`Minha idade é ${idade}`)
console.log(`minha var é do tipo: ${typeof minhaVar} e idade é do tipo ${typeof idade}`)
console.log(typeof minhaVar, typeof idade, `string`, 20)/* dá para separar tudo por vírgula */

/* Numbers */
const n1 = 10
const n2 = 1.1
console.log(`Minha variavel n1 é do tipo ${typeof n1} e o tipo de minha variável n2 é ${typeof n2}`)

/* boolean */
const isValid = false
console.log(`isValid: ${isValid}`)

/*Undefined - Variável foi criada mas não foi atribuido um valor*/
let varTeste
console.log(varTeste)
console.log(typeof varTeste)
varTeste = 10
console.log(varTeste, typeof varTeste)

/* Null - Quando nós não queremos declarar uma variável sem valor (nulo) */

let varTeste2 = null
console.log(varTeste2, typeof varTeste2)/* A impressão do object vem de versões anteriores, está aí para não quebrar códigos antigos */



