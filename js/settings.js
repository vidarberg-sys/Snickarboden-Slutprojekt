
//Hanterar inställningssidan där användare kan uppdatera sin profil, ändra app-tema,
//  hantera uppladdningar och skicka meddelanden via kontaktformuläret
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

            <label for="user-email">E-post:</label>
            <input type="email" id="user-email" value="${user.email || ''}" required>

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

        <h2>Kontaktformulär</h2>
        <form id="contact-form">
            <label for="contact-email">E-postadress:</label>
            <input type="email" id="contact-email" placeholder="Din e-postadress" required>

            <label for="contact-subject">Ärenderad:</label>
            <input type="text" id="contact-subject" placeholder="Vad handlar det om?" required>

            <label for="contact-message">Meddelande:</label>
            <textarea id="contact-message" placeholder="Skriv ditt meddelande här..." required></textarea>

            <button type="submit">Skicka meddelande</button>
        </form>
    `;

    //Lägger till event listeners för profiluppdatering, temaval, visning av uppladdningar och kontaktformulär
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
    //Lägger till event listener för att visa användarens uppladdningar när knappen klickas
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

    document.getElementById("contact-form").addEventListener("submit", function(e) {
        e.preventDefault();
        const email = document.getElementById("contact-email").value.trim();
        const subject = document.getElementById("contact-subject").value.trim();
        const message = document.getElementById("contact-message").value.trim();


        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Ange en giltig e-postadress");
            document.getElementById("contact-email").focus();
            return;
        }

        if (subject.length < 3) {
            alert("Ärenderad måste vara minst 3 tecken");
            document.getElementById("contact-subject").focus();
            return;
        }

        if (message.length < 10) {
            alert("Meddelandet måste vara minst 10 tecken");
            document.getElementById("contact-message").focus();
            return;
        }

        const contactMessage = {
            id: "contact-" + Date.now(),
            userEmail: email,
            subject: subject,
            message: message,
            date: new Date().toLocaleString("sv-SE"),
            userName: user.name
        };

        let messages = JSON.parse(localStorage.getItem("contactMessages")) || [];
        messages.push(contactMessage);
        localStorage.setItem("contactMessages", JSON.stringify(messages));

        alert("Meddelandet har skickats! Tack för att du kontaktade oss.");
        document.getElementById("contact-form").reset();
    });
});


function deleteUpload(id) {
    let uploads = JSON.parse(localStorage.getItem("uploadedProducts")) || [];
    uploads = uploads.filter(item => item.id !== id);
    localStorage.setItem("uploadedProducts", JSON.stringify(uploads));
    alert("Uppladning borttagen!");
    document.getElementById("view-uploads").click(); 
}

