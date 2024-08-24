document.querySelector(".flag-dropdown").addEventListener("click", function () {
  const dropdownList = document.querySelector(".dropdown-list");
  dropdownList.style.display =
    dropdownList.style.display === "block" ? "none" : "block";
});

document.querySelectorAll(".dropdown-list li").forEach((item) => {
  item.addEventListener("click", function () {
    const selectedFlag = this.querySelector("img").src;
    const selectedCode = this.dataset.code;
    const phoneInput = document.querySelector("#phone-number");

    // Встановлюємо прапорець і код країни
    document.querySelector(".selected-flag").src = selectedFlag;
    phoneInput.value = selectedCode + " ";
    phoneInput.focus();

    // Приховуємо список
    document.querySelector(".dropdown-list").style.display = "none";
  });
});

document.addEventListener("click", function (event) {
  const isClickInside = document
    .querySelector(".phone-input-container")
    .contains(event.target);
  if (!isClickInside) {
    document.querySelector(".dropdown-list").style.display = "none";
  }
});

document
  .querySelector("#phone-number")
  .addEventListener("input", function (event) {
    let input = event.target.value;

    // Видаляємо всі небажані символи
    input = input.replace(/\D/g, "");

    // Форматуємо номер телефону
    let formatted = "";
    if (input.length > 0) {
      formatted = input.substring(0, 3); // Перша частина номера без форматування
    }
    if (input.length > 3) {
      formatted = formatted + " (" + input.substring(3, 6) + ")"; // Далі три цифри в дужках
    }
    if (input.length > 6) {
      formatted = formatted + " " + input.substring(6, 9); // Далі три цифри
    }
    if (input.length > 9) {
      formatted = formatted + "-" + input.substring(9, 12); // І кінцеві чотири цифри
    }

    // Встановлюємо форматоване значення назад в інпут
    event.target.value = formatted;
  });

let icons = document.querySelectorAll(".hide-show-list");
let texts = document.querySelectorAll(".text-show-hide-list");
let foto = document.querySelectorAll(".wrapper-svg");
icons.forEach((icon, index) => {
  icon.addEventListener("click", () => {
    texts[index].classList.toggle("hide");
    foto[index].classList.toggle("transform");
  });
});

let burger = document.querySelector(".burger");
let menu = document.querySelector(".menu");
let close = document.querySelector(".close img");
let body = document.querySelector("body");

burger.addEventListener("click", () => {
  menu.classList.add("menu-transform");
  body.classList.add("none-scroll");
});
close.addEventListener("click", () => {
  menu.classList.remove("menu-transform");
  body.classList.remove("none-scroll");
});
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !burger.contains(e.target)) {
    menu.classList.remove("menu-transform");
    body.classList.remove("none-scroll");
  }
});
