//CODIGO EXPLICADO:

//Imagine a seguinte situação:
const name = null || "Leandro" 
//Afinal name será null ou "Leandro"?
//R: Neste caso será "Leandro" porque o primeiro valor é falsy então ele retorna o segundo
//Mas e nesse caso:
console.log(name)

//Mas e nesse caso:
const fruta = "laranja" || "banana"
// neste caso retorna "laranja", porque o valor do primeiro parâmetro é truthy (String não vazia). 
//QUANDO USAMOS O OPERADOR || O JS RETORNA COMO TRUE O PRIMEIRO VALOR VÁLIDO!!
console.log(fruta)

//Mas e nesse caso:
const moto = "Honda" && "Kawasaki" || null
//Neste caso retorna Kawasaki, porque o primeiro valor é true e o JS continua a verificar a expressão retornando o último valor truly
//QUANDO USAMOS O OPERARDOR && O JS RETORNA O ÚLTIMO VALOR VÁLIDO
console.log(moto)

//Vamos a mais um caso:
const carro = "Volks" && null || "Chevrolet"
//                                                                                                 truly/true   falsy    truly/true
//Ainda sim retorna Chevrolet porque o && tem precedência sobre o || o JS entende sob essa lógica: "Volks" && ( null || "Chevrolet" )
//                                                                                                            |         true        |
console.log(carro)

//Vamos ao curto circuito no JS:
//Imagine a função que imprime o nome da tela:
function printName(name){
    const n = name
    console.log(n)
}
//Se eu chamar ela assim:
printName("Leandro") //Funciona (Descobri o Brasil)
//Mas se eu chamar assim:
printName()//Vou tomar um udefined e como sabemos undefined = falsy
//Vamos a uma utilidade prática disso: 
function printCpf(cpf){
    const doc = cpf || "Digite um CPF (Campo obrigatório)"
    console.log(doc)
}
// Quando chamamos sem parametro, ele exibe a mensagem "Digite um CPF (Campo obrigatório)"
printCpf()

//Agora vamos para o caso do &&:
  function retiraEspada(nome) {
/* Nome é igual a Rei Arthur? truly/true (ou seja exibe o último item que neste 
    caso é 1."Parabéns... || 2.A espada...
    como o operador || exibe o primeiro valor sempre, o resultado é Parabéns...*/
    console.log(nome === "Rei Arthur" && "Parabéns a espada é sua!!" || "A espada ri de seu fracasso")
  }
  retiraEspada("Rei Arthur")

  //E se eu erra o nome?
  function masterSword(nome) {
  //                Link: falsy         falsy                     truly (O operador lógico && quado o falsy já exibe o último valor não falsy, neste caso sem chance)                    
        console.log(nome === "Link" && "A espada te escolheu" || 'A grande arvore Deku disse: "Você não é digno de empunhar a espada que combate a escuridão"' )
      }
      masterSword("Leandro")

//Vamos em frente com a aula do curso agora:

let teste1  = 0
if(teste1 === 0){
    teste1 = 10
}
console.log(teste1) //10

// Mas nós sabemos que o valor 0 é tb um boleano para false então podemos fazer o seguinte:

let teste2 = 0
if (!teste2){
    n = 10
}
/* Vamos entender o que ocorreu aqui: 
1 - teste2 vale 0(false)
2 - se o iverso de teste2 (ou seja true) teste2 recebe 10
Como teste 2 
*/

