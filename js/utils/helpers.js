// ========== HELPER FUNCTIONS ==========

function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    if (!toast) return;
    
    toast.textContent = message;
    toast.className = 'toast';
    toast.classList.add(type);
    toast.style.display = 'block';
    
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}

function escapeHtml(str) {
    if (!str) return '';
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function formatDate(date) {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function loadSettings() {
    const savedSettings = localStorage.getItem('pixelSettings');
    if (savedSettings) {
        try {
            userSettings = JSON.parse(savedSettings);
            if (userSettings.darkMode) document.body.classList.add('dark');
            else document.body.classList.remove('dark');
            applyFontSize(userSettings.fontSize || 'medium');
        } catch (e) {
            console.log('Error loading settings');
        }
    }
}

function saveSettings() {
    localStorage.setItem('pixelSettings', JSON.stringify(userSettings));
}

function applyFontSize(size) {
    document.body.classList.remove('font-small', 'font-medium', 'font-large');
    switch(size) {
        case 'small':
            document.body.classList.add('font-small');
            document.documentElement.style.fontSize = '14px';
            break;
        case 'medium':
            document.body.classList.add('font-medium');
            document.documentElement.style.fontSize = '16px';
            break;
        case 'large':
            document.body.classList.add('font-large');
            document.documentElement.style.fontSize = '18px';
            break;
        default:
            document.documentElement.style.fontSize = '16px';
    }
}