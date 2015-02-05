

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
  var toRemove;
  for (var i = 0; i < this.nodeList.length; i++){
    if (this.nodeList[i].value === node){
      toRemove = this.nodeList[i];
    }
  }
  for (var j = 0; j < this.nodeList.length; j++){
    var current = this.nodeList[j];
    var index = toRemove.edgeList.indexOf(this.nodeList[j]);

    if (index!== -1){
      this.nodeList[j].edgeList.splice()
    }
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
  to.edgeList.push(fromNode);
  from.edgeList.push(toNode);
};

Graph.prototype.removeEdge = function(fromNode, toNode){
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

