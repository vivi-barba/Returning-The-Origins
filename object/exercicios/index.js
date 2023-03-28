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

function compararIdades(p1, p2) {
  if (p1.idade > p2.idade) {
    console.log(`${p1.nome} é mais velha que ${p2.nome}`);
  } else if (p2.idade > p1.idade) {
    console.log(`${p2.nome} é mais velha que ${p1.nome}`);
  } else {
    console(`${p1.nome} tem a mesma idade que ${p2.nome}`);
  }
}

const victoria = new Pessoa('Victoria B', 21);
const raphael = new Pessoa('Raphael B', 30);

compararIdades(victoria, raphael)