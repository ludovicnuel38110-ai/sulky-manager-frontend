// 🧪 Données test (plus tard via API)
const horse = {
  name: "Dark Punch",
  owner: "test1",
  age: 12,
  stats: {
    speed: 45,
    endurance: 60,
    agility: 50,
    training: 30
  }
};

// Infos
document.getElementById("horseName").textContent = "🐎 " + horse.name;
document.getElementById("ownerName").textContent = horse.owner;
document.getElementById("horseAge").textContent = horse.age;

// Barres
document.getElementById("speedBar").style.width = horse.stats.speed + "%";
document.getElementById("enduranceBar").style.width = horse.stats.endurance + "%";
document.getElementById("agilityBar").style.width = horse.stats.agility + "%";
document.getElementById("trainingBar").style.width = horse.stats.training + "%";
