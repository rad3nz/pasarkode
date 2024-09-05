document.addEventListener('DOMContentLoaded', (event) => {
    const sidebar = document.getElementById('sidebar');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const closeSidebarButton = document.getElementById('close-sidebar');

    mobileMenuButton.addEventListener('click', () => {
        sidebar.classList.toggle('hidden');
    });

    closeSidebarButton.addEventListener('click', () => {
        sidebar.classList.add('hidden');
    });
});