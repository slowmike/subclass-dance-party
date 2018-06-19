var makeSpinningDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
}

makeSpinningDancer.prototype = Object.create(makeDancer.prototype);
makeSpinningDancer.prototype.constructor = makeCrazyDancer;

makeSpinningDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);

  this.$node.animate({});

}
