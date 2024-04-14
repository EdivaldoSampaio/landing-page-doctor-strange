const menu = document.querySelector(".menu-burger-container")

const active = () => menu.classList.toggle('active')

menu.addEventListener('click', active)



// esta função é referente ao active, o javascript faz o menu burger de (=) virar o (X) ao clicar nele, ele está agindo emcima das configurações impostas no CSS do menu burger.

//O addEventListener é o comando que faz com que o javascript escute o "click" e ativa o "active", por vez o active é uma função com o arrow function para o menu.classList.toggle, o mesmo realiza a troca do menu burger (=) para o (X), tirando o active, ao ser clicado pelo usuário no site.