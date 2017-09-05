const Util = {
  inherits (childClass, parentClass) {
    childClass.prototype = Object.create(new parentClass());
    childClass.prototype.constructor = childClass;
  }
};





module.exports = Util;
