// ========================================
// DOM ELEMENTS
// ========================================
const loginPage = document.getElementById('loginPage');
const dashboardPage = document.getElementById('dashboardPage');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const logoutBtn = document.getElementById('logoutBtn');
const mainContent = document.getElementById('mainContent');
const burgerMenu = document.getElementById('burgerMenu');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebarOverlay');

// ========================================
// APPLICATION STATE
// ========================================
let currentUser = null;
let userSettings = {
    darkMode: false
};

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    loadSettings();
    setupEventListeners();
    checkSession();
}

function setupEventListeners() {
    loginBtn.addEventListener('click', handleLogin);
    registerBtn.addEventListener('click', openRegistrationModal);
    if (logoutBtn) logoutBtn.addEventListener('click', handleLogout);
    
    // Burger menu
    if (burgerMenu) {
        burgerMenu.addEventListener('click', toggleSidebar);
    }
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', closeSidebar);
    }
    
    // Close sidebar on window resize if desktop
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            closeSidebar();
        }
    });
}

function checkSession() {
    const savedUser = localStorage.getItem('pixel_user');
    if (savedUser) {
        try {
            currentUser = JSON.parse(savedUser);
            showDashboard();
        } catch(e) {
            showLoginPage();
        }
    } else {
        showLoginPage();
    }
}

function showLoginPage() {
    if (loginPage) loginPage.style.display = 'flex';
    if (dashboardPage) dashboardPage.style.display = 'none';
    clearLoginFields();
}

function showDashboard() {
    if (loginPage) loginPage.style.display = 'none';
    if (dashboardPage) dashboardPage.style.display = 'block';
    renderDashboardMain('dashboard');
    attachNavEvents();
}

function toggleSidebar() {
    sidebar.classList.toggle('open');
    sidebarOverlay.style.display = sidebar.classList.contains('open') ? 'block' : 'none';
}

function closeSidebar() {
    sidebar.classList.remove('open');
    sidebarOverlay.style.display = 'none';
}

// ========================================
// AUTHENTICATION - GOOGLE SHEETS API
// ========================================
async function handleLogin() {
    const schoolId = document.getElementById('loginSchoolId').value.trim();
    const password = document.getElementById('loginPassword').value;
    const errorDiv = document.getElementById('loginError');
    
    if (!schoolId || !password) {
        showError(errorDiv, 'Please enter both School ID and Password');
        return;
    }
    
    // Validate School ID format
    const schoolIdPattern = /^MCC\d{4}-\d{5}$/;
    if (!schoolIdPattern.test(schoolId)) {
        showError(errorDiv, 'Invalid School ID format. Use: MCC2025-00295');
        return;
    }
    
    loginBtn.disabled = true;
    loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
    
    try {
        // Fetch users from Google Sheets
        const response = await fetch(`${GOOGLE_SHEETS_URL}?action=getUsers`);
        const users = await response.json();
        
        const user = users.find(u => u.schoolId === schoolId && u.password === password);
        
        if (user) {
            currentUser = {
                id: user.schoolId,
                name: user.fullName,
                program: user.program,
                yearLevel: user.yearLevel,
                section: user.section,
                joined: user.joined || new Date().toLocaleDateString()
            };
            localStorage.setItem('pixel_user', JSON.stringify(currentUser));
            showToast('Login successful! Welcome back!', 'success');
            showDashboard();
            errorDiv.style.display = 'none';
        } else {
            showError(errorDiv, 'Invalid School ID or Password');
        }
    } catch (error) {
        console.error('Login error:', error);
        showError(errorDiv, 'Login failed. Please check your connection.');
    } finally {
        loginBtn.disabled = false;
        loginBtn.innerHTML = 'log in →';
    }
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('pixel_user');
    showLoginPage();
    showToast('Logged out successfully', 'success');
}

// ========================================
// REGISTRATION - GOOGLE SHEETS API
// ========================================
function openRegistrationModal() {
    const modal = document.getElementById('registrationModal');
    const form = document.getElementById('registrationForm');
    if (modal) {
        modal.style.display = 'flex';
        if (form) form.reset();
        document.getElementById('regError').style.display = 'none';
        document.getElementById('regSuccess').style.display = 'none';
    }
}

