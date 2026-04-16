document.addEventListener("DOMContentLoaded", function() {
    const user = JSON.parse(localStorage.getItem("user"));
    const container = document.getElementById("settings-content");

    if (!user) {
        container.innerHTML = "<p>Du måste logga in för att ändra inställningar.</p><a href='login.html'>Logga in</a>";
        return;
    }

    container.innerHTML = `
        <h2>Din profil</h2>
        <form id="profile-form">
            <label for="user-name">Namn:</label>
            <input type="text" id="user-name" value="${user.name}" required>

            <label for="user-image">Ny bild:</label>
            <input type="file" id="user-image" accept="image/*">

            <button type="submit">Uppdatera profil</button>
        </form>

        <h2>App-inställningar</h2>
        <label for="theme-select">Tema:</label>
        <select id="theme-select">
            <option value="light">Ljust</option>
            <option value="dark">Mörkt</option>
        </select>
        <button id="save-theme">Spara tema</button>

        <h2>Hantera uppladdningar</h2>
        <button id="view-uploads">Visa mina uppladdningar</button>
        <div id="uploads-list"></div>
    `;


    document.getElementById("profile-form").addEventListener("submit", function(e) {
        e.preventDefault();
        const newName = document.getElementById("user-name").value;
        const newFile = document.getElementById("user-image").files[0];

        if (newFile) {
            const reader = new FileReader();
            reader.onload = function(e) {
                user.name = newName;
                user.image = e.target.result;
                localStorage.setItem("user", JSON.stringify(user));
                alert("Profil uppdaterad!");
                updateProfileIcon();
            };
            reader.readAsDataURL(newFile);
        } else {
            user.name = newName;
            localStorage.setItem("user", JSON.stringify(user));
            alert("Profil uppdaterad!");
            updateProfileIcon();
        }
    });

    const savedTheme = localStorage.getItem("theme") || "light";
    document.getElementById("theme-select").value = savedTheme;

    document.getElementById("save-theme").addEventListener("click", function() {
        const theme = document.getElementById("theme-select").value;
        localStorage.setItem("theme", theme);
        applyTheme(theme);
        alert("Tema sparat!");
    });

    applyTheme(savedTheme);

    document.getElementById("view-uploads").addEventListener("click", function() {
        const uploads = JSON.parse(localStorage.getItem("uploadedProducts")) || [];
        const list = document.getElementById("uploads-list");
        list.innerHTML = uploads.map(item => `
            <div class="upload-item">
                <img src="${item.bild}" alt="${item.namn}" style="width: 50px; height: 50px;">
                <p>${item.namn}</p>
                <button onclick="deleteUpload('${item.id}')">Ta bort</button>
            </div>
        `).join("");
    });
});


function deleteUpload(id) {
    let uploads = JSON.parse(localStorage.getItem("uploadedProducts")) || [];
    uploads = uploads.filter(item => item.id !== id);
    localStorage.setItem("uploadedProducts", JSON.stringify(uploads));
    alert("Uppladning borttagen!");
    document.getElementById("view-uploads").click(); // Refresh list
}