const nota = 60;
let mensagem = null;

if(nota >= 80) {
    mensagem = "Parabéns voce foi aprovado!";
}
else if(nota >= 60) {
    mensagem = "Voce está na lista de espera!";    
}
else {
    mensagem = "Voce foi reprovado, estude mais!";
}

console.log(mensagem);

