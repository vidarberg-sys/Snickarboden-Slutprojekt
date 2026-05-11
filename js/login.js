
//Hanterar inloggning, utloggning och visning av användarprofil på login-sidan
document.addEventListener("DOMContentLoaded", function() {
    const user = JSON.parse(localStorage.getItem("user"));
    const container = document.getElementById("login-container");

    //Om användaren är inloggad, visa välkomstmeddelande och profilbild, annars visa inloggningsformulär
    if (user) {
        container.innerHTML = `
            <h2>Välkommen, ${user.name}!</h2>
            <div class="welcome">
                <img src="${user.image}" alt="Profile" style="width: 100px; height: 100px; border-radius: 50%; border: 2px solid #333;">
            </div>
            <a href="Test.html" class="test-page-btn" style="display: block; padding: 12px 24px; background-color: #28a745; color: white; text-decoration: none; border-radius: 4px; margin-bottom: 10px; cursor: pointer; border: 2px solid #1e7e34; font-weight: 600; transition: all 0.3s ease; box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);">Produktöversikt</a>
            <button id="logout-btn">Logga ut</button>
        `;
        
        //Lägger till hover-effekt på knappen som leder till test-sidan och hanterar utloggning
        const testBtn = container.querySelector(".test-page-btn");
        testBtn.addEventListener("mouseover", function() {
            this.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.15)";
            this.style.transform = "translateY(-2px)";
        });
        testBtn.addEventListener("mouseout", function() {
            this.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
            this.style.transform = "translateY(0)";
        });
        
        document.getElementById("logout-btn").addEventListener("click", function() {
            localStorage.removeItem("user");
            location.reload();
        });
    } else {
        container.innerHTML = `
            <h2>Logga in</h2>
            <input type="text" id="name-input" placeholder="Ditt namn" required>
            <input type="email" id="email-input" placeholder="Din e-post" required>
            <input type="file" id="image-input" accept="image/*" required>
            <button id="login-btn">Logga in</button>
        `;
        //Hantera inloggning och spara användaruppgifter i localStorage
        document.getElementById("login-btn").addEventListener("click", function() {
            const name = document.getElementById("name-input").value.trim();
            const email = document.getElementById("email-input").value.trim();
            const file = document.getElementById("image-input").files[0];
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!name) {
                alert("Vänligen ange ditt namn");
                document.getElementById("name-input").focus();
                return;
            }
            
            if (!emailRegex.test(email)) {
                alert("Ange en giltig e-postadress");
                document.getElementById("email-input").focus();
                return;
            }
            
            if (!file) {
                alert("Vänligen välj en profilbild");
                document.getElementById("image-input").focus();
                return;
            }
            
            if (name && email && file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const user = { id: "user-" + Date.now(), name: name, email: email, image: e.target.result };
                    localStorage.setItem("user", JSON.stringify(user));
                    location.reload();
                };
                reader.readAsDataURL(file);
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
