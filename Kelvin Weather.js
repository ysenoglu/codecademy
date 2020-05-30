/*kelvin*/
const kelvin = 0;
/*celcius*/
const celcius = kelvin - 273;
/*fahrenheit*/
let fahrenheit = celcius * (9/5) + 32;
/*fahrenheit floor */
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
