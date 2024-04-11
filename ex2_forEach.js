// Mamy tablicę osób

let persons = [
    {name: 'John', age: 30},
    {name: 'Alice', age: 25},
    {name: 'Bob', age: 35}
];

// Chcemy wyświetlić informacje o każdej osobie w formacie: "Imię: John, Wiek: 30"

persons.forEach(person => {
    console.log(`Imię: ${person.name}, Wiek: ${person.age}`);
});

//W tym przykładzie mamy tablicę obiektów persons, gdzie każdy obiekt reprezentuje osobę z polami name (imię) i age (wiek).
// Pętla forEach iteruje po każdym elemencie tablicy persons, a dla każdej osoby wyświetla imię i wiek za pomocą metody console.log().