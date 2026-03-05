function loadComponent(id, file) {
  fetch(file)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(id).innerHTML = data;
    })
    .catch((err) => console.error("Component load error:", file, err));
}

// Vanaf /pages/ laden we components met ../components/...
loadComponent("navbar", "../components/navbar.html");
loadComponent("footer", "../components/footer.html");