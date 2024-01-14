const keys = [...document.getElementsByClassName('key')]

keys.forEach(btn => {
    btn.addEventListener('click', () => {
        const key = { key : btn.value }
        write(key)
    })
})