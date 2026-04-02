// ========== CONFIGURATION ==========

const CONFIG = {
    // Google Sheets API Configuration
    // You need to deploy your own Google Apps Script Web App
    // Replace with your actual Apps Script URL after deployment
    SHEETS_API_URL: 'https://script.google.com/macros/s/AKfycbxhFHmts3HaDA9HVwDr7ac9U4s-lUgiHncM0Pg_QkdYrQ3TDbX6TDGKmc3I_IDB9xqLyA/exec',
    
    // App Settings
    APP_NAME: 'Pixel Academy Portal',
    APP_VERSION: '2.0.0',
    
    // Default User Settings
    DEFAULT_SETTINGS: {
        darkMode: false,
        fontSize: 'medium'
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}