function closeRegistrationModal() {
    const modal = document.getElementById('registrationModal');
    if (modal) modal.style.display = 'none';
}

async function handleRegistration(event) {
    event.preventDefault();
    
    const fullName = document.getElementById('fullName').value.trim();
    const schoolId = document.getElementById('schoolId').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const program = document.getElementById('program').value;
    const yearLevel = document.getElementById('yearLevel').value;
    const section = document.getElementById('section').value.trim();
    
    const errorDiv = document.getElementById('regError');
    const successDiv = document.getElementById('regSuccess');
    
    // Validate full name
    if (!fullName || fullName.length < 5) {
        showError(errorDiv, 'Please enter your full name');
        return;
    }
    
    // Validate School ID format
    const schoolIdPattern = /^MCC\d{4}-\d{5}$/;
    if (!schoolIdPattern.test(schoolId)) {
        showError(errorDiv, 'Invalid School ID format. Use: MCC2025-00295');
        return;
    }
    
    // Validate password
    if (password.length < 6) {
        showError(errorDiv, 'Password must be at least 6 characters');
        return;
    }
    
    if (password !== confirmPassword) {
        showError(errorDiv, 'Passwords do not match');
        return;
    }
    
    if (!program) {
        showError(errorDiv, 'Please select your program');
        return;
    }
    
    if (!yearLevel) {
        showError(errorDiv, 'Please select your year level');
        return;
    }
    
    if (!section) {
        showError(errorDiv, 'Please enter your section');
        return;
    }
    
    const submitBtn = document.querySelector('#registrationForm .btn-submit');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Registering...';
    
    try {
        // Check if user already exists
        const checkResponse = await fetch(`${GOOGLE_SHEETS_URL}?action=getUsers`);
        const users = await checkResponse.json();
        
        if (users.find(u => u.schoolId === schoolId)) {
            showError(errorDiv, 'School ID already registered');
            submitBtn.disabled = false;
            submitBtn.innerHTML = 'Register';
            return;
        }
        
        // Register new user to Google Sheets
        const formData = new URLSearchParams();
        formData.append('action', 'addUser');
        formData.append('timestamp', new Date().toISOString());
        formData.append('fullName', fullName);
        formData.append('schoolId', schoolId);
        formData.append('password', password);
        formData.append('program', program);
        formData.append('yearLevel', yearLevel);
        formData.append('section', section);
        
        const response = await fetch(GOOGLE_SHEETS_URL, { method: 'POST', body: formData });
        const result = await response.json();
        
        if (result.success) {
            successDiv.style.display = 'block';
            successDiv.textContent = 'Registration successful! You can now login.';
            errorDiv.style.display = 'none';
            
            setTimeout(() => {
                closeRegistrationModal();
                document.getElementById('registrationForm').reset();
                showToast('Registration successful! Please login.', 'success');
            }, 2000);
        } else {
            showError(errorDiv, result.message || 'Registration failed. Please try again.');
        }
    } catch (error) {
        console.error('Registration error:', error);
        showError(errorDiv, 'Registration failed. Please check your connection.');
    } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Register';
    }
}

// ========================================
// NAVIGATION
// ========================================
function attachNavEvents() {
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', (e) => {
            const page = item.dataset.page;
            if (page) {
                renderDashboardMain(page);
                document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
                item.classList.add('active');
                closeSidebar();
            }
        });
    });
}

function renderDashboardMain(page) {
    if (!currentUser) return;
    
    switch(page) {
        case 'dashboard':
            showDashboardHome();
            break;
        case 'profile':
            showProfile();
            break;
        case 'about':
            showAbout();
            break;
        case 'settings':
            showSettings();
            break;
        default:
            showDashboardHome();
    }
}

