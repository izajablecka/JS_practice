// Mamy tablicę liczb
let numbers = [1, 2, 3, 4, 5];

// Chcemy stworzyć nową tablicę zawierającą kwadraty każdej liczby z tablicy numbers
let squares = numbers.map(number => {
    return number * number;
});

console.log("Kwadraty liczb w tablicy: ", squares);
