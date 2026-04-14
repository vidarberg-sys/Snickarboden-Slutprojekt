const butikGroups = [
    {
        title: "Nyheter",
        linkText: "Visa alla",
        linkHref: "#",
        products: [
            { namn: "Träskål", skapare: "Joakim", beskrivning: "En fin skål för köket.", bild: "bilder/IMG_2337.JPG" },
            { namn: "Mini Oxe", skapare: "Joakim", beskrivning: "Stark inredningsdetalj.", bild: "bilder/IMG_2443.jpeg" },
            { namn: "Fåtölj", skapare: "Joakim", beskrivning: "En bekväm liten stol.", bild: "bilder/IMG_2463.jpeg" },
            { namn: "Krok", skapare: "Joakim", beskrivning: "Perfekt för hallen.", bild: "bilder/IMG_2480.jpeg" },
            { namn: "Ljusstake", skapare: "Joakim", beskrivning: "Mysfaktor för hemmet.", bild: "bilder/IMG_2506.jpeg" },
            { namn: "Bricka", skapare: "Joakim", beskrivning: "Praktisk och snygg.", bild: "bilder/IMG_2754.jpeg" },
            { namn: "Träfigur", skapare: "Joakim", beskrivning: "Liten detalj för hyllan.", bild: "bilder/IMG_2758.jpeg" },
            { namn: "Björn", skapare: "Joakim", beskrivning: "En liten träbjörn.", bild: "bilder/157DFFCC-0981-45F4-9D5C-F4063C637C26.jpg" }
        ]
    },
    {
        title: "Kampanj",
        linkText: "Visa alla",
        linkHref: "#",
        products: [
            { namn: "Skedset", skapare: "Joakim", beskrivning: "Perfekt till köket.", bild: "bilder/IMG_2337.JPG" },
            { namn: "Fågelhus", skapare: "Joakim", beskrivning: "Vacker utomhusdetalj.", bild: "bilder/IMG_2443.jpeg" },
            { namn: "Bokstöd", skapare: "Joakim", beskrivning: "Stilig bokhållare.", bild: "bilder/IMG_2463.jpeg" },
            { namn: "Pennhållare", skapare: "Joakim", beskrivning: "Ordning på skrivbordet.", bild: "bilder/IMG_2480.jpeg" },
            { namn: "Fotoram", skapare: "Joakim", beskrivning: "Visa dina bästa minnen.", bild: "bilder/IMG_2506.jpeg" },
            { namn: "Nyckelring", skapare: "Joakim", beskrivning: "Liten och praktisk.", bild: "bilder/IMG_2754.jpeg" },
            { namn: "Vas", skapare: "Joakim", beskrivning: "Passar blommor fint.", bild: "bilder/IMG_2758.jpeg" },
            { namn: "Askkopp", skapare: "Joakim", beskrivning: "Elegant liten ask.", bild: "bilder/157DFFCC-0981-45F4-9D5C-F4063C637C26.jpg" }
        ]
    },
    {
        title: "Toppval",
        linkText: "Visa alla",
        linkHref: "#",
        products: [
            { namn: "Stol", skapare: "Joakim", beskrivning: "Små sittplatser i trä.", bild: "bilder/IMG_2337.JPG" },
            { namn: "Skål", skapare: "Joakim", beskrivning: "Perfekt för frukost.", bild: "bilder/IMG_2443.jpeg" },
            { namn: "Ljuslykta", skapare: "Joakim", beskrivning: "Skapar mysig stämning.", bild: "bilder/IMG_2463.jpeg" },
            { namn: "Skohorn", skapare: "Joakim", beskrivning: "Praktiskt och snyggt.", bild: "bilder/IMG_2480.jpeg" },
            { namn: "Serveringsfat", skapare: "Joakim", beskrivning: "Bra för gäster.", bild: "bilder/IMG_2506.jpeg" },
            { namn: "Mobilladdare", skapare: "Joakim", beskrivning: "Trädesign till teknik.", bild: "bilder/IMG_2754.jpeg" },
            { namn: "Bricka", skapare: "Joakim", beskrivning: "Perfekt för fika.", bild: "bilder/IMG_2758.jpeg" },
            { namn: "Bokstöd", skapare: "Joakim", beskrivning: "Håller böcker stadigt.", bild: "bilder/157DFFCC-0981-45F4-9D5C-F4063C637C26.jpg" }
        ]
    }
];

function createButikCard(product) {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <div class="image-box">
            <img src="${product.bild}" class="bild">
        </div>
        <div class="text">
            <p><strong>${product.namn}</strong></p>
            <p>Av: ${product.skapare}</p>
            <p>${product.beskrivning}</p>
        </div>
    `;

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
