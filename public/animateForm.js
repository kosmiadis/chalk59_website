const inputs = form.querySelectorAll('input')
const labels = form.querySelectorAll('label')

inputs.forEach(input => input.addEventListener('focus', e => {
    labels.forEach(label => {
        if (label.parentNode.querySelector('input').value === '') {
            label.style.top = '6px'
        }
        else {
            label.style.top = '-18px'
        }
    })
    e.target.parentNode.querySelector('label').style.top = '-18px'
}))