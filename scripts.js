// Fade-in animation on scroll
document.addEventListener("DOMContentLoaded", () => {
    const fadeInElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }
            });
        },
        { threshold: 0.1 }
    );

    fadeInElements.forEach((el) => {
        observer.observe(el);
    });
});

// Rotating Quotes Animation
document.addEventListener("DOMContentLoaded", () => {
    const quotes = document.querySelectorAll(".quote");
    let currentQuote = 0;

    // Function to show the next quote
    const showNextQuote = () => {
        quotes[currentQuote].classList.remove("active");
        currentQuote = (currentQuote + 1) % quotes.length; // Loop back to the first quote
        quotes[currentQuote].classList.add("active");
    };

    // Rotate quotes every 5 seconds
    setInterval(showNextQuote, 5000);

    // Scroll-triggered animation
    const quotesSection = document.querySelector(".quotes-section");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    quotes[currentQuote].classList.add("active"); // Start animation on scroll
                }
            });
        },
        { threshold: 0.5 }
    );

    observer.observe(quotesSection);
});

// Filter and Search Functionality
document.addEventListener('DOMContentLoaded', () => {
    const filterDropdown = document.getElementById('category-filter');
    const searchInput = document.getElementById('search-input');
    const reportCards = document.querySelectorAll('.report-card');

    function filterReports() {
        const category = filterDropdown.value.toLowerCase();
        const searchTerm = searchInput.value.toLowerCase();

        reportCards.forEach(card => {
            const categoryText = card.querySelector('p').innerText.toLowerCase();
            const titleText = card.querySelector('h3').innerText.toLowerCase();

            if ((category === '' || categoryText.includes(category)) && titleText.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    filterDropdown.addEventListener('change', filterReports);
    searchInput.addEventListener('input', filterReports);
});

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('reportSearch'); // Search input
    const categoryFilter = document.getElementById('categoryFilter'); // Category dropdown
    const reportCards = document.querySelectorAll('.report-card'); // All report cards

    function filterReports() {
        const searchValue = searchInput.value.toLowerCase(); // User's search input
        const selectedCategory = categoryFilter.value.toLowerCase(); // Selected category

        reportCards.forEach((card) => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            const category = card.dataset.category.toLowerCase(); // Category from data attribute

            // Check if the report matches the search and category filters
            const matchesSearch = title.includes(searchValue) || description.includes(searchValue);
            const matchesCategory = selectedCategory === '' || category === selectedCategory;

            if (matchesSearch && matchesCategory) {
                card.style.display = 'block'; // Show matching report
            } else {
                card.style.display = 'none'; // Hide non-matching report
            }
        });
    }

    // Attach event listeners to both search and category filter
    searchInput.addEventListener('input', filterReports);
    categoryFilter.addEventListener('change', filterReports);
});

document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll(".list-item");
  
    const observerOptions = {
      root: null,
      threshold: 0.1, // Trigger animation when 10% of the item is visible
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    }, observerOptions);
  
    listItems.forEach((item) => observer.observe(item));
  });
 
