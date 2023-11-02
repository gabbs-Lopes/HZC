const botaoMenu = document.querySelector('.cabecalho__menu')
const menu = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
})

botaoMenu.addEventListener('blur', () => {
    menu.classList.toggle('menu-lateral--ativo')
})