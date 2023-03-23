/*Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
 1 - Preço do combustível;
 2 - Gasto médio de combustível do carro por KM;
 3 - Distância em KM da viagem;

Imprima no console o valor que será gasto para realizar esta viagem.*/


const combustivel = 5.08;
var distancia = 30;
var kmPorLitro = 10;

var litros = distancia / kmPorLitro;

var valorGasto = litros * combustivel;
console.log(valorGasto.toFixed(2));
