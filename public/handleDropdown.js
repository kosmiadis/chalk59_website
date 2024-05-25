const dropdownImgs = document.querySelectorAll('.dropdown_btn')
const dropdownBtns = document.querySelectorAll('.dropdown')
const dropdownTexts = document.querySelectorAll('.service_text')

dropdownImgs.forEach(btn => {
    btn.addEventListener('click', e => {
        if (e.target.classList.contains('open')) {
            e.target.parentNode.children[2].style.height = 'min-content'
            e.target.style.transform = 'rotate(45deg)'
            e.target.classList.remove('open')
        }
        else {
            e.target.parentNode.querySelector('div.text').style.height = '0px'
            e.target.style.transform = 'rotate(0deg)'
            e.target.classList.add('open')
        }
    })
})

dropdownBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        const text = e.target.parentNode.parentNode.querySelector('div.service_text'); // Adjust selector to fit your structure
        if (text.style.height === '170px'|| text.style.height === '200px') {
            text.style.height = ''; // or '0px' if you want to explicitly set it to zero
        } else {
            closeDropdowns(); // Close other dropdowns before opening the clicked one
            text.style.height = '170px';
            if (window.innerWidth < 769) {
                text.style.height = '200px';
            }
        }
    });
});

function closeDropdown (dropdown) {
    dropdown.style.height = '0'
}

function closeDropdowns () {
    dropdownTexts.forEach(txt => txt.style.height = '0')
}