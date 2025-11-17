function updateNavigation() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null');
  const navbarNav = document.querySelector('#navbarNav .navbar-nav');
  
  if (currentUser) {
    // Benutzer ist angemeldet - zeige Profil
    navbarNav.innerHTML = `
      <li class="nav-item">
        <a class="nav-link" href="startseite.html">Startseite</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#angebote">Angebote</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#reiseziele">Reiseziele</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle d-flex align-items-center" href="#" id="profileDropdown" role="button" data-bs-toggle="dropdown">
          <div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-2" style="width: 32px; height: 32px; font-size: 14px; font-weight: bold;">
            ${currentUser.firstName.charAt(0)}${currentUser.lastName.charAt(0)}
          </div>
          <span>${currentUser.firstName} ${currentUser.lastName}</span>
        </a>
        <ul class="dropdown-menu dropdown-menu-end shadow" style="min-width: 280px;">
          <li class="dropdown-header">
            <div class="d-flex align-items-center">
              <div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style="width: 40px; height: 40px; font-size: 16px; font-weight: bold;">
                ${currentUser.firstName.charAt(0)}${currentUser.lastName.charAt(0)}
              </div>
              <div>
                <div class="fw-bold">${currentUser.firstName} ${currentUser.lastName}</div>
                <small class="text-muted">${currentUser.email}</small>
              </div>
            </div>
          </li>
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item py-2" href="profil.html"><i class="bi bi-person-circle me-2 text-primary"></i>Mein Profil</a></li>
          <li><a class="dropdown-item py-2" href="einstellungen.html"><i class="bi bi-gear me-2 text-primary"></i>Einstellungen</a></li>
          <li><a class="dropdown-item py-2" href="favoriten.html"><i class="bi bi-heart me-2 text-primary"></i>Meine Favoriten</a></li>
          <li><a class="dropdown-item py-2" href="#"><i class="bi bi-clock-history me-2 text-primary"></i>Buchungshistorie</a></li>
          ${currentUser.role === 'moderator' || currentUser.role === 'admin' ? '<li><a class="dropdown-item py-2 text-warning" href="admin-login.html"><i class="bi bi-shield-lock me-2"></i>Moderator Panel</a></li>' : ''}
          <li><hr class="dropdown-divider"></li>
          <li><a class="dropdown-item py-2 text-danger" href="#" onclick="logout()"><i class="bi bi-box-arrow-right me-2"></i>Abmelden</a></li>
        </ul>
      </li>
    `;
  } else {
    // Benutzer ist nicht angemeldet - zeige Login/Register
    navbarNav.innerHTML = `
      <li class="nav-item">
        <a class="nav-link" href="startseite.html">Startseite</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#angebote">Angebote</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#reiseziele">Reiseziele</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="formular.html">Registrieren</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="login.html">Anmelden</a>
      </li>
    `;
  }
}

function showProfile() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));
  alert(`Profil:\nName: ${currentUser.firstName} ${currentUser.lastName}\nE-Mail: ${currentUser.email}\nBundesland: ${currentUser.state}`);
}

function logout() {
  localStorage.removeItem('currentUser');
  window.location.href = 'startseite.html';
}



// Navigation beim Laden der Seite aktualisieren
document.addEventListener('DOMContentLoaded', updateNavigation);