// === Contador de tiempo juntos ===
const fechaInicio = new Date("2023-07-25 11:30:00"); // 🔹 Cambia esta fecha

const contador = document.getElementById("contador");

function actualizarContador() {
  const ahora = new Date();
  let diferencia = ahora - fechaInicio; // milisegundos

  // Convertimos
  const segundosTotales = Math.floor(diferencia / 1000);
  const minutosTotales = Math.floor(segundosTotales / 60);
  const horasTotales = Math.floor(minutosTotales / 60);
  const diasTotales = Math.floor(horasTotales / 24);

  const años = Math.floor(diasTotales / 365); // aproximado (sin bisiestos)
  const dias = diasTotales % 365;
  const horas = horasTotales % 24;
  const minutos = minutosTotales % 60;
  const segundos = segundosTotales % 60;

  contador.innerHTML = 
    `Llevamos juntos 💕 ${años} años, ${dias} días, ${horas}h ${minutos}m ${segundos}s 💕`;
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
  