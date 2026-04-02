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

loadChatbaseAI();