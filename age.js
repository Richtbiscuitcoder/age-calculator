document.querySelector('#calculate').addEventListener('click', () => {
    const dd = document.querySelector('#dd').value
    const mm = document.querySelector('#mm').value
    const yy = document.querySelector('#yy').value
    console.log(dd)
    const dob = new Date(yy, mm, dd)
    const today = new Date()
    const age = today - dob
    const years = age / 31536000000 // 1 year=(365)×(24)×(60)×(60) = 31,536,000seconds
    const months = ((years - Math.floor(years)) * 12)
    const days = ((months - Math.floor(months)) * 30)
    document.querySelector('#years').textContent = Math.floor(years)
    document.querySelector('#months').textContent = Math.floor(months)
    document.querySelector('#days').textContent = Math.floor(days)
})

console.log('dgtrh')
