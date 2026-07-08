I'll split CONTRIBUTING.md into 6 parts for easy copying. Paste them sequentially into your CONTRIBUTING.md file.

---

Part 1 – Introduction, Getting Started, Ways to Contribute

```markdown
# Contributing to Subhash Kumar Portfolio

First off, thank you for considering contributing to the **Subhash Kumar – Resume + Portfolio + Personal Brand** website! 🎉

It's people like you that make this project better and help it grow. Whether you're fixing a bug, improving documentation, or suggesting a new feature – every contribution is valuable and appreciated.

---

## 📋 Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Ways to Contribute](#ways-to-contribute)
4. [Pull Request Process](#pull-request-process)
5. [Code Style Guidelines](#code-style-guidelines)
6. [Development Workflow](#development-workflow)
7. [Reporting Issues](#reporting-issues)
8. [License](#license)

---

## 🚀 Introduction

This project is a **production-ready personal website** built with HTML, CSS, and vanilla JavaScript. It's designed to be:

- **Simple** – No frameworks, no build tools.
- **Fast** – Lighthouse score 95+.
- **Accessible** – WCAG compliant.
- **Responsive** – Works on all devices.

We welcome contributions of all kinds – from typo fixes to new features!

---

## 🧭 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge).
- A code editor (VS Code, Sublime, etc.).
- Basic knowledge of HTML, CSS, and JavaScript.
- Git for version control (optional but recommended).

### Local Development

1. **Fork the repository**  
   Click the "Fork" button on GitHub to create your own copy.

2. **Clone your fork**
   ```bash
   git clone https://github.com/your-username/Portfolio-Resume.git
   cd Portfolio-Resume
```

3. Open in browser
      No build step required – just open index.html in your browser, or use a live server extension.
4. Make your changes
      Edit files, test locally, and commit your changes.
5. Push and create a Pull Request
      Push to your fork and open a PR against the main branch.

---

💡 Ways to Contribute

1. Report Bugs

· Check existing issues first.
· Use the issue template.
· Provide clear steps to reproduce.

2. Suggest Enhancements

· Explain the feature and its benefits.
· Provide examples or mockups if possible.

3. Improve Documentation

· Fix typos, clarify instructions, or add examples.
· Update README, CHANGELOG, or this file.

4. Fix Issues

· Look for issues labeled good first issue or help wanted.
· Comment on the issue to let others know you're working on it.

5. Optimize Performance

· Improve Lighthouse scores.
· Optimize images, CSS, or JavaScript.

6. Enhance Accessibility

· Add ARIA labels.
· Improve keyboard navigation.
· Ensure proper color contrast.

7. Update Content

· Suggest improvements to the copy.
· Update the resume or add new research/projects.

8. Add New Features

· New sections (blog, testimonials, etc.).
· New animations or interactions.
· Integration with external services.

```

---

### Part 2 – Pull Request Process

```markdown
## 🔄 Pull Request Process

We follow a **standard GitHub flow**. Here's how to submit a PR:

### Step 1: Fork & Branch

1. Fork the repository.
2. Create a new branch for your feature/fix:
   ```bash
   git checkout -b feature/your-feature-name
```

Or for bug fixes:

```bash
   git checkout -b fix/issue-description
```

Step 2: Make Changes

1. Make your changes in the appropriate files.
2. Test locally in multiple browsers and devices.
3. Ensure your changes don't break existing functionality.

Step 3: Commit & Push

1. Write a clear commit message:
   ```bash
   git commit -m "feat: add blog section to homepage"
   ```
   Or for fixes:
   ```bash
   git commit -m "fix: correct typo in hero heading"
   ```
2. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```

Step 4: Open a Pull Request

