

const iconoMenu = document.getElementById('icono-menu');
const menu = document.getElementById('menu');


iconoMenu.addEventListener('click',(e)=>{

    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');
});


