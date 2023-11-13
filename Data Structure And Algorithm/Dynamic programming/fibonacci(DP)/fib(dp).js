let n = prompt("enter the number:");
n = parseInt(n);

let memo = [];

function fibbonacci(n) {
    
    // let memo = [];

      if(memo[n]!=null){
          return memo[n];
     }
    if (n == 0 || n == 1){
        return n;
    }
    else {
        memo[n] = fibbonacci(n-1) + fibbonacci(n-2);
        return memo[n];
        
    }
    
}

let result = fibbonacci(n);
console.log(result);
