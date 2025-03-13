console.clear();
var notaUm = 8;
var notaDois = 7.5;
var media = (8 + 7.5) / 2;
console.log("M\u00E9dia \u00E9 ".concat(media));
console.log(); //pula uma linha para proxima mensagem
/* && condição lógica E as duas sentenças deve ser verdadeiras
    || condição lógica OU uma das sentenças devem ser verdadeira */
var statusUm = true;
var statusZero = false;
if (statusUm && statusZero) {
    console.log("N\u00E3o vou ser executado porque uma\n                        senten\u00E7a \u00E9 verdadeira"),
    ;
}
else if (statusUm && statusZero) {
    console.log("Vou ser executado porque as duas\n                        senten\u00E7as s\u00E3o verdadeiras");
}
if (statusUm || statusZero) {
    console.log("Vou ser executado porque uma\n                    das senten\u00E7as \u00E9 verdadeira");
}
