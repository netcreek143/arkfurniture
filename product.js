/**
 * PRODUCT DETAIL PAGE LOGIC
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Get Product ID from URL
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id') || 'natura-live-edge-dining-table';
    const product = getProductById(productId);

    // 4. Track Recently Viewed (Moved up for better reliability)
    trackRecentlyViewed(productId);

    if (!product) {
        console.warn("Product data not found for:", productId);
        return;
    }

    renderPDP(product);
    initGallery(product);
    initQuantityStepper(product);
    initAccordions();
    initPDPActions(product);
});

function trackRecentlyViewed(id) {
    console.log('Saving to Recently Viewed:', id);
    let viewed = JSON.parse(localStorage.getItem('ark_recent_viewed')) || [];
    viewed = viewed.filter(v => v !== id);
    viewed.unshift(id);
    viewed = viewed.slice(0, 12);
    localStorage.setItem('ark_recent_viewed', JSON.stringify(viewed));
    console.log('Current history list:', viewed);
}

function renderPDP(product) {
    // Basic Info
    document.getElementById('productTitle').textContent = product.name;
    document.getElementById('pdpNewPrice').textContent = `₹${product.price}`;
    document.getElementById('pdpOldPrice').textContent = `₹${product.oldPrice}`;
    document.getElementById('pdpDiscount').textContent = product.discount;
    
    const emiEl = document.getElementById('pdpEmi');
    if (emiEl) {
        emiEl.textContent = product.emi ? `₹${product.emi}` : 'No EMI options';
    }
    
    document.getElementById('btnPrice').textContent = `₹${product.price}`;
    
    const stockEl = document.getElementById('stockStatus');
    stockEl.textContent = product.stockStatus;
    if (product.stockStatus.toLowerCase().includes('out of stock')) {
        stockEl.classList.add('stock-out-text');
    }

    // Breadcrumbs
    const bcContainer = document.getElementById('pdpBreadcrumbs');
    if (bcContainer) {
        bcContainer.innerHTML = `Home &nbsp; > &nbsp; ${product.category.charAt(0).toUpperCase() + product.category.slice(1)} &nbsp; > &nbsp; ${product.name}`;
    }

    // Customization Options
    const customGroup = document.getElementById('customizationGroup');
    if (customGroup && product.customization) {
        customGroup.innerHTML = `
            <div class="custom-option-cards">
                ${product.customization.options.map(opt => `
                    <div class="option-card ${opt.selected ? 'selected' : ''} ${opt.status === 'Out of Stock' ? 'out-of-stock' : ''}" data-id="${opt.id}">
                        <div class="swatch-box">
                            <img src="${opt.image}" alt="${opt.label}">
                        </div>
                        <div class="option-name">${opt.label}</div>
                        <div class="option-status">${opt.status}</div>
                    </div>
                `).join('')}
            </div>
        `;

        // Add selection listener
        customGroup.querySelectorAll('.option-card').forEach(card => {
            card.addEventListener('click', () => {
                if (card.classList.contains('out-of-stock')) return;
                customGroup.querySelectorAll('.option-card').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
            });
        });
    }

    // Feature Lines
    const featureLines = document.getElementById('featureLines');
    if (featureLines) {
        featureLines.innerHTML = product.features.map(f => `
            <div class="feature-line">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                ${f}
            </div>
        `).join('') + '<a href="#" class="view-plans">Click to Know More</a>';
    }

    // Accordions
    const accordionContainer = document.getElementById('pdpAccordions');
    if (accordionContainer) {
        accordionContainer.innerHTML = product.accordions.map(acc => `
            <div class="acc-row">
                <div class="acc-header">
                    <span>${acc.title}</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                    </svg>
                </div>
            </div>
        `).join('');
    }

    // Similar Products
    const similarGrid = document.getElementById('similarGrid');
    if (similarGrid) {
        similarGrid.innerHTML = product.similarProducts.map(id => {
            const p = getProductById(id);
            if (!p) return '';
            return `
                <div class="product-card" onclick="window.location.href='product.html?id=${p.id}'">
                    <div class="product-image-wrapper">
                        <div class="discount-badge">${p.discount}</div>
                        <img src="${p.image}" alt="${p.name}" class="product-img">
                        <div class="status-strip">${p.badge}</div>
                    </div>
                    <div class="product-info">
                        <h3 class="product-name">${p.name}</h3>
                        <div class="product-prices">
                            <span class="old-price">₹ ${p.oldPrice}</span>
                            <span class="new-price">₹ ${p.price}</span>
                        </div>
                        <div class="product-taxes">Price inclusive of all taxes | Pan India Shipping</div>
                    </div>
                </div>
            `;
        }).join('');
    }
}

function initGallery(product) {
    const mainImg = document.getElementById('mainProductImg');
    const thumbRow = document.getElementById('thumbnailRow');
    let currentIndex = 0;

    const updateGallery = (index) => {
        currentIndex = index;
        mainImg.src = product.gallery[currentIndex];
        
        // Update Thumbnails
        const thumbs = thumbRow.querySelectorAll('.thumb-item');
        thumbs.forEach((t, i) => {
            t.classList.toggle('active', i === currentIndex);
        });
    };

    // Render Thumbnails
    thumbRow.innerHTML = product.gallery.map((src, i) => `
        <div class="thumb-item ${i === 0 ? 'active' : ''}" data-index="${i}">
            <img src="${src}" alt="Thumb ${i}">
        </div>
    `).join('');

    thumbRow.querySelectorAll('.thumb-item').forEach(thumb => {
        thumb.addEventListener('click', () => {
            updateGallery(parseInt(thumb.dataset.index));
        });
    });

    // Nav Arrows
    document.getElementById('prevImg').addEventListener('click', () => {
        let nextIdx = currentIndex - 1;
        if (nextIdx < 0) nextIdx = product.gallery.length - 1;
        updateGallery(nextIdx);
    });

    document.getElementById('nextImg').addEventListener('click', () => {
        let nextIdx = currentIndex + 1;
        if (nextIdx >= product.gallery.length) nextIdx = 0;
        updateGallery(nextIdx);
    });

    // Set initial
    updateGallery(0);
}

function initQuantityStepper(product) {
    const qtyInput = document.getElementById('qtyInput');
    const btnPrice = document.getElementById('btnPrice');
    const basePrice = parseInt(product.price.toString().replace(/[^0-9]/g, '')) || 0;

    document.getElementById('qtyPlus').addEventListener('click', () => {
        qtyInput.value = parseInt(qtyInput.value) + 1;
        updatePrice();
    });

    document.getElementById('qtyMinus').addEventListener('click', () => {
        if (parseInt(qtyInput.value) > 1) {
            qtyInput.value = parseInt(qtyInput.value) - 1;
            updatePrice();
        }
    });

    function updatePrice() {
        const total = basePrice * parseInt(qtyInput.value);
        btnPrice.textContent = `₹${total.toLocaleString('en-IN')}`;
    }
}

function initAccordions() {
    document.querySelectorAll('.acc-row').forEach(row => {
        const header = row.querySelector('.acc-header');
        header.addEventListener('click', () => {
            const isOpen = row.classList.contains('open');
            // Close others if needed, but here we just toggle
            row.classList.toggle('open');
            
            // rotate icon is now handled via CSS .acc-row.open .acc-header svg
        });
    });
}
function initPDPActions(product) {
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', () => {
            const qty = parseInt(document.getElementById('qtyInput').value) || 1;
            SharedComponents.Cart.add({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image || product.mainImage
            }, qty);
        });
    }

    // Wishlist on PDP (if we add it later or use current heart icon if it exists)
}
