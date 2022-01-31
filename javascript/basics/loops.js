//for loop is used to iterate through an array 
var names = ['himanshu', 'sudhanshu', 'tushar'];
for (var i = 0; i < names.length; i++) {
    console.log('hello ' + names[i]);
}

//for in loop is used to iterate through properties of an object
const personaldata = {
    name: "Tushar Jha",
    age: 21,
    residence: "New Delhi"
}
for (const prop in personaldata) {
    console.log(prop + " : " + personaldata[prop]);
}

//for of loop is used to iterate through the elements of an iterable data structure
const values=[10,20,30,40];
const myName="Tushar jha";

for(let value of values){
    console.log(value);
}
for(const character of myName){
    console.log(character);
}

//while loop is used for running a block of code in loop until a given statement is true
var i=1;
var j=5;
while(j>0){
    i+=i*2;
    j=j-1;
}
console.log(i);

//do while loop is same as while loop but it is an exit control loop and runs before checking the condition

var i=1;
var j=5;
do{
    i+=i*2;
    console.log(i)
    j=j-1;
}while(j>0);
