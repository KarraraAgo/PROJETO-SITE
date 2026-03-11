// ==========================================
// CONFIGURAÇÃO INICIAL E CONSTANTES
// ==========================================

// Configuração padrão da pizzaria (pode ser alterada via SDK)
const defaultConfig = {
    pizzaria_name: 'GOOD LANCHES',
    pizzaria_slogan: 'Sabor que conquista!',
    about_text: 'Desde 2016, a GOOD LANCHES tem sido o ponto de encontro de famílias e amigos que buscam comida boa, rápida e com qualidade.',
    address_text: 'Rua das Pizzas, 123 - Centro',
    phone_number: '81986516772',
    working_hours: 'Segunda a Domingo - 18h às 23h'
};

// Cardápio inicial da pizzaria
// ALTERE AQUI para adicionar/remover produtos do cardápio
// Use 'image' para imagens reais ou 'emoji' para emojis
let menuProducts = [
    // Pizzas
    { id: 1, name: 'Pizza Margherita', description: 'Molho de tomate, mussarela fresca e manjericão', price: 45.00, category: 'pizzas', image: 'img/pizza-margherita.jpg', emoji: '🍕', ingredients: ['Molho de tomate', 'Mussarela', 'Manjericão'] },
    { id: 2, name: 'Pizza Calabresa', description: 'Molho, mussarela, calabresa fatiada e cebola', price: 48.00, category: 'pizzas', image: 'img/pizza-calabresa.jpg', emoji: '🍕', ingredients: ['Molho de tomate', 'Mussarela', 'Calabresa', 'Cebola'] },
    { id: 3, name: 'Pizza Portuguesa', description: 'Molho, mussarela, presunto, ovos, cebola e azeitona', price: 52.00, category: 'pizzas', image: 'img/pizza-portuguesa.jpg', emoji: '🍕', ingredients: ['Molho de tomate', 'Mussarela', 'Presunto', 'Ovos', 'Cebola', 'Azeitona'] },
    { id: 4, name: 'Pizza Frango com Catupiry', description: 'Molho, mussarela, frango desfiado e catupiry', price: 55.00, category: 'pizzas', image: 'img/pizza-frango-catupiry.jpg', emoji: '🍕', ingredients: ['Molho de tomate', 'Mussarela', 'Frango', 'Catupiry'] },
    { id: 5, name: 'Pizza Quatro Queijos', description: 'Molho, mussarela, provolone, gorgonzola e parmesão', price: 58.00, category: 'pizzas', image: 'img/pizza-quatro-queijos.jpg', emoji: '🧀', ingredients: ['Molho de tomate', 'Mussarela', 'Provolone', 'Gorgonzola', 'Parmesão'] },
    { id: 6, name: 'Pizza Pepperoni', description: 'Molho, mussarela e pepperoni importado', price: 56.00, category: 'pizzas', image: 'img/pizza-pepperoni.jpg', emoji: '🍕', ingredients: ['Molho de tomate', 'Mussarela', 'Pepperoni'] },
    
    // Lanches
    { id: 7, name: 'X-Burguer', description: 'Pão, hambúrguer, queijo, alface e tomate', price: 22.00, category: 'lanches', image: 'img/x-burger.jpg', emoji: '🍔', ingredients: ['Pão', 'Hambúrguer', 'Queijo', 'Alface', 'Tomate'] },
    { id: 8, name: 'X-Bacon', description: 'Pão, hambúrguer, queijo, bacon crocante, alface e tomate', price: 28.00, category: 'lanches', image: 'img/x-bacon.jpg', emoji: '🍔', ingredients: ['Pão', 'Hambúrguer', 'Queijo', 'Bacon', 'Alface', 'Tomate'] },
    { id: 9, name: 'X-Tudo', description: 'Pão, hambúrguer, queijo, bacon, ovo, presunto, alface e tomate', price: 35.00, category: 'lanches', image: 'img/x-tudo.jpg', emoji: '🍔', ingredients: ['Pão', 'Hambúrguer', 'Queijo', 'Bacon', 'Ovo', 'Presunto', 'Alface', 'Tomate'] },
    { id: 10, name: 'Hot Dog Especial', description: 'Pão, salsicha, purê, batata palha, milho e ervilha', price: 18.00, category: 'lanches', image: 'img/hot-dog.jpg', emoji: '🌭', ingredients: ['Pão', 'Salsicha', 'Purê', 'Batata palha', 'Milho', 'Ervilha'] },
    
    // Bebidas
    { id: 11, name: 'Refrigerante Lata', description: 'Coca-Cola, Guaraná ou Fanta - 350ml', price: 6.00, category: 'bebidas', image: 'img/refrigerante-lata.jpg', emoji: '🥤', ingredients: [] },
    { id: 12, name: 'Refrigerante 2L', description: 'Coca-Cola, Guaraná ou Fanta', price: 12.00, category: 'bebidas', image: 'img/refrigerante-2l.jpg', emoji: '🥤', ingredients: [] },
    { id: 13, name: 'Suco Natural', description: 'Laranja, limão ou maracujá - 500ml', price: 10.00, category: 'bebidas', image: 'img/suco-natural.jpg', emoji: '🍹', ingredients: [] },
    { id: 14, name: 'Água Mineral', description: 'Com ou sem gás - 500ml', price: 4.00, category: 'bebidas', image: 'img/agua-mineral.jpg', emoji: '💧', ingredients: [] },
    
    // Combos
    { id: 15, name: 'Combo Família', description: '1 Pizza Grande + 1 Refrigerante 2L + 1 Sobremesa', price: 75.00, category: 'combos', image: 'img/combo-familia.jpg', emoji: '🎁', ingredients: [] },
    { id: 16, name: 'Combo Casal', description: '1 Pizza Média + 2 Refrigerantes Lata', price: 55.00, category: 'combos', image: 'img/combo-casal.jpg', emoji: '❤️', ingredients: [] },
    { id: 17, name: 'Combo Lanche', description: '1 X-Burguer + Batata Frita + Refrigerante', price: 38.00, category: 'combos', image: 'img/combo-lanche.jpg', emoji: '🍟', ingredients: [] }
];

