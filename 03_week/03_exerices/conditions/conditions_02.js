/*
Create a program getTemperature that asks the user to input a temperature in Celsius
and then outputs whether they should wear a jacket (if the temperature is below 15°C) 
or not.
 */

const getTemperature = (temperature) => {
  return temperature < 15
    ? console.log('Wear a jacket')
    : console.log('No need to wear a jacket.');
};

getTemperature(Number(prompt('What is the current temperature?')));
