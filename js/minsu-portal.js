// ========== MINSU PORTAL PAGE ==========

function showMinsuPortal() {
    return `
        <div class="portal-container">
            <div class="portal-header">
                <h1 class="portal-title"><i class="fas fa-university"></i> Mindoro State University Portal</h1>
                <p class="portal-subtitle">Official enrollment and student services portal</p>
            </div>
            <div class="portal-card">
                <div class="portal-icon">
                    <i class="fas fa-external-link-alt"></i>
                </div>
                <h2>Access MinSU Enrollment Portal</h2>
                <p>Click the button below to open the official Mindoro State University enrollment portal for the Calapan Campus. You will be redirected to an external site.</p>
                <a href="https://mcc-enrollment.minsu.edu.ph" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   class="portal-button">
                    <i class="fas fa-sign-in-alt"></i> Go to MinSU Portal
                </a>
                <div class="portal-info">
                    <h4>Important Information:</h4>
                    <ul>
                        <li><i class="fas fa-calendar-alt"></i> Second Semester | AY 2025-2026</li>
                        <li><i class="fas fa-id-card"></i> You will need your student credentials to log in.</li>
                        <li><i class="fas fa-question-circle"></i> Forgot your password? Use the "Recover" link on the portal page.</li>
                    </ul>
                </div>
            </div>
        </div>
    `;
}