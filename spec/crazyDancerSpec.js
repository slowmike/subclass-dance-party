describe('crazyDancer', function() {

  var crazyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    crazyDancer = new makeCrazyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(crazyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node animate', function() {
    sinon.spy(crazyDancer.$node, 'animate');
    crazyDancer.step();
    expect(crazyDancer.$node.animate.called).to.be.true;
  });

});
