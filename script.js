'use strict'; // 문법을 엄격하게 확인 

// 스크롤에 따른 메뉴바 색상처리
const navbar = document.querySelector('#navbar');
const navBarHeight = navbar.getBoundingClientRect().height;
console.log(navBarHeight);
document.addEventListener('scroll', () => {
    // console.log('event strat!')
    // console.log(window.scrollY);
    if(window.scrollY > navBarHeight){
        navbar.classList.add('navbar--bold');
    }else{
        navbar.classList.remove('navbar--bold');
    }
});




// 스크롤에 따른 메뉴바 고정
const navbarMenue = document.querySelector('.navbar__menue');
navbarMenue.addEventListener('click',(e) =>{
    // console.log(e);
    const target = e.target;
    const link = target.dataset.link;
    if(link==null){
        return;
    }
    // console.log(link);
    scrollIntoView(link);
})

const homeContainer = document.querySelector('.home__container');
homeContainer.addEventListener('click',() =>{
    scrollIntoView('#contact');
})

const home = document.querySelector('.home__container')
const homeHeight = home.getBoundingClientRect().height;

const arrowUp = document.querySelector('.arrow-up');
    arrowUp.addEventListener('scroll',() =>{
        if(window.scrollY > homeHeight /2){
            arrowUp.classList.add('visible');
        }else{
            arrowUp.classList.remove('visible')
        }
        home.style.opacity = 1-window.scrollY /homeHeight;
    });

    arrowUp.addEventListener('click',()=>{
        scrollIntoView('#home')
    });


function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth'});
}









