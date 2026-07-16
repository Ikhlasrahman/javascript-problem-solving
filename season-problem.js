/**Using a month number (1-12), 
 * determine which season that month
 *  falls in (Winter, Summer, Monsoon, etc.).
 */

const month = 80;

 if (month>=1 && month<=2){
    console.log('winter');
} else if(month>=3 && month<=5){
    console.log('spring');
} else if(month>=6 && month<=8){
    console.log('summer');
} else if(month>=9 && month<=11){
console.log('Autumn');
} 
else if(month===12){
    console.log('Winter');
}
else{
    console.log('Invalid Month');
}