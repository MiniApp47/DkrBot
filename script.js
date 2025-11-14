// Attend que le DOM soit entièrement chargé pour exécuter le script
document.addEventListener('DOMContentLoaded', function() {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();
    tg.setHeaderColor('#2c2c2e');
    tg.setBackgroundColor('#1c1c1d');

    // --- LIENS DE CONTACT ---
    const contactLinks = [
        { name: 'WhatsApp', url: 'https://wa.me/33759042145', icon: '#icon-whatsapp', id: 'whatsapp' ,className: 'whatsapp', text: "WhatsApp"},
        { name: 'Instagram', url: 'https://www.instagram.com/plugsbot?igsh=MTYzamtyZ2JpNHJpOQ%3D%3D&utm_source=qr', className: 'instagram', text: "Instagram" ,icon: '#icon-instagram', id: 'instagram' },
        { name: 'Snapchat', url: 'https://snapchat.com/add/user', icon: '#icon-snapchat', id: 'snapchat', className: 'snapchat' , text: "Snapchat"},
        { name: 'Telegram', url: 'https://t.me/PlugsBotOfficielBot', icon: '#icon-telegram', id: 'telegram',className: 'telegram', text: "Telegram" },
        { name: 'Potato', url: 'https://m.potato.im', icon: '#icon-potato', id: 'potato', className: 'potato', text: "Potato"}
    ];

    // --- NOUVELLE STRUCTURE DE DONNÉES (PAR CATÉGORIES) ---
    const categoriesData = [
        {
            id: 'cali-us',
            name: 'Cali US 🇺🇸',
            image: 'CategCaliUs.png', // Image de la catégorie
            products: [
                {
                    id: 'ViceCity',
                    name: '🟢 Vice City 🟣',
                    farm: '',
                    type: 'Beuh',
                    category: 'Cali US', 
                    quality: 'Premium',
                    description: 'CALI US 🇺🇸 <br> Forte odeur , un goût magnifique en bouche  <br> 10/10 👌',
                    image: 'ViceCity.png',
                    video: 'ViceCity.mp4',
                    tarifs: [
                        { weight: '3,5g', price: 40.00 },
                        { weight: '7g', price: 70.00 },
                        { weight: '25g', price: 170.00 },
                        { weight: '50g', price: 300.00 },
                        { weight: '100g', price: 500.00 },
                    ]
                },
                {
                    id: 'PurplePunch',
                    name: '💜 Purple Punch 🥊',
                    farm: '',
                    type: 'Beuh',
                    category: 'Cali US', 
                    quality: 'Premium',
                    description: 'CALI US 🇺🇸 <br> Forte odeur , un goût magnifique en bouche  <br> 10/10 👌',
                    image: 'Purple.png',
                    video: 'Purple.MP4',
                    tarifs: [
                        { weight: '3,5g', price: 40.00 },
                        { weight: '7g', price: 70.00 },
                        { weight: '25g', price: 170.00 },
                        { weight: '50g', price: 300.00 },
                        { weight: '100g', price: 500.00 },
                    ]
                },
                {
                    id: 'TropicalRuntz',
                    name: '🟢🟣 Tropical Runtz 🏆',
                    farm: '',
                    type: 'Beuh',
                    category: 'Cali US', 
                    quality: 'CoffeShop',
                    description: 'CALI US 🇺🇸 <br> Forte odeur , un goût magnifique en bouche  <br> 10/10 👌',
                    image: 'TropicalRuntzProduct.png',
                    video: 'jsp.MP4',
                    tarifs: [
                        { weight: '10g', price: 90.00 },
                        { weight: '25g', price: 200.00 },
                        { weight: '50g', price: 350.00 },
                        { weight: '100g', price: 600.00 },
                    ]
                }
            ]
        },
        {
            id: 'filtrer',
            name: 'Filtrer 🍫',
            image: 'CategFiltrer.png', // Image de la catégorie
            products: [
                {
                    id: 'FiltrerX3',
                    name: 'GMO 🍇',
                    farm: '',
                    type: 'Hash',
                    category: 'Filtrer', 
                    quality: 'Standard',
                    description: '120u <br> 10/10 👌',
                    image: 'X3.png',
                    video: 'X3.mp4',
                    tarifs: [
                        { weight: '5g', price: 40.00 },
                        { weight: '10g', price: 70.00 },
                        { weight: '25g', price: 150.00 },
                        { weight: '50g', price: 240.00 },
                        { weight: '10Og', price: 450.00 },
                    ]
                },
                {
                    id: 'NicoleKush',
                    name: 'Nicole Kush 🍀',
                    farm: '',
                    type: 'Hash',
                    category: 'Filtrer', 
                    quality: 'Standard',
                    description: 'Description',
                    image: 'Nicole.png',
                    video: 'Nicole.MP4',
                    tarifs: [
                        { weight: '10g', price: 80.00 },
                        { weight: '25g', price: 160.00 },
                        { weight: '50g', price: 250.00 },
                        { weight: '10Og', price: 470.00 },
                    ]
                }
            ]
        },
        {
            id: 'mousseux',
            name: 'Mousseux 🟡',
            image: 'CategMouss.png', // Image de la catégorie
            products: [
                {
                    id: 'MOUSSEUX',
                    name: 'One Peace 🏴‍☠️⚓️ ',
                    farm: '',
                    type: 'Hash',
                    category: 'Mousseux',
                    quality: 'Premium',
                    description: 'MOUSSEUX 🟡🇲🇦 🇺🇸 <br> 10/10 👌',
                    image: 'OnePeace.png',
                    video: 'OnePeace.mp4',
                    tarifs: [
                        { weight: '12,5g', price: 50.00 },
                        { weight: '25g', price: 90.00 },
                        { weight: '50g', price: 150.00 },
                        { weight: '100g', price: 290.00 },
                    ]
                }
              /*   {
                    id: 'TropicalPunch ',
                    name: 'Tropical punch 🏆',
                    farm: '',
                    type: 'Hash',
                    category: 'Mousseux',
                    quality: 'Premium',
                    description: 'CALI US 🇺🇸 ',
                    image: 'Tropical.png',
                    video: 'Tropical.mp4',
                    tarifs: [
                        { weight: '10g', price: 80.00 },
                        { weight: '25g', price: 180.00 },
                        { weight: '50g', price: 300.00 },
                        { weight: '100g', price: 500.00 },
                    ]
                } */
                // Ajoute d'autres produits "Mousseux" ici
            ]
        }
    ];

    // --- Fonctions utilitaires pour trouver les produits ---
    function getAllProducts() {
        return categoriesData.flatMap(category => category.products);
    }

    function getProductById(productId) {
        return getAllProducts().find(p => p.id === productId);
    }
    
    // --- ÉTAT GLOBAL ---
    let cart = []; // Le panier
    let currentCategoryId = null; // La catégorie en cours de visualisation
    let currentFilters = { // Les filtres actifs pour la page catégorie
        searchTerm: '',
        quality: 'all',
        farm: 'all'
    }; 

    // --- SÉLECTEURS DU DOM ---
    const pages = document.querySelectorAll('.page');
    const loaderPage = document.getElementById('page-loader');
    const homeProductList = document.getElementById('product-list'); // Grille des catégories
    const categoryProductList = document.getElementById('category-product-list'); // Grille des produits

    // --- NAVIGATION ---
    function showPage(pageId) {
        pages.forEach(p => p.classList.remove('active'));
        document.getElementById(pageId).classList.add('active');
    }

    // --- LOGIQUE D'AFFICHAGE ---

    /**
     * Affiche la page d'accueil avec les cartes de catégories.
     */
    function renderHomePage() {
        homeProductList.innerHTML = '';
        categoriesData.forEach(category => {
            const card = document.createElement('div');
            card.className = 'category-card';
            card.dataset.categoryId = category.id; 
            
            card.innerHTML = `
                <img src="${category.image}" alt="${category.name}">

            `;
            homeProductList.appendChild(card);
        });
    }

    /**
     * Prépare et affiche la page pour une catégorie spécifique.
     * @param {string} categoryId - L'ID de la catégorie à afficher.
     */
    function renderCategoryPage(categoryId) {
        currentCategoryId = categoryId;
        const category = categoriesData.find(c => c.id === categoryId);
        if (!category) return;

        // Met à jour le titre de la page
        document.getElementById('category-page-title').innerText = category.name;

        // Réinitialise les filtres
        currentFilters = { searchTerm: '', quality: 'all', farm: 'all' };
        
        // Peuple les filtres avec les produits de CETTE catégorie
        populateFilters(category.products);
        
        // Affiche les produits de cette catégorie
        renderCategoryProducts();

        // Affiche la page
        showPage('page-category-products');
    }

    /**
     * Affiche les produits filtrés pour la catégorie en cours.
     */
    function renderCategoryProducts() {
        if (!currentCategoryId) return;
        const category = categoriesData.find(c => c.id === currentCategoryId);
        if (!category) return;

        // Applique les filtres sur les produits de la catégorie
        const filteredProducts = category.products.filter(product => {
            const searchMatch = product.name.toLowerCase().includes(currentFilters.searchTerm);
            const qualityMatch = currentFilters.quality === 'all' || product.quality === currentFilters.quality;
            const farmMatch = currentFilters.farm === 'all' || product.farm === currentFilters.farm;
            return searchMatch && qualityMatch && farmMatch;
        });

        categoryProductList.innerHTML = '';
        if (filteredProducts.length === 0) {
            categoryProductList.innerHTML = '<p class="no-results">Aucun produit ne correspond à votre recherche.</p>';
            return;
        }

        filteredProducts.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.dataset.productId = product.id; 
            
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="info">
                    <div class="name">${product.name}</div>
                    <div class="farm">${product.farm}</div>
                </div>
            `;
            categoryProductList.appendChild(card);
        });
    }
    
    /**
     * Affiche la page de détail d'un produit.
     * @param {string} productId - L'ID du produit à afficher.
     */
    function renderProductPage(productId) {
        const product = getProductById(productId);
        if (!product) return;

        const videoElement = document.querySelector('#page-product .product-video');
        videoElement.src = product.video;
        videoElement.poster = product.image;

        document.getElementById('product-page-title').innerText = product.name;
        const detailsContainer = document.getElementById('product-details-content');
        
        let tarifsHTML = product.tarifs.map(tarif => `
            <div class="tarif-item">
                <div class="box-tarif">
                    <div class="tarif-wieght">${tarif.weight}</div>
                    <div class="tarif-price">${tarif.price.toFixed(2)}€</div>
                </div>
                <button class="add-to-cart-btn" data-product-id="${product.id}" data-weight="${tarif.weight}" data-price="${tarif.price}">
                    <svg width="20" height="20"><use href="#icon-cart"/></svg>
                </button>
            </div>
        `).join('');

        detailsContainer.innerHTML = `
            <div class="name">${product.name}</div>
            <div class="farm">${product.farm}</div>
            <p class="product-description">${product.description}</p>
            <h4 class="tarifs-title">💰 Tarifs disponibles :</h4>
            <div class="tarifs-grid">
                ${tarifsHTML}
            </div>
        `;
        showPage('page-product');
    }

    // --- Fonctions du Panier (inchangées) ---

    function renderCart() {
        const cartContainer = document.getElementById('cart-items-container');
        if (cart.length === 0) {
            cartContainer.innerHTML = '<p>Votre panier est vide.</p>';
            document.getElementById('cart-total-price').innerText = '0.00€';
            updateCartCount();
            return;
        }
        cartContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <div class="name">${item.name}</div>
                    <div>${item.weight} - ${item.unitPrice.toFixed(2)}€</div>
                    <div class="price">${item.totalPrice.toFixed(2)}€</div>
                </div>
                <div class="quantity-selector">
                    <button class="quantity-btn" data-action="decrease" data-id="${item.id}">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="quantity-btn" data-action="increase" data-id="${item.id}">+</button>
                </div>
            </div>
        `).join('');
        const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);
        document.getElementById('cart-total-price').innerText = `${total.toFixed(2)}€`;
        updateCartCount();
    }
    
    function renderConfirmation() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0);
        document.getElementById('confirmation-items-count').innerText = `${totalItems} article${totalItems > 1 ? 's' : ''}`;
        document.getElementById('confirmation-total-price').innerText = `${totalPrice.toFixed(2)}€`;
        const itemsList = document.getElementById('confirmation-items-list');
        itemsList.innerHTML = cart.map((item, index) => `
             <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <div>${index + 1}. ${item.name}</div>
                    <div>Quantité: ${item.quantity}x ${item.weight}</div>
                    <div>Prix unitaire: ${item.unitPrice.toFixed(2)}€</div>
                </div>
            </div>
        `).join('');
        document.getElementById('confirmation-final-price').innerText = `${totalPrice.toFixed(2)}€`;
        showPage('page-confirmation');
    }

    function renderContactPage() {
        const linksContainer = document.getElementById('contact-links-container');
        linksContainer.innerHTML = contactLinks.map(link => `
        <a href="${link.url}" class="contact-link ${link.className}" target="_blank">
        <svg width="24" height="24"><use href="${link.icon}"/></svg>
                <span>${link.text}</span>
            </a>
        `).join('');
    }

    function updateCartCount() {
        const count = cart.reduce((sum, item) => sum + item.quantity, 0);
        const cartCountElements = document.querySelectorAll('.cart-count');
        cartCountElements.forEach(el => {
            el.innerText = count;
            el.style.display = count > 0 ? 'flex' : 'none';
        });
    }

     /**
      * Peuple les filtres sur la page catégorie.
      * @param {Array} productsToFilter - Les produits de la catégorie active.
      */
    function populateFilters(productsToFilter) {
        const searchFilter = document.getElementById('search-filter');
        const qualityFilter = document.getElementById('quality-filter');
        const farmFilter = document.getElementById('farm-filter');

        const qualities = ['all', ...new Set(productsToFilter.map(p => p.quality))];
        const farms = ['all', ...new Set(productsToFilter.map(p => p.farm))];

        qualityFilter.innerHTML = qualities.map(q => `<option value="${q}">${q === 'all' ? 'Nos Qualités' : q}</option>`).join('');
        farmFilter.innerHTML = farms.map(farm => `<option value="${farm}">${farm === 'all' ? 'Les farms' : farm}</option>`).join('');
        
        // Réinitialise les valeurs des selects
        searchFilter.value = '';
        qualityFilter.value = 'all';
        farmFilter.value = 'all';
    }
 
    // --- GESTION DES FILTRES (attachés une seule fois) ---
    function initFilterListeners() {
        document.getElementById('search-filter').addEventListener('input', (e) => {
           currentFilters.searchTerm = e.target.value.toLowerCase();
           renderCategoryProducts(); // Re-filtre la page catégorie
        });
        document.getElementById('quality-filter').addEventListener('change', (e) => {
            currentFilters.quality = e.target.value;
            renderCategoryProducts(); // Re-filtre la page catégorie
        });
         document.getElementById('farm-filter').addEventListener('change', (e) => {
           currentFilters.farm = e.target.value;
           renderCategoryProducts(); // Re-filtre la page catégorie
         });
    }

    // --- NOTIFICATION ---
    let notificationTimeout;
    function showNotification(message) {
        const notification = document.getElementById('notification-toast');
        if (!notification) return;
        clearTimeout(notificationTimeout);
        notification.classList.remove('show');
        void notification.offsetWidth;
        notification.innerText = message;
        notification.classList.add('show');
        notificationTimeout = setTimeout(() => {
            notification.classList.remove('show');
        }, 3000);
    }

    // --- LOGIQUE DU PANIER ---
    function addToCart(productId, weight, price) {
        const cartItemId = `${productId}-${weight}`;
        const existingItem = cart.find(item => item.id === cartItemId);
        const product = getProductById(productId);
    
        if (existingItem) {
            existingItem.quantity++;
            existingItem.totalPrice = existingItem.quantity * existingItem.unitPrice;
        } else {
            cart.push({
                id: cartItemId, productId: productId, name: product.name,
                image: product.image, weight: weight, quantity: 1,
                unitPrice: price, totalPrice: price
            });
        }
        renderCart();
        tg.HapticFeedback.notificationOccurred('success');
        showNotification('✅ Produit ajouté au panier !');
    }
    
    function updateQuantity(cartItemId, action) {
        const item = cart.find(i => i.id === cartItemId);
        if (!item) return;
        if (action === 'increase') item.quantity++;
        else if (action === 'decrease') item.quantity--;

        if (item.quantity <= 0) cart = cart.filter(i => i.id !== cartItemId);
        else item.totalPrice = item.quantity * item.unitPrice;
        renderCart();
    }
    
    // --- FORMATAGE DU MESSAGE DE COMMANDE ---
    function formatOrderMessage() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0);
        const date = new Date();
        const formattedDate = `${date.getDate()} ${date.toLocaleString('fr-FR', { month: 'long' })} ${date.getFullYear()} a ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;

        let message = "NOUVELLE COMMANDE\n\n";
        message += "====================\n";
        message += "RESUME:\n";
        message += `- ${totalItems} article${totalItems > 1 ? 's' : ''} commande\n`;
        message += `- Total: ${totalPrice.toFixed(2)}e \n`;
        message += "====================\n";
        message += `DETAIL DES ARTICLES:\n`;
    
        cart.forEach((item) => {
            message += `\n- ${item.name} (${item.id})`; // J'ajoute le nom pour plus de clarté
            message += `\n  Quantite: ${item.quantity}x ${item.weight}`;
            message += `\n  Prix unitaire: ${item.unitPrice.toFixed(2)}e`;
            message += `\n  Sous-total: ${item.totalPrice.toFixed(2)} EUR`;
        });
    
        message += `\n\nTOTAL FINAL: ${totalPrice.toFixed(2)} EUR`;
        message += " \n-LIVRAISON: A convenir\n";
        message += " \n-CONTACT: Merci de confirmer cette commande\n";
        message += ` \n-Commande passee le: ${formattedDate}\n`;    
        return message;
    }

    // --- GESTION DES ÉVÉNEMENTS ---

    // Clics sur les boutons de la barre de navigation
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            const pageId = item.dataset.page;
            if (!pageId) return;
            document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
            item.classList.add('active');
            if (pageId === 'page-contact') {
                renderContactPage();
            }
            showPage(pageId);
        });
    });

    // Clics sur le reste de la page (produits, panier, etc.)
    document.body.addEventListener('click', function(e) {
        const target = e.target;
        const currentPage = document.querySelector('.page.active').id;

        // Clic pour voir une catégorie (depuis page-home)
        const categoryCard = target.closest('.category-card');
        if (categoryCard) {
            renderCategoryPage(categoryCard.dataset.categoryId);
            return;
        }

        // Clic pour voir un produit (depuis page-category-products)
        const productCard = target.closest('.product-card');
        if (productCard) {
            renderProductPage(productCard.dataset.productId);
            return;
        }
        
        // Clic sur "Ajouter au panier" (depuis page-product)
        const addToCartBtn = target.closest('.add-to-cart-btn');
        if (addToCartBtn) {
            addToCart(addToCartBtn.dataset.productId, addToCartBtn.dataset.weight, parseFloat(addToCartBtn.dataset.price));
            return;
        }
        
        // Clic sur les boutons de quantité (depuis page-cart)
        const quantityBtn = target.closest('.quantity-btn');
        if (quantityBtn) {
            updateQuantity(quantityBtn.dataset.id, quantityBtn.dataset.action);
            return;
        }
        
        // Clic sur le bouton "retour" (logique améliorée)
        if (target.closest('.back-button')) {
            if (currentPage === 'page-product') {
                showPage('page-category-products'); // Retourne à la liste des produits
            } else if (currentPage === 'page-category-products') {
                showPage('page-home'); // Retourne à la liste des catégories
            } else if (currentPage === 'page-cart' || currentPage === 'page-confirmation') {
                showPage('page-home'); // Retourne à l'accueil
            } else {
                showPage('page-home'); // Fallback
            }
            return;
        }

        // Clic sur "Continuer les achats" (depuis page-cart)
        if (target.closest('#cart-continue-shopping')) {
            showPage('page-home');
            document.querySelector('#nav-menu').classList.add('active');
            document.querySelector('#nav-contact').classList.remove('active');
            return;
        }
        
        // Clic sur le bouton du panier (header)
        if (target.closest('#home-cart-button')) {
            renderCart();
            showPage('page-cart');
            return;
        }
        
        // Clic sur "Commander" (depuis page-cart)
        if (target.closest('#checkout-button')) {
            renderConfirmation();
            return;
        }
        
        // Clic sur "Modifier" (depuis page-confirmation)
        if (target.closest('#confirmation-modify-order')) {
            showPage('page-cart');
            return;
        }
        
        // Clic sur "Confirmer la commande" (depuis page-confirmation)
        if (target.closest('#confirm-order-button')) {
            const targetUsername = 'plugsBotOfficiel';
            let message = formatOrderMessage();
            message = message.replace(/\*/g, '');
            const encodedMessage = encodeURIComponent(message);
            const telegramUrl = `https://t.me/${targetUsername}?text=${encodedMessage}`;
            tg.openLink(telegramUrl);
            return;
        }
    });

    // --- INITIALISATION DE L'APP ---
    function init() {
        // Change la classe du conteneur de la page d'accueil
        homeProductList.className = 'category-grid'; // Affiche 1 colonne de catégories
        
        initFilterListeners(); // Attache les listeners des filtres
        
        setTimeout(() => {
            renderHomePage(); // Affiche les catégories
            updateCartCount();
            showPage('page-home');
        }, 1500);
    }

    init();
});