/**
 * Using a bmi variable, 
 * determine the category — 
 * Underweight, Normal, Overweight, Obese (use if-else if).
 */

const bmi = 80;
if(bmi<18.5){
    console.log("Underweight");
}else if(bmi>=18.5 && bmi<=24.9){
    console.log('Healthy Weight');
}else if(bmi>=25 && bmi<=29.9){
    console.log('Over Weight');
}else {
    console.log('Obesity');
} 