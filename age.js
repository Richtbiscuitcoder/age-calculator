document.querySelector('#calculate').addEventListener('click', ()=>{
    const dd = document.querySelector('#day').value
    const mm = document.querySelector('#month').value
    const yy = document.querySelector('#year').value

    const dob = new Date(yy, mm, yy)
    const today = new Date()
    const age = today - dob
    const years = age / 31536000000
    const months = ((years - Math.floor(years)) * 12)
    const days = ((months - Math.floor(months)) * 30)
    document.querySelector('#YY').textContent = Math.floor(years)
    document.querySelector('#MM').textContent = Math.floor(months)
    document.querySelector('#DD').textContent = Math.floor(days)
})


