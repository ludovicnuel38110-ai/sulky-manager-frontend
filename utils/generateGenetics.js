function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = function generateGenetics() {
  return {
    speed: random(60, 100),
    endurance: random(60, 100),
    agility: random(60, 100),
    training: random(60, 100),
  };
};
