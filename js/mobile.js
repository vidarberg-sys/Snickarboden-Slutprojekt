document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const sideNav = document.getElementById("sideNav");
    const navItems = document.querySelectorAll(".nav-item");

    if (!sideNav) return;


    if (hamburger) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            sideNav.classList.toggle("mobile-hidden");
        });
    }


    sideNav.addEventListener("mouseenter", () => {
        sideNav.classList.add("expanded");
    });

    sideNav.addEventListener("mouseleave", () => {
        sideNav.classList.remove("expanded");
    });


    navItems.forEach(item => {
        item.addEventListener("click", () => {
            const label = item.querySelector(".label")?.textContent;
            if (label) {
                console.log("Clicked:", label);
            }
        });
    });
});