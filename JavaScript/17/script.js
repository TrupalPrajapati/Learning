//Create an array of numbers and write a program to find the largest and smallest numbers in the array.

let a = [ 6, 9, 7, 4, 5, 1, 3, 8, 2];
max = 0 ; 
min = a[0] ;

for(i=0;i<a.length;i++){
    if(a[i]>=max){
        max = a[i];
    }    
    if(min >=a[i]){
        min = a[i];
    }
 }

console.log(max);

console.log(min);