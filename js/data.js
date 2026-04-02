// ========================================
// GOOGLE SHEETS CONFIGURATION
// ========================================
// Replace this URL with your Google Apps Script Web App URL
const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbyntv1eJat-nWJKAPP0X8pXZGNS2UIwDGW1-hYFf32VdrG5uD27rhTzPiI4yC6h0_7DaA/exec";

// ========================================
// BOOKS DATABASE
// ========================================
const booksDB = {
    "BSIT": [
        { title: "Introduction to Programming", url: "#", category: "Programming" },
        { title: "Data Structures and Algorithms", url: "#", category: "Programming" },
        { title: "Computer Networks", url: "#", category: "Networking" },
        { title: "Database Management Systems", url: "#", category: "Database" },
        { title: "Software Engineering", url: "#", category: "Engineering" }
    ],
    "BAELS": [
        { title: "English Literature", url: "#", category: "Literature" },
        { title: "Creative Writing", url: "#", category: "Writing" }
    ],
    "BAPsychology": [
        { title: "Introduction to Psychology", url: "#", category: "Psychology" },
        { title: "Cognitive Psychology", url: "#", category: "Psychology" }
    ],
    "BSTM": [
        { title: "Tourism Management", url: "#", category: "Tourism" },
        { title: "Hospitality Management", url: "#", category: "Hospitality" }
    ],
    "BSHM": [
        { title: "Food and Beverage Management", url: "#", category: "Hospitality" },
        { title: "Housekeeping Management", url: "#", category: "Hospitality" }
    ],
    "BSCrim": [
        { title: "Criminology", url: "#", category: "Criminology" },
        { title: "Forensic Science", url: "#", category: "Forensics" }
    ],
    "BSED": [
        { title: "Educational Psychology", url: "#", category: "Education" },
        { title: "Curriculum Development", url: "#", category: "Education" }
    ]
};

// General Education Books
const genEdBooks = [
    { title: "Art Appreciation", url: "#", category: "GenEd" },
    { title: "Ethics", url: "#", category: "GenEd" },
    { title: "Purposive Communication", url: "#", category: "GenEd" },
    { title: "Mathematics in the Modern World", url: "#", category: "GenEd" },
    { title: "Science, Technology and Society", url: "#", category: "GenEd" }
];