// Ingredientes extras disponíveis
const extraIngredients = [
    { name: 'Queijo Extra', price: 5.00 },
    { name: 'Bacon', price: 5.00 },
    { name: 'Calabresa', price: 5.00 },
    { name: 'Cebola', price: 3.00 },
    { name: 'Milho', price: 3.00 },
    { name: 'Azeitona', price: 4.00 },
    { name: 'Catupiry', price: 6.00 },
    { name: 'Cheddar', price: 5.00 }
];

// Taxa de entrega
const DELIVERY_FEE = 5.00;

// ==========================================
// ESTADO DA APLICAÇÃO
// ==========================================

let cart = []; // Itens no carrinho
let currentUser = null; // Usuário logado
let orders = []; // Pedidos do sistema
let users = []; // Usuários cadastrados
let customProducts = []; // Produtos adicionados pelo admin
let currentCustomization = null; // Produto sendo personalizado
let confirmCallback = null; // Callback do modal de confirmação
let pendingCartAction = null; // Ação pendente após login

// ==========================================
// INICIALIZAÇÃO DOS SDKs
// ==========================================

// Inicializa o Element SDK para permitir customização
if (window.elementSdk) {
    window.elementSdk.init({
        defaultConfig: defaultConfig,
        onConfigChange: async (config) => {
            // Atualiza elementos da página com as novas configurações
            const headerName = document.getElementById('header-name');
            const heroTitle = document.getElementById('hero-title');
            const heroSlogan = document.getElementById('hero-slogan');
            const footerName = document.getElementById('footer-name');
            const aboutText = document.getElementById('about-text');
            const addressText = document.getElementById('address-text');
            const workingHours = document.getElementById('working-hours');
            const whatsappLink = document.getElementById('whatsapp-link');
            
            if (headerName) headerName.textContent = config.pizzaria_name || defaultConfig.pizzaria_name;
            if (heroTitle) heroTitle.textContent = config.pizzaria_name || defaultConfig.pizzaria_name;
            if (heroSlogan) heroSlogan.textContent = config.pizzaria_slogan || defaultConfig.pizzaria_slogan;
            if (footerName) footerName.textContent = config.pizzaria_name || defaultConfig.pizzaria_name;
            if (aboutText) aboutText.textContent = config.about_text || defaultConfig.about_text;
            if (addressText) addressText.textContent = config.address_text || defaultConfig.address_text;
            if (workingHours) workingHours.textContent = config.working_hours || defaultConfig.working_hours;
            if (whatsappLink) whatsappLink.href = `https://wa.me/${config.phone_number || defaultConfig.phone_number}`;
        },
        mapToCapabilities: (config) => ({
            recolorables: [],
            borderables: [],
            fontEditable: undefined,
            fontSizeable: undefined
        }),
        mapToEditPanelValues: (config) => new Map([
            ['pizzaria_name', config.pizzaria_name || defaultConfig.pizzaria_name],
            ['pizzaria_slogan', config.pizzaria_slogan || defaultConfig.pizzaria_slogan],
            ['about_text', config.about_text || defaultConfig.about_text],
            ['address_text', config.address_text || defaultConfig.address_text],
            ['phone_number', config.phone_number || defaultConfig.phone_number],
            ['working_hours', config.working_hours || defaultConfig.working_hours]
        ])
    });
}

// Handler para o Data SDK
const dataHandler = {
    onDataChanged(data) {
        // Separa os dados por tipo
        users = data.filter(d => d.type === 'user');
        orders = data.filter(d => d.type === 'order');
        customProducts = data.filter(d => d.type === 'product');
        
        // Atualiza as interfaces
        renderAdminOrders();
        renderAdminProducts();
        updateTrackingPage();
    }
};

// Inicializa o Data SDK
async function initDataSdk() {
    if (window.dataSdk) {
        const result = await window.dataSdk.init(dataHandler);
        if (!result.isOk) {
            console.error('Erro ao inicializar Data SDK');
        }
    }
}

// ==========================================
// NAVEGAÇÃO ENTRE PÁGINAS
// ==========================================

// Navega para uma página específica
function navigateTo(page) {
    // Esconde todas as páginas
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    
    // Mostra a página solicitada
    const targetPage = document.getElementById(`page-${page}`);
    if (targetPage) {
        targetPage.classList.remove('hidden');
    }
    
    // Fecha menu mobile se aberto
    document.getElementById('mobile-menu').classList.add('hidden');
    
    // Scroll para o topo
    document.getElementById('app').scrollTo(0, 0);
    
    // Ações específicas por página
    if (page === 'menu') {
        renderMenu();
    } else if (page === 'cart') {
        renderCart();
    } else if (page === 'admin') {
        renderAdminOrders();
        renderAdminProducts();
    }
    
    // Atualiza ícones Lucide
    lucide.createIcons();
}

// Scroll suave para uma seção
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Toggle menu mobile
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// ==========================================
// SISTEMA DE AUTENTICAÇÃO
// ==========================================

// Alterna entre abas de login/cadastro
function switchAuthTab(tab) {
    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    
    if (tab === 'login') {
        loginTab.classList.add('text-pizza-yellow', 'border-pizza-yellow');
        loginTab.classList.remove('text-gray-400', 'border-transparent');
        registerTab.classList.add('text-gray-400', 'border-transparent');
        registerTab.classList.remove('text-pizza-yellow', 'border-pizza-yellow');
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
    } else {
        registerTab.classList.add('text-pizza-yellow', 'border-pizza-yellow');
        registerTab.classList.remove('text-gray-400', 'border-transparent');
        loginTab.classList.add('text-gray-400', 'border-transparent');
        loginTab.classList.remove('text-pizza-yellow', 'border-pizza-yellow');
        registerForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    }
}

