// ========== SETTINGS PAGE ==========

let userSettings = { darkMode: false, fontSize: "medium" };

function loadSettings() {
    const saved = localStorage.getItem("librarySettings");
    if (saved) {
        userSettings = JSON.parse(saved);
        applyFontSize(userSettings.fontSize);
        if (userSettings.darkMode) document.body.classList.add("dark");
    }
}

function saveSettings() {
    localStorage.setItem("librarySettings", JSON.stringify(userSettings));
}

function applyFontSize(size) {
    const sizes = { small: "13px", medium: "16px", large: "18px" };
    document.documentElement.style.fontSize = sizes[size] || "16px";
}

function renderSettingsPage() {
    const html = `
        <div class="settings-container">
            <div class="settings-header"><h1>⚙️ Settings</h1><p>Customize your Library Vista experience</p></div>
            <div class="settings-card">
                <h3>Appearance</h3>
                <div class="settings-row"><span>🌓 Dark Mode</span><label class="switch"><input type="checkbox" id="darkModeToggle" ${userSettings.darkMode ? 'checked' : ''}><span class="slider"></span></label></div>
                <div class="settings-row"><span>📏 Font Size</span><select id="fontSizeSelect" class="settings-select"><option value="small" ${userSettings.fontSize === 'small' ? 'selected' : ''}>Small</option><option value="medium" ${userSettings.fontSize === 'medium' ? 'selected' : ''}>Medium</option><option value="large" ${userSettings.fontSize === 'large' ? 'selected' : ''}>Large</option></select></div>
            </div>
            <div class="settings-card">
                <h3>Support</h3>
                <button id="reportBugBtn" class="settings-btn">Report Bug on Facebook</button>
            </div>
            <div class="settings-card">
                <div class="settings-info"><div class="info-row"><span>Version:</span><span>v2.0.0</span></div><div class="info-row"><span>Last Updated:</span><span>March 2026</span></div></div>
            </div>
        </div>
    `;
    document.getElementById("mainContent").innerHTML = html;
    
    document.getElementById('darkModeToggle')?.addEventListener('change', (e) => {
        userSettings.darkMode = e.target.checked;
        if (userSettings.darkMode) document.body.classList.add('dark');
        else document.body.classList.remove('dark');
        saveSettings();
    });
    document.getElementById('fontSizeSelect')?.addEventListener('change', (e) => {
        userSettings.fontSize = e.target.value;
        applyFontSize(userSettings.fontSize);
        saveSettings();
    });
    document.getElementById('reportBugBtn')?.addEventListener('click', () => {
        window.open('https://www.facebook.com/share/1766RUBjxH/', '_blank');
    });
}