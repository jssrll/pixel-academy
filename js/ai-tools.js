// ========== AI TOOLS PAGE ==========

const aiToolsList = [
    { name: "ChatGPT", url: "https://chat.openai.com", icon: "fab fa-chatgpt", iconClass: "chatgpt", desc: "OpenAI's language model" },
    { name: "Claude", url: "https://claude.ai", icon: "fas fa-comment-dots", iconClass: "claude", desc: "Anthropic's AI assistant" },
    { name: "Gemini", url: "https://gemini.google.com", icon: "fas fa-star", iconClass: "gemini", desc: "Google's AI model" },
    { name: "GitHub", url: "https://github.com", icon: "fab fa-github", iconClass: "github", desc: "Code repository" },
    { name: "Vercel", url: "https://vercel.com", icon: "fas fa-cloud", iconClass: "vercel", desc: "Deployment platform" },
    { name: "Netlify", url: "https://netlify.com", icon: "fas fa-globe", iconClass: "netlify", desc: "Static hosting" },
    { name: "Canva", url: "https://canva.com", icon: "fas fa-paint-brush", iconClass: "canva", desc: "Graphic design" },
    { name: "Figma", url: "https://figma.com", icon: "fab fa-figma", iconClass: "figma", desc: "Interface design" },
    { name: "Google Scholar", url: "https://scholar.google.com", icon: "fas fa-graduation-cap", iconClass: "scholar", desc: "Academic research" },
    { name: "Stack Overflow", url: "https://stackoverflow.com", icon: "fab fa-stack-overflow", iconClass: "stackoverflow", desc: "Programming Q&A" }
];

function showAIToolsPage() {
    return `
        <div class="ai-tools-container">
            <div class="ai-tools-header">
                <h1 class="ai-tools-title"><i class="fas fa-robot"></i> AI Tools & Resources</h1>
                <p class="ai-tools-subtitle">Access the latest AI assistants, academic resources, design tools, and development platforms</p>
            </div>
            <div class="ai-tools-grid">
                ${aiToolsList.map(tool => `
                    <div class="ai-tool-card" onclick="window.open('${tool.url}', '_blank')">
                        <div class="ai-tool-icon ${tool.iconClass}">
                            <i class="${tool.icon}"></i>
                        </div>
                        <div class="ai-tool-content">
                            <h3>${tool.name}</h3>
                            <p>${tool.desc}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}