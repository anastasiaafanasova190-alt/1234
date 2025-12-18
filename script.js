document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('#mobile-menu');
    const menuLinks = document.querySelector('.nav-links');

    if (menu) {
        menu.addEventListener('click', function() {
            // Переключаем класс для открытия меню
            menuLinks.classList.toggle('active');
            // Переключаем класс для анимации иконки (крестик)
            menu.classList.toggle('is-active');
        });
    }

    // Закрытие меню при клике на ссылку
    const navItems = document.querySelectorAll('.nav-links a');
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            menuLinks.classList.remove('active');
            menu.classList.remove('is-active');
        });
    });
});
