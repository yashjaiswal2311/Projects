const wonder = document.querySelectorAll('.wonder');

wonder.forEach(act => {
    act.addEventListener('click', () => {
        removeActiveClasses()
        act.classList.add('active')
    })
})

function removeActiveClasses() {
    wonder.forEach(act => {
        act.classList.remove('active')
    })
}