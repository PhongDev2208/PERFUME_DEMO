// SpaStore JavaScript Functionality

document.addEventListener("DOMContentLoaded", function () {
  // Initialize Brand Slider
  const brandsSwiper = new Swiper(".brands-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".brands-next",
      prevEl: ".brands-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      if (href !== "#" && href.length > 1) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const headerOffset = 80;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    });
  });

  // Product filter functionality
  const filterButtons = document.querySelectorAll("#productTabs .nav-link");
  const products = document.querySelectorAll(".product-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      // Get the filter value from the href and map it correctly
      const href = this.getAttribute("href").replace("#", "");
      let filter;

      if (href === "all-products") {
        filter = "all";
      } else if (href === "men-products") {
        filter = "men";
      } else if (href === "women-products") {
        filter = "women";
      } else if (href === "unisex-products") {
        filter = "unisex";
      }

      console.log("Filter:", filter); // Debug log

      products.forEach((product) => {
        const productContainer = product.closest(".col-lg-3");
        const category = product.dataset.category;
        console.log("Product category:", category); // Debug log
        console.log("Product container:", productContainer); // Debug log
        console.log("Should show?", filter === "all" || category === filter); // Debug log

        if (filter === "all" || category === filter) {
          productContainer.style.display = "block";
          productContainer.style.opacity = "1";
          productContainer.style.visibility = "visible";
          productContainer.style.animation = "fadeIn 0.5s ease-in";
          console.log("Showing product:", category); // Debug log
        } else {
          productContainer.style.display = "none";
          console.log("Hiding product:", category); // Debug log
        }
      });

      // Update active tab
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // Force a reflow to ensure changes are applied
      document.body.offsetHeight;
    });
  });

  // Add to cart functionality
  const addToCartButtons = document.querySelectorAll(".product-card .btn");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const productCard = this.closest(".product-card");
      const productName = productCard.querySelector(".card-title").textContent;
      const productPrice = productCard.querySelector(".price").textContent;

      // Add animation effect
      this.innerHTML = '<i class="fas fa-check"></i> Đã thêm!';
      this.classList.remove("btn-outline-primary");
      this.classList.add("btn-success");

      // Show success message (you can replace this with a proper toast/modal)
      showNotification(`${productName} đã được thêm vào giỏ hàng!`, "success");

      // Reset button after 2 seconds
      setTimeout(() => {
        this.innerHTML = "Thêm giỏ hàng";
        this.classList.remove("btn-success");
        this.classList.add("btn-outline-primary");
      }, 2000);
    });
  });

  // Newsletter subscription
  const newsletterForm = document.querySelector(
    ".newsletter-section .input-group"
  );
  if (newsletterForm) {
    const button = newsletterForm.querySelector(".btn");
    const input = newsletterForm.querySelector("input");

    button.addEventListener("click", function () {
      const email = input.value.trim();
      if (email && validateEmail(email)) {
        showNotification("Cảm ơn bạn đã đăng ký!", "success");
        input.value = "";
      } else {
        showNotification("Vui lòng nhập địa chỉ email hợp lệ.", "error");
      }
    });

    input.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        button.click();
      }
    });
  }

  // Parallax effect for hero section
  window.addEventListener("scroll", function () {
    const scrolled = window.pageYOffset;
    const heroIcon = document.querySelector(".hero-icon");
    if (heroIcon) {
      heroIcon.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });

  // Animate elements on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(
      ".product-card, .feature-card, .category-card"
    );
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add("animate-in");
      }
    });
  };

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // Run once on load

  // Search functionality (if you want to add a search bar later)
  function searchProducts(query) {
    const products = document.querySelectorAll(".product-card");
    products.forEach((product) => {
      const productName = product
        .querySelector(".card-title")
        .textContent.toLowerCase();
      const brandName = product.querySelector("h6").textContent.toLowerCase();

      if (
        productName.includes(query.toLowerCase()) ||
        brandName.includes(query.toLowerCase())
      ) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  }

  // Utility functions
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function showNotification(message, type) {
    // Create notification element
    const notification = document.createElement("div");
    notification.className = `alert alert-${
      type === "success" ? "success" : "danger"
    } position-fixed`;
    notification.style.cssText = `
            top: 20px;
            right: 20px;
            z-index: 9999;
            min-width: 300px;
            animation: slideIn 0.3s ease-out;
        `;
    notification.innerHTML = `
            <i class="fas fa-${
              type === "success" ? "check-circle" : "exclamation-circle"
            } me-2"></i>
            ${message}
            <button type="button" class="btn-close float-end" aria-label="Close"></button>
        `;

    document.body.appendChild(notification);

    // Auto remove after 3 seconds
    setTimeout(() => {
      notification.style.animation = "slideOut 0.3s ease-out";
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    }, 3000);

    // Close button functionality
    notification.querySelector(".btn-close").addEventListener("click", () => {
      notification.style.animation = "slideOut 0.3s ease-out";
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 300);
    });
  }

  // Loading effect for images (if you add real images later)
  const imageContainers = document.querySelectorAll(
    ".product-image-placeholder"
  );
  imageContainers.forEach((container) => {
    container.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
      this.style.transition = "transform 0.3s ease";
    });

    container.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  });
});

