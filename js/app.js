// ========== MAIN APPLICATION ==========

// DOM Elements
const loginPage = document.getElementById('loginPage');
const dashboardPage = document.getElementById('dashboardPage');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const logoutBtn = document.getElementById('logoutBtn');
const burgerMenu = document.getElementById('burgerMenu');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const mainContent = document.getElementById('mainContent');
const closeRegBtn = document.getElementById('closeRegistrationBtn');
const cancelRegBtn = document.getElementById('cancelRegBtn');
const registrationModal = document.getElementById('registrationModal');

// User Settings
let userSettings = { ...CONFIG.DEFAULT_SETTINGS };

// Initialize App
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    loadSettings();
    
    const storedSession = localStorage.getItem('pixelSession');
    
    if (storedSession) {
        try {
            currentUser = JSON.parse(storedSession);
            showDashboard();
        } catch (e) {
            localStorage.removeItem('pixelSession');
            showLogin();
        }
    } else {
        showLogin();
    }
    
    setupEventListeners();
    setupBurgerMenu();
}

function setupEventListeners() {
    if (loginBtn) loginBtn.addEventListener('click', handleLogin);
    if (registerBtn) registerBtn.addEventListener('click', openRegistrationModal);
    if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);
    if (closeRegBtn) closeRegBtn.addEventListener('click', closeRegistrationModal);
    if (cancelRegBtn) cancelRegBtn.addEventListener('click', closeRegistrationModal);
    
    // Registration form submit
    const regForm = document.getElementById('registrationForm');
    if (regForm) regForm.addEventListener('submit', handleRegister);
    
    // Close modal on outside click
    window.addEventListener('click', (e) => {
        if (e.target === registrationModal) {
            closeRegistrationModal();
        }
    });
    
    // Navigation items
    document.querySelectorAll('.nav-item').forEach(item => {
        if (item.id !== 'logoutBtn') {
            item.addEventListener('click', (e) => {
                const page = item.dataset.page;
                if (page) renderPage(page);
                document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
                item.classList.add('active');
                closeSidebar();
            });
        }
    });
}

function setupBurgerMenu() {
    if (burgerMenu) {
        burgerMenu.addEventListener('click', toggleSidebar);
    }
    
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebar);
    }
    
    // Close sidebar on window resize if screen becomes large
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && sidebar.classList.contains('open')) {
            closeSidebar();
        }
    });
}

function toggleSidebar() {
    sidebar.classList.toggle('open');
    sidebarOverlay.classList.toggle('active');
}

function closeSidebar() {
    sidebar.classList.remove('open');
    sidebarOverlay.classList.remove('active');
}

function showLogin() {
    loginPage.style.display = 'flex';
    dashboardPage.style.display = 'none';
    clearLoginFields();
}

function showDashboard() {
    loginPage.style.display = 'none';
    dashboardPage.style.display = 'block';
    renderPage('dashboard');
    loadChatbaseAI();
}

function openRegistrationModal() {
    registrationModal.style.display = 'flex';
    // Clear any previous messages
    const errorDiv = document.getElementById('regError');
    const successDiv = document.getElementById('regSuccess');
    if (errorDiv) errorDiv.style.display = 'none';
    if (successDiv) successDiv.style.display = 'none';
}

function closeRegistrationModal() {
    registrationModal.style.display = 'none';
    document.getElementById('registrationForm').reset();
}

function clearLoginFields() {
    const schoolId = document.getElementById('loginSchoolId');
    const password = document.getElementById('loginPassword');
    const errorDiv = document.getElementById('loginError');
    
    if (schoolId) schoolId.value = '';
    if (password) password.value = '';
    if (errorDiv) errorDiv.innerText = '';
}

function renderPage(page) {
    if (!currentUser) return;
    
    switch(page) {
        case 'dashboard':
            showDashboardHome();
            break;
        case 'about':
            mainContent.innerHTML = showAbout();
            break;
        case 'profile':
            mainContent.innerHTML = showProfile(currentUser);
            break;
        case 'fund':
            mainContent.innerHTML = showFund(donators);
            break;
        case 'tools':
            mainContent.innerHTML = showToolsPage();
            setTimeout(() => {
                if (typeof displayRecentSearches === 'function') {
                    displayRecentSearches();
                }
            }, 100);
            break;
        case 'ai-tools':
            mainContent.innerHTML = showAIToolsPage();
            break;
        case 'minsu-portal':
            mainContent.innerHTML = showMinsuPortal();
            break;
        case 'settings':
            const settings = showSettings(userSettings, saveSettings, applyFontSize);
            mainContent.innerHTML = settings.html;
            settings.setupEvents();
            break;
        default:
            showDashboardHome();
    }
}

function loadChatbaseAI() {
    if (window.chatbase && window.chatbase("getState") === "initialized") return;
    
    window.chatbaseConfig = { chatbotId: "Zqs29nX4-jV3VlilBTsjp" };
    const script = document.createElement('script');
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "Zqs29nX4-jV3VlilBTsjp";
    script.defer = true;
    document.body.appendChild(script);
}