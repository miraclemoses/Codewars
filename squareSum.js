//Complete the square sum function so that it squares each number passed into it and then sums the results together.

//For example, for [1, 2, 2] it should return 9 because 
// 1^2 + 2^2 + 2^2

//solution
function squareSum(num) {
  return num.reduce((acc, c) => acc + c**2, 0)
}


squareSum([1,3,5])
