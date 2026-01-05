// Обновление навигации
async function updateNavigation() {
  console.log('updateNavigation called');
  const navLogin = document.getElementById('navLogin');
  const navRegister = document.getElementById('navRegister');
  const navUser = document.getElementById('navUser');
  const navUserName = document.getElementById('navUserName');
  
  if (!navLogin || !navRegister || !navUser) {
    console.log('Nav elements not found');
    return;
  }
  if (!window.DB) {
    console.log('DB not ready, retrying...');
    setTimeout(updateNavigation, 200);
    return;
  }
  
  try {
    const user = await window.DB.getUser();
    console.log('Current user:', user);
    
    if (user) {
      navLogin.style.display = 'none';
      navRegister.style.display = 'none';
      navUser.style.display = 'block';
      if (navUserName) {
        navUserName.textContent = (user.firstname || '') + ' ' + (user.lastname || '');
      }
      console.log('User navigation updated');
    } else {
      navLogin.style.display = 'block';
      navRegister.style.display = 'block';
      navUser.style.display = 'none';
      console.log('Guest navigation updated');
    }
  } catch (error) {
    console.error('Nav error:', error);
    navLogin.style.display = 'block';
    navRegister.style.display = 'block';
    navUser.style.display = 'none';
  }
}

// Выход
async function logout() {
  showToast('Möchten Sie sich wirklich abmelden?', 'warning', 6000);
  setTimeout(() => {
    if (confirm('Wirklich abmelden?')) {
      try {
        window.DB.signOut();
        showToast('Erfolgreich abgemeldet!', 'success');
        setTimeout(() => {
          window.location.href = 'index.html';
        }, 1000);
      } catch (error) {
        console.error('Logout error:', error);
        showToast('Fehler beim Abmelden', 'error');
      }
    }
  }, 100);
}

// Запуск при загрузке
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(updateNavigation, 100);
  });
} else {
  setTimeout(updateNavigation, 100);
}
