// Shop Page JavaScript for SpaStore

// Product Database with Extended Attributes
const productsDatabase = [
  {
    id: 1,
    name: "Aventus",
    brand: "creed",
    brandDisplay: "Creed",
    gender: "men",
    season: ["spring", "summer"],
    price: "7.900.000 ₫",
    priceValue: 7900000,
    description: "Hương thơm nam tính với note trái cây và gỗ",
    features: ["Eau de Parfum", "120ml", "Chính hãng"],
    isNew: false,
    isPopular: true,
    category: "men",
  },
  {
    id: 2,
    name: "Silver Mountain Water",
    brand: "creed",
    brandDisplay: "Creed",
    gender: "men",
    season: ["spring", "summer"],
    price: "6.500.000 ₫",
    priceValue: 6500000,
    description: "Hương thơm trong trẻo như dòng suối núi",
    features: ["Eau de Parfum", "100ml", "Limited"],
    isNew: false,
    isPopular: false,
    category: "men",
  },
  {
    id: 3,
    name: "Black Orchid",
    brand: "tom-ford",
    brandDisplay: "Tom Ford",
    gender: "women",
    season: ["autumn", "winter"],
    price: "6.900.000 ₫",
    priceValue: 6900000,
    description: "Hương thơm quyến rũ và bí ẩn",
    features: ["Eau de Parfum", "100ml", "Chính hãng"],
    isNew: false,
    isPopular: true,
    category: "women",
  },
  {
    id: 4,
    name: "Oud Wood",
    brand: "tom-ford",
    brandDisplay: "Tom Ford",
    gender: "unisex",
    season: ["autumn", "winter"],
    price: "8.200.000 ₫",
    priceValue: 8200000,
    description: "Hương gỗ trầm ấm và sang trọng",
    features: ["Eau de Parfum", "100ml", "Premium"],
    isNew: false,
    isPopular: true,
    category: "unisex",
  },
  {
    id: 5,
    name: "Santal 33",
    brand: "le-labo",
    brandDisplay: "Le Labo",
    gender: "unisex",
    season: ["autumn", "winter", "spring"],
    price: "4.890.000 ₫",
    priceValue: 4890000,
    description: "Hương gỗ đàn hương độc đáo và hiện đại",
    features: ["Eau de Parfum", "100ml", "Artisan"],
    isNew: true,
    isPopular: true,
    category: "unisex",
  },
  {
    id: 6,
    name: "Rose 31",
    brand: "le-labo",
    brandDisplay: "Le Labo",
    gender: "women",
    season: ["spring", "summer"],
    price: "4.690.000 ₫",
    priceValue: 4690000,
    description: "Hương hoa hồng tinh tế và thanh lịch",
    features: ["Eau de Parfum", "100ml", "Artisan"],
    isNew: true,
    isPopular: false,
    category: "women",
  },
  {
    id: 7,
    name: "Baccarat Rouge 540",
    brand: "maison-francis",
    brandDisplay: "Maison Francis",
    gender: "women",
    season: ["autumn", "winter"],
    price: "8.290.000 ₫",
    priceValue: 8290000,
    description: "Hương thơm xa xỉ với note đường và hoa",
    features: ["Eau de Parfum", "70ml", "Luxury"],
    isNew: false,
    isPopular: true,
    category: "women",
  },
  {
    id: 8,
    name: "Aqua Celestia",
    brand: "maison-francis",
    brandDisplay: "Maison Francis",
    gender: "unisex",
    season: ["spring", "summer"],
    price: "6.590.000 ₫",
    priceValue: 6590000,
    description: "Hương thơm tươi mát như bầu trời",
    features: ["Eau de Toilette", "100ml", "Fresh"],
    isNew: false,
    isPopular: false,
    category: "unisex",
  },
  {
    id: 9,
    name: "Sauvage",
    brand: "dior",
    brandDisplay: "Dior",
    gender: "men",
    season: ["spring", "summer", "autumn"],
    price: "3.200.000 ₫",
    priceValue: 3200000,
    description: "Hương thơm tươi mát và nam tính",
    features: ["Eau de Toilette", "100ml", "Bestseller"],
    isNew: false,
    isPopular: true,
    category: "men",
  },
  {
    id: 10,
    name: "J'adore",
    brand: "dior",
    brandDisplay: "Dior",
    gender: "women",
    season: ["spring", "summer"],
    price: "3.800.000 ₫",
    priceValue: 3800000,
    description: "Hương hoa tinh tế và nữ tính",
    features: ["Eau de Parfum", "100ml", "Classic"],
    isNew: false,
    isPopular: true,
    category: "women",
  },
  {
    id: 11,
    name: "Bleu de Chanel",
    brand: "chanel",
    brandDisplay: "Chanel",
    gender: "men",
    season: ["spring", "autumn"],
    price: "2.800.000 ₫",
    priceValue: 2800000,
    description: "Hương thơm tinh tế và lịch lãm",
    features: ["Eau de Parfum", "100ml", "Elegant"],
    isNew: false,
    isPopular: true,
    category: "men",
  },
  {
    id: 12,
    name: "Coco Mademoiselle",
    brand: "chanel",
    brandDisplay: "Chanel",
    gender: "women",
    season: ["autumn", "winter"],
    price: "3.500.000 ₫",
    priceValue: 3500000,
    description: "Hương thơm quyến rũ và hiện đại",
    features: ["Eau de Parfum", "100ml", "Iconic"],
    isNew: false,
    isPopular: true,
    category: "women",
  },
  {
    id: 13,
    name: "Gypsy Water",
    brand: "byredo",
    brandDisplay: "Byredo",
    gender: "unisex",
    season: ["spring", "summer"],
    price: "5.400.000 ₫",
    priceValue: 5400000,
    description: "Hương thơm tự do và phiêu lưu",
    features: ["Eau de Parfum", "100ml", "Bohemian"],
    isNew: false,
    isPopular: false,
    category: "unisex",
  },
  {
    id: 14,
    name: "Bal d'Afrique",
    brand: "byredo",
    brandDisplay: "Byredo",
    gender: "unisex",
    season: ["summer", "autumn"],
    price: "5.200.000 ₫",
    priceValue: 5200000,
    description: "Hương thơm ấm áp và exotic",
    features: ["Eau de Parfum", "100ml", "Exotic"],
    isNew: true,
    isPopular: false,
    category: "unisex",
  },
  {
    id: 15,
    name: "Black Opium",
    brand: "yves-saint-laurent",
    brandDisplay: "YSL",
    gender: "women",
    season: ["autumn", "winter"],
    price: "2.900.000 ₫",
    priceValue: 2900000,
    description: "Hương thơm quyến rũ và bí ẩn",
    features: ["Eau de Parfum", "90ml", "Seductive"],
    isNew: false,
    isPopular: true,
    category: "women",
  },
  {
    id: 16,
    name: "La Nuit de L'Homme",
    brand: "yves-saint-laurent",
    brandDisplay: "YSL",
    gender: "men",
    season: ["autumn", "winter"],
    price: "2.700.000 ₫",
    priceValue: 2700000,
    description: "Hương thơm gợi cảm cho đêm",
    features: ["Eau de Toilette", "100ml", "Seductive"],
    isNew: false,
    isPopular: false,
    category: "men",
  },
  {
    id: 17,
    name: "Philosykos",
    brand: "diptyque",
    brandDisplay: "Diptyque",
    gender: "unisex",
    season: ["spring", "summer"],
    price: "4.200.000 ₫",
    priceValue: 4200000,
    description: "Hương lá cây sung tươi mát",
    features: ["Eau de Toilette", "100ml", "Green"],
    isNew: false,
    isPopular: false,
    category: "unisex",
  },
  {
    id: 18,
    name: "Do Son",
    brand: "diptyque",
    brandDisplay: "Diptyque",
    gender: "women",
    season: ["spring", "summer"],
    price: "4.500.000 ₫",
    priceValue: 4500000,
    description: "Hương hoa huệ trắng tinh khiết",
    features: ["Eau de Toilette", "100ml", "Floral"],
    isNew: false,
    isPopular: false,
    category: "women",
  },
  {
    id: 19,
    name: "Acqua di Gio",
    brand: "giorgio-armani",
    brandDisplay: "Giorgio Armani",
    gender: "men",
    season: ["spring", "summer"],
    price: "2.400.000 ₫",
    priceValue: 2400000,
    description: "Hương biển tươi mát và sạch sẽ",
    features: ["Eau de Toilette", "100ml", "Fresh"],
    isNew: false,
    isPopular: true,
    category: "men",
  },
  {
    id: 20,
    name: "My Way",
    brand: "giorgio-armani",
    brandDisplay: "Giorgio Armani",
    gender: "women",
    season: ["spring", "autumn"],
    price: "3.100.000 ₫",
    priceValue: 3100000,
    description: "Hương thơm tươi sáng và tự tin",
    features: ["Eau de Parfum", "90ml", "Modern"],
    isNew: true,
    isPopular: false,
    category: "women",
  },
  {
    id: 21,
    name: "Terre d'Hermès",
    brand: "hermes",
    brandDisplay: "Hermès",
    gender: "men",
    season: ["autumn", "winter"],
    price: "3.800.000 ₫",
    priceValue: 3800000,
    description: "Hương đất và gỗ tinh tế",
    features: ["Eau de Toilette", "100ml", "Woody"],
    isNew: false,
    isPopular: true,
    category: "men",
  },
  {
    id: 22,
    name: "Twilly d'Hermès",
    brand: "hermes",
    brandDisplay: "Hermès",
    gender: "women",
    season: ["spring", "summer"],
    price: "3.600.000 ₫",
    priceValue: 3600000,
    description: "Hương thơm trẻ trung và sống động",
    features: ["Eau de Parfum", "85ml", "Playful"],
    isNew: false,
    isPopular: false,
    category: "women",
  },
  {
    id: 23,
    name: "Light Blue",
    brand: "dolce-gabbana",
    brandDisplay: "Dolce & Gabbana",
    gender: "women",
    season: ["spring", "summer"],
    price: "2.200.000 ₫",
    priceValue: 2200000,
    description: "Hương Mediterranean tươi mát",
    features: ["Eau de Toilette", "100ml", "Fresh"],
    isNew: false,
    isPopular: true,
    category: "women",
  },
  {
    id: 24,
    name: "The One",
    brand: "dolce-gabbana",
    brandDisplay: "Dolce & Gabbana",
    gender: "men",
    season: ["autumn", "winter"],
    price: "2.500.000 ₫",
    priceValue: 2500000,
    description: "Hương thơm lịch lãm và ấm áp",
    features: ["Eau de Parfum", "100ml", "Sophisticated"],
    isNew: false,
    isPopular: false,
    category: "men",
  },
];

