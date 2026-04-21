document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const sideNav = document.getElementById('sideNav');

    if (hamburger && sideNav) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            sideNav.classList.toggle('active');
        });
    }
});
