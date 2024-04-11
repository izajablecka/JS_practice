// Funkcja do konwersji temperatury z Celsiusza na Fahrenheita
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Tablica temperatur w stopniach Celsiusza
let temperaturesCelsius = [0, 10, 20, 30, 40];

// Używamy metody map() do konwersji każdej temperatury na Fahrenheity
let temperaturesFahrenheit = temperaturesCelsius.map(celsius => {
    return celsiusToFahrenheit(celsius);
});

console.log("Temperatury w stopniach Fahrenheit: ", temperaturesFahrenheit);
