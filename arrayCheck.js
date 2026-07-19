//4. Check two variables (one array, one not) and log whether each is an array.
//Expected: true then false, or false then true depending on order

const a = ['red','green','blue','white']
const b = "Red";

console.log(Array.isArray(a));
console.log(Array.isArray(b));