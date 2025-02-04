# Calculator App

## Overview
This is a simple calculator application built using HTML, CSS, and JavaScript. The app features a responsive design and allows users to perform basic arithmetic operations. It also supports keyboard inputs.

---

## Features

1. **Basic Arithmetic Operations:** Addition, subtraction, multiplication, and division.
2. **Keyboard Support:** Users can input numbers and operators using the keyboard.
3. **Clear and Delete:** Includes buttons for clearing all input (AC) and deleting the last character (DE).
4. **Responsive Design:** Built with a modern and sleek interface.
5. **Hover Effects:** Buttons scale up slightly when hovered over.

---

## Files

- **index.html:** The main HTML structure of the calculator.
- **styles.css:** The CSS file for styling the calculator.
- **script.js:** The JavaScript file containing the functionality for the calculator.

---

## Setup Instructions

1. **Download or Clone the Repository:**
   ```
   git clone <repository-url>
   ```

2. **Open the Project:**
   - Navigate to the folder containing the project files.

3. **Run the Application:**
   - Open the `index.html` file in any modern web browser.

---

## How It Works

### HTML
- The calculator layout is defined using `<div>` elements.
- Each button has an `onclick` attribute to call specific JavaScript functions.

### CSS
- Provides styling for the calculator, including:
  - Button hover effects.
  - Responsive and modern design.
- Fonts are imported from Google Fonts.

### JavaScript
- The `script.js` file handles:
  - Button clicks for numbers and operators.
  - Keyboard event listeners for real-time input.
  - Calculation logic using the `eval()` function.
  - Display of custom messages for specific inputs.

---

## Key Functionalities

1. **Button Clicks:**
   - Each button appends its value to the `display` field.
   - The `=` button calls the `calculate()` function to evaluate the expression.

2. **Keyboard Input:**
   - Numbers, operators, `Enter`, `Backspace`, and `Escape` keys are supported.

3. **Error Handling:**
   - Displays "Error" if the calculation is invalid.

---

## Usage

### Buttons
- **AC:** Clears the entire input.
- **DE:** Deletes the last character in the input.
- **Numbers (0-9, 00):** Inputs numbers to the display.
- **Operators (+, -, *, /):** Adds operators to the calculation.
- **=:** Evaluates the expression and displays the result.

### Keyboard Shortcuts
- **Numbers and Operators:** Directly type numbers and operators.
- **Enter:** Calculates the result (same as the `=` button).
- **Backspace:** Deletes the last character (same as `DE`).
- **Escape:** Clears the input (same as `AC`).

---

## Customization
- Modify the `styles.css` file to change the appearance.
- Update the `script.js` file to add or remove features.
- Add more complex functionality, such as memory storage or scientific calculations.

---

## Example
### Input:
```
7 + 3 * 2
```
### Output:
```
13
```

---

## License
This project is open-source and available for modification and distribution.

