let navbar = document.querySelector('.navbar')

document.querySelector("#menu-btn").onclick =()=>{
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
    loginform.classList.remove('active');
}

let loginform = document.querySelector('.login-form')

document.querySelector("#login-btn").onclick =() =>{
    loginform.classList.toggle('active');
    searchform.classList.remove('active');
    navbar.classList.remove('active');

}

let searchform = document.querySelector('.search-form')

document.querySelector("#search-btn").onclick =() =>{
    searchform.classList.toggle('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    searchform.classList.remove('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
}
let themebtn = document.querySelector('#theme-btn');

themebtn.onclick =()=>{
    themebtn.classList.toggle('fa-sun');

    if(themebtn.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }
    else{
        document.body.classList.remove('active');
};
};

var swiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay:{
        delay: 5500,
        disableOnInteraction: false,
    },
        pagination: {
        el: ".swiper-pagination",
        },
  });