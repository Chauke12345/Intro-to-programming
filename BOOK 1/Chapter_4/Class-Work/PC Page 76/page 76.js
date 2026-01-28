/**
 * @typedef {Object.<string, number>} Scoreboard
 * Object tracking player points.
 */
var scores = {
  Eddie: 0,
  Benji: 0,
  Cathy: 0
};

// Increment Eddie's score using dot notation
scores.Eddie += 1;     

// Increment Benji's score using string key bracket notation
scores["Benji"] += 3;  

// Increment score using a dynamic variable key
var player = "Cathy";
scores[player] += 2;   
