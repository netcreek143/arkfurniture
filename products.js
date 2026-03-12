/**
 * GLOBAL PRODUCT DATABASE
 * This file centralizes all product data for both Category Listing and Product Detail Pages.
 */

const products = {
    "natura-live-edge-dining-table": {
        id: "natura-live-edge-dining-table",
        name: "Natura Live Edge Dining Table",
        category: "dining",
        price: "45,500",
        oldPrice: "45,600",
        discount: "30% OFF",
        emi: "16,764",
        stockStatus: "In Stock",
        mainImage: "images/hero1.png",
        gallery: [
            "images/hero1.png",
            "images/sd1.png",
            "images/sd2.png",
            "images/sd3.png",
            "images/sd4.png"
        ],
        customization: {
            title: "1. Fabric Options - *Cashmere Art",
            options: [
                { id: "cashmere", label: "Cashmere Art", image: "images/sd1.png", status: "Available", selected: true },
                { id: "vintage-brown", label: "Vintage Light Brown", image: "images/sd2.png", status: "Available" },
                { id: "vintage-black", label: "Vintage Black", image: "images/sd3.png", status: "Out of Stock" }
            ]
        },
        dispatchDate: "Jan 15, 2026",
        features: [
            "Expected Dispatch Date: Jan 15, 2026",
            "Free Design Consultation",
            "Pan India Shipping"
        ],
        accordions: [
            { title: "Key Features", content: "Hardwood construction, natural live-edge finish, hand-finished surfaces." },
            { title: "Dimension", content: "Length: 180cm | Width: 90cm | Height: 75cm" },
            { title: "Maintenance", content: "Wipe with a soft damp cloth. Avoid harsh chemicals." },
            { title: "Warranty Summary", content: "10-year structural warranty." },
            { title: "Return Policy", content: "7-day return policy for manufacturing defects." }
        ],
        similarProducts: [
            "eugene-dining-chair",
            "vivre-slatted-bench",
            "ranger-chair",
            "saturn-nox-dining-table"
        ]
    },
    // Adding category listing items for lookup
    "eugene-dining-chair": {
        id: "eugene-dining-chair",
        name: "Eugene Dining Chair",
        price: "31,500",
        oldPrice: "48,000",
        discount: "15% OFF",
        image: "images/sd1.png",
        badge: "BEST SELLING"
    },
    "vivre-slatted-bench": {
        id: "vivre-slatted-bench",
        name: "Vivre Slatted Bench",
        price: "27,800",
        oldPrice: "34,000",
        discount: "20% OFF",
        image: "images/sd2.png",
        badge: "BEST SELLING"
    },
    "ranger-chair": {
        id: "ranger-chair",
        name: "Ranger Chair",
        price: "20,900",
        oldPrice: "22,000",
        discount: "10% OFF",
        image: "images/sd3.png",
        badge: "BEST SELLING"
    },
    "saturn-nox-dining-table": {
        id: "saturn-nox-dining-table",
        name: "Saturn Nox Dining Table",
        price: "1,20,500",
        oldPrice: "1,45,000",
        discount: "25% OFF",
        image: "images/sd4.png",
        badge: "MADE TO ORDER"
    }
};

// Global function to get product by ID
function getProductById(id) {
    return products[id];
}
