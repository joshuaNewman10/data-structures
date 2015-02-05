

var Graph = function(){
  this.nodeList = [];
};

Graph.prototype.addNode = function(node){
  this.nodeList.push(new graphNode(node));
};

Graph.prototype.contains = function(node){
  var found = false;
  for (var i = 0; i < this.nodeList.length; i++){
    found = found || this.nodeList[i].value === node;
  }
  return found;
};

Graph.prototype.removeNode = function(node){
  var toRemoveIndex;
  for (var i = 0; i < this.nodeList.length; i++){
    var current = this.nodeList[i];
    if (current.value === node){ //search for target
      toRemoveIndex = i;
    }
    var index = current.edgeList.indexOf(node);
    if (index!== -1){
      current.edgeList.splice(index, 1);
    }
  }
  if(toRemoveIndex !== undefined) {
    this.nodeList.splice(toRemoveIndex, 1);
  }

};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var from;
  for(var i=0; i<this.nodeList.length; i++) {
    if( this.nodeList[i].value === fromNode ) {
      from = this.nodeList[i];
    }
  }
  return from.edgeList.indexOf(toNode) > -1;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  var from, to;
  for (var i = 0; i < this.nodeList.length; i++){
    if (this.nodeList[i].value === fromNode){
      from = this.nodeList[i]
    } else if(this.nodeList[i].value === toNode){
      to = this.nodeList[i];
    }
  }
  if(fromNode === toNode && to===undefined && from !== undefined){
    from.edgeList.push(toNode);
  }else{
    to.edgeList.push(fromNode);
    from.edgeList.push(toNode);
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  var current;
  var index;
  for(var i=0; i<this.nodeList.length; i++) {
    current = this.nodeList[i];
    if( current.value === fromNode ) {
      index = current.edgeList.indexOf(toNode);
      if( index > -1 ) {
        current.edgeList.splice(index, 1);
      }
    } else if (current.value === toNode) {
      index = current.edgeList.indexOf(fromNode);
      if(index > -1) {
        current.edgeList.splice(index, 1);
      }
    }
  }
};

Graph.prototype.forEachNode = function(cb){
  for( var i=0; i<this.nodeList.length; i++ ) {
    cb(this.nodeList[i].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

var graphNode = function(value) {
  this.value = value;
  this.edgeList = [];
};


var graph = new Graph();

var connectToSatsumas = function(item) {
  graph.addEdge(item, 'satsumas');
};
graph.addNode('satsumas');
graph.addNode('puppies');
graph.addNode('kittens');
graph.addNode('penguins');
graph.forEachNode(connectToSatsumas);

