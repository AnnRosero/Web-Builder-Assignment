const nav = document.querySelector(".nav-container");
const searchIcon = document.querySelector('#search-icon1');
const navOpenBtn = document.querySelector(".nav-open-btn");
const navCloseBtn = document.querySelector(".nav-close-btn");

searchIcon.addEventListener('click', () => {
    nav.classList.toggle("open-search");
    nav.classList.remove("open-nav");
    if(nav.classList.contains("open-search")){
        return searchIcon.classList.replace("fa-magnifying-glass", "fa-xmark");
    }
    searchIcon.classList.replace("fa-xmark", "fa-magnifying-glass");
})


navOpenBtn.addEventListener("click", () => {
    nav.classList.add("open-nav");
    nav.classList.remove("open-search");
    searchIcon.classList.replace("fa-xmark", "fa-magnifying-glass");
});
  navCloseBtn.addEventListener("click", () => {
    nav.classList.remove("open-nav");
});

// window.addEventListener('scroll', () => {
//     const isScrolled = window.scrollY > 0;
//     document.querySelector('nav').classList.toggle('window-scroll', isScrolled);
// })
