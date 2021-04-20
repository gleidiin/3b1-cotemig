const prompt = require("prompt-sync")();

const nome = prompt("Qual o seu nome? ");

console.log(`Olá, ${nome}! Vamos fazer um teste simples!`);

const idade = prompt("Qual a sua idade? ");

let risco = 0;
if(idade >= 60) {
    risco++;
} 

console.log(`${nome} a quantidade de agravante que você tem é ${risco}`); 