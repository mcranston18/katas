/*
#1: Write a function findLongestWord() that takes an undetermined array of words and returns the length of the longest one.
*/

function findLongestWord() {
	
	// establish the longest word as the first argument in the array
	
	var longest = arguments[0];
	
	// loop through each string; 
		
	for(i = 0; i < arguments.length; i++) {
		if(longest.length < arguments[i].length)
		longest = arguments[i];
	}
	
	return longest;
}


/*
#2: Write a function findLonestWord() that takes one argument and returns the longest word within that string.
*/

function findLongestWord(string) {
    
	// new var "word" that divides the string into arrays
	
    var words = string.split(" ");
	var longest = words[0];
	
	// loop through each string; 
		
	for(i = 0; i < words.length; i++) {
		if(longest.length < words[i].length)
		longest = words[i];
	}
	
	return longest;
}