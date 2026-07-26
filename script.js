// ===== ДАННЫЕ =====
const products = [
  // iPhone
  { id: 1, category: 'iphones', name: 'iPhone 16 Pro Max 256GB Titanium Black', price: 18999000, image: 'https://images.pexels.com/photos/19060954/pexels-photo-19060954.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Флагманский iPhone с чипом A18 Pro, титановым корпусом и камерой 48 Мп.' },
  { id: 2, category: 'iphones', name: 'iPhone 16 Pro 128GB Natural Titanium', price: 15999000, image: 'https://images.pexels.com/photos/25913051/pexels-photo-25913051.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Компактный флагман с дисплеем ProMotion 120 Гц.' },
  { id: 3, category: 'iphones', name: 'iPhone 16 128GB Ultramarine', price: 12499000, image: 'https://images.pexels.com/photos/19060160/pexels-photo-19060160.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Новое поколение iPhone с чипом A18 и системой камер нового уровня.' },
  { id: 4, category: 'iphones', name: 'iPhone 15 128GB Black', price: 10499000, image: 'https://images.pexels.com/photos/20291795/pexels-photo-20291795.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Динамический остров, USB-C и мощная основная камера 48 Мп.' },
  { id: 5, category: 'iphones', name: 'iPhone 15 Pro 256GB Blue Titanium', price: 14999000, image: 'https://images.pexels.com/photos/15822008/pexels-photo-15822008.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Титановый корпус, чип A17 Pro и кнопка Action.' },
  { id: 6, category: 'iphones', name: 'iPhone 14 128GB Midnight', price: 8999000, image: 'https://images.pexels.com/photos/19482384/pexels-photo-19482384.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Проверенный флагман с отличной автономностью.' },
  { id: 7, category: 'iphones', name: 'iPhone 13 128GB Starlight', price: 7499000, image: 'https://images.pexels.com/photos/29020349/pexels-photo-29020349.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Компактный и надёжный выбор по доступной цене.' },
  { id: 8, category: 'iphones', name: 'iPhone SE 3 64GB Red', price: 5499000, image: 'https://images.pexels.com/photos/14665675/pexels-photo-14665675.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Классический дизайн с Touch ID и чипом A15 Bionic.' },

  // Чехлы
  { id: 9, category: 'cases', name: 'Чехол Apple Silicone Case MagSafe для iPhone 16 Pro', price: 699000, image: 'https://images.pexels.com/photos/374140/pexels-photo-374140.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Мягкий силиконовый чехол с поддержкой MagSafe.' },
  { id: 10, category: 'cases', name: 'Чехол прозрачный Spigen Ultra Hybrid', price: 349000, image: 'https://images.pexels.com/photos/7360460/pexels-photo-7360460.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Прозрачный чехол с усиленными углами и защитой от царапин.' },
  { id: 11, category: 'cases', name: 'Чехол кожаный Nomad Modern Leather', price: 899000, image: 'https://images.pexels.com/photos/374004/pexels-photo-374004.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Премиальная натуральная кожа, со временем приобретает патину.' },
  { id: 12, category: 'cases', name: 'Чехол-книжка ESR Magnetic Folio', price: 459000, image: 'https://images.pexels.com/photos/373976/pexels-photo-373976.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Чехол-книжка с магнитным креплением и отделением для карт.' },

  // Зарядные устройства
  { id: 13, category: 'chargers', name: 'Адаптер питания Apple 20W USB-C', price: 249000, image: 'https://images.pexels.com/photos/3921632/pexels-photo-3921632.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Быстрая зарядка для iPhone через USB-C.' },
  { id: 14, category: 'chargers', name: 'Беспроводное зарядное устройство MagSafe Charger', price: 549000, image: 'https://images.pexels.com/photos/35921904/pexels-photo-35921904.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Магнитная беспроводная зарядка мощностью до 15 Вт.' },
  { id: 15, category: 'chargers', name: 'Кабель Apple USB-C to Lightning 1м', price: 199000, image: 'https://images.pexels.com/photos/36012993/pexels-photo-36012993.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Оригинальный кабель для зарядки и синхронизации.' },
  { id: 16, category: 'chargers', name: 'Powerbank Anker 10000mAh USB-C', price: 599000, image: 'https://images.pexels.com/photos/4072683/pexels-photo-4072683.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Компактный внешний аккумулятор с быстрой зарядкой.' },

  // Наушники
  { id: 17, category: 'headphones', name: 'AirPods Pro 2 (USB-C)', price: 3299000, image: 'https://images.pexels.com/photos/3921864/pexels-photo-3921864.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Активное шумоподавление и адаптивный прозрачный режим.' },
  { id: 18, category: 'headphones', name: 'AirPods 4', price: 2199000, image: 'https://images.pexels.com/photos/32769441/pexels-photo-32769441.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Обновлённый дизайн и улучшенное качество звука.' },
  { id: 19, category: 'headphones', name: 'AirPods Max', price: 6499000, image: 'https://images.pexels.com/photos/6473553/pexels-photo-6473553.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Полноразмерные наушники с высококачественным звуком.' },

  // Аксессуары
  { id: 20, category: 'accessories', name: 'Защитное стекло ESR Tempered Glass', price: 149000, image: 'https://images.pexels.com/photos/924143/pexels-photo-924143.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Прочное защитное стекло с олеофобным покрытием.' },
  { id: 21, category: 'accessories', name: 'Держатель MagSafe для авто Belkin', price: 449000, image: 'https://images.pexels.com/photos/19060767/pexels-photo-19060767.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Магнитное крепление для телефона в автомобиль.' },
  { id: 22, category: 'accessories', name: 'Apple Watch Series 9 41mm', price: 8499000, image: 'https://images.pexels.com/photos/4379288/pexels-photo-4379288.jpeg?auto=compress&cs=tinysrgb&w=800', desc: 'Умные часы с датчиком кислорода и всегда включённым экраном.' },
];

