// Words array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

// Game variables
let randomWord;
let score = 0;
let time = 10;

// DOM elements (will be selected in DOMContentLoaded at the bottom)
let word;
let text;
let scoreEl;
let timeEl;
let endgameEl;
let timerInterval;


// Function to pick a random word and display it
function addWordToDOM() {
  // Pick a random index from the words array
  const randomIndex = Math.floor(Math.random() * words.length);
  // Get the word at that index
  randomWord = words[randomIndex];
  // Display it in the #word element
  word.textContent = randomWord;
}

// Function to increment score by 1
function updateScore() {
  score += 1;
  scoreEl.textContent = score;
}

// Function to update the timer every second
// It decrements time by 1 and stops when time reaches 0
function updateTime() {
  timerInterval = setInterval(function() {
    // Decrement time by 1
    time -= 1;
    // Update the display
    timeEl.textContent = time + 's';

    // Check if time has reached 0
    if (time <= 0) {
      // Stop the timer
      clearInterval(timerInterval);
      // Call gameOver to end the game
      gameOver();
    }
  }, 1000); // Run every 1000 milliseconds (1 second)
}

// Function to enable the display of the end-game-container and show final score
function gameOver() {
  // Show the end-game-container by changing its display style!
  endgameEl.style.display = 'block';
  // Add content to the end-game-container
  endgameEl.innerHTML = `
    <h2>Game Over!</h2>
    <p>Your final score: <strong>${score}</strong></p>
    <button onclick="location.reload()" class="btn btn-primary">Play Again</button>
  `;
}

// Initialize the game when page loads, given more time I would personally make this happen through interaction (button click etc)
document.addEventListener('DOMContentLoaded', function() {
  // Select DOM elements
  word = document.getElementById("word");
  text = document.getElementById("text");
  scoreEl = document.getElementById("score");
  timeEl = document.getElementById("time");
  endgameEl = document.getElementById("end-game-container");

  // Display first word
  addWordToDOM();

  // Start the timer
  updateTime();

  // Listen for input on the text field
  text.addEventListener('input', function() {
    // Get what the user typed and clean it
    const userInput = text.value.trim().toLowerCase();
    // Get the current word and clean it
    const currentWord = randomWord.toLowerCase();

    // If they match, the word is correct
    if (userInput === currentWord) {
      // Update score
      updateScore();
      // Get a new word
      addWordToDOM();
      // Add 5 seconds to time
      time += 5;
      timeEl.textContent = time + 's';
      // Clear the input
      text.value = '';
    }
  });
});