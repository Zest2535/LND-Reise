// Zentrale Authentifizierungs-Logik
window.authReady = false;

function initAuth() {
  if (!window.supabase || !window.DB) {
    setTimeout(initAuth, 100);
    return;
  }
  
  window.authReady = true;
  updateNavigation();
  
  // Auth State Listener
  window.supabase.auth.onAuthStateChange((event, session) => {
    console.log('Auth changed:', event);
    updateNavigation();
  });
}

async function updateNavigation() {
  const navLogin = document.getElementById('navLogin');
  const navRegister = document.getElementById('navRegister');
  const navUser = document.getElementById('navUser');
  const navUserName = document.getElementById('navUserName');
  
  if (!navLogin || !navRegister || !navUser || !window.DB) return;
  
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

async function logout() {
  if (confirm('Möchten Sie sich wirklich abmelden?')) {
    await window.DB.signOut();
    window.location.href = 'index.html';
  }
}

// Start
initAuth();
