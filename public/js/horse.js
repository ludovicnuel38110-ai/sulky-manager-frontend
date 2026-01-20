// ============================
// HORSE PAGE SCRIPT
// ============================

// Récupération du cheval sélectionné
const horse = JSON.parse(localStorage.getItem("selectedHorse"));

// Sécurité : si aucun cheval sélectionné
if (!horse) {
  alert("Aucun cheval sélectionné");
  window.location.href = "dashboard.html";
}

// ============================
// Affichage infos générales
// ============================
document.getElementById("horseName").innerText = horse.name;
document.getElementById("potential").innerText = horse.genetics.potential;

// ============================
// Fonction pour animer les barres
// ============================
function setBar(id, value) {
  const bar = document.getElementById(id);
  bar.style.width = value + "%";
  bar.innerText = value + "%";
}

// ============================
// Stats du cheval
// ============================
setBar("speed", horse.stats.speed);
setBar("endurance", horse.stats.endurance);
setBar("agility", horse.stats.agility);
setBar("training", horse.training.level);

// ============================
// Infos debug (optionnel)
// ============================
console.log("🐎 Cheval chargé :", horse);