// Add CSS animations dynamically
const style = document.createElement("style");
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .animate-in {
        animation: fadeIn 0.6s ease-out;
    }
`;
document.head.appendChild(style);

// Handle all "Đặt lịch" button clicks to scroll to newsletter section
document.addEventListener("click", function (e) {
  // Check if clicked element or its parent contains "Đặt lịch" text
  const clickedElement = e.target;
  const buttonText = clickedElement.textContent || clickedElement.innerText;

  if (buttonText && buttonText.includes("Đặt lịch")) {
    e.preventDefault(); // Prevent default action

    // Find the newsletter section
    const newsletterSection =
      document.getElementById("newsletter") ||
      document.querySelector(".newsletter-section");

    if (newsletterSection) {
      // Smooth scroll to newsletter section
      newsletterSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Optional: Focus on first input field after scrolling
      setTimeout(() => {
        const firstInput =
          newsletterSection.querySelector('input[type="text"]');
        if (firstInput) {
          firstInput.focus();
        }
      }, 1000); // Wait for scroll animation to complete
    }
  }
});

// Auto-close mobile navbar when clicking on navigation links
document.addEventListener("DOMContentLoaded", function () {
  const navbarCollapse = document.getElementById("navbarNav");
  const navbarToggler = document.querySelector(".navbar-toggler");

  // Close navbar when clicking on regular navigation links (exclude dropdown toggles)
  const navLinks = document.querySelectorAll(
    ".navbar-nav .nav-link:not(.dropdown-toggle)"
  );
  navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", function () {
      if (navbarCollapse.classList.contains("show")) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false,
        });
        bsCollapse.hide();
      }
    });
  });

  // Close navbar when clicking on dropdown items
  const dropdownItems = document.querySelectorAll(".navbar-nav .dropdown-item");
  dropdownItems.forEach(function (dropdownItem) {
    dropdownItem.addEventListener("click", function () {
      if (navbarCollapse.classList.contains("show")) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false,
        });
        bsCollapse.hide();
      }
    });
  });

  // Close navbar when clicking on buttons (like "Đặt lịch")
  const navbarButtons = document.querySelectorAll(
    ".navbar-collapse .btn, .navbar-collapse .d-flex a"
  );
  navbarButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (navbarCollapse.classList.contains("show")) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
          toggle: false,
        });
        bsCollapse.hide();
      }
    });
  });

  // Close navbar when clicking outside of it
  document.addEventListener("click", function (event) {
    const isClickInsideNav =
      navbarCollapse.contains(event.target) ||
      navbarToggler.contains(event.target);

    if (!isClickInsideNav && navbarCollapse.classList.contains("show")) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false,
      });
      bsCollapse.hide();
    }
  });
});
