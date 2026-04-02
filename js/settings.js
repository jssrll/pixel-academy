// ========== SETTINGS PAGE ==========

let userSettings = { darkMode: false, fontSize: "medium" };

function loadSettings() {
    const saved = localStorage.getItem("librarySettings");
    if (saved) {
        userSettings = JSON.parse(saved);
        applyFontSize(userSettings.fontSize);
        if (userSettings.darkMode) {
            document.body.classList.add("dark");
        }
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
            <div class="settings-header">
                <h1>⚙️ Settings</h1>
                <p>Customize your Library Vista Portal experience</p>
            </div>
            <div class="settings-card">
                <h2 class="settings-section-title">Appearance</h2>
                <div class="settings-row">
                    <div class="settings-label">
                        <span class="settings-label-icon">🌓</span>
                        Dark Mode / Light Mode
                    </div>
                    <label class="switch">
                        <input type="checkbox" id="darkModeToggle" ${userSettings.darkMode ? 'checked' : ''}>
                        <span class="slider"></span>
                    </label>
                </div>
                <div class="settings-description">Switch the interface theme for comfortable reading.</div>
            </div>
            <div class="settings-card">
                <h2 class="settings-section-title">Font Size</h2>
                <div class="settings-row">
                    <div class="settings-label">
                        <span class="settings-label-icon">📏</span>
                        Text Size
                    </div>
                    <select class="settings-select" id="fontSizeSelect">
                        <option value="small" ${userSettings.fontSize === 'small' ? 'selected' : ''}>Small</option>
                        <option value="medium" ${userSettings.fontSize === 'medium' ? 'selected' : ''}>Medium</option>
                        <option value="large" ${userSettings.fontSize === 'large' ? 'selected' : ''}>Large</option>
                    </select>
                </div>
                <div class="settings-description">Adjust the text size for better readability.</div>
            </div>
            <div class="settings-card">
                <h2 class="settings-section-title">Support</h2>
                <div class="settings-row">
                    <div class="settings-label">
                        <span class="settings-label-icon">📝</span>
                        Report a Bug
                    </div>
                    <button class="settings-btn" id="reportBugBtn">Report Bug</button>
                </div>
                <div class="settings-description">Found an issue? Let us know on our Facebook page!</div>
            </div>
            <div class="settings-card">
                <div class="settings-info">
                    <div class="info-row">
                        <span class="info-label">Version:</span>
                        <span class="info-value">v2.0.0</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Last Updated:</span>
                        <span class="info-value">March 20, 2026</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById("mainContent").innerHTML = html;
    
    // Setup event listeners
    document.getElementById('darkModeToggle')?.addEventListener('change', function(e) {
        userSettings.darkMode = e.target.checked;
        if (userSettings.darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
        saveSettings();
    });
    
    document.getElementById('fontSizeSelect')?.addEventListener('change', function(e) {
        userSettings.fontSize = e.target.value;
        applyFontSize(userSettings.fontSize);
        saveSettings();
    });
    
    document.getElementById('reportBugBtn')?.addEventListener('click', function() {
        window.open('https://www.facebook.com/share/1766RUBjxH/', '_blank');
    });
}