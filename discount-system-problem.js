/**
 * Build a simple discount system: 
 * if cart total is above 1000 AND the user is a member, apply a 20% discount; if only above 1000,
 *  apply a 10% discount; otherwise, 
 * no discount — use logical operators combined with if-else if.
 */

//solution One

const total = 500;
const member = true;

/*
if (total>=1000){
    if(member){
        discount = total * 20/100;
        updateAmount = total -discount;
        console.log('Your Discount(20%) is ' + discount + 'You have to pay ' + updateAmount);
    } else{
        discount = total * 10/100;
        updateAmount = total -discount;
        console.log('Your Discount(10%) is ' + discount + 'You have to pay ' + updateAmount);
    }

} 
else{
    console.log('No discount');
}*/

//solution Two

if(total>=1000 && member===true){
    discount = total * 20/100;
    updateAmount = total -discount;
    console.log('Your Discount(20%) is ' + discount + 'You have to pay ' + updateAmount);
}else if (total>=1000 && member===false){
    discount = total * 10/100;
        updateAmount = total -discount;
        console.log('Your Discount(10%) is ' + discount + 'You have to pay ' + updateAmount);
}
else{
    console.log('No discount');
}