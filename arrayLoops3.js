//1. Given an array of numbers, remove duplicates and log the unique values only.

const numbers = [5, 10, 5, 20, 10, 30, 20];
let unique = [];

for(let i=0;i<=numbers.length-1;i++){
    if(unique.includes(numbers[i])===false){
    unique.push(numbers[i]);
}
}

console.log(unique);


