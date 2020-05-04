var add3 = x => x + 3;

var subtract2 = x => x - 2;

var squareself = x => x * x;

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


// Composing through pipe
console.log(squareself(subtract2(add3(3))));
var prepareNum = pipe(add3, subtract2, squareself);
var prepareNumCompose = compose(squareself, subtract2, add3);

console.log(prepareNum(3));
console.log(prepareNumCompose(3));
