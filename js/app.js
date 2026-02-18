// const btn = document.querySelector('.menu-btn');
// const menu = document.querySelector('.menu');


btn.addEventListener('click', () => {
  menu.classList.toggle('show');
});

let x = 5;
let y = 2026
let sum = x + y;
// x = parseInt(x);
console.log(sum);




s = 5;
function mttest (){

}

const buttons = document.querySelectorAll(".container-card button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // حذف active از همه دکمه‌ها
    buttons.forEach(b => b.classList.remove("active"));

    // اضافه کردن active به دکمه‌ای که کلیک شده
    btn.classList.add("active");
  });
});
