// Seleciona os elementos do menu
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

// Adiciona o evento de clique ao botão do menu
menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
