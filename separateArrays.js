const data = [10, "Apple", 50, "Banana", 100, "Orange", 25];

const numbers = []
const strings =[]

for (let i=0;i<data.length;i++){
if(typeof(data[i])==="number"){
    numbers.push(data[i]);
}else{
    strings.push(data[i]);
}
}
console.log(numbers);
console.log(strings);