const button = document.getElementById("change-background-button");
const content = document.querySelector(".content");
const icons = document.querySelectorAll(".icon");

button.addEventListener("click", toggleClass);

function toggleClass() {
  if (content.classList.contains("highlight")) {
    content.classList.remove("highlight");
    icons.forEach(function(icon) {
      icon.classList.remove("theme");
    });
  } else {
    content.classList.add("highlight");
    icons.forEach(function(icon) {
      icon.classList.add("theme");
    });
  }
}