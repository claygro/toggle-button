let toogle = document.querySelector(".toggle");
let body = document.querySelector("body");
let d = 0;
function toggle() {
  toogle.classList.toggle("active");
  if (d === 0) {
    body.style.backgroundColor = "black";
    d = 1;
  } else {
    body.style.backgroundColor = "white";
    d = 0;
  }
}
