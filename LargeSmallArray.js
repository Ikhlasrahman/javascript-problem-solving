// 3. Given an array of numbers, 
// find the largest and smallest value without
// using Math.max or Math.min directly on the whole array (use a loop).

const numbers = [10,20,30,40,50,60,70,80,90,100];

let largest = numbers[0];
let smallest = numbers[0];

for(let i=0;i<numbers.length;i++){
    if(numbers[i]>largest){
        largest=numbers[i]
    }if(numbers[i]<smallest){
        smallest=numbers[i];
    }
}
console.log(largest)
console.log(smallest)

