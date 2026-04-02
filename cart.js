// Korg-display funktion
function displayCart() {
    const cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    const cartContainer = document.getElementById("cart-container");

    if (!cartContainer) return;

    if (cart.length === 0) {
        cartContainer.innerHTML = '<div class="empty-message">Din korg är tom</div>';
        return;
    }

    cartContainer.innerHTML = "";
    cart.forEach((produkt, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.id = `cart-item-${produkt.id}-${index}`;

        card.innerHTML = `
            <div class="image-box">
                <img src="${produkt.bild}" class="bild" alt="${produkt.namn}">
            </div>

            <div class="text">
                <p><strong>${produkt.namn}</strong></p>
                <p>Gjord av: ${produkt.skapare}</p>
                <p>${produkt.beskrivning}</p>
            </div>

            <button class="remove-btn" onclick="removeFromCart(${index})">✕</button>
        `;

        cartContainer.appendChild(card);
    });
}

// Ta bort produkt från korg
function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
    cart.splice(index, 1);
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
    displayCart();
}

// Visa korgen när sidan laddar
document.addEventListener("DOMContentLoaded", displayCart);
