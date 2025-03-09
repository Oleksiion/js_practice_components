const allTabs = document.querySelectorAll(".tab_item");
const allContents = document.querySelectorAll(".content_item");

allTabs.forEach((item) =>
  item.addEventListener("click", function () {
    allContents.forEach((item) => item.classList.add("hidden"));
    const tab = this.dataset.tab;

    const content = document.querySelector(`#` + tab);

    content.classList.remove("hidden");
  })
);
