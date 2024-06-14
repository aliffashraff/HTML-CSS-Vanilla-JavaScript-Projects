let calculation = localStorage.getItem('calculation') || '';

    //display the calculation when the page load
    displayCalculation();

    function insertCalculation(character) {
      calculation += character;
      displayCalculation();
      saveCalculation();
    }

    //calculate total with the '=' button
    function calculateTotal() {
      calculation = eval(calculation);
      displayCalculation();
      saveCalculation();
    }

    //clear the calculation with 'Clear' button
    function clearCalculation() {
      calculation = '';
      displayCalculation();
      saveCalculation();
    }

    //delete the calculation with 'Delete' button
    function deleteCalculation() {
      //calculation = calculation.slice(0, -1);
      const lastCharacter = calculation.length - 1;

      if (calculation[lastCharacter] === ' ') {
        calculation = calculation.slice(0, -2);
      }
      else {
        calculation = calculation.slice(0, -1);
      }

      displayCalculation();
      saveCalculation();
    }

    //display the calculation on the page instead of the console
    function displayCalculation() {
      let outputElement = document.querySelector('.js-output-calculation');
      outputElement.innerHTML = calculation;
    }

    //save the calculation
    function saveCalculation() {
      localStorage.setItem('calculation', calculation);
    }