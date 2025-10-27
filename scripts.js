// -------------------- TOGGLE MOBILE MENU --------------------
function toggleMenu() {
  const menu = document.getElementById("smallMenu");
  const btn = document.querySelector('[aria-controls="smallMenu"]');
  const isShown = menu.classList.contains("w3-show");

  menu.classList.toggle("w3-show");
  menu.setAttribute("aria-hidden", isShown ? "true" : "false");
  btn.setAttribute("aria-expanded", isShown ? "false" : "true");
}

// -------------------- TOGGLE DROPDOWNS --------------------
function toggleDropdown(id) {
  const target = document.getElementById(id);
  if (!target) return;

  // Desktop dropdown
  if (target.classList.contains("dropdown-content")) {
    const parent = target.closest(".dropdown");

    // Close all other desktop dropdowns
    document.querySelectorAll(".dropdown.show").forEach((drop) => {
      if (drop !== parent) drop.classList.remove("show");
    });

    // Toggle this dropdown
    parent.classList.toggle("show");
  }

  // Mobile dropdown
  if (target.classList.contains("w3-bar-block")) {
    // Close other mobile dropdowns
    document
      .querySelectorAll("#smallMenu .w3-bar-block.w3-show")
      .forEach((el) => {
        if (el.id !== id) el.classList.remove("w3-show");
      });

    target.classList.toggle("w3-show");
  }
}

// -------------------- CLICK OUTSIDE TO CLOSE --------------------
document.addEventListener("click", function (event) {
  // Ignore clicks inside dropdowns, buttons, or the mobile menu
  if (
    event.target.closest(".dropbtn") ||
    event.target.closest(".dropdown-content") ||
    event.target.closest("#smallMenu") ||
    event.target.closest(".menu-toggle")
  )
    return;

  // Close all desktop dropdowns
  document
    .querySelectorAll(".dropdown.show")
    .forEach((drop) => drop.classList.remove("show"));

  // Close all mobile dropdowns
  document
    .querySelectorAll("#smallMenu .w3-bar-block.w3-show")
    .forEach((el) => el.classList.remove("w3-show"));
});

// -------------------- TOGGLE DARK MODE --------------------
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");

  const btnDesktop = document.getElementById("modeToggle");
  const btnMobile = document.getElementById("modeToggleMobile");

  if (document.body.classList.contains("dark-mode")) {
    if (btnDesktop) btnDesktop.textContent = "☀️";
    if (btnMobile) btnMobile.textContent = "☀️";
  } else {
    if (btnDesktop) btnDesktop.textContent = "🌙";
    if (btnMobile) btnMobile.textContent = "🌙";
  }
}

// -------------------- HEADER INJECTION --------------------
document.addEventListener("DOMContentLoaded", function () {
  const headerHTML = `
    <header class="site-header">
      <div class="header-overlay">
        <div class="header-content">
          <img src="images/logo.png" alt="Bakery Logo" class="logo" />
          <div class="header-text">
            <h1>Cakes by Design Edible Art</h1>
          </div>
        </div>

        <!-- Desktop Navigation -->
        <nav class="header-nav menu-center w3-hide-small">
          <a href="index.html" class="nav-item">Home</a>
          <a href="cakeAbout.html" class="nav-item">About Us</a>
          <a href="cakeServices.html" class="nav-item">Services</a>

          <div class="dropdown">
            <button class="dropbtn" onclick="toggleDropdown('galleryDropdownDesktop')">Gallery ▾</button>
            <div id="galleryDropdownDesktop" class="dropdown-content">
              <a href="weddingGallery.html">Weddings</a>
              <a href="birthdayGallery.html">Birthdays</a>
              <a href="religiousGallery.html">Religious</a>
              <a href="workGallery.html">Corporate/Retirement</a>
              <a href="gradGallery.html">Graduation</a>
              <a href="holidayGallery.html">Holidays</a>
              <a href="photoGallery.html">Full Photos</a>
              <a href="cupcakeGallery.html">Cupcakes & Sweets</a>
            </div>
          </div>

          <div class="dropdown">
            <button class="dropbtn" onclick="toggleDropdown('contactDropdownDesktop')">Contact ▾</button>
            <div id="contactDropdownDesktop" class="dropdown-content">
              <a href="cakeContact.html">Contact Info</a>
              <a href="cakeDirections.html">Directions</a>
              <a href="cakeOrder.html">Order Form</a>
              <a href="cakeFAQ.html">FAQs</a>
            </div>
          </div>

          <a href="cakeBlog.html" class="nav-item">Blog</a>
          <button id="modeToggle" class="mode-toggle" onclick="toggleDarkMode()">🌙</button>
        </nav>

        <!-- Hamburger for Mobile -->
        <button
          class="w3-bar-item w3-button w3-hide-medium w3-hide-large menu-toggle"
          aria-controls="smallMenu"
          aria-expanded="false"
          onclick="toggleMenu()"
        >
          <i class="fa fa-bars"></i>
        </button>
      </div>
    </header>

    <!-- Mobile Menu -->
    <div id="smallMenu" class="w3-bar-block w3-hide w3-hide-medium w3-hide-large w3-center mobile-menu">
      <a href="index.html" class="w3-bar-item w3-button">Home</a>
      <a href="cakeAbout.html" class="w3-bar-item w3-button">About Us</a>
      <a href="cakeServices.html" class="w3-bar-item w3-button">Services</a>

      <button onclick="toggleDropdown('galleryDropdown')" class="w3-bar-item w3-button">Gallery ▾</button>
      <div id="galleryDropdown" class="w3-hide w3-bar-block">
        <a href="weddingGallery.html" class="w3-bar-item w3-button">Weddings</a>
        <a href="birthdayGallery.html" class="w3-bar-item w3-button">Birthdays</a>
        <a href="religiousGallery.html" class="w3-bar-item w3-button">Religious</a>
        <a href="workGallery.html" class="w3-bar-item w3-button">Corporate/Retirement</a>
        <a href="gradGallery.html" class="w3-bar-item w3-button">Graduation</a>
        <a href="holidayGallery.html" class="w3-bar-item w3-button">Holidays</a>
        <a href="photoGallery.html" class="w3-bar-item w3-button">Full Photos</a>
        <a href="cupcakeGallery.html" class="w3-bar-item w3-button">Cupcakes & Sweets</a>
      </div>

      <button onclick="toggleDropdown('contactDropdown')" class="w3-bar-item w3-button">Contact ▾</button>
      <div id="contactDropdown" class="w3-hide w3-bar-block">
        <a href="cakeContact.html" class="w3-bar-item w3-button">Contact Info</a>
        <a href="cakeDirections.html" class="w3-bar-item w3-button">Directions</a>
        <a href="cakeOrder.html" class="w3-bar-item w3-button">Order Form</a>
        <a href="cakeFAQ.html" class="w3-bar-item w3-button">FAQs</a>
      </div>

      <a href="cakeBlog.html" class="w3-bar-item w3-button">Blog</a>
    </div>
    <button id="modeToggleMobile" class="mode-toggle" onclick="toggleDarkMode()">🌙</button>
  `;

  const headerContainer = document.getElementById("header");
  if (headerContainer) headerContainer.innerHTML = headerHTML;
});

