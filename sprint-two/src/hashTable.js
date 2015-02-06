var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  if ( bucket === undefined ){
    this._storage.set(index, [[k, v]]);
    return;
  } else {
    for(var i=0; i<bucket.length; i++) {
      if( bucket[i][0] === k ) {
        bucket[i][1] = v;
        return;
      }
    }
  }
  bucket.push([k,v]);
};

HashTable.prototype.retrieve = function(k){
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for(var i=0; i<bucket.length; i++) {
    if( bucket[i][0] === k ) {
      return bucket[i][1];
    }
  }
  return null;
};

HashTable.prototype.remove = function(k){
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var val;
  for(var i=0; i<bucket.length; i++) {
    if( bucket[i][0] === k) {
      val = bucket[i][1];
      bucket.splice(i, 1);
    }
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
