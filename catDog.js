//I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// return their respective ages now as [humanYears,catYears,dogYears]

//NOTES:

//humanYears >= 1 Cat Years 15 cat years for first year +9 cat years for second year +4 cat years for each year after that Dog Years 15 dog years for first year +9 dog years for second year +5 dog years for each year after that


function humanYearsCatYearsDogYears(humanYears) {
  // return humanYears, catYears, dogYears
  let catYears = 0;
  let dogYears = 0;
  
  for(let i = 1; i < humanYears.length; i++){
    if (i === 1) {
      catYears += 15;
      dogYears += 15;
    } else if (i === 2) {
      catYears += 9;
      dogYears += 9;
    } else if (i >= 3) {
      catYears += 4;
      dogYears += 5;
    }
  }
  return [humanYears, catYears, dogYears];
}
humanYearsCatYearsDogYears(10)
