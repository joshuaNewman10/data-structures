var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.next = 0;
  newQueue.front = 0;
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.next] = value;
  this.next++;
}

queueMethods.dequeue = function(){
  if( this.next !== this.front ){
    var value = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return value;
  }
}

queueMethods.size = function(){
  return this.next - this.front;
}
