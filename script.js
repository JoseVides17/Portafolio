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

document.addEventListener("DOMContentLoaded", function() {
  const links = document.querySelectorAll("nav li a");

  links.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace

      const targetId = this.getAttribute("href"); // Obtener el atributo href del enlace
      const targetSection = document.querySelector(targetId); // Obtener la sección objetivo

      // Desplazarse suavemente a la sección objetivo
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });
});



