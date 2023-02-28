/* OPERADORES LÓGICOS 

Para uma pessoa viajar para o exterior:
Precisa ser maior de 18 anos
OU
Precisa estar acompanhada dos pais
E
Ter comprado o bilhete


*/
let comprouBilhete = true
let idade = 16
let paisPresentes = false

//Abaixo precisamos nos atentar a ordem de precedência, por isso os parenteses.
const podeViajar = comprouBilhete && (idade >= 18 || paisPresentes) //Como paisPresentes é um boleano não precisa colocar === true
console.log(`Pode viajar: ${podeViajar}`)
