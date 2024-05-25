const dropdownButtons = document.querySelectorAll('.dropdown_btn')
const dropdownTriggers = document.querySelectorAll('.dropdown_trigger')

dropdownButtons.forEach(btn => {
    btn.addEventListener('click', e => {
        if (e.target.classList.contains('open')) {
            e.target.parentNode.style.height = 'min-content'
            e.target.style.transform = 'rotate(45deg)'
            e.target.classList.remove('open')
        }
        else {
            e.target.parentNode.style.height = '80px'
            e.target.style.transform = 'rotate(0deg)'
            e.target.classList.add('open')
        }
    })
})

dropdownTriggers.forEach(d => {
    
    d.addEventListener('click', e => {
        console.log('hh')
        if (e.target.classList.contains('service')) {

            if (e.target.classList.contains('close')) {
                e.target.style.height = 'min-content';
                e.target.classList.remove('close')
            }
            else {
                e.target.style.height = '80px';
                e.target.classList.add('close')
            }
        }  
    })
})