// navigation bar effects on scroll
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 0);
});

// responsive navigation sidebar menu
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

navigationItems.forEach((navigationItem) => {
    navigationItem.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        navigation.classList.remove("active");
    })
});

// javaScript for scroll to top button
const scrollBtn = document.querySelector(".scrollToTop-btn")

window.addEventListener("scroll", function(){
    scrollBtn.classList.toggle("active", window.scrollY > 500)
});

// scroll to top on click scroll-to-top button
scrollBtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// reveal website elements on scroll
window.addEventListener("scroll", reveal);

function reveal() {
    let reveals = document.querySelectorAll(".reveal")

    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 50;

        if(revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
        }
    }
}
