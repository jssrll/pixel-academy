// ========== AUTHENTICATION ==========
// FIXED VERSION

let currentUser = null;

async function handleLogin() {
    const schoolId = document.getElementById('loginSchoolId').value.trim();
    const password = document.getElementById('loginPassword').value.trim();
    const errorDiv = document.getElementById('loginError');
    
    if (!schoolId || !password) {
        errorDiv.innerText = 'Please enter your School ID and Password';
        return;
    }
    
    // Validate School ID format
    const idPattern = /^MCC\d{4}-\d{5}$/;
    if (!idPattern.test(schoolId)) {
        errorDiv.innerText = 'Invalid School ID format. Use: MCC2025-00295';
        return;
    }
    
    errorDiv.innerText = '';
    showLoading(true);
    
    try {
        const result = await sheetsAPI.loginUser(schoolId, password);
        console.log('Login result:', result);
        
        showLoading(false);
        
        if (result.success && result.user) {
            currentUser = result.user;
            localStorage.setItem('pixelSession', JSON.stringify(currentUser));
            showDashboard();
            showToast('Login successful! Welcome back!', 'success');
        } else {
            errorDiv.innerText = result.message || 'Invalid School ID or Password';
        }
    } catch (error) {
        showLoading(false);
        errorDiv.innerText = 'Connection error. Please try again.';
        console.error('Login error:', error);
    }
}

async function handleRegister(event) {
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
    
    // Validation
    if (!fullName || !schoolId || !password || !confirmPassword || !program || !yearLevel || !section) {
        errorDiv.style.display = 'block';
        errorDiv.innerText = 'Please fill in all fields';
        return;
    }
    
    // Validate name format (at least first and last name)
    if (fullName.split(' ').length < 2) {
        errorDiv.style.display = 'block';
        errorDiv.innerText = 'Please enter your full name (First and Last)';
        return;
    }
    
    // Validate School ID format
    const idPattern = /^MCC\d{4}-\d{5}$/;
    if (!idPattern.test(schoolId)) {
        errorDiv.style.display = 'block';
        errorDiv.innerText = 'Invalid School ID format. Use: MCC2025-00295';
        return;
    }
    
    // Validate password length
    if (password.length < 6) {
        errorDiv.style.display = 'block';
        errorDiv.innerText = 'Password must be at least 6 characters';
        return;
    }
    
    // Validate password match
    if (password !== confirmPassword) {
        errorDiv.style.display = 'block';
        errorDiv.innerText = 'Passwords do not match';
        return;
    }
    
    errorDiv.style.display = 'none';
    successDiv.style.display = 'none';
    
    showLoading(true);
    
    try {
        const result = await sheetsAPI.registerUser({
            fullName,
            schoolId,
            password,
            program,
            yearLevel,
            section,
            joined: new Date().toLocaleDateString()
        });
        
        console.log('Registration result:', result);
        showLoading(false);
        
        if (result.success) {
            successDiv.style.display = 'block';
            successDiv.innerText = result.message || 'Registration successful! You can now login.';
            successDiv.style.color = '#10b981';
            
            // Clear form
            document.getElementById('registrationForm').reset();
            
            // Close modal after 3 seconds
            setTimeout(() => {
                document.getElementById('registrationModal').style.display = 'none';
                successDiv.style.display = 'none';
            }, 3000);
        } else {
            errorDiv.style.display = 'block';
            errorDiv.innerText = result.message || 'Registration failed. Please try again.';
        }
    } catch (error) {
        showLoading(false);
        errorDiv.style.display = 'block';
        errorDiv.innerText = 'Connection error. Please try again.';
        console.error('Registration error:', error);
    }
}

function handleLogout() {
    localStorage.removeItem('pixelSession');
    currentUser = null;
    document.getElementById('dashboardPage').style.display = 'none';
    document.getElementById('loginPage').style.display = 'flex';
    closeSidebar();
    showToast('Logged out successfully', 'success');
}

function showLoading(show) {
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.querySelector('.btn-submit');
    
    if (show) {
        if (loginBtn) loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
        if (registerBtn && registerBtn.closest('#registrationForm')) {
            registerBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Registering...';
        }
    } else {
        if (loginBtn) loginBtn.innerHTML = 'log in →';
        if (registerBtn && registerBtn.closest('#registrationForm')) {
            registerBtn.innerHTML = 'Register';
        }
    }
}