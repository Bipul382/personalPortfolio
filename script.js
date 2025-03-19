'use strict'
const menubar = document.querySelector('.menubar');
const menu = document.querySelector('.menus');
const btn1 = document.querySelector('#btn-1');
const section1 = document.querySelector('.section-1');
const section2 = document.querySelector('.section-2');
const section3 = document.querySelector('.section-3');
const home = document.querySelector('.hm');
const abt = document.querySelector('.abt');
const prt = document.querySelector('.prt');
const cnt = document.querySelector('.cnt');
const initcords = section1.getBoundingClientRect();
const nemu = document.querySelector('.nemu');
const homepage = document.querySelector('.homepage');




//Functions
const goHomePage = function (e) {
    e.preventDefault();
    const homecords = homepage.getBoundingClientRect();
    window.scrollTo({
        left: homecords.left + window.pageXOffset,
        top: homecords.top + window.pageYOffset,
        behavior: 'smooth'
    })

}

const aboutpage = function (e) {
  e.preventDefault();
  const s1cords = section1.getBoundingClientRect();

  //Scroll to
  //   window.scrollTo(s1cords.left + window.pageXOffset, s1cords.top + window.pageYOffset);
  window.scrollTo({
    left: s1cords.left + window.pageXOffset,
    top: s1cords.top + window.pageYOffset,
    behavior: "smooth",
  });
};

const portfoliopage = function (e) {
    e.preventDefault();
    const s2cords = section2.getBoundingClientRect();
    window.scrollTo({
        left: s2cords.left + window.pageXOffset,
        top: s2cords.top + window.pageYOffset,
        behavior: 'smooth',
    })

};
const contactPage = function (e) {
    e.preventDefault();
    const s3cords = section3.getBoundingClientRect();
    window.scrollTo({
        left : s3cords.left + window.pageXOffset,
        top : s3cords.top + window.pageYOffset,
        behavior : 'smooth'
    })
}

//Event Listeners
// menubar.addEventListener('click', function () {
//     menubar.classList.toggle('inc');
//     menu.classList.toggle('hidden');
    
// })
nemu.addEventListener('click', function() {
    menu.classList.toggle('hidden');
    menu.classList.toggle('inc1');
})

btn1.addEventListener('click', aboutpage);
home.addEventListener('click', goHomePage);
abt.addEventListener('click', aboutpage);
prt.addEventListener('click', portfoliopage);
cnt.addEventListener('click', contactPage);
// window.addEventListener('scroll', function () {
//     if(window.scrollY > initcords) nemu.classList.add('sticky');
//         else nemu.classList.remove('sticky');
// })

const allSections = document.querySelectorAll('.section');

const revealSection = function(entries, observer) {

    entries.forEach(entry => {
        if(!entry.isIntersecting) return;
        entry.target.classList.remove('section-hidden');
        observer.unobserve(entry.target);
    })  
}

const sectionObserver = new IntersectionObserver(
    revealSection, {
        root: null,
        threshold: 0.25
    }
);
 allSections.forEach(function(section) {
    sectionObserver.observe(section);
    section.classList.add('section-hidden')
 })