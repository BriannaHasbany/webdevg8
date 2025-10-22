function toggleMenu() {
  const menu = document.getElementById("smallMenu");
  const btn = document.querySelector('[aria-controls="smallMenu"]');
  const isShown = menu.classList.contains("w3-show");

  menu.classList.toggle("w3-show");
  menu.setAttribute("aria-hidden", isShown ? "true" : "false");
  btn.setAttribute("aria-expanded", isShown ? "false" : "true");
}

function toggleDropdown(id) {
  const dropdown = document.getElementById(id).parentElement;
  dropdown.classList.toggle("show");

  // Close any other open dropdowns
  document.querySelectorAll(".dropdown").forEach((d) => {
    if (d !== dropdown) d.classList.remove("show");
  });
}

// Close dropdown if user clicks elsewhere
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    document
      .querySelectorAll(".dropdown")
      .forEach((d) => d.classList.remove("show"));
  }
};

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  const btn = document.getElementById("modeToggle");
  if (document.body.classList.contains("dark-mode")) {
    btn.textContent = "☀️"; // sun for dark mode
  } else {
    btn.textContent = "🌙"; // moon for light mode
  }
}