// Global variables for current state
let currentProducts = [...productsDatabase];
let activeFilters = {
  gender: [],
  brand: [],
  season: [],
  search: "",
};
let currentSort = "default";
let currentView = "grid";
let currentPage = 1;
let productsPerPage = 12;

// DOM elements
let searchInput,
  productsGrid,
  totalProductsSpan,
  showingResultsSpan,
  totalResultsSpan;
let genderFilters, brandFilters, seasonFilters, clearFiltersBtn;
let sortSelect, gridViewBtn, listViewBtn, productsContainer;
let noResults, loading, pagination, activeFiltersContainer, activeFilterTags;

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  initializeElements();
  initializeEventListeners();
  initializeFromURL();
  renderProducts();
  updateUI();
});

// Initialize DOM elements
function initializeElements() {
  // Search elements
  searchInput = document.getElementById("product-search");

  // Display elements
  productsGrid = document.getElementById("products-grid");
  totalProductsSpan = document.getElementById("total-products");
  showingResultsSpan = document.getElementById("showing-results");
  totalResultsSpan = document.getElementById("total-results");
  noResults = document.getElementById("no-results");
  loading = document.getElementById("loading");
  pagination = document.getElementById("pagination");

  // Filter elements
  genderFilters = document.querySelectorAll(
    'input[id^="filter-"][id$="men"], input[id^="filter-"][id$="women"], input[id="filter-unisex"]'
  );
  brandFilters = document.querySelectorAll(
    'input[id^="filter-"][id*="creed"], input[id^="filter-"][id*="tom"], input[id^="filter-"][id*="chanel"], input[id^="filter-"][id*="dior"], input[id^="filter-"][id*="le-labo"], input[id^="filter-"][id*="byredo"], input[id^="filter-"][id*="maison"], input[id^="filter-"][id*="ysl"], input[id^="filter-"][id*="diptyque"], input[id^="filter-"][id*="armani"], input[id^="filter-"][id*="hermes"]'
  );
  seasonFilters = document.querySelectorAll(
    'input[id^="filter-"][id*="spring"], input[id^="filter-"][id*="summer"], input[id^="filter-"][id*="autumn"], input[id^="filter-"][id*="winter"]'
  );
  clearFiltersBtn = document.getElementById("clear-filters");

  // View elements
  sortSelect = document.getElementById("sort-products");
  gridViewBtn = document.getElementById("grid-view");
  listViewBtn = document.getElementById("list-view");
  productsContainer = document.getElementById("products-container");

  // Active filters
  activeFiltersContainer = document.getElementById("active-filters");
  activeFilterTags = document.getElementById("active-filter-tags");
}

