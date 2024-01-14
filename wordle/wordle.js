const WORD_OF_THE_DAY = "COCHE"
const ROWS = 5

const inputGrid = document.getElementById('input-grid')

const setRows = (rows=1) => {
    for(let i=0;i<rows;i++) {
        const inputRow = document.createElement('div')
        inputRow.className = 'input-row'
        for (let i = 0;i<WORD_OF_THE_DAY.length;i++) {
            const letterInput = document.createElement('div')
            letterInput.className = 'input-div'
    
            inputRow.appendChild(letterInput)
        }
    
        inputGrid.appendChild(inputRow)
    }
}

const isLetter = (caracter) => {
    return /^[a-zA-Z]$/.test(caracter);
}

const displayRow = (checkWord=false) => {

    for (let i=0;i<WORD_OF_THE_DAY.length;i++){
        const userLetter = word.charAt(i)
        const WORD_OF_THE_DAY_LETTER = WORD_OF_THE_DAY.charAt(i)

        const inputDiv = document.querySelector(`.input-row:nth-child(${inputRowPointer}) .input-div:nth-child(${i+1})`)
        inputDiv.innerText = userLetter

        if (checkWord) {
            inputDiv.classList.add('animated-element')
            if(word === WORD_OF_THE_DAY){
                document.removeEventListener('keydown',write)
            }

            if (userLetter === WORD_OF_THE_DAY_LETTER) {
                inputDiv.style.background = "#0f0"
            }
            else if (WORD_OF_THE_DAY.includes(userLetter)) {
                inputDiv.style.background = "#fc0"
            }
            else {
                inputDiv.style.background = "#444"
            }
        }
    }

}



let inputRowPointer = 1

let word = ""

const write = (e) =>  {

    //WRITE LETTER
    if (isLetter(e.key) && word.length < WORD_OF_THE_DAY.length){
        word+=e.key.toUpperCase()
    }

    //REMOVE LETTER
    else if (e.key === "Backspace") {
        word = word.slice(0,-1)
    }

    //ENTER WORD
    else if (e.key === 'Enter' && word.length === WORD_OF_THE_DAY.length) {
        checkWord = true
        displayRow(checkWord)
        inputRowPointer++
        word = ""
    }

    displayRow()

}

document.addEventListener('keydown', write)

setRows(ROWS)



