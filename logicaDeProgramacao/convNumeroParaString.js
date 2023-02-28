let n1 = "oi"
let n2 = 15
n2 = n2 + "" //converte o 10 para string
console.log(n2, typeof n2)

n2.toString()
console.log(n2, typeof n2) // Melhor converter assim

const n3 = 12
n3.toString(16)
console.log(n3,typeof n3)//Não deu certo, não sei porquê

const n4 = 12;
console.log(n4.toString(16)); // Hexadecimal.Deu certo mas continuou number, vai entender
console.log(typeof n4)

const n5 = 12;
console.log(n5.toString(2)); // Binário. Deu certo mas continuou number, vai entender
console.log(typeof n5)