// Initialize event listeners
function initializeEventListeners() {
  // Search functionality
  if (searchInput) {
    searchInput.addEventListener("input", handleSearch);
    searchInput.addEventListener("focus", showSearchSuggestions);
    searchInput.addEventListener("blur", hideSearchSuggestions);
  }

  // Filter event listeners
  genderFilters.forEach((filter) => {
    filter.addEventListener("change", () =>
      handleFilterChange("gender", filter.value, filter.checked)
    );
  });

  brandFilters.forEach((filter) => {
    filter.addEventListener("change", () =>
      handleFilterChange("brand", filter.value, filter.checked)
    );
  });

  seasonFilters.forEach((filter) => {
    filter.addEventListener("change", () =>
      handleFilterChange("season", filter.value, filter.checked)
    );
  });

  // Clear filters
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener("click", clearAllFilters);
  }

  // Sort functionality
  if (sortSelect) {
    sortSelect.addEventListener("change", handleSort);
  }

  // View toggle
  if (gridViewBtn) {
    gridViewBtn.addEventListener("click", () => setView("grid"));
  }
  if (listViewBtn) {
    listViewBtn.addEventListener("click", () => setView("list"));
  }

  // Show more brands functionality
  const showMoreBtn = document.getElementById("show-more-brands");
  const moreBrands = document.getElementById("more-brands");
  if (showMoreBtn && moreBrands) {
    showMoreBtn.addEventListener("click", () => {
      if (moreBrands.style.display === "none") {
        moreBrands.style.display = "block";
        showMoreBtn.innerHTML = '<i class="fas fa-chevron-up me-1"></i>Ẩn bớt';
      } else {
        moreBrands.style.display = "none";
        showMoreBtn.innerHTML =
          '<i class="fas fa-chevron-down me-1"></i>Xem thêm';
      }
    });
  }

  // Reset search button
  const resetSearchBtn = document.getElementById("reset-search");
  if (resetSearchBtn) {
    resetSearchBtn.addEventListener("click", resetSearch);
  }
}

