function printHighscores() {
    // either get scores from localstorage or set to empty array
    var scores = JSON.parse(localStorage.getItem('savedScores'));
    // sort highscores by score property in descending order
    scores.sort( function ( a, b ) { return b.score - a.score; } );
    // loop through scores
      // create li tag for each high score
      for(var i = 0; i < scores.length; i++ ) {
        var li = document.createElement('li');
        li.classList.add('list-style');
        li.textContent = scores[i].init + " - " + scores[i].score;
  
      // display on page
      document.getElementById('highscores').appendChild(li);
    };
}
  /// FUNCTION TO CLEAR SCORES ///
  function clearHighscores() {
    // remove an item from local storage
      localStorage.removeItem('savedScores');
    // reload the page
    window.location.reload();
  };
  /// CLICK EVENT TO RUN THE CLEAR SCORES FUNCTION ///
  var clear = document.getElementById('clear')
  clear.addEventListener('click', clearHighscores);
  // run function when page loads
  printHighscores();