/*
Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
*/

function reverse(string) {
    
    var reversed = "";
    
    for(i = (string.length-1); i >= 0; i--)
        reversed += string[i];
    
    return reversed;
}