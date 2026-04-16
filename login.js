document.addEventListener("DOMContentLoaded", function() {
    const user = JSON.parse(localStorage.getItem("user"));
    const container = document.getElementById("login-container");

    if (user) {
        container.innerHTML = `
            <h2>Välkommen, ${user.name}!</h2>
            <div class="welcome">
                <img src="${user.image}" alt="Profile" style="width: 100px; height: 100px; border-radius: 50%; border: 2px solid #333;">
            </div>
            <button id="logout-btn">Logga ut</button>
        `;
        document.getElementById("logout-btn").addEventListener("click", function() {
            localStorage.removeItem("user");
            location.reload();
        });
    } else {
        container.innerHTML = `
            <h2>Logga in</h2>
            <input type="text" id="name-input" placeholder="Ditt namn" required>
            <input type="file" id="image-input" accept="image/*" required>
            <button id="login-btn">Logga in</button>
        `;
        document.getElementById("login-btn").addEventListener("click", function() {
            const name = document.getElementById("name-input").value;
            const file = document.getElementById("image-input").files[0];
            if (name && file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const user = { name: name, image: e.target.result };
                    localStorage.setItem("user", JSON.stringify(user));
                    location.reload();
                };
                reader.readAsDataURL(file);
            } else {
                alert("Fyll i namn och välj en bild!");
            }
        });
    }

    updateProfileIcon();
});

function updateProfileIcon() {
    const user = JSON.parse(localStorage.getItem("user"));
    const profileIcon = document.querySelector(".profile-icon");
    if (user) {
        profileIcon.innerHTML = `<img src="${user.image}" alt="Profile" style="width: 40px; height: 40px; border-radius: 50%;">`;
    } else {
        profileIcon.innerHTML = "👤";
    }
}