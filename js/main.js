/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close')


// SHOW
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show')
})

// HIDDEN
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show')
})

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageXOffset

    sections.forEach(current =>{
        const sectionHeight = current.pageXOffsetHeight
        const sectionTop = current.pageXOffsetTop - 50
        sectionId =current.getAttribute('id')

        if(scrollY > screenTop && scrollY <= sectionTop +sectionHeight){
            document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.add('active')
        }else{
            document.querySelector('.nav_menu a[href*='+ sectionId +']').classList.remove('active')
        }
    })
}

// ========== SCROLL REVEAL ==========

const sr = ScrollReveal({
    origin: 'top',
    distance: '35px',
    duration: 2000,
    reset: true
});

sr.reveal(`.home_data, .home_img, .section-subtitle,
            .section-title,
            .about_data, .about_img, .about_information, .skills_content, .education_contant,
            .services_content, .project_data,
            .works_img, .contact_form,
            .contact_info, .contact_button,
            .footer_title, .footer_description, .footer_social, .footer_copy `, {
    interval: 150
});

