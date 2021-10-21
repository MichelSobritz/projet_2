let modal = null

const openModal = function (e) {
    e.preventDefault()
    var clickedElement = e.target;
    const target = document.querySelector(clickedElement.parentElement.parentElement.getAttribute('href'))
        target.style.display = 'flex'
        target.removeAttribute('aria-hidden')
        modal = target
        modal.addEventListener('click', closeModal)
        modal.querySelector('.js_close').addEventListener('clic', closeModal)
}
const closeModal = function (e) {
    if (modal === 'flex') return
    e.preventDefault()  
    modal.style.display = 'none'
    modal.setAttribute('aria-hidden', 'true')
    modal = target
    modal.removeEventListener('click', closeModal)
    modal.querySelector('.js_close').removeEventListener('clic', closeModal)
    modal = 'none'
}
const stopPropagation = function (e) {
    e.stopPropagation()
}

document.querySelectorAll('.js_modal').forEach(a => {
    a.addEventListener('click', openModal)
    
})
