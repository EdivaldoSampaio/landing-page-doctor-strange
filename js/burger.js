const menu = document.querySelector(".menu-burger-container")

const active = () => menu.classList.toggle('active')

menu.addEventListener('click', active)



// esta função é referente ao active, o javascript faz o menu burger de (=) virar o (X) ao clicar nele, ele está agindo emcima das configurações impostas no CSS do menu burger.