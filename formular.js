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
    const city = document.getElementById("city").value.trim();
    const state = document.getElementById("state").value;
    const zip = document.getElementById("zip").value.trim();
    const terms = document.getElementById("terms").checked;

    if (firstName === "") showError("firstName", "Bitte gib deinen Vornamen ein.");
    if (lastName === "") showError("lastName", "Bitte gib deinen Nachnamen ein.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) showError("email", "Bitte gib eine gültige E-Mail-Adresse ein.");
    if (city === "") showError("city", "Bitte gib deine Stadt ein.");
    if (state === "") showError("state", "Bitte wähle ein Bundesland aus.");
    if (!/^[0-9]{4,5}$/.test(zip)) showError("zip", "Bitte gib eine gültige PLZ ein (4–5 Zahlen).");
    if (!terms) {
      const termsLabel = document.querySelector('label[for="terms"]');
      const wrapper = document.createElement("div");
      wrapper.className = "error-message";
      wrapper.innerHTML = `<span class="error-icon">⚠️</span> Du musst den AGB zustimmen.`;
      termsLabel.insertAdjacentElement("afterend", wrapper);
      valid = false;
    }

    if (valid) {
      const success = document.createElement("div");
      success.textContent = "✅ Formular erfolgreich abgeschickt!";
      success.className = "success-message";
      form.appendChild(success);
      form.reset();
    }
  });

  function clearErrors() {
    document.querySelectorAll(".error-message").forEach(e => e.remove());
    document.querySelectorAll(".is-invalid").forEach(e => e.classList.remove("is-invalid"));
    document.querySelectorAll(".success-message").forEach(e => e.remove());
  }
});
