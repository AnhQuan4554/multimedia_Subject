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
