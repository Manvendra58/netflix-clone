// Carousel functionality (support multiple carousels)
document.querySelectorAll('.carousel-container').forEach(container => {
  const list = container.querySelector('.trending-list');
  container.querySelector('.carousel-btn.left').onclick = () => {
    list.scrollBy({ left: -200, behavior: 'smooth' });
  };
  container.querySelector('.carousel-btn.right').onclick = () => {
    list.scrollBy({ left: 200, behavior: 'smooth' });
  };
});

// Modal functionality
const modal = document.getElementById('loginModal');
const openModalBtns = [document.querySelector('.signin-btn'), ...document.querySelectorAll('.signup-btn')];
openModalBtns.forEach(btn => btn && btn.addEventListener('click', () => { modal.style.display = 'flex'; }));
document.querySelector('.close-btn').onclick = () => { modal.style.display = 'none'; };
window.onclick = (e) => { if (e.target === modal) modal.style.display = 'none'; };

// Hamburger menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.onclick = () => navLinks.classList.toggle('active');

// FAQ Accordion with animation
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.parentElement;
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
    item.classList.toggle('active');
  });
});

// Dark/Light mode toggle
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.onclick = () => {
  document.body.classList.toggle('light-mode');
  themeToggle.textContent = document.body.classList.contains('light-mode') ? '🌞' : '🌙';
};

// Play button animation (optional subtle effect)
document.querySelectorAll('.trending-item').forEach(item => {
  const playBtn = item.querySelector('.play-btn');
  if (playBtn) {
    item.addEventListener('mouseenter', () => {
      playBtn.style.transform = 'translate(-50%, -50%) scale(1.15)';
    });
    item.addEventListener('mouseleave', () => {
      playBtn.style.transform = 'translate(-50%, -50%) scale(1)';
    });
  }
});

// Movie Data
const movieData = {
    trending: [
        {
            id: 1,
            title: "Stranger Things",
            image: "https://m.media-amazon.com/images/M/MV5BMDZkYmVhNjMtNWU4MC00MDQxLWE3MjYtZGMzZWI1ZjhlOWJmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
            genre: "Sci-Fi & Fantasy",
            description: "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl."
        },
        {
            id: 2,
            title: "The Witcher",
            image: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
            genre: "Fantasy",
            description: "Geralt of Rivia, a mutated monster-hunter for hire, journeys toward his destiny in a turbulent world where people often prove more wicked than beasts."
        },
        {
            id: 3,
            title: "Money Heist",
            image: "https://m.media-amazon.com/images/M/MV5BNGU4NzlmNjItMDRhYy00MWEzLWJhYzgtYzI5M2YzYmM1YzU0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
            genre: "Crime Drama",
            description: "An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain."
        }
    ],
    topPicks: [
        {
            id: 4,
            title: "The Queen's Gambit",
            image: "https://m.media-amazon.com/images/M/MV5BM2EwMmRhMmUtMzBmMS00ZDQ3LTg4OGEtNjlkODk3ZTMxMmJlXkEyXkFqcGdeQXVyMjM5ODk1NDU@._V1_.jpg",
            genre: "Drama",
            description: "Orphaned at the tender age of nine, prodigious introvert Beth Harmon discovers and masters the game of chess in 1960s USA."
        },
        {
            id: 5,
            title: "Dark",
            image: "https://m.media-amazon.com/images/M/MV5BOTk2NzUyOTctZDdlMS00MDJlLTgzNTEtNzQzYjFhNjA0YjBjXkEyXkFqcGdeQXVyMjg1NDcxNDE@._V1_.jpg",
            genre: "Sci-Fi & Fantasy",
            description: "A missing child sets four families on a frantic hunt for answers as they unearth a mind-bending mystery that spans three generations."
        },
        {
            id: 6,
            title: "The Crown",
            image: "https://m.media-amazon.com/images/M/MV5BZmY0MzBlNjctNTRmNy00Njk3LWE2NzVtYzE5ZGU5Njk2YzIwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
            genre: "Drama",
            description: "This drama follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century."
        }
    ]
};

