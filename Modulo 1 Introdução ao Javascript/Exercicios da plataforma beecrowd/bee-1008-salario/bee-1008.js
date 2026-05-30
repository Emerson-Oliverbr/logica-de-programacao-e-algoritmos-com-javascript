const prompt = require("prompt-sync")();

const numero = Number(prompt());
const quantidaDeHorasTrabalhadas = Number(prompt());
const valorHora = Number(prompt());

const salarioLiquido = quantidaDeHorasTrabalhadas * valorHora;

console.log(`Number = ${numero}`);
console.log(`SALARY = U$ ${salarioLiquido.toFixed(2)}`);

