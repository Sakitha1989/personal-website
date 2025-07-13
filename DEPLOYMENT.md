# 🚀 GitHub Pages Deployment Guide

Follow these steps to deploy your personal website to GitHub Pages.

## 📋 Prerequisites

- GitHub account
- Git installed on your computer
- Your website files organized (✅ Already done!)

## 🔧 Step-by-Step Deployment

### 1. Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click **"New repository"** (green button)
3. Repository name options:
   - **Option A**: `personal-website` (custom domain)
   - **Option B**: `[your-username].github.io` (main GitHub Pages site)
4. Set repository to **Public**
5. ✅ **DO NOT** initialize with README (we have our own)
6. Click **"Create repository"**

### 2. Initialize Git and Push Code

Open terminal/command prompt in your project folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Personal website with research portfolio"

# Add GitHub repository as remote (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Push to GitHub
git push -u origin main
```

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select **"Deploy from a branch"**
5. Select **"main"** branch
6. Select **"/ (root)"** folder
7. Click **"Save"**

### 4. Access Your Website

- Your site will be available at:
  - `https://YOUR_USERNAME.github.io/REPO_NAME/` (if repo name is different)
  - `https://YOUR_USERNAME.github.io/` (if repo name is YOUR_USERNAME.github.io)

- **Note**: It may take 5-10 minutes for the site to be live after first deployment.

## 🔄 Updating Your Website

To update your website:

```bash
# Make your changes to files
# Then add, commit, and push:

git add .
git commit -m "Update: description of your changes"
git push origin main
```

Changes will automatically deploy to GitHub Pages within a few minutes.

## 🌟 Pro Tips

### Custom Domain (Optional)
1. Buy a domain (e.g., sakithaariyarathne.com)
2. In repository settings → Pages → Custom domain
3. Add your domain name
4. Configure DNS with your domain provider

### HTTPS & Security
- GitHub Pages automatically provides HTTPS
- Enable "Enforce HTTPS" in Pages settings

### Performance
- Your site is already optimized with:
  - ✅ Compressed images
  - ✅ Minified CSS/JS via CDN
  - ✅ Responsive design
  - ✅ Fast loading times

## 📁 Current File Structure
```
personal-website/
├── assets/
│   ├── css/style.css
│   ├── js/script.js
│   ├── images/Profile_pic.png
│   └── documents/
│       ├── Sakitha_Resume.pdf
│       └── [research papers].pdf
├── index.html (homepage)
├── research.html
├── projects.html
├── [project-specific].html
└── README.md
```

## 🐛 Troubleshooting

**Site not loading?**
- Check repository is public
- Verify GitHub Pages source is set to `main` branch
- Wait 10 minutes for propagation

**Images not showing?**
- Ensure file paths use forward slashes: `assets/images/Profile_pic.png`
- Check file names match exactly (case sensitive)

**Updates not appearing?**
- Check git push was successful
- GitHub Pages can take 5-10 minutes to update
- Try hard refresh (Ctrl+F5 / Cmd+Shift+R)

## 📞 Support

If you encounter issues:
1. Check GitHub Pages documentation
2. Verify all file paths are correct
3. Ensure repository is public
4. Contact GitHub Support if needed

---

🎉 **Congratulations!** Your professional website will be live on the internet for potential employers, collaborators, and the academic community to discover your work.

*Your website showcases your Data Science expertise at BHG Financial and your impressive PhD research portfolio.*