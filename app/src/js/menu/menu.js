let menu = document.querySelectorAll('.menu-hamburger__hamburger');
let list = document.querySelectorAll('.menu-hamburger__hamburger-list')

  menu[0].addEventListener("click", function(i){
    list.classList.add('active')
  });