var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  extend(newTree, treeMethods);
  // your code here
  newTree.children = [];  // fix me

  return newTree;
};


var extend = function( to, from ) {
  for(var prop in from) {
    to[prop] = from[prop];
  }
};


var treeMethods = {};

treeMethods.addChild = function(value){ // O(1)
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){ //recursive O(n) could be better though :(
  var found = false;
  var innerFunc = function(tree) {
     if( tree.value === target) {
      found = true;
     } else {
        for(var i=0; i<tree.children.length; i++) {
          innerFunc(tree.children[i]);
        }
     }
  };
  innerFunc(this);
  return found;

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
