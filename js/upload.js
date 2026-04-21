document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("upload-form");
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
        alert("Du måste logga in för att ladda upp produkter!");
        window.location.href = "login.html";
        return;
    }

    if (!user.id) {
        alert("Ditt konto behöver uppdateras. Logga ut och in igen.");
        return;
    }

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("product-name").value;
        const description = document.getElementById("product-description").value;
        const file = document.getElementById("product-image").files[0];

        if (name && description && file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const product = {
                    id: "user-" + Date.now(),
                    namn: name,
                    skapare: user.name,
                    userId: user.id,
                    beskrivning: description,
                    bild: e.target.result
                };

                let uploadedProducts = JSON.parse(localStorage.getItem("uploadedProducts")) || [];
                uploadedProducts.push(product);
                localStorage.setItem("uploadedProducts", JSON.stringify(uploadedProducts));
                console.log("Saved product:", product);
                console.log("All uploaded products:", uploadedProducts);

                alert("Produkt uppladdad!");
                form.reset();
                window.location.href = "Arga_Snickarn_social.html";
            };
            reader.readAsDataURL(file);
        } else {
            alert("Fyll i alla fält!");
        }
    });
});
