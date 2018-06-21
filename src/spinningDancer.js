var makeSpinningDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="dancer spinningDancer w3-spin"></span>');
  this.setPosition(top, left);
}

makeSpinningDancer.prototype = Object.create(makeDancer.prototype);
makeSpinningDancer.prototype.constructor = makeCrazyDancer;
