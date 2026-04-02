const produkterPop = [
    {
        id: "prod-1",
        namn: "Björn",
        skapare: "Joakim Lundell",
        beskrivning: "Tog mig 7 minuter att göra denna björn.",
        bild: "bilder/157DFFCC-0981-45F4-9D5C-F4063C637C26.jpg",
    },
    {
        id: "prod-2",
        namn: "Björn",
        skapare: "Joakim Babybel",
        beskrivning: "Tog mig 7 minuter att göra denna björn.",
        bild: "bilder/IMG_2337.JPG"
    },
    {
        id: "prod-3",
        namn: "Katt",
        skapare: "Joakim Luleå Bortaställ",
        beskrivning: "Tog mig 7 minuter att göra denna björn.men you know me bro. lisksom jag är crazy like that bro. crazy i was crazy once. gggg",
        bild: "bilder/IMG_2443.jpeg"
    },
    {
        id: "prod-4",
        namn: "A STARGAZER",
        skapare: "Joakim Hemmakväll",
        beskrivning: "I SEE A RAINBOW RISING.",
        bild: "bilder/IMG_2463.jpeg"
    },
    {
        id: "prod-5",
        namn: "Kannin",
        skapare: "Joakim Bersamell",
        beskrivning: "En till björn.",
        bild: "bilder/IMG_2480.jpeg"
    },
    {
        id: "prod-6",
        namn: "Tvärbjörn",
        skapare: "Joakim Internationel",
        beskrivning: "Tog mig 7 minuter att göra denna björn.men you know me bro. lisksom jag är crazy like that bro. crazy i was crazy once. gggg",
        bild: "bilder/IMG_2506.jpeg"
    },
    {
        id: "prod-7",
        namn: "Hund",
        skapare: "Joakim Katskräll",
        beskrivning: "Tog mig 7 minuter att göra denna björn.",
        bild: "bilder/IMG_2754.jpeg"
    },
    {
        id: "prod-8",
        namn: "Nyckelpiga",
        skapare: "Joakim Scandic Hotel",
        beskrivning: "En till björn.",
        bild: "bilder/IMG_2758.jpeg"
    }
];


const produkterNya = produkterPop.slice(-8);

function renderCards(produkter, containerId) {
    const container = document.getElementById(containerId);

    if (!container) return;

    produkter.forEach(produkt => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.id = produkt.id;

        card.innerHTML = `
            <div class="image-box">
                <img src="${produkt.bild}" class="bild">
            </div>

            <div class="text">
                <p><strong>${produkt.namn}</strong></p>
                <p>Gjord av: ${produkt.skapare}</p>
                <p>${produkt.beskrivning}</p>
            </div>

            <button class="cart-btn" data-product-id="${produkt.id}">🛒</button>
        `;

        container.appendChild(card);

        // Lägg till klick-listener på korg-knappen
        const cartBtn = card.querySelector(".cart-btn");
        cartBtn.addEventListener("click", (e) => {
            e.preventDefault();
            addToCart(produkt);
        });
    });
}

// Korg-funktion
function addToCart(produkt) {
    let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    cart.push(produkt);
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
    window.location.href = "Arga_snickarn_korg.html";
}

renderCards(produkterPop, "card-container-pop");
renderCards(produkterNya, "card-container-nya");