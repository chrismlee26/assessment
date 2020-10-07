const display = document.querySelector('#headline-display')

const inputSize = document.querySelector('#input-size')
const selectFont = document.querySelector('#select-font')
const inputColor = document.querySelector('#input-color')
const inputBgColor = document.querySelector('#input-bg-color')
const inputText = document.querySelector('#enter-text')

const showSize = document.querySelector('#show-size')
const showFont = document.querySelector('#show-font')
const showColor = document.querySelector('#show-color')
const showbgColor = document.querySelector('#show-bg-color')

inputSize.addEventListener('input', handleInput)
selectFont.addEventListener('input', fontInput)
inputColor.addEventListener('input', colorInput)
inputBgColor.addEventListener('input', bgInput)
inputText.addEventListener('input', textInput)

function handleInput() {
	const fontSize = inputSize.value + 'px'
	display.style.fontSize = fontSize
    showSize.innerHTML = fontSize   
}

function fontInput() {
    const fontType = selectFont.value
    display.style.fontFamily = selectFont.value
    showFont.innerHTML = fontType
}

function colorInput() {
    const textColor = inputColor.value
    display.style.color = inputColor.value
    showColor.innerHTML = textColor
}

function bgInput() {
    const bgColor = inputBgColor.value
    display.style.backgroundColor = inputBgColor.value
    showbgColor.innerHTML = bgColor
}

function textInput() {
    display.innerHTML = inputText.value

}

