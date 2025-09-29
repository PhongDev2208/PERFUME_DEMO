# Copilot Instructions for DEMO_SPA

## Project Overview

This is a Vietnamese spa and beauty care website inspired by IRIS BEAUTY. The project focuses on creating a modern, responsive web experience for Vietnamese customers seeking beauty and spa services with elegant UI/UX design, featuring purple and white color schemes with proper Vietnamese typography support.

## Architecture & Structure

- **Bootstrap 5 + Custom CSS**: Modern responsive framework with custom Vietnamese-optimized styling
- **Swiper.js Integration**: Professional carousel library for service showcases and customer testimonials
- **Assets Organization**: Follow the pattern `assets/{css,js,images,fonts}/` for resource organization
- **Page Structure**: Main pages like `index.html` (homepage), future `services.html`, `about.html` pages
- **Vietnamese Language**: All content must be in Vietnamese with proper encoding and typography
- **Color Scheme**: Primary purple (#6f42c1) and white aesthetic following spa/beauty care design patterns

## Architecture & Structure

- **Bootstrap 5 + Custom CSS**: Modern responsive framework with custom Vietnamese-optimized styling
- **Swiper.js Integration**: Professional carousel library for brand sliders and product showcases
- **Assets Organization**: Follow the pattern `assets/{css,js,images,fonts}/` for resource organization
- **Page Structure**: Main pages like `index.html` (homepage), future `shop.html`, `about.html` pages
- **Vietnamese Language**: All content must be in Vietnamese with proper encoding and typography
- **Color Scheme**: Primary black and white aesthetic following xxivstore.com design patterns

## Key Patterns & Conventions

- **CSS Methodology**: Use BEM naming convention (e.g., `.product-card__title--featured`)
- **Bootstrap-First Approach**: **CRITICAL - Always prioritize using Bootstrap's built-in classes and CSS custom properties to avoid conflicts with Bootstrap. Use Bootstrap utility classes, component classes, and CSS variables (--bs-\*) whenever possible before writing custom CSS.**
- **Typography**: Use 'Playfair Display' for headings and Vietnamese-compatible fonts like 'Inter', 'Roboto', or system fonts for body text (avoid 'Lato' as it has Vietnamese rendering issues)
- **Color Palette**: Primary black (#1a1a1a) and white (#ffffff) with subtle grays for depth - inspired by xxivstore.com aesthetic
- **Vietnamese Currency**: Use Vietnamese Đồng (₫) format for all pricing
- **Service Showcase**: Implement Swiper.js carousels for service galleries similar to Seoul Center's treatment displays
- **Image Optimization**: Store service images in `assets/images/services/` with consistent naming

## Development Workflows

- **File Structure**:
  ```
  /
  ├── index.html (Vietnamese homepage)
  ├── services.html (dịch vụ)
  ├── about.html (giới thiệu)
  ├── assets/
  │   ├── css/style.css (main stylesheet with Vietnamese support)
  │   ├── js/script.js (includes Swiper initialization)
  │   ├── images/services/ (service photos)
  │   └── fonts/ (Vietnamese-compatible typography)
  ```
- **Bootstrap Integration**: Always use Bootstrap's utility classes (bg-white, text-dark, d-flex, etc.) and component classes (btn-primary, navbar-light, etc.) as the foundation. Only add custom CSS when Bootstrap doesn't provide the needed functionality.
- **CSS Organization**: Use Bootstrap's CSS custom properties (--bs-primary, --bs-btn-bg, etc.) for theming, organize custom components following Bootstrap patterns
- **JavaScript Patterns**: Include Swiper.js for brand carousels, smooth scrolling, product filtering, ensure compatibility with Bootstrap's JavaScript components
- **Vietnamese Localization**: All text content, navigation, and user interface elements in Vietnamese
- **Responsive Breakpoints**: 576px, 768px, 992px, 1200px following Bootstrap 5 standards

## Business Logic & Features

- **Vietnamese Content**: All text in Vietnamese - "Dịch vụ làm đẹp", "Đặt lịch tư vấn", "Khám phá"
- **Service Categories**: Vietnamese service categories similar to Seoul Center structure
- **Currency Format**: Vietnamese Đồng (₫) pricing (e.g., "2.900.000 ₫")
- **Service Showcase**: Sliding carousel with spa treatments (trị mụn, tắm trắng, cấy collagen, etc.)
- **Vietnamese UX**: Culturally appropriate user experience for Vietnamese spa customers
- **Contact Information**: Vietnamese addresses, phone numbers, and spa business hours

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

- **Beauty & Spa Industry**: Emphasize trust, professionalism, and wellness experience
- **Target Audience**: Vietnamese customers seeking beauty treatments and spa services
- **Content Types**: Service descriptions, treatment benefits, customer testimonials, before/after results
- **Conversion Focus**: Clear consultation booking CTAs, trust signals, professional credentials

When working on this project, prioritize professional appearance, trustworthy design, and clean, maintainable code that reflects the premium nature of spa and beauty services.

## Bootstrap-First Development Guidelines

**ALWAYS prioritize Bootstrap's built-in functionality:**

1. **HTML Structure**: Use Bootstrap classes directly in HTML (bg-white, navbar-light, btn-primary) rather than overriding with custom CSS
2. **CSS Custom Properties**: Leverage Bootstrap's CSS variables (--bs-primary, --bs-btn-bg, --bs-nav-link-color) for consistent theming
3. **Component Styling**: Extend Bootstrap components using their documented CSS custom properties and modifier classes
4. **Responsive Design**: Use Bootstrap's responsive utilities (d-md-block, col-lg-6, etc.) instead of custom media queries
5. **Color System**: Work with Bootstrap's color system and utility classes before adding custom colors
6. **Spacing**: Use Bootstrap's spacing utilities (p-3, m-4, gap-2) instead of custom margin/padding
7. **Flexbox & Grid**: Use Bootstrap's flex utilities (d-flex, justify-content-between) and grid system

**Custom CSS should only be added when:**

- Bootstrap doesn't provide the specific functionality needed
- Vietnamese typography requires special handling
- Industry-specific luxury aesthetic elements are needed
- Brand-specific styling that extends beyond Bootstrap's capabilities

This approach ensures compatibility, maintainability, and prevents conflicts with Bootstrap's JavaScript components.
