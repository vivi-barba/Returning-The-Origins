function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to the Person prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
}

// Creating a new Person object
const john = new Person('John', 25);

// Calling the greet() method on the john object
john.greet(); // Output: "Hello, my name is John and I'm 25 years old."