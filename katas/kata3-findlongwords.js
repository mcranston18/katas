/*
Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
*/

function filterLongWords(string, int) {
    
    // new var "word" that divides the string into arrays
	
    var words = string.split(" ");
	var longest = [];
	
	// loop through each string; 
		
	for(i = 0; i < words.length; i++) {
		if(words[i].length > int)
        longest += words[i] + " ";
	}
	
	return longest;
}
