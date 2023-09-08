//Write a function which calculates the average of the numbers in a given list.
// note: empty array should return 0
//solution 
function average(list) {
  if (list.length > 0) {
   return list.reduce((acc, c ) => acc + c)/list.length
} else {
  return 0
  }
}

average([1,2,3,5,6])
