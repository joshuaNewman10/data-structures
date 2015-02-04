var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.storage = {};
  extend(newStack, stackMethods);
  return newStack;
};

var stackMethods = {};

var extend = function(to, from) {
  for(var key in from) {
    to[key] = from[key];
  }
};

stackMethods.push = function(value){
  var key = this.size();
  this.storage[key] = value;
}

stackMethods.pop = function(){
  var value = this.storage[this.size()-1];
  delete this.storage[this.size()-1];
  return value;
}

stackMethods.size = function(){
  return Object.keys(this.storage).length;
}
