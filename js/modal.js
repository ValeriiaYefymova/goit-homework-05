// Получаем элементы
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalBackdrop = document.getElementById('modalBackdrop');

// Функция для открытия модального окна
openModalBtn.addEventListener('click', function () {
  console.log('Open button clicked');  // Сообщение для проверки
  modalBackdrop.classList.add('is-visible'); // Открытие модального окна
});

// Функция для закрытия модального окна
closeModalBtn.addEventListener('click', function () {
  modalBackdrop.classList.remove('is-visible'); // Закрытие модального окна
});

// Закрытие модального окна при клике вне его области
modalBackdrop.addEventListener('click', function (event) {
  if (event.target === modalBackdrop) {
    modalBackdrop.classList.remove('is-visible');
  }
});

document.addEventListener('DOMContentLoaded', function() {
    const openMenuBtn = document.querySelector('.open-menu-btn'); // Иконка (три полоски)
    const closeMenuBtn = document.querySelector('.menu-close-btn-mob'); // Кнопка закрытия в меню
    const mobMenu = document.querySelector('.mob-menu'); // Мобильное меню
  
    // Открытие меню
    openMenuBtn.addEventListener('click', function() {
      mobMenu.classList.add('is-open'); // Добавляем класс для показа меню
    });
  
    // Закрытие меню
    closeMenuBtn.addEventListener('click', function() {
      mobMenu.classList.remove('is-open'); // Убираем класс для скрытия меню
    });
  
    // Закрытие меню при клике вне его области
    mobMenu.addEventListener('click', function(event) {
      if (event.target === mobMenu) {
        mobMenu.classList.remove('is-open');
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const openMenuBtn = document.querySelector('.open-menu-btn');
    const closeMenuBtn = document.querySelector('.menu-close-btn-mob');
    const mobMenu = document.querySelector('.mob-menu');
    const menuLinks = document.querySelectorAll('.menu-item a'); // Ссылки в меню
  
    // Открытие меню
    openMenuBtn.addEventListener('click', function() {
      mobMenu.classList.add('is-open');
    });
  
    // Закрытие меню
    closeMenuBtn.addEventListener('click', function() {
      mobMenu.classList.remove('is-open');
    });
  
    // Закрытие меню при клике на любую ссылку
    menuLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobMenu.classList.remove('is-open');
      });
    });
  });