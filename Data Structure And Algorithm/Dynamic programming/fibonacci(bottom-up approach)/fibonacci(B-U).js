let n = prompt("Enter the number:");
n = parseInt(n);

function fib(n){
    let a = [];
    a[0]=0;
    a[1]=1;

    for(i=2;i<=n;i++){
        a[i]=a[i-1]+a[i-2];
    }
    return a[n];
}

let result = fib(n);
console.log(result);

