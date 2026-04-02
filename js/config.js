// ========== CONFIGURATION ==========

const CONFIG = {
    SHEETS_API_URL: 'https://script.google.com/macros/s/AKfycbxV2pPGiDsREGT_3ybMH_ph5Cc3DZR27RVqF-9YMDhrNy2pJSom5xHzLZInpD0o2blGKQ/exec',
    APP_NAME: 'Pixel Academy Portal',
    APP_VERSION: '2.0.0',
    DEFAULT_SETTINGS: {
        darkMode: false,
        fontSize: 'medium'
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}