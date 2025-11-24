//Temperatures for each day
const day1TempF = 32
const day2TempC = 25
const day3TempF = 70
const day4TempC = 18
const day5TempF = 80
const day6TempC = 15
const day7TempF = 72
const day8TempC = 28
const day9TempF = 68
const day10TempC = 20
const day11TempF = 75
const day12TempC = 23
const day13TempF = 82
const day14TempC = 30
const day15TempF = 65
const day16TempC = 22
const day17TempF = 77
const day18TempC =26
const day19TempF = 78
const day20TempC = 24
const day21TempF = 73
const day22TempC = 21
const day23TempF = 79
const day24TempC = 27
const day25TempF = 71
const day26TempC = 19
const day27TempF = 74
const day28TempC = 17
const day29TempF = 76
const day30TempC = 29

//Temperature for each day in fahrenheit
const tempF =[32,70,80,72,68,75,82,65,77,78,73,79,71,74,76]; 

//Convert fahrenheit to celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
}

// output: fahrenheitToCelsius(68); // 20 
//Temperature for each day in celsius
const tempC = [25,18,15,28,20,23,30,22,26,24,21,27,19,17,29];

//Convert celsius to fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
// console.log(celsiusToFahrenheit(20)); // 68

// sum up all the temperatures in fahrenheit
function calc_tot_temperature_in_fahrenheit(){
    const sumF = tempF.reduce((sum, t) => sum + t, 0);
    const sumFromC = tempC.reduce((sum, c) => sum + celsiusToFahrenheit(c), 0);
    return sumF + sumFromC;
}

// sum of all tempreaature in celcius
function calc_tot_temperature_in_celsius(){
    const sumC = tempC.reduce((sum, t) => sum + t, 0);
    const sumFromF = tempF.reduce((sum, f) => sum + fahrenheitToCelsius(f), 0);
    return sumC + sumFromF;
}

// calculate average temperature in fahrenheit
function calc_avg_temperature_in_fahrenheit(){
    const totalDays = tempF.length + tempC.length;
    return calc_tot_temperature_in_fahrenheit() / totalDays;
}

// calculate average temperature in celsius
function calc_avg_temperature_in_celsius(){
    const totalDays = tempF.length + tempC.length;
    return calc_tot_temperature_in_celsius() / totalDays;
}

// create the exported numeric variables expected by the tests
const tot_temperature_in_fahrenheit = calc_tot_temperature_in_fahrenheit();
const tot_temperature_in_celsius = calc_tot_temperature_in_celsius();
const avg_temperature_in_fahrenheit = calc_avg_temperature_in_fahrenheit();
const avg_temperature_in_celsius = calc_avg_temperature_in_celsius();

console.log("Total Temperature in Fahrenheit: " + tot_temperature_in_fahrenheit);
console.log("Total Temperature in Celsius: " + tot_temperature_in_celsius);
console.log("Average Temperature in Fahrenheit: " + avg_temperature_in_fahrenheit);
console.log("Average Temperature in Celsius: " + avg_temperature_in_celsius);

//* Then apply the conversion to calculate the total in the other unit of measurement
//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius

//! Start the calculation of the average temperatures
//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius

//! Console.log the results for your own inspection if you'd like

//! After creating the four variables mentioned above, uncomment the following lines
//* This way you can export them to the test file, this is essential for the tests to work

module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};