function convertFahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) / 1.8;
};


function convertFahrenheitToKelvin(fahrenheit) {
  return (fahrenheit- 32) * 5 / 9 + 273.15
};

function convertKelvinToCelsius(kelvin) {
  console.log(kelvin - 273.15);
  return kelvin - 273.15;
};

function convertKelvinToFahrenheit(kelvin) {
  return(kelvin - 273.15) * 1.8 + 32;
};

function convertCelsiusToFahrenheit(celsius) {
  return(celsius * (9.0/5.0) + 32.0);
};

function convertCelsiusToKelvin(celsius) {
  return(celsius + 273.15);
};
//celsius to kelvin
