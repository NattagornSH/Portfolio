# 🚀 Quick Start Guide

## 📦 What You Have

```
Portfolio/
├── index.html          ← Main page
├── css/style.css       ← All styles
├── js/main.js          ← All JavaScript
├── vercel.json         ← Vercel config
├── package.json        ← Project info
├── README.md           ← Documentation
├── DEPLOYMENT.md       ← Deploy guide
├── FEATURES.md         ← Feature list
└── .gitignore          ← Git ignore
```

## ⚡ Quick Deploy to Vercel (3 Steps)

### Step 1: Push to GitHub

```bash
cd /Users/jay/Desktop/Job-Application/Portfolio

# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Portfolio ready for deployment"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "New Project"
4. Import your portfolio repository
5. Click "Deploy"

### Step 3: Done! 🎉

Your portfolio is live at: `https://your-project.vercel.app`

## 🧪 Test Locally First

### Option 1: Python Server

```bash
cd /Users/jay/Desktop/Job-Application/Portfolio
python3 -m http.server 8000
```

Open: http://localhost:8000

### Option 2: VS Code Live Server

1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

### Option 3: Direct Open

Just double-click `index.html` (some features may not work)

## ✏️ Customize Your Portfolio

### 1. Update Personal Info

Edit `index.html`:

- Line ~60: Your name
- Line ~62: Your title/skills
- Line ~1660: Email
- Line ~1662: Phone
- Line ~1670: GitHub URL
- Line ~1690: LinkedIn URL

### 2. Update Projects

Edit `index.html` around line ~1450:

- Project names
- Descriptions
- Technologies
- GitHub/Demo links

### 3. Update Experience

Edit `index.html` around line ~1550:

- Job titles
- Companies
- Dates
- Descriptions

### 4. Change Colors

Edit `css/style.css` (lines 14-24):

```css
:root {
  --accent: #00e5a0; /* Change primary color */
  --accent2: #7c6fff; /* Change secondary color */
  --accent3: #ff6b9d; /* Change tertiary color */
}
```

### 5. Modify Animations

Edit `js/main.js`:

- Line ~40: Typing texts
- Line ~70: Particle count
- Line ~200: Animation speeds

## 🎨 Design Tips

### Add Your Photo

1. Add image to folder: `images/profile.jpg`
2. In `index.html`, add:

```html
<img src="images/profile.jpg" alt="Profile" class="profile-img" />
```

3. In `css/style.css`, add:

```css
.profile-img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 3px solid var(--accent);
}
```

### Add More Projects

Copy a project card in `index.html` and modify:

```html
<div class="project-card">
  <div class="project-top">
    <div class="project-name">
      <svg>...</svg>
      Your Project Name
    </div>
    <div class="project-tag">Category</div>
  </div>
  <p class="project-desc">Description...</p>
  <div class="project-tech">
    <!-- Tech pills -->
  </div>
  <div class="project-links">
    <!-- Links -->
  </div>
</div>
```

## 🐛 Common Issues

### Issue: Styles not loading

**Fix:** Check file paths in `index.html`:

```html
<link rel="stylesheet" href="css/style.css" />
```

### Issue: JavaScript not working

**Fix:** Check script tag at bottom of `index.html`:

```html
<script src="js/main.js"></script>
```

### Issue: Particles not showing

**Fix:** Make sure canvas element exists:

```html
<canvas id="particles-canvas"></canvas>
```

### Issue: Custom cursor not working

**Fix:** Add cursor elements:

```html
<div class="cursor"></div>
<div class="cursor-follower"></div>
```

## 📱 Mobile Testing

Test on:

- iPhone (Safari)
- Android (Chrome)
- iPad (Safari)
- Different screen sizes

Use Chrome DevTools:

1. Press F12
2. Click device icon
3. Select device
4. Test!

## 🔄 Update Workflow

```bash
# Make changes to files
# Test locally
# Commit changes
git add .
git commit -m "Update: description of changes"
git push

# Vercel auto-deploys! ✨
```

## 📊 Performance Check

After deployment, check:

- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

## 🎯 Next Steps

1. ✅ Test locally
2. ✅ Customize content
3. ✅ Push to GitHub
4. ✅ Deploy to Vercel
5. ✅ Share your portfolio!

## 💡 Pro Tips

- 🎨 Keep design consistent
- 📝 Update regularly
- 🔗 Add real project links
- 📊 Monitor analytics
- 🚀 Optimize images
- 💬 Get feedback

## 📞 Need Help?

- Check `FEATURES.md` for feature list
- Check `DEPLOYMENT.md` for deploy details
- Check `README.md` for overview

---

**Ready to launch?** 🚀

```bash
git add .
git commit -m "🚀 Ready for launch!"
git push
```

Good luck with your portfolio! 🎉
