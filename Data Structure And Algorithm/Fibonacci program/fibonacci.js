let n = prompt("enter the number:");
n = parseInt(n);
console.log(typeof(n))

function fibbonacci(n) {
    
    if (n == 0 || n == 1){
        return n;
    }
    else {
        return fibbonacci(n-1) + fibbonacci(n-2);
        
    }
}

var value = fibbonacci(n);
console.log(value);

