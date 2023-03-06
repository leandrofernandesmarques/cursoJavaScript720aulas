//Vamos em frente com a aula do curso agora:

let teste1  = 0
if(teste1 === 0){
    teste1 = 10
}
console.log(teste1) //10

// Mas nós sabemos que o valor 0 é tb um boleano para false então podemos fazer o seguinte:

let teste2 = 0 
if (!teste2){//não 0, ou seja, não falso, ou seja (true). Logo, if true{execute o que está nas chaves, ou seja, defina teste2 com o valor 10}
    teste2 = 10
}
console.log(teste2) // 10

//Ok, fica mais fácil nesse caso utilizar o curto-circuito:
let teste3 = 0 // Falsy
teste3 = teste3 || 10
console.log(teste3)
/* Vamos entender o que ocorreu:
Imagine que você tem uma caixa chamada teste3 e você quer colocar 
um número dentro dela. Mas antes de colocar o número, você quer 
verificar se a caixa já tem algo dentro dela. Se a caixa já tiver 
um número, você quer usar esse número. Mas se a caixa estiver vazia, 
você quer colocar o número 10 dentro dela.

A expressão let teste3 = teste3 || 10 faz exatamente isso! 
Ela verifica se a variável teste3 já tem um valor dentro dela.
Se teste3 tiver um valor "truthy" (ou seja, qualquer valor 
diferente de null, undefined, 0, "", NaN ou false), a expressão
irá atribuir esse valor a teste3. Caso contrário, a expressão irá 
atribuir o valor 10 a teste3.

Por exemplo, se teste3 já tiver um valor, como 7, a expressão irá 
atribuir esse valor a teste3 e não irá alterá-lo:

let teste3 = 7; // A caixa já tem o número 7 dentro dela
teste3 = teste3 || 10; // Verifica se a caixa já tem algo dentro dela. 
Como já tem (7), usa esse número.
console.log(teste3); // Imprime 7

Por outro lado, se teste3 estiver vazio (ou seja, 
não tiver nenhum valor atribuído a ele), a expressão irá atribuir 
o valor 10 a teste3:

let teste3; // A caixa está vazia
teste3 = teste3 || 10; // Verifica se a caixa já tem algo dentro dela. Como não tem nada, coloca o número 10 dentro dela.
console.log(teste3); // Imprime 10

*/

