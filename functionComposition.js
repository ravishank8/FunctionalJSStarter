var add2 = x => x +2;

var subtract2 = x => x - 2;

var squareself = x => x * x;

const pipe2 = function(...fns) {
    return function(x) {
        return fns.reduce(function(v, f) {
            return f(v);
        }, x);
    }
};

const compose = function(...fns) {
    return function(x) {
        return fns.reduceRight(function(v, f) {
            return f(v);
        }, x);
    }
};

const pipe = function (...fns){
    return function(x){
        return fns.reduce(function(a,b){
            return b(a);
        },x);
    }
}
console.log(squareself(subtract2(add2(3))));

// Composing through pipe
var prepareNum = pipe(add2, subtract2, squareself);
var prepareNumCompose = pipe(squareself, subtract2, add2);

console.log(prepareNum(3));
console.log(prepareNumCompose(3));

