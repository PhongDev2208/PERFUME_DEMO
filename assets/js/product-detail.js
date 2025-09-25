// Product Detail Page JavaScript

// Image Gallery Functions
function changeMainImage(src) {
  document.getElementById("main-image").src = src;

  // Update active thumbnail
  document.querySelectorAll(".thumbnail").forEach((thumb) => {
    thumb.classList.remove("active");
  });
  event.target.classList.add("active");
}

// Quantity Functions
function increaseQuantity() {
  const input = document.getElementById("quantity");
  input.value = parseInt(input.value) + 1;
}

function decreaseQuantity() {
  const input = document.getElementById("quantity");
  if (parseInt(input.value) > 1) {
    input.value = parseInt(input.value) - 1;
  }
}

// Initialize product detail functionality
document.addEventListener("DOMContentLoaded", function () {
  // Add to Cart Function
  document
    .querySelector(".btn-add-cart")
    .addEventListener("click", function () {
      // Add cart functionality here
      alert("Sản phẩm đã được thêm vào giỏ hàng!");
    });

  // Size Selection Price Update
  document.querySelectorAll('input[name="size"]').forEach((radio) => {
    radio.addEventListener("change", function () {
      const priceElement = document.querySelector(".current-price");
      if (this.id === "size-100ml") {
        priceElement.textContent = "3.450.000₫";
      } else {
        priceElement.textContent = "2.950.000₫";
      }
    });
  });

  // Smooth scroll for product navigation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });

  // Image zoom effect on hover
  const mainImage = document.getElementById("main-image");
  if (mainImage) {
    mainImage.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.05)";
    });

    mainImage.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1)";
    });
  }

  // Product features animation
  const featureIcons = document.querySelectorAll(".feature-icon");
  featureIcons.forEach((icon) => {
    icon.addEventListener("mouseenter", function () {
      this.style.transform = "rotate(360deg) scale(1.1)";
      this.style.transition = "transform 0.5s ease";
    });

    icon.addEventListener("mouseleave", function () {
      this.style.transform = "rotate(0deg) scale(1)";
    });
  });

  // Related products hover effect
  const relatedProducts = document.querySelectorAll(".related-product");
  relatedProducts.forEach((product) => {
    product.addEventListener("mouseenter", function () {
      const img = this.querySelector("img");
      if (img) {
        img.style.transform = "scale(1.1)";
        img.style.transition = "transform 0.3s ease";
      }
    });

    product.addEventListener("mouseleave", function () {
      const img = this.querySelector("img");
      if (img) {
        img.style.transform = "scale(1)";
      }
    });
  });
});
