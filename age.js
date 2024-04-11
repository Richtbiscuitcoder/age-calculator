document.querySelector('#calculate').addEventListener('click', ()=>{
    const day = document.querySelector('.day').value
    const month = document.querySelector('.month').value
    const year = document.querySelector('.year').value

    const dob = new Date('day', 'month', 'year')
    const today = new Date()
    const age = today - dob
    const years = age / 31536000000
    const months = ((years - Math.floor(years)) *12)
    const days = ((months - Math.floor(months))* 30)
    document.querySelector('#year').textContent = Math.floor(years)
    document.querySelector('#month').textContent = Math.floor(months)
    document.querySelector('#day').textContent = Math.floor(days)
    return dob
})


