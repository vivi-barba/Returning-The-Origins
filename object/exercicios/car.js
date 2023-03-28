/* Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso. */

class Carro {
  marca;
  cor;
  gastoPorKm;

  constructor(marca, cor, gastoPorKm) {
    this.marca = marca;
    this.cor = cor;
    this.gastoPorKm = gastoPorKm;
  }

  gastoPercurso(distancia, valorCombustivel){
    return distancia * this.gastoPorKm * valorCombustivel;
  }
}

const gol = new Carro("volkswagen", "preto", 1 / 10);
const unao = new Carro("fiat", "azul", 1 / 12);

console.log(unao.gastoPercurso(70, 5));