describe('RBT', function() {
  var test;

  beforeEach(function() {
    test = new RBT(1, true);
  });

  it('should have methods "insert", "contains", "depthFirstLog", "breadthFirstLog", "balance", "rotate", "recolor"', function() {
    expect(test.insert).to.be.a("function");
    expect(test.contains).to.be.a("function");
    expect(test.depthFirstLog).to.be.a("function");
    expect(test.breadthFirstLog).to.be.a("function");
    expect(test.checkBalance).to.be.a("function");
    expect(test.reBalance).to.be.a("function");
    expect(test.rotateRight).to.be.a("function");
    expect(test.rotateLeft).to.be.a("function");
  });

  it('should insert values as per BinarySearchTree, this test may fail after implemeneting rebalancing', function(){
    test.insert(2);
    test.insert(3);
    test.parent.insert(4);
    test.parent.insert(5);
    expect(test.parent.right.value).to.equal(3);
    expect(test.parent.left.value).to.equal(test.value);
    expect(test.parent.value).to.equal(2);
  });

  it('should have a working "contains" method', function(){
    test.insert(2);
    test.insert(3);
    test.insert(7);
    expect(test.contains(7)).to.equal(true);
    expect(test.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function(){
    var array = [];
    var func = function(value){ array.push(value); };
    test.insert(2);
    test.insert(3);
    test.depthFirstLog(func);
    console.log(array);
    expect(array).to.eql([5,2,3]);
  });
});