// User Profiles
const profiles = [
    { id: 1, name: "Profile 1", avatar: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" },
    { id: 2, name: "Profile 2", avatar: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" },
    { id: 3, name: "Profile 3", avatar: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" },
    { id: 4, name: "Profile 4", avatar: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" }
];

// DOM Elements
const closeBtn = document.querySelector('.close-btn');
const signinBtn = document.querySelector('.signin-btn');
const signupBtn = document.querySelector('.signup-btn');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const profileSelection = document.getElementById('profileSelection');
const mainContent = document.getElementById('mainContent');
const trendingList = document.querySelector('.trending-list');
const topPicksList = document.querySelector('.top-picks .trending-list');
const myListSection = document.getElementById('myList');
const myListContainer = document.querySelector('.my-list-container');
const nav = document.querySelector('nav');
const headerContent = document.querySelector('.header-content');

// State Management
let currentUser = null;
let currentProfile = null;
let watchlist = [];
let isScrolled = false;

// Initialize
function init() {
    // Check if user is logged in
    const savedUser = localStorage.getItem('currentUser');
    const savedProfile = localStorage.getItem('currentProfile');
    const savedWatchlist = localStorage.getItem('watchlist');

    if (savedUser && savedProfile) {
        currentUser = JSON.parse(savedUser);
        currentProfile = JSON.parse(savedProfile);
        watchlist = savedWatchlist ? JSON.parse(savedWatchlist) : [];
        showMainContent();
    } else {
        showLoginModal();
    }

    // Load movie data
    loadMovies();
    setupEventListeners();
}

// Event Listeners Setup
function setupEventListeners() {
    // Navigation
    signinBtn.addEventListener('click', showLoginModal);
    signupBtn.addEventListener('click', showSignupModal);
    closeBtn.addEventListener('click', hideModal);

    // Forms
    loginForm.addEventListener('submit', handleLogin);
    signupForm.addEventListener('submit', handleSignup);

    // Scroll Events
    window.addEventListener('scroll', handleScroll);

    // Language Selector
    const languageSelect = document.querySelector('footer select');
    if (languageSelect) {
        languageSelect.addEventListener('change', handleLanguageChange);
    }

    // FAQ Accordion
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const item = question.parentElement;
            item.classList.toggle('active');
        });
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            hideModal();
        }
    });

    // Handle escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hideModal();
        }
    });
}

// Scroll Handler
function handleScroll() {
    const scrollPosition = window.scrollY;
    
    // Update navigation background
    if (scrollPosition > 50 && !isScrolled) {
        nav.style.background = 'var(--netflix-black)';
        isScrolled = true;
    } else if (scrollPosition <= 50 && isScrolled) {
        nav.style.background = 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)';
        isScrolled = false;
    }
}

// Language Change Handler
function handleLanguageChange(e) {
    const language = e.target.value;
    // Here you would typically implement language switching logic
    console.log('Language changed to:', language);
}

// Modal Functions
function showLoginModal() {
    modal.style.display = 'flex';
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
    document.getElementById('loginEmail').focus();
}

function showSignupModal() {
    modal.style.display = 'flex';
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
    document.getElementById('signupEmail').focus();
}

function hideModal() {
    modal.style.display = 'none';
    // Clear form inputs
    loginForm.reset();
    signupForm.reset();
}

// Authentication Functions
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    // Simple validation (replace with real auth later)
    if (email && password) {
        currentUser = { email };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        showProfileSelection();
    }
}

function handleSignup(e) {
    e.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    // Simple validation (replace with real auth later)
    if (email && password) {
        currentUser = { email };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        showProfileSelection();
    }
}

// Profile Selection
function showProfileSelection() {
    hideModal();
    profileSelection.style.display = 'flex';
    mainContent.style.display = 'none';

    const profilesContainer = document.querySelector('.profiles-container');
    profilesContainer.innerHTML = profiles.map(profile => `
        <div class="profile" onclick="selectProfile(${profile.id})">
            <img src="${profile.avatar}" alt="${profile.name}">
            <span>${profile.name}</span>
        </div>
    `).join('');
}

function selectProfile(profileId) {
    currentProfile = profiles.find(p => p.id === profileId);
    localStorage.setItem('currentProfile', JSON.stringify(currentProfile));
    showMainContent();
}

// Content Display
function showMainContent() {
    profileSelection.style.display = 'none';
    mainContent.style.display = 'block';
    loadMovies();
    updateWatchlist();
    updateHeaderContent();
}

function updateHeaderContent() {
    if (currentProfile) {
        headerContent.innerHTML = `
            <h1>Welcome back, ${currentProfile.name}!</h1>
            <h2>Continue watching or discover something new</h2>
        `;
    }
}

// Movie Loading
function loadMovies() {
    // Load My List
    const myListContainer = document.querySelector('.my-list-container');
    if (watchlist.length === 0) {
        myListContainer.innerHTML = '<p class="empty-list">Your list is empty. Add movies to get started!</p>';
    } else {
        myListContainer.innerHTML = '';
        watchlist.forEach(movieId => {
            const movie = [...movieData.trending, ...movieData.topPicks].find(m => m.id === movieId);
            if (movie) {
                myListContainer.appendChild(createMovieCard(movie));
            }
        });
    }

    // Load Trending
    const trendingContainer = document.querySelector('.trending-container');
    trendingContainer.innerHTML = '';
    movieData.trending.forEach(movie => {
        trendingContainer.appendChild(createMovieCard(movie));
    });

    // Load Top Picks
    const topPicksContainer = document.querySelector('.top-picks-container');
    topPicksContainer.innerHTML = '';
    movieData.topPicks.forEach(movie => {
        topPicksContainer.appendChild(createMovieCard(movie));
    });

    // Setup carousel navigation for all sections
    setupCarouselNavigation('.my-list-container', '.my-list-prev', '.my-list-next');
    setupCarouselNavigation('.trending-container', '.trending-prev', '.trending-next');
    setupCarouselNavigation('.top-picks-container', '.top-picks-prev', '.top-picks-next');
}

