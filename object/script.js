
const Animal = {
  type: "Invertebrates", 
  displayType() {
    console.log(this.type);
  },
};

const animal1 = Object.create(Animal);
animal1.displayType();

const fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType(); 