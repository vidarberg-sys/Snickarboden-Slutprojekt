function applyTheme(theme) {
    if (theme === "dark") {
        document.body.style.backgroundColor = "rgb(199, 116, 48)"; 
    } else {
        document.body.style.backgroundColor = "rgb(247, 186, 134)";
        document.body.style.color = "#000";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);
});
//hanterar theme där den säger vilken färg backrunden får om den är på mörkt eller ljust läge.