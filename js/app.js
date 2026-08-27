import { auth, signInWithEmailAndPassword } from "./firebase-config.js";

// Aguarda o HTML carregar completamente
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault(); // Impede a página de recarregar com erro

      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;

      try {
        // Tenta fazer o login no Firebase
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login realizado com sucesso!");
        
        // Redireciona para a home
        window.location.href = "home.html";
      } catch (error) {
        console.error("Erro ao entrar:", error);
        alert("E-mail ou senha incorretos!");
      }
    });
  }
});