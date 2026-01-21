
// Using the (!) Not operator:
var isWeekend = true;
// Flips the boolean value: true becomes false, false becomes true
var needToShowerToday = !isWeekend; 
needToShowerToday; // Returns false

// Joining strings together:
var greeting = "Hello";
var myName = "Nick";
// Concatenation: joins strings without adding spaces automatically
greeting + myName; // Results in "HelloNick"

// Finding the length of the string:
// Returns the total count of characters, including spaces and punctuation
"Helloworld".length; // Returns 10

// Getting a single character:
var myName = "Nick";
// Accesses character by index (0-based); [1] is the second letter
myName[1]; // Returns "i"

// Numbers and operators: 
// Follows PEMDAS/BODMAS rules: Multiplication and Division before Addition and Subtraction
1234 + 57 * 3 - 31 / 4; // Result: 1397.25

// Post Incrementing: 
var highFives = 0;
// Adds 1 to the current value of the variable
++highFives; // Value is now 1

// Pre Decrementing:
var highFives = 5;
// Subtracts 1 from the current value of the variable
--highFives; // Value is now 4

// Boolean AND Operator:
var isRaining = true;
var isNotRaining = false;
// Returns true ONLY if both sides are true; otherwise returns false
isRaining && isNotRaining; // Returns false

// OR Operator:
var hasApple = true;
var hasBanana = false;
// Returns true if at least ONE side is true
hasApple || hasBanana; // Returns true

// Numbers with Boolean:
var height = 65;
var heightRestriction = 60;
// Comparison operator: checks if the left value is strictly less than the right
height < heightRestriction; // Returns false

// Converting to Upper Case:
// Method that transforms all characters in a string to capital letters
"Hello there, how are you doing?".toUpperCase();          

// Converting to Lower Case:
// Method that transforms all characters in a string to small letters
"hELlo THERE, hOW ARE yOu doINg?".toLowerCase();

// Equal to (Strict Equality):
var mySecretNumber = 5; 
var chicoGuess = 3; 
// Checks if both the value AND the data type (number) are exactly the same
mySecretNumber === chicoGuess; // Returns false

// Double == (Loose Equality):
var stringNumber = "5"; 
var actualNumber = 5;
// Performs type coercion: converts the string to a number before comparing
stringNumber == actualNumber; // Returns true

// Slice
// Example 1: Extracts from index 0 up to (but not including) index 4
"This is a long string".slice(0, 4); // Returns "This"

// Example 2: Extracts characters starting at index 7 through index 11
"Hello, World!".slice(7, 12); // Returns "World"