const categoryLabels = {
  all: 'Все категории',
  iphones: 'iPhone',
  cases: 'Чехлы',
  chargers: 'Зарядки и кабели',
  headphones: 'Наушники',
  accessories: 'Аксессуары'
};
let activeCategory = 'all';

// ===== СОСТОЯНИЕ =====
let favorites = JSON.parse(localStorage.getItem('itech_favorites')) || [];
let cart = JSON.parse(localStorage.getItem('itech_cart')) || [];
// Миграция старого формата корзины (массив id) в новый (массив {id, qty})
if (cart.length && typeof cart[0] === 'number') {
  const migrated = [];
  cart.forEach(id => {
    const existing = migrated.find(i => i.id === id);
    if (existing) existing.qty += 1;
    else migrated.push({ id, qty: 1 });
  });
  cart = migrated;
}
let currentPage = 'home';
let currentProductId = null;
const DELIVERY_FEE = 25000;
let lastOrder = null;

// ===== ЭЛЕМЕНТЫ DOM =====
const productGrid = document.getElementById('productGrid');
const favoritesGrid = document.getElementById('favoritesGrid');
const favCount = document.getElementById('favCount');
const cartCount = document.getElementById('cartCount');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const favoritesBtn = document.getElementById('favoritesBtn');

// ===== ФУНКЦИИ =====

// Сохранение в localStorage
function saveFavorites() {
  localStorage.setItem('itech_favorites', JSON.stringify(favorites));
  updateBadges();
}

function saveCart() {
  localStorage.setItem('itech_cart', JSON.stringify(cart));
  updateBadges();
}

// Обновление бейджей
function updateBadges() {
  favCount.textContent = favorites.length;
  cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
}

function cartTotal() {
  return cart.reduce((sum, item) => {
    const p = products.find(pr => pr.id === item.id);
    return sum + (p ? p.price * item.qty : 0);
  }, 0);
}

function formatSum(n) {
  return n.toLocaleString('ru-RU') + ' сум';
}

