const navigation = document.querySelector("nav");
const menuButton = document.querySelector(".hamburger-menu");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
});
