const dropdownButtons = document.querySelectorAll('.dropdown_btn')

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