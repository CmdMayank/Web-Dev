// function sum(a,b) {
//     let c = a + b;
//     console.log(c);
// }

// sum(19, 90);

// function sum_with_d(x, y = 10){
//     console.log(x + y);
// }
// sum_with_d(10, 20);
// sum_with_d(10);

function calc(a, b, c){
    return a + b - c;
}
let ans = calc(10, 3, 5);
console.log(ans);

const greet = function(name) {
    console.log("Hello " + name);
}
greet("Mayank");