function toggleMenu() {
  const nav = document.getElementById("navLinks");
  if (!nav) return;
  nav.classList.toggle("active");
}

// sluit mobiel menu na klik op link
document.addEventListener("click", (e) => {
  const nav = document.getElementById("navLinks");
  if (!nav) return;
  if (e.target.matches("#navLinks a")) nav.classList.remove("active");
});
