// ========== MAIN APPLICATION LOGIC ==========

let currentPage = "library";
let currentCategory = "All Books";
let currentFolder = null;

// Force App Install Variables
let forceInstallDeferredPrompt = null;
let isAppInstalled = false;

const mainContainer = document.getElementById("mainContent");
const categoryStrip = document.getElementById("categoryStrip");
const categoryContainer = document.getElementById("categoryFilterContainer");
const totalBooksSpan = document.getElementById("totalBooksCount");
const refreshBtn = document.getElementById("manualRefreshBtn");
const modal = document.getElementById("detailModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalTitle = document.getElementById("modalTitle");
const modalAuthorElem = document.getElementById("modalAuthor");
const modalCategory = document.getElementById("modalCategory");
const modalDesc = document.getElementById("modalDesc");
const modalLink = document.getElementById("modalLink");

// ========================================
// CHATBASE AI FUNCTIONS
// ========================================

function loadChatbaseAI() {
    if (document.readyState === 'complete') {
        setTimeout(initChatbase, 500);
    } else {
        window.addEventListener('load', () => setTimeout(initChatbase, 500));
    }
}

function initChatbase() {
    if (window.chatbase && window.chatbase("getState") === "initialized") return;
    
    window.chatbaseConfig = { chatbotId: "Zqs29nX4-jV3VlilBTsjp" };
    const script = document.createElement('script');
    script.src = "https://www.chatbase.co/embed.min.js";
    script.id = "Zqs29nX4-jV3VlilBTsjp";
    script.defer = true;
    document.body.appendChild(script);
}

function removeChatbaseAI() {
    const ids = ['Zqs29nX4-jV3VlilBTsjp', 'chatbase-frame', 'chatbase-bubble', 'chatbase-widget'];
    ids.forEach(id => document.getElementById(id)?.remove());
    
    const selectors = [
        'script[src*="chatbase"]', 'iframe[src*="chatbase"]', 'div[id*="chatbase"]', 'div[class*="chatbase"]',
        'div[style*="z-index: 2147483647"]', 'div[style*="position: fixed"][style*="bottom: 0"][style*="right: 0"]'
    ];
    selectors.forEach(selector => document.querySelectorAll(selector).forEach(el => el.remove()));
    
    delete window.chatbaseConfig;
    delete window.chatbase;
}

function addChatbaseHideCSS() {
    const styleId = 'chatbase-hide-style';
    if (document.getElementById(styleId)) return;
    
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
        #loginPage ~ div[class*="chatbase"],
        #loginPage ~ iframe[src*="chatbase"],
        body:has(#loginPage[style*="display: flex"]) div[class*="chatbase"] {
            display: none !important;
        }
        .dashboard-container, #loginPage { transition: opacity 0.3s ease; }
    `;
    document.head.appendChild(style);
}

addChatbaseHideCSS();

// ========================================
// FORCE APP INSTALL - BLOCK ACCESS TO BOOKS
// ========================================

// Check if app is installed (standalone mode)
function checkIfAppInstalled() {
    // Check if running in standalone mode (installed PWA)
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches ||
                        window.navigator.standalone === true;
    
    // Check localStorage if user already installed
    const appInstalledFlag = localStorage.getItem('pixel_academy_app_installed');
    
    if (isStandalone || appInstalledFlag === 'true') {
        isAppInstalled = true;
        hideAppRequiredOverlay();
        return true;
    }
    
    return false;
}

// Show app required overlay
function showAppRequiredOverlay() {
    const overlay = document.getElementById('appRequiredOverlay');
    if (overlay) {
        overlay.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    }
}

// Hide app required overlay
function hideAppRequiredOverlay() {
    const overlay = document.getElementById('appRequiredOverlay');
    if (overlay) {
        overlay.style.display = 'none';
        document.body.style.overflow = '';
    }
}

// Block book access - show overlay if app not installed
function blockBookAccessIfNeeded() {
    if (!isAppInstalled) {
        showAppRequiredOverlay();
        return true; // Blocked
    }
    return false; // Allowed
}

// Listen for beforeinstallprompt event
window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    forceInstallDeferredPrompt = e;
    console.log('✅ Install prompt available for Pixel Academy');
});

// Handle force install button click
function triggerForceInstall() {
    if (forceInstallDeferredPrompt) {
        forceInstallDeferredPrompt.prompt();
        forceInstallDeferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted install');
                localStorage.setItem('pixel_academy_app_installed', 'true');
                isAppInstalled = true;
                hideAppRequiredOverlay();
                showToastMessage("✅ App installed! You can now access all books.", 3000);
                renderLibraryView();
            } else {
                console.log('User dismissed install');
                showToastMessage("Please install the app to access books.", 2000);
            }
            forceInstallDeferredPrompt = null;
        });
    } else {
        // Fallback - show instructions
        showToastMessage("Tap the share button and select 'Add to Home Screen'", 3000);
    }
}

// Handle app installed event
window.addEventListener('appinstalled', () => {
    console.log('App was installed successfully');
    localStorage.setItem('pixel_academy_app_installed', 'true');
    isAppInstalled = true;
    hideAppRequiredOverlay();
    showToastMessage("✅ Thank you for installing! You can now access all books.", 3000);
    renderLibraryView();
});

// Initialize force install check
function initForceInstall() {
    // Check if already installed
    if (checkIfAppInstalled()) {
        return;
    }
    
    // Show overlay immediately to block access
    showAppRequiredOverlay();
    
    // Setup install button
    const forceInstallBtn = document.getElementById('forceInstallBtn');
    if (forceInstallBtn) {
        forceInstallBtn.addEventListener('click', triggerForceInstall);
    }
}

// Custom toast for this script
function showToastMessage(message, duration = 2000) {
    // Check if main toast exists
    const toast = document.getElementById("toastMsg");
    if (toast) {
        toast.innerText = message;
        toast.classList.add("show");
        setTimeout(() => { toast.classList.remove("show"); }, duration);
    } else {
        alert(message);
    }
}

// Navigation - REMOVED MinSU Portal
document.querySelectorAll(".nav-tab").forEach(tab => {
    tab.addEventListener("click", () => {
        // Check if app is installed before switching pages
        if (!isAppInstalled && tab.dataset.page !== "settings") {
            showAppRequiredOverlay();
            return;
        }
        
        document.querySelectorAll(".nav-tab").forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        currentPage = tab.dataset.page;
        currentFolder = null;
        
        if (currentPage === "library") {
            categoryStrip.style.display = "block";
            renderLibraryView();
        } else {
            categoryStrip.style.display = "none";
            if (currentPage === "ai-tools") mainContainer.innerHTML = showAIToolsPage();
            else if (currentPage === "settings") renderSettingsPage();
        }
    });
});

// HIDE the MinSU Portal tab - remove it from DOM
function hideMinsuPortalTab() {
    const minsuTab = document.querySelector('.nav-tab[data-page="minsu"]');
    if (minsuTab) {
        minsuTab.style.display = 'none';
    }
}

function renderLibraryView() {
    // Block if app not installed
    if (!isAppInstalled) {
        showAppRequiredOverlay();
        mainContainer.innerHTML = `
            <div class="empty-state" style="padding: 80px 20px;">
                <i class="fas fa-mobile-alt" style="font-size: 4rem; color: #007aff; margin-bottom: 20px;"></i>
                <h3>App Required</h3>
                <p>Please install the Pixel Academy app to access books.</p>
                <button class="btn-primary-apple" onclick="triggerForceInstall()" style="margin-top: 20px;">
                    <i class="fas fa-download"></i> Install App
                </button>
            </div>
        `;
        return;
    }
    
    updateStats();
    renderCategoryChips();
    renderBooksGrid();
}

function updateStats() {
    totalBooksSpan.innerText = getAllBooks().length;
}

function renderCategoryChips() {
    const categories = Object.keys(booksDB);
    categories.sort((a, b) => {
        if (a === "All Books") return -1;
        if (b === "All Books") return 1;
        return a.localeCompare(b);
    });
    
    categoryContainer.innerHTML = categories.map(cat => `
        <div class="cat-chip ${currentCategory === cat ? 'active' : ''}" data-category="${cat}">
            <i class="fas fa-tag"></i> ${cat}
        </div>
    `).join("");
    
    document.querySelectorAll('.cat-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            if (!isAppInstalled) {
                showAppRequiredOverlay();
                return;
            }
            currentCategory = chip.dataset.category;
            currentFolder = null;
            renderCategoryChips();
            renderBooksGrid();
        });
    });
}

function renderBooksGrid() {
    // Block if app not installed
    if (!isAppInstalled) {
        showAppRequiredOverlay();
        return;
    }
    
    if (currentCategory === "All Books") {
        displayBooks(getAllBooks());
    } else if (hasDirectBooks(currentCategory)) {
        displayBooks(booksDB[currentCategory]);
    } else if (hasFolders(currentCategory)) {
        if (currentFolder) {
            displayBooks(getBooksInFolder(currentCategory, currentFolder));
        } else {
            const folders = getFolders(currentCategory);
            if (folders) {
                mainContainer.innerHTML = `
                    <div class="books-grid">
                        ${folders.map(folder => `
                            <div class="book-card folder-card" data-folder="${folder}">
                                <div class="book-cover"><i class="fas fa-folder"></i></div>
                                <div class="book-info">
                                    <div class="book-title">📁 ${folder}</div>
                                    <div class="book-author">${getBooksInFolder(currentCategory, folder).length} books</div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `;
                document.querySelectorAll('.folder-card').forEach(card => {
                    card.addEventListener('click', () => {
                        if (!isAppInstalled) {
                            showAppRequiredOverlay();
                            return;
                        }
                        currentFolder = card.dataset.folder;
                        renderBooksGrid();
                    });
                });
                return;
            }
        }
    }
}

