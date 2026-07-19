//9. Given an array of numbers, calculate and log the total sum, using a loop.
const number = [1,7,0,9,4,60,52,85,12,1000,500,200,150];
let sum =0;
for(let i=0;i<number.length;i++){
    sum = number[i] +sum;
}
console.log(sum);