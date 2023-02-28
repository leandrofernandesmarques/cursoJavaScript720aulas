/* parseInt, parseFloat, number() */


let n1 = 10
let n2 = `2`
console.log(n1 * n2, typeof n1, typeof n2)
console.log(n1/n2, typeof n1, typeof n2)
console.log(n1-n2, typeof n1, typeof n2)
console.log(`Resultado: ${n1 + n2} Não rolou!! ` + (typeof n1, typeof n2))
console.log("")

n2 = parseInt(n2)
console.log(n1 + n2, typeof n1, typeof n2)
console.log("")

let n3 = "10.9999"
n3 = parseInt(n3)
console.log(n3, typeof n3)
console.log("")

let n4 = "14.9999"
n4 = parseFloat(n4, typeof n4)
console.log(n4, typeof n4)

let n5 = "16a"
n5 = parseInt(n5)
console.log(n5, typeof n5)

let n6 = "a14"
n6 = parseInt(n6)
console.log(n6, typeof n6)

let n7 = "oi"
n7 = parseInt(n7)
console.log(n7)







