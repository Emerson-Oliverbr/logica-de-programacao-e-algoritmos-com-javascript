const prompt = require("prompt-sync")();

const raio = Number(prompt());

const pi = 3.14159;
const area = pi * Math.pow(raio, 2);

console.log(`A=${area.toFixed(4)}`);