// Processa login
async function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    const errorDiv = document.getElementById('login-error');
    
    // Busca usuário
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        updateUserUI();
        showToast('Login realizado com sucesso!', 'success');
        
        // Executa ação pendente se houver
        if (pendingCartAction) {
            pendingCartAction();
            pendingCartAction = null;
        } else {
            navigateTo('home');
        }
    } else {
        // Verifica se é admin
        if (email === 'admin@pizzaria.com' && password === 'admin123') {
            currentUser = { name: 'Administrador', email: email, isAdmin: true };
            updateUserUI();
            showToast('Bem-vindo, Administrador!', 'success');
            navigateTo('admin');
        } else {
            errorDiv.textContent = 'Email ou senha incorretos. Tente novamente.';
            errorDiv.classList.remove('hidden');
        }
    }
}

// Processa cadastro
async function handleRegister(event) {
    event.preventDefault();
    
    const name = document.getElementById('register-name').value;
    const phone = document.getElementById('register-phone').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const address = document.getElementById('register-address').value;
    const errorDiv = document.getElementById('register-error');
    
    // Verifica se email já existe
    if (users.find(u => u.email === email)) {
        errorDiv.textContent = 'Este email já está cadastrado. Faça login.';
        errorDiv.classList.remove('hidden');
        return;
    }
    
    // Verifica limite de registros
    if (users.length >= 999) {
        errorDiv.textContent = 'Limite de cadastros atingido.';
        errorDiv.classList.remove('hidden');
        return;
    }
    
    // Cria novo usuário
    if (window.dataSdk) {
        const result = await window.dataSdk.create({
            type: 'user',
            name: name,
            phone: phone,
            email: email,
            password: password,
            address: address,
            createdAt: new Date().toISOString()
        });
        
        if (result.isOk) {
            currentUser = { name, phone, email, address };
            updateUserUI();
            showToast('Cadastro realizado com sucesso!', 'success');
            
            if (pendingCartAction) {
                pendingCartAction();
                pendingCartAction = null;
            } else {
                navigateTo('home');
            }
        } else {
            errorDiv.textContent = 'Erro ao cadastrar. Tente novamente.';
            errorDiv.classList.remove('hidden');
        }
    } else {
        // Fallback sem SDK
        currentUser = { name, phone, email, address };
        users.push(currentUser);
        updateUserUI();
        showToast('Cadastro realizado com sucesso!', 'success');
        navigateTo('home');
    }
}

// Atualiza UI do usuário logado
function updateUserUI() {
    const userBtnText = document.getElementById('user-btn-text');
    
    if (currentUser) {
        userBtnText.textContent = currentUser.name.split(' ')[0];
        
        // Atualiza endereço no carrinho
        const deliveryAddress = document.getElementById('delivery-address');
        if (deliveryAddress && currentUser.address) {
            deliveryAddress.textContent = currentUser.address;
        }
    } else {
        userBtnText.textContent = 'Entrar';
    }
}

// Ação do botão de usuário
function handleUserClick() {
    if (currentUser) {
        if (currentUser.isAdmin) {
            navigateTo('admin');
        } else {
            // Mostra opções do usuário
            showConfirm('Sair da conta?', `Logado como ${currentUser.name}`, () => {
                currentUser = null;
                updateUserUI();
                showToast('Você saiu da conta', 'info');
            });
        }
    } else {
        navigateTo('login');
    }
}

// ==========================================
// RENDERIZAÇÃO DO CARDÁPIO
// ==========================================

