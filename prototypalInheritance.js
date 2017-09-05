const Animal = function Animal(name, age) {
  this.name = name;
  this.age = age;
};
Animal.prototype.makeNoise = function makeNoise() {
  console.log(`${this.name} makes noise!`);
};

Animal.prototype.grow = function () {
  this.age += 1;
  return this.age;
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
  Animal.call(this, name, age);

  // Animal.call(this, age);
};

Dog.inherits(Animal);


let fido = new Dog("Fido", 3);



fido.makeNoise();
console.log(fido.grow());
// console.log(Dog.prototype.__proto__);
