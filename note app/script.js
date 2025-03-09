// const wrapper = document.querySelector(".wrapper");
// const plus = document.querySelector(".plus");
// // let notes = document.querySelectorAll(".textarea");

// // wrapper.innerHTML = localStorage.getItem("notes");

// function show() {
//   const savedNotes = localStorage.getItem("notes");
//   if (savedNotes) {
//     wrapper.innerHTML = savedNotes;
//   }
// }

// function updateStorage() {
//   localStorage.setItem("notes", wrapper.innerHTML);
// }

// updateStorage();

// plus.addEventListener("click", function () {
//   let div = document.createElement("div");
//   let img = document.createElement("img");
//   let textarea = document.createElement("textarea");

//   div.classList.add("block");
//   textarea.classList.add("textarea");
//   textarea.setAttribute("placeholder", "enter note...");
//   img.src = "./icons/delete_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";

//   div.appendChild(textarea);
//   div.appendChild(img);
//   wrapper.appendChild(div);

//   updateStorage();
// });

// wrapper.addEventListener("click", function (e) {
//   if (e.target.tagName === "IMG") {
//     e.target.parentElement.remove();
//     updateStorage();
//     console.log(localStorage.getItem("notes"));
//   } else if (e.target.tagName === "TEXTAREA") {
//     const notes = document.querySelectorAll(".textarea");
//     console.log(notes);

//     notes.forEach((item) =>
//       item.addEventListener("keyup", function () {
//         updateStorage();
//       })
//     );
//   }
// });

// show();

const wrapper = document.querySelector(".wrapper");
const plus = document.querySelector(".plus");

function show() {
  const savedNotes = localStorage.getItem("notes");
  if (savedNotes) {
    wrapper.innerHTML = savedNotes;
  }
}

function updateStorage() {
  localStorage.setItem("notes", wrapper.innerHTML);
}

plus.addEventListener("click", function () {
  const div = document.createElement("div");
  const img = document.createElement("img");
  const textarea = document.createElement("textarea");

  div.classList.add("block");
  textarea.classList.add("textarea");
  textarea.setAttribute("placeholder", "enter note...");
  img.src = "./icons/delete_24dp_5F6368_FILL0_wght400_GRAD0_opsz24.svg";

  div.appendChild(textarea);
  div.appendChild(img);
  wrapper.appendChild(div);

  updateStorage();
});

wrapper.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "TEXTAREA") {
    const notes = document.querySelectorAll(".textarea");
    notes.forEach((item) =>
      item.addEventListener("keyup", function () {
        updateStorage();
      })
    );
  }
});

// Инициализация
show();
