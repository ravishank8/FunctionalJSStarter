//Functions as first grade citizens

// 1 - Number/function can be stored in a variable
var num = 20;
var func = function () {
    return "Stored in a variable";
}
console.log(num);
console.log(func());

// 2 - Number/function can be stored in an array
var numArray = [1, 2, 3, 4, 5, 6];
var funcArray = [a => a * 2, b => b / 2];

numArray.forEach(elem => console.log(elem));
funcArray.forEach(func => console.log(func(2)));

// 3- Number/function can be stored in the property of a object
var numObj = {
    firstNum: 1,
    secondNum: 2
}
var funcObj = {
    firstFunc: a => a + 2,
    secondFunc: b => b - 2
}

console.log("From the num obj: firstNum is " + numObj.firstNum + 
           " : secondNum is " + numObj.secondNum);
console.log("From the func obj: firstFunc output is " + funcObj.firstFunc(2) + 
           " : secondFunc output is " + funcObj.secondFunc(2));

// 4- Number/function can be part of an expression
var finalValue = 2 + (a => a + 2)(3);
console.log("The var and IIFE addition value is " + finalValue);

// 5- Number can be passed to a function
var numInput = 5;
var funcInput = function add5(x) {
    return x + 5;
}

var funcAdd = (function (numberInput, functionInput) {
    return functionInput(numberInput);
}(numInput, funcInput));

console.log("Example of passing number and function to a function: " + funcAdd);

// 6- Number/function can be returned from a function
var funcReturningNum = x => x + 2;
var funcReturningFunc = function(){
    return x => x + 2;
}

console.log("Example of returning function from a function: " + 
           (funcReturningFunc()(2)));