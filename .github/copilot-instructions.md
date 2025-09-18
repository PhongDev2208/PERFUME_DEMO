# Copilot Instructions for DEMO_PERFUME

## Project Overview

This is a Vietnamese perfume e-commerce website inspired by https://xxivstore.com/. The project focuses on creating a modern, responsive web experience for Vietnamese customers with elegant UI/UX design, featuring black and white color schemes and proper Vietnamese typography support.

## Architecture & Structure

- **Bootstrap 5 + Custom CSS**: Modern responsive framework with custom Vietnamese-optimized styling
- **Swiper.js Integration**: Professional carousel library for brand sliders and product showcases
- **Assets Organization**: Follow the pattern `assets/{css,js,images,fonts}/` for resource organization
- **Page Structure**: Main pages like `index.html` (homepage), future `shop.html`, `about.html` pages
- **Vietnamese Language**: All content must be in Vietnamese with proper encoding and typography
- **Color Scheme**: Primary black and white aesthetic following xxivstore.com design patterns

## Key Patterns & Conventions

- **CSS Methodology**: Use BEM naming convention (e.g., `.product-card__title--featured`)
- **Typography**: Use 'Playfair Display' for headings and Vietnamese-compatible fonts like 'Inter', 'Roboto', or system fonts for body text (avoid 'Lato' as it has Vietnamese rendering issues)
- **Color Palette**: Primary black (#1a1a1a) and white (#ffffff) with subtle grays for depth - inspired by xxivstore.com aesthetic
- **Vietnamese Currency**: Use Vietnamese Đồng (₫) format for all pricing
- **Brand Slider**: Implement Swiper.js carousels for brand showcases similar to xxivstore.com's slide-brand-featured
- **Image Optimization**: Store product images in `assets/images/products/` with consistent naming

## Development Workflows

- **File Structure**:
  ```
  /
  ├── index.html (Vietnamese homepage)
  ├── shop.html (danh mục sản phẩm)
  ├── about.html (giới thiệu thương hiệu)
  ├── assets/
  │   ├── css/style.css (main stylesheet with Vietnamese support)
  │   ├── js/script.js (includes Swiper initialization)
  │   ├── images/products/ (product photos)
  │   └── fonts/ (Vietnamese-compatible typography)
  ```
- **CSS Organization**: Use CSS custom properties for black/white theming, organize by components
- **JavaScript Patterns**: Include Swiper.js for brand carousels, smooth scrolling, product filtering
- **Vietnamese Localization**: All text content, navigation, and user interface elements in Vietnamese
- **Responsive Breakpoints**: 576px, 768px, 992px, 1200px following Bootstrap 5 standards

## Business Logic & Features

- **Vietnamese Content**: All text in Vietnamese - "Nước hoa nam/nữ/unisex", "Thêm giỏ hàng", "Khám phá"
- **Product Categories**: Vietnamese categories similar to xxivstore.com structure
- **Currency Format**: Vietnamese Đồng (₫) pricing (e.g., "7.900.000 ₫")
- **Brand Showcase**: Sliding carousel with famous perfume brands (Creed, Tom Ford, Le Labo, etc.)
- **Vietnamese UX**: Culturally appropriate user experience for Vietnamese customers
- **Contact Information**: Vietnamese addresses, phone numbers, and business hours

## Testing & Quality

- **Cross-browser**: Test in Chrome, Firefox, Safari, and Edge
- **Responsive**: Verify layouts on mobile, tablet, and desktop viewports
- **Performance**: Use browser dev tools to check Core Web Vitals
- **Accessibility**: Ensure proper alt tags, semantic HTML, keyboard navigation

## External Dependencies

- **Swiper.js**: Required for brand carousel functionality like xxivstore.com
- **Bootstrap 5**: Core responsive framework
- **Font Awesome**: For icons and UI elements
- **Google Fonts**: Use 'Playfair Display' for headings, avoid 'Lato' for Vietnamese text
- **Vietnamese Font Alternatives**: 'Inter', 'Roboto', 'Nunito Sans', or system fonts for better Vietnamese character support

## Domain-Specific Notes

- **Perfume Industry**: Emphasize visual appeal, product photography, and brand prestige
- **Target Audience**: Luxury consumers expecting premium web experience
- **Content Types**: Product descriptions, brand history, ingredient highlights, fragrance notes
- **Conversion Focus**: Clear CTAs, trust signals, elegant checkout process

When working on this project, prioritize visual elegance, smooth user experience, and clean, maintainable code that reflects the luxury nature of the perfume industry.
