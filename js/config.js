// ========== CONFIGURATION ==========

const CONFIG = {
    // Google Sheets API Configuration
    // You need to deploy your own Google Apps Script Web App
    // Replace with your actual Apps Script URL after deployment
    SHEETS_API_URL: 'https://script.google.com/macros/s/AKfycbz8m0zLFoCN5Moc7-Hekzb7b_wjIaV_i4W6Q4Ep87GZKDt8l2869CXgJLvdb6NKMGknYQ/exec',
    
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