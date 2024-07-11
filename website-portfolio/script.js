const navMenu = document.getElementById('nav-menu');

var navToggle = document.getElementById('nav-toggle');
var navClose = document.getElementById('nav-close');


// Show Menu 
if(navToggle){
    navToggle.addEventListener('click',() =>{
      navMenu.classList.add('show-menu');
    })
}

// Hide Menu 
if(navClose){
    navClose.addEventListener('click',() => {
       navMenu.classList.remove('show-menu'); 
    })
}

// Remove Menu Mobile 
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}

navLink.forEach(n => n.addEventListener('click', linkAction));

// Shadow Header 

const shadowHeader = () =>{
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       : header.classList.remove('shadow-header');
}           
window.addEventListener('scroll', shadowHeader)

// ============EMAIL-JS===================

const contactForm = document.getElementById('contact-form');
var contactMessage = document.getElementById('contact-message');

const sendEmail = (e) =>{
    e.preventDefault();

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_a9umvwd','template_mnr4u98','#contact-form','RVJOlh7bZSHLCrrvC')
    .then(() =>{
        // Show sent message
        contactMessage.textContent = 'Message sent successfully ✅';
         
        // Remove message after five seconds
        setTimeout(() =>{
            contactMessage.textContent = ''
        },5000);

        //Clear input fields
        contactForm.reset();

    })
    .catch((error) => {
        // Show error message
        contactMessage.textContent = 'Message not sent. Please try again ❌';
        console.error('Error:', error);
    });
};

contactForm.addEventListener('submit', sendEmail);

// ===============SHOW SCROLL UP=========================

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        :scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp)

// ==============SCROLL SECTIONS ACTIVE LINK=========================

// const sections = document.querySelectorAll('section[id]');

// const scrollActive = () =>{
//     const scrollDown = window.scrollY;

//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight;
//         const sectionTop = current.offsetTop -50;
//         const sectionId = current.getAttribute('id');
//         const sectionsClass = document.querySelector('.nav__menu a[href*="' + sectionId + '"]');

//               if(scrollDown >= sectionTop && scrollDown < sectionTop + sectionHeight){
//                 sectionsClass.classList.add('active-link')
//               }else{
//                 sectionsClass.classList.remove('active-link')
//               }
//     })
// }
// window.addEventListener('scroll', scrollActive);


const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50; // Adjust offset as needed
        const sectionId = current.getAttribute('id');
        const sectionsClass = document.querySelector('.nav__menu a[href*="' + sectionId + '"]');

        if (sectionsClass) { // Check if sectionsClass is not null
            console.log(`Section ${sectionId}:`);
            console.log(`scrollY: ${scrollY}, sectionTop: ${sectionTop}, sectionHeight: ${sectionHeight}`);

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                sectionsClass.classList.add('active-link');
                console.log(`Added active-link to: ${sectionId}`);
            } else {
                sectionsClass.classList.remove('active-link');
                console.log(`Removed active-link from: ${sectionId}`);
            }
        }
    });
}

window.addEventListener('scroll', scrollActive);

// ===============DARK LIGHT THEME======================
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

//previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('slected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

//we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme)? 'dark' : 'light' ;
const getCurrentIcon = () => themeButton.classList.contains(iconTheme)? 'ri-sun-line' : 'ri-moon-line' ;

// We validate if the user previously chose a topic
if(selectedTheme){
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme);
}

//Activate / Deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    //Add or Remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})

// ===============SCROLL REVEAL ANIMATION=======================
const sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration: 2500,
    delay: 400,
    //reset: true // Animation repeat
})

sr.reveal(`.home__perfil, .about__image, .contact__mail`,{origin: 'right'});
sr.reveal(`.home__name, .home__info, 
    .about__container .section__title-1,.about__description,.about__list, .about__buttons,
    .contact__social, .contact__data`, {origin: 'left'});
sr.reveal(`.services__card, .projects__card`, {interval: 100});