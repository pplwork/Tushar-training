export {}

let message="Welcome back";

console.log(message);

let isTrue:boolean=true;
console.log(isTrue);
let name:String="Tushar";
console.log(name);

let numbers:Array<number>=[1,2,3,4];
console.log(numbers);

let sentence:String=`My name is ${name}`;
console.log(sentence);

let isNull:null=null;
let inUndefinded:undefined=undefined;

//tuple
let tuple:[String,number]=['Tushar',21];
console.log(tuple);

let randomValue:any=10;
randomValue=true;
randomValue='Tushar';

let randomValue2:unknown=10;
(randomValue2 as string).toUpperCase;


//union type
let multiType: number | boolean;
multiType=10;
multiType=true;


//type of the arguments as well as return type of the functions is defined
function add(num1:number,num2:number):number{
    return num1+num2;
}

//we can select if the paramter to a function is optional or not by adding question mark
function subtract(num1:number,num2?:number):number{
    return num1-num2;
}

function fullName(person:{firstName:string,lastName?:string}):string{
    if(person.lastName){
        return person.firstName+person.lastName;
    }else{
        return person.firstName;
    }
}
let person={firstName:"Tushar"};
console.log(fullName(person));

//class
class Batsman{
    batsmanName:string;
    constructor(name:string){
        this.batsmanName=name;
    }

    greet(){
        console.log(`Hello ${this.batsmanName}`);
    }
}

//instance of a class
let bat1=new Batsman('Tushar');
bat1.greet();

//inhertence
class Allrounder extends Batsman{
    constructor(name:string){
        super(name);
    }
    delegateWork(){
        console.log('Working');
    }
}

let m1=new Allrounder('Jha');
m1.greet();
m1.delegateWork();