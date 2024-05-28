//JS FILE FOR HTML
//CREATED BY : GUSTAV I

//function 1 
function displayNumbers() {
//input
  const minNumber = document.getElementById('minNumber').value;
  const maxNumber = document.getElementById('maxNumber').value;
  const displayDiv = document.getElementById('numberDisplay');

  displayDiv.innerHTML = '';
//if statement for input check
  if (isInteger(minNumber) && isInteger(maxNumber)) {
    const min = parseInt(minNumber);
    const max = parseInt(maxNumber);

    if (min <= max) {
      for (let i = min; i <= max; i++) {
        const numberElement = document.createElement('p');
        numberElement.textContent = i;
        displayDiv.appendChild(numberElement);
      }
    } else { //error message no.1
      displayDiv.textContent = 'Please enter a minimum number less than or equal to the maximum number.';
    }
  } else { //error message no.2
    displayDiv.textContent = 'Please enter valid integer numbers.';
  }
}
//function 2
function isInteger(value) {
//Returns boolean value whether value is an integer or not
  return /^-?\d+$/.test(value);
}
