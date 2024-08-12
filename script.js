function toggleSidebar() {
    var sidebar = document.getElementById("div_menu");
    if (sidebar.style.width === "250px") {
        sidebar.style.width = "0";
    } else {
        sidebar.style.width = "250px";
    }
}

function toggleAccessibility() {
    var popup = document.getElementById("accessibilityPopup");
    if (popup.style.display === "block") {
        popup.style.display = "none";
    } else {
        popup.style.display = "block";
    }
}

// Fecha o pop-up de acessibilidade ao clicar fora dele
window.onclick = function(event) {
    var popup = document.getElementById("accessibilityPopup");
    if (event.target != popup && !popup.contains(event.target) && event.target.className != "accessibility-btn" && event.target.className != "close-btn") {
        popup.style.display = "none";
    }
}



