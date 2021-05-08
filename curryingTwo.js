var toBeSortedArray = [44,22,69,55,66,34,21,34,56,76,43,22,45,12,3,5,6,7,8,9,0];

const pipe = function(...fns) {
    return function(x) {
        return fns.reduce(function(v, f) {
            return f(v);
        }, x);
    }
};

function curry(fn,arity = fn.length) {
    return (function nextCurried(prevArgs){
        return function curried(nextArg){
            var args = [ ...prevArgs, nextArg ];
            //console.log("args are" + args);
            if (args.length >= arity) {
                return fn( ...args );
            }
            else {
                return nextCurried( args );
            }
        };
    })( [] );
}

function bubbleSortArray(initialArray){
    var temp;
    for (var j = 0;j<initialArray.length; j++){
        for(var i=0; i <initialArray.length; i++){
            if(initialArray[i] > initialArray[i+1]){
                temp = initialArray[i+1];
                initialArray[i+1] = initialArray[i];
                initialArray[i] = temp;
            }
        }
    }

    return initialArray;
}

function binarySearchInArray(number, arr, searchIteration = 0){
    searchIteration++;
    console.log("Iteration is " + searchIteration);
    console.log("Number is " + number);
    console.log("arr is " + arr);
    console.log(arr);
    arrLength = arr.length;
    if(arr.length > 1){
        if(arrLength%2 === 0){
            var lowerArray = arr.slice(0,arr.length/2);
            var higherArray = arr.slice((arr.length/2)+1, arr.length-1);
        } else{
            var lowerArray = arr.slice(0,(arr.length-1)/2);
            var higherArray = arr.slice(((arr.length-1)/2)+1, arr.length-1);
        }
        if((number === lowerArray[lowerArray.length-1]) ||
            (number === higherArray[0])){
            console.log("Number found = " + number + " and iteration " + searchIteration);
        }
        else if (number < lowerArray[lowerArray.length-1])
            binarySearchInArray(number,lowerArray, searchIteration);
        else if (number > higherArray[0]) 
            binarySearchInArray(number,higherArray, searchIteration);
        else {
            console.log("sorry");
 
        }

    }

    else {
        console.log("Number Found");
    }    
}

console.log(toBeSortedArray);

//binarySearchInArray(bubbleSortArray(toBeSortedArray),0);

const pipingFunctions = pipe(
   bubbleSortArray,
   curry(binarySearchInArray)(0)
);

pipingFunctions(toBeSortedArray);

console.log(toBeSortedArray);