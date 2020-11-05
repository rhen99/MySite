const navbar = document.querySelector('.navbar');
const links = document.querySelectorAll('.links');
const navigation = document.querySelector('#navigation');
const menu_btn = document.querySelector('#menu_btn');
const modal_btns = document.querySelectorAll('.contact_us');
const close_modal = document.querySelector('.close_modal');
const contact_section = document.querySelector('.contact');
const contact_modal = document.querySelector('.contact__modal')
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
modal_btns.forEach((btn) => {
    btn.addEventListener('click', showModal);
});
close_modal.addEventListener('click', closeModal);
//Load dynamic Year
window.addEventListener('load', () =>{
    document.querySelector('.year').innerHTML = new Date().getFullYear();
})

// window.addEventListener('scroll', (e) =>{
//     let fromTop = window.scrollY;
//     links.forEach(link => {
//         const section = document.querySelector(link.hash);
//         link.classList.remove('active')
//         if(section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight >= fromTop){
//             link.classList.add('active');
//         }else{
//             link.classList.remove('active')
//         }
//     })
// })

function showModal(e) {
    e.preventDefault();
    contact_section.classList.add('show_contact');
    contact_modal.classList.add('opened_modal')
}
function closeModal(e) {
    e.preventDefault();
    contact_section.classList.remove('show_contact');
    contact_modal.classList.remove('opened_modal')
}
