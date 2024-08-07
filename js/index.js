// Получить модальное окно
var modal = document.getElementById("modal");

// Получить ссылку, которая открывает модальное окно
var btn = document.getElementById("pen-link");

// Получить элемент <span>, который закрывает модальное окно
var span = document.getElementsByClassName("close-button")[0];

// Когда пользователь кликает на ссылку, открыть модальное окно
btn.onclick = function(event) {
  event.preventDefault(); // Предотвращение перехода по ссылке
  modal.style.display = "block";
}

// Когда пользователь кликает на <span> (x), закрыть модальное окно
span.onclick = function() {
  modal.style.display = "none";
}

// Когда пользователь кликает в любом месте вне модального окна, закрыть его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
