// for querySelector
const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw Error(`please check the class names, there is no ${selector}`);
};
// for querySelectorAll
const getAllElement = (selector) => {
  const element = document.querySelectorAll(selector);
  if (element) return element;
  throw Error(
    `All-Selector Say! please check the class names, there is no ${selector}`
  );
};
// bar closer
function barCloser() {
  if (toogleClick == 0) {
    icon.classList = "fa fa-times icon";
    return (toogleClick = 1);
  }
  if (toogleClick == 1) {
    icon.classList = "fa fa-bars icon";
    return (toogleClick = 0);
  }
}
const toggle_btn = getElement(".toggle-btn");
const nav_links = getElement(".nav-links");
const icon = getElement(".icon");
// const loader_wrapper = getElement(".loader-wrapper");
let toogleClick = 0;
toggle_btn.addEventListener("click", () => {
  nav_links.classList.toggle("show-link");
  barCloser();
});
const nav_link = getAllElement(".link");
console.log(nav_link);
// for nav links
nav_link.forEach((check) => {
  check.addEventListener("click", () => {
    nav_links.classList.toggle("show-link");
    barCloser();
  });
});
// after load window

// window.addEventListener("load", () => {
//   removeLoader();
// });
// function removeLoader() {
//   loader_wrapper.remove();
// }
