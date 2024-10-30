// Get the display element
const display = document.getElementById("display");
let openParenthesis = true; // Tracks which parenthesis to insert

// Function to clear the display
function clearDisplay() {
  display.value = "";
  openParenthesis = true; // Reset the parenthesis toggle
}

// Function to append a value to the display
function appendValue(value) {
  display.value += value;
}

// Function to calculate the square of a number
function square() {
  display.value = Math.pow(parseFloat(display.value), 2);
}

// Function to toggle between '(' and ')'
function toggleParenthesis() {
  if (openParenthesis) {
    appendValue('(');
  } else {
    appendValue(')');
  }
  openParenthesis = !openParenthesis; // Toggle the parenthesis
}

// Function to calculate the expression
function calculate() {
  try {
    display.value = eval(display.value); // Evaluate the expression
  } catch (error) {
    display.value = "Error"; // Display error for invalid expressions
  }
}

