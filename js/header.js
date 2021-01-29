
window.addEventListener('scroll',()=>{
    const header = document.getElementById('header');

    const altura = window.scrollY >100;
    header.classList.toggle('scrolled',altura);

    // if(window.scrollY > 50){
    //     header.classList.add('scrolled');
    // }else{
    //     header.classList.remove('scrolled');
    // }

});