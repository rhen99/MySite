const navbar = document.querySelector('.navbar');
const navigation = document.querySelector('#navigation');
const menu_btn = document.querySelector('#menu_btn');
const scroll = new SmoothScroll('a[href*="#"]',{
    speed: 800,
    speedAsDuration: true
});

window.addEventListener('scroll', () => {
    if(document.documentElement.scrollTop || document.body.scrollTop >= 62){
        navbar.classList.add('sticky')
    }else{
        navbar.classList.remove('sticky')
    }
})

menu_btn.addEventListener('click', () => {
    navigation.classList.toggle('hide');
    menu_btn.classList.toggle('closed')
    navigation.classList.toggle('show');
    menu_btn.classList.toggle('opened')
})
//Load dynamic Year
window.addEventListener('load', () =>{
    document.querySelector('.year').innerHTML = new Date().getFullYear();
})