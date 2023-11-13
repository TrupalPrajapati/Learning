//Create a program that takes a sentence as input and prints the number of vowels in it.

let string = prompt("Enter the sentence");

let vowelcount = 0;

for(i=0;i<string.length;i++){

    if (string[i]=="a" || string[i]=="e" || string[i]=="i" || string[i]=="o"||string[i]=="u"){
        vowelcount++;
    }
    // else if(string[i]=="e"){
    //     vowelcount++;
    // }
    // else if(string[i]=="o"){
    //     vowelcount++;
    // }
    // else if(string[i]=="i"){
    //     vowelcount++;
    // }
    // else if(string[i]=="u"){
    //     vowelcount++;
    // }
}
console.log("no. of vowels", vowelcount);