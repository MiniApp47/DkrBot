// Attend que le DOM soit entièrement chargé pour exécuter le script
document.addEventListener('DOMContentLoaded', function() {
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();
    // On force le thème sombre comme dans l'exemple
    tg.setHeaderColor('#2c2c2e');
    tg.setBackgroundColor('#1c1c1d');
  // --- NOUVELLE CONFIGURATION POUR LES LIENS DE CONTACT ---
const contactLinks = [
    { name: 'WhatsApp', url: 'https://wa.me/33759042145', icon: '#icon-whatsapp', id: 'whatsapp' ,className: 'whatsapp', text: "WhatsApp"},
    { name: 'Instagram', url: 'https://www.instagram.com/plugsbot?igsh=MTYzamtyZ2JpNHJpOQ%3D%3D&utm_source=qr', className: 'instagram', text: "Instagram" ,icon: '#icon-instagram', id: 'instagram' },
    { name: 'Snapchat', url: 'https://snapchat.com/add/user', icon: '#icon-snapchat', id: 'snapchat', className: 'snapchat' , text: "Snapchat"},
    { name: 'Telegram', url: 'https://t.me/PlugsBotOfficielBot', icon: '#icon-telegram', id: 'telegram',className: 'telegram', text: "Telegram" },
    { name: 'Potato', url: 'https://m.potato.im', icon: '#icon-potato', id: 'potato', className: 'potato', text: "Potato"}
];


    // --- DONNÉES DE L'APPLICATION (à remplacer par les tiennes) 🇲🇦 ---
    const products = [
      {
            id: 'FiltrerX3',
            name: 'FILTRER X3 🍫',
            farm: '',
            type: 'Hash',
            category: 'Filtrer', 
            quality: 'Standard',
            description: 'Gmo 🍇 120u <br> 10/10 👌',
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
            id: 'CALI',
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
            id: 'MOUSSEUX',
            name: 'One Peace 🏴‍☠️⚓️ ',
            farm: '',
            type: 'Hash',
            category: 'Mousseux', // <-- AJOUT
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
        },
        {
            id: 'TropicalPunch ',
            name: 'Tropical punch 🏆',
            farm: '',
            type: 'Hash',
            category: 'Mousseux', // <-- AJOUT (regroupé avec Mousseux)
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
        },
      /* {
            id: 'TOP MOUSSEUX',
            name: 'Top Mousseux 🇲🇦',
            farm: 'THEKINGFARM',
            type: 'Hash',
            category: 'Mousseux', // <-- Pense à ajouter la catégorie si tu réactives ce produit
            quality: 'Standard',
            image: 'Mousseaux212.jpeg',
            video: '212.mp4',
            tarifs: [
                { weight: '10g', price: 60.00 },
                { weight: '25g', price: 120.00 },
                { weight: '50g', price: 200.00 },
            ]
        }, */
        // Ajoute d'autres produits ici
    ];

    let cart = []; // Le panier de l'utilisateur
    // --- État des filtres actuels ---
     let currentFilters = {
        searchTerm: '',
        quality: 'all',
        farm: 'all',
        category: 'all' // <-- AJOUT
    }; 

    // --- SÉLECTEURS D'ÉLÉMENTS DU DOM ---
    const pages = document.querySelectorAll('.page');
    const productListContainer = document.getElementById('product-list');
    const loaderPage = document.getElementById('page-loader');

    // --- NAVIGATION ---
    function showPage(pageId) {
        pages.forEach(p => p.classList.remove('active'));
        document.getElementById(pageId).classList.add('active');
    }

    // --- LOGIQUE D'AFFICHAGE ---

    // Affiche la liste des produits en fonction des filtres
    function renderProductList() {
        const filteredProducts = products.filter(product => {
            const searchMatch = product.name.toLowerCase().includes(currentFilters.searchTerm);
            const qualityMatch = currentFilters.quality === 'all' || product.quality === currentFilters.quality;
            const farmMatch = currentFilters.farm === 'all' || product.farm === currentFilters.farm;
            const categoryMatch = currentFilters.category === 'all' || product.category === currentFilters.category; // <-- AJOUT
            
            return searchMatch && qualityMatch && farmMatch && categoryMatch; // <-- MODIFIÉ
        });
    
        productListContainer.innerHTML = '';
        if (filteredProducts.length === 0) {
            productListContainer.innerHTML = '<p class="no-results">Aucun produit ne correspond à votre recherche.</p>';
            return;
        }
        
        filteredProducts.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            
            // CORRECTION : On ajoute l'ID du produit directement sur la carte
            card.dataset.productId = product.id; 
            
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <div class="info">
                    <div class="name">${product.name}</div>
                    <div class="farm">${product.farm}</div>
                </div>
            `;
            // On a supprimé la ligne card.addEventListener(...) qui était ici
            productListContainer.appendChild(card);
        });
    }
    
    // Affiche la page de détail d'un produit
    function renderProductPage(productId) {
        const product = products.find(p => p.id === productId);
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

    // --- MODIFICATION ICI ---
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

    // Met à jour l'affichage du panier
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
    
    // Affiche la page de confirmation
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

    // Affiche la page de contact avec les liens
function renderContactPage() {
    const linksContainer = document.getElementById('contact-links-container');
    linksContainer.innerHTML = contactLinks.map(link => `
    <a href="${link.url}" class="contact-link ${link.className}" target="_blank">
    <svg width="24" height="24"><use href="${link.icon}"/></svg>
            <span>${link.text}</span>
        </a>
    `).join('');
}



    // Met à jour le compteur sur l'icône du panier
    function updateCartCount() {
        const count = cart.reduce((sum, item) => sum + item.quantity, 0);
        const cartCountElements = document.querySelectorAll('.cart-count');
        cartCountElements.forEach(el => {
            el.innerText = count;
            el.style.display = count > 0 ? 'flex' : 'none';
        });
    }

     // --- LOGIQUE DE FILTRAGE ---
    function populateFilters() {
        const searchFilter = document.getElementById('search-filter');
        const qualityFilter = document.getElementById('quality-filter');
        const farmFilter = document.getElementById('farm-filter');
        const categoryFilter = document.getElementById('category-filter'); // <-- AJOUT

        const qualities = ['all', ...new Set(products.map(p => p.quality))];
        const farms = ['all', ...new Set(products.map(p => p.farm))];
        const categories = ['all', ...new Set(products.map(p => p.category))]; // <-- AJOUT

        qualityFilter.innerHTML = qualities.map(q => `<option value="${q}">${q === 'all' ? 'La selection du chef' : q}</option>`).join('');
        farmFilter.innerHTML = farms.map(farm => `<option value="${farm}">${farm === 'all' ? 'Les farms' : farm}</option>`).join('');
        categoryFilter.innerHTML = categories.map(cat => `<option value="${cat}">${cat === 'all' ? 'Toutes les catégories' : cat}</option>`).join(''); // <-- AJOUT
        
         searchFilter.addEventListener('input', (e) => {
           currentFilters.searchTerm = e.target.value.toLowerCase();
            renderProductList();
        });

        qualityFilter.addEventListener('change', (e) => {
            currentFilters.quality = e.target.value;
            renderProductList();
        });

         farmFilter.addEventListener('change', (e) => {
           currentFilters.farm = e.target.value; // <-- CORRIGÉ (c'était e.test.value)
           renderProductList();
         });
         
         categoryFilter.addEventListener('change', (e) => { // <-- AJOUT
            currentFilters.category = e.target.value;
            renderProductList();
         });
    }
 
    // --- NOUVELLE FONCTION POUR LA NOTIFICATION ---
let notificationTimeout;
function showNotification(message) {
    const notification = document.getElementById('notification-toast');
    if (!notification) return;

    clearTimeout(notificationTimeout);
    notification.classList.remove('show');
    void notification.offsetWidth; // Force le reflow pour réinitialiser l'animation

    notification.innerText = message;
    notification.classList.add('show');

    notificationTimeout = setTimeout(() => {
        notification.classList.remove('show');
    }, 3000); // La notification disparaît après 3 secondes
}

    // --- LOGIQUE DU PANIER ---

    function addToCart(productId, weight, price) {
        const cartItemId = `${productId}-${weight}`;
        const existingItem = cart.find(item => item.id === cartItemId);
        const product = products.find(p => p.id === productId);
    
        if (existingItem) {
            existingItem.quantity++;
            existingItem.totalPrice = existingItem.quantity * existingItem.unitPrice;
        } else {
            cart.push({
                id: cartItemId,
                productId: productId,
                name: product.name,
                image: product.image,
                weight: weight,
                quantity: 1,
                unitPrice: price,
                totalPrice: price
            });
        }
        renderCart();
        tg.HapticFeedback.notificationOccurred('success');
        showNotification('✅ Produit ajouté au panier !'); // Appel de la notification
    }
    

    function updateQuantity(cartItemId, action) {
        const item = cart.find(i => i.id === cartItemId);
        if (!item) return;

        if (action === 'increase') {
            item.quantity++;
        } else if (action === 'decrease') {
            item.quantity--;
        }

        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== cartItemId);
        } else {
            item.totalPrice = item.quantity * item.unitPrice;
        }
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
            message += `\n- ${item.id}`;
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
// Ajoute cette nouvelle fonction juste après formatOrderMessage()
/* function formatOrderMessageForLink() {
    const totalPrice = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    const date = new Date();
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;

    let message = "NOUVELLE COMMANDE\n\n";
    message += "====================\n";
    message += "RESUME:\n";
    message += `- ${totalItems} article${totalItems > 1 ? 's' : ''} commandé\n`;
    message += `- Total: ${totalPrice.toFixed(2)}€ \n`;
    message += "====================\n";
    message += `_DÉTAIL DES ARTICLES:_\n`;

    cart.forEach((item) => {
        message += `\n- ${item.name}`;
        message += `\n  Quantite: ${item.quantity}x ${item.weight}`;
        message += `  • Prix unitaire: ${item.unitPrice.toFixed(2)}€`;
        message += `\n  Sous-total: ${item.totalPrice.toFixed(2)} EUR`;
    });

    message += `\n\nTOTAL FINAL: ${totalPrice.toFixed(2)} EUR`;
    message += "📍 -LIVRAISON: À convenir\n";
    message += "📞 -CONTACT: Merci de confirmer cette commande\n";
    message += `🕒 -Commande passée le: ${formattedDate}\n`;    
    return message;
}
 */

// --- GESTION DES ÉVÉNEMENTS ---

// Clics sur les boutons de la barre de navigation
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        const pageId = item.dataset.page;
        if (!pageId) return;

        // Met à jour l'état "actif"
        document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
        item.classList.add('active');

        // Prépare et affiche la bonne page
        if (pageId === 'page-contact') {
            renderContactPage();
        }
        showPage(pageId);
    });
});

// Clics sur le reste de la page (produits, panier, etc.)
document.body.addEventListener('click', function(e) {
    const target = e.target;

    // Clic pour voir la page d'un produit
    const productCard = target.closest('.product-card');
    if (productCard) {
        renderProductPage(productCard.dataset.productId);
    }
    
    // Clic sur "Ajouter au panier"
    if (target.closest('.add-to-cart-btn')) {
        const btn = target.closest('.add-to-cart-btn');
        addToCart(btn.dataset.productId, btn.dataset.weight, parseFloat(btn.dataset.price));
    }
    
    // Clic sur les boutons de quantité
    if (target.closest('.quantity-btn')) {
        const btn = target.closest('.quantity-btn');
        updateQuantity(btn.dataset.id, btn.dataset.action);
    }
    
    // Clic sur le bouton "fermer" de n'importe quelle page
    if (target.closest('.close-button')) {
        showPage('page-home');
        document.querySelector('#nav-menu').classList.add('active');
        document.querySelector('#nav-contact').classList.remove('active');
    }

    // ACTION : Clic sur "Continuer les achats" (renvoie à l'accueil)
    if (target.closest('#cart-continue-shopping')) {
        showPage('page-home');
        document.querySelector('#nav-menu').classList.add('active');
        document.querySelector('#nav-contact').classList.remove('active');
    }
    
    // Clic sur les boutons "retour"
    if (target.closest('.back-button')) {
        showPage('page-home');
        document.querySelector('#nav-menu').classList.add('active');
        document.querySelector('#nav-contact').classList.remove('active');
    }
    
    // Clic sur le bouton du panier dans l'en-tête
    if (target.closest('#home-cart-button')) {
        renderCart();
        showPage('page-cart');
    }
    
    // Clic sur "Commander" dans le panier
    if (target.closest('#checkout-button')) {
        renderConfirmation();
    }
    
    // ACTION : Clic sur "Modifier" (renvoie au panier)
    if (target.closest('#confirmation-modify-order')) {
        showPage('page-cart');
    }
    
// Clic sur "Confirmer la commande"
if (target.closest('#confirm-order-button')) {
    // 1. Définit le nom d'utilisateur Telegram qui recevra la commande.
    //    Remplace 'TON_NOM_D_UTILISATEUR_TELEGRAM' par ton vrai pseudo (sans le @).
    const targetUsername = 'plugsBotOfficiel';

    // 2. On prépare le message de la commande AVEC les emojis.
    let message = formatOrderMessage();

    // 3. ON RETIRE LES ÉTOILES pour que le lien ne soit pas déformé.
    //    Ceci est l'astuce qui fait fonctionner le lien tout en gardant les emojis.
    message = message.replace(/\*/g, ''); 

    // 4. On encode le message pour l'URL.
    const encodedMessage = encodeURIComponent(message);

    // 5. On construit le lien direct vers la discussion.
    const telegramUrl = `https://t.me/${targetUsername}?text=${encodedMessage}`;

    // 6. On demande à Telegram d'ouvrir ce lien.
    tg.openLink(telegramUrl);
}


});


    // --- INITIALISATION DE L'APP ---
    function init() {
        setTimeout(() => {
            populateFilters(); // On remplit les filtres
            renderProductList(); // On affiche la liste initiale
            updateCartCount();
            showPage('page-home');
        }, 1500);
    }

    init();
});