// =======================
// CONFIG
// =======================
const API_URL = "https://sulky-manager-backend.onrender.com";

// =======================
// REGISTER
// =======================
const registerBtn = document.getElementById("registerBtn");

if (registerBtn) {
  registerBtn.addEventListener("click", async () => {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("registerMessage");

    message.textContent = "Création du compte...";

    try {
      const res = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        message.textContent = data.message || "Erreur serveur";
        message.style.color = "red";
        return;
      }

      message.textContent = "✅ Compte créé avec succès";
      message.style.color = "green";

      setTimeout(() => {
        window.location.href = "index.html";
      }, 1500);

    } catch (err) {
      console.error(err);
      message.textContent = "❌ Serveur indisponible";
      message.style.color = "red";
    }
  });
}

// =======================
// LOGIN
// =======================
const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {
  loginBtn.addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("loginMessage");

    message.textContent = "Connexion...";

    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        message.textContent = data.message || "Erreur connexion";
        message.style.color = "red";
        return;
      }

      localStorage.setItem("token", data.token);
      message.textContent = "✅ Connecté";
      message.style.color = "green";

    } catch (err) {
      console.error(err);
      message.textContent = "❌ Serveur indisponible";
      message.style.color = "red";
    }
  });
}
