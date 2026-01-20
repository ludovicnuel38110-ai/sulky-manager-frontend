const token = localStorage.getItem("token");

const list = document.getElementById("horseList");
const btn = document.getElementById("createHorseBtn");
const msg = document.getElementById("horseLimitMessage");

async function loadHorses() {
  const res = await fetch("/api/player/horses", {
    headers: { Authorization: `Bearer ${token}` }
  });

  const horses = await res.json();
  list.innerHTML = "";

  horses.forEach(horse => {
    const li = document.createElement("li");
    li.textContent = horse.name;
    li.onclick = () => {
      localStorage.setItem("horseId", horse._id);
      window.location.href = "horse.html";
    };
    list.appendChild(li);
  });
}

btn.onclick = async () => {
  const name = prompt("Nom du cheval ?");
  if (!name) return;

  const res = await fetch("/api/player/horses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ name })
  });

  if (!res.ok) {
    msg.textContent = "❌ Limite de 5 chevaux atteinte";
    return;
  }

  loadHorses();
};

loadHorses();
