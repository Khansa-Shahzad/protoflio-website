/*---------------------- NAVBAR ----------------------*/
//let menuIcon = document.querySelector("#menu-icon")
//let navbar = document.querySelector('.navbar')

//menuIcon.addEventListener('click', () => {
   // menuIcon.classList.toggle("ri-close-large-line")
  //  navbar.classList.toggle('active')
//})
//active link
let sections = document.querySelectorAll("section")
let navLinks = document.querySelectorAll("header nav a")

window.onscroll = () => {
    sections.forEach(sec => {
        let top = Window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id     = sec.getAttribute('id');
        
        if(top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelectorAll('header nav a[href'= + id + ']').classList.add("active")
            })
        }

    })

    // sticky navbar
    let header = document.querySelector('header')
    header.classList.toggle('sticky', window.scrollY > 100)
   } 

/*-------------------- SHOW SCROLL UP ----------------------*/
const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up")

    this.scrollY >= 350 ? scrollUp.classList.add("show-scroll") : scrollUp.classList.remove("show-scroll")
}

window.addEventListener('scroll', scrollUp)


/*--------------------- TYPED JS -------------------------*/
//const typedHome = new Typed(".multiple-text", {
   // Strings: ['Frontend Developer', 'Teacher', 'Trainer'],
   // typeSpeed: 100,
   // backSpeed: 100,
   // backDelay: 1000,
   // loop: true

//})