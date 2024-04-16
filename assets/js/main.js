
const iconToggleMobileNav = document.getElementById("toggleMobileNav");
const closeMobileNav = document.getElementById("mobile-close")

const toggleNav = ()=>{
    const mobileLeftNav = document.getElementById("mobileLeftNav");
    const myMenu = mobileLeftNav.classList.toggle("none");
    if (myMenu) {
        document.body.style.overflow = "";
    } else {
        document.body.style.overflow = "hidden";
    }
}

iconToggleMobileNav.addEventListener("click", toggleNav);
closeMobileNav.addEventListener("click", toggleNav);



