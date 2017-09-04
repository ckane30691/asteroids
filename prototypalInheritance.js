const Animal = function Animal(name, age) {
  this.name = name;
  this.age = age;
};
Animal.prototype.makeNoise = function makeNoise() {
  console.log(`${this.name} makes noise!`);
};

// const Surrogate = function Surrogate() {
//   Surrogate.prototype = Animal.prototype;
//   Dog.prototype = new Surrogate();
//   Dog.prototype.constructor = Dog;
// };
Function.prototype.inherits = function(parent) {
    this.prototype = Object.create(new parent());
    this.prototype.constructor = this;
};

const Dog = function Dog(name, age) {
  Animal.call(this, name);
  this.age = age;
};

Dog.inherits(Animal);


let fido = new Dog("Fido", "3");

fido.makeNoise();
console.log(Dog.prototype.__proto__);
