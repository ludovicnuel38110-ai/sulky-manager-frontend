/**
 * Fait progresser un cheval chaque jour
 * en fonction de sa génétique et de son âge
 */

module.exports = function progressHorse(horse) {
  const now = new Date();
  const last = new Date(horse.lastProgress);

  // nombre de jours écoulés
  const daysPassed = Math.floor(
    (now - last) / (1000 * 60 * 60 * 24)
  );

  if (daysPassed <= 0) return horse;

  // Stats à faire progresser
  const stats = ["speed", "endurance", "agility", "training"];

  stats.forEach(stat => {
    const max = horse.genetics[stat];
    let current = horse.stats[stat];

    if (current < max) {
      const remaining = max - current;
      const dailyGain = Math.max(1, Math.ceil(remaining / 120));

      current += dailyGain * daysPassed;

      if (current > max) current = max;
      horse.stats[stat] = current;
    }
  });

  horse.lastProgress = now;
  return horse;
};
