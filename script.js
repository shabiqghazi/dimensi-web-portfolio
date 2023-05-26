const header = document.getElementsByTagName("header");
document.addEventListener("scroll", function () {
  console.log(scrollY);
  if (scrollY > 24) {
    header.style.boxShadow = "0px 2px 5px rgba(0, 0, 0, 0.3)";
  } else {
    header.style.boxShadow = "0px 0px 0px";
  }
});
