var makeCrazyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps)
  this.$node = $('<span class="dancer crazyDancer"></span>');
  this.setPosition(top, left);
}

makeCrazyDancer.prototype = Object.create(makeDancer.prototype);
makeCrazyDancer.prototype.constructor = makeCrazyDancer;

makeCrazyDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);

  this.$node.animate({ top: Math.floor(Math.random()*800),
                      left: Math.floor(Math.random()*1500)});

}