// Переключение страниц
function showPage(page, data) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-menu a').forEach(a => a.classList.remove('active'));

  if (page === 'home') {
    document.getElementById('page-home').classList.add('active');
    document.querySelector('.nav-menu a[data-page="home"]').classList.add('active');
    renderCategoryFilters();
    renderProducts(getCategoryProducts());
  } else if (page === 'favorites') {
    document.getElementById('page-favorites').classList.add('active');
    document.querySelector('.nav-menu a[data-page="favorites"]').classList.add('active');
    renderFavorites();
  } else if (page === 'product') {
    document.getElementById('page-product').classList.add('active');
    renderProductDetail(data);
  } else if (page === 'cart') {
    document.getElementById('page-cart').classList.add('active');
    renderCart();
  } else if (page === 'checkout') {
    if (cart.length === 0) return showPage('cart');
    document.getElementById('page-checkout').classList.add('active');
    renderCheckoutSummary();
  } else if (page === 'receipt') {
    document.getElementById('page-receipt').classList.add('active');
    renderReceipt();
  }
  currentPage = page;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Рендер панели категорий
function renderCategoryFilters() {
  const el = document.getElementById('categoryFilters');
  if (!el) return;
  el.innerHTML = Object.keys(categoryLabels).map(key => `
    <button class="category-chip ${activeCategory === key ? 'active' : ''}" data-category="${key}">
      ${categoryLabels[key]}
    </button>
  `).join('');

  el.querySelectorAll('.category-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      activeCategory = btn.dataset.category;
      renderCategoryFilters();
      performSearch();
    });
  });
}

// Возвращает товары с учётом активной категории
function getCategoryProducts() {
  return activeCategory === 'all' ? products : products.filter(p => p.category === activeCategory);
}

// Рендер сетки товаров
function renderProducts(items) {
  if (!items || items.length === 0) {
    productGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">Товары не найдены.</p>';
    return;
  }
  productGrid.innerHTML = items.map(p => `
    <div class="product-card" data-id="${p.id}">
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <div class="price">${p.price.toLocaleString()} сум</div>
      <div class="actions">
        <button class="fav-btn ${favorites.includes(p.id) ? 'active' : ''}" data-id="${p.id}">
          <i class="fas fa-heart"></i>
        </button>
        <button class="cart-btn" data-id="${p.id}">
          <i class="fas fa-shopping-cart"></i> В корзину
        </button>
      </div>
    </div>
  `).join('');

  // Обработчики для карточек
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('.actions')) return;
      const id = Number(card.dataset.id);
      showPage('product', id);
    });
  });

  // Обработчики кнопок "Избранное"
  document.querySelectorAll('.fav-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = Number(btn.dataset.id);
      toggleFavorite(id);
      // Обновляем состояние кнопки
      btn.classList.toggle('active');
    });
  });

  // Обработчики кнопок "В корзину"
  document.querySelectorAll('.cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = Number(btn.dataset.id);
      addToCart(id);
    });
  });
}

// Рендер избранного
function renderFavorites() {
  const favItems = products.filter(p => favorites.includes(p.id));
  if (favItems.length === 0) {
    favoritesGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center;">В избранном пока пусто.</p>';
    return;
  }
  favoritesGrid.innerHTML = favItems.map(p => `
    <div class="product-card" data-id="${p.id}">
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <div class="price">${p.price.toLocaleString()} сум</div>
      <button class="fav-btn active" data-id="${p.id}">
        <i class="fas fa-heart"></i> Удалить
      </button>
    </div>
  `).join('');

  favoritesGrid.querySelectorAll('.fav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id);
      toggleFavorite(id);
      renderFavorites(); // Перерендер избранного
      renderProducts(products); // Обновить кнопки на главной
    });
  });
}

