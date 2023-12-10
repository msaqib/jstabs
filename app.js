const tabs = document.querySelectorAll('.tabs-button')
const line = document.querySelector('.line')
const content = document.querySelectorAll('.content')
const active = document.querySelector('.active')

tabs.forEach( (tab, index) => {
    tab.addEventListener( 'click', (event) => {
        tabs.forEach( (tab) => tab.classList.remove('active'))
        event.target.classList.add('active')
        line.style.left = event.target.offsetLeft + 'px'
        line.style.width = event.target.offsetWidth + 'px'
        content.forEach( (para) => para.classList.remove('visible'))
        content[index].classList.add('visible')
    })
})