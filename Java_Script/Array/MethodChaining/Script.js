const numbers = [2, 5, 8, 11, 14];

const result = numbers
    .filter((number) => number > 5)
    .map((number) => number * 2);

console.log(result);