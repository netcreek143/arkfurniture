/**
 * Ark Furniture - Shared Components
 * Centralizes Header, Footer, and common UI elements.
 */

const SharedComponents = {
    topBar: `
        <div class="top-bar">
            <div class="top-bar-left">
                <span>Designed for Comfort</span>
                <span class="separator">|</span>
                <span>Delivered Across India</span>
            </div>
            <div class="top-bar-right">
                <a href="tel:+919962100903" class="contact-link">+91 99621 00903</a>
                <span class="separator">|</span>
                <a href="mailto:info@arkfurniture.in" class="contact-link">info@arkfurniture.in</a>
            </div>
        </div>
    `,

    navbar: `
        <nav class="navbar">
            <div class="nav-left">
                <a href="index.html" class="logo-link">
                    <img src="images/logo.png" alt="Ark Logo" class="logo-img">
                </a>
            </div>
            <div class="nav-center">
                <a href="category.html?type=foyer">Foyer</a>
                <a href="category.html?type=living">Living</a>
                <a href="category.html?type=dining">Dining</a>
                <a href="category.html?type=bedroom">Bedroom</a>
                <a href="category.html?type=modular">Modular</a>
                <a href="category.html?type=outdoor">Outdoor</a>
                <a href="category.html?type=decor">Decor</a>
                <a href="category.html?type=lightings">Lightings</a>
            </div>
            <div class="nav-right">
                <a href="#" class="nav-icon-link desktop-only" id="navbarLoginBtn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <span id="navbarLoginText">Login</span>
                </a>
                <a href="#" class="icon-link" id="navbarSearchBtn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                        stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                </a>
                <a href="wishlist.html" class="icon-link" id="navbarWishlistBtn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                    <span class="badge" id="wishlistBadge" style="display:none">0</span>
                </a>
                <a href="#" class="icon-link" id="navbarCartBtn">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                    </svg>
                    <span class="badge" id="cartBadge" style="display:none">0</span>
                </a>
                <!-- Mobile Hamburger Button -->
                <button class="hamburger-menu-btn mobile-only" id="mobileMenuBtn" aria-label="Open Menu">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
            </div>
        </nav>
    `,

    leadCapture: `
        <section class="lead-capture-section">
            <div class="lead-capture-container" id="leadCaptureContainer">
                <!-- Initial Form State -->
                <div class="lead-form-state" id="leadFormState">
                    <div class="lead-capture-header">
                        <h2 class="lead-heading">Find Furniture Made for You</h2>
                        <p class="lead-paragraph">Share a few details and let us help you discover furniture that perfectly fits your home and lifestyle. Our design experts will guide you with thoughtfully curated Ark collections.</p>
                    </div>
                    <form class="lead-form" id="leadCaptureForm">
                        <div class="form-group">
                            <input type="text" id="lead-name" class="lead-input" placeholder="Name" required>
                        </div>
                        <div class="form-group">
                            <input type="tel" id="lead-mobile" class="lead-input" placeholder="Contact Number" required>
                        </div>
                        <div class="form-group">
                            <input type="email" id="lead-email" class="lead-input" placeholder="Email ID" required>
                        </div>
                        <button type="submit" class="lead-submit-btn">Submit</button>
                    </form>
                </div>

                <!-- Thank You State -->
                <div class="lead-thanks-state" id="leadThanksState" style="display: none;">
                    <div class="thanks-icon">
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--color-orange)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                    </div>
                    <h2 class="lead-heading">Thank You!</h2>
                    <p class="lead-paragraph">We've received your details. One of our design experts will reach out to you shortly to help you find your perfect furniture.</p>
                    <button class="btn-primary" onclick="location.reload()">Back to Home</button>
                </div>
            </div>
        </section>
    `,

    brochureBanner: `
        <section class="footer-promo-banner">
            <img src="images/fb1.png" alt="Discover Furniture Crafted by Ark" class="footer-banner-bg">
            <div class="footer-banner-content">
                <h2 class="footer-banner-heading">Discover Furniture<br>Crafted by Ark</h2>
                <button class="footer-cta-btn">Download Brochure Now</button>
            </div>
        </section>
    `,

    footer: `
        <footer class="site-footer">
            <div class="footer-container">
                <div class="footer-brand-area">
                    <div class="footer-logo">
                        <img src="images/footerlogo.png" alt="Ark Logo" class="ark-footer-logo">
                    </div>
                    <p class="footer-description">At ARK Furniture, we create thoughtfully designed pieces that bring comfort, elegance, and purpose into every space. From sculpted lounge chairs to refined dining collections and serene bedroom essentials.</p>
                </div>
                <div class="footer-columns">
                    <div class="footer-col">
                        <button class="footer-col-heading footer-accordion-btn" aria-expanded="false">
                            About Us
                            <svg class="footer-accordion-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </button>
                        <div class="footer-accordion-body">
                            <ul class="footer-links">
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">FAQ</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-col shop-col">
                        <button class="footer-col-heading footer-accordion-btn" aria-expanded="false">
                            Shop
                            <svg class="footer-accordion-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </button>
                        <div class="footer-accordion-body shop-subcols">
                            <ul class="footer-links">
                                <li><a href="category.html?type=foyer">Foyer</a></li>
                                <li><a href="category.html?type=living">Living</a></li>
                                <li><a href="category.html?type=dining">Dining</a></li>
                                <li><a href="category.html?type=bedroom">Bedroom</a></li>
                            </ul>
                            <ul class="footer-links">
                                <li><a href="category.html?type=modular">Modular</a></li>
                                <li><a href="category.html?type=outdoor">Outdoor</a></li>
                                <li><a href="category.html?type=decor">Decor</a></li>
                                <li><a href="category.html?type=lightings">Lightings</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-col">
                        <button class="footer-col-heading footer-accordion-btn" aria-expanded="false">
                            Terms and Conditions
                            <svg class="footer-accordion-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </button>
                        <div class="footer-accordion-body">
                            <ul class="footer-links">
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Return Policy</a></li>
                                <li><a href="#">Shipping Policy</a></li>
                                <li><a href="#">Warranty Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="footer-col contact-col">
                        <button class="footer-col-heading footer-accordion-btn" aria-expanded="false">
                            Contact us
                            <svg class="footer-accordion-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </button>
                        <div class="footer-accordion-body">
                            <ul class="footer-links">
                                <li><a href="tel:+919962100903">+91 99621 00903</a></li>
                                <li><a href="mailto:info@arkfurniture.in">info@arkfurniture.in</a></li>
                            </ul>
                            <div class="social-icons">
                                <a href="#" class="social-link" aria-label="Instagram"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path></svg></a>
                                <a href="#" class="social-link" aria-label="Facebook"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"></path></svg></a>
                                <a href="#" class="social-link" aria-label="X"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"></path></svg></a>
                                <a href="#" class="social-link" aria-label="YouTube"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M21.582 6.186a2.6 2.6 0 0 0-1.826-1.84c-1.611-.435-8.056-.435-8.056-.435s-6.445 0-8.056.436a2.6 2.6 0 0 0-1.826 1.84C1.385 7.821 1.385 12 1.385 12s0 4.18.433 5.814a2.6 2.6 0 0 0 1.826 1.84c1.611.432 8.056.432 8.056.432s6.445 0 8.056-.432a2.6 2.6 0 0 0 1.826-1.84c.433-1.635.433-5.814.433-5.814s0-4.178-.433-5.814zm-11.83 9.07v-6.512l6.095 3.256-6.095 3.256z"></path></svg></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-divider"></div>
                <p class="copyright">© 2026 Ark Furnitures</p>
            </div>
        </footer>
    `,

    loginModal: `
        <div class="modal-overlay" id="loginModalOverlay">
            <div class="login-modal">
                <button class="modal-close" id="closeModal">&times;</button>
                <div class="modal-container">
                    <div class="modal-poster">
                        <div class="poster-content">
                            <div class="poster-badge">UP TO</div>
                            <div class="poster-badge is-dark">30% OFF</div>
                            <div class="poster-offer">FESTIVE SALE</div>
                            <p class="poster-shipping">Free shipping on all orders over ₹10,000</p>
                        </div>
                        <img src="images/hero1.png" alt="Furniture Display" class="poster-img">
                    </div>
                    <div class="modal-form">
                        <h2 class="form-title">Login</h2>
                        <form id="loginForm">
                            <div class="form-group">
                                <input type="text" id="loginIdentifier" class="form-input" placeholder="Email or Mobile Number" required>
                            </div>
                            <div class="form-group pass-group">
                                <input type="password" id="loginPassword" class="form-input" placeholder="Password" required>
                                <span class="password-toggle" id="togglePassword">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                </span>
                            </div>
                            <div class="forgot-pass-wrapper">
                                <a href="#" class="forgot-pass-link">Forgot Password?</a>
                            </div>
                            <div class="form-actions">
                                <button type="submit" class="btn-signin">Sign In</button>
                                <button type="button" class="btn-otp">Get OTP</button>
                            </div>
                            <p id="loginError" class="auth-error-msg">Invalid credentials. Please try again.</p>
                        </form>
                        <p class="signup-prompt">New to Ark? <a href="#" class="signup-link">Sign up now</a></p>
                        
                        <div class="divider">OR</div>
                        
                        <div class="social-login">
                            <button class="social-btn">
                                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" width="18" alt="Google">
                                Google
                            </button>
                            <button class="social-btn">
                                <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg" width="18" alt="Facebook">
                                Facebook
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    videoModal: `
        <div class="video-modal-overlay" id="videoModalOverlay">
            <div class="video-modal-container">
                <button class="video-modal-close" id="closeVideoModal">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
                <div class="video-wrapper">
                    <video id="siteVideoPlayer" width="100%" height="auto" controls>
                        <source src="videos/cv1.mp4" type="video/mp4">
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    `,

    searchOverlay: `
        <div class="search-overlay" id="searchOverlay">
            <button class="modal-close" id="closeSearch">&times;</button>
            <div class="search-container">
                <div class="search-input-wrapper">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <input type="text" id="searchInput" placeholder="Search for premium furniture..." autofocus>
                </div>
                <div class="search-trending">
                    <h4>Trending Searches</h4>
                    <div class="trending-tags">
                        <span>Modular Kitchen</span>
                        <span>Luxury Beds</span>
                        <span>Velvet Sofa</span>
                        <span>Dining Sets</span>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    `,

    mobileMenu: `
        <div class="mobile-menu-overlay" id="mobileMenuOverlay">
            <div class="mobile-menu-panel">
                <div class="mobile-menu-header">
                    <img src="images/logo.png" alt="Ark Logo" class="logo-img">
                    <button class="mobile-menu-close" id="closeMobileMenu">&times;</button>
                </div>
                <div class="mobile-menu-links">
                    <a href="category.html?type=foyer">Foyer</a>
                    <a href="category.html?type=living">Living</a>
                    <a href="category.html?type=dining">Dining</a>
                    <a href="category.html?type=bedroom">Bedroom</a>
                    <a href="category.html?type=modular">Modular</a>
                    <a href="category.html?type=outdoor">Outdoor</a>
                    <a href="category.html?type=decor">Decor</a>
                    <a href="category.html?type=lightings">Lightings</a>
                </div>
                <div class="mobile-menu-footer">
                    <a href="#" class="mobile-auth-btn" id="mobileLoginBtnMenu">Login / Signup</a>
                    <div class="mobile-social-links">
                        <a href="#" aria-label="Instagram"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"></path></svg></a>
                        <a href="#" aria-label="Facebook"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"></path></svg></a>
                    </div>
                </div>
            </div>
        </div>
    `,

    wishlistSidebar: `
        <div class="sidebar-overlay" id="wishlistOverlay">
            <div class="sidebar-panel">
                <div class="sidebar-header">
                    <h3>My Wishlist</h3>
                    <button class="sidebar-close" id="closeWishlist">&times;</button>
                </div>
                <div class="sidebar-content" id="wishlistContent">
                    <div class="empty-state">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                        <p>Your wishlist is empty.</p>
                        <a href="category.html?type=dining" class="btn-primary">Explore Products</a>
                    </div>
                </div>
                <!-- Added Footer for Full Wishlist View -->
                <div class="sidebar-footer" id="wishlistFooter" style="display:none; padding: 20px; border-top: 1px solid #f0f0f0;">
                    <a href="wishlist.html" class="view-more-link" style="color: var(--color-orange); font-weight: 600; text-decoration: none; display: flex; align-items: center; justify-content: center; gap: 8px;">
                        View Full Wishlist & History 
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    `,

    cartSidebar: `
        <div class="sidebar-overlay" id="cartOverlay">
            <div class="sidebar-panel">
                <div class="sidebar-header">
                    <h3>Shopping Cart</h3>
                    <button class="sidebar-close" id="closeCart">&times;</button>
                </div>
                <div class="sidebar-content" id="cartContent">
                    <div class="empty-state">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                        <p>Your cart is empty.</p>
                        <a href="category.html?type=dining" class="btn-primary">Start Shopping</a>
                    </div>
                </div>
                <div class="sidebar-footer">
                    <div class="cart-total">
                        <span>Total:</span>
                        <span>₹0</span>
                    </div>
                    <button class="btn-primary checkout-btn" disabled>Checkout</button>
                    <a href="wishlist.html" class="view-more-link" style="color: var(--color-orange); font-size: 13px; font-weight: 600; text-decoration: none; display: block; text-align: center; margin-top: 15px;">View Saved Items & History →</a>
                </div>
            </div>
        </div>
    `,

    init() {
        // Inject Header
        const headerPlaceholder = document.getElementById('shared-header');
        if (headerPlaceholder) {
            headerPlaceholder.innerHTML = this.topBar + this.navbar;
        }

        // Inject Lead Capture
        const leadPlaceholder = document.getElementById('shared-lead-capture');
        if (leadPlaceholder) {
            leadPlaceholder.innerHTML = this.leadCapture;
        }

        // Inject Brochure Banner
        const brochurePlaceholder = document.getElementById('shared-brochure-banner');
        if (brochurePlaceholder) {
            brochurePlaceholder.innerHTML = this.brochureBanner;
        }

        // Inject Footer
        const footerPlaceholder = document.getElementById('shared-footer');
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = this.footer;
        }

        // Inject Login Modal
        const modalPlaceholder = document.getElementById('shared-login-modal');
        if (modalPlaceholder) {
            modalPlaceholder.innerHTML = this.loginModal;
        }

        // Inject Video Modal
        const videoModalPlaceholder = document.getElementById('shared-video-modal');
        if (videoModalPlaceholder) {
            videoModalPlaceholder.innerHTML = this.videoModal;
        }

        // Inject Search Overlay
        const searchPlaceholder = document.getElementById('shared-search-overlay');
        if (searchPlaceholder) {
            searchPlaceholder.innerHTML = this.searchOverlay;
        }

        // Inject Wishlist Sidebar
        const wishlistPlaceholder = document.getElementById('shared-wishlist-sidebar');
        if (wishlistPlaceholder) {
            wishlistPlaceholder.innerHTML = this.wishlistSidebar;
        }

        // Inject Cart Sidebar
        const cartPlaceholder = document.getElementById('shared-cart-sidebar');
        if (cartPlaceholder) {
            cartPlaceholder.innerHTML = this.cartSidebar;
        }

        // Inject Mobile Menu
        const mobileMenuPlaceholder = document.getElementById('shared-mobile-menu');
        if (mobileMenuPlaceholder) {
            mobileMenuPlaceholder.innerHTML = this.mobileMenu;
        }

        // Initialize Shared Logic
        this.initMobileMenu();
        this.initAuth();
        this.initModal();
        this.initVideoModal();
        this.initHeaderFeatures();
        this.initLeadForm();
        this.initFooterAccordion();
        
        // Finalize state UI
        this.Cart.sync();
        this.Wishlist.sync();
    },

    initMobileMenu() {
        const menuBtn = document.getElementById('mobileMenuBtn');
        const menuOverlay = document.getElementById('mobileMenuOverlay');
        const closeBtn = document.getElementById('closeMobileMenu');
        const loginBtn = document.getElementById('mobileLoginBtnMenu');
        const loginModal = document.getElementById('loginModalOverlay');

        if (menuBtn && menuOverlay && closeBtn) {
            menuBtn.addEventListener('click', () => {
                menuOverlay.classList.add('is-active');
                document.body.style.overflow = 'hidden';
            });

            closeBtn.addEventListener('click', () => {
                menuOverlay.classList.remove('is-active');
                document.body.style.overflow = 'auto';
            });

            menuOverlay.addEventListener('click', (e) => {
                if (e.target === menuOverlay) {
                    menuOverlay.classList.remove('is-active');
                    document.body.style.overflow = 'auto';
                }
            });
        }

        if (loginBtn && loginModal) {
            loginBtn.addEventListener('click', (e) => {
                e.preventDefault();
                menuOverlay.classList.remove('is-active');
                loginModal.classList.add('is-active');
            });
        }
    },

    initFooterAccordion() {
        const isMobile = () => window.innerWidth <= 768;
        const btns = document.querySelectorAll('.footer-accordion-btn');

        btns.forEach(btn => {
            const body = btn.nextElementSibling; // .footer-accordion-body
            if (!body) return;

            btn.addEventListener('click', () => {
                if (!isMobile()) return;
                const isOpen = body.classList.toggle('is-open');
                btn.setAttribute('aria-expanded', isOpen);
            });
        });

        window.addEventListener('resize', () => {
            if (!isMobile()) {
                document.querySelectorAll('.footer-accordion-body').forEach(b => b.classList.remove('is-open'));
                btns.forEach(btn => btn.setAttribute('aria-expanded', 'false'));
            }
        });
    },

    // --- CART MANAGER ---
    Cart: {
        KEY: 'ark_cart',
        items: [],

        init() {
            this.items = JSON.parse(localStorage.getItem(this.KEY)) || [];
        },

        add(product, qty = 1) {
            this.init();
            const existing = this.items.find(item => item.id === product.id);
            if (existing) {
                existing.quantity += qty;
            } else {
                this.items.push({ ...product, quantity: qty });
            }
            this.save();
            this.sync();
            alert(`${product.name} added to cart!`);
        },

        remove(id) {
            this.init();
            this.items = this.items.filter(item => item.id !== id);
            this.save();
            this.sync();
        },

        updateQuantity(id, delta) {
            this.init();
            const item = this.items.find(i => i.id === id);
            if (item) {
                item.quantity += delta;
                if (item.quantity <= 0) return this.remove(id);
                this.save();
                this.sync();
            }
        },

        save() {
            localStorage.setItem(this.KEY, JSON.stringify(this.items));
        },

        sync() {
            this.init();
            const cartContent = document.getElementById('cartContent');
            const cartTotalEl = document.querySelector('.cart-total span:last-child');
            const checkoutBtn = document.querySelector('.checkout-btn');
            
            if (!cartContent) return;

            if (this.items.length === 0) {
                cartContent.innerHTML = `
                    <div class="empty-state">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                        <p>Your cart is empty.</p>
                        <a href="category.html?type=dining" class="btn-primary">Start Shopping</a>
                    </div>
                `;
                if (cartTotalEl) cartTotalEl.textContent = '₹0';
                if (checkoutBtn) checkoutBtn.disabled = true;
                return;
            }

            let total = 0;
            cartContent.innerHTML = this.items.map(item => {
                // More robust price parsing to handle ₹ and other characters
                const priceNum = parseInt(item.price.toString().replace(/[^0-9]/g, '')) || 0;
                total += priceNum * item.quantity;
                return `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}">
                        <div class="cart-item-info">
                            <h4>${item.name}</h4>
                            <p>₹${item.price}</p>
                            <div class="qty-controls">
                                <button onclick="SharedComponents.Cart.updateQuantity('${item.id}', -1)">-</button>
                                <span>${item.quantity}</span>
                                <button onclick="SharedComponents.Cart.updateQuantity('${item.id}', 1)">+</button>
                            </div>
                        </div>
                        <button class="remove-item" onclick="SharedComponents.Cart.remove('${item.id}')">&times;</button>
                    </div>
                `;
            }).join('');

            if (cartTotalEl) cartTotalEl.textContent = `₹${total.toLocaleString('en-IN')}`;
            if (checkoutBtn) checkoutBtn.disabled = false;

            // Update Badge
            const badge = document.getElementById('cartBadge');
            if (badge) {
                const count = this.items.reduce((sum, item) => sum + item.quantity, 0);
                badge.textContent = count;
                badge.style.display = count > 0 ? 'flex' : 'none';
            }
        }
    },

    // --- WISHLIST MANAGER ---
    Wishlist: {
        KEY: 'ark_wishlist',
        items: [],

        init() {
            this.items = JSON.parse(localStorage.getItem(this.KEY)) || [];
        },

        toggle(product) {
            this.init();
            const index = this.items.findIndex(item => item.id === product.id);
            if (index > -1) {
                this.items.splice(index, 1);
            } else {
                this.items.push(product);
            }
            this.save();
            this.sync();
        },

        save() {
            localStorage.setItem(this.KEY, JSON.stringify(this.items));
        },

        sync() {
            this.init();
            const wishlistContent = document.getElementById('wishlistContent');
            if (!wishlistContent) return;

            if (this.items.length === 0) {
                wishlistContent.innerHTML = `
                    <div class="empty-state">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                        <p>Your wishlist is empty.</p>
                        <a href="category.html?type=dining" class="btn-primary">Explore Products</a>
                    </div>
                `;
                return;
            }

            wishlistContent.innerHTML = this.items.map(item => `
                <div class="wishlist-item" onclick="window.location.href='product.html?id=${item.id}'" style="cursor:pointer">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="wishlist-item-info">
                        <h4>${item.name}</h4>
                        <p>₹${item.price}</p>
                    </div>
                    <button class="remove-item" onclick="event.stopPropagation(); SharedComponents.Wishlist.toggle({id: '${item.id}'})">&times;</button>
                </div>
            `).join('');

            // Update Badge
            const badge = document.getElementById('wishlistBadge');
            const footer = document.getElementById('wishlistFooter');
            
            if (badge) {
                const count = this.items.length;
                badge.textContent = count;
                badge.style.display = count > 0 ? 'flex' : 'none';
                
                // Keep footer visible so users can always view history/more
                if (footer) footer.style.display = 'block';
            }
        }
    },

    // --- SEARCH MANAGER ---
    Search: {
        handle(query) {
            const overlay = document.getElementById('searchOverlay');
            if (!overlay) return;
            
            if (!query || query.trim().length < 2) {
                this.resetResults();
                return;
            }

            const q = query.toLowerCase().trim();

            // Ensure products object exists
            const productsData = window.products || products;
            if (typeof productsData === 'undefined') {
                console.error("Products data not loaded for search.");
                return;
            }

            const results = Object.values(productsData).filter(p => {
                if (!p || !p.name) return false;
                const nameMatch = p.name.toLowerCase().includes(q);
                const catMatch = p.category && p.category.toLowerCase().includes(q);
                const descMatch = p.description && p.description.toLowerCase().includes(q);
                return nameMatch || catMatch || descMatch;
            });

            this.renderResults(results);
        },

        renderResults(results) {
            let resultsArea = document.getElementById('searchResultsArea');
            if (!resultsArea) {
                resultsArea = document.createElement('div');
                resultsArea.id = 'searchResultsArea';
                resultsArea.className = 'search-results-area';
                document.querySelector('.search-container').appendChild(resultsArea);
            }

            if (results.length === 0) {
                resultsArea.innerHTML = `<p class="no-results">No products found for your search.</p>`;
                return;
            }

            resultsArea.innerHTML = `
                <div class="search-results-grid">
                    ${results.map(p => `
                        <div class="search-result-item" onclick="window.location.href='product.html?id=${p.id}'">
                            <img src="${p.image || p.mainImage}" alt="${p.name}">
                            <div class="result-info">
                                <h5>${p.name}</h5>
                                <span>₹${p.price}</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
            
            // Hide trending tags when showing results
            const trending = document.querySelector('.search-trending');
            if (trending) trending.style.display = 'none';
        },

        resetResults() {
            const resultsArea = document.getElementById('searchResultsArea');
            if (resultsArea) resultsArea.innerHTML = '';
            const trending = document.querySelector('.search-trending');
            if (trending) trending.style.display = 'block';
        }
    },

    initAuth() {
        this.AuthManager = {
            KEY: 'ark_user_session',
            
            login(userData) {
                localStorage.setItem(this.KEY, JSON.stringify({
                    ...userData,
                    loginTime: Date.now()
                }));
                this.updateUI();
            },

            logout() {
                localStorage.removeItem(this.KEY);
                this.updateUI();
            },

            isLoggedIn() {
                return localStorage.getItem(this.KEY) !== null;
            },

            getUser() {
                return JSON.parse(localStorage.getItem(this.KEY));
            },

            updateUI() {
                const loginBtn = document.getElementById('navbarLoginBtn');
                const loginText = document.getElementById('navbarLoginText');
                
                if (this.isLoggedIn()) {
                    if (loginText) loginText.textContent = 'Logout';
                    if (loginBtn) loginBtn.classList.add('is-logged-in');
                } else {
                    if (loginText) loginText.textContent = 'Login';
                    if (loginBtn) loginBtn.classList.remove('is-logged-in');
                }
            }
        };

        this.AuthManager.updateUI();
    },

    initModal() {
        const modalOverlay = document.getElementById('loginModalOverlay');
        const closeModalBtn = document.getElementById('closeModal');
        const togglePassword = document.getElementById('togglePassword');
        const passwordInput = document.getElementById('loginPassword');
        const loginForm = document.getElementById('loginForm');
        const loginError = document.getElementById('loginError');
        const navbarLoginBtn = document.getElementById('navbarLoginBtn');

        if (navbarLoginBtn) {
            navbarLoginBtn.addEventListener('click', (e) => {
                e.preventDefault();
                if (this.AuthManager.isLoggedIn()) {
                    this.AuthManager.logout();
                    alert('Successfully logged out.');
                } else {
                    if (modalOverlay) {
                        modalOverlay.classList.add('is-active');
                        document.body.style.overflow = 'hidden';
                    }
                }
            });
        }

        if (closeModalBtn && modalOverlay) {
            closeModalBtn.addEventListener('click', () => {
                modalOverlay.classList.remove('is-active');
                document.body.style.overflow = 'auto';
            });
        }

        if (modalOverlay) {
            modalOverlay.addEventListener('click', (e) => {
                if (e.target === modalOverlay) {
                    modalOverlay.classList.remove('is-active');
                    document.body.style.overflow = 'auto';
                }
            });
        }

        if (togglePassword && passwordInput) {
            togglePassword.addEventListener('click', () => {
                const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
                passwordInput.setAttribute('type', type);
                
                // Update SVG based on state
                if (type === 'password') {
                    togglePassword.innerHTML = `
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                            <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                    `;
                } else {
                    togglePassword.innerHTML = `
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                            <line x1="1" y1="1" x2="23" y2="23"></line>
                        </svg>
                    `;
                }
            });
        }

        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const identifier = document.getElementById('loginIdentifier').value;
                const password = document.getElementById('loginPassword').value;

                if (identifier && password.length >= 4) {
                    if (loginError) loginError.classList.remove('visible');
                    this.AuthManager.login({ username: identifier });
                    if (modalOverlay) {
                        modalOverlay.classList.remove('is-active');
                        document.body.style.overflow = 'auto';
                    }
                    alert(`Welcome back, ${identifier}!`);
                } else {
                    if (loginError) {
                        loginError.textContent = 'Invalid credentials. Password must be at least 4 chars.';
                        loginError.classList.add('visible');
                    }
                }
            });
        }
    },

    initVideoModal() {
        const videoModalOverlay = document.getElementById('videoModalOverlay');
        const closeVideoModalBtn = document.getElementById('closeVideoModal');
        const videoElement = document.getElementById('siteVideoPlayer');
        const promoBanners = document.querySelectorAll('.bedroom-banner');

        const openVideo = () => {
            if (videoModalOverlay && videoElement) {
                videoModalOverlay.classList.add('is-active');
                document.body.style.overflow = 'hidden';
                videoElement.play().catch(err => {
                    console.warn("Autoplay was prevented:", err);
                });
            }
        };

        const closeVideo = () => {
            if (videoModalOverlay && videoElement) {
                videoModalOverlay.classList.remove('is-active');
                videoElement.pause();
                videoElement.currentTime = 0; // Reset video to start
                document.body.style.overflow = 'auto';
            }
        };

        promoBanners.forEach(banner => {
            banner.style.cursor = 'pointer';
            banner.addEventListener('click', openVideo);
        });

        if (closeVideoModalBtn) {
            closeVideoModalBtn.addEventListener('click', closeVideo);
        }

        if (videoModalOverlay) {
            videoModalOverlay.addEventListener('click', (e) => {
                if (e.target === videoModalOverlay) {
                    closeVideo();
                }
            });
        }
    },

    initHeaderFeatures() {
        const searchBtn = document.getElementById('navbarSearchBtn');
        const searchOverlay = document.getElementById('searchOverlay');
        const closeSearch = document.getElementById('closeSearch');
        const searchInput = document.getElementById('searchInput');

        const wishlistBtn = document.getElementById('navbarWishlistBtn');
        const wishlistOverlay = document.getElementById('wishlistOverlay');
        const closeWishlist = document.getElementById('closeWishlist');

        const cartBtn = document.getElementById('navbarCartBtn');
        const cartOverlay = document.getElementById('cartOverlay');
        const closeCart = document.getElementById('closeCart');

        // Search Handlers
        if (searchBtn && searchOverlay) {
            searchBtn.addEventListener('click', (e) => {
                e.preventDefault();
                searchOverlay.classList.add('is-active');
                document.body.style.overflow = 'hidden';
                if (searchInput) {
                    setTimeout(() => searchInput.focus(), 100);
                    // Add listener once
                    if (!searchInput.dataset.initialized) {
                        searchInput.addEventListener('input', (e) => {
                            this.Search.handle(e.target.value);
                        });
                        searchInput.dataset.initialized = 'true';
                    }
                }

                // Trending tags listeners
                const tags = searchOverlay.querySelectorAll('.trending-tags span');
                tags.forEach(tag => {
                    tag.addEventListener('click', () => {
                        if (searchInput) {
                            searchInput.value = tag.textContent;
                            this.Search.handle(tag.textContent);
                        }
                    });
                });
            });
        }

        if (closeSearch) {
            closeSearch.addEventListener('click', () => {
                searchOverlay.classList.remove('is-active');
                document.body.style.overflow = 'auto';
            });
        }

        // Wishlist Handlers
        if (wishlistBtn && wishlistOverlay) {
            wishlistBtn.addEventListener('click', (e) => {
                e.preventDefault();
                wishlistOverlay.classList.add('is-active');
                document.body.style.overflow = 'hidden';
            });
        }

        if (closeWishlist) {
            closeWishlist.addEventListener('click', () => {
                wishlistOverlay.classList.remove('is-active');
                document.body.style.overflow = 'auto';
            });
        }

        // Cart Handlers
        if (cartBtn && cartOverlay) {
            cartBtn.addEventListener('click', (e) => {
                e.preventDefault();
                cartOverlay.classList.add('is-active');
                document.body.style.overflow = 'hidden';
            });
        }

        if (closeCart) {
            closeCart.addEventListener('click', () => {
                cartOverlay.classList.remove('is-active');
                document.body.style.overflow = 'auto';
            });
        }

        // Generic Overlay Close
        [searchOverlay, wishlistOverlay, cartOverlay].forEach(overlay => {
            if (overlay) {
                overlay.addEventListener('click', (e) => {
                    if (e.target === overlay) {
                        overlay.classList.remove('is-active');
                        document.body.style.overflow = 'auto';
                    }
                });
            }
        });
    },

    initLeadForm() {
        const form = document.getElementById('leadCaptureForm');
        const formState = document.getElementById('leadFormState');
        const thanksState = document.getElementById('leadThanksState');

        if (form && formState && thanksState) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Add fade out animation class if needed
                formState.style.opacity = '0';
                formState.style.transform = 'translateY(-20px)';
                formState.style.transition = 'all 0.5s ease';

                setTimeout(() => {
                    formState.style.display = 'none';
                    thanksState.style.display = 'block';
                    thanksState.style.opacity = '0';
                    thanksState.style.transform = 'translateY(20px)';
                    
                    // Trigger reflow for animation
                    thanksState.offsetHeight;

                    thanksState.style.opacity = '1';
                    thanksState.style.transform = 'translateY(0)';
                    thanksState.style.transition = 'all 0.5s ease';
                }, 500);
            });
        }
    }
};

// Auto-init shared components
document.addEventListener('DOMContentLoaded', () => {
    SharedComponents.init();
});
