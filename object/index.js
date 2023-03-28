// isso é uam classe
class Pessoa {
  nome;
  idade;
  anoDeNascimento;

  constructor(nome, idade, anoDeNascimento) {
    this.nome = nome;
    this.idade = idade;
    this.anoDeNascimento = 2023 - idade;
  }

  descrever() {
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`);
  }
}


//isso é uma instancia 
const victoria = new Pessoa("Victoria", 21);


console.log(victoria)