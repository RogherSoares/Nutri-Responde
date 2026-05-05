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

document.addEventListener('DOMContentLoaded', () => {
  const pageName = document.body.dataset.page;
  if (pageName) {
    setActiveNav(pageName);
  }

  decorateSidebarIcons();
});
