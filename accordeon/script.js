const allTitles = document.querySelectorAll(".title");
const allContents = document.querySelectorAll(".content");

allTitles.forEach((item, i) => item.addEventListener("click", showContent));

function showContent() {
  console.log(this);
  this.nextElementSibling.classList.toggle("hidden");
}

// allContents[i].classList.toggle("hidden");
// this.nextElementSibling.classList.toggle("hidden");