// Initialize from URL parameters
function initializeFromURL() {
  const urlParams = new URLSearchParams(window.location.search);

  // Handle filter parameter
  const filterParam = urlParams.get("filter");
  if (filterParam) {
    activeFilters.gender = [filterParam];
    const filterCheckbox = document.getElementById(`filter-${filterParam}`);
    if (filterCheckbox) {
      filterCheckbox.checked = true;
    }
  }

  // Handle search parameter
  const searchParam = urlParams.get("search");
  if (searchParam && searchInput) {
    searchInput.value = searchParam;
    activeFilters.search = searchParam;
  }
}

// Search functionality
function handleSearch() {
  const query = searchInput.value.trim();
  activeFilters.search = query;
  currentPage = 1;
  applyFilters();
  updateURL();
}

function showSearchSuggestions() {
  // Implement search suggestions if needed
}

function hideSearchSuggestions() {
  // Hide search suggestions
  const suggestions = document.getElementById("search-suggestions");
  if (suggestions) {
    setTimeout(() => {
      suggestions.style.display = "none";
    }, 200);
  }
}

// Filter functionality
function handleFilterChange(filterType, value, checked) {
  if (checked) {
    if (!activeFilters[filterType].includes(value)) {
      activeFilters[filterType].push(value);
    }
  } else {
    activeFilters[filterType] = activeFilters[filterType].filter(
      (item) => item !== value
    );
  }

  currentPage = 1;
  applyFilters();
  updateActiveFilters();
  updateURL();
}

