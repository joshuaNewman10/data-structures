var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.size()] = value;
};

stackMethods.pop = function() {
  var val = this.storage[this.size()-1];
  delete this.storage[this.size()-1];
  return val;
};

stackMethods.size = function() {
  return Object.keys(this.storage).length;
};
