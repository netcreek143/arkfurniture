/**
 * CATEGORY PAGE DATA
 * This file contains the content for all furniture categories.
 * Layout and design remain identical; only this data is swapped.
 */

const categoriesData = {
    dining: {
        title: 'Dining',
        bannerImg: 'images/hero1.png', // Placeholder for dining hero
        breadcrumb: ['Home', 'Dining'],
        quickTiles: [
            { id: 'sets', label: 'Dining Set', icon: 'chair' },
            { id: 'chairs', label: 'Dining Chair', icon: 'chair' },
            { id: 'tables', label: 'Dining Table', icon: 'table' },
            { id: 'benches', label: 'Dining Benches', icon: 'bench' }
        ],
        filters: [
            { id: 'type', label: 'Product Type', options: [
                { id: 'sets', label: 'Dining Sets', count: 14 },
                { id: 'chairs', label: 'Dining Chairs', count: 5 },
                { id: 'tables', label: 'Dining Tables', count: 11 },
                { id: 'benches', label: 'Dining Benches', count: 3 }
            ]}
        ],
        resultsCount: 64,
        products: [
            {
                id: 1,
                name: 'Eugene Dining Chair',
                image: 'images/sd1.png',
                badge: 'BEST SELLING',
                discount: '15% OFF',
                oldPrice: '₹48,000',
                newPrice: '₹31,500',
                emi: '₹2,150',
                isWishlisted: true
            },
            {
                id: 2,
                name: 'Vivre Slatted Bench',
                image: 'images/sd2.png',
                badge: 'BEST SELLING',
                discount: '20% OFF',
                oldPrice: '₹34,000',
                newPrice: '₹27,800',
                emi: '₹1,500',
                isWishlisted: false
            },
            {
                id: 3,
                name: 'Ranger Chair',
                image: 'images/sd3.png',
                badge: 'BEST SELLING',
                discount: '10% OFF',
                oldPrice: '₹22,000',
                newPrice: '₹20,900',
                emi: '₹1,200',
                isWishlisted: false
            },
            {
                id: 4,
                name: 'Saturn Nox Dining Table',
                image: 'images/sd4.png',
                badge: 'MADE TO ORDER',
                discount: '25% OFF',
                oldPrice: '₹1,45,000',
                newPrice: '₹1,20,500',
                emi: '₹5,450',
                isWishlisted: false
            },
            {
                id: 5,
                name: 'Rover Armchair',
                image: 'images/sd5.png',
                badge: 'MADE TO ORDER',
                discount: '30% OFF',
                oldPrice: '₹38,000',
                newPrice: '₹26,990',
                emi: '₹2,100',
                isWishlisted: false
            },
            {
                id: 6,
                name: 'Aaron Dining Chair',
                image: 'images/sd6.png',
                badge: 'MADE TO ORDER',
                discount: '12% OFF',
                oldPrice: '₹44,000',
                newPrice: '₹38,400',
                emi: '₹2,400',
                isWishlisted: false
            },
            {
                id: 7,
                name: 'Kobbler Tan Bench',
                image: 'images/sd7.png',
                badge: 'NEWLY ADDED',
                discount: '18% OFF',
                oldPrice: '₹42,000',
                newPrice: '₹35,000',
                emi: '₹1,850',
                isWishlisted: false
            },
            {
                id: 8,
                name: 'Sitar Upholstered Dining Chair',
                image: 'images/sd8.png',
                badge: 'NEWLY ADDED',
                discount: '35% OFF',
                oldPrice: '₹52,000',
                newPrice: '₹32,990',
                emi: '₹1,950',
                isWishlisted: false
            },
            {
                id: 9,
                name: 'Ebony Dining Table',
                image: 'images/ hero1.png',
                badge: 'NEWLY ADDED',
                discount: '10% OFF',
                oldPrice: '₹32,000',
                newPrice: '₹28,100',
                emi: '₹2,200',
                isWishlisted: false
            }
        ]
    },
    // Placeholders for other categories - layout remains identical
    living: { title: 'Living', products: [] },
    bedroom: { title: 'Bedroom', products: [] },
    foyer: { title: 'Foyer', products: [] },
    modular: { title: 'Modular', products: [] },
    outdoor: { title: 'Outdoor', products: [] },
    decor: { title: 'Decor', products: [] },
    lightings: { title: 'Lightings', products: [] }
};

/**
 * RENDERING ENGINE
 */
function initCategoryPage() {
    // Get category from query string (default to dining)
    const params = new URLSearchParams(window.location.search);
    const categoryKey = params.get('type') || 'dining';
    const data = categoriesData[categoryKey];

    if (!data) return;

    // Update Banner
    const heroBanner = document.getElementById('categoryHero');
    if (heroBanner && data.bannerImg) {
        heroBanner.style.backgroundImage = `url('${data.bannerImg}')`;
    }

    // Update Quick Tiles
    const tilesContainer = document.getElementById('quickTilesRow');
    if (tilesContainer) {
        tilesContainer.innerHTML = data.quickTiles.map(tile => `
            <div class="quick-tile">
                <div class="tile-icon-box">
                    <!-- Icon placeholder logic based on tile.icon -->
                    <svg class="tile-icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <rect x="4" y="4" width="16" height="16" rx="2"></rect>
                    </svg>
                </div>
                <span class="tile-label">${tile.label}</span>
            </div>
        `).join('');
    }

    // Update Breadcrumbs
    const bcContainer = document.getElementById('breadcrumbs');
    if (bcContainer) {
        bcContainer.innerHTML = data.breadcrumb.join(' &nbsp; > &nbsp; ');
    }

    // Update Product Grid
    const productGrid = document.getElementById('productGrid');
    const resultsCountEl = document.getElementById('resultsCount');
    
    if (resultsCountEl) resultsCountEl.textContent = `${data.resultsCount} Results`;
    
    if (productGrid) {
        productGrid.innerHTML = data.products.map(product => `
            <div class="product-card">
                <div class="product-image-wrapper">
                    ${product.discount ? `<div class="discount-badge">${product.discount}</div>` : ''}
                    <button class="wishlist-btn ${product.isWishlisted ? 'active' : ''}">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="${product.isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </button>
                    <img src="${product.image}" alt="${product.name}" class="product-img">
                    ${product.badge ? `<div class="status-strip">${product.badge}</div>` : ''}
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-prices">
                        <span class="old-price">${product.oldPrice}</span>
                        <span class="new-price">${product.newPrice}</span>
                    </div>
                    <div class="product-taxes">Price inclusive of all taxes | Pan India Shipping</div>
                    <div class="product-emi">EMI starts from ${product.emi}</div>
                </div>
            </div>
        `).join('');
    }
}

document.addEventListener('DOMContentLoaded', initCategoryPage);
