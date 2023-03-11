var animal = {
  tipo: '',
  som: '',
  fazerBarulho: function() {
    console.log(this.som);
  }
};

var cachorro = Object.create(animal);
cachorro.tipo = 'cachorro';
cachorro.som = 'Au au';

var gato = Object.create(animal);
gato.tipo = 'gato';
gato.som = 'Miau';

cachorro.fazerBarulho(); // Saída: "Au au"
gato.fazerBarulho(); // Saída: "Miau"