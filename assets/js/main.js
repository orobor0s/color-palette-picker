document.querySelectorAll('.hex-codes').forEach(color => {
    color.addEventListener('click', event => {
        navigator.clipboard.writeText(color.innerHTML)
    })
})