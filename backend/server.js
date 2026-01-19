// =====================
// CONFIG API (RENDER)
// =====================
const API_URL = "https://sulky-manager-backend.onrender.com";

// =====================
// PAGE CONNEXION (index.html)
// =====================
const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
  loginBtn.addEventListener("click", async () => {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("loginMessage");

    if (!email || !password) {
      message.textContent = "❌ Tous les champs sont obligatoires";
      return;
    }

    message.textContent = "Connexion en cours...";

    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        message.textContent = data.message || "❌ Erreur de connexion";
        return;
      }

      // 🔐 Sauvegarde session
      localStorage.setItem("token", data.token);
      localStorage.setItem("player", JSON.stringify(data.user));

      // ➜ Dashboard
      window.location.href = "dashboard.html";
    } catch (err) {
      console.error(err);
      message.textContent = "❌ Serveur indisponible";
    }
  });
}

// =====================
// PAGE INSCRIPTION (register.html)
// =====================
const registerBtn = document.getElementById("registerBtn");

if (registerBtn) {
  registerBtn.addEventListener("click", async () => {
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("registerMessage");

    if (!username || !email || !password) {
      message.textContent = "❌ Tous les champs sont obligatoires";
      return;
    }

    message.textContent = "Création du compte en cours...";

    try {
      const res = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        message.textContent = data.message || "❌ Erreur inscription";
        return;
      }

      message.style.color = "lightgreen";
      message.textContent = "✅ Compte créé ! Redirection...";

      setTimeout(() => {
        window.location.href = "index.html";
      }, 1500);
    } catch (err) {
      console.error(err);
      message.textContent = "❌ Serveur indisponible";
    }
  });
}

// =====================
// PAGE DASHBOARD
// =====================
if (window.location.pathname.includes("dashboard.html")) {
  const token = localStorage.getItem("token");
  const playerData = localStorage.getItem("player");

  if (!token || !playerData) {
    window.location.href = "index.html";
  } else {
    const player = JSON.parse(playerData);

    const playerNameEl = document.getElementById("playerName");
    const welcomeNameEl = document.getElementById("welcomeName");

    if (playerNameEl) {
      playerNameEl.textContent = "👤 " + player.username;
    }

    if (welcomeNameEl) {
      welcomeNameEl.textContent = player.username;
    }
  }
}

// =====================
// DÉCONNEXION
// =====================
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("token");
    localStorage.removeItem("player");
    window.location.href = "index.html";
  });
}
