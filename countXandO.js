//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

//solution
function XO(str) {
    //code here
  //change to lowercase and to array
  str = str.toLowerCase().split("");
  
// take count of value, create variable 
  
  //count by using reduce and function
 var wordCount1 = str. reduce(function(n, val) {
    return n + ( val == "x")
    }, 0);
  //second count
 var wordCount2 = str.reduce(function(n, val) {
    return n + ( val == "o")
    }, 0);
 // check odd or even count
 if (wordCount1 == wordCount2) {
   return true;
   } else {
     return false;
     }
}


