var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {};
  instance.storage = {};
  instance.front = 0;
  instance.next = 0;

  extend(instance, queueMethods);

  return instance;
};


var extend = function(to, from) {
  for(var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.next] = value;
  this.next++;
};

queueMethods.dequeue = function() {
  if( this.front !== this.next )  {
    var val = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return val;
  }
};

queueMethods.size = function() {
  return this.next - this.front;
};



