const followers = [
    { name: "Fabian Samuelsson", image: "bilder/IMG_2337.JPG" },
    { name: "Fredrik Wallden ", image: "bilder/IMG_2443.jpeg" },
    { name: "Blackie Ritchmore", image: "bilder/IMG_2463.jpeg" },
    { name: "Carl Coleman", image: "bilder/IMG_2978.jpeg" },
    { name: "Freya Butterworth", image: "bilder/IMG_2506.jpeg" }
];

const uploadedItems = [
    {
        id: "up-1",
        namn: "Laggkärl",
        skapare: "Du",
        beskrivning: "Bra för mycket vätska.",
        bild: "bilder/IMG_2983.jpeg"
    },
    {
        id: "up-2",
        namn: "Smörknivar",
        skapare: "Du",
        beskrivning: "Fina och praktiska.",
        bild: "bilder/IMG_2984.jpeg"
    },
    {
        id: "up-3",
        namn: "Björn",
        skapare: "Du",
        beskrivning: "Intressant figur.",
        bild: "bilder/IMG_2885.jpeg"
    },
    {
        id: "up-4",
        namn: "Röd magik björn",
        skapare: "Du",
        beskrivning: "Rolig och gulig.",
        bild: "bilder/IMG_2851.jpeg"
    }
];

// Load user uploaded products from localStorage
function getAllUploadedItems() {
    const userUploads = JSON.parse(localStorage.getItem("uploadedProducts")) || [];
    return uploadedItems.concat(userUploads);
}

function renderFollowers() {
    const container = document.getElementById("followers-container");
    if (!container) return;

    followers.forEach(follower => {
        const followerItem = document.createElement("div");
        followerItem.className = "follower-circle";
        followerItem.innerHTML = `
            <div class="avatar-box">
                <img src="${follower.image}" class="avatar-img" alt="${follower.name}">
            </div>
            <p>${follower.name}</p>
        `;
        container.appendChild(followerItem);
    });
}

function createUploadCard(item) {
    const card = document.createElement("div");
    card.className = "card";
    card.id = item.id;

    card.innerHTML = `
        <div class="image-box">
            <img src="${item.bild}" class="bild" alt="${item.namn}">
        </div>
        <div class="text">
            <p><strong>${item.namn}</strong></p>
            <p>Av: ${item.skapare}</p>
            <p>${item.beskrivning}</p>
        </div>
    `;

    return card;
}

function renderUploads() {
    const grid = document.getElementById("social-card-grid");
    if (!grid) return;

    const allItems = getAllUploadedItems();
    allItems.forEach(item => {
        grid.appendChild(createUploadCard(item));
    });
}

function initSidebar() {
    const sideNav = document.getElementById("sideNav");
    const navItems = document.querySelectorAll(".nav-item");

    if (!sideNav || navItems.length === 0) return;

    sideNav.addEventListener("mouseenter", () => {
        sideNav.classList.add("expanded");
    });

    sideNav.addEventListener("mouseleave", () => {
        sideNav.classList.remove("expanded");
    });
}

window.addEventListener("DOMContentLoaded", () => {
    renderFollowers();
    renderUploads();
    initSidebar();
});