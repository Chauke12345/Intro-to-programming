
// Declare an array of animals
var animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];

// Loop through the array using a for loop
// i starts at 0 (the first index) and runs as long as i is less than the array length
for (var i = 0; i < animals.length; i++) {
    
    // Modify each element by prepending "Awesome " to the current value
    animals[i] = "Awesome " + animals[i];
    
    // Output the newly modified string to the console
    console.log(animals[i]);
}