// Renderiza a lista de produtos do cardápio
function renderMenu(filter = 'all') {
    const grid = document.getElementById('menu-grid');
    
    // Combina produtos padrão com produtos customizados
    const allProducts = [...menuProducts];
    customProducts.forEach(cp => {
        allProducts.push({
            id: cp.__backendId,
            name: cp.productName,
            description: cp.productDescription,
            price: cp.productPrice,
            category: cp.productCategory,
            image: cp.productImage || '',
            emoji: cp.productEmoji || '🍕',
            ingredients: cp.productDescription.split(',').map(i => i.trim())
        });
    });
    
    // Filtra produtos por categoria
    const filteredProducts = filter === 'all' 
        ? allProducts 
        : allProducts.filter(p => p.category === filter);
    
    grid.innerHTML = filteredProducts.map(product => `
        <!-- Item do Cardápio -->
        <div class="bg-pizza-dark/50 rounded-2xl border border-pizza-red/20 overflow-hidden card-hover" data-category="${product.category}">
            <!-- Imagem do Produto -->
            <div class="h-40 bg-gradient-to-br from-pizza-red/20 to-pizza-orange/20 flex items-center justify-center overflow-hidden">
                ${product.image ? `<img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover">` : `<span class="text-6xl">${product.emoji || '🍕'}</span>`}
            </div>
            
            <!-- Informações do Produto -->
            <div class="p-4">
                <span class="text-xs text-pizza-yellow uppercase tracking-wide">${getCategoryName(product.category)}</span>
                <h3 class="font-display text-lg text-white mt-1">${product.name}</h3>
                <p class="text-gray-400 text-sm mt-1 line-clamp-2">${product.description}</p>
                
                <div class="flex items-center justify-between mt-4">
                    <p class="text-pizza-yellow font-bold text-xl">R$ ${product.price.toFixed(2).replace('.', ',')}</p>
                    
                    <!-- Botão Adicionar ao Carrinho -->
                    <button onclick="openCustomization(${typeof product.id === 'string' ? `'${product.id}'` : product.id})" class="bg-pizza-yellow text-pizza-dark p-2 rounded-full hover:bg-yellow-400 transition-colors">
                        <i data-lucide="plus" class="w-5 h-5"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    lucide.createIcons();
}

// Filtra produtos por categoria
function filterCategory(category) {
    // Atualiza tabs
    document.querySelectorAll('.category-tab').forEach(tab => {
        if (tab.dataset.category === category) {
            tab.classList.add('tab-active');
        } else {
            tab.classList.remove('tab-active');
        }
    });
    
    renderMenu(category);
}

// Retorna nome legível da categoria
function getCategoryName(category) {
    const names = {
        'pizzas': 'Pizza',
        'lanches': 'Lanche',
        'bebidas': 'Bebida',
        'combos': 'Combo'
    };
    return names[category] || category;
}

// ==========================================
// PERSONALIZAÇÃO DO PEDIDO
// ==========================================

// Abre página de personalização
function openCustomization(productId) {
    // Busca produto
    let product = menuProducts.find(p => p.id === productId);
    
    // Se não encontrou, busca nos produtos customizados
    if (!product) {
        const customProduct = customProducts.find(p => p.__backendId === productId);
        if (customProduct) {
            product = {
                id: customProduct.__backendId,
                name: customProduct.productName,
                description: customProduct.productDescription,
                price: customProduct.productPrice,
                category: customProduct.productCategory,
                image: customProduct.productImage || '',
                emoji: customProduct.productEmoji || '🍕',
                ingredients: customProduct.productDescription.split(',').map(i => i.trim())
            };
        }
    }
    
    if (!product) return;
    
    // Configura personalização
    currentCustomization = {
        product: product,
        quantity: 1,
        removedIngredients: [],
        addedIngredients: [],
        notes: ''
    };
    
    // Atualiza UI
    document.getElementById('customize-name').textContent = product.name;
    document.getElementById('customize-description').textContent = product.description;
    document.getElementById('customize-price').textContent = `R$ ${product.price.toFixed(2).replace('.', ',')}`;
    document.getElementById('customize-image').innerHTML = product.image 
        ? `<img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover rounded-lg">`
        : `<span class="text-4xl">${product.emoji || '🍕'}</span>`;
    document.getElementById('customize-quantity').textContent = '1';
    document.getElementById('customize-notes').value = '';
    
    // Renderiza ingredientes padrão
    renderDefaultIngredients();
    renderExtraIngredients();
    updateCustomizeTotal();
    
    navigateTo('customize');
}

// Renderiza ingredientes padrão (remover)
function renderDefaultIngredients() {
    const container = document.getElementById('default-ingredients');
    const ingredients = currentCustomization.product.ingredients || [];
    
    if (ingredients.length === 0) {
        container.innerHTML = '<p class="text-gray-500">Não há ingredientes para remover</p>';
        return;
    }
    
    container.innerHTML = ingredients.map((ing, index) => {
        const isRemoved = currentCustomization.removedIngredients.includes(ing);
        return `
            <button onclick="toggleDefaultIngredient('${ing}')" 
                class="px-4 py-2 rounded-full border transition-all ${isRemoved 
                    ? 'border-red-500 bg-red-500/20 text-red-400 line-through' 
                    : 'border-gray-600 text-white hover:border-pizza-yellow'}">
                ${isRemoved ? '✕' : ''} ${ing}
            </button>
        `;
    }).join('');
}

// Toggle ingrediente padrão (remover/adicionar de volta)
function toggleDefaultIngredient(ingredient) {
    const index = currentCustomization.removedIngredients.indexOf(ingredient);
    if (index > -1) {
        currentCustomization.removedIngredients.splice(index, 1);
    } else {
        currentCustomization.removedIngredients.push(ingredient);
    }
    renderDefaultIngredients();
}

// Renderiza ingredientes extras (adicionar)
function renderExtraIngredients() {
    const container = document.getElementById('extra-ingredients');
    
    container.innerHTML = extraIngredients.map(ing => {
        const isAdded = currentCustomization.addedIngredients.find(a => a.name === ing.name);
        return `
            <button onclick="toggleExtraIngredient('${ing.name}', ${ing.price})" 
                class="px-4 py-2 rounded-full border transition-all ${isAdded 
                    ? 'border-pizza-yellow bg-pizza-yellow/20 text-pizza-yellow' 
                    : 'border-gray-600 text-white hover:border-pizza-yellow'}">
                ${isAdded ? '✓' : '+'} ${ing.name} (+R$ ${ing.price.toFixed(2).replace('.', ',')})
            </button>
        `;
    }).join('');
}

// Toggle ingrediente extra
function toggleExtraIngredient(name, price) {
    const index = currentCustomization.addedIngredients.findIndex(a => a.name === name);
    if (index > -1) {
        currentCustomization.addedIngredients.splice(index, 1);
    } else {
        currentCustomization.addedIngredients.push({ name, price });
    }
    renderExtraIngredients();
    updateCustomizeTotal();
}

// Atualiza quantidade na personalização
function updateCustomizeQuantity(delta) {
    const newQty = currentCustomization.quantity + delta;
    if (newQty >= 1 && newQty <= 10) {
        currentCustomization.quantity = newQty;
        document.getElementById('customize-quantity').textContent = newQty;
        updateCustomizeTotal();
    }
}

// Atualiza total na personalização
function updateCustomizeTotal() {
    const basePrice = currentCustomization.product.price;
    const extrasTotal = currentCustomization.addedIngredients.reduce((sum, ing) => sum + ing.price, 0);
    const total = (basePrice + extrasTotal) * currentCustomization.quantity;
    
    document.getElementById('customize-total').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

// Adiciona item personalizado ao carrinho
function addCustomizedToCart() {
    // Verifica se usuário está logado
    if (!currentUser) {
        pendingCartAction = addCustomizedToCart;
        showToast('Faça login para adicionar ao carrinho', 'warning');
        navigateTo('login');
        return;
    }
    
    const notes = document.getElementById('customize-notes').value;
    currentCustomization.notes = notes;
    
    // Cria item do carrinho
    const cartItem = {
        id: Date.now(),
        product: currentCustomization.product,
        quantity: currentCustomization.quantity,
        removedIngredients: [...currentCustomization.removedIngredients],
        addedIngredients: [...currentCustomization.addedIngredients],
        notes: notes,
        unitPrice: currentCustomization.product.price + currentCustomization.addedIngredients.reduce((sum, ing) => sum + ing.price, 0)
    };
    
    cart.push(cartItem);
    updateCartCount();
    showToast(`${currentCustomization.product.name} adicionado ao carrinho!`, 'success');
    navigateTo('menu');
}

// ==========================================
// CARRINHO DE COMPRAS
// ==========================================

// Atualiza contador do carrinho
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = count;
    document.getElementById('cart-count-mobile').textContent = count;
}

// Renderiza o carrinho
function renderCart() {
    const itemsContainer = document.getElementById('cart-items');
    const emptyContainer = document.getElementById('cart-empty');
    const summaryContainer = document.getElementById('cart-summary');
    
    if (cart.length === 0) {
        itemsContainer.innerHTML = '';
        emptyContainer.classList.remove('hidden');
        summaryContainer.classList.add('hidden');
        return;
    }
    
    emptyContainer.classList.add('hidden');
    summaryContainer.classList.remove('hidden');
    
    // Renderiza itens
    itemsContainer.innerHTML = cart.map(item => `
        <!-- Item do Carrinho -->
        <div class="bg-pizza-dark/50 rounded-xl border border-pizza-red/20 p-4 flex gap-4">
            <!-- Imagem -->
            <div class="w-20 h-20 bg-pizza-red/20 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                ${item.product.image ? `<img src="${item.product.image}" alt="${item.product.name}" class="w-full h-full object-cover">` : `<span class="text-3xl">${item.product.emoji || '🍕'}</span>`}
            </div>
            
            <!-- Informações -->
            <div class="flex-1">
                <h3 class="font-semibold text-white">${item.product.name}</h3>
                ${item.removedIngredients.length > 0 ? `<p class="text-xs text-red-400">Sem: ${item.removedIngredients.join(', ')}</p>` : ''}
                ${item.addedIngredients.length > 0 ? `<p class="text-xs text-green-400">Com: ${item.addedIngredients.map(i => i.name).join(', ')}</p>` : ''}
                ${item.notes ? `<p class="text-xs text-gray-500">Obs: ${item.notes}</p>` : ''}
                <p class="text-pizza-yellow font-bold mt-1">R$ ${(item.unitPrice * item.quantity).toFixed(2).replace('.', ',')}</p>
            </div>
            
            <!-- Controle de Quantidade -->
            <div class="flex flex-col items-center justify-between">
                <button onclick="removeFromCart(${item.id})" class="text-gray-500 hover:text-red-500 transition-colors">
                    <i data-lucide="trash-2" class="w-4 h-4"></i>
                </button>
                <div class="flex items-center gap-2">
                    <button onclick="updateCartQuantity(${item.id}, -1)" class="w-8 h-8 bg-pizza-dark border border-gray-700 rounded-full flex items-center justify-center text-white hover:border-pizza-yellow transition-colors">
                        <i data-lucide="minus" class="w-3 h-3"></i>
                    </button>
                    <span class="text-white font-bold w-6 text-center">${item.quantity}</span>
                    <button onclick="updateCartQuantity(${item.id}, 1)" class="w-8 h-8 bg-pizza-dark border border-gray-700 rounded-full flex items-center justify-center text-white hover:border-pizza-yellow transition-colors">
                        <i data-lucide="plus" class="w-3 h-3"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    // Atualiza totais
    const subtotal = cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
    const total = subtotal + DELIVERY_FEE;
    
    document.getElementById('cart-subtotal').textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    document.getElementById('cart-delivery').textContent = `R$ ${DELIVERY_FEE.toFixed(2).replace('.', ',')}`;
    document.getElementById('cart-total').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
    
    // Atualiza endereço
    if (currentUser && currentUser.address) {
        document.getElementById('delivery-address').textContent = currentUser.address;
    }
    
    // Reset da forma de pagamento
    document.querySelectorAll('input[name="payment-method"]').forEach(radio => radio.checked = false);
    document.querySelectorAll('input[name="cash-location"]').forEach(radio => radio.checked = false);
    document.getElementById('cash-options').classList.add('hidden');
    document.getElementById('pix-options').classList.add('hidden');
    
    lucide.createIcons();
}

// Atualiza quantidade no carrinho
function updateCartQuantity(itemId, delta) {
    const item = cart.find(i => i.id === itemId);
    if (item) {
        const newQty = item.quantity + delta;
        if (newQty <= 0) {
            removeFromCart(itemId);
        } else if (newQty <= 10) {
            item.quantity = newQty;
            renderCart();
            updateCartCount();
        }
    }
}

// Remove item do carrinho
function removeFromCart(itemId) {
    cart = cart.filter(i => i.id !== itemId);
    renderCart();
    updateCartCount();
    showToast('Item removido do carrinho', 'info');
}

// ==========================================
// SISTEMA DE PAGAMENTO
// ==========================================

// Manipula mudança na forma de pagamento
function handlePaymentChange() {
    const selectedPayment = document.querySelector('input[name="payment-method"]:checked');
    const cashOptions = document.getElementById('cash-options');
    const pixOptions = document.getElementById('pix-options');
    const cashLocationRadios = document.querySelectorAll('input[name="cash-location"]');
    
    // Limpa seleção anterior
    cashLocationRadios.forEach(radio => radio.checked = false);
    
    if (!selectedPayment) {
        cashOptions.classList.add('hidden');
        pixOptions.classList.add('hidden');
        return;
    }
    
    const paymentMethod = selectedPayment.value;
    
    if (paymentMethod === 'cash') {
        cashOptions.classList.remove('hidden');
        pixOptions.classList.add('hidden');
    } else if (paymentMethod === 'pix') {
        pixOptions.classList.remove('hidden');
        cashOptions.classList.add('hidden');
    }
    
    // Atualiza ícones Lucide
    lucide.createIcons();
}

// Finaliza o pedido
async function finishOrder() {
    if (!currentUser) {
        pendingCartAction = finishOrder;
        showToast('Faça login para finalizar o pedido', 'warning');
        navigateTo('login');
        return;
    }
    
    if (cart.length === 0) {
        showToast('Seu carrinho está vazio', 'warning');
        return;
    }
    
    // Valida forma de pagamento
    const selectedPayment = document.querySelector('input[name="payment-method"]:checked');
    if (!selectedPayment) {
        showToast('Selecione uma forma de pagamento', 'warning');
        return;
    }
    
    const paymentMethod = selectedPayment.value;
    let paymentLocation = null;
    
    // Valida local de pagamento (se dinheiro)
    if (paymentMethod === 'cash') {
        const selectedLocation = document.querySelector('input[name="cash-location"]:checked');
        if (!selectedLocation) {
            showToast('Selecione onde vai pagar', 'warning');
            return;
        }
        paymentLocation = selectedLocation.value;
    }
    
    // Processa pagamento PIX
    if (paymentMethod === 'pix') {
        const confirmPix = await showConfirmWithMessage(
            'Confirmar Pagamento PIX',
            'Você será direcionado para confirmar o pagamento via PIX. O pedido só será confirmado após a confirmação do pagamento.',
            'Continuar com PIX',
            'Cancelar'
        );
        
        if (!confirmPix) {
            return;
        }
        
        // Simula aguardo de confirmação de PIX (em produção, isso seria chamada à API de pagamento)
        showToast('Aguardando confirmação do pagamento PIX...', 'info');
        
        // Simula confirmação de PIX após 2 segundos
        await new Promise(resolve => setTimeout(resolve, 2000));
    }
    
    // Verifica limite de pedidos
    if (orders.length >= 999) {
        showToast('Limite de pedidos atingido', 'error');
        return;
    }
    
    // Calcula total
    const subtotal = cart.reduce((sum, item) => sum + (item.unitPrice * item.quantity), 0);
    const total = subtotal + DELIVERY_FEE;
    
    // Cria pedido
    const orderNumber = String(orders.length + 1).padStart(4, '0');
    const orderItems = cart.map(item => ({
        name: item.product.name,
        quantity: item.quantity,
        price: item.unitPrice,
        notes: item.notes
    }));
    
    if (window.dataSdk) {
        const result = await window.dataSdk.create({
            type: 'order',
            userId: currentUser.email,
            name: currentUser.name,
            phone: currentUser.phone || '',
            address: currentUser.address || '',
            items: JSON.stringify(orderItems),
            total: total,
            paymentMethod: paymentMethod,
            paymentLocation: paymentLocation,
            status: 'received',
            createdAt: new Date().toISOString()
        });
        
        if (result.isOk) {
            cart = [];
            updateCartCount();
            showToast(`Pedido #${orderNumber} realizado com sucesso!`, 'success');
            navigateTo('tracking');
            // Reseta forma de pagamento
            document.getElementById('payment-section').style.display = 'block';
            document.querySelectorAll('input[name="payment-method"]').forEach(radio => radio.checked = false);
            document.querySelectorAll('input[name="cash-location"]').forEach(radio => radio.checked = false);
        } else {
            showToast('Erro ao criar pedido. Tente novamente.', 'error');
        }
    } else {
        // Fallback sem SDK
        orders.push({
            number: orderNumber,
            items: orderItems,
            total: total,
            paymentMethod: paymentMethod,
            paymentLocation: paymentLocation,
            status: 'received',
            createdAt: new Date(),
            userId: currentUser.email
        });
        cart = [];
        updateCartCount();
        showToast(`Pedido #${orderNumber} realizado com sucesso!`, 'success');
        updateTrackingPage();
        navigateTo('tracking');
        // Reseta forma de pagamento
        document.querySelectorAll('input[name="payment-method"]').forEach(radio => radio.checked = false);
        document.querySelectorAll('input[name="cash-location"]').forEach(radio => radio.checked = false);
    }
}

