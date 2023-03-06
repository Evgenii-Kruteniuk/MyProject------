const containerNode = document.querySelector(".container");
const btnNode1 = document.querySelector(".js-btn1");
const btnNode2 = document.querySelector(".js-btn2");
const btnNode3 = document.querySelector(".js-btn3");
const btnNode4 = document.querySelector(".js-btn4");
const responseNode = document.querySelector(".footer");

containerNode.addEventListener(
  "click",
  function (event) {
    if (event.target.closest(".js-btn3")) {
      btnNode3.classList.add("active");
      responseNode.textContent = "Вы ответили верно!!!";
    } else {
      event.target.classList.add("act");
      responseNode.textContent = "Ваш ответ не верный!";
    }
  },
  { once: true }
);
