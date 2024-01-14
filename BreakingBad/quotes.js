const getAuthors = async () => {
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes/9999')
    const data = await res.json()
    const authors = [...new Set(data.map(q => q.author))]
    return authors
}

const getQuotes = async (n) => {
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes/' + n)
    const quotes = await res.json()
    return quotes
}

const authorsWithOutCorrectAnswer = async (authors, correctAnswerAuthor) => {
    return authors.filter(author => author !== correctAnswerAuthor)
}

const updatePoints = (points) => {
    const pointsPlaceholder = document.getElementById('points')
    pointsPlaceholder.innerText = "Points: " + points
}

const load = async (n) => {
    const allAuthors = await getAuthors()
    let points = 0

    for (let i = 0; i < n; i++) {
        const quotes = await getQuotes(i + 1)
        const authors = await authorsWithOutCorrectAnswer(allAuthors, quotes[0].author)
        await setQuote(quotes[0], authors, points)
        updatePoints(points)
    }
}

const setQuote = async (quote, authors, points) => {
    return new Promise(resolve => {
        const id = 'quote-' + Math.random() * 100000
        const correctAnswer = Math.floor(Math.random() * 4) + 1

        document.body.innerHTML += `
            <div id='${id}'>
                <h2 id='quote-${id}' class="quote-text">${quote.quote}</h2>
                <button id='btn-${id}-1' class="btn"></button>
                <button id='btn-${id}-2' class="btn"></button>
                <button id='btn-${id}-3' class="btn"></button>
                <button id='btn-${id}-4' class="btn"></button>
            </div>`

        const btnCorrectAnswer = document.getElementById(`btn-${id}-${correctAnswer}`)
        btnCorrectAnswer.innerText = quote.author
        //btnCorrectAnswer.style.color = "#fff"

        for (let i = 1; i <= 4; i++) {
            const btn = document.getElementById(`btn-${id}-${i}`)
            if (btn.innerHTML === '') btn.innerText = authors[i - 1]
        }

        const allBtn = [...document.getElementsByClassName('btn')]

        allBtn.forEach(btn => {
            btn.addEventListener('click', () => {
                if (btn.innerText == quote.author) console.log('correcto')
                btn.parentElement.remove()
                updatePoints(points)
                resolve()
            })
        })
    })
}

load(5)
