const on_load_loader = document.querySelector('.onload_loader')

window.addEventListener('load', e => {
    document.body.querySelector("*").style.display = 'none'
    on_load_loader.style.display = 'none'
})

window.addEventListener('DOMContentLoaded', e => {
    document.body.querySelector("*").style.display = 'initial'
    on_load_loader.style.display = 'none'
})