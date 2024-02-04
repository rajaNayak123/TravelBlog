const header = document.querySelector("header");
window.addEventListener("scroll", function () {
    header.classListtoggle("sticky", window.scrollY > 60)
})