function displayBooks(books) {
    // Block if app not installed
    if (!isAppInstalled) {
        showAppRequiredOverlay();
        mainContainer.innerHTML = `
            <div class="empty-state" style="padding: 80px 20px;">
                <i class="fas fa-mobile-alt" style="font-size: 4rem; color: #007aff; margin-bottom: 20px;"></i>
                <h3>App Required</h3>
                <p>Please install the Pixel Academy app to access books.</p>
                <button class="btn-primary-apple" onclick="triggerForceInstall()" style="margin-top: 20px;">
                    <i class="fas fa-download"></i> Install App
                </button>
            </div>
        `;
        return;
    }
    
    if (!books || books.length === 0) {
        mainContainer.innerHTML = `<div class="empty-state">No books found in this category.</div>`;
        return;
    }
    
    mainContainer.innerHTML = `
        <div class="books-grid">
            ${books.map((book, i) => `
                <div class="book-card" data-url="${book.url}" data-title="${escapeHtml(book.title)}">
                    <div class="book-cover"><i class="fas fa-book"></i></div>
                    <div class="book-info">
                        <div class="book-title">${escapeHtml(book.title)}</div>
                        <div class="book-author">PDF Document</div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    
    document.querySelectorAll('.book-card:not(.folder-card)').forEach(card => {
        card.addEventListener('click', () => {
            // CHECK APP INSTALLATION BEFORE OPENING BOOK
            if (!isAppInstalled) {
                showAppRequiredOverlay();
                showToastMessage("Please install the app first to open books!", 2000);
                return;
            }
            
            const url = card.dataset.url;
            const title = card.dataset.title;
            if (url && url !== "#") {
                modalTitle.innerText = title;
                modalAuthorElem.innerHTML = `<i class="fas fa-file-pdf"></i> PDF Document`;
                modalCategory.innerHTML = `<strong>Category:</strong> ${currentCategory}${currentFolder ? ` / ${currentFolder}` : ''}`;
                modalDesc.innerHTML = `Click the button below to open this PDF document in Google Drive.`;
                modalLink.href = url;
                modal.classList.add("active");
            }
        });
    });
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

refreshBtn.addEventListener("click", () => {
    if (!isAppInstalled) {
        showAppRequiredOverlay();
        return;
    }
    renderLibraryView();
});

closeModalBtn.addEventListener("click", () => modal.classList.remove("active"));
window.addEventListener("click", (e) => { if (e.target === modal) modal.classList.remove("active"); });

// Expose functions to global scope
window.triggerForceInstall = triggerForceInstall;
window.showAppRequiredOverlay = showAppRequiredOverlay;
window.hideAppRequiredOverlay = hideAppRequiredOverlay;
window.checkIfAppInstalled = checkIfAppInstalled;

// Initialize
loadSettings();

// Hide MinSU Portal tab
hideMinsuPortalTab();

// Initialize force install check first
initForceInstall();

// Load Chatbase AI
loadChatbaseAI();

// Only render library if app is installed
if (isAppInstalled) {
    renderLibraryView();
} else {
    mainContainer.innerHTML = `
        <div class="empty-state" style="padding: 80px 20px;">
            <i class="fas fa-mobile-alt" style="font-size: 4rem; color: #007aff; margin-bottom: 20px;"></i>
            <h3>App Required</h3>
            <p>Please install the Pixel Academy app to access books and resources.</p>
            <button class="btn-primary-apple" onclick="triggerForceInstall()" style="margin-top: 20px;">
                <i class="fas fa-download"></i> Install App Now
            </button>
        </div>
    `;
}