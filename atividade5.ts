let teclado =require (`prompt-sync`);
let salario: number = 0;
let n_pessoas: number = 0;
let tot_pessoas: number = 0;
let idade : number = 0;

do{
    idade = parseFloat(teclado(`Digite a idade`));
    salario =parseFloat(teclado(`Digite o salário`));

    if(idade <30 && salario > 3000){
      n_pessoas++;
      tot_pessoas++;
}


else{
    n_pessoas++;
}
    
}while (n_pessoas < 50)

    console.log (`O total de pessoa é ${n_pessoas}`)

