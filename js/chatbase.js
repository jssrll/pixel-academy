// ========== CHATBASE AI INTEGRATION ==========

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
        'script[src*="chatbase"]', 'iframe[src*="chatbase"]', 'div[id*="chatbase"]',
        'div[class*="chatbase"]', 'div[style*="z-index: 2147483647"]',
        'div[style*="position: fixed"][style*="bottom: 0"][style*="right: 0"]'
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
loadChatbaseAI();