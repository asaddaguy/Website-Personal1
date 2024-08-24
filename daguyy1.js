document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const closeSidebar = document.querySelector('.close-sidebar');

    sidebarToggle.addEventListener('click', () => {
        sidebar.style.transform = 'translateX(0)';
    });

    closeSidebar.addEventListener('click', () => {
        sidebar.style.transform = 'translateX(100%)';
    });
});