function clearAllFilters() {
  // Reset all filters
  activeFilters = {
    gender: [],
    brand: [],
    season: [],
    search: "",
  };

  // Uncheck all filter checkboxes
  document
    .querySelectorAll('.filter-options input[type="checkbox"]')
    .forEach((checkbox) => {
      checkbox.checked = false;
    });

  // Clear search input
  if (searchInput) {
    searchInput.value = "";
  }

  currentPage = 1;
  applyFilters();
  updateActiveFilters();
  updateURL();
}

function removeActiveFilter(filterType, value) {
  activeFilters[filterType] = activeFilters[filterType].filter(
    (item) => item !== value
  );

  // Uncheck the corresponding checkbox
  const checkbox = document.querySelector(`input[value="${value}"]`);
  if (checkbox) {
    checkbox.checked = false;
  }

  currentPage = 1;
  applyFilters();
  updateActiveFilters();
  updateURL();
}

// Apply filters to products
function applyFilters() {
  let filteredProducts = [...productsDatabase];

  // Apply search filter
  if (activeFilters.search) {
    const searchTerm = activeFilters.search.toLowerCase();
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.brandDisplay.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
  }

  // Apply gender filter
  if (activeFilters.gender.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      activeFilters.gender.includes(product.gender)
    );
  }

  // Apply brand filter
  if (activeFilters.brand.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      activeFilters.brand.includes(product.brand)
    );
  }

  // Apply season filter
  if (activeFilters.season.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      product.season.some((season) => activeFilters.season.includes(season))
    );
  }

  // Apply sorting
  filteredProducts = sortProducts(filteredProducts, currentSort);

  currentProducts = filteredProducts;
  renderProducts();
  updateUI();
}

// Sorting functionality
function handleSort() {
  currentSort = sortSelect.value;
  currentPage = 1;
  currentProducts = sortProducts([...currentProducts], currentSort);
  renderProducts();
  updateURL();
}

function sortProducts(products, sortType) {
  switch (sortType) {
    case "name-asc":
      return products.sort((a, b) => a.name.localeCompare(b.name));
    case "name-desc":
      return products.sort((a, b) => b.name.localeCompare(a.name));
    case "brand-asc":
      return products.sort((a, b) =>
        a.brandDisplay.localeCompare(b.brandDisplay)
      );
    case "popularity":
      return products.sort((a, b) => b.isPopular - a.isPopular);
    case "newest":
      return products.sort((a, b) => b.isNew - a.isNew);
    default:
      return products;
  }
}

// View functionality
function setView(viewType) {
  currentView = viewType;

  // Update button states
  gridViewBtn.classList.toggle("active", viewType === "grid");
  listViewBtn.classList.toggle("active", viewType === "list");

  // Update container class
  productsContainer.classList.toggle("list-view", viewType === "list");

  renderProducts();
}

