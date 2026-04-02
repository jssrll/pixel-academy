// ========== CONFIGURATION ==========

const CONFIG = {
    // Google Sheets API Configuration
    // You need to deploy your own Google Apps Script Web App
    // Replace with your actual Apps Script URL after deployment
    SHEETS_API_URL: 'https://script.google.com/macros/s/AKfycbxaX8GArF4Q0H79mSX53ZAzTb0WYTbXUBm_-_0aIUrmauiyxFgoz0sWFItp2medv-2iJA/exec',
    
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