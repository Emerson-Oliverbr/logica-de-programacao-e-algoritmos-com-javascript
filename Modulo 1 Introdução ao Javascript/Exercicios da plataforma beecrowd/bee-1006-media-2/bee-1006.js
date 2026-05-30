const prompt = require("prompt-sync")();

const A = Number(prompt());
const B = Number(prompt());
const C = Number(prompt());

const MEDIA = (A*2.0 + B*3.0 + C*5.0) / 10.0;

console.log(`MEDIA = ${MEDIA.toFixed(1)}`);