window.addEventListener("load", function() {
    // Ocultar el loader personalizado
    document.getElementById("loader").style.display = "none";
    
    // Mostrar el contenido con animación
    const content = document.querySelector("header");
    content.classList.remove("hidden");
});