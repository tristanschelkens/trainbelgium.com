function toggleMenu() {
  const nav = document.getElementById("navLinks");
  if (!nav) return;
  nav.classList.toggle("active");
}

// (nice) Sluit menu automatisch als je op een link klikt (mobiel)
document.addEventListener("click", (e) => {
  const nav = document.getElementById("navLinks");
  if (!nav) return;

  if (e.target.matches("#navLinks a")) {
    nav.classList.remove("active");
  }
});