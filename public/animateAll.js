function fadeIn (el) {
    el.style.opacity = '1'
    el.style.transform = 'scale(1)'
}

function isVisible (ele) {
    const { top, bottom } = ele.getBoundingClientRect();
    const vHeight = (window.innerHeight || document.documentElement.clientHeight);
  
    return (
      (top > 0 || bottom > 0) &&
      top < vHeight
    );
  }

window.addEventListener('scroll', e => {
    console.log('hh')
    const fadeInElements = document.querySelectorAll('.fadeIn')
    fadeInElements.forEach(el => {
        if (isVisible(el)) {
            console.log('es')
            fadeIn(el)
        }
    })
})
