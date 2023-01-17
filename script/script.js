console.log("hello");
const menu = document.querySelector('.menu-nav');
const nav = document.querySelector('.nav');
const allLinks = document.querySelectorAll("a");
if(menu){
    menu.addEventListener('click', function (){
        nav.classList.toggle('is-active');
    })
}
allLinks.forEach( function (link){
    if(link.classList.contains("nav-link")){
        link.addEventListener('click', function (){
            nav.classList.toggle('is-active');
        })
    }
    
})
