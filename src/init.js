$(document).ready(function() {
  window.dancers = [];

  var linedUp = false;
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
11
    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */


    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      Math.floor(Math.random() * 800),
      Math.floor(Math.random() * 1500),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    dancer.$node.mouseover(function() {
      dancer.$node.fadeOut('fast');
    });
    dancer.$node.mouseout(function() {
      dancer.$node.fadeIn('fast');
    });

    // dancer.addEventListener("mouseout", );
    $('body').append(dancer.$node);

  });

  $('.addActionButton').on('click', function(event) {

    var action = $(this).data('action-name');
    if(action === 'lineUp') {
      for (var dancer of window.dancers) {
        var yLoc = Math.floor(Math.random * window.dancers.length)*20;
        dancer.lineUp(yLoc);
        dancer.top = 500;
        dancer.left = yLoc;
      }
    }
    if(action === 'scatter') {
      for (var dancer of window.dancers) {
        var top = Math.floor(Math.random() * 800);
        var left = Math.floor(Math.random() * 1500);
        dancer.move(top, left);
        dancer.top = top;
        dancer.left = left;
      }
    }
    if(action === 'follow') {
      var prevTop = window.dancers[window.dancers.length-1].top;
      var prevLeft = window.dancers[window.dancers.length-1].left;
      for (var i = 0; i < window.dancers.length; i++) {
        window.dancers[i].move(prevTop, prevLeft);
        var newTop = window.dancers[i].top;
        var newLeft = window.dancers[i].left;
        window.dancers[i].top = prevTop;
        window.dancers[i].left = prevLeft;
        prevTop = newTop;
        prevLeft = newLeft;
      }
    }
  });


});
