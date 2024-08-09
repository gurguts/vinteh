document.addEventListener("DOMContentLoaded", function() {
  fetch('../stock_service.php')
    .then(response => response.text())
    .then(data => {
      document.getElementById('stockQuantity').textContent = data + 'л на складі!';
    })
    .catch(error => console.error('Помилка при отриманні кількості на складі:', error));
});

window.addEventListener('scroll', function() {
  var fixedElement = document.getElementById('pen-container');
  var footer = document.getElementById('footer-container');

  var footerTop = footer.getBoundingClientRect().top + window.pageYOffset;

  // Высота окна
  var windowHeight = window.innerHeight;

  // Высота фиксированного элемента
  var fixedElementHeight = fixedElement.offsetHeight;

  // Текущая позиция прокрутки страницы
  var scrollPosition = window.pageYOffset;

  // Если нижняя часть фиксированного элемента достигает верхней части футера
  if (scrollPosition + windowHeight - fixedElementHeight >= footerTop) {
    // Переключаем позицию на absolute и фиксируем элемент над футером
    fixedElement.style.position = 'absolute';
    fixedElement.style.bottom = (document.body.scrollHeight - footerTop + fixedElementHeight) + 'px';
    fixedElement.style.left = '2vw'; // Сохраняем горизонтальное смещение
  } else {
    // Возвращаем элемент в фиксированное положение
    fixedElement.style.position = 'fixed';
    fixedElement.style.bottom = '2vw';
    fixedElement.style.left = '2vw';
  }
});
