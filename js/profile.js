//Hanterar visning av användarprofil i sidhuvudet baserat på inloggningsstatus
function updateProfileIcon() {
    const user = JSON.parse(localStorage.getItem("user"));
    const profileIcon = document.querySelector(".profile-icon");
    if (profileIcon) {
        if (user) {
            profileIcon.innerHTML = `<img src="${user.image}" alt="Profile" style="width: 40px; height: 40px; border-radius: 50%;">`;
        } else {
            profileIcon.innerHTML = "👤";
        }
    }
}

document.addEventListener("DOMContentLoaded", updateProfileIcon);
