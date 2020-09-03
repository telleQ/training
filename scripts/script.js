// !Кнопка вверх

let upBtn = document.querySelector(".up");
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 200) {
    //когда пользователь прокручивает окно на 200 пикселей, то появляется кнопка вверх, если меньше 200 пикселей, то кнопка вверх не отображается.
    upBtn.classList.add("shown");
  } else {
    upBtn.classList.remove("shown");
  }
});

upBtn.addEventListener("click", function () {
  window.scrollTo(0, 0);
});
