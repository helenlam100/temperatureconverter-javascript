describe('convertFahrenheitToCelsius', function() {
  it('converts fahrenheit to celsius', function() {
    var fahrenheit = 100;

    var celsiusTemp = convertFahrenheitToCelsius(fahrenheit);

    expect(celsiusTemp).toBeCloseTo(37.778, 3);
  });
});

describe('convertFahrenheitToKelvin', function() {
  it('converts fahrenheit to kelvin', function() {
    var fahrenheit = 100;

    var kelvinTemp = convertFahrenheitToKelvin(fahrenheit);

    expect(kelvinTemp).toBeCloseTo(310.928, 3);
  });
});




describe('convertKelvinToCelsius', function() {
  it('converts kelvin to celsius', function() {
    var kelvin = 274;

    var celsiusTemp = convertKelvinToCelsius(kelvin);

    expect(celsiusTemp).toBeCloseTo(0.85, 3);
  });
});

describe('convertKelvinToFahrenheit', function() {
  it('converts kelvin to fahrenheit', function() {
  var kelvin = 374;

  var fahrenheitTemp = convertKelvinToFahrenheit(kelvin);

  expect(fahrenheitTemp).toBeCloseTo(213.53, 3);
  });
});

describe('convertCelsiusToFahrenheit', function() {
  it ('converts celsius to fahrenheit', function() {
    var celsius = 25;

    var fahrenheitTemp = convertCelsiusToFahrenheit(celsius);

    expect(fahrenheitTemp).toBeCloseTo(77.00, 3);
  });
});

describe('convertCelsiusToKelvin', function() {
  it ('converts celsius to kelvin', function() {
    var celsius = 25;

    var kelvinTemp = convertCelsiusToKelvin(celsius);

    expect(kelvinTemp).toBeCloseTo(298.15, 3);
  });
});









// function convertKelvinToFahrenheit(kelvin) {
//   return(kelvin - 273.15) * 1.8 + 32;
// };
