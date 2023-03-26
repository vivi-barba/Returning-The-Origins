/*Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
 1 - Preço do etanol;
 2 - Preço do gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.*/


var precoEtanol = 2.8;
var precoGasolina = 5.08;
var combustivelUsado = "Gasolina";
var gastoMedioCumbustivel = 15;
var distaciaKm = 300;

var litroGasto = distaciaKm / gastoMedioCumbustivel;

if (combustivelUsado === "Gasolina") {
  var gastoGasolina = litroGasto * precoGasolina;
  console.log(
    "Você usou gasolina dessa vez e gastou: ",
    gastoGasolina.toFixed(2)
  );
} else {
  var gastoEtanol = litroGasto * precoEtanol;
  console.log("Você usou etanol dessa vez e gastou: ", gastoEtanol.toFixed(2));
}
