const butikGroups = [
    {
        title: "Trä",
        linkText: "Visa alla",
        linkHref: "#",
        products: [
            { 
                id: "tra-1",
                namn: "En", 
                skapare: "Joakim", 
                beskrivning: "En bit en till lång smala projekt.", 
                bild: "../bilder/IMG_2972.jpeg" 
            },

            { 
                id: "tra-2",
                namn: "En", 
                skapare: "Joakim", 
                beskrivning: "Mindre bit en aning tjock.", 
                bild: "../bilder/IMG_2973.jpeg"
            },
            { 
                id: "tra-3",
                namn: "En", 
                skapare: "Joakim", 
                beskrivning: "Kort tjock bit.", 
                bild: "../bilder/IMG_2974.jpeg" 
            },
            { 
                id: "tra-4",
                namn: "En", 
                skapare: "Joakim", 
                beskrivning: "Small medium lång bit.", 
                bild: "../bilder/IMG_2975.jpeg" 
            },
            { 
                id: "tra-5",
                namn: "En", 
                skapare: "Joakim", 
                beskrivning: "lång, aning tjock bit med kvist.", 
                bild: "../bilder/IMG_2976.jpeg" 
            },
            { 
                id: "tra-6",
                namn: "En", 
                skapare: "Joakim", 
                beskrivning: "Lång, aning tjock bit.", 
                bild: "../bilder/IMG_2977.jpeg" 
            },
        ]
    },
    {
        title: "Verktyg",
        linkText: "Visa alla",
        linkHref: "#",
        products: [
            { 
                id: "verk-1",
                namn: "Hyvel", 
                skapare: "Joakim", 
                beskrivning: "Fin hyvel för trä. Vast blad.", 
                bild: "../bilder/IMG_2978.jpeg" 
            },
            { 
                id: "verk-2",
                namn: "Skruvdragare", 
                skapare: "Joakim", 
                beskrivning: "Stark och pålitlig.", 
                bild: "../bilder/IMG_2980.jpeg" 
            },
            { 
                id: "verk-3",
                namn: "bitsskruvmejsel", 
                skapare: "Joakim", 
                beskrivning: "Bra verktyg. Kan byta huvud.", 
                bild: "../bilder/IMG_2981.jpeg" 
            },
            { 
                id: "verk-4",
                namn: "Såg", 
                skapare: "Joakim", 
                beskrivning: "Bra verktyg.", 
                bild: "../bilder/Sågkamraten.jpg" 
            },
        ]
    },
    {
        title: "Skapelser",
        linkText: "Visa alla",
        linkHref: "#",
        products: [
            { 
                id: "skap-1",
                namn: "Låda", 
                skapare: "Joakim", 
                beskrivning: "Rolig förvaring.", 
                bild: "../bilder/IMG_2982.jpeg" 
            },
            { 
                id: "skap-2",
                namn: "Laggkärl", 
                skapare: "Du", 
                beskrivning: "Bra för mycket vätska.", 
                bild: "../bilder/IMG_2983.jpeg" 
            },
            { 
                id: "skap-3",
                namn: "Smörknivar", 
                skapare: "Du", 
                beskrivning: "Fina och praktiska.", 
                bild: "../bilder/IMG_2984.jpeg" 
            },
            { 
                id: "skap-4",
                namn: "Björn", 
                skapare: "Du", 
                beskrivning: "Intressant figur.", 
                bild: "../bilder/IMG_2885.jpeg" 
            },
            { 
                id: "skap-5",
                namn: "Röd magik björn", 
                skapare: "Du", 
                beskrivning: "Rolig och gulig.", 
                bild: "../bilder/IMG_2851.jpeg" 
            },
            { 
                id: "skap-6",
                namn: "Lila magik björn", 
                skapare: "Joakim", 
                beskrivning: "Fin prydnad.", 
                bild: "../bilder/IMG_2823.jpeg" 
            },
        ]
    }
];

function addToCart(produkt) {
    let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    cart.push(produkt);
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
    window.location.href = "Arga_snickarn_korg.html";
}

function createButikCard(product) {
    const card = document.createElement("div");
    card.className = "card";
    card.id = product.id;

    card.innerHTML = `
        <div class="image-box">
            <img src="${product.bild}" class="bild">
        </div>
        <div class="text">
            <p><strong>${product.namn}</strong></p>
            <p>Av: ${product.skapare}</p>
            <p>${product.beskrivning}</p>
        </div>
        <button class="cart-btn" data-product-id="${product.id}">🛒</button>
    `;

    const cartBtn = card.querySelector(".cart-btn");
    cartBtn.addEventListener("click", (e) => {
        e.preventDefault();
        addToCart(product);
    });

    return card;
}

function renderButikGroups() {
    const wrapper = document.getElementById("butik-sections");
    if (!wrapper) return;

    butikGroups.forEach(group => {
        const section = document.createElement("div");

        section.innerHTML = `
            <ul class="nat">
                <li class="Pop">${group.title}</li>
                <li class="Pop2"><a href="${group.linkHref}">${group.linkText}</a></li>
            </ul>
            <div class="prdba">
                <div class="card-grid"></div>
            </div>
        `;

        const cardGrid = section.querySelector(".card-grid");
        group.products.forEach(product => {
            cardGrid.appendChild(createButikCard(product));
        });

        wrapper.appendChild(section);
    });
}

window.addEventListener("DOMContentLoaded", renderButikGroups);


const sideNav = document.getElementById("sideNav");
const navItems = document.querySelectorAll(".nav-item");

if (sideNav && navItems.length > 0) {
    sideNav.addEventListener("mouseenter", () => {
        sideNav.classList.add("expanded");
    });

    sideNav.addEventListener("mouseleave", () => {
        sideNav.classList.remove("expanded");
    });

    navItems.forEach(item => {
        item.addEventListener("click", (e) => {
            const label = item.querySelector(".label").textContent;
            console.log("Clicked:", label);
        });
    });
}