// ========================================
// DASHBOARD HOME
// ========================================
function showDashboardHome() {
    const programBooks = booksDB[currentUser.program] || [];
    const recentBooks = [...programBooks, ...genEdBooks].slice(0, 6);
    
    const html = `
        <div class="welcome-header">
            <h2>Welcome back, ${currentUser.name.split(' ')[0]} 👋</h2>
            <p>Your learning journey continues</p>
        </div>
        
        <div class="dashboard-stats">
            <div class="stat-card">
                <div class="stat-icon"><i class="fas fa-book"></i></div>
                <h3>Available Books</h3>
                <div class="stat-value">${programBooks.length + genEdBooks.length}</div>
            </div>
            <div class="stat-card">
                <div class="stat-icon"><i class="fas fa-graduation-cap"></i></div>
                <h3>Your Program</h3>
                <div class="stat-value">${currentUser.program}</div>
            </div>
            <div class="stat-card">
                <div class="stat-icon"><i class="fas fa-calendar"></i></div>
                <h3>Member Since</h3>
                <div class="stat-value">${currentUser.joined}</div>
            </div>
        </div>
        
        <div class="recent-books">
            <h3><i class="fas fa-star"></i> Recommended for You</h3>
            <div class="books-grid">
                ${recentBooks.map(book => `
                    <div class="book-item" onclick="window.open('${book.url}', '_blank')">
                        <div class="book-icon">📘</div>
                        <div class="book-info">
                            <h4>${book.title}</h4>
                            <p>${book.category || currentUser.program}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    mainContent.innerHTML = html;
}

