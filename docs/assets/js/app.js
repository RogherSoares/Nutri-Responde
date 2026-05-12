function setActiveNav(pageName) {
  document.querySelectorAll('[data-nav]').forEach((link) => {
    link.classList.toggle('active', link.dataset.nav === pageName);
  });
}

function decorateSidebarIcons() {
  const iconMap = {
    dashboard: 'fas fa-chart-line',
    pesquisa: 'fas fa-magnifying-glass',
    duvidas: 'fas fa-comments',
    plano: 'fas fa-utensils',
    avaliacoes: 'fas fa-ruler-combined',
    financeiro: 'fas fa-wallet',
    admin: 'fas fa-user-shield',
  };

  document.querySelectorAll('.sidebar-card [data-nav]').forEach((link) => {
    if (link.dataset.iconDecorated === 'true') {
      return;
    }

    const iconClass = iconMap[link.dataset.nav];
    if (!iconClass) {
      return;
    }

    const label = link.textContent.trim();
    link.innerHTML = `<i class="${iconClass} me-2"></i>${label}`;
    link.dataset.iconDecorated = 'true';
  });
}

function confirmLogout() {
  if (window.confirm('Tem certeza que deseja sair?')) {
    const path = window.location.pathname || '';
    // if current URL contains '/pages/' we are in a subpage and should go up one level
    if (path.includes('/pages/')) {
      window.location.href = '../index.html';
    } else {
      window.location.href = 'index.html';
    }
  }
}

/* Theme (dark mode) support */
const THEME_KEY = 'nr_theme_pref';

function applyTheme(isDark) {
  document.documentElement.classList.toggle('dark', !!isDark);
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    const icon = btn.querySelector('i');
    if (icon) {
      icon.className = isDark ? 'fas fa-sun' : 'fas fa-moon';
    }
    btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');
  }
}

function getStoredTheme() {
  try {
    return localStorage.getItem(THEME_KEY);
  } catch (e) {
    return null;
  }
}

function storeTheme(value) {
  try {
    localStorage.setItem(THEME_KEY, value);
  } catch (e) {
    // ignore
  }
}

function initTheme() {
  const stored = getStoredTheme();
  if (stored) {
    applyTheme(stored === 'dark');
    return;
  }
  const prefersDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(prefersDark);
}

function toggleTheme() {
  const isDark = document.documentElement.classList.contains('dark');
  applyTheme(!isDark);
  storeTheme(!isDark ? 'dark' : 'light');
}

function createThemeToggleButton() {
  const btn = document.createElement('button');
  btn.id = 'theme-toggle';
  btn.className = 'btn btn-outline-light btn-sm';
  btn.type = 'button';
  btn.title = 'Alternar modo claro/escuro';
  btn.setAttribute('aria-pressed', 'false');
  btn.innerHTML = '<i class="fas fa-moon"></i>';
  btn.addEventListener('click', toggleTheme);
  return btn;
}

function injectThemeToggle() {
  // Try several common navbar containers
  const selectors = [
    '.navbar-nr .container .ms-auto',
    '.navbar .container .ms-auto',
    '.navbar .container',
  ];

  let target = null;
  for (const sel of selectors) {
    const el = document.querySelector(sel);
    if (el) {
      target = el;
      break;
    }
  }

  if (!target) return;

  // Avoid adding multiple toggles
  if (document.getElementById('theme-toggle')) return;

  const btn = createThemeToggleButton();
  // Insert before the first child so it stays on the right in ms-auto container
  target.insertBefore(btn, target.firstChild);
}

document.addEventListener('DOMContentLoaded', () => {
  const pageName = document.body.dataset.page;
  if (pageName) {
    setActiveNav(pageName);
  }

  decorateSidebarIcons();
  initTheme();
  injectThemeToggle();
});
