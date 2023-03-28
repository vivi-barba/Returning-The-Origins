/*2) Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor
do seu IMC; */

class Pessoa{
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura

    }

    calculandoImc(){
        return this.peso / (this.altura * this.altura);
    }

    classificarImc(){
        const imc = this.calculandoImc();
        if (imc < 18.5) {
          return ("Você esta abaixo do peso");
        } else if (imc >= 18.5 && imc < 25) {
          return ("Peso normal");
        } else if (imc >= 25 && imc < 30) {
          return ("Acima do peso");
        } else if (imc >= 30 && imc < 40) {
          return ("Obeso");
        } else {
          return ("obesidade grave");
        }
    }
}

const jose = new Pessoa('jose',70, 1.75);
console.log(jose.classificarImc());

class Pessoa {
  nome;
  idade;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  descrever() {
    console.log(`Nome: ${this.nome}; Idade: ${this.idade};`);
  }
}

new Pessoa("Renan", 30).descrever();

