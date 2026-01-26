const API_URL = "https://sulky-manager-backend.onrender.com/api/races";

async function loadRaces() {
  const res = await fetch(API_URL);
  const races = await res.json();

  const container = document.getElementById("races");
  container.innerHTML = "";

  races.forEach(race => {
    const div = document.createElement("div");
    div.className = "race";

    div.innerHTML = `
      <h3>${race.name}</h3>
      <p>📍 ${race.hippodrome}</p>
      <p>🕒 ${new Date(race.date).toLocaleString()}</p>
      <button>Voir la course</button>
    `;

    container.appendChild(div);
  });
}

loadRaces();
