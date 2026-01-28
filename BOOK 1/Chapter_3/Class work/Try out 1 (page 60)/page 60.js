

// Define arrays containing the building blocks for the random insult
var randomBodyParts = ["Head", "Head", "Hair" ,"Legs"];
var randomAdjectives = ["Funny" , "Looking", "Charecter", "Stupid"];
var randomWords = ["Cat", "Donkey", "Lizzard", "Rat", "dog"];

// Select a random element from 'randomBodyParts' (limited to first 3 indices: 0, 1, 2)
var randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];

// Select a random element from 'randomAdjectives' (limited to first 3 indices: 0, 1, 2)
var randomAdjective = randomAdjectives[Math.floor(Math.random() * 3)];

// Select a random element from 'randomWords' (limited to first 4 indices: 0, 1, 2, 3)
var randomWord = randomWords[Math.floor(Math.random() * 4)];

// Concatenate the selected strings into a complete sentence template
var randomInsult = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + "!!!";

// Print the final generated insult string to the console
console.log(randomInsult);




