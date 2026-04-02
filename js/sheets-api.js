// ========== GOOGLE SHEETS API INTEGRATION ==========

class SheetsAPI {
    constructor(apiUrl) {
        this.apiUrl = apiUrl;
    }

    // Register new user
    async registerUser(userData) {
        try {
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    action: 'register',
                    ...userData
                })
            });
            
            // Since it's no-cors, we can't read response directly
            // Return success and let the server handle it
            return { success: true, message: 'Registration submitted successfully!' };
        } catch (error) {
            console.error('Registration error:', error);
            return { success: false, message: 'Network error. Please try again.' };
        }
    }

    // Login user
    async loginUser(schoolId, password) {
        try {
            const response = await fetch(`${this.apiUrl}?action=login&schoolId=${encodeURIComponent(schoolId)}&password=${encodeURIComponent(password)}`);
            
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Login error:', error);
            return { success: false, message: 'Network error. Please try again.' };
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