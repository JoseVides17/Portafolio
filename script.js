// Mostrar u ocultar el enlace al principio según la posición del usuario en la página
window.addEventListener("scroll", function() {
  var backToTopButton = document.getElementById("back-to-top");
  if (window.scrollY > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Hacer que el enlace al principio funcione correctamente
document.getElementById("back-to-top").addEventListener("click", function(event) {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
  window.scrollTo({top: 0, behavior: "smooth"}); // Desplazar suavemente al principio de la página
});
