const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

const wrapper = document.querySelector(".list-wrapper");

btn.addEventListener("click", function () {
  //create LI
  if (input.value) {
    let li = document.createElement("li");
    li.textContent = input.value;
    li.classList.add("list-item");
    wrapper.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
});

wrapper.addEventListener("click", function (e) {
  console.log(e.target.tagName);
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
});
