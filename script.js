function showNavbarLinks() {
  const navbar = document.getElementById("navbar-links");
  if (navbar.style.display === "flex") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "flex";
  }
}
