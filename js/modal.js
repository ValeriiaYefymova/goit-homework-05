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
