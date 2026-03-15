let header = document.querySelector(`#header-bar`);
let navbar = document.querySelector(`.navbar`);

header.onclick = function(){
    header.classList.toggle(`fa-times`);
    navbar.classList.toggle(`active`);
}

window.onscroll = function(){
    if(window.scrollY>60){
        document.querySelector(`#scroll-up`).classList.add(`active`);
    }
    else{
        document.querySelector(`#scroll-up`).classList.remove(`active`);
    }
}