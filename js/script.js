document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("nameInput");
  const button = document.getElementById("checkButton");
  const result = document.getElementById("result");

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


imageContainer.style.position = "fixed";
imageContainer.style.top = "20px"; 
imageContainer.style.left = "50%";
imageContainer.style.transform = "translateX(-50%)";
imageContainer.style.zIndex = "999"; 
showImage("img/exacerbate.png");



 button.addEventListener("click", () => {
  const nombre = input.value.trim().toLowerCase();


  document.body.classList.remove("flag-active", "macho", "zorro", "exacerbate");

  if (!nombre) {
    result.textContent = "Por favor, escribe un nombre.";
    result.style.color = "#ccc";
    hideImage();
    return;
  }

  if (["randy", "michel", "xavier", "ruben", "rubén"].includes(nombre)) {
    document.body.classList.add("flag-active");
    result.textContent = "🌈 Lo suponía...";
    result.style.color = "#ffffff";
    showImage("img/Caca.webp");
    animateText(result);
  } else if (nombre === "camila") {
    document.body.classList.add("zorro");
    result.textContent = "🦊 Zorra Mayor";
    result.style.color = "#ff4d6d";
    showImage("img/zorra.jpg");
    animateText(result);
  } else if (nombre === "jennifer" || nombre === "feniyer") {
    document.body.classList.add("exacerbate");
    result.textContent = "😤 Controla tu histeria, enana";
    result.style.color = "#ffcc00";
    showImage("img/enana.webp");
    animateText(result);
  } else {
    document.body.classList.add("macho");
    result.textContent = "💪 Eres un macho lomo plateado";
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
