function start() {
  let menu = document.querySelector(".mobile-menu");
  let nav = document.querySelector(".navegacion");
  menu.addEventListener("click", function (e) {
    if (e.target.nodeName === "IMG") {
      if (nav.style.display === "none") {
        nav.style.display = "block";
      } else {
        nav.style.display = "none";
      }
    }
  });
}

start();
