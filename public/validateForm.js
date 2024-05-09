const spans = document.querySelectorAll('span.error_form_span')

const updateSpans = () => {
    spans.forEach(span => span.textContent = '')
}

const checkInput = (input) => {
    return input.value.trim() !== ''
}

const validate = (form) => {
    let response = false
    //clears textContent of spans.
    updateSpans()
    const inputs = Array.from(form.querySelectorAll('input'))
    console.log(inputs)
    if (!(inputs.filter((input) => input.value.trim() !== ''))) {
        inputs.forEach(input => {
            if (input.value === '') {
                input.parentNode.querySelector('span.error_form_span').textContent = 'Το πεδίο είναι κενό'
            }
        })
        document.querySelector('.form_submittion_message').querySelector('#submittion_message').textContent = 'Μερικά πεδία είναι κενά.'
    }
    else {
        response = true
    }
    return response
}

form.addEventListener('submit', e => {
    e.preventDefault();
    const validation_response = validate(e.target)
    console.log(validation_response)
})