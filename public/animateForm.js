const inputs = form.querySelectorAll('input')
const labels = form.querySelectorAll('label')

//label changes position when the input if focused.
inputs.forEach(input => input.addEventListener('focus', e => {
    const curr_label = e.target.parentNode.querySelector('label')
    if (e.target.value === '') {
        curr_label.style.top = '6px'
    }
    else {
        curr_label.style.top = '-18px'
    }
    e.target.parentNode.querySelector('label').style.top = '-18px'
}))

//label goes to starting point if the input is not focused.
inputs.forEach(input => input.addEventListener('blur', e => {
    const curr_label = e.target.parentNode.querySelector('label')
    if (e.target.value === '') {
        curr_label.style.top = '6px'
    }
}))