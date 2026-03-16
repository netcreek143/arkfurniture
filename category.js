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
                oldPrice: '48,000',
                newPrice: '31,500',
                emi: '2,150',
                type: 'chairs',
                isWishlisted: true
            },
            {
                id: 2,
                name: 'Vivre Slatted Bench',
                image: 'images/sd2.png',
                badge: 'BEST SELLING',
                discount: '20% OFF',
                oldPrice: '34,000',
                newPrice: '27,800',
                emi: '1,500',
                type: 'benches',
                isWishlisted: false
            },
            {
                id: 3,
                name: 'Ranger Chair',
                image: 'images/sd3.png',
                badge: 'BEST SELLING',
                discount: '10% OFF',
                oldPrice: '22,000',
                newPrice: '20,900',
                emi: '1,200',
                type: 'chairs',
                isWishlisted: false
            },
            {
                id: 4,
                name: 'Saturn Nox Dining Table',
                image: 'images/sd4.png',
                badge: 'MADE TO ORDER',
                discount: '25% OFF',
                oldPrice: '1,45,000',
                newPrice: '1,20,500',
                emi: '5,450',
                type: 'tables',
                isWishlisted: false
            },
            {
                id: 5,
                name: 'Rover Armchair',
                image: 'images/sd5.png',
                badge: 'MADE TO ORDER',
                discount: '30% OFF',
                oldPrice: '38,000',
                newPrice: '26,990',
                emi: '2,100',
                type: 'chairs',
                isWishlisted: false
            },
            {
                id: 6,
                name: 'Aaron Dining Chair',
                image: 'images/sd6.png',
                badge: 'MADE TO ORDER',
                discount: '12% OFF',
                oldPrice: '44,000',
                newPrice: '38,400',
                emi: '2,400',
                type: 'chairs',
                isWishlisted: false
            },
            {
                id: 7,
                name: 'Kobbler Tan Bench',
                image: 'images/sd7.png',
                badge: 'NEWLY ADDED',
                discount: '18% OFF',
                oldPrice: '42,000',
                newPrice: '35,000',
                emi: '1,850',
                type: 'benches',
                isWishlisted: false
            },
            {
                id: 8,
                name: 'Sitar Upholstered Dining Chair',
                image: 'images/sd8.png',
                badge: 'NEWLY ADDED',
                discount: '35% OFF',
                oldPrice: '52,000',
                newPrice: '32,990',
                emi: '1,950',
                type: 'chairs',
                isWishlisted: false
            },
            {
                id: 9,
                name: 'Ebony Dining Table',
                image: 'images/ hero1.png',
                badge: 'NEWLY ADDED',
                discount: '10% OFF',
                oldPrice: '32,000',
                newPrice: '28,100',
                emi: '2,200',
                isWishlisted: false
            }
        ]
    },
    // Expanded Data for other categories
    living: {
        title: 'Living',
        bannerImg: 'images/hero1.png',
        breadcrumb: ['Home', 'Living'],
        quickTiles: [
            { id: 'sofas', label: 'Sofas', icon: 'sofa' },
            { id: 'coffee-tables', label: 'Coffee Tables', icon: 'table' },
            { id: 'tv-units', label: 'TV Units', icon: 'tv' },
            { id: 'accent-chairs', label: 'Accent Chairs', icon: 'chair' }
        ],
        filters: [
            { id: 'type', label: 'Product Type', options: [
                { id: 'sofas', label: 'Sofas', count: 24 },
                { id: 'coffee-tables', label: 'Coffee Tables', count: 12 },
                { id: 'tv-units', label: 'TV Units', count: 8 },
                { id: 'accent-chairs', label: 'Accent Chairs', count: 15 }
            ]}
        ],
        resultsCount: 59,
        products: [
            { id: 101, name: 'Cloud Modular Sofa', image: 'images/sd1.png', badge: 'BEST SELLING', discount: '10% OFF', oldPrice: '85,000', newPrice: '76,500', emi: '4,500', type: 'sofas' },
            { id: 102, name: 'Oak Coffee Table', image: 'images/sd2.png', badge: 'NEWLY ADDED', discount: '15% OFF', oldPrice: '22,000', newPrice: '18,700', emi: '1,200', type: 'coffee-tables' },
            { id: 103, name: 'Mid-Century TV Unit', image: 'images/sd3.png', badge: 'BEST SELLING', oldPrice: '45,000', newPrice: '45,000', emi: '2,100', type: 'tv-units' },
            { id: 104, name: 'Velvet Accent Chair', image: 'images/sd4.png', badge: 'LIMITED EDITION', discount: '5% OFF', oldPrice: '32,000', newPrice: '30,400', emi: '1,800', type: 'accent-chairs' }
        ]
    },
    bedroom: {
        title: 'Bedroom',
        bannerImg: 'images/hero1.png',
        breadcrumb: ['Home', 'Bedroom'],
        quickTiles: [
            { id: 'beds', label: 'Beds', icon: 'bed' },
            { id: 'bedside-tables', label: 'Bedside Tables', icon: 'table' },
            { id: 'wardrobes', label: 'Wardrobes', icon: 'archive' },
            { id: 'dressers', label: 'Dressers', icon: 'grid' }
        ],
        filters: [
            { id: 'type', label: 'Product Type', options: [
                { id: 'beds', label: 'Beds', count: 18 },
                { id: 'bedside-tables', label: 'Bedside Tables', count: 10 },
                { id: 'wardrobes', label: 'Wardrobes', count: 12 },
                { id: 'dressers', label: 'Dressers', count: 6 }
            ]}
        ],
        resultsCount: 46,
        products: [
            { id: 201, name: 'Caris Queen Bed', image: 'images/sd5.png', badge: 'BEST SELLING', discount: '20% OFF', oldPrice: '55,000', newPrice: '44,000', emi: '2,500', type: 'beds' },
            { id: 202, name: 'Marble Nightstand', image: 'images/sd6.png', badge: 'NEWLY ADDED', oldPrice: '12,000', newPrice: '12,000', emi: '800', type: 'bedside-tables' },
            { id: 203, name: 'Woodland Wardrobe', image: 'images/sd7.png', badge: 'MADE TO ORDER', discount: '25% OFF', oldPrice: '82,000', newPrice: '61,500', emi: '3,400', type: 'wardrobes' }
        ]
    },
    foyer: {
        title: 'Foyer',
        bannerImg: 'images/hero1.png',
        breadcrumb: ['Home', 'Foyer'],
        quickTiles: [
            { id: 'shoe-racks', label: 'Shoe Racks', icon: 'grid' },
            { id: 'console-tables', label: 'Console Tables', icon: 'table' },
            { id: 'entryway-benches', label: 'Benches', icon: 'bench' },
            { id: 'mirrors', label: 'Mirrors', icon: 'maximize' }
        ],
        filters: [
            { id: 'type', label: 'Product Type', options: [
                { id: 'shoe-racks', label: 'Shoe Racks', count: 8 },
                { id: 'console-tables', label: 'Console Tables', count: 12 },
                { id: 'entryway-benches', label: 'Benches', count: 5 },
                { id: 'mirrors', label: 'Mirrors', count: 9 }
            ]}
        ],
        resultsCount: 34,
        products: [
            { id: 301, name: 'Slatted Shoe Rack', image: 'images/sd8.png', badge: 'NEWLY ADDED', discount: '10% OFF', oldPrice: '18,000', newPrice: '16,200', emi: '900', type: 'shoe-racks' },
            { id: 302, name: 'Gold Trim Console', image: 'images/sd1.png', badge: 'BEST SELLING', oldPrice: '28,000', newPrice: '28,000', emi: '1,500', type: 'console-tables' }
        ]
    },
    modular: {
        title: 'Modular',
        bannerImg: 'images/hero1.png',
        breadcrumb: ['Home', 'Modular'],
        quickTiles: [
            { id: 'kitchens', label: 'Modular Kitchens', icon: 'grid' },
            { id: 'wardrobes-mod', label: 'Wardrobes', icon: 'archive' },
            { id: 'tv-units-mod', label: 'TV Units', icon: 'tv' },
            { id: 'study-units', label: 'Study Units', icon: 'file-text' }
        ],
        filters: [
            { id: 'type', label: 'Product Type', options: [
                { id: 'kitchens', label: 'Kitchens', count: 30 },
                { id: 'wardrobes-mod', label: 'Wardrobes', count: 25 },
                { id: 'tv-units-mod', label: 'TV Units', count: 15 },
                { id: 'study-units', label: 'Study Units', count: 10 }
            ]}
        ],
        resultsCount: 80,
        products: [
            { id: 401, name: 'L-Shaped Kitchen', image: 'images/sd2.png', badge: 'MADE TO ORDER', oldPrice: '2,50,000', newPrice: '2,50,000', emi: '12,000', type: 'kitchens' },
            { id: 402, name: 'Walk-in Wardrobe', image: 'images/sd3.png', badge: 'MADE TO ORDER', discount: '10% OFF', oldPrice: '1,80,000', newPrice: '1,62,000', emi: '8,500', type: 'wardrobes-mod' }
        ]
    },
    outdoor: {
        title: 'Outdoor',
        bannerImg: 'images/hero1.png',
        breadcrumb: ['Home', 'Outdoor'],
        quickTiles: [
            { id: 'balcony-sets', label: 'Balcony Sets', icon: 'coffee' },
            { id: 'swings', label: 'Garden Swings', icon: 'loader' },
            { id: 'outdoor-tables', label: 'Outdoor Tables', icon: 'table' },
            { id: 'patio-chairs', label: 'Patio Chairs', icon: 'chair' }
        ],
        filters: [
            { id: 'type', label: 'Product Type', options: [
                { id: 'balcony-sets', label: 'Balcony Sets', count: 12 },
                { id: 'swings', label: 'Garden Swings', count: 6 },
                { id: 'outdoor-tables', label: 'Outdoor Tables', count: 8 },
                { id: 'patio-chairs', label: 'Patio Chairs', count: 10 }
            ]}
        ],
        resultsCount: 36,
        products: [
            { id: 501, name: 'Wicker Balcony Set', image: 'images/sd4.png', badge: 'BEST SELLING', oldPrice: '24,000', newPrice: '24,000', emi: '1,400', type: 'balcony-sets' },
            { id: 502, name: 'Hanging Garden Swing', image: 'images/sd5.png', badge: 'NEWLY ADDED', discount: '15% OFF', oldPrice: '35,000', newPrice: '29,750', emi: '1,900', type: 'swings' }
        ]
    },
    decor: {
        title: 'Decor',
        bannerImg: 'images/hero1.png',
        breadcrumb: ['Home', 'Decor'],
        quickTiles: [
            { id: 'wall-art', label: 'Wall Art', icon: 'image' },
            { id: 'vases', label: 'Vases', icon: 'shield' },
            { id: 'cushions', label: 'Cushions', icon: 'disc' },
            { id: 'sculptures', label: 'Sculptures', icon: 'award' }
        ],
        filters: [
            { id: 'type', label: 'Product Type', options: [
                { id: 'wall-art', label: 'Wall Art', count: 40 },
                { id: 'vases', label: 'Vases', count: 15 },
                { id: 'cushions', label: 'Cushions', count: 25 },
                { id: 'sculptures', label: 'Sculptures', count: 10 }
            ]}
        ],
        resultsCount: 90,
        products: [
            { id: 601, name: 'Abstract Canvas Art', image: 'images/sd6.png', badge: 'NEWLY ADDED', oldPrice: '8,500', newPrice: '8,500', emi: '400', type: 'wall-art' },
            { id: 602, name: 'Ceramic Floor Vase', image: 'images/sd7.png', badge: 'BEST SELLING', discount: '10% OFF', oldPrice: '12,000', newPrice: '10,800', emi: '600', type: 'vases' }
        ]
    },
    lightings: {
        title: 'Lightings',
        bannerImg: 'images/hero1.png',
        breadcrumb: ['Home', 'Lightings'],
        quickTiles: [
            { id: 'chandeliers', label: 'Chandeliers', icon: 'star' },
            { id: 'floor-lamps', label: 'Floor Lamps', icon: 'arrow-up' },
            { id: 'table-lamps', label: 'Table Lamps', icon: 'minus' },
            { id: 'ceiling-lights', label: 'Ceiling Lights', icon: 'circle' }
        ],
        filters: [
            { id: 'type', label: 'Product Type', options: [
                { id: 'chandeliers', label: 'Chandeliers', count: 5 },
                { id: 'floor-lamps', label: 'Floor Lamps', count: 12 },
                { id: 'table-lamps', label: 'Table Lamps', count: 20 },
                { id: 'ceiling-lights', label: 'Ceiling Lights', count: 30 }
            ]}
        ],
        resultsCount: 67,
        products: [
            { id: 701, name: 'Crystal Chandelier', image: 'images/sd8.png', badge: 'BEST SELLING', oldPrice: '95,000', newPrice: '95,000', emi: '5,200', type: 'chandeliers' },
            { id: 702, name: 'Industrial Floor Lamp', image: 'images/sd1.png', badge: 'NEWLY ADDED', discount: '20% OFF', oldPrice: '15,000', newPrice: '12,000', emi: '750', type: 'floor-lamps' }
        ]
    }
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

    // Update Sidebar Filters
    const sidebarContainer = document.querySelector('.sidebar-filters');
    if (sidebarContainer && data.filters) {
        // Reuse fixed header but replace dynamic part
        const filterGroupHtml = data.filters.map(filter => `
            <div class="filter-group">
                <div class="filter-header">
                    <span class="filter-name">${filter.label}</span>
                    <button class="filter-toggle">−</button>
                </div>
                <div class="filter-options">
                    ${filter.options.map(opt => `
                        <label class="filter-checkbox">
                            <input type="checkbox"> ${opt.label} (${opt.count.toString().padStart(2, '0')})
                        </label>
                    `).join('')}
                </div>
            </div>
        `).join('');

        sidebarContainer.innerHTML = `
            <h2 class="sidebar-title">Browse by</h2>
            ${filterGroupHtml}
        `;

        // Attach listeners to checkboxes
        sidebarContainer.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', () => applyFilters(data.products));
        });
    }

    function applyFilters(products) {
        const checkedTypes = Array.from(sidebarContainer.querySelectorAll('input[checked], input:checked')).map(cb => {
            // Find the opt id corresponding to this label
            const label = cb.parentElement.textContent.trim().split(' (')[0];
            const opt = data.filters[0].options.find(o => o.label === label);
            return opt ? opt.id : null;
        }).filter(id => id);

        const filtered = checkedTypes.length > 0 
            ? products.filter(p => checkedTypes.includes(p.type))
            : products;

        renderProductGrid(filtered);
    }

    function renderProductGrid(productsToRender) {
        const productGrid = document.getElementById('productGrid');
        if (!productGrid) return;
        
        productGrid.innerHTML = productsToRender.map(product => {
            const slug = product.name.toLowerCase().replace(/ /g, '-');
            return `
                <div class="product-card">
                    <div class="product-image-wrapper">
                        ${product.discount ? `<div class="discount-badge">${product.discount}</div>` : ''}
                        <button class="wishlist-btn" onclick="SharedComponents.Wishlist.toggle({id: '${slug}', name: '${product.name}', price: '${product.newPrice}', image: '${product.image}'})">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                        </button>
                        <img src="${product.image}" alt="${product.name}" class="product-img" onclick="window.location.href='product.html?id=${slug}'">
                        <button class="quick-add-btn" onclick="event.stopPropagation(); SharedComponents.Cart.add({id: '${slug}', name: '${product.name}', price: '${product.newPrice}', image: '${product.image}'})">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                            </svg>
                            Add to Cart
                        </button>
                        ${product.badge ? `<div class="status-strip">${product.badge}</div>` : ''}
                    </div>
                    <div class="product-info" onclick="window.location.href='product.html?id=${slug}'">
                        <h3 class="product-name">${product.name}</h3>
                        <div class="product-prices">
                            <span class="old-price">₹${product.oldPrice}</span>
                            <span class="new-price">₹${product.newPrice}</span>
                        </div>
                        <div class="product-taxes">Price inclusive of all taxes | Pan India Shipping</div>
                        <div class="product-emi">EMI starts from ₹${product.emi}</div>
                    </div>
                </div>
            `;
        }).join('');
    }

    // Update Product Grid
    const productGrid = document.getElementById('productGrid');
    const resultsCountEl = document.getElementById('resultsCount');
    
    if (resultsCountEl) resultsCountEl.textContent = `${data.resultsCount} Results`;
    
    if (productGrid) {
        renderProductGrid(data.products);
    }
}

document.addEventListener('DOMContentLoaded', initCategoryPage);