// Детальный вид товара
function renderProductDetail(id) {
  const product = products.find(p => p.id === id);
  if (!product) return showPage('home');

  const container = document.getElementById('productDetailContainer');
  container.innerHTML = `
    <div class="product-detail-image">
      <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="product-detail-info">
      <h2>${product.name}</h2>
      <div class="price">${product.price.toLocaleString()} сум</div>
      <p>${product.desc}</p>
      <div style="display: flex; gap: 15px;">
        <button class="btn-primary" onclick="addToCart(${product.id})">Добавить в корзину</button>
        <button class="btn-primary" style="background: transparent; color: #0071e3; border: 1px solid #0071e3;" onclick="toggleFavorite(${product.id})">
          ${favorites.includes(product.id) ? '❤️ В избранном' : '🤍 В избранное'}
        </button>
      </div>
    </div>
  `;
}

// Рендер страницы корзины
function renderCart() {
  const container = document.getElementById('cartContainer');

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fas fa-shopping-bag"></i>
        <p>Ваша корзина пуста.</p>
        <button class="btn-primary" id="emptyCartHomeBtn">За покупками</button>
      </div>`;
    document.getElementById('emptyCartHomeBtn').addEventListener('click', () => showPage('home'));
    return;
  }

  const rows = cart.map(item => {
    const p = products.find(pr => pr.id === item.id);
    if (!p) return '';
    return `
      <div class="cart-row" data-id="${p.id}">
        <img src="${p.image}" alt="${p.name}">
        <div class="cart-row-info">
          <h4>${p.name}</h4>
          <div class="cart-row-price">${formatSum(p.price)}</div>
        </div>
        <div class="qty-control">
          <button class="qty-btn" data-action="dec" data-id="${p.id}">−</button>
          <span>${item.qty}</span>
          <button class="qty-btn" data-action="inc" data-id="${p.id}">+</button>
        </div>
        <div class="cart-row-total">${formatSum(p.price * item.qty)}</div>
        <button class="remove-btn" data-id="${p.id}" title="Удалить"><i class="fas fa-trash"></i></button>
      </div>`;
  }).join('');

  const total = cartTotal();

  container.innerHTML = `
    <div class="cart-items">${rows}</div>
    <div class="cart-summary">
      <div class="summary-row summary-total">
        <span>Итого</span>
        <span>${formatSum(total)}</span>
      </div>
      <button class="btn-primary checkout-submit" id="goToCheckoutBtn">Оформить заказ</button>
    </div>
  `;

  container.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id);
      changeQty(id, btn.dataset.action === 'inc' ? 1 : -1);
    });
  });

  container.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = Number(btn.dataset.id);
      cart = cart.filter(i => i.id !== id);
      saveCart();
      renderCart();
    });
  });

  document.getElementById('goToCheckoutBtn').addEventListener('click', () => showPage('checkout'));
}

function changeQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cart = cart.filter(i => i.id !== id);
  }
  saveCart();
  renderCart();
}

// Рендер сводки заказа на странице оформления
function renderCheckoutSummary() {
  const itemsContainer = document.getElementById('checkoutSummaryItems');
  itemsContainer.innerHTML = cart.map(item => {
    const p = products.find(pr => pr.id === item.id);
    if (!p) return '';
    return `
      <div class="checkout-item">
        <span>${p.name} × ${item.qty}</span>
        <span>${formatSum(p.price * item.qty)}</span>
      </div>`;
  }).join('');

  const subtotal = cartTotal();
  const total = subtotal + DELIVERY_FEE;

  document.getElementById('checkoutSubtotal').textContent = formatSum(subtotal);
  document.getElementById('checkoutDelivery').textContent = formatSum(DELIVERY_FEE);
  document.getElementById('checkoutTotal').textContent = formatSum(total);
}

// Рендер чека после оформления
function renderReceipt() {
  if (!lastOrder) return;
  const itemsHtml = lastOrder.items.map(i => `
    <div class="receipt-line">
      <span>${i.name} × ${i.qty}</span>
      <span>${formatSum(i.price * i.qty)}</span>
    </div>`).join('');

  document.getElementById('receiptBox').innerHTML = `
    <div class="receipt-line"><span>Номер заказа</span><span>#${lastOrder.id}</span></div>
    <div class="receipt-line"><span>Дата</span><span>${lastOrder.date}</span></div>
    <div class="receipt-line"><span>Получатель</span><span>${lastOrder.name}</span></div>
    <div class="receipt-line"><span>Телефон</span><span>${lastOrder.phone}</span></div>
    <div class="receipt-line"><span>Адрес</span><span>${lastOrder.address}</span></div>
    <div class="receipt-line"><span>Оплата</span><span>${lastOrder.payment === 'card' ? 'Картой онлайн' : 'Наличными при получении'}</span></div>
    <hr>
    ${itemsHtml}
    <hr>
    <div class="receipt-line"><span>Товары</span><span>${formatSum(lastOrder.subtotal)}</span></div>
    <div class="receipt-line"><span>Доставка</span><span>${formatSum(lastOrder.delivery)}</span></div>
    <div class="receipt-line receipt-total"><span>Итого</span><span>${formatSum(lastOrder.total)}</span></div>
  `;
}

// Работа с избранным
function toggleFavorite(id) {
  const index = favorites.indexOf(id);
  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(id);
  }
  saveFavorites();
  // Обновляем кнопки на всех страницах
  if (currentPage === 'home') renderProducts(products);
  if (currentPage === 'favorites') renderFavorites();
  if (currentPage === 'product') renderProductDetail(id);
}

// Работа с корзиной
function addToCart(id) {
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ id, qty: 1 });
  }
  saveCart();
  if (currentPage === 'cart') renderCart();
}

// Поиск
function performSearch() {
  const query = searchInput.value.trim().toLowerCase();
  const base = getCategoryProducts();
  if (!query) {
    renderProducts(base);
    return;
  }
  const filtered = base.filter(p => p.name.toLowerCase().includes(query));
  renderProducts(filtered);
}

// ===== НАВИГАЦИЯ ПО МЕНЮ =====
document.querySelectorAll('.nav-menu a[data-page]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const page = link.dataset.page;
    showPage(page);
  });
});

document.getElementById('backHomeBtn').addEventListener('click', () => {
  showPage('home');
});

favoritesBtn.addEventListener('click', () => {
  showPage('favorites');
});

document.getElementById('cartBtn').addEventListener('click', () => {
  showPage('cart');
});

// Кнопка "Назад в корзину" на странице чекаута
document.querySelectorAll('.back-btn[data-page]').forEach(btn => {
  btn.addEventListener('click', () => showPage(btn.dataset.page));
});

document.getElementById('receiptHomeBtn').addEventListener('click', () => showPage('home'));

searchBtn.addEventListener('click', performSearch);
searchInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') performSearch();
});

// ===== ЧЕКАУТ =====
const paymentRadios = document.querySelectorAll('input[name="payment"]');
const cardFields = document.getElementById('cardFields');

function updateCardFieldsVisibility() {
  const selected = document.querySelector('input[name="payment"]:checked').value;
  cardFields.style.display = selected === 'card' ? 'block' : 'none';
  document.getElementById('ckCardNumber').required = selected === 'card';
  document.getElementById('ckCardExpiry').required = selected === 'card';
  document.getElementById('ckCardCvc').required = selected === 'card';
}
paymentRadios.forEach(r => r.addEventListener('change', updateCardFieldsVisibility));
updateCardFieldsVisibility();

// Форматирование номера карты по мере ввода
const cardNumberInput = document.getElementById('ckCardNumber');
cardNumberInput.addEventListener('input', () => {
  let digits = cardNumberInput.value.replace(/\D/g, '').slice(0, 16);
  cardNumberInput.value = digits.replace(/(.{4})/g, '$1 ').trim();
});

const cardExpiryInput = document.getElementById('ckCardExpiry');
cardExpiryInput.addEventListener('input', () => {
  let digits = cardExpiryInput.value.replace(/\D/g, '').slice(0, 4);
  if (digits.length > 2) digits = digits.slice(0, 2) + '/' + digits.slice(2);
  cardExpiryInput.value = digits;
});

document.getElementById('checkoutForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const subtotal = cartTotal();
  const order = {
    id: Math.floor(100000 + Math.random() * 900000),
    date: new Date().toLocaleString('ru-RU'),
    name: document.getElementById('ckName').value.trim(),
    phone: document.getElementById('ckPhone').value.trim(),
    address: document.getElementById('ckAddress').value.trim(),
    payment: document.querySelector('input[name="payment"]:checked').value,
    items: cart.map(item => {
      const p = products.find(pr => pr.id === item.id);
      return { name: p.name, price: p.price, qty: item.qty };
    }),
    subtotal,
    delivery: DELIVERY_FEE,
    total: subtotal + DELIVERY_FEE
  };

  lastOrder = order;
  cart = [];
  saveCart();
  document.getElementById('checkoutForm').reset();
  updateCardFieldsVisibility();
  showPage('receipt');
});

// ===== ИНИЦИАЛИЗАЦИЯ =====
function init() {
  updateBadges();
  showPage('home');
}

init();

// ===== ЛОГИКА АНИМЕ ИИ-ПОМОЩНИКА С ГРУБЫМ ГОЛОСОМ =====

const aiWidget = document.getElementById('ai-assistant');
const aiBubble = document.getElementById('aiBubble');

// Функция смены эмоций и грубой озвучки
function aiSay(text, emotion = 'joy') {
  // Меняем состояние (класс joy / sad / angry) для переключения картинок
  aiWidget.className = `ai-assistant ${emotion}`;
  
  // Обновляем текст в облачке
  aiBubble.textContent = text;

  // Озвучка с низким тембром
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel(); // Сбрасываем прошлую речь
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ru-RU';
    
    // НАСТРОЙКА ГРУБОГО ЗВУКА:
    utterance.pitch = 0.5;   // Минимальное значение (делает голос максимально низким, басовым и грубым)
    utterance.rate = 0.9;    // Слегка замедляем речь для солидности и тяжести звука
    utterance.volume = 1;    // Максимальная громкость
    
    window.speechSynthesis.speak(utterance);
  }
}

// Дерзкое приветствие при старте
setTimeout(() => {
  aiSay("Здарова. Зашел прикупить четкий девайс? Я тут присматриваю за товаром, выбирай.", "joy");
}, 1500);

// Реакция на нажатие по самому персонажу
aiWidget.addEventListener('click', () => {
  aiSay("Чекаешь меня? Лучше девайсы выбирай, а я раскидаю по характеристикам.", "joy");
});

// Чтение описаний товаров в брутальном стиле
document.addEventListener('click', (e) => {
  const productCard = e.target.closest('.product-card');
  if (productCard) {
    const pId = Number(productCard.dataset.id);
    const product = products.find(p => p.id === pId);
    if (product) {
      const phrase = `Слушай сюда. Это ${product.name}. Ценник — ${product.price.toLocaleString()} сум. Мой вердикт: ${product.desc}`;
      aiSay(phrase, "joy");
    }
  }

  // Нажатие кнопки "В корзину"
  if (e.target.closest('.cart-btn')) {
    aiSay("Закинул в корзину. Хороший выбор, одобряю.", "joy");
  }

  // Нажатие кнопки "В избранное"
  if (e.target.closest('.fav-btn')) {
    aiSay("Добавил в избранное. Походу, ты реально нацелился это взять.", "joy");
  }
});

// Реакции на переключение разделов сайта
const originalShowPage = showPage;
showPage = function(page, data) {
  originalShowPage(page, data);

  if (page === 'cart') {
    if (cart.length === 0) {
      aiSay("Твоя корзина абсолютно пуста. Чего ждем? Иди выбирай.", "sad");
    } else {
      aiSay(`Так, в корзине добра на ${cartTotal().toLocaleString()} сум. Оформляем или еще посмотрим?`, "joy");
    }
  } 
  else if (page === 'checkout') {
    aiSay("Вбивай адрес и данные без косяков. Я проверяю.", "joy");
  } 
  else if (page === 'receipt') {
    aiSay("Готово. Заказ оформлен. Скоро девайс будет у тебя, поздравляю!", "joy");
  }
};

// Злость при попытке отправить пустые поля
document.getElementById('checkoutForm').addEventListener('submit', (e) => {
  const name = document.getElementById('ckName').value.trim();
  const phone = document.getElementById('ckPhone').value.trim();
  
  if (!name || !phone) {
    aiSay("Ты угараешь? Имя и телефон запиши нормально, иначе заказ не пропущу!", "angry");
  }
});

// ===== ДОПОЛНИТЕЛЬНАЯ ЛОГИКА ГОЛОСОВОГО ВВОДА =====

const aiMicBtn = document.getElementById('aiMicBtn');

// Проверяем поддержку распознавания речи в браузере
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (SpeechRecognition) {
  const recognition = new SpeechRecognition();
  recognition.lang = 'ru-RU';
  recognition.interimResults = false; // Ждем финального текста
  recognition.maxAlternatives = 1;

  // Клик по микрофону запускает/останавливает запись
  aiMicBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Чтобы не срабатывал клик по всему виджету
    
    if (aiMicBtn.classList.contains('recording')) {
      recognition.stop();
    } else {
      aiMicBtn.classList.add('recording');
      aiBubble.textContent = "Слушаю тебя, говори...";
      recognition.start();
    }
  });

  // Успешное распознавание
  recognition.onresult = (event) => {
    const speechResult = event.results[0][0].transcript.toLowerCase().trim();
    console.log("Вы сказали: " + speechResult);
    
    // Обрабатываем то, что сказал пользователь
    handleVoiceCommand(speechResult);
  };

  // Окончание записи
  recognition.onend = () => {
    aiMicBtn.classList.remove('recording');
  };

  // Ошибка записи
  recognition.onerror = (event) => {
    aiMicBtn.classList.remove('recording');
    aiSay("Не расслышал. Повтори громче.", "angry");
  };

} else {
  // Если браузер не поддерживает (например, некоторые старые версии)
  aiMicBtn.style.display = 'none';
  console.log("Распознавание речи не поддерживается этим браузером.");
}

// Простой ИИ-мозг для обработки твоих голосовых команд
function handleVoiceCommand(text) {
  // 1. Приветствие
  if (text.includes("привет") || text.includes("здарова") || text.includes("салам")) {
    aiSay("И тебе не хворать. Чё присмотрел?", "joy");
  }
  // 2. Вопрос про айфоны
  else if (text.includes("айфон") || text.includes("iphone") || text.includes("телефон")) {
    aiSay("Айфоны — это тема. У нас тут от тринадцатого до самого нового шестнадцатого Pro Max. Кликни на любой в списке, раскидаю за характеристики.", "joy");
  }
  // 3. Вопрос про скидки / акции
  else if (text.includes("скидк") || text.includes("акци") || text.includes("дешевле")) {
    aiSay("Скидки хочешь? Цены и так ниже некуда, но ты чекай раздел акций в меню, может чё и перепадет.", "joy");
  }
  // 4. Вопрос про корзину
  else if (text.includes("корзин")) {
    showPage('cart'); // Перекинет на страницу корзины
  }
  // 5. Комплимент или ругань
  else if (text.includes("крутой") || text.includes("классный") || text.includes("лучший")) {
    aiSay("Знаю, подгон чёткий. Выбирай давай.", "joy");
  }
  else if (text.includes("дурак") || text.includes("плохой") || text.includes("тупой")) {
    aiSay("Слышь, полегче на поворотах. Я тебе тут помочь пытаюсь вообще-то.", "angry");
  }
  // 6. Если ИИ ничего не понял
  else {
    aiSay(`Ты сказал: "${text}". Я в девайсах шарю, а в этих твоих фразах — не особо. Спроси про Айфоны или корзину.`, "sad");
  }
}