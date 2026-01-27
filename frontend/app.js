// Sulky-Bet – Frontend

console.log("Sulky-Bet loaded");

// On affiche directement les courses disponibles
const coursesList = document.getElementById("coursesList");

if (coursesList) {
  coursesList.innerHTML = `
    <div class="course">
      <div>
        <strong>R1 – VINCENNES</strong><br>
        Dimanche 01 février 2026
      </div>
      <a href="vincennes.html">
        <button class="bet-btn">Voir le programme</button>
      </a>
    </div>
  `;
}
