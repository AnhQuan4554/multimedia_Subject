const inforNavbar_items = document.querySelectorAll(".inforNavbar_item");
const navBar_itemsSpan = document.querySelectorAll(".navBar_item span");
navBar_itemsSpan.forEach((item, index) => {
  item.addEventListener("click", () => {
    document
      .querySelector(".navBar_item span.active")
      .classList.remove("active");
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
  btnDown.classList.toggle("show");
  // wrapInforTeacher_items[1].classList.toggle("show");
  wrapInforTeacher_items[2].classList.toggle("show");
});
