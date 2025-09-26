// Simplified Shop JavaScript - UI Only, No Processing

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  initializeShop();
});

function initializeShop() {
  // Setup UI event listeners (no processing)
  setupFilterListeners();
  setupSearchListeners();
  setupUIListeners();
  console.log("Shop initialized - UI only, static products in HTML");
}

// Setup filter event listeners (UI only - no processing)
function setupFilterListeners() {
  // Gender filters
  const genderFilters = document.querySelectorAll(
    'input[id^="filter-"][id$="men"], input[id^="filter-"][id$="women"], input[id="filter-unisex"]'
  );

  genderFilters.forEach((filter) => {
    filter.addEventListener("change", function () {
      console.log("Gender filter changed:", this.value, this.checked);
    });
  });

  // Brand filters
  const brandFilters = document.querySelectorAll(
    'input[id^="filter-"][id*="creed"], input[id^="filter-"][id*="tom"], input[id^="filter-"][id*="chanel"], input[id^="filter-"][id*="dior"], input[id^="filter-"][id*="le-labo"], input[id^="filter-"][id*="byredo"], input[id^="filter-"][id*="maison"], input[id^="filter-"][id*="ysl"], input[id^="filter-"][id*="diptyque"], input[id^="filter-"][id*="armani"], input[id^="filter-"][id*="hermes"]'
  );

  brandFilters.forEach((filter) => {
    filter.addEventListener("change", function () {
      console.log("Brand filter changed:", this.value, this.checked);
    });
  });

  // Season filters
  const seasonFilters = document.querySelectorAll(
    'input[id^="filter-"][id*="spring"], input[id^="filter-"][id*="summer"], input[id^="filter-"][id*="autumn"], input[id^="filter-"][id*="winter"]'
  );

  seasonFilters.forEach((filter) => {
    filter.addEventListener("change", function () {
      console.log("Season filter changed:", this.value, this.checked);
    });
  });

  // Clear filters button
  const clearFiltersBtn = document.getElementById("clear-filters");
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener("click", function () {
      // Clear all checkboxes
      document
        .querySelectorAll('.filter-options input[type="checkbox"]')
        .forEach((checkbox) => {
          checkbox.checked = false;
        });
      console.log("All filters cleared");
    });
  }

  // Show more brands functionality
  const showMoreBtn = document.getElementById("show-more-brands");
  const moreBrands = document.getElementById("more-brands");
  if (showMoreBtn && moreBrands) {
    showMoreBtn.addEventListener("click", function () {
      if (
        moreBrands.style.display === "none" ||
        moreBrands.style.display === ""
      ) {
        moreBrands.style.display = "block";
        showMoreBtn.innerHTML = '<i class="fas fa-chevron-up me-1"></i>Ẩn bớt';
      } else {
        moreBrands.style.display = "none";
        showMoreBtn.innerHTML =
          '<i class="fas fa-chevron-down me-1"></i>Xem thêm';
      }
    });
  }
}

// Setup search event listeners (UI only - no processing)
function setupSearchListeners() {
  const searchInput = document.getElementById("product-search");

  if (searchInput) {
    searchInput.addEventListener("input", function () {
      console.log("Search input changed:", this.value);
    });

    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        console.log("Search entered:", this.value);
      }
    });
  }
}

// Setup other UI listeners (no processing)
function setupUIListeners() {
  // Sort functionality (UI only)
  const sortSelect = document.getElementById("sort-products");
  if (sortSelect) {
    sortSelect.addEventListener("change", function () {
      console.log("Sort changed:", this.value);
    });
  }

  // View toggle (UI only)
  const gridViewBtn = document.getElementById("grid-view");
  const listViewBtn = document.getElementById("list-view");

  if (gridViewBtn && listViewBtn) {
    gridViewBtn.addEventListener("click", function () {
      gridViewBtn.classList.add("active");
      listViewBtn.classList.remove("active");
      console.log("Grid view selected");
    });

    listViewBtn.addEventListener("click", function () {
      listViewBtn.classList.add("active");
      gridViewBtn.classList.remove("active");
      console.log("List view selected");
    });
  }
}

// Product actions (keep working functionality)
function addToCart(productId) {
  // Show success message
  showNotification("Sản phẩm đã được thêm vào giỏ hàng!", "success");

  // Add animation to button
  const button = event.target.closest(".btn-add-cart");
  if (button) {
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-check me-2"></i>Đã thêm!';
    button.classList.add("btn-success");
    button.classList.remove("btn-add-cart");

    setTimeout(() => {
      button.innerHTML = originalText;
      button.classList.remove("btn-success");
      button.classList.add("btn-add-cart");
    }, 2000);
  }
}

function quickView(productId) {
  showNotification("Xem nhanh sản phẩm", "info");
  // Implement quick view modal here if needed
}

function toggleFavorite(productId) {
  const button = event.target.closest(".btn-favorite");
  if (button) {
    button.classList.toggle("favorited");
    const icon = button.querySelector("i");
    if (button.classList.contains("favorited")) {
      icon.classList.remove("far");
      icon.classList.add("fas");
      showNotification("Đã thêm vào danh sách yêu thích", "success");
    } else {
      icon.classList.remove("fas");
      icon.classList.add("far");
      showNotification("Đã xóa khỏi danh sách yêu thích", "info");
    }
  }
}

// Utility function for notifications
function showNotification(message, type) {
  // Create notification element
  const notification = document.createElement("div");
  notification.className = `alert alert-${
    type === "success" ? "success" : type === "error" ? "danger" : "info"
  } position-fixed`;
  notification.style.cssText = `
        top: 20px;
        right: 20px;
        z-index: 9999;
        min-width: 300px;
        animation: slideInRight 0.3s ease-out;
    `;
  notification.innerHTML = `
        <i class="fas fa-${
          type === "success"
            ? "check-circle"
            : type === "error"
            ? "exclamation-circle"
            : "info-circle"
        } me-2"></i>
        ${message}
        <button type="button" class="btn-close float-end" aria-label="Close"></button>
    `;

  document.body.appendChild(notification);

  // Auto remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = "slideOutRight 0.3s ease-out";
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 3000);

  // Close button functionality
  notification.querySelector(".btn-close").addEventListener("click", () => {
    notification.style.animation = "slideOutRight 0.3s ease-out";
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 300);
  });
}

// Add CSS animations for notifications
const style = document.createElement("style");
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
