const prompt = require("prompt-sync")();

const A = Number(prompt());
const B = Number(prompt());

const MEDIA = (A*3.5 + B*7.5) / 11.0;

console.log(`MEDIA = ${MEDIA.toFixed(5)}`);