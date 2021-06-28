let burger = document.querySelector(".burger");
let navbar = document.querySelector(".navbar");
let navList = document.querySelector(".navList");
let rightNav = document.querySelector(".rightNav");
burger.addEventListener("click", function(){
    rightNav.classList.toggle('visibility');
    navList.classList.toggle('visibility');
    navbar.classList.toggle('h-nav');
});