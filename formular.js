document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById("bookingForm");
  form?.addEventListener("submit", function (event) {
    event.preventDefault();
    clearErrors();
    let valid = true;

    function showError(inputId, message) {
      const field = document.getElementById(inputId);
      const wrapper = document.createElement("div");
      wrapper.className = "error-message";
      wrapper.innerHTML = `<span class="error-icon">⚠️</span> ${message}`;
      field.insertAdjacentElement("afterend", wrapper);
      field.classList.add("is-invalid");
      valid = false;
    }

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const state = document.getElementById("state").value;
    const terms = document.getElementById("terms").checked;

    if (firstName === "") showError("firstName", "Bitte gib deinen Vornamen ein.");
    if (lastName === "") showError("lastName", "Bitte gib deinen Nachnamen ein.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) showError("email", "Bitte gib eine gültige E-Mail-Adresse ein.");
    if (password.length < 6) showError("password", "Passwort muss mindestens 6 Zeichen haben.");
    if (state === "") showError("state", "Bitte wähle ein Bundesland aus.");
    if (!terms) {
      const termsLabel = document.querySelector('label[for="terms"]');
      const wrapper = document.createElement("div");
      wrapper.className = "error-message";
      wrapper.innerHTML = `<span class="error-icon">⚠️</span> Du musst den AGB zustimmen.`;
      termsLabel.insertAdjacentElement("afterend", wrapper);
      valid = false;
    }

    if (valid) {
      // Konto erstellen
      const konto = {
        id: Date.now(),
        firstName,
        lastName,
        email,
        password,
        state,
        role: 'user', // Standard-Rolle
        offer: new URLSearchParams(window.location.search).get('offer'),
        datum: new Date().toLocaleString('de-DE')
      };

      // In localStorage speichern
      let konten = JSON.parse(localStorage.getItem('konten') || '[]');
      konten.push(konto);
      localStorage.setItem('konten', JSON.stringify(konten));
      
      console.log('Neues Konto erstellt:', konto);
      console.log('Alle Konten:', konten);

      const success = document.createElement("div");
      success.textContent = "✅ Konto erfolgreich erstellt!";
      success.className = "success-message";
      form.appendChild(success);
      form.reset();
      
      alert('Konto erstellt! Konten: ' + konten.length);
    }
  });

  function clearErrors() {
    document.querySelectorAll(".error-message").forEach(e => e.remove());
    document.querySelectorAll(".is-invalid").forEach(e => e.classList.remove("is-invalid"));
    document.querySelectorAll(".success-message").forEach(e => e.remove());
  }
});