// Render products
function renderProducts() {
  if (!productsGrid) return;

  // Show loading
  if (loading) loading.style.display = "block";

  // Calculate pagination
  const totalProducts = currentProducts.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = Math.min(startIndex + productsPerPage, totalProducts);
  const productsToShow = currentProducts.slice(startIndex, endIndex);

  // Clear current products
  productsGrid.innerHTML = "";

  setTimeout(() => {
    if (productsToShow.length === 0) {
      if (noResults) noResults.style.display = "block";
      if (pagination) pagination.innerHTML = "";
    } else {
      if (noResults) noResults.style.display = "none";

      // Render products
      productsToShow.forEach((product) => {
        const productElement = createProductCard(product);
        productsGrid.appendChild(productElement);
      });

      // Update pagination
      renderPagination(totalPages);
    }

    // Hide loading
    if (loading) loading.style.display = "none";
  }, 300);
}

// Create product card HTML
function createProductCard(product) {
  const col = document.createElement("div");
  col.className =
    currentView === "list" ? "col-12" : "col-xl-4 col-lg-4 col-md-6 col-sm-6";

  const badges = [];
  if (product.isNew) badges.push('<span class="product-badge new">Mới</span>');
  if (product.isPopular) badges.push('<span class="product-badge">Hot</span>');

  const features = product.features
    .map((feature) => `<span class="product-feature">${feature}</span>`)
    .join("");

  col.innerHTML = `
        <div class="product-card fade-in">
            <div class="card">
                <div class="product-image">
                    ${badges.join("")}
                    <i class="fas fa-spray-can"></i>
                </div>
                <div class="product-info">
                    <div class="product-brand">${product.brandDisplay}</div>
                    <h5 class="product-name">${product.name}</h5>
                    <p class="text-muted small mb-2">${product.description}</p>
                    <div class="product-features mb-3">
                        ${features}
                    </div>
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <span class="product-price">${product.price}</span>
                    </div>
                    <div class="product-actions">
                        <button class="btn btn-add-cart" onclick="addToCart(${
                          product.id
                        })">
                            <i class="fas fa-shopping-cart me-2"></i>Thêm giỏ hàng
                        </button>
                        <button class="btn btn-quickview" onclick="quickView(${
                          product.id
                        })" title="Xem nhanh">
                            <i class="fas fa-eye"></i>
                        </button>
                        <button class="btn btn-favorite" onclick="toggleFavorite(${
                          product.id
                        })" title="Yêu thích">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;

  return col;
}

// Pagination
function renderPagination(totalPages) {
  if (!pagination) return;

  pagination.innerHTML = "";

  if (totalPages <= 1) return;

  // Previous button
  const prevLi = document.createElement("li");
  prevLi.className = `page-item ${currentPage === 1 ? "disabled" : ""}`;
  prevLi.innerHTML = `<a class="page-link" href="#" onclick="changePage(${
    currentPage - 1
  }); return false;">Trước</a>`;
  pagination.appendChild(prevLi);

  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    if (
      i === 1 ||
      i === totalPages ||
      (i >= currentPage - 2 && i <= currentPage + 2)
    ) {
      const pageLi = document.createElement("li");
      pageLi.className = `page-item ${i === currentPage ? "active" : ""}`;
      pageLi.innerHTML = `<a class="page-link" href="#" onclick="changePage(${i}); return false;">${i}</a>`;
      pagination.appendChild(pageLi);
    } else if (i === currentPage - 3 || i === currentPage + 3) {
      const ellipsisLi = document.createElement("li");
      ellipsisLi.className = "page-item disabled";
      ellipsisLi.innerHTML = '<span class="page-link">...</span>';
      pagination.appendChild(ellipsisLi);
    }
  }

  // Next button
  const nextLi = document.createElement("li");
  nextLi.className = `page-item ${
    currentPage === totalPages ? "disabled" : ""
  }`;
  nextLi.innerHTML = `<a class="page-link" href="#" onclick="changePage(${
    currentPage + 1
  }); return false;">Sau</a>`;
  pagination.appendChild(nextLi);
}

