// Your goal is to set the color, background-color, font-family, and font-size 
// of the #display text, and display these values in the mockedup CSS code in 
// the #data-display section.




const display = document.querySelector('#display')
const inputSize = document.querySelector('#input-size')
const showSize = document.querySelector('#show-size')
const selectFont = document.querySelector('#select-font')
const inputColor = document.querySelector('#input-color')
const inputbgColor = document.querySelector('#input-bg-color')

inputSize.addEventListener('input', handleInput)
display.addEventListener('input', handleInput)

function handleInput() {
	const fontSize = inputSize.value + 'px'
	display.style.fontSize = fontSize
    showSize.innerHTML = fontSize
    
    document.getElementById("display").innerHTML = display

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




// #data-display

// background-color, 
// font-family
// font-size 
// display these values in the mockedup CSS code in 
// the #data-display section. 