// ========================================
// PROFILE PAGE
// ========================================
function showProfile() {
    const html = `
        <div class="profile-container">
            <div class="profile-header">
                <div class="profile-avatar">
                    <i class="fas fa-user-graduate"></i>
                </div>
                <div class="profile-info">
                    <h2>${currentUser.name}</h2>
                    <p>${currentUser.program} · ${currentUser.yearLevel}</p>
                </div>
            </div>
            
            <div class="profile-card">
                <div class="profile-grid">
                    <div class="profile-field">
                        <div class="profile-field-label">
                            <i class="fas fa-id-card"></i> School ID
                        </div>
                        <div class="profile-field-value">${currentUser.id}</div>
                    </div>
                    
                    <div class="profile-field">
                        <div class="profile-field-label">
                            <i class="fas fa-graduation-cap"></i> Program
                        </div>
                        <div class="profile-field-value">${currentUser.program}</div>
                    </div>
                    
                    <div class="profile-field">
                        <div class="profile-field-label">
                            <i class="fas fa-calendar-alt"></i> Year Level
                        </div>
                        <div class="profile-field-value">${currentUser.yearLevel}</div>
                    </div>
                    
                    <div class="profile-field">
                        <div class="profile-field-label">
                            <i class="fas fa-users"></i> Section
                        </div>
                        <div class="profile-field-value">${currentUser.section}</div>
                    </div>
                    
                    <div class="profile-field">
                        <div class="profile-field-label">
                            <i class="fas fa-calendar-plus"></i> Joined
                        </div>
                        <div class="profile-field-value">${currentUser.joined}</div>
                    </div>
                    
                    <div class="profile-field">
                        <div class="profile-field-label">
                            <i class="fas fa-circle"></i> Status
                        </div>
                        <div class="profile-field-value">
                            <span style="color: #10b981;">● Active</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    mainContent.innerHTML = html;
}

// ========================================
// ABOUT PAGE
// ========================================
function showAbout() {
    const html = `
        <div class="about-container">
            <h1 class="about-title">About Pixel Academy</h1>
            
            <p class="about-text">
                Pixel Academy serves as the official digital learning library for students of Mindoro State University. The platform provides free access to academic books, lecture materials, and learning resources designed to support independent study and academic growth.
            </p>
            
            <p class="about-text">
                The system exists to give students a simple and reliable place to study outside the classroom. Many students need learning materials beyond regular lectures. Pixel Academy answers this need by offering organized digital resources accessible anytime through the internet.
            </p>
            
            <p class="about-text">
                The portal focuses on accessibility, learning support, and knowledge sharing. Students from different colleges and programs across the university gain access to curated books, lecture notes, and educational files that help strengthen understanding of course topics.
            </p>
            
            <p class="about-text">
                Pixel Academy promotes a culture of advanced learning. Students do not rely only on classroom discussions. The platform encourages self study, research, and continuous skill improvement.
            </p>
            
            <h3 style="margin-top: 2rem; color: #667eea;">Mission</h3>
            <p class="about-text">Provide students of Mindoro State University with free access to organized academic books and digital learning materials. Support independent study and strengthen academic performance through reliable online resources.</p>
            
            <h3 style="margin-top: 1.5rem; color: #667eea;">Vision</h3>
            <p class="about-text">Build a trusted digital learning portal for the community of Mindoro State University. Expand access to knowledge and support a culture of continuous learning, research, and academic excellence.</p>
        </div>
    `;
    
    mainContent.innerHTML = html;
}

// ========================================
// SETTINGS PAGE
// ========================================
function showSettings() {
    const html = `
        <div class="settings-container">
            <div class="settings-card">
                <h3 style="margin-bottom: 1rem;">Appearance</h3>
                <div class="settings-row">
                    <div class="settings-label">
                        <i class="fas fa-moon"></i>
                        Dark Mode
                    </div>
                    <label class="switch">
                        <input type="checkbox" id="darkModeToggle" ${userSettings.darkMode ? 'checked' : ''}>
                        <span class="slider"></span>
                    </label>
                </div>
            </div>
            
            <div class="settings-card">
                <h3 style="margin-bottom: 1rem;">Account</h3>
                <div class="settings-row">
                    <div class="settings-label">
                        <i class="fas fa-envelope"></i>
                        School ID
                    </div>
                    <span>${currentUser.id}</span>
                </div>
                <div class="settings-row">
                    <div class="settings-label">
                        <i class="fas fa-user"></i>
                        Full Name
                    </div>
                    <span>${currentUser.name}</span>
                </div>
            </div>
            
            <div class="settings-card">
                <div class="settings-row">
                    <div class="settings-label">
                        <i class="fas fa-info-circle"></i>
                        Version
                    </div>
                    <span>v2.0.0</span>
                </div>
            </div>
        </div>
    `;
    
    mainContent.innerHTML = html;
    
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('change', function(e) {
            userSettings.darkMode = e.target.checked;
            if (userSettings.darkMode) {
                document.body.classList.add('dark');
            } else {
                document.body.classList.remove('dark');
            }
            saveSettings();
        });
    }
}

// ========================================
// SETTINGS MANAGEMENT
// ========================================
function loadSettings() {
    const saved = localStorage.getItem('pixel_settings');
    if (saved) {
        try {
            userSettings = JSON.parse(saved);
            if (userSettings.darkMode) {
                document.body.classList.add('dark');
            }
        } catch(e) {}
    }
}

function saveSettings() {
    localStorage.setItem('pixel_settings', JSON.stringify(userSettings));
}

// ========================================
// UTILITY FUNCTIONS
// ========================================
function showError(element, message) {
    if (element) {
        element.textContent = message;
        element.style.display = 'block';
        setTimeout(() => {
            element.style.display = 'none';
        }, 3000);
    }
}

function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    if (toast) {
        toast.textContent = message;
        toast.className = `toast ${type}`;
        toast.style.display = 'block';
        setTimeout(() => {
            toast.style.display = 'none';
        }, 3000);
    }
}

function clearLoginFields() {
    const schoolId = document.getElementById('loginSchoolId');
    const password = document.getElementById('loginPassword');
    const errorDiv = document.getElementById('loginError');
    if (schoolId) schoolId.value = '';
    if (password) password.value = '';
    if (errorDiv) errorDiv.style.display = 'none';
}

// ========================================
// EVENT BINDINGS
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    // Registration form submit
    const regForm = document.getElementById('registrationForm');
    if (regForm) {
        regForm.addEventListener('submit', handleRegistration);
    }
    
    // Cancel registration button
    const cancelBtn = document.getElementById('cancelRegBtn');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', closeRegistrationModal);
    }
    
    // Close modal button
    const closeRegBtn = document.getElementById('closeRegistrationBtn');
    if (closeRegBtn) {
        closeRegBtn.addEventListener('click', closeRegistrationModal);
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        const modal = document.getElementById('registrationModal');
        if (e.target === modal) {
            closeRegistrationModal();
        }
    });
    
    // Enter key on login
    const loginPassword = document.getElementById('loginPassword');
    if (loginPassword) {
        loginPassword.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleLogin();
            }
        });
    }
    
    const loginSchoolId = document.getElementById('loginSchoolId');
    if (loginSchoolId) {
        loginSchoolId.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleLogin();
            }
        });
    }
});