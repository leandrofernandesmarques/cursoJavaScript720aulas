// Definindo as variáveis
const comprouBilhete = true;
const idade = 12;
const paisPresentes = true;

// Verificando se a pessoa pode viajar
let podeViajar = true;
let motivos = [];

if(comprouBilhete && (idade >=18 || paisPresentes)){
    console.log(`Pode viajar!!`)
}   else{
        console.log(`Não pode viajar!!`)
    }

//Melhorando...

if (!comprouBilhete) {
  podeViajar = false;
  motivos.push("não comprou o bilhete");
}

if (idade < 18 && !paisPresentes) {
  podeViajar = false;
  motivos.push("é menor sem acompanhamento dos pais");
} else if (idade < 18 && paisPresentes && paisPresentes !== true) {
  podeViajar = false;
  motivos.push("é menor e não tem permissão dos pais para viajar");
}

if (podeViajar) {
  console.log("A pessoa pode viajar.");
} else {
  console.log(`A pessoa não pode viajar pois ${motivos.join(" e ")}.`);
}

