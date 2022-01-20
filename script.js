//navbar active state
const currentLocation = location.href;
const navLinks = document.querySelectorAll('.main-nav-link');
const navLinksLength = navLinks.length;
for (let i = 0; i < navLinksLength; i++) {
    if (navLinks[i].href === currentLocation) {
        navLinks[i].classList.add('active');
    }
}

// Make mobile navigation work

const btnNav = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

btnNav.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});