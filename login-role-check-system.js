/**
 * Build a simple login + role-check system that 
 * verifies username/password and shows a different 
 * message based on admin/user role — combine everything from
 *  this module (comparison, logical operators, if-else, ternary).

 */

//solution One
const username = 'ikhlas';
const password = '123456';
const role = true;

if(username==="ikhlas" && password === '123456'){
    if(role){
        console.log("You log in as an admin")
    } else if(!role){
        console.log('You looged in as a user');
    }
    
}

//Solution two
// const username = 'ikhlas';
// const password = '123456';
// const role = true;

// if(username==="ikhlas" && password === '123456'){

//     console.log(role===true?"You looged in as a admin":"You logged in as an user")
// } else{
//     console.log("Wrong credintials");
// }