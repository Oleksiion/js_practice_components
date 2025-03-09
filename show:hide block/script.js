const btn = document.querySelector(".btn");
const content = document.querySelector(".content");

btn.addEventListener("click", function () {
  content.classList.toggle("hidden");

  if (content.classList.contains("hidden")) {
    btn.textContent = "show block";
  } else {
    btn.textContent = "hide block";
  }
});
