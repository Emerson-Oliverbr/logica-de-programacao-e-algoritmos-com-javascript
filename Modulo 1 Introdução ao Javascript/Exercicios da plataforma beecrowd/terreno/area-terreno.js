const prompt = require("prompt-sync")();

const largura = Number(prompt());
const comprimento = Number(prompt());
const valorMetroQuadrado = Number(prompt());

const area = largura * comprimento;
const preco = area * valorMetroQuadrado;

console.log(`AREA = ${area.toFixed(2)}`);
console.log(`PRECO = ${preco.toFixed(2)}`);