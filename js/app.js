// ========================================
// PIXEL ACADEMY - AUTHENTICATION SYSTEM
// ========================================

// Google Apps Script Web App URL (palitan ng iyong URL)
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzE36GwhIveaQGQBOIUfZQf5krV3J_oJBEQfUy8cPiwrjqHnvlBsgH25EVrwkDbzBUy4A/exec";

let currentUser = null;

// ========================================
// HELPER FUNCTIONS
// ========================================
function showToast(message, duration = 1800) {
  const toast = document.getElementById("toastMsg");
  if (!toast) return;
  toast.innerText = message;
  toast.classList.add("show");
  setTimeout(() => { toast.classList.remove("show"); }, duration);
}

// ========================================
// ACCOUNT MODAL FUNCTIONS
// ========================================
function openAccountModal() {
  const modal = document.getElementById("accountModal");
  modal.classList.add("show");
  document.getElementById("loginForm").reset();
  document.getElementById("registerForm").reset();
  document.getElementById("studentFields").style.display = "none";
}

function closeAccountModal() {
  const modal = document.getElementById("accountModal");
  modal.classList.remove("show");
}

function openProfileModal() {
  if (!currentUser) {
    openAccountModal();
    return;
  }
  
  document.getElementById("profileName").innerText = currentUser.fullName;
  document.getElementById("profileId").innerText = currentUser.schoolId;
  document.getElementById("profileStatus").innerText = currentUser.status;
  if (currentUser.status === 'student') {
    document.getElementById("profileYearSection").innerText = `${currentUser.yearLevel} - ${currentUser.section}`;
    document.getElementById("profileYearSectionRow").style.display = 'flex';
  } else {
    document.getElementById("profileYearSectionRow").style.display = 'none';
  }
  
  const modal = document.getElementById("profileModal");
  modal.classList.add("show");
}

function closeProfileModal() {
  const modal = document.getElementById("profileModal");
  modal.classList.remove("show");
}

function switchTab(tabName) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
  
  if (tabName === 'login') {
    document.querySelector('.tab-btn:first-child').classList.add('active');
    document.getElementById('loginTab').classList.add('active');
  } else {
    document.querySelector('.tab-btn:last-child').classList.add('active');
    document.getElementById('registerTab').classList.add('active');
  }
}

// ========================================
// SHOW/HIDE STUDENT FIELDS
// ========================================
function initStatusListener() {
  const statusSelect = document.getElementById("regStatus");
  if (statusSelect) {
    statusSelect.addEventListener("change", function() {
      const studentFields = document.getElementById("studentFields");
      if (this.value === "student") {
        studentFields.style.display = "block";
      } else {
        studentFields.style.display = "none";
      }
    });
  }
}

// ========================================
// CHECK IF SCHOOL ID EXISTS
// ========================================
async function checkSchoolId(schoolId) {
  try {
    const formData = new URLSearchParams();
    formData.append("action", "checkSchoolId");
    formData.append("schoolId", schoolId);
    
    const response = await fetch(APPS_SCRIPT_URL, { method: "POST", body: formData });
    const result = await response.json();
    return result.exists;
  } catch (error) {
    console.error("Check school ID error:", error);
    return false;
  }
}

