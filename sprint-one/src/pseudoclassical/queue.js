var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.next = 0;
  this.front = 0;
};

Queue.prototype.enqueue = function(val) {
  this.storage[this.next] = val;
  this.next++;
};

Queue.prototype.dequeue = function() {
  if( this.next !== this.front) {
    var val = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return val;
  }
};

Queue.prototype.size = function() {
  return this.next - this.front;
};



