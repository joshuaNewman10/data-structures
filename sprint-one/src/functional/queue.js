var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var front = 0;
  var next = 0;
  someInstance.enqueue = function(value){
    storage[next] = value;
    next++;
  };

  someInstance.dequeue = function(){
    if (front !== next){
      var value = storage[front];
      delete storage[front];
      front++;
      return value;
    }
  };

  someInstance.size = function(){
    return next - front;
  };

  return someInstance;
};
