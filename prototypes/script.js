function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adicionando um método ao protótipo Person
Person.prototype.greet = function() {
  console.log(`Oi, nome é  ${this.name} e eu tenho ${this.age} anos.`);
}

// criando um objeto e setando os dados
const victoria = new Person('Victoria', 21);

// chamando greet() metodo trazendo os dados do objeto declarado na const victoria
victoria.greet(); // Output: "Oi, nome é  Victoria e eu tenho 21 anos."