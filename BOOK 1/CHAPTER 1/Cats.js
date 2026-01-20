
var drawCats = function (howManyTimes) {
    // Loop from 0 up to the specified count
    for (var i = 0; i < howManyTimes; i++) {
        // Log the current index and a cat face string
        console.log(i + " =^.^=");
    }
};

// Execute the function to draw 10 cats
drawCats(10); 

//Without using a Function:
for (var i = 8; i < 11; i++) {
    console.log(i + " =^.^=");
};