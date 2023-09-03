///Given an array of integers.

//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

//If the input is an empty array or is null, return an empty array.

//solution


function countPositivesSumNegatives(input) {
  //this takes care of null
  if (input ==  null || input.length < 1) {
    return  []
    }
  var newarray = [0, 0]
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      newarray[0] += 1
      } else {
        newarray[1] += input[i]
  }
 }
    return newarray;
    
}


countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
