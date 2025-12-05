async function updateNavigation() {
  const navLogin = document.getElementById('navLogin');
  const navRegister = document.getElementById('navRegister');
  const navUser = document.getElementById('navUser');
  const navUserName = document.getElementById('navUserName');
  
  if (!navLogin || !navRegister || !navUser) return;
  if (!window.DB) return;
  
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
    navLogin.style.display = 'block';
    navRegister.style.display = 'block';
    navUser.style.display = 'none';
  }
}

async function showProfile() {
  window.location.href = 'profil.html';
}

async function logout() {
  if (confirm('Möchten Sie sich wirklich abmelden?')) {
    try {
      await window.DB.signOut();
      window.location.href = 'index.html';
    } catch (error) {
      window.location.href = 'index.html';
    }
  }
}

setTimeout(() => {
  if (window.DB) updateNavigation();
}, 500);
