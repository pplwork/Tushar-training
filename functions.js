//function to return sum of first n integers using for loop
function sumOfN(N) {
    var sum = 0;
    for (let i = 1; i <= N; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumOfN(5));

//function to return capital letters in a string using for of
const names=["TuShaR","TUsHar","ViVeK","AYUSH"] 
function capital(arr){
    for(const name of arr){
        for(const character of name){
            if(character==character.toUpperCase()){
                console.log(character);
            }
        }
    }
}
capital(names);

//function to check if a number is a palindrome or not using while loop
function checkPal(n){
    var temp=n;
    var rev=0;
    while(n>0){
        rev=rev*10+(n%10);
        n=parseInt(n/10);
    }
    if(rev==temp){
        return true;
    }else{
        return false;
    }
}

console.log(checkPal(1772771));