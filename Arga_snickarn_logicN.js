const produkterPop = [
    {
        namn: "Björn",
        skapare: "Joakim Lundell",
        beskrivning: "Tog mig 7 minuter att göra denna björn.",
        bild: "bilder/157DFFCC-0981-45F4-9D5C-F4063C637C26.jpg",
    },
    {
        namn: "Björn",
        skapare: "Joakim Babybel",
        beskrivning: "Tog mig 7 minuter att göra denna björn.",
        bild: "bilder/157DFFCC-0981-45F4-9D5C-F4063C637C26.jpg"
    },
    {
        namn: "Björn",
        skapare: "Joakim Luleå Bortaställ",
        beskrivning: "Tog mig 7 minuter att göra denna björn.men you know me bro. lisksom jag är crazy like that bro. crazy i was crazy once. gggg",
        bild: "bilder/157DFFCC-0981-45F4-9D5C-F4063C637C26.jpg"
    },
    {
        namn: "Björn",
        skapare: "Joakim Hemmakväll",
        beskrivning: "Tog mig 7 minuter att göra denna björn.",
        bild: "bilder/157DFFCC-0981-45F4-9D5C-F4063C637C26.jpg"
    },
    {
        namn: "Björn",
        skapare: "Joakim Bersanell",
        beskrivning: "En till björn.",
        bild: "bilder/157DFFCC-0981-45F4-9D5C-F4063C637C26.jpg"
    }
];


const produkterNya = produkterPop.slice(-6);

function renderCards(produkter, containerId) {
    const container = document.getElementById(containerId);

    if (!container) return;

    produkter.forEach(produkt => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <div class="image-box">
                <img src="${produkt.bild}" class="bild">
            </div>

            <div class="text">
                <p><strong>${produkt.namn}</strong></p>
                <p>Gjord av: ${produkt.skapare}</p>
                <p>${produkt.beskrivning}</p>
            </div>

            <a href="Arga_snickarn_korg.html" class="cart-btn">🛒</a>
        `;

        container.appendChild(card);
    });
}

// Rendera
renderCards(produkterPop, "card-container-pop");
renderCards(produkterNya, "card-container-nya");