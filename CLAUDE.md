# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a professional portfolio website for Sakitha Ariyarathne showcasing data science expertise, academic research, and industry projects. Built as a static website with modern web technologies and hosted on GitHub Pages.

**Live Site:** https://sakitha1989.github.io/personal-website/

## Architecture & Technology Stack

### Frontend Technologies
- **HTML5** - Semantic structure across 6 main pages
- **Bootstrap 5.3.3** - Responsive framework via CDN
- **Custom CSS** - Modern styling with gradients, glass morphism effects
- **Vanilla JavaScript** - Scroll animations and interactive features
- **Bootstrap Icons 1.11.1** - Icon library

### Deployment
- **GitHub Pages** - Automatic deployment from master branch
- **Git** - Version control with documented development workflow
- Changes to master branch auto-deploy within 5-10 minutes

## Key File Structure

```
├── index.html              # Homepage with hero, bio, current work sections
├── projects.html           # Industry & academic projects showcase  
├── research.html           # Research publications and academic work
├── [project]-project.html  # Individual project detail pages (3 files)
├── assets/
│   ├── css/style.css      # 1300+ lines of custom styling
│   ├── js/script.js       # Scroll animations, interactive effects
│   ├── images/Profile_pic.png  # Profile photo
│   └── documents/Sakitha_Resume.pdf
└── DEVELOPMENT_NOTES.md    # Comprehensive development documentation
```

## Common Development Commands

Since this is a static website with no build process, there are no package.json scripts. Development workflow:

```bash
# View changes before committing
git status
git diff

# Add and commit changes
git add .
git commit -m "Description of changes"

# Deploy to live site
git push origin master
```

## Design System & Styling

### Color Scheme
- Primary gradient: `#4285f4` to `#1e3c72` (professional blue)
- Background variations: white, `#f8f9fa`, `#e9ecef`
- Success green: `#28a745` for metrics/badges
- Text hierarchy: `#2c3e50` (headings), `#495057` (body), `#6c757d` (muted)

### Component Patterns
- **Cards:** `.card` with `.project-icon-header` for consistent project layouts
- **Tech Tags:** `.tech-tag` with gradient backgrounds and hover effects
- **Metrics:** `.metric-card` for displaying impact numbers
- **Hero Section:** `.hero-section` with animated background and glass morphism cards

### CSS Organization
The 1300+ line stylesheet is organized by:
1. Global styles and animations (lines 1-57)
2. Hero section styles (lines 58-260) 
3. Bio section components (lines 261-392)
4. Project card systems (lines 393-577)
5. Research page styling (lines 610-887)
6. Interactive elements (lines 888-1231)
7. Mobile responsive (lines 1232-1366)

## Content Management

### Adding New Projects
Projects are manually added to `projects.html` in two sections:

**Industry Projects:** Cards with impact metrics, technology tags
**Academic Projects:** Research-focused with publication links

Use this template for new project cards:
```html
<div class="col-lg-4 mb-4">
    <div class="card h-100">
        <div class="project-icon-header bg-primary">
            <i class="bi bi-[icon-name] text-white"></i>
        </div>
        <div class="card-body">
            <h5 class="card-title">Project Name</h5>
            <div class="impact-highlight mb-2">
                <span class="badge bg-success">Impact metric</span>
            </div>
            <p class="card-text">Description...</p>
            <div class="tech-tags mb-3">
                <span class="tech-tag">Technology</span>
            </div>
        </div>
    </div>
</div>
```

### Updating Content
- **Resume:** Replace `assets/documents/Sakitha_Resume.pdf`
- **Profile Photo:** Replace `assets/images/Profile_pic.png` (400x400px recommended)
- **Contact Info:** Update footer links in all HTML files
- **Bio Content:** Main content in `index.html` hero and bio sections

## JavaScript Features

The site includes:
- Smooth scrolling navigation (`script.js:1-10`)
- Intersection Observer scroll animations (`script.js:12-37`)
- Staggered animations for hero highlights (`script.js:39-50`)
- Parallax effect for hero background (`script.js:66-74`)
- Enhanced hover effects for tech tags (`script.js:76-89`)

## Development Workflow

### Automated Documentation
The repository has an established workflow where `DEVELOPMENT_NOTES.md` is automatically updated with each change, documenting:
- What was changed and why
- Files modified with specific line numbers
- New features or fixes added
- Git commit history

### Mobile Responsive Design
Comprehensive mobile styles start at line 1232 in `style.css`:
- Hero section adapts from 2-column to stacked layout
- Project cards become full-width on mobile
- Bio cards grid changes to single column
- Text sizing and padding adjustments

### Performance Considerations
- CDN resources for Bootstrap and icons
- Minimal JavaScript (90 lines)
- Optimized images and clean CSS
- No build process required - direct file editing

## Git Workflow

The repository maintains a clean commit history with descriptive messages. Each commit automatically deploys to the live site via GitHub Pages. Recent commits include comprehensive documentation updates and layout optimizations.

### Branch Structure
- `master` - Production branch (auto-deploys to GitHub Pages)
- All development happens directly on master due to simple static site nature

This documentation should enable efficient development while maintaining the professional, modern aesthetic of the portfolio website.

## Claude Code Workflow Process

### Initial Setup
- Create backup/branch before starting any work
- Ensure tasks/todo.md file is in project root directory

### Step 1: Analysis & Planning
1. Think through the problem thoroughly
2. Read the codebase for relevant files and understand current architecture
3. Write a comprehensive plan to tasks/todo.md including:
   - List of todo items with checkboxes
   - Brief assumptions/constraints section
   - Any dependencies between tasks
   - Estimated complexity level for each task

### Step 2: Plan Verification
- Check in with me to verify the plan before beginning work
- Discuss any concerns or suggested modifications
- Confirm scope boundaries and priorities

### Step 3: Implementation
- Begin working on todo items in order
- Mark tasks as complete as you go: `- [x] Completed task`
- For each step, provide high-level explanation of changes made
- Test each completed task before moving to the next one
- Commit changes after each completed task (if using version control)

### Step 4: Error Handling
- If any task becomes more complex than anticipated, pause and discuss alternatives
- If additional related improvements are discovered, note them for future consideration rather than expanding current scope
- Communicate any assumptions made during implementation

### Step 5: Documentation
- Add a review section to todo.md with:
  - Summary of changes made
  - Any deviations from original plan
  - Lessons learned or recommendations for future work
  - Outstanding items or follow-up tasks

### Core Principles
- **Simplicity First**: Every change should impact as little code as possible
- **Incremental Progress**: Small, focused changes over large refactors
- **Clear Communication**: High-level explanations without overwhelming detail
- **Quality Assurance**: Test and verify each change before proceeding
- **Documentation**: Maintain clear records of what was done and why

### Communication Preferences
- Provide concise, high-level explanations at each step
- Notify me of any significant assumptions or decisions
- Pause for guidance if encountering unexpected complexity
- Focus on what changed, not implementation details