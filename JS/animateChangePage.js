const navigationLinks = document.querySelectorAll(".navigation_link");

document.addEventListener("DOMContentLoaded", animateChangePage);

function animateChangePage() {
  navigationLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      document.body.classList.add("animate__animated", "animate__zoomOutDown");
      setTimeout(function () {
        window.location.href = link.href;
      }, 1000);
    });
  });
}