// ==========================================
// ACOMPANHAMENTO DO PEDIDO
// ==========================================

// Atualiza página de acompanhamento
function updateTrackingPage() {
    const noOrders = document.getElementById('no-orders');
    const activeOrder = document.getElementById('active-order');
    
    // Busca último pedido do usuário
    let userOrder = null;
    if (currentUser) {
        userOrder = orders.filter(o => o.userId === currentUser.email).pop();
    }
    
    if (!userOrder) {
        noOrders.classList.remove('hidden');
        activeOrder.classList.add('hidden');
        return;
    }
    
    noOrders.classList.add('hidden');
    activeOrder.classList.remove('hidden');
    
    // Atualiza número do pedido
    const orderDate = new Date(userOrder.createdAt);
    const orderNum = String(orders.indexOf(userOrder) + 1).padStart(4, '0');
    document.getElementById('order-number').textContent = `#${orderNum}`;
    
    // Atualiza status e barra de progresso
    const statusMap = {
        'received': { progress: 25, step: 0 },
        'preparing': { progress: 50, step: 1 },
        'delivery': { progress: 75, step: 2 },
        'delivered': { progress: 100, step: 3 }
    };
    
    const status = statusMap[userOrder.status] || statusMap['received'];
    document.getElementById('progress-bar').style.width = `${status.progress}%`;
    
    // Atualiza visual dos steps
    const steps = document.querySelectorAll('.status-step');
    steps.forEach((step, index) => {
        const stepIcon = step.querySelector('div:first-child');
        const stepText = step.querySelector('p:first-child');
        
        if (index <= status.step) {
            step.classList.remove('opacity-50');
            stepIcon.classList.remove('bg-gray-700');
            stepIcon.classList.add('bg-pizza-yellow');
            stepIcon.innerHTML = '<i data-lucide="check" class="w-5 h-5 text-pizza-dark"></i>';
            stepText.classList.remove('text-gray-400');
            stepText.classList.add('text-white');
        } else {
            step.classList.add('opacity-50');
        }
    });
    
    lucide.createIcons();
}