1. Go to the original repository on GitHub.
2. Click "New Pull Request".
3. Select your branch.
4. Fill in the PR template:
   · Title: Clear and descriptive.
   · Description: What you changed and why.
   · Related Issues: Reference any issues (e.g., Fixes #123).
   · Screenshots: If UI changes, include screenshots.

Step 5: Review & Merge

1. Maintainers will review your PR.
2. Address any feedback.
3. Once approved, a maintainer will merge your PR.

PR Checklist

Before submitting, ensure:

· Code follows style guidelines.
· Changes are tested locally.
· Documentation is updated (if needed).
· No console errors or warnings.
· Lighthouse score is 95+.
· Accessibility is maintained.
· Responsive design is working.

---

🎨 Code Style Guidelines

HTML

· Use semantic HTML5 elements (<header>, <nav>, <main>, <section>, <footer>).
· Use proper heading hierarchy (h1 → h2 → h3).
· Include alt attributes for images.
· Add aria-label for interactive elements.
· Use lowercase attribute names.
· Indent with 4 spaces.

Example:

```html
<section id="about" aria-labelledby="about-title">
    <h2 id="about-title">About Me</h2>
    <p>Content goes here.</p>
</section>
```

CSS

· Use CSS custom properties (variables) for colors, fonts, and spacing.
· Use BEM naming convention (optional but recommended).
· Group related properties together.
· Comment complex sections.
· Use flexbox and grid for layout.
· Avoid !important unless absolutely necessary.

Example:

```css
/* About Section */
.about-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 48px;
}

.about-card {
    background: var(--bg-card);
    border-radius: var(--radius);
    padding: 24px;
}
```

JavaScript

· Use const and let (avoid var).
· Use descriptive variable and function names.
· Use arrow functions where appropriate.
· Comment complex logic.
· Avoid inline JavaScript in HTML.
· Use async/await for promises.

Example:

```javascript
// Fetch and render data
async function fetchData() {
    try {
        const response = await fetch('./data/skills.json');
        const data = await response.json();
        renderSkills(data);
    } catch (error) {
        console.error('Error:', error);
    }
}
```

JSON

· Use double quotes (").
· Use consistent indentation (2 spaces).
· Keep keys in camelCase or snake_case.

Example:

```json
{
    "categories": [
        {
            "name": "Economics",
            "skills": ["Microeconomics", "Macroeconomics"]
        }
    ]
}
```

```

---

### Part 3 – Development Workflow & Coding Standards

```markdown
## ⚙️ Development Workflow

### 1. Feature Development

1. **Plan** – Understand what you want to build.
2. **Branch** – Create a feature branch.
3. **Code** – Write clean, commented code.
4. **Test** – Test in multiple browsers and screen sizes.
5. **Optimize** – Check Lighthouse scores.
6. **Document** – Update README or inline comments.
7. **Commit** – Write clear commit messages.
8. **PR** – Open a pull request.

### 2. Bug Fixes

1. **Reproduce** – Understand the bug.
2. **Branch** – Create a fix branch.
3. **Fix** – Write the fix.
4. **Test** – Ensure the bug is fixed and no new issues.
5. **Commit** – Write clear commit message.
6. **PR** – Open a pull request.

### 3. Documentation

1. **Identify** – What needs updating?
2. **Edit** – Make clear, concise changes.
3. **Preview** – Check formatting.
4. **Commit** – Write clear commit message.
5. **PR** – Open a pull request.

---

## 📁 File Naming Conventions

- **HTML**: `index.html`, `about.html` (lowercase).
- **CSS**: `style.css`, `navbar.css` (lowercase).
- **JavaScript**: `script.js`, `app.js` (lowercase).
- **Images**: `profile.webp`, `hero-bg.webp` (lowercase, hyphen-separated).
- **JSON**: `skills.json`, `projects.json` (lowercase).
- **Documents**: `Your_Resume.pdf` (PascalCase).

---

## 🧪 Testing

### Browser Testing

Test in at least:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Device Testing

Test on:
- Desktop (1920x1080, 1366x768)
- Tablet (768x1024, iPad)
- Mobile (375x812, 360x640)

### Accessibility Testing

- Use keyboard only (Tab, Enter, Space).
- Check focus states.
- Test with screen readers (NVDA, VoiceOver).
- Check color contrast.

### Performance Testing

- Run Lighthouse (Performance, Accessibility, SEO).
- Optimize images.
- Minimize CSS and JS.

---

## 📝 Commit Message Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```

<type>(<scope>): <description>

[optional body]

[optional footer(s)]

```

### Types

- `feat` – New feature.
- `fix` – Bug fix.
- `docs` – Documentation changes.
- `style` – Code style (formatting, missing semi-colons).
- `refactor` – Code refactor.
- `perf` – Performance improvements.
- `test` – Testing.
- `chore` – Build process, dependencies.

### Examples

```bash
feat(hero): add typing animation to hero headline
fix(navbar): correct mobile menu toggle behavior
docs(readme): update deployment instructions
perf(images): convert all images to WebP format
refactor(js): modularize data fetching functions
```

---

🔍 Code Review Guidelines

For Reviewers

1. Be Respectful – Be kind and constructive.
2. Be Thorough – Check functionality, performance, and accessibility.
3. Check the Checklist – Verify PR checklist is complete.
4. Test Locally – Pull the branch and test.
5. Ask Questions – Clarify if something is unclear.

For Contributors

1. Be Open – Accept feedback graciously.
2. Be Responsive – Address feedback promptly.
3. Be Clear – Explain your approach.
4. Keep It Small – Smaller PRs are easier to review.

---

🐛 Reporting Issues

Issue Template

When reporting an issue, please include:

```
**Description:**
Clear description of the issue.

**Steps to Reproduce:**
1. Go to '...'
2. Click on '...'
3. Scroll to '...'
4. See error

**Expected Behavior:**
What you expected to happen.

**Screenshots:**
If applicable, add screenshots.

**Environment:**
- OS: [e.g., Windows 10]
- Browser: [e.g., Chrome 91]
- Device: [e.g., iPhone 12]

**Additional Context:**
Any other information.
```

```

---

### Part 4 – Development Setup, Branching Strategy, Testing

```markdown
## 🛠️ Development Setup

### Recommended Tools

- **VS Code** with extensions:
  - Prettier – Code formatter.
  - ESLint – JavaScript linting.
  - Live Server – Local development server.
  - GitLens – Git history.
  - HTML CSS Support – Auto-completion.

### VS Code Settings

Add to `.vscode/settings.json`:
```json
{
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "editor.tabSize": 4,
    "editor.insertSpaces": true,
    "files.associations": {
        "*.html": "html",
        "*.css": "css",
        "*.js": "javascript",
        "*.json": "json"
    }
}
```

Git Hooks (Optional)

You can use pre-commit hooks to maintain code quality:

```bash
npm install --save-dev husky lint-staged
```

Add to package.json:

```json
{
    "lint-staged": {
        "*.{html,css,js}": ["prettier --write"]
    }
}
```

---

🌿 Branching Strategy

We follow a simple Git flow:

· main – Production-ready code.
· develop – Integration branch (optional for larger projects).
· feature/* – New features.
· fix/* – Bug fixes.
· docs/* – Documentation updates.
· chore/* – Maintenance tasks.

Branch Naming Examples

· feature/hero-typing-animation
· fix/navbar-responsive-bug
· docs/update-readme
· chore/optimize-images

---

📦 Adding New Features

Content Updates

If you're adding new content (research, projects, skills, etc.):

1. Update the relevant JSON file in /data/.
2. Ensure the structure matches existing data.
3. Add any images to /assets/images/ (in WebP format).
4. Test locally to ensure it renders correctly.

New Sections

If you're adding a new section:

1. Add the section to index.html with proper ID and ARIA attributes.
2. Add styles in style.css (or create a new CSS file).
3. Add any JavaScript functionality.
4. Update the navbar with a link to the new section.
5. Update the footer navigation.

New Animations

If you're adding animations:

1. Use CSS keyframes or transitions.
2. Respect prefers-reduced-motion.
3. Use Intersection Observer for scroll-triggered animations.
4. Keep animations subtle and performant.

---

🔒 Security Guidelines

· Never commit sensitive data (API keys, passwords).
· Use environment variables for sensitive data (if applicable).
· Sanitize user input (if adding forms).
· Keep dependencies updated.

---

📚 Documentation

· Keep README.md updated with project changes.
· Update CHANGELOG.md with your changes.
· Keep code comments clear and concise.
· Use JSDoc for functions (optional but helpful).

JSDoc Example

```javascript
/**
 * Renders skills into the skills container.
 * @param {Object} skillsData - The skills data object.
 * @param {Array} skillsData.categories - Array of skill categories.
 */
function renderSkills(skillsData) {
    // Implementation
}
```

---

✅ Pre-Pull Request Checklist

Before opening a Pull Request:

· Code follows style guidelines.
· No console errors or warnings.
· All links and buttons work.
· Dark/light mode works.
· Responsive design is working.
· Images are optimized.
· Lighthouse score is 95+.
· No accessibility issues.
· Documentation is updated.
· CHANGELOG is updated.
· No merge conflicts.

```

---

### Part 5 – Testing, Code Review, Issue Reporting

```markdown
## 🧪 Testing Guidelines

### Manual Testing Checklist

#### Functional Testing
- [ ] All internal links work (#about, #skills, etc.).
- [ ] Navbar scrolls smoothly to sections.
- [ ] Theme toggle changes dark/light mode.
- [ ] Typing animation works.
- [ ] Counters animate when scrolled into view.
- [ ] Timeline items reveal on scroll.
- [ ] Research details expand/collapse.
- [ ] Contact form validates input.
- [ ] Resume download works.
- [ ] Back-to-top button works.

#### Responsive Testing
- [ ] Works on desktop (1920x1080).
- [ ] Works on tablet (768x1024).
- [ ] Works on mobile (375x812).
- [ ] Navbar collapses to hamburger menu on mobile.
- [ ] All content is readable on all devices.

#### Accessibility Testing
- [ ] Can navigate using keyboard only (Tab).
- [ ] Focus states are visible.
- [ ] ARIA labels are present.
- [ ] Screen readers can read all content.
- [ ] Color contrast meets WCAG AA.

#### Performance Testing
- [ ] Lighthouse Performance score > 90.
- [ ] Lighthouse Accessibility score > 95.
- [ ] Lighthouse Best Practices score > 95.
- [ ] Lighthouse SEO score > 95.
- [ ] All images are lazy-loaded.
- [ ] No render-blocking resources.

#### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

---

## 👀 Code Review Process

### What Reviewers Look For

1. **Functionality** – Does it work as expected?
2. **Code Quality** – Is it clean and maintainable?
3. **Performance** – Does it impact performance?
4. **Accessibility** – Is it accessible?
5. **Responsiveness** – Does it work on all devices?
6. **Documentation** – Is it documented?

### Review Checklist

- [ ] Code is readable and well-commented.
- [ ] No console errors or warnings.
- [ ] No performance regressions.
- [ ] Accessibility is maintained.
- [ ] Responsive design is working.
- [ ] Dark/light mode is consistent.
- [ ] No merge conflicts.
- [ ] CHANGELOG is updated.

### How to Respond to Feedback

1. **Acknowledge** – Thank the reviewer.
2. **Clarify** – Ask questions if something is unclear.
3. **Act** – Make the requested changes.
4. **Respond** – Comment on the PR with updates.

---

## 📋 Issue Reporting

### Bug Report Template

```markdown
## Bug Report

**Description:**
A clear description of the bug.

**Steps to Reproduce:**
1. Go to '...'
2. Click on '...'
3. Scroll to '...'
4. See error

**Expected Behavior:**
What you expected to happen.

**Actual Behavior:**
What actually happened.

**Screenshots:**
If applicable, add screenshots.

**Environment:**
- OS: [e.g., Windows 10, macOS 12]
- Browser: [e.g., Chrome 91, Firefox 89]
- Device: [e.g., Desktop, iPhone 12]
- Screen Size: [e.g., 1920x1080]

**Additional Context:**
Any other information.
```

Feature Request Template

```markdown
## Feature Request

**Description:**
A clear description of the feature.

**Problem:**
What problem does this solve?

**Solution:**
How should this work?

**Benefits:**
Why is this important?

**Alternatives:**
Any alternative solutions?

**Additional Context:**
Any other information.
```

---

🤝 Community Guidelines

Code of Conduct

We expect all contributors to:

· Be respectful and inclusive.
· Provide constructive feedback.
· Accept feedback gracefully.
· Focus on the project's best interest.

Communication Channels

· Issues – For bugs and feature requests.
· Discussions – For questions and ideas.
· Pull Requests – For code contributions.

---

🔄 Releasing

Versioning

We follow Semantic Versioning:

· Major – Breaking changes.
· Minor – New features (backward compatible).
· Patch – Bug fixes (backward compatible).

Release Process

1. Update CHANGELOG.md with all changes.
2. Update version in package.json (if applicable).
3. Create a release branch: release/v1.0.0.
4. Test thoroughly.
5. Merge to main.
6. Create a GitHub Release with notes.

```

---

### Part 6 – License, Questions, Acknowledgement

```markdown
## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the **MIT License**.

See the [LICENSE](LICENSE) file for details.

---

## ❓ Questions?

If you have any questions or need help:

- **Open an Issue** – For bugs or feature requests.
- **Start a Discussion** – For questions and ideas.
- **Email** – [shubhasharma7410@gmail.com](mailto:shubhasharma7410@gmail.com)

We're here to help! 🙌

---

## 💖 Acknowledgement

Thank you for taking the time to contribute to this project! 🎉

Every contribution, no matter how small, makes a difference. We appreciate your effort and dedication.

### Contributors

See the [GitHub Contributors](https://github.com/subhash7y/Portfolio-Resume/graphs/contributors) page for a full list of contributors.

---

## 📝 Quick Reference

### Useful Commands

```bash
# Clone the repository
git clone https://github.com/subhash7y/Portfolio-Resume.git

# Create a new branch
git checkout -b feature/your-feature

# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "feat: add new feature"

# Push changes
git push origin feature/your-feature

# Open pull request
# (via GitHub UI)
```

Useful Resources

· HTML5 Documentation
· CSS Documentation
· JavaScript Documentation
· GitHub Docs
· Semantic Versioning
· Conventional Commits

---

🎯 Final Words

Thank you for being part of this project! Together, we're building something great. 🚀

"The best way to predict the future is to create it." – Peter Drucker

---

Made with ❤️ in New Delhi, India.

```

---

**Copy these six parts sequentially into your `CONTRIBUTING.md` file.** Each part builds on the previous one to form a complete, professional contribution guide.
