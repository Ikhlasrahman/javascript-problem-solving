//1. Create an array with 3 items of your choice. Log it.
const color = ['Red','Green','Blue'];
console.log(color);
//2. Log the length of the array from Task 1.
console.log(color.length);
//3. Log the item at index 0 and index 2 of the array.
console.log(color[0], color[2]);
//4. Change the item at index 1 to a new value. Log the array.
color[0]='Yellow'
console.log(color);
//5. Add one item to the end of the array. Log the array.
const NewColor= color.push('white');
console.log(color);
// 6. Remove the last item from the array. Log the array and the removed value.
const RemoveColor = color.pop();
console.log(color);
//7. Add one item to the start of the array. Log the array.
const addItem = color.unshift('Pink');
console.log(color);
//8. Remove the first item from the array. Log the array and the removed value.
const removeItem = color.shift();
console.log(color);
//9. Check whether the array contains a specific value. Log true or false.
const checkValue = color.includes('Yellow')
console.log(checkValue)
//10. Find the position of a specific value in the array. Log the number.
console.log(color.indexOf('Green'));