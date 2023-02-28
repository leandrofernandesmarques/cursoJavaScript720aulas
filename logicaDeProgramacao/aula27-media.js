const n1 = 0
const n2 = 8
const media = (n1 + n2) / 2

console.log(`A média é: ${media}`)

if(n1 === 0 || n2 === 0){
    console.log("Reprovado. Você zerou um ou dois bimestres.")
}else if(media < 7){
    console.log(`Recuperação`)
}else{
    console.log(`Aprovado!!`)
}