function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'trending-item';
    card.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}" onerror="this.src='https://via.placeholder.com/300x450?text=Image+Not+Found'">
        <div class="movie-info">
            <span class="genre">${movie.genre}</span>
            <p class="description">${movie.description}</p>
            <button class="watchlist-btn ${watchlist.includes(movie.id) ? 'in-watchlist' : ''}" 
                    onclick="event.stopPropagation(); toggleWatchlist(${movie.id})">
                ${watchlist.includes(movie.id) ? '✓ My List' : '+ My List'}
            </button>
        </div>
    `;
    
    card.addEventListener('click', () => showMovieDetails(movie));
    return card;
}

function setupCarouselNavigation(containerSelector, prevBtnSelector, nextBtnSelector) {
    const container = document.querySelector(containerSelector);
    const prevBtn = document.querySelector(prevBtnSelector);
    const nextBtn = document.querySelector(nextBtnSelector);

    if (!container || !prevBtn || !nextBtn) return;

    const scrollAmount = 400; // Adjust this value based on your needs

    prevBtn.addEventListener('click', () => {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', () => {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    // Add touch support for mobile
    let isDown = false;
    let startX;
    let scrollLeft;

    container.addEventListener('mousedown', (e) => {
        isDown = true;
        container.style.cursor = 'grabbing';
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
        isDown = false;
        container.style.cursor = 'grab';
    });

    container.addEventListener('mouseup', () => {
        isDown = false;
        container.style.cursor = 'grab';
    });

    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2;
        container.scrollLeft = scrollLeft - walk;
    });
}

// Watchlist Functions
function toggleWatchlist(movieId, event) {
    event.stopPropagation();
    const movie = [...movieData.trending, ...movieData.topPicks].find(m => m.id === movieId);
    
    if (!movie) return;

    const index = watchlist.findIndex(m => m.id === movieId);
    if (index === -1) {
        watchlist.push(movie);
        showNotification(`Added "${movie.title}" to My List`);
    } else {
        watchlist.splice(index, 1);
        showNotification(`Removed "${movie.title}" from My List`);
    }

    localStorage.setItem('watchlist', JSON.stringify(watchlist));
    updateWatchlist();
    loadMovies(); // Refresh movie cards to update watchlist status
}

function updateWatchlist() {
    if (!myListContainer) return;
    
    myListContainer.innerHTML = watchlist.map(movie => createMovieCard(movie)).join('');
    
    // Show/hide My List section based on content
    myListSection.style.display = watchlist.length > 0 ? 'block' : 'none';
}

// Notification System
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);

    // Trigger animation
    setTimeout(() => notification.classList.add('show'), 100);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Movie Click Handler
function handleMovieClick(e) {
    const movieId = parseInt(e.currentTarget.dataset.id);
    const movie = [...movieData.trending, ...movieData.topPicks].find(m => m.id === movieId);
    
    if (movie) {
        showMovieDetails(movie);
    }
}

function showMovieDetails(movie) {
    const modal = document.createElement('div');
    modal.className = 'movie-details-modal';
    modal.innerHTML = `
        <div class="movie-details-content">
            <span class="close-btn">&times;</span>
            <img src="${movie.image}" alt="${movie.title}" onerror="this.src='https://via.placeholder.com/800x450?text=Image+Not+Found'">
            <h2>${movie.title}</h2>
            <span class="genre">${movie.genre}</span>
            <p>${movie.description}</p>
            <div class="actions">
                <button class="play-btn">▶ Play</button>
                <button class="watchlist-btn ${watchlist.some(m => m.id === movie.id) ? 'in-watchlist' : ''}" 
                        onclick="toggleWatchlist(${movie.id}, event)">
                    ${watchlist.some(m => m.id === movie.id) ? '✓ My List' : '+ My List'}
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    setTimeout(() => modal.classList.add('show'), 100);

    // Close button functionality
    modal.querySelector('.close-btn').addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 300);
    });

    // Close on outside click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => modal.remove(), 300);
        }
    });
}

// Carousel Navigation
function scrollCarousel(direction) {
    const container = event.target.closest('.carousel-container').querySelector('.trending-list');
    const scrollAmount = 300;
    container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
    });
}

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        item.classList.toggle('active');
    });
});

// Initialize the app
init(); 