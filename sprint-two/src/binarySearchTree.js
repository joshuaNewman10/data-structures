var BinarySearchTree = function(value){
  var tree = Object.create(bstMethods);

   tree.left = null;
   tree.right = null;
   tree.value = value;
   return tree;
};


var bstMethods = {};

bstMethods.insert = function(val) {
  var newTree = BinarySearchTree(val);
  var innerFunc = function(tree) {
    if( tree.left === null && val < tree.value ) {
      tree.left = newTree;
    } else if ( tree.right === null && val > tree.value ) {
      tree.right = newTree;
    } else if ( val < tree.value ) {
      innerFunc(tree.left);
    } else {
      innerFunc(tree.right);
    }
  };
  innerFunc(this);
};

bstMethods.contains = function(val) {
  if( this.value === val ) {
    return true;
  } else {
    if( val < this.value && this.left) {
      return this.left.contains(val);
    } else if (this.right) {
      return this.right.contains(val);
    }
  }
  return false;
};

bstMethods.depthFirstLog = function(cb) {
  var innerFunc = function(tree, cb) {
     cb(tree.value);
     tree.left && innerFunc(tree.left, cb);
     tree.right && innerFunc(tree.right, cb);
  };
  innerFunc(this, cb);
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
