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
            if (args.length >= arity) {
                return fn( ...args );
            }
            else {
                return nextCurried( args );
            }
        };
    })( [] );
}

const addNums = (a, b, c) => a + b + c;

const multiplyNums = (a, b, c) => a * b * c;

const squareNum = x => x * x;

const numTransformPipeline = pipe(
    squareNum,
    curry(addNums)(2)(3),
    curry(multiplyNums)(2)(3)
);

console.log(numTransformPipeline(2));