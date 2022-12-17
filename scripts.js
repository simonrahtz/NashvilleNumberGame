const romanToChord = {
    'I': 'A',
    'ii': 'B',
    'iii': 'C',
    'IV': 'D',
    'V': 'E',
    'vi': 'F',
    'vii': 'G'
  };
  
  function generateNumbers() {
    const romanNumerals = ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii'];
    const roman1 = romanNumerals[Math.floor(Math.random() * 7)];
    const roman2 = romanNumerals[Math.floor(Math.random() * 7)];
    const roman3 = romanNumerals[Math.floor(Math.random() * 7)];
    const roman4 = romanNumerals[Math.floor(Math.random() * 7)];
  
    document.getElementById('number1').textContent = roman1;
    document.getElementById('number2').textContent = roman2;
    document.getElementById('number3').textContent = roman3;
    document.getElementById('number4').textContent = roman4;
  }
  
  function revealNumbers() {
    const chord1 = romanToChord[document.getElementById('number1').textContent];
    const chord2 = romanToChord[document.getElementById('number2').textContent];
    const chord3 = romanToChord[document.getElementById('number3').textContent];
    const chord4 = romanToChord[document.getElementById('number4').textContent];
  
    document.getElementById('number1').textContent = chord1;
    document.getElementById('number2').textContent = chord2;
    document.getElementById('number3').textContent = chord3;
    document.getElementById('number4').textContent = chord4;
  }