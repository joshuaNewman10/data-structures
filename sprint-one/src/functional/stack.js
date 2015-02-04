var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    var index = someInstance.size();
    storage[index] = value;

  };

  someInstance.pop = function(){
    var val = storage[someInstance.size()-1];
    delete storage[someInstance.size()-1];
    return val;
  };

  someInstance.size = function(){
    return Object.keys(storage).length;
  };

  return someInstance;
};
