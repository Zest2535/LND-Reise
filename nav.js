// Система навигации - обновление статуса пользователя
async function updateNavigation() {
  const navLogin = document.getElementById('navLogin');
  const navRegister = document.getElementById('navRegister');
  const navUser = document.getElementById('navUser');
  const navUserName = document.getElementById('navUserName');
  
  // Проверяем наличие элементов
  if (!navLogin || !navRegister || !navUser) {
    console.warn('Navigation elements not found');
    return;
  }
  
  // Проверяем наличие window.DB
  if (!window.DB) {
    console.warn('DB not initialized yet');
    return;
  }
  
  try {
    const user = await window.DB.getUser();
    console.log('Current user:', user);
    
    if (user) {
      // Пользователь авторизован
      const profile = await window.DB.getUserProfile();
      console.log('User profile:', profile);
      
      navLogin.style.display = 'none';
      navRegister.style.display = 'none';
      navUser.style.display = 'block';
      
      if (navUserName && profile) {
        const fullName = `${profile.firstname || ''} ${profile.lastname || ''}`.trim();
        navUserName.textContent = fullName || 'Пользователь';
      }
    } else {
      // Пользователь не авторизован
      navLogin.style.display = 'block';
      navRegister.style.display = 'block';
      navUser.style.display = 'none';
    }
  } catch (error) {
    console.error('Error updating navigation:', error);
    navLogin.style.display = 'block';
    navRegister.style.display = 'block';
    navUser.style.display = 'none';
  }
}
  console.log('Navigation updated for user:', fullName);

// Функция выхода
async function logout() {
  if (confirm('Möchten Sie sich wirklich abmelden?')) {
    try {
      await window.DB.signOut();
      window.location.href = 'index.html';
    } catch (error) {
      console.error('Logout error:', error);
      alert('Fehler beim Abmelden');
    }
  }
}

// Инициализация навигации при загрузке
function initializeNavigation() {
  console.log('Initializing navigation...');
  
  // Ждем загрузки DOM и DB
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(updateNavigation, 300);
    });
  } else {
    setTimeout(updateNavigation, 300);
  }
  
  // Слушаем изменения статуса авторизации
  if (window.supabase) {
    window.supabase.auth.onAuthStateChange((event, session) => {
      console.log('Auth state changed:', event);
      setTimeout(updateNavigation, 200);
    });
  }
}

// Запускаем инициализацию
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeNavigation);
} else {
    console.log('Navigation updated for guest');
       console.log('User logged out');
       // Обновляем навигацию
       setTimeout(() => {
         updateNavigation();
         window.location.href = 'index.html';
       }, 300);
  initializeNavigation();
}
