document.addEventListener('DOMContentLoaded', function ();
    
    const celsius = document.getElementById('celsius');
    const fahrenheit = document.getElementById('fahrenheit');
    const convertButton = document.getElementById('convert');
    const reverseButton = document.getElementById('reverse');
    const resetButton = document.getElementById('reset');
  
    
    convertButton.addEventListener('click', () => {
     
      const celsiusResult = parseFloat(celsiusInput.value);
      if (!isNaN(celsiusResult)) {
        const fahrenheitResult = (celsiusResult * 9/5) + 32;
        fahrenheitInput.value = fahrenheitResult.toFixed(2);} else 
      {alert('Warning! Nilai yang dimasukkan harus valid.');}
    });
  
    
    reverseButton.addEventListener('click', () => {
      
      const fahrenheitResult = parseFloat(fahrenheitInput.value);
      if (!isNaN(fahrenheitResult)) {
        const celsiusValue = (fahrenheitResult - 32) * 5/9;
        celsiusInput.value = celsiusResult.toFixed(2);} 
      else {alert('Warning! Nilai yang dimasukkan harus valid.');}
    });
  
  });
