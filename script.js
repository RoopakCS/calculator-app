const display = document.getElementById("display");
const equalButton = document.getElementById("equal");

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

document.addEventListener("keydown", (event) => {
  if (event.key >= "0" && event.key <= "9") {
    // If number key (0-9) is pressed
    display.value += event.key;
  } else if (event.key === "Backspace") {
    // If backspace key is pressed (for DE functionality)
    display.value = display.value.slice(0, -1);
  } else if (event.key === ".") {
    // If period key is pressed (for . functionality)
    display.value += ".";
  } else if (event.key === "Enter") {
    // If Enter key is pressed (for "=" functionality)
    event.preventDefault(); // Prevent default form submission behavior
    equalButton.click();
  } else if (event.key === "Escape") {
    // If Escape key is pressed (for AC functionality)
    display.value = "";
  } else if (
    event.key === "+" ||
    event.key === "-" ||
    event.key === "*" ||
    event.key === "/"
  ) {
    // If operator keys (+, -, *, /) are pressed
    display.value += event.key;
  }
});
