// window.addEventListener("DOMContentLoaded", (event) => {
//   const burgerIcon = document.querySelector(".burger-icon");
//   const sidebar = document.querySelector(".sidebar");
//   const closeIcon = document.querySelector(".close-icon");

//   burgerIcon.addEventListener("click", () => {
//     sidebar.classList.add("menu-active");
//   });

//   closeIcon.addEventListener("click", () => {
//     console.log("tes");
//     sidebar.classList.remove("menu-active");
//   });

// });

// Latihan
const humans = [
  { id: 2, nama: "aba", kota: "jogja" },
  { id: 1, nama: "baba", kota: "jakarta" },
  { id: 3, nama: "caba", kota: "jakarta" },
];

const result = humans.filter((human) => {
  if (human.nama === "aba") {
    return (human.is_add = true);
  }
  return human.is_add;
});
console.log("result", result);
