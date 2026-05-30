const prompt = require("prompt-sync")();

const A = Number(prompt());
const B = Number(prompt());
const C = Number(prompt());
const D = Number(prompt());

const DIFERENCA = (A * B - C * D);

console.log(`MEDIA = ${DIFERENCA}`);