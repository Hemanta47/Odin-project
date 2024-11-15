export function celsiusToFahrenheit(celsius) {
    return `${Math.round((celsius * 1.8) + 32)}°F`;
}

// Convert Fahrenheit to Celsius
export function fahrenheitToCelsius(fahrenheit) {
    return  `${Math.round(((fahrenheit - 32) / 1.8))}°C`;
}