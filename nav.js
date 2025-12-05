async function updateNavigation() {
  const navLogin = document.getElementById('navLogin');
  const navRegister = document.getElementById('navRegister');
  const navUser = document.getElementById('navUser');
  const navUserName = document.getElementById('navUserName');
  
  if (!navLogin || !navRegister || !navUser) return;
  
  try {
    const user = await window.DB.getUser();
    
    if (user) {
      const profile = await window.DB.getUserProfile();
      navLogin.style.display = 'none';
      navRegister.style.display = 'none';
      navUser.style.display = 'block';
      if (navUserName && profile) {
        navUserName.textContent = profile.firstname + ' ' + profile.lastname;
      }
    } else {
      navLogin.style.display = 'block';
      navRegister.style.display = 'block';
      navUser.style.display = 'none';
    }
  } catch (error) {
    console.error('Navigation update error:', error);
    navLogin.style.display = 'block';
    navRegister.style.display = 'block';
    navUser.style.display = 'none';
  }
}

async function showProfile() {
  if (typeof window.showProfile === 'function') {
    window.showProfile();
  } else {
    window.location.href = 'profil.html';
  }
}

async function logout() {
  if (confirm('Möchten Sie sich wirklich abmelden?')) {
    try {
      await window.DB.signOut();
      window.location.replace('index.html');
    } catch (error) {
      console.error('Logout error:', error);
      window.location.replace('index.html');
    }
  }
}



// Navigation beim Laden der Seite aktualisieren
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(updateNavigation, 500);
  });
} else {
  setTimeout(updateNavigation, 500);
}

// Обновление при изменении видимости страницы
document.addEventListener('visibilitychange', () => {
  if (!document.hidden) {
    setTimeout(updateNavigation, 300);
  }
});