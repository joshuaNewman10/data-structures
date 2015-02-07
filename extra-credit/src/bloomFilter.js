var BloomFilter = function(){
  this._limit = 18;
  this._storage = bfLimitedArray(this._limit);
};

var bfLimitedArray = function(limit){
  var storage = Array.apply(null, new Array(this._limit)).map(Number.prototype.valueOf,0);
  var limitedArray = {};
  limitedArray.check = function(index){
    checkLimit(index);
    return storage[index];
  };
  limitedArray.flip = function(index){
    checkLimit(index);
    storage[index] = 1;
  };
  var checkLimit = function(index){
    if(typeof index !== 'number'){ throw new Error('setter requires a numeric index for its first argument'); }
    if(limit <= index){ throw new Error('Error trying to access an over-the-limit index'); }
  };

  return limitedArray;
};

BloomFilter.prototype.insert = function(key) {
  var hashKeys = [hashOne(key, this._limit), hashTwo(key, this._limit), hashThree(key, this._limit)];
  var that = this;
  hashKeys.forEach(function(key){
    that._storage.flip(key);
  });
};

BloomFilter.prototype.contains = function(key) {
  var hashKeys = [hashOne(key, this._limit), hashTwo(key, this._limit), hashThree(key, this._limit)];
  var that = this;
  return !!hashKeys.reduce(function(accum, val) {
    return accum && that._storage.check(val);
  }, true);
};


var hashOne = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var hashTwo = function(str, max) {
  var hash = 0;
  for(var i=0; i<str.length; i++) {
    hash = (hash<<6) + hash + str.charCodeAt(i);
    hash = hash & hash;
    hash = Math.abs(hash);
  }
  return hash % max;
};

var hashThree = function(str, max) {
  var hash = 0;
  for(var i=0; i<str.length; i++) {
    hash = (hash<<7) + hash + str.charCodeAt(i);
    hash = hash & hash;
    hash = Math.abs(hash);
  }
  return hash % max;
};









