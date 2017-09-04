function sum() {
  let args = Array.from(arguments);
  let total = 0;
  args.forEach((arg) => {
    total += arg;
  });
  return total;
}

console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 5, 10));

function sumWRest(...args) {
  let total = 0;
  args.forEach((arg) => {
    total += arg;
  });
  return total;
}
//
// console.log(sumWRest(1, 2, 3, 4));
// console.log(sumWRest(1, 2, 3, 4, 5, 10));
class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

const markov = new Cat("Markov");
const breakfast = new Cat("Breakfast");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

Function.prototype.myBind = function(ctx) {
  let args = Array.from(arguments);
  return () => {
    this.apply(ctx, args.slice(1));
  };
};

//
// bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(breakfast, "meow", "Kush")();
// Breakfast says meow to Kush!
// true





Function.prototype.myBind = function(ctx) {
  let args = Array.from(arguments);
  let that = this;
  return function() {
    let callTimeArgs = Array.from(arguments);
    that.apply(ctx, args.slice(1).concat(callTimeArgs));
  };
};



// no bind time args (other than context), call time args are "meow" and "me"
markov.says.myBind(breakfast)("meow", "a tree");
// Breakfast says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(breakfast, "meow")("Markov");
// Breakfast says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(breakfast);
notMarkovSays("meow", "me");
// Breakfast says meow to me!
// true

function curriedSum(argLength) {
  // console.log('hi');
  let numbers = [];
  function _curriedSum(num) {
    numbers.push(num);
    if (numbers.length === argLength) {
      let total = 0;
      numbers.forEach((el) => {
        total += el;
      });
      return total;
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}


const sum1 = curriedSum(2);
let sum2 = sum1(30);
let sum3 = sum2(20);
// let sum4 = sum3(1);
// let sum5 = sum4(5);

//
// sum1(5)(30)(20)(1); // => 56

Function.prototype.curry = function (argLength) {
  let args = [];
  let that = this;
  function _curry(arg){
    args.push(arg);
    if (args.length === argLength) {
      return that(...args);
    } else {
      return _curry;
    }
  }
  return _curry;
};


function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30

// you'll write `Function#curry`!
let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30

// or more briefly:
console.log(sumThree.curry(4)(4)(20)(6)(9)); // == 30
