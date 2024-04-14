const display = document.getElementById('display')

const setDisplay = (a) => {
    display.innerText += a
}
const clearDisplay = () => {
    display.innerText = ""
}

const calculate = () => {
    try {
        const result = eval(display.innerText)
        display.innerText = result
    } 
    catch (error) {
        display.innerText = 'syntax error'
    }
   
}