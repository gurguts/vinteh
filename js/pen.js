var modal = document.getElementById("modal-pen");

var btn = document.getElementById("pen-link");
var btn2 = document.getElementById("button-pen");

var span = document.getElementsByClassName("close-button-pen")[0];

btn.onclick = function(event) {
  event.preventDefault();
  modal.style.display = "block";
}

btn2.onclick = function(event) {
  event.preventDefault();
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
