/*Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta
e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;*/

var precoInicial = 100;
var formaDePagamento = 4;

if(formaDePagamento === 1){
    var desconto = (precoInicial * 0.1);
    console.log("O preço final ficou ", precoInicial - desconto);
} else if (formaDePagamento === 2){
    var desconto = (precoInicial * 0.15);
    console.log("o preço final ficou ", precoInicial - desconto);
} else if (formaDePagamento === 3) {
    console.log("Pagando em duas vezes o preço fica ", precoInicial);
} else {
    var desconto = precoInicial + (precoInicial * 0.1);
    console.log("O preço parcelando de duas ou mais vezes fica ", desconto);
}