// ========================================
// REGISTER FUNCTION
// ========================================
async function handleRegister(event) {
  event.preventDefault();
  
  const fullName = document.getElementById("regFullName").value.trim();
  const schoolId = document.getElementById("regSchoolId").value.trim();
  const passcode = document.getElementById("regPasscode").value;
  const confirmPasscode = document.getElementById("regConfirmPasscode").value;
  const status = document.getElementById("regStatus").value;
  const yearLevel = document.getElementById("regYearLevel").value;
  const section = document.getElementById("regSection").value.trim();
  const registerBtn = document.getElementById("registerBtn");
  const loadingIndicator = document.getElementById("registerLoading");
  
  // Validation
  if (!fullName || !schoolId || !passcode || !status) {
    showToast("Please fill in all required fields", 1500);
    return;
  }
  
  if (passcode !== confirmPasscode) {
    showToast("Passcodes do not match", 1500);
    return;
  }
  
  if (passcode.length < 4) {
    showToast("Passcode must be at least 4 characters", 1500);
    return;
  }
  
  if (status === "student") {
    if (!yearLevel || !section) {
      showToast("Please fill in year level and section", 1500);
      return;
    }
  }
  
  // Check if school ID already exists
  const exists = await checkSchoolId(schoolId);
  if (exists) {
    showToast("School ID already registered! Please login or use a different ID.", 2000);
    return;
  }
  
  const accountId = Math.floor(100000000 + Math.random() * 900000000).toString();
  
  registerBtn.disabled = true;
  registerBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating...';
  loadingIndicator.style.display = "block";
  
  try {
    const formData = new URLSearchParams();
    formData.append("action", "addUser");
    formData.append("fullName", fullName);
    formData.append("schoolId", schoolId);
    formData.append("passcode", passcode);
    formData.append("status", status);
    formData.append("yearLevel", yearLevel);
    formData.append("section", section);
    formData.append("accountId", accountId);
    
    const response = await fetch(APPS_SCRIPT_URL, { method: "POST", body: formData });
    const result = await response.json();
    
    if (result.success) {
      currentUser = {
        fullName: fullName,
        schoolId: schoolId,
        passcode: passcode,
        status: status,
        yearLevel: yearLevel,
        section: section,
        accountId: accountId
      };
      
      localStorage.setItem("pixel_user", JSON.stringify(currentUser));
      document.getElementById("userNameDisplay").innerText = fullName.split(' ')[0];
      showToast(`✅ Welcome to Pixel Academy, ${fullName}!`, 3000);
      closeAccountModal();
      document.getElementById("registerForm").reset();
      document.getElementById("studentFields").style.display = "none";
    } else {
      showToast(result.message || "Registration failed", 1500);
    }
  } catch (error) {
    console.error("Registration error:", error);
    showToast("Registration failed. Please try again.", 1500);
  } finally {
    registerBtn.disabled = false;
    registerBtn.innerHTML = '<i class="fas fa-user-plus"></i> Create Account';
    loadingIndicator.style.display = "none";
  }
}

// ========================================
// LOGIN FUNCTION
// ========================================
async function handleLogin(event) {
  event.preventDefault();
  
  const schoolId = document.getElementById("loginSchoolId").value.trim();
  const passcode = document.getElementById("loginPasscode").value;
  const loginBtn = document.getElementById("loginBtn");
  
  if (!schoolId || !passcode) {
    showToast("Please fill in all fields", 1500);
    return;
  }
  
  loginBtn.disabled = true;
  loginBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging in...';
  
  try {
    const response = await fetch(`${APPS_SCRIPT_URL}?action=getUsers`);
    const users = await response.json();
    
    const user = users.find(u => u.schoolId == schoolId && u.passcode == passcode);
    
    if (user) {
      currentUser = {
        fullName: user.fullName,
        schoolId: user.schoolId,
        passcode: user.passcode,
        status: user.status,
        yearLevel: user.yearLevel,
        section: user.section,
        accountId: user.accountId
      };
      
      localStorage.setItem("pixel_user", JSON.stringify(currentUser));
      document.getElementById("userNameDisplay").innerText = currentUser.fullName.split(' ')[0];
      showToast(`Welcome back, ${currentUser.fullName}!`, 2000);
      closeAccountModal();
    } else {
      showToast("Invalid School ID or Passcode", 1500);
    }
  } catch (error) {
    console.error("Login error:", error);
    showToast("Login failed. Please try again.", 1500);
  } finally {
    loginBtn.disabled = false;
    loginBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Login';
  }
}

// ========================================
// LOGOUT FUNCTION
// ========================================
function logout() {
  currentUser = null;
  localStorage.removeItem("pixel_user");
  document.getElementById("userNameDisplay").innerText = "";
  closeProfileModal();
  showToast("Logged out successfully", 1500);
}

// ========================================
// INITIALIZATION
// ========================================
function init() {
  console.log("Initializing Pixel Academy...");
  
  const savedUser = localStorage.getItem("pixel_user");
  if (savedUser) {
    try {
      currentUser = JSON.parse(savedUser);
      document.getElementById("userNameDisplay").innerText = currentUser.fullName.split(' ')[0];
    } catch(e) { currentUser = null; }
  }
  
  initStatusListener();
  
  // Account icon click
  const accountIcon = document.getElementById("accountIcon");
  if (accountIcon) {
    accountIcon.addEventListener("click", () => {
      if (currentUser) openProfileModal();
      else openAccountModal();
    });
  }
  
  // Export functions to window
  window.openAccountModal = openAccountModal;
  window.closeAccountModal = closeAccountModal;
  window.openProfileModal = openProfileModal;
  window.closeProfileModal = closeProfileModal;
  window.switchTab = switchTab;
  window.handleLogin = handleLogin;
  window.handleRegister = handleRegister;
  window.logout = logout;
}

document.addEventListener('DOMContentLoaded', init);