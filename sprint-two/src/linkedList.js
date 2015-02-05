var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){ // O(1)
    if (list.tail === null){
      list.tail = Node(value);
    }else if (list.head === null){
      list.head = list.tail
      list.tail = Node(value);
      list.head.next = list.tail;
    }else{
      var newNode = Node(value);
      var curr = list.tail;
      curr.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function(){ // O(1)
    var node;
    if (list.head === null){
      node = list.tail;
      list.tail = null;
    }else{
      node = list.head;
      list.head = list.head.next;
    }
    return node.value;
  };

  list.contains = function(target){  //O(n)
    var curr = list.head || list.tail;
    while(curr){
      if (curr.value ===target){
        return true;
      }
      curr = curr.next;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
*/


