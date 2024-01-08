const btn = document.querySelector(".btn");
const fireworks = document.querySelectorAll(".fireworks div");
const congratulation = document.querySelector(".congratulation");

btn.addEventListener("click", (e) => {
  btn.classList.add("fade");
  setTimeout(function () {
    btn.closest(".wrapper-btn ").remove();
    fireworks.forEach((firework) => {
      firework.classList.add("firework");
    });
    congratulation.hidden = false;
  }, 1200);
});