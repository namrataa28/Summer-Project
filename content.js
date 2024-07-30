document.addEventListener("DOMContentLoaded", function() {
    // Sidebar toggle
    const sidebarToggle = document.querySelector("#check");
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
  
    sidebarToggle.addEventListener("change", function() {
      if (this.checked) {
        document.body.appendChild(overlay);
        sidebar.classList.add("open");
      } else {
        sidebar.classList.remove("open");
        if (document.body.contains(overlay)) {
          document.body.removeChild(overlay);
        }
      }
    });
  
    overlay.addEventListener("click", function() {
      sidebarToggle.checked = false;
      sidebar.classList.remove("open");
      document.body.removeChild(overlay);
    });
  
    // Form validation
    const searchForm = document.querySelector("form[role='search']");
    const searchInput = searchForm.querySelector("input[type='search']");
  
    searchForm.addEventListener("submit", function(event) {
      if (!searchInput.value.trim()) {
        event.preventDefault();
        alert("Please enter a search term.");
      }
    });
  
    // Load dynamic content (example: additional book cards)
    const loadMoreButton = document.createElement("button");
    loadMoreButton.textContent = "Load More Books";
    loadMoreButton.classList.add("btn", "btn-outline-primary", "mt-3", "mb-3");
    const cardContainer = document.querySelector(".cardout");
    cardContainer.appendChild(loadMoreButton);
  
    loadMoreButton.addEventListener("click", function() {
      const newCards = [
        {
          imgSrc: "./example-book1.jpg",
          title: "Example Book 1",
          author: "Author 1",
          language: "English",
          price: "$5.00",
          link: "#"
        },
        {
          imgSrc: "./example-book2.jpg",
          title: "Example Book 2",
          author: "Author 2",
          language: "English",
          price: "$6.00",
          link: "#"
        }
      ];
  
      newCards.forEach(book => {
        const card = document.createElement("div");
        card.classList.add("card", "text-center", "mb-3");
        card.style.width = "18rem";
  
        card.innerHTML = `
          <img src="${book.imgSrc}" class="card-img-top" alt="${book.title}">
          <div class="card-body">
            <h5 class="card-title">${book.title}</h5>
            <p class="card-text">Author: ${book.author}<br>Language: ${book.language}<br>Price: ${book.price}</p>
            <a href="${book.link}" class="btn btn-outline-info">Read a book</a>
          </div>
        `;
  
        cardContainer.appendChild(card);
      });
    });
  });
  