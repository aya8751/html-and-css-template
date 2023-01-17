console.log("hello");
const menu = document.querySelector('.menu-nav');
const nav = document.querySelector('.nav');
const allLinks = document.querySelectorAll("a:link");
const header = document.querySelector(".header");
const navContainer = document.querySelector(".nav-container");
const goTopButton = document.querySelector(".go-to-up");
const navAbserver = new IntersectionObserver(function(watchEntry, navObserver){
    console.log(watchEntry[0].isIntersecting);
    if(!watchEntry[0].isIntersecting){
        navContainer.classList.add('nav-scroll');
        // goTopButton.classList.add('nav-scroll');
    } else {
        navContainer.classList.remove('nav-scroll');
        // goTopButton.classList.remove('nav-scroll');
    } 
},{
    rootMargin:'-50px',
    threshold:0
});
navAbserver.observe(header);


menu.addEventListener('click', function (){
    nav.classList.toggle('is-active');
})

allLinks.forEach( function (link){
    if(link.classList.contains("nav-link")){
        link.addEventListener('click', function (){
            nav.classList.remove('is-active');
        })
    }
})

