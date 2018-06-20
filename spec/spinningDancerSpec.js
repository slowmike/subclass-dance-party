describe('spinningDancer', function() {

  var spinningDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    spinningDancer = new makeSpinningDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(spinningDancer.$node).to.be.an.instanceof(jQuery);
  });


  it('should have $node class of w3-spin', function() {
    expect(spinningDancer.$node.hasClass("w3-spin")).to.be.true;
  });
  
});
