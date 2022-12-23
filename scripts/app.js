let toggleBtn = document.querySelector(".menu-toggle");
let btnIcon = document.querySelector("#toggleIcon");
let menu = document.querySelector(".nav-menu");

toggleBtn.addEventListener("click", function () {
  if (btnIcon.classList.contains("fa-bars")) {
    menu.style.left = 0;
    btnIcon.classList.replace("fa-bars", "fa-times");
  } else {
    menu.style.left = "-256px";
    btnIcon.classList.replace("fa-times", "fa-bars");
  }
});
