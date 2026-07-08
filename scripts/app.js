// ============================================================
// APP – Main entry: fetches data, renders all sections
// ============================================================

const DATA_PATH = './data/';

// --------------------------------------------
// 1. FETCH ALL DATA
// --------------------------------------------
async function fetchData() {
    try {
        const [skills, experience, research, projects, education, certifications, achievements] = await Promise.all([
            fetch(`${DATA_PATH}skills.json`).then(r => r.json()),
            fetch(`${DATA_PATH}experience.json`).then(r => r.json()),
            fetch(`${DATA_PATH}research.json`).then(r => r.json()),
            fetch(`${DATA_PATH}projects.json`).then(r => r.json()),
            fetch(`${DATA_PATH}education.json`).then(r => r.json()),
            fetch(`${DATA_PATH}certifications.json`).then(r => r.json()),
            fetch(`${DATA_PATH}achievements.json`).then(r => r.json())
        ]);
        return { skills, experience, research, projects, education, certifications, achievements };
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

// --------------------------------------------
// 2. RENDER: SKILLS
// --------------------------------------------
function renderSkills(skillsData) {
    const container = document.getElementById('skillsList');
    if (!container || !skillsData) return;

    let html = '';
    skillsData.categories.forEach(cat => {
        html += `
            <div class="skill-category">
                <h3>${cat.name}</h3>
                <div class="skill-tags">
                    ${cat.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

// --------------------------------------------
// 3. RENDER: EXPERIENCE
// --------------------------------------------
function renderExperience(expData) {
    const container = document.getElementById('experienceTimeline');
    if (!container || !expData) return;

    let html = '';
    expData.forEach(item => {
        html += `
            <div class="timeline-item">
                <div class="company">${item.company}</div>
                <div class="role">${item.role}</div>
                <div class="period">${item.period}</div>
                <p class="description">${item.description}</p>
                ${item.type ? `<span class="type-badge">${item.type}</span>` : ''}
            </div>
        `;
    });
    container.innerHTML = html;

    // Re-init timeline
    if (window.revealTimeline) setTimeout(window.revealTimeline, 200);
}

// --------------------------------------------
// 4. RENDER: RESEARCH
// --------------------------------------------
function renderResearch(researchData) {
    const container = document.getElementById('researchList');
    if (!container || !researchData) return;

    let html = '';
    researchData.forEach((item, index) => {
        html += `
            <div class="research-card">
                <h3>${item.title}</h3>
                <p class="abstract">${item.abstract}</p>
                <div class="research-meta">
                    <span>🔬 ${item.methodology}</span>
                    <span>📊 ${item.dataset}</span>
                </div>
                <div class="research-skills">
                    ${item.skills.map(s => `<span class="skill">${s}</span>`).join('')}
                </div>
                <button class="btn btn-outline btn-sm toggle-details" data-index="${index}">Read More</button>
                <div class="research-details" id="details-${index}">
                    <h4>Objectives</h4>
                    <ul>${item.objectives.map(o => `<li>${o}</li>`).join('')}</ul>
                    <h4>Results</h4>
                    <p>${item.results}</p>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;

    // Toggle details
    document.querySelectorAll('.toggle-details').forEach(btn => {
        btn.addEventListener('click', function () {
            const index = this.dataset.index;
            const details = document.getElementById(`details-${index}`);
            if (details) {
                details.classList.toggle('open');
                this.textContent = details.classList.contains('open') ? 'Read Less' : 'Read More';
            }
        });
    });
}

// --------------------------------------------
// 5. RENDER: PROJECTS
// --------------------------------------------
function renderProjects(projectsData) {
    const container = document.getElementById('projectsList');
    if (!container || !projectsData) return;

    let html = '';
    projectsData.forEach(project => {
        const imageSrc = `./assets/images/projects/${project.image}`;
        html += `
            <div class="project-card">
                <img src="${imageSrc}" alt="${project.title}" class="project-image" loading="lazy" onerror="this.src='./assets/images/placeholder.webp'">
                <div class="project-body">
                    <h3>${project.title}</h3>
                    <p class="project-desc">${project.description}</p>
                    <div class="project-tech">
                        ${project.technology.map(t => `<span>${t}</span>`).join('')}
                    </div>
                    <div class="project-actions">
                        ${project.github ? `<a href="${project.github}" class="btn btn-outline btn-sm" target="_blank">GitHub</a>` : ''}
                        ${project.live ? `<a href="${project.live}" class="btn btn-outline btn-sm" target="_blank">Live Demo</a>` : ''}
                        <button class="btn btn-outline btn-sm case-study" data-title="${project.title}">Case Study</button>
                    </div>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;

    // Case study placeholder
    document.querySelectorAll('.case-study').forEach(btn => {
        btn.addEventListener('click', function () {
            alert(`Case study for "${this.dataset.title}" coming soon.`);
        });
    });
}

// --------------------------------------------
// 6. RENDER: EDUCATION
// --------------------------------------------
function renderEducation(eduData) {
    const container = document.getElementById('educationList');
    if (!container || !eduData) return;

    let html = '';
    eduData.forEach(item => {
        html += `
            <div class="education-item">
                <div class="edu-left">
                    <h3>${item.institution}</h3>
                    <div class="degree">${item.degree}</div>
                    ${item.coursework ? `<div class="coursework">📘 ${item.coursework.join(' • ')}</div>` : ''}
                </div>
                <div class="edu-right">
                    <div class="year">${item.year}</div>
                    ${item.cgpa ? `<div class="score">CGPA: ${item.cgpa}</div>` : ''}
                    ${item.percentage ? `<div class="score">${item.percentage}</div>` : ''}
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

// --------------------------------------------
// 7. RENDER: CERTIFICATIONS
// --------------------------------------------
function renderCertifications(certData) {
    const container = document.getElementById('certificationsContent');
    if (!container || !certData) return;

    let html = '';
    // Completed
    html += `
        <div class="cert-card">
            <h3>✅ Completed</h3>
            <ul class="cert-list">
                ${certData.completed.map(c => `<li>${c}</li>`).join('')}
            </ul>
        </div>
    `;
    // In Progress
    html += `
        <div class="cert-card">
            <h3>📖 In Progress</h3>
            <ul class="cert-list">
                ${certData.in_progress.map(c => `<li>${c}</li>`).join('')}
            </ul>
        </div>
    `;
    // Roadmap
    html += `
        <div class="cert-card">
            <h3>🚀 Learning Roadmap</h3>
            <ul class="cert-list">
                ${certData.learning_roadmap.map(c => `<li>${c}</li>`).join('')}
            </ul>
        </div>
    `;
    container.innerHTML = html;
}

// --------------------------------------------
// 8. RENDER: ACHIEVEMENTS
// --------------------------------------------
function renderAchievements(achData) {
    const countersContainer = document.getElementById('achievementsCounters');
    const listContainer = document.getElementById('achievementsList');
    if (!countersContainer || !achData) return;

    // Counters
    const categories = ['research', 'projects', 'learning', 'leadership', 'business_development'];
    const labels = {
        research: 'Research',
        projects: 'Projects',
        learning: 'Courses',
        leadership: 'Leadership',
        business_development: 'Business'
    };
    let countersHtml = '';
    categories.forEach(cat => {
        const count = achData[cat] ? achData[cat].length : 0;
        countersHtml += `
            <div class="achievement-counter">
                <span class="number" data-target="${count}">0</span>
                <span class="label">${labels[cat] || cat}</span>
            </div>
        `;
    });
    countersContainer.innerHTML = countersHtml;

    // Detailed list
    let listHtml = '';
    Object.keys(achData).forEach(key => {
        const items = achData[key];
        if (Array.isArray(items)) {
            items.forEach(item => {
                const emoji = {
                    research: '🔬',
                    projects: '🚀',
                    learning: '📚',
                    leadership: '👥',
                    business_development: '💼'
                }[key] || '🏆';
                listHtml += `
                    <div class="achievement-item">
                        <span class="emoji">${emoji}</span>
                        ${item}
                    </div>
                `;
            });
        }
    });
    listContainer.innerHTML = listHtml;

    // Re-run counter animation
    if (window.animateCounters) setTimeout(window.animateCounters, 200);
}

// --------------------------------------------
// 9. RENDER: ABOUT (static content)
// --------------------------------------------
function renderAbout() {
    const container = document.getElementById('aboutContent');
    if (!container) return;

    container.innerHTML = `
        <p class="about-story">
            <strong>Subhash Kumar</strong> is an Economics (Honours) student at the University of Delhi with a strong foundation in analytical research, econometrics, and business analytics. 
            His journey began in commerce and evolved into a passion for data-driven decision-making, blending economic theory with real-world applications.
        </p>
        <p class="about-story">
            With experience in <strong>research, business development, and AI automation</strong>, Subhash is committed to simplifying complex problems and delivering actionable insights. 
            He is actively exploring the intersection of <strong>consumer behaviour, policy, and technology</strong> to drive meaningful impact.
        </p>
        <p class="about-story">
            <strong>Current focus:</strong> Building expertise in econometric modeling, AI-powered analytics, and consulting. 
            <strong>Future goal:</strong> To become a trusted advisor at the nexus of economics, data, and strategy.
        </p>
    `;

    // Stats
    const statsContainer = document.getElementById('aboutStats');
    if (statsContainer) {
        statsContainer.innerHTML = `
            <div class="stat-card"><span class="stat-number">3+</span><span class="stat-label">Research Projects</span></div>
            <div class="stat-card"><span class="stat-number">5+</span><span class="stat-label">Projects</span></div>
            <div class="stat-card"><span class="stat-number">2</span><span class="stat-label">Internships</span></div>
            <div class="stat-card"><span class="stat-number">200+</span><span class="stat-label">Business Network</span></div>
        `;
    }
}

// --------------------------------------------
// 10. INITIALIZE EVERYTHING
// --------------------------------------------
document.addEventListener('DOMContentLoaded', async () => {
    // Render About (static)
    renderAbout();

    // Fetch and render dynamic data
    const data = await fetchData();
    if (data) {
        renderSkills(data.skills);
        renderExperience(data.experience);
        renderResearch(data.research);
        renderProjects(data.projects);
        renderEducation(data.education);
        renderCertifications(data.certifications);
        renderAchievements(data.achievements);
    } else {
        // Fallback error messages
        document.querySelectorAll('#skillsList, #experienceTimeline, #researchList, #projectsList, #educationList, #certificationsContent, #achievementsCounters')
            .forEach(el => {
                if (el) el.innerHTML = '<p style="color: var(--text-muted);">⚠️ Failed to load data. Please refresh.</p>';
            });
    }

    // Re-run scroll reveal after dynamic content
    if (window.scrollReveal) setTimeout(window.scrollReveal, 300);
});
