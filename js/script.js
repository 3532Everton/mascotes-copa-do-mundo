const iniciar = document.getElementById('iniciar')
const iniciarBtn = document.getElementById('iniciar-btn')
const menu = document.getElementById('menu')
const menuHamburguer = document.getElementById('menu-hamburguer')

iniciarBtn.addEventListener('click', () => {
    menuHamburguer.addEventListener('click', () => {
        menu.classList.toggle('ativo')
    })

    iniciarBtn.style.opacity = '0'
    iniciarBtn.style.boxShadow = '0 0 3rem 4rem #8e1337'

    iniciar.style.opacity = '0'
    iniciar.style.background = 'transparent'

    menu.style.transition = '5s'
    setTimeout(() => {
        menu.style.display = 'flex'
        menu.style.opacity = '1'
        setTimeout(() => {
            menu.style.left = '3rem'
            menu.style.transition = '.5s'
        }, 2000)
    }, 100)
})
