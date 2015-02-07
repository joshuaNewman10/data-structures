describe('BloomFilter', function() {
  var test;

  beforeEach(function() {
    test = new BloomFilter();
  });

  it('should have methods "insert", "contains"', function() {
     expect(test.insert).to.be.a('function');
     expect(test.contains).to.be.a('function');
  });

  it('correctly reports inserted values', function() {
    test.insert("hey");
    test.insert("nah");
    test.insert("suppp");
     expect(test.contains("hey")).to.equal(true);
     expect(test.contains("nah")).to.equal(true);
     expect(test.contains("supp")).to.equal(true);
  });

  it('may report false positives', function() {
    test.insert('roger');
    test.insert('jsoh');
    test.insert('kyle');
    test.insert('beyonce');
    test.insert('papa');
    test.insert('marcus');
    test.insert('heroofzero');
    test.insert('one');
    test.insert('two');
    test.insert('three');
    test.insert('four');
    test.insert('five');
    expect(test.contains('god')).to.equal(true);
    expect(test.contains('rafael')).to.equal(true);
  });
});