// ==========================================
// PAINEL ADMINISTRATIVO
// ==========================================

// Alterna tabs do admin
function switchAdminTab(tab) {
    const ordersTab = document.getElementById('admin-orders-tab');
    const menuTab = document.getElementById('admin-menu-tab');
    const ordersSection = document.getElementById('admin-orders-section');
    const menuSection = document.getElementById('admin-menu-section');
    
    if (tab === 'orders') {
        ordersTab.classList.add('text-pizza-yellow', 'border-pizza-yellow');
        ordersTab.classList.remove('text-gray-400', 'border-transparent');
        menuTab.classList.add('text-gray-400', 'border-transparent');
        menuTab.classList.remove('text-pizza-yellow', 'border-pizza-yellow');
        ordersSection.classList.remove('hidden');
        menuSection.classList.add('hidden');
    } else {
        menuTab.classList.add('text-pizza-yellow', 'border-pizza-yellow');
        menuTab.classList.remove('text-gray-400', 'border-transparent');
        ordersTab.classList.add('text-gray-400', 'border-transparent');
        ordersTab.classList.remove('text-pizza-yellow', 'border-pizza-yellow');
        menuSection.classList.remove('hidden');
        ordersSection.classList.add('hidden');
    }
}

// Renderiza lista de pedidos no admin
function renderAdminOrders() {
    const container = document.getElementById('admin-orders-list');
    const noOrders = document.getElementById('admin-no-orders');
    
    if (orders.length === 0) {
        container.innerHTML = '';
        noOrders.classList.remove('hidden');
        return;
    }
    
    noOrders.classList.add('hidden');
    
    container.innerHTML = orders.map((order, index) => {
        const orderNum = String(index + 1).padStart(4, '0');
        const items = JSON.parse(order.items || '[]');
        const statusColors = {
            'received': 'bg-blue-500',
            'preparing': 'bg-yellow-500',
            'delivery': 'bg-purple-500',
            'delivered': 'bg-green-500'
        };
        const statusNames = {
            'received': 'Recebido',
            'preparing': 'Em Preparo',
            'delivery': 'Em Entrega',
            'delivered': 'Entregue'
        };
        
        return `
            <!-- Pedido Admin -->
            <div class="bg-pizza-dark/50 rounded-xl border border-pizza-red/20 p-4">
                <div class="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                        <span class="text-pizza-yellow font-display text-lg">#${orderNum}</span>
                        <p class="text-white font-medium">${order.name}</p>
                        <p class="text-gray-500 text-sm">${order.phone || 'Sem telefone'}</p>
                    </div>
                    <div class="text-right">
                        <span class="px-3 py-1 rounded-full text-xs font-medium ${statusColors[order.status]} text-white">
                            ${statusNames[order.status]}
                        </span>
                        <p class="text-pizza-yellow font-bold mt-2">R$ ${order.total.toFixed(2).replace('.', ',')}</p>
                    </div>
                </div>
                
                <!-- Itens do Pedido -->
                <div class="bg-pizza-dark rounded-lg p-3 mb-4">
                    <p class="text-gray-400 text-sm mb-2">Itens:</p>
                    ${items.map(item => `
                        <p class="text-white text-sm">${item.quantity}x ${item.name}</p>
                    `).join('')}
                </div>
                
                <!-- Endereço -->
                <div class="text-gray-400 text-sm mb-4">
                    <i data-lucide="map-pin" class="w-4 h-4 inline"></i>
                    ${order.address || 'Endereço não informado'}
                </div>
                
                <!-- Controles de Status -->
                <div class="flex flex-wrap gap-2">
                    <button onclick="updateOrderStatus('${order.__backendId}', 'received')" class="px-3 py-1 text-xs rounded-full border ${order.status === 'received' ? 'border-blue-500 text-blue-500' : 'border-gray-600 text-gray-400 hover:border-white hover:text-white'}">
                        Recebido
                    </button>
                    <button onclick="updateOrderStatus('${order.__backendId}', 'preparing')" class="px-3 py-1 text-xs rounded-full border ${order.status === 'preparing' ? 'border-yellow-500 text-yellow-500' : 'border-gray-600 text-gray-400 hover:border-white hover:text-white'}">
                        Em Preparo
                    </button>
                    <button onclick="updateOrderStatus('${order.__backendId}', 'delivery')" class="px-3 py-1 text-xs rounded-full border ${order.status === 'delivery' ? 'border-purple-500 text-purple-500' : 'border-gray-600 text-gray-400 hover:border-white hover:text-white'}">
                        Em Entrega
                    </button>
                    <button onclick="updateOrderStatus('${order.__backendId}', 'delivered')" class="px-3 py-1 text-xs rounded-full border ${order.status === 'delivered' ? 'border-green-500 text-green-500' : 'border-gray-600 text-gray-400 hover:border-white hover:text-white'}">
                        Entregue
                    </button>
                </div>
            </div>
        `;
    }).join('');
    
    lucide.createIcons();
}

