// ========== MAIN APPLICATION LOGIC ==========

let currentPage = "library";
let currentCategory = "All Books";
let currentFolder = null;

// DOM Elements
const mainContainer = document.getElementById("mainContent");
const categoryStrip = document.getElementById("categoryStrip");
const categoryContainer = document.getElementById("categoryFilterContainer");
const totalBooksSpan = document.getElementById("totalBooksCount");
const refreshBtn = document.getElementById("manualRefreshBtn");
const modal = document.getElementById("detailModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalTitle = document.getElementById("modalTitle");
const modalAuthorElem = document.getElementById("modalAuthor");
const modalCatValue = document.getElementById("modalCategory");
const modalDescElem = document.getElementById("modalDesc");
const modalLink = document.getElementById("modalLink");
const profileBtn = document.getElementById("profileIconBtn");

// Navigation
document.querySelectorAll(".nav-tab").forEach(tab => {
    tab.addEventListener("click", () => {
        document.querySelectorAll(".nav-tab").forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
        currentPage = tab.dataset.page;
        currentFolder = null;
        
        if (currentPage === "library") {
            categoryStrip.style.display = "block";
            renderLibraryView();
        } else {
            categoryStrip.style.display = "none";
            if (currentPage === "ai-tools") {
                mainContainer.innerHTML = showAIToolsPage();
            } else if (currentPage === "minsu") {
                mainContainer.innerHTML = showMinsuPortal();
            } else if (currentPage === "settings") {
                renderSettingsPage();
            }
        }
    });
});

function renderLibraryView() {
    updateStats();
    renderCategoryChips();
    renderBooksGrid();
}

function updateStats() {
    const allBooks = getAllBooks();
    totalBooksSpan.innerText = allBooks.length;
}

function renderCategoryChips() {
    const categories = Object.keys(booksDB);
    categories.sort((a, b) => {
        if (a === "All Books") return -1;
        if (b === "All Books") return 1;
        return a.localeCompare(b);
    });
    
    categoryContainer.innerHTML = categories.map(cat => `
        <div class="cat-chip ${currentCategory === cat ? 'active' : ''}" data-category="${cat}">
            <i class="fas fa-tag"></i> ${cat}
        </div>
    `).join("");
    
    document.querySelectorAll('.cat-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            currentCategory = chip.dataset.category;
            currentFolder = null;
            renderCategoryChips();
            renderBooksGrid();
        });
    });
}

function renderBooksGrid() {
    let books = [];
    let isFolderView = false;
    
    if (currentCategory === "All Books") {
        books = getAllBooks();
    } else if (hasDirectBooks(currentCategory)) {
        books = booksDB[currentCategory];
    } else if (hasFolders(currentCategory)) {
        if (currentFolder) {
            books = getBooksInFolder(currentCategory, currentFolder);
        } else {
            isFolderView = true;
            const folders = getFolders(currentCategory);
            if (folders) {
                mainContainer.innerHTML = `
                    <div class="books-grid">
                        ${folders.map(folder => `
                            <div class="book-card folder-card" data-folder="${folder}">
                                <div class="book-cover">
                                    <i class="fas fa-folder"></i>
                                </div>
                                <div class="book-info">
                                    <div class="book-title">📁 ${folder}</div>
                                    <div class="book-author">${getBooksInFolder(currentCategory, folder).length} books</div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `;
                
                document.querySelectorAll('.folder-card').forEach(card => {
                    card.addEventListener('click', () => {
                        currentFolder = card.dataset.folder;
                        renderBooksGrid();
                    });
                });
                return;
            }
        }
    }
    
    if (!isFolderView) {
        if (!books || books.length === 0) {
            mainContainer.innerHTML = `<div class="empty-state">No books found in this category.</div>`;
            return;
        }
        
        mainContainer.innerHTML = `
            <div class="books-grid">
                ${books.map((book, index) => `
                    <div class="book-card" data-index="${index}" data-title="${escapeHtml(book.title)}" data-url="${book.url}">
                        <div class="book-cover">
                            <i class="fas fa-book"></i>
                        </div>
                        <div class="book-info">
                            <div class="book-title">${escapeHtml(book.title)}</div>
                            <div class="book-author">PDF Document</div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        
        document.querySelectorAll('.book-card').forEach(card => {
            card.addEventListener('click', (e) => {
                const url = card.dataset.url;
                const title = card.dataset.title;
                if (url && url !== "#") {
                    showBookDetails(title, url);
                } else {
                    alert("This book link will be available soon.");
                }
            });
        });
    }
}

function showBookDetails(title, url) {
    modalTitle.innerText = title;
    modalAuthorElem.innerHTML = `<i class="fas fa-file-pdf"></i> PDF Document`;
    modalCatValue.innerHTML = `<strong>Category:</strong> ${currentCategory}${currentFolder ? ` / ${currentFolder}` : ''}`;
    modalDescElem.innerHTML = `Click the button below to open this PDF document in Google Drive.`;
    modalLink.href = url;
    modalLink.target = "_blank";
    modal.classList.add("active");
}

function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}

// Refresh button
refreshBtn.addEventListener("click", () => {
    renderLibraryView();
});

// Modal close
closeModalBtn.addEventListener("click", () => modal.classList.remove("active"));
window.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("active");
});

// Profile button
profileBtn.addEventListener("click", () => {
    alert("👤 User Profile\n\nWelcome to Library Vista!\n\n• Total Books Available: " + getAllBooks().length + "\n• Categories: " + Object.keys(booksDB).length + "\n\nAccount features coming soon.");
});

// Initialize
loadSettings();
renderLibraryView();