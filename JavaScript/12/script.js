function calculatesum (num){
    var sum  = 0;
    for (i=0;i<num.length;i++){
        sum = sum + num[i];
    }
    console.log(sum)
}


const array = [1,2,4,4,5];
calculatesum(array);
