"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var message = "Welcome back";
console.log(message);
var isTrue = true;
console.log(isTrue);
var name = "Tushar";
console.log(name);
var numbers = [1, 2, 3, 4];
console.log(numbers);
var sentence = "My name is ".concat(name);
console.log(sentence);
var isNull = null;
var inUndefinded = undefined;
//tuple
var tuple = ['Tushar', 21];
console.log(tuple);
var randomValue = 10;
randomValue = true;
randomValue = 'Tushar';
var randomValue2 = 10;
randomValue2.toUpperCase;
//union type
var multiType;
multiType = 10;
multiType = true;
//type of the arguments as well as return type of the functions is defined
function add(num1, num2) {
    return num1 + num2;
}
//we can select if the paramter to a function is optional or not by adding question mark
function subtract(num1, num2) {
    return num1 - num2;
}
function fullName(person) {
    if (person.lastName) {
        return person.firstName + person.lastName;
    }
    else {
        return person.firstName;
    }
}
var person = { firstName: "Tushar" };
console.log(fullName(person));
//class
var Batsman = /** @class */ (function () {
    function Batsman(name) {
        this.batsmanName = name;
    }
    Batsman.prototype.greet = function () {
        console.log("Hello ".concat(this.batsmanName));
    };
    return Batsman;
}());
//instance of a class
var bat1 = new Batsman('Tushar');
bat1.greet();
//inhertence
var Allrounder = /** @class */ (function (_super) {
    __extends(Allrounder, _super);
    function Allrounder(name) {
        return _super.call(this, name) || this;
    }
    Allrounder.prototype.delegateWork = function () {
        console.log('Working');
    };
    return Allrounder;
}(Batsman));
var m1 = new Allrounder('Jha');
m1.greet();
m1.delegateWork();
