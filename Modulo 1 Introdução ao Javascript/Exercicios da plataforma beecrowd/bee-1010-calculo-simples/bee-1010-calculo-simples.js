const prompt = require("prompt-sync")();

const linha1 = prompt().split(' ');
const idPeca1 = parseInt(linha1[0], 10);
const qtePeca1 = parseInt(linha1[1], 10);
const valorPeca1 = parseFloat(linha1[2]);

const linha2 = prompt().split(' ');
const idPeca2 = parseInt(linha2[0], 10);
const qtePeca2 = parseInt(linha2[1], 10);
const valorPeca2 = parseFloat(linha2[2]);

const total = (qtePeca1 * valorPeca1) + (qtePeca2 * valorPeca2);

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);