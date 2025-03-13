console.clear();
let notaUm: number = 8;
let notaDois: number = 7.5;
let media: number = (8 + 7.5) / 2;
console.log(`Média é ${media}`);
console.log();//pula uma linha para proxima mensagem

/* && condição lógica E as duas sentenças deve ser verdadeiras
    || condição lógica OU uma das sentenças devem ser verdadeira */
let statusUm: boolean = true;
let statusZero: boolean = false;

if (statusUm && statusZero) {
    console.log(`Não vou ser executado porque uma
                        sentença é verdadeira`),
                    
} else if (statusUm && statusZero) {
    console.log(`Vou ser executado porque as duas
                        sentenças são verdadeiras`);
}
if (statusUm || statusZero) {
    console.log(`Vou ser executado porque uma
                    das sentenças é verdadeira`);
}