// Atualiza status do pedido
async function updateOrderStatus(orderId, newStatus) {
    const order = orders.find(o => o.__backendId === orderId);
    if (order && window.dataSdk) {
        order.status = newStatus;
        const result = await window.dataSdk.update(order);
        if (result.isOk) {
            showToast('Status atualizado!', 'success');
            renderAdminOrders();
        }
    }
}

// Renderiza lista de produtos no admin
function renderAdminProducts() {
    const container = document.getElementById('admin-products-list');
    
    // Combina produtos padrão com customizados
    const allProducts = [
        ...menuProducts.map(p => ({ ...p, isDefault: true })),
        ...customProducts.map(p => ({
            id: p.__backendId,
            name: p.productName,
            description: p.productDescription,
            price: p.productPrice,
            category: p.productCategory,
            image: p.productImage || '',
            emoji: p.productEmoji || '🍕',
            isDefault: false,
            __backendId: p.__backendId
        }))
    ];
    
    container.innerHTML = allProducts.map(product => `
        <!-- Produto Admin -->
        <div class="flex items-center justify-between p-3 bg-pizza-dark rounded-xl ${product.isDefault ? 'opacity-70' : ''}">
            <div class="flex items-center gap-3">
                ${product.image ? `<img src="${product.image}" alt="${product.name}" class="w-12 h-12 object-cover rounded">` : `<span class="text-2xl">${product.emoji}</span>`}
                <div>
                    <p class="text-white font-medium">${product.name}</p>
                    <p class="text-gray-500 text-sm">${getCategoryName(product.category)} - R$ ${product.price.toFixed(2).replace('.', ',')}</p>
                </div>
            </div>
            ${product.isDefault ? `
                <span class="text-gray-500 text-xs">Padrão</span>
            ` : `
                <button onclick="deleteProduct('${product.__backendId}')" class="text-gray-500 hover:text-red-500 transition-colors p-2">
                    <i data-lucide="trash-2" class="w-4 h-4"></i>
                </button>
            `}
        </div>
    `).join('');
    
    lucide.createIcons();
}

