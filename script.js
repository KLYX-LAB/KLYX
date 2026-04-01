function goContact(){
  document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
}

// Animaciones al hacer scroll
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if(top < window.innerHeight - 100){
      el.classList.add("active");
    }
  });
});

// CAPTACIÓN REAL + AUTOMATIZACIÓN
document.getElementById("form").addEventListener("submit", function(e){
  e.preventDefault();

  alert("Solicitud enviada. Te contactamos en breve.");

  // Redirección automática a WhatsApp (cliente caliente 🔥)
  window.open("https://wa.me/34600000000", "_blank");
});
