async function updateNavigation() {
  const navLogin = document.getElementById('navLogin');
  const navRegister = document.getElementById('navRegister');
  const navUser = document.getElementById('navUser');
  const navUserName = document.getElementById('navUserName');
  
  if (!navLogin || !navRegister || !navUser) return;
  
  try {
    const user = await window.DB.getUser();
    const profile = user ? await window.DB.getUserProfile() : null;
    
    if (user && profile) {
      navLogin.style.display = 'none';
      navRegister.style.display = 'none';
      navUser.style.display = 'block';
      if (navUserName) {
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
  try {
    await window.DB.signOut();
    updateNavigation();
  } catch (error) {
    console.error('Logout error:', error);
  }
}



// Navigation beim Laden der Seite aktualisieren
document.addEventListener('DOMContentLoaded', updateNavigation);

// Supabase Auth State Listener
if (typeof window.supabase !== 'undefined') {
  window.supabase.auth.onAuthStateChange((event, session) => {
    updateNavigation();
  });
}