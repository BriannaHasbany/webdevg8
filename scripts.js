function toggleMenu() {
  const menu = document.getElementById("smallMenu");
  const btn = document.querySelector('[aria-controls="smallMenu"]');
  const isShown = menu.classList.contains("w3-show");

  menu.classList.toggle("w3-show");
  menu.setAttribute("aria-hidden", isShown ? "true" : "false");
  btn.setAttribute("aria-expanded", isShown ? "false" : "true");
}

function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  dropdown.classList.toggle("w3-hide");
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  const btn = document.getElementById("modeToggle");
  if (document.body.classList.contains("dark-mode")) {
    btn.textContent = "☀️"; // sun for dark mode
  } else {
    btn.textContent = "🌙"; // moon for light mode
  }
}