// -------------------- FOOTER INJECTION --------------------
document.addEventListener("DOMContentLoaded", function () {
  const footerHTML = `
   <footer class="site-footer">
      <div class="footer-overlay"></div>
      <div class="footer-content">
        <div class="footer-contact">
          <p><strong>Contact Us</strong></p>
          <p>Email: cakesbydesignedibleart@hotmail.com</p>
          <p>Phone: (978) 975-8877</p>
          <p>2-4 Johnson St</p>
          <p>North Andover, MA 01845</p>
        </div>

        <div class="footer-recommend">
          <a
            href="https://www.alignable.com/north-andover-ma/cakes-by-design-edible-art"
            target="_blank"
            ><button>🌟 Recommended by Locals</button></a
          >
        </div>

        <div class="footer-socials">
          <a href="https://www.facebook.com/CakesByDesignMA" target="_blank"
            ><i class="fab fa-facebook-f"></i
          ></a>
          <a href="https://x.com/CakesByDesign12" target="_blank"
            ><i class="fab fa-twitter"></i
          ></a>
          <a href="https://www.instagram.com/cakesbydesignea/" target="_blank"
            ><i class="fab fa-instagram"></i
          ></a>
          <a href="https://www.pinterest.com/cakesbydesignma/" target="_blank"
            ><i class="fab fa-pinterest-p"></i
          ></a>
          <a
            href="https://www.google.com/search?q=cakes+by+design+edible+art+north+andover+ma&oq=cakes+by+design+edible+art+north+andover+ma&aqs=chrome..69i57j69i60.6871j0j7&sourceid=chrome&ie=UTF-8#lrd=0x89e305dde5fee3e7:0x2b1afae4f3cc8987,1,,"
            target="_blank"
            ><i class="fab fa-google"></i
          ></a>
        </div>
      </div>
    </footer>
  `;

  const footerContainer = document.getElementById("footer");
  if (footerContainer) footerContainer.innerHTML = footerHTML;
});

// -------------------- IMAGE CAROUSEL --------------------
let slideIndex = 0;
const slidesContainer = document.querySelector(".carousel-slides");
const slides = document.querySelectorAll(".carousel-slides img");
const totalSlides = slides.length;

// Move to next slide automatically
function nextSlide() {
  slideIndex = (slideIndex + 1) % totalSlides;
  updateSlidePosition();
}

// Move to previous slide manually
function prevSlide() {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  updateSlidePosition();
}

// Update the transform to show the current slide
function updateSlidePosition() {
  slidesContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Auto-slide every 4 seconds
let autoSlide = setInterval(nextSlide, 4000);

// Optional: reset timer when manually navigating
document.querySelectorAll(".carousel-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 4000);
  });
});

// Open the lightbox
function openLightbox(imgSrc) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightboxImg.src = imgSrc;
  lightbox.classList.add('show');
}

// Close the lightbox
function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  lightbox.classList.remove('show');
}

