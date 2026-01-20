function randomStat(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateGenetics() {
  return {
    speed: randomStat(60, 100),
    endurance: randomStat(60, 100),
    agility: randomStat(60, 100),
    training: randomStat(60, 100)
  };
}

module.exports = generateGenetics;
