// Navbar CSS property in Scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 100) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  
  // Profile section redirecting
  const profileIcon = document.querySelector(".profile-icon");
  profileIcon.addEventListener("click", () => {
    window.location.href = "profile-details.html";
  });
  
  // Movie card hover effects
  const movieCards = document.querySelectorAll(".content-card");
  movieCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.05)";
      card.style.zIndex = "1";
    });
  
    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
      card.style.zIndex = "0";
    });
  });
  
  // Play button functionality
  const playButtons = document.querySelectorAll(".play-btn");
  playButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      const card = button.closest(".content-card");
      const title = card.querySelector(".overlay-title").textContent;
      alert(`Playing ${title}`);
    });
  });
  
  // More info button functionality
  const moreButtons = document.querySelectorAll(".more-btn");
  moreButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.stopPropagation();
      const card = button.closest(".content-card");
      const title = card.querySelector(".overlay-title").textContent;
      alert(`More information about ${title}`);
    });
  });
  
  // Search functionality
  const searchIcon = document.querySelector(".fa-search");
  searchIcon.addEventListener("click", () => {
    const searchTerm = prompt("Enter movie or TV show title:");
    if (searchTerm) {
      alert(`Searching for: ${searchTerm}`);
    }
  });
  