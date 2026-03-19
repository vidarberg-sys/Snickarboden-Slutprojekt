
const produkter = [
    {
        namn: "Björn",
        skapare: "Joakim Lundell",
        beskrivning: "Tog mig 7 minuter att göra denna björn.",
        bild: "157DFFCC-0981-45F4-9D5C-F4063C637C26.jpg",
    },
    {
        namn: "Björn",
        skapare: "Joakim Babybel",
        beskrivning: "Tog mig 7 minuter att göra denna björn.",
        bild: "157DFFCC-0981-45F4-9D5C-F4063C637C26.jpg"
    },
    {
        namn: "Björn",
        skapare: "Joakim Luleå Bortaställ",
        beskrivning: "Tog mig 7 minuter att göra denna björn.",
        bild: "157DFFCC-0981-45F4-9D5C-F4063C637C26.jpg"
    },
    {
        namn: "Björn",
        skapare: "Joakim Hemmakväll",
        beskrivning: "Tog mig 7 minuter att göra denna björn.",
        bild: "157DFFCC-0981-45F4-9D5C-F4063C637C26.jpg"
    },
    {
        namn: "Björn",
        skapare: "Joakim Med Mjäll",
        beskrivning: "Tog mig 7 minuter att göra denna björn.",
        bild: "157DFFCC-0981-45F4-9D5C-F4063C637C26.jpg"
    },
    {
        namn: "Björn",
        skapare: "Joakim Bechamel",
        beskrivning: "Tog mig 7 minuter att göra denna björn.",
        bild: "157DFFCC-0981-45F4-9D5C-F4063C637C26.jpg"
    },

];

const container = document.getElementById("card-container");

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

        <div class="bottom">
            <span>Order:</span>
            <div class="icon">
                <a href="Arga_snickarn_korg.html">🛒</a>
            </div>
        </div>
    `;

    container.appendChild(card);
});

window.addEventListener("scroll", function() {
    document.body.classList.add("scrolling");
});
