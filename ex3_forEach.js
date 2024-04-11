// Mamy tablicę liczb
let numbers = [1, 2, 3, 4, 5];

// Chcemy obliczyć sumę wszystkich liczb w tablicy
let sum = 0;
numbers.forEach(number => {
    sum += number;
});

console.log("Suma liczb w tablicy: " + sum);