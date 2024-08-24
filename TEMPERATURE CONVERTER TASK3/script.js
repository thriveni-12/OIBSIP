document.getElementById('convertButton').addEventListener('click', function() {
    const tempInput = document.getElementById('tempInput').value;
    const unit = document.getElementById('unitSelect').value;
    let resultText = '';

    if (isNaN(tempInput) || tempInput === '') {
        resultText = 'Please enter a valid number';
    } else {
        const temperature = parseFloat(tempInput);

        if (unit === 'Celsius') {
            const fahrenheit = (temperature * 9/5) + 32;
            const kelvin = temperature + 273.15;
            resultText = `${temperature}°C is equal to ${fahrenheit.toFixed(2)}°F and ${kelvin.toFixed(2)}K`;
        } else if (unit === 'Fahrenheit') {
            const celsius = (temperature - 32) * 5/9;
            const kelvin = (temperature - 32) * 5/9 + 273.15;
            resultText = `${temperature}°F is equal to ${celsius.toFixed(2)}°C and ${kelvin.toFixed(2)}K`;
        } else if (unit === 'Kelvin') {
            const celsius = temperature - 273.15;
            const fahrenheit = (temperature - 273.15) * 9/5 + 32;
            resultText = `${temperature}K is equal to ${celsius.toFixed(2)}°C and ${fahrenheit.toFixed(2)}°F`;
        }
    }

    document.getElementById('result').innerText = resultText;
});

