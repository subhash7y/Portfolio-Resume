// ============================================================
// PART 1: LOADER, THEME, NAVBAR
// ============================================================

// --------------------------------------------
// 1. LOADER
// --------------------------------------------
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hide');
        }, 800);
    }
});

// --------------------------------------------
// 2. THEME TOGGLE (dark/light)
// --------------------------------------------
const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle?.querySelector('.theme-icon');

// Check saved theme or system preference
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', initialTheme);
if (themeIcon) {
    themeIcon.textContent = initialTheme === 'dark' ? '☀️' : '🌙';
}

themeToggle?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    if (themeIcon) {
        themeIcon.textContent = next === 'dark' ? '☀️' : '🌙';
    }
});

// --------------------------------------------
// 3. NAVBAR: Mobile toggle
// --------------------------------------------
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle?.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', isOpen);
});

// Close nav on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks?.classList.remove('open');
        navToggle?.classList.remove('active');
        navToggle?.setAttribute('aria-expanded', 'false');
    });
});

// --------------------------------------------
// 4. NAVBAR: Scroll shadow & active link
// --------------------------------------------
const nav = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    // Shadow
    if (window.scrollY > 20) {
        nav?.classList.add('scrolled');
    } else {
        nav?.classList.remove('scrolled');
    }

    // Active link
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// --------------------------------------------
// 5. SMOOTH SCROLL for nav links (already handled by CSS scroll-behavior)
// --------------------------------------------
// No extra JS needed – CSS scroll-behavior handles it.
// ============================================================
// PART 2: TYPING, COUNTERS, TIMELINE, SCROLL REVEAL
// ============================================================

// --------------------------------------------
// 1. TYPING EFFECT (Hero)
// --------------------------------------------
const typingElement = document.getElementById('typingText');
if (typingElement) {
    const phrases = [
        'Economist',
        'Researcher',
        'Business Analyst',
        'AI Enthusiast',
        'Consultant'
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 80;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];
        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 40;
        } else {
            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 80;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 1500; // pause before deleting
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 400;
        }

        setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();
}

// --------------------------------------------
// 2. COUNTER ANIMATION (Achievements)
// --------------------------------------------
function animateCounters() {
    const counters = document.querySelectorAll('.achievement-counter .number');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target') || '0', 10);
                const duration = 1500;
                const startTime = performance.now();

                function updateCounter(currentTime) {
                    const elapsed = currentTime - startTime;
                    const progress = Math.min(elapsed / duration, 1);
                    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
                    const currentValue = Math.floor(eased * target);
                    counter.textContent = currentValue.toLocaleString();
                    if (progress < 1) {
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target.toLocaleString();
                    }
                }
                requestAnimationFrame(updateCounter);
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

// --------------------------------------------
// 3. TIMELINE REVEAL (Experience items)
// --------------------------------------------
function revealTimeline() {
    const items = document.querySelectorAll('.timeline-item');
    if (!items.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    items.forEach(item => observer.observe(item));
}

// --------------------------------------------
// 4. SCROLL REVEAL (general fade-in)
// --------------------------------------------
function scrollReveal() {
    const elements = document.querySelectorAll(
        '.research-card, .project-card, .stat-card, .skill-category, .cert-card, .achievement-item, .education-item, .contact-item'
    );
    if (!elements.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize all scroll-based animations after DOM ready
document.addEventListener('DOMContentLoaded', () => {
    animateCounters();
    revealTimeline();
    scrollReveal();
});
// ============================================================
// PART 3: DATA FETCHING & RENDER FUNCTIONS (Skills, Experience, Research, Projects)
// ============================================================

// Base path for data (adjust if needed)
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
// 3. RENDER: EXPERIENCE (Timeline)
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
    // Re-init timeline observer after adding items
    revealTimeline();
}

// --------------------------------------------
// 4. RENDER: RESEARCH (with expandable details)
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
// ============================================================
// PART 4: EDUCATION, CERTIFICATIONS, ACHIEVEMENTS, CONTACT, INIT
// ============================================================

// --------------------------------------------
// 1. RENDER: EDUCATION
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
// 2. RENDER: CERTIFICATIONS
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
// 3. RENDER: ACHIEVEMENTS (Counters + List)
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
        if (key === 'business_development') key = 'business_development'; // keep as is
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

    // Re-run counter animation after insertion
    animateCounters();
}

// --------------------------------------------
// 4. RENDER: ABOUT (static content)
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

    // Stats (static, but could be made dynamic)
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
// 5. CONTACT FORM HANDLING
// --------------------------------------------
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        // Simple validation
        const name = document.getElementById('contactName').value.trim();
        const email = document.getElementById('contactEmail').value.trim();
        const message = document.getElementById('contactMessage').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }

        // For demo, just show success
        alert('Thank you for your message! I\'ll get back to you soon.');
        form.reset();
        // Optionally, you can send to Formspree or Netlify
        // this.submit(); // if using netlify action
    });
}

// --------------------------------------------
// 6. BACK TO TOP BUTTON
// --------------------------------------------
function initBackToTop() {
    const btn = document.getElementById('backToTop');
    if (!btn) return;

    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// --------------------------------------------
// 7. INITIALIZE EVERYTHING
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
        // Fallback: show error messages
        document.querySelectorAll('#skillsList, #experienceTimeline, #researchList, #projectsList, #educationList, #certificationsContent, #achievementsCounters')
            .forEach(el => {
                if (el) el.innerHTML = '<p style="color: var(--text-muted);">⚠️ Failed to load data. Please refresh.</p>';
            });
    }

    // Contact form and back to top
    initContactForm();
    initBackToTop();

    // Force a re-check for scroll reveal after dynamic content
    setTimeout(scrollReveal, 300);
});
