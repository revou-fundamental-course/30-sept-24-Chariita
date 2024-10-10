
document.addEventListener('DOMContentLoaded', function() {
    
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const calculationMethodElement = document.getElementById('calculation-method');
    const convertButton = document.getElementById('convert');
    const reverseButton = document.getElementById('reverse');
    const resetButton = document.getElementById('reset');
  
    
    convertButton.addEventListener('click', () => {
     
      const celsiusValue = parseFloat(celsiusInput.value);
      if (!isNaN(celsiusValue)) {
        const fahrenheitValue = (celsiusValue * 9/5) + 32;
        fahrenheitInput.value = fahrenheitValue.toFixed(2);
        
        
        const calculationMethod = `
          ${celsiusValue}°C × (9/5) = ${(celsiusValue * 9/5).toFixed(2)} 
          ${(celsiusValue * 9/5).toFixed(2)} + 32 = ${fahrenheitValue.toFixed(2)}°F`;
        calculationMethodElement.innerText = calculationMethod;
      } else {
        alert('Masukkan nilai Celsius yang valid.');
      }
    });
  
    
    reverseButton.addEventListener('click', () => {
      
      const fahrenheitValue = parseFloat(fahrenheitInput.value);
      if (!isNaN(fahrenheitValue)) {
        const celsiusValue = (fahrenheitValue - 32) * 5/9;
        celsiusInput.value = celsiusValue.toFixed(2);
        
       
        const calculationMethod = `
          ${fahrenheitValue}°F - 32 = ${(fahrenheitValue - 32).toFixed(2)} 
          ${(fahrenheitValue - 32).toFixed(2)} × (5/9) = ${celsiusValue.toFixed(2)}°C`;
        calculationMethodElement.innerText = calculationMethod;
      } else {
        alert('Masukkan nilai Fahrenheit yang valid.');
      }
    });
  
   
    resetButton.addEventListener('click', () => {
      
      celsiusInput.value = '';
      fahrenheitInput.value = '';
      calculationMethodElement.innerText = ''; 
    });
  });