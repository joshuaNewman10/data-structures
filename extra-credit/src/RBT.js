var nilNode = {};


function RBT( value, root ) {
  this.left = nilNode;
  this.right = nilNode;
  this.color = root ? "black":"red";
  this.parent = nilNode;
  this.value = value;
}

RBT.prototype.insert = function(value) {
  var childTree = new RBT(value);
  var innerSearch = function(tree){
    if (value < tree.value && tree.left === nilNode){
      tree.left = childTree;
      childTree.parent = tree;
      return;
    }else if(value > tree.value && tree.right === nilNode){
      tree.right = childTree;
      childTree.parent = tree;
      return;
    }else if( value < tree.value ){
      return innerSearch(tree.left);
    }else{
      return innerSearch(tree.right);
    }
  };
  innerSearch(this);
  if (childTree.parent.color === "black"){
    return;
  } else {
    RBT.prototype.reBalance(childTree);
  }
};

RBT.prototype.checkBalance = function(){

};

RBT.prototype.reBalance = function(tree) {
  // debugger;
  var parent = tree.parent;
  var grandParent = parent.parent;
  var uncle = grandParent.left === parent ? grandParent.right : grandParent.left;

  if ( parent === nilNode ) { //1
    tree.color = "black";
  } else if ( parent.color === "black" ){ //2
    return;
  } else if ( parent.color === "red" && uncle.color === "red" ) { //3
    parent.color = "black";
    uncle.color = "black";
    grandParent.color = grandParent.parent === nilNode ? "black" : "red";
  } else if ( parent.color === "red" && uncle.color === "black" && parent.right === tree && grandParent.left === parent ) { //4
    //left rotation and call case 5 on parent
    RBT.prototype.rotateLeft(parent);
    RBT.prototype.rotateRight(grandParent);
  }else if (parent.color === "red" && uncle.color === "black" && parent.left === tree && grandParent.right === parent){
    RBT.prototype.rotateRight(parent);
    RBT.prototype.rotateLeft(grandParent);
  } else if ( parent.color === "red" && uncle.color === "black" && parent.left === tree && grandParent.left === parent ) { //5
    RBT.prototype.rotateRight(grandParent);
  } else if(parent.color === "red" && uncle.color === "black" && parent.left === tree && grandParent.left === parent){
    RBT.prototype.rotateLeft(grandParent);
  }else if (tree === parent.right && parent === grandParent.right && grandParent.left === nilNode){
    RBT.prototype.rotateLeft(grandParent);
    parent.color = "black";
    parent.right.color = "red";
    parent.left.color = "red";
  }else if (tree === parent.left && parent === grandParent.left && grandParent.right === nilNode){
    RBT.prototype.rotateRight(grandParent);
    parent.color = "black";
    parent.right.color = "red";
    parent.left.color = "red";
  }
};

RBT.prototype.contains = function(value) {
  if ( value === this.value ) {
    return true;
  }else if (value < this.value && this.left){
    return this.left.contains(value);
  }else if (value > this.value && this.right){
    return this.right.contains(value);
  }
  return false;
};

RBT.prototype.depthFirstLog = function() {

};

RBT.prototype.breadthFirstLog = function() {

};

RBT.prototype.rotateRight = function(Q) {
  //makae sure the nilNode isn't passed in.

  var P = Q.left;
  var B = Q.left.right;

  P.right = Q;
  P.parent = Q.parent;
  Q.parent = P;
  Q.left = B;
  B.parent = Q;

};

RBT.prototype.rotateLeft = function(P) {
  //make sure the nilNode isn't passed in.
  var B = P.right.left;
  var Q = P.right;

  Q.left = P;
  Q.parent = P.parent;
  P.parent = Q;
  P.right =  B;
  B.parent = P;

};

