var teclado = require("prompt-sync");
var salario = 0;
var n_pessoas = 0;
var tot_pessoas = 0;
var idade = 0;
do {
    idade = parseFloat(teclado("Digite a idade"));
    salario = parseFloat(teclado("Digite o sal\u00E1rio"));
    if (idade < 30 && salario > 3000) {
        n_pessoas++;
        tot_pessoas++;
    }
    else {
        n_pessoas++;
    }
} while (n_pessoas < 50);
console.log("O total de pessoa \u00E9 ".concat(n_pessoas));
