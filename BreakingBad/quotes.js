const getAuthors = async () =>{
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes/9999')
    const data = await res.json()

    authors = [...new Set(data.map( q => q.author))]

    return authors
    
}

const getQuotes = async(n) => {
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes/'+n)
    const quotes = await res.json()

    return quotes
}

const authorsWithOutCorrectAnwser = async (authors,correctAnswerAuthor) => {
    return authors.filter( author => author != correctAnswerAuthor)
}

const setQuote = (quote,authors,points) => {
    const id = 'quote-'+Math.random()*100000
    const correctAnswer = Math.floor(Math.random()*4)+1

    document.body.innerHTML+= `
    <div id='${id}'>
        <h2 id='quote-${id}'>${quote.quote}</h2>
        <button id='btn-${id}-1' class="btn"></button>
        <button id='btn-${id}-2' class="btn"></button>
        <button id='btn-${id}-3' class="btn"></button>
        <button id='btn-${id}-4' class="btn"></button>
    </div>`

    const btnCorrectAnswer = document.getElementById(`btn-${id}-${correctAnswer}`)
    btnCorrectAnswer.innerText = quote.author
    btnCorrectAnswer.style.color = "#fff"

    for(let i=1;i<=4;i++){
        const btn = document.getElementById(`btn-${id}-${i}`)
        if (btn.innerHTML == '') btn.innerText = authors[i]
    }

    const allBtn = [...document.getElementsByClassName('btn')]
    allBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.innerText == quote.author) points++
            btn.parentElement.remove();
            return points
        })
    })


}

const load = async() => {
    const quotes = await getQuotes(1)
    const allAuthors = await getAuthors()
    const authors = await authorsWithOutCorrectAnwser(allAuthors,quotes[0].author)
    let points = 0
    const pointsPlacehoder = document.getElementById('points')
    pointsPlacehoder.innerText = "Points: " + points
    points += setQuote(quotes[0],authors,points)
    pointsPlacehoder.innerText = "Points: " + points
}

load()