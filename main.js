let year = new Date().getFullYear();

document.getElementsByClassName("year")[0].innerHTML = year;

const goTopBtn = document.querySelector(".go-top-btn");

window.addEventListener("scroll", checkHeight);

function checkHeight() {
  if (window.scrollY > 200) {
    goTopBtn.style.display = "flex";
    // goTopBtn.style.flexDirection = "column";
    // goTopBtn.style.gap = "column";
  } else {
    goTopBtn.style.display = "none";
  }
}

goTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
