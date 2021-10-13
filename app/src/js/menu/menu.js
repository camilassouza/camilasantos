let menu = document.querySelectorAll('.menu-hamburger__hamburger');
let list = document.querySelectorAll('.menu-hamburger__hamburger-list')

  menu[0].addEventListener("click", function(i){
    menu[0].classList.add('active')
    list[0].classList.add('active')
  });