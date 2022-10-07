// variables to keep track of quiz state
    // currentQuestion
    var currentQuestion = 0;
    // time
    var timer;
    // timerId
    var timerCount;
    
// variables to reference DOM elements
var startBtn = document.querySelector('.startBtn');
var timerId = document.querySelector('.time-sec');
var feedback = document.getElementById('feedback');


/// FUNCTION TO START THE QUIZ
function startQuiz() {
  // hide start screen 
  var startEl = document.getElementById('start-page');
    startEl.style.display = 'none';
  // un-hide questions section
  var questionsEl = document.getElementById('questions');
    questionsEl.style.display = 'block';
  // start timer
  timerCount = 60;
  // show starting time
  
  getQuestion();
  clockTick();
}

/// FUNCTION TO GET/SHOW EACH QUESTION ///
function getQuestion() {
  // get current question object from array
    document.getElementById('questions-title').textContent = questions[currentQuestion].title;
    document.querySelector('.options').innerHTML = "";

  
  // update title with current question
  
  // clear out any old question choices
  

  // loop over choices
  for (let i = 0; i < questions[currentQuestion].choices.length; i++){
    var btn = document.createElement('button');
    btn.textContent = questions[currentQuestion].choices[i];
    document.getElementById('options').appendChild(btn);
    btn.setAttribute('value', questions[currentQuestion].answer);
    btn.onclick = questionClick;
  }
 
      // create new button for each choice
    
      // display on the page
      

}

/// FUNCTION FOR CLICKING A QUESTION ///
function questionClick(event) {

  // if the clicked element is not a choice button, do nothing.

  if (event.target.innerText !== questions[currentQuestion].answer) {
  // check if user guessed wrong
 
    // penalize time
    timerCount -= 10;
    // display new time on page

    // give them feedback, letting them know it's wrong

    feedback.textContent = 'Incorrect! Try again!';
  } else {
    // give them feedback, letting them know it's right
    feedback.textContent = 'Correct!';
  }

  // flash right/wrong feedback on page for a short period of time

  // move to next question
  currentQuestion++;
  // check if we've run out of questions
  if (currentQuestion > questions.length) {
    quizEnd()
  } else {
    getQuestion();
  }
    // if so, end the quiz
    // else, get the next question
}

/// FUNCTION TO END THE QUIZ ///
function quizEnd() {
  // stop timer

  // show end screen

  // show final score

  // hide questions section
}

/// FUNCTION FOR UPDATING THE TIME ///
function clockTick() {
  // update time
  timerInterval = setInterval(function() {
    timerCount--;
    timerId.textContent = timerCount;
  // check if user ran out of time
  if (timerCount === 0) {
    clearInterval(timerInterval);
  }
  }, 1000);
  
}

function saveHighscore() {
  // get value of input box - for initials

  // make sure value wasn't empty
    // get saved scores from localstorage, or if not any, set to empty array

    // format new score object for current user

    // save to localstorage

    // redirect to next page
}

/// CLICK EVENTS ///
  // user clicks button to submit initials

  // user clicks button to start quiz
startBtn.addEventListener('click', startQuiz);
  // user clicks on element containing choices