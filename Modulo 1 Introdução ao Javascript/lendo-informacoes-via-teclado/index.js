const prompt = require("prompt-sync")();

//Primeira forma
const name = prompt("Qual é o seu nome: ");
console.log("Olá, " + name +"! Prazer em conhece-lo.");

//Segunda forma "mais moderna"

const n1 = Number(prompt("Digite o valor 1: "));
const n2 = Number(prompt("Digite o valor 2: "));
const n3 = Number(prompt("Digite o valor 3: "));

const avg = (n1 + n2 + n3) / 3;

console.log(avg.toFixed(1));





