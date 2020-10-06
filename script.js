Your goal is to set the color, background-color, font-family, and font-size 
of the #display text, and display these values in the mockedup CSS code in 
the #data-display section.



// The headline element
const display = document.querySelector('#display')

// The input field for size
const inputSize = document.querySelector('#input-size')
// The element that displays the value 
const showSize = document.querySelector('#show-size')
// Repeat this for the input and "show" elements

inputSize.addEventListener('input', handleInput)

function handleInput() {
	// get the font size:
	const fontSize = inputSize.value + 'px'
	// Set the style 
	display.style.fontSize = fontSize
	// Show the size
	showSize.innerHTML = fontSize
}




// You need to repeat the process for the other properties:

// font-size
// font-family
// color
// background-color

// You also need to set the text of the #display element to the text 
// that is entered into the textarea #enter-text. Take the value and 
// set it as the innerHTML.

// When you're done you should be able to enter the: 
// font-size, 
// color, 
// font-family, 
// background-color 
// and the values entered should change the appearance of the headline 
// element, and show the CSS code that might be used to create this headline.