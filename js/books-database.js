// ========== COMPLETE BOOKS DATABASE ==========

const booksDB = {
    "BSIT": {
        "What is computer": [
            { title: "Comsci Software Design.pdf", url: "https://drive.google.com/file/d/1eSsstVDUrM-Jiv0TeuaMRzGqkcibhscw/view" },
            { title: "Introduction To Computers.pdf", url: "https://drive.google.com/file/d/1jp6xAGVARX9udX-J_pA0gDsD9YvUo1th/view" },
            { title: "Introductions To Computer II.pdf", url: "https://drive.google.com/file/d/1_d7YfXTMz3Si8AsETHBqArTam9OxUahC/view" },
            { title: "Introduction To Computers III.pdf", url: "https://drive.google.com/file/d/1PLVXTpeEyWqROnRazBAwHapsikmrnguc/view" }
        ],
        "Troubleshooting and maintenance": [
            { title: "Basic Trouble Shooting.pdf", url: "https://drive.google.com/file/d/1bi_aLYTPuYTDARukD4xLpOOC85i0evby/view" },
            { title: "Pc Assemble.pdf", url: "https://drive.google.com/file/d/1ilnbW1IkzE5yixOgbRPjFvyPtLptiM0c/view" }
        ],
        "Programming languages": [
            { title: "Python.pdf", url: "https://drive.google.com/file/d/1fUeANhNQUlfbXmxo8NGEIQw3zgEDhxi3/view" },
            { title: "Java.pdf", url: "https://drive.google.com/file/d/1r4WsDLBdQlW9ruF5G-eBc74R5sjcXJ0Q/view" },
            { title: "JavaScript.pdf", url: "https://drive.google.com/file/d/1lMvEiN4_bzeDkyoinqHfl0B5msriY9jQ/view" }
        ],
        "Networks": [
            { title: "Network Architecture.pdf", url: "https://drive.google.com/file/d/12SHTKOyO8xrv21WSf9N03_r6iiQLgZQ7/view" },
            { title: "Networks.pdf", url: "https://drive.google.com/file/d/19PwssOnUhav8yDOz72ZRWK6cdjhDDUHj/view" }
        ],
        "Security": [
            { title: "Ethical Hacking.pdf", url: "https://drive.google.com/file/d/16QDlMf1ufukwSzEJjQ8t5YDkZ7rHMiFy/view" },
            { title: "Cybercrime.pdf", url: "https://drive.google.com/file/d/1U55oWyVP85ggFcar1rS6gu9SkI4yxJFw/view" }
        ]
    },
    "BSIT (GenEd)": [
        { title: "Art Appreciation", url: "https://drive.google.com/file/d/1CbAlsokC_oVB5f-0ApcOitOneUwKFRCX/view" },
        { title: "Ethics", url: "https://drive.google.com/file/d/1VpDtZdMJowCCnnitubOm_EEQH07H6s0D/view" },
        { title: "Mathematics in Modern World", url: "https://drive.google.com/file/d/1nEzkp1dQ84iNnupUxMEXZY9hUWv1DdXT/view" },
        { title: "Purposive Communication", url: "https://drive.google.com/file/d/18P53z-WdCR585F9CBCRJbBjHopo9CJoS/view" },
        { title: "Reading in Philippine History", url: "https://drive.google.com/file/d/1Bz2TXQc-UhKee7qyc3EXeB7wRfKFjis-/view" }
    ],
    "Stocks, Trading, & Investment": [
        { title: "The Intelligent Investor", url: "https://drive.google.com/file/d/1feSpTWBRVMftELAt8n8oVGAYqsaTz9S3/view" },
        { title: "Trade Your Way to Financial Freedom", url: "https://drive.google.com/file/d/1Ic-SKf0KFICBhQDS88zSMfzGeO-BFU4y/view" },
        { title: "Technical Analysis of Financial Markets", url: "https://drive.google.com/file/d/1xVn3wBdghX1B8Jbt-bZ9ULF4MhDt9ARh/view" }
    ]
};

function getAllBooks() {
    const allBooks = [];
    for (const category in booksDB) {
        if (Array.isArray(booksDB[category])) {
            allBooks.push(...booksDB[category]);
        } else {
            for (const folder in booksDB[category]) {
                allBooks.push(...booksDB[category][folder]);
            }
        }
    }
    return allBooks;
}
booksDB["All Books"] = getAllBooks();

function hasFolders(category) {
    const data = booksDB[category];
    return data && typeof data === 'object' && !Array.isArray(data);
}

function hasDirectBooks(category) {
    return Array.isArray(booksDB[category]);
}

function getFolders(category) {
    const data = booksDB[category];
    if (data && typeof data === 'object' && !Array.isArray(data)) {
        return Object.keys(data);
    }
    return null;
}

function getBooksInFolder(category, folder) {
    const data = booksDB[category];
    if (data && data[folder] && Array.isArray(data[folder])) {
        return data[folder];
    }
    return [];
}