// ========== GOOGLE SHEETS API INTEGRATION ==========
// FIXED VERSION - Removed no-cors mode

class SheetsAPI {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    // Register new user - FIXED
    async registerUser(userData) {
        try {
            // Create form data
            const formData = new URLSearchParams();
            formData.append('action', 'register');
            formData.append('fullName', userData.fullName);
            formData.append('schoolId', userData.schoolId);
            formData.append('password', userData.password);
            formData.append('program', userData.program);
            formData.append('yearLevel', userData.yearLevel);
            formData.append('section', userData.section);
            formData.append('joined', userData.joined);
            
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: formData.toString()
            });
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Registration error:', error);
            return { success: false, message: 'Network error: ' + error.message };
        }
    }

    // Login user
    async loginUser(schoolId, password) {
        try {
            const url = `${this.apiUrl}?action=login&schoolId=${encodeURIComponent(schoolId)}&password=${encodeURIComponent(password)}`;
            console.log('Login URL:', url);
            
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const data = await response.json();
            console.log('Login response:', data);
            return data;
        } catch (error) {
            console.error('Login error:', error);
            return { success: false, message: 'Network error: ' + error.message };
        }
    }

    // Get user by school ID
    async getUserBySchoolId(schoolId) {
        try {
            const response = await fetch(`${this.apiUrl}?action=getUser&schoolId=${encodeURIComponent(schoolId)}`);
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Get user error:', error);
            return { success: false, message: 'Network error.' };
        }
    }
}

// Initialize API
const sheetsAPI = new SheetsAPI(CONFIG.SHEETS_API_URL);