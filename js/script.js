document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("nameInput");
  const button = document.getElementById("checkButton");
  const result = document.getElementById("result");

  // Creamos el contenedor de imagen dinámica
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("dynamic-image");
  document.body.appendChild(imageContainer);




  const img = document.createElement("img");
  img.style.display = "none";
  img.style.maxWidth = "250px";
  img.style.borderRadius = "15px";
  img.style.boxShadow = "0 0 20px rgba(0,0,0,0.5)";
  img.style.transition = "opacity 1s ease";
  
  imageContainer.appendChild(img);

  // Centramos la imagen debajo del contenedor principal
imageContainer.style.position = "fixed";
imageContainer.style.top = "20px"; // Puedes ajustar este valor si quieres más o menos separación del borde superior
imageContainer.style.left = "50%";
imageContainer.style.transform = "translateX(-50%)";
imageContainer.style.zIndex = "999"; // Asegura que esté encima de todo



  button.addEventListener("click", () => {
  const nombre = input.value.trim().toLowerCase();

  if (!nombre) {
    result.textContent = "Por favor, escribe un nombre.";
    result.style.color = "#ccc";
    hideImage(); // ✅ Solo ocultamos si no hay nombre
    return;
  }

  if (nombre === "randy" || nombre === "michel" || nombre ==="xavier"|| nombre ==="ruben" || nombre ==="ruben") {
    // 🌈 Modo bandera
    document.body.classList.remove("macho");
    document.body.classList.remove("macho", "zorro");
    document.body.classList.add("flag-active");
    result.textContent = "🌈 Lo suponía...";
    result.style.color = "#ffffff";
    showImage("img/Caca.webp");
    animateText(result);
  } else if (nombre === "camila") {
result.textContent = "🦊 Zorra Mayor";
result.style.color = "#ff4d6d"; // Puedes usar el mismo color que los otros o dejarlo blanco
document.body.classList.remove("flag-active", "macho");
document.body.classList.add("zorro");
showImage("img/zorra.jpg");
animateText(result);
  } else {
    // 💪 Modo macho alfa
    document.body.classList.remove("flag-active");
    document.body.classList.add("macho");
    result.textContent = "💪 Eres un macho lomo plateado";
    document.body.classList.remove("flag-active", "zorro");
    result.style.color = "#00ffff";
    showImage("img/varonil.jpg");
    animateText(result);
  }
});


  function animateText(element) {
    element.style.opacity = 0;
    element.style.transform = "translateY(10px)";
    setTimeout(() => {
      element.style.transition = "all 0.5s ease";
      element.style.opacity = 1;
      element.style.transform = "translateY(0)";
    }, 50);
  }

  function showImage(src) {
    img.src = src;
    img.style.display = "block";
    setTimeout(() => (img.style.opacity = 1), 50);
  }

  function hideImage() {
    img.style.opacity = 0;
    setTimeout(() => {
      img.style.display = "none";
    }, 500);
  }
});
