//Write a program that prompts the user for their age and determines if they are eligible to vote (considering voting age is 18).

let age = prompt("enter your age");
age = parseInt(age);

if(age>=18){
    console.log("You are eligible to vote");
}
else{
    console.log("sorry, you are not eligible to vote");
}