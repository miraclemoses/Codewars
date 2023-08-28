///In this little assignment you are given a string of space-separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers){
  // ...
 let num = numbers.split(" ")
  return `${Math.max(...num)} ${Math.min(...num)}`
}

highAndLow("9,2,4,5,6")
