function applyTheme(theme) {
    if (theme === "dark") {
        document.body.style.backgroundColor = "rgb(199, 116, 48)"; // Mörkare version av originalet
        document.body.style.color = "#fff";
    } else {
        document.body.style.backgroundColor = "rgb(247, 186, 134)";
        document.body.style.color = "#000";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);
});