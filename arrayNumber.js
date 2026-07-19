//7. Sort an array of numbers in ascending order, 
// keeping numeric order correct (not string order).

const number = [10,70,80,90,42,60,52,85,12,1000,500,200,150]

// number.sort();
// console.log(number)
number.sort((a,b)=>a-b);
console.log(number)