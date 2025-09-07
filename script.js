// === Contador de tiempo juntos ===
const fechaInicio = new Date("2023-07-25 11:30:00"); // 🔹 Cambia esta fecha

const contador = document.getElementById("contador");

function actualizarContador() {
  const ahora = new Date();
  let años = ahora.getFullYear() - fechaInicio.getFullYear();
  let meses = ahora.getMonth() - fechaInicio.getMonth();
  let dias = ahora.getDate() - fechaInicio.getDate();
  let horas = ahora.getHours() - fechaInicio.getHours();
  let minutos = ahora.getMinutes() - fechaInicio.getMinutes();
  let segundos = ahora.getSeconds() - fechaInicio.getSeconds();

  if (segundos < 0) { segundos += 60; minutos--; }
  if (minutos < 0) { minutos += 60; horas--; }
  if (horas < 0) { horas += 24; dias--; }
  if (dias < 0) {
    const ultimoMes = new Date(ahora.getFullYear(), ahora.getMonth(), 0).getDate();
    dias += ultimoMes;
    meses--;
  }
  if (meses < 0) { meses += 12; años--; }



  contador.innerHTML = 
    `Llevamos juntos 💕 ${años} años,${meses} meses, ${dias} días, ${horas}h ${minutos}m ${segundos}s 💕`;
}

// Actualiza cada segundo
setInterval(actualizarContador, 1000);
actualizarContador();


// === Efecto de corazones cayendo ===
function crearCorazon() {
  const corazon = document.createElement("div");
  corazon.classList.add("heart");
  corazon.innerHTML = "💖";
  corazon.style.left = Math.random() * window.innerWidth + "px";
  corazon.style.animationDuration = (Math.random() * 3 + 2) + "s";
  document.body.appendChild(corazon);

  setTimeout(() => corazon.remove(), 5000);
}

setInterval(crearCorazon, 500);


// Abrir carta con foto + texto
function abrirCarta(foto, mensaje) {
    const modal = document.getElementById("carta");
    const contenido = document.querySelector(".contenido-carta");
  
    // Fondo con la foto
    contenido.style.backgroundImage = `url(${foto})`;
  
    // Texto de la carta
    document.getElementById("textoCarta").innerHTML = mensaje;
  
    modal.style.display = "flex"; // mostrar
  }
  
  // Cerrar carta
  function cerrarCarta() {
    document.getElementById("carta").style.display = "none";
  }
  