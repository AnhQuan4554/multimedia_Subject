const inforNavbar_items = document.querySelectorAll(".inforNavbar_item");
const navBar_item = document.querySelectorAll(".navBar_item");
navBar_item.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    document.querySelector(".navBar_item.active").classList.remove("active");
    item.classList.add("active"); // thêm active vào từng item
    // xuất hiện thông tin
    document
      .querySelector(".inforNavbar_item.active")
      .classList.remove("active");
    inforNavbar_items[index].classList.add("active");
  });
});

/// xuât hiện thêm các ảnh
const wrapInforTeacher = document.querySelector(".wrapInforTeacher");
const btnDown = document.querySelector(".btnDown");
const wrapInforTeacher_items = document.querySelectorAll(
  ".wrapInforTeacher_item"
);

btnDown.addEventListener("click", () => {
  wrapInforTeacher.classList.toggle("show");

  if (btnDown.classList.contains("show")) {
    btnDown.classList.remove("show");
    btnDown.classList.add("unShow");
  } else {
    btnDown.classList.add("show");
  }
  wrapInforTeacher_items[2].classList.toggle("show");
});
