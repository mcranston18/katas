/*
Write a program that takes a string and calculates the numbers within it and discards all non-numeric values.
*/


function stringCalculator (string) {

    var total = 0;
    
    var int = string.match(/\d/g);
    
    for (i = 0; i < int.length; i ++)
        total += parseInt(int[i], 10);

console.log(total);
}

stringCalculator("2/n4,5")