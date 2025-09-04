let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menu.onclick = () => {
 navbar.classList.toggle('active');
}
 window.onscroll = () =>{
 navbar.classList.remove('active');
 }




 
const typed = new Typed('.multiple-text', {
      strings: ['Frontend Development','Backend Development','Blockchain Development','UI Design' ],
      typeSpeed: 60,
      backSpeed:60,
      backDelay:1000,
      loop:true,
    });


