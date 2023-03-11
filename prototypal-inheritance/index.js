function Animal(tipo, som) {
  this.tipo = tipo;
  this.som = som;
}

Animal.prototype.fazerBarulho = function() {
  console.log(this.som);
}

var cachorro = new Animal('cachorro', 'Au au');
var gato = new Animal('gato', 'Miau');

cachorro.fazerBarulho(); // Saída: "Au au"
gato.fazerBarulho(); // Saída: "Miau"