// Adiciona novo produto
async function handleAddProduct(event) {
    event.preventDefault();
    
    const name = document.getElementById('product-name').value;
    const category = document.getElementById('product-category').value;
    const description = document.getElementById('product-description').value;
    const price = parseFloat(document.getElementById('product-price').value);
    const image = document.getElementById('product-image').value || '';
    const emoji = document.getElementById('product-emoji').value || '🍕';
    
    if (customProducts.length >= 100) {
        showToast('Limite de produtos customizados atingido', 'warning');
        return;
    }
    
    if (window.dataSdk) {
        const result = await window.dataSdk.create({
            type: 'product',
            productName: name,
            productCategory: category,
            productDescription: description,
            productPrice: price,
            productImage: image,
            productEmoji: emoji,
            createdAt: new Date().toISOString()
        });
        
        if (result.isOk) {
            showToast('Produto adicionado com sucesso!', 'success');
            document.getElementById('add-product-form').reset();
            renderMenu();
        } else {
            showToast('Erro ao adicionar produto', 'error');
        }
    }
}

// Remove produto customizado
async function deleteProduct(productId) {
    const product = customProducts.find(p => p.__backendId === productId);
    if (product && window.dataSdk) {
        showConfirm('Remover produto?', `Deseja remover "${product.productName}" do cardápio?`, async () => {
            const result = await window.dataSdk.delete(product);
            if (result.isOk) {
                showToast('Produto removido!', 'success');
                renderMenu();
            }
        });
    }
}

// ==========================================
// SISTEMA DE NOTIFICAÇÕES (TOAST)
// ==========================================

// Mostra toast notification
function showToast(message, type = 'info') {
    const container = document.getElementById('toast-container');
    const colors = {
        'success': 'bg-green-600',
        'error': 'bg-red-600',
        'warning': 'bg-yellow-600',
        'info': 'bg-blue-600'
    };
    const icons = {
        'success': 'check-circle',
        'error': 'x-circle',
        'warning': 'alert-triangle',
        'info': 'info'
    };
    
    const toast = document.createElement('div');
    toast.className = `toast ${colors[type]} text-white px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 max-w-sm`;
    toast.innerHTML = `
        <i data-lucide="${icons[type]}" class="w-5 h-5 flex-shrink-0"></i>
        <span>${message}</span>
    `;
    
    container.appendChild(toast);
    lucide.createIcons();
    
    // Remove após 3 segundos
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ==========================================
// MODAL DE CONFIRMAÇÃO
// ==========================================

// Mostra modal de confirmação
function showConfirm(title, message, callback) {
    document.getElementById('confirm-title').textContent = title;
    document.getElementById('confirm-message').textContent = message;
    document.getElementById('confirm-modal').classList.remove('hidden');
    confirmCallback = callback;
}

// Mostra confirmação com Promise (para async/await)
function showConfirmWithMessage(title, message, confirmBtnText = 'Confirmar', cancelBtnText = 'Cancelar') {
    return new Promise((resolve) => {
        document.getElementById('confirm-title').textContent = title;
        document.getElementById('confirm-message').textContent = message;
        
        // Atualiza textos dos botões
        const confirmBtn = document.querySelector('[onclick="confirmAction()"]');
        const cancelBtn = document.getElementById('close-confirm');
        if (confirmBtn) confirmBtn.textContent = confirmBtnText;
        
        document.getElementById('confirm-modal').classList.remove('hidden');
        
        // Armazena callbacks temporários
        window.tempConfirmResolve = resolve;
    });
}

// Executa ação confirmada (modificada para Promise)
function confirmAction() {
    if (window.tempConfirmResolve) {
        window.tempConfirmResolve(true);
        window.tempConfirmResolve = null;
    }
    closeConfirmModal();
}

// Fecha modal de confirmação
function closeConfirmModal() {
    document.getElementById('confirm-modal').classList.add('hidden');
    if (window.tempConfirmResolve) {
        window.tempConfirmResolve(false);
        window.tempConfirmResolve = null;
    }
    confirmCallback = null;
}

// ==========================================
// INICIALIZAÇÃO DA APLICAÇÃO
// ==========================================

// Inicializa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', async () => {
    // Inicializa Data SDK
    await initDataSdk();
    
    // Inicializa ícones Lucide
    lucide.createIcons();
    
    // Renderiza cardápio inicial
    renderMenu();
    
    // Atualiza contador do carrinho
    updateCartCount();
    
    console.log('� GOODS LANCHES - Site carregado com sucesso!');
});