function changePage(page) {
  const totalPages = Math.ceil(currentProducts.length / productsPerPage);
  if (page >= 1 && page <= totalPages) {
    currentPage = page;
    renderProducts();
    updateUI();

    // Scroll to top of products
    document.querySelector(".products-container").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Update UI elements
function updateUI() {
  const totalProducts = currentProducts.length;
  const startIndex = (currentPage - 1) * productsPerPage + 1;
  const endIndex = Math.min(currentPage * productsPerPage, totalProducts);

  // Update counters
  if (totalProductsSpan)
    totalProductsSpan.textContent = productsDatabase.length;
  if (totalResultsSpan) totalResultsSpan.textContent = totalProducts;
  if (showingResultsSpan) {
    if (totalProducts === 0) {
      showingResultsSpan.textContent = "0";
    } else {
      showingResultsSpan.textContent = `${startIndex}-${endIndex}`;
    }
  }
}

// Update active filters display
function updateActiveFilters() {
  if (!activeFiltersContainer || !activeFilterTags) return;

  const hasActiveFilters =
    activeFilters.gender.length > 0 ||
    activeFilters.brand.length > 0 ||
    activeFilters.season.length > 0 ||
    activeFilters.search.trim() !== "";

  if (hasActiveFilters) {
    activeFiltersContainer.style.display = "block";
    activeFilterTags.innerHTML = "";

    // Add search filter tag
    if (activeFilters.search.trim() !== "") {
      const searchTag = createFilterTag(
        "Tìm kiếm",
        `"${activeFilters.search}"`,
        () => {
          activeFilters.search = "";
          if (searchInput) searchInput.value = "";
          applyFilters();
          updateActiveFilters();
          updateURL();
        }
      );
      activeFilterTags.appendChild(searchTag);
    }

    // Add gender filter tags
    activeFilters.gender.forEach((gender) => {
      const displayName =
        gender === "men" ? "Nam" : gender === "women" ? "Nữ" : "Unisex";
      const tag = createFilterTag("Giới tính", displayName, () =>
        removeActiveFilter("gender", gender)
      );
      activeFilterTags.appendChild(tag);
    });

    // Add brand filter tags
    activeFilters.brand.forEach((brand) => {
      const product = productsDatabase.find((p) => p.brand === brand);
      const displayName = product ? product.brandDisplay : brand;
      const tag = createFilterTag("Thương hiệu", displayName, () =>
        removeActiveFilter("brand", brand)
      );
      activeFilterTags.appendChild(tag);
    });

    // Add season filter tags
    activeFilters.season.forEach((season) => {
      const displayName =
        season === "spring"
          ? "Xuân"
          : season === "summer"
          ? "Hạ"
          : season === "autumn"
          ? "Thu"
          : "Đông";
      const tag = createFilterTag("Mùa", displayName, () =>
        removeActiveFilter("season", season)
      );
      activeFilterTags.appendChild(tag);
    });
  } else {
    activeFiltersContainer.style.display = "none";
  }
}

function createFilterTag(type, value, onRemove) {
  const tag = document.createElement("span");
  tag.className = "filter-tag";
  tag.innerHTML = `
        ${type}: ${value}
        <button class="remove-filter" onclick="this.parentElement.nextSibling; arguments[0].preventDefault();">
            <i class="fas fa-times"></i>
        </button>
    `;

  const removeBtn = tag.querySelector(".remove-filter");
  removeBtn.addEventListener("click", onRemove);

  return tag;
}

// URL management
function updateURL() {
  const params = new URLSearchParams();

  if (activeFilters.search.trim() !== "") {
    params.set("search", activeFilters.search);
  }

  if (activeFilters.gender.length === 1) {
    params.set("filter", activeFilters.gender[0]);
  }

  const newURL =
    window.location.pathname +
    (params.toString() ? "?" + params.toString() : "");
  window.history.replaceState({}, "", newURL);
}

// Product actions
function addToCart(productId) {
  const product = productsDatabase.find((p) => p.id === productId);
  if (!product) return;

  // Show success message
  showNotification(`${product.name} đã được thêm vào giỏ hàng!`, "success");

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
  const product = productsDatabase.find((p) => p.id === productId);
  if (!product) return;

  showNotification(`Xem nhanh sản phẩm ${product.name}`, "info");
  // Implement quick view modal here
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

function resetSearch() {
  if (searchInput) {
    searchInput.value = "";
  }
  activeFilters.search = "";
  currentPage = 1;
  applyFilters();
  updateURL();
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
