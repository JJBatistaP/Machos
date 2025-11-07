document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("nameInput");
  const button = document.getElementById("checkButton");
  const result = document.getElementById("result");
  const video = document.getElementById("background-video");
  const arbol = document.getElementById("exacerbate"); 

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

  button.addEventListener("click", () => {
    const nombre = input.value.trim().toLowerCase();

    document.body.classList.remove("flag-active", "macho", "zorro", "exacerbate");

    if (arbol) {
      arbol.style.opacity = "0";
    }

    if (!nombre) {
      result.textContent = "Por favor, escribe un nombre.";
      result.style.color = "#ccc";
      hideImage();
      hideVideo();
      return;
    }

    if (["michel"].includes(nombre)) {
      document.body.classList.add("flag-active");
      result.textContent = "🌈 Lo suponía...";
      result.style.color = "#ffffff";
      showImage("img/Caca.webp");
      animateText(result);
      hideVideo();
    } else if (nombre === "camila") {
      document.body.classList.add("zorro");
      result.textContent = "🦊 Zorra Mayor";
      result.style.color = "#ff4d6d";
      showImage("img/zorra.jpg");
      animateText(result);
      hideVideo();
    } else if (nombre === "jennifer" || nombre === "feniyer") {
      document.body.classList.add("exacerbate");
      result.textContent = "😤 Controla tu histeria, enana";
      result.style.color = "#ffcc00";
      showImage("img/enana.webp");
      animateText(result);
      hideVideo();
    } else if (nombre === "randy") {
      document.body.classList.add("exacerbate");
      result.textContent = "hmmmm migajas";
      result.style.color = "#ee5ea6ff";
      showImage("img/migajas.jpeg");
      animateText(result);
      transitionVideo("video/randy.mp4");
    } else if (nombre === "robert") {
      document.body.classList.add("exacerbate");
      result.textContent = "Como tan muchacho";
      result.style.color = "#fa0000bd";
      showImage("img/bensom.jpg");
      animateText(result);
      transitionVideo("video/bensom.mp4");
    } else if (nombre === "gabriel") {
      document.body.classList.add("exacerbate");
      result.textContent = "Brazo de 35";
      result.style.color = "#a7f31bbd";
      showImage("img/gabriel.webp");
      animateText(result);
      transitionVideo("video/gabriel.mp4");
    } else if (nombre === "xavier") {
      document.body.classList.add("exacerbate");
      result.textContent = "Basadísimo";
      result.style.color = "#0931e4bd";
      showImage("img/xavier.png");
      animateText(result);
      transitionVideo("video/xavier.mp4");
    } else if (nombre === "enrique" || nombre === "pepe") {
      document.body.classList.add("exacerbate");
      result.textContent = "Tu te botas";
      result.style.color = "#00ff88bd";
      showImage("img/pepe.webp");
      animateText(result);
      transitionVideo("video/pepe.mp4");
    } else if (nombre === "rupe" || nombre === "ruben" || nombre === "rubén") {
      document.body.classList.add("exacerbate");
      result.textContent = "Pero una de 15.....";
      result.style.color = "#5100e9bd";
      showImage("img/rupe.jpeg");
      animateText(result);
      transitionVideo("video/rupe.mp4");
    } else {
      document.body.classList.add("macho");
      result.textContent = "💪 Eres un macho lomo plateado";
      result.style.color = "#00ffff";
      showImage("img/varonil.jpg");
      animateText(result);
      hideVideo();
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
    setTimeout(() => (img.style.display = "none"), 500);
  }

  function transitionVideo(src) {
    if (video) {
      video.style.transition = "opacity 0.8s ease";
      video.style.opacity = "0";
      setTimeout(() => {
        video.pause();
        video.src = src;
        video.muted = false;
        video.load();
        video.play();
        video.style.opacity = "1";
      }, 800);
    }
  }

  function hideVideo() {
    if (video) {
      video.style.transition = "opacity 0.8s ease";
      video.style.opacity = "0";
      setTimeout(() => {
        video.pause();
        video.src = "video/fondo.mp4";
        video.muted = true;
        video.load();
        video.play();
      }, 800);
    }
  }
});
