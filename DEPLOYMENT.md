# 🚀 Deployment Guide - Vercel

## Quick Deploy (Recommended)

### Method 1: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect settings
5. Click "Deploy"
6. Done! 🎉

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

## 📁 Project Structure

```
Portfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # All styles
├── js/
│   └── main.js        # JavaScript functionality
├── vercel.json        # Vercel configuration
├── package.json       # Project metadata
├── README.md          # Project documentation
└── .gitignore         # Git ignore rules
```

## ✅ Pre-Deployment Checklist

- [x] All files are properly linked
- [x] CSS is in separate file
- [x] JavaScript is in separate file
- [x] Images are optimized (if any)
- [x] Meta tags are set
- [x] Responsive design tested
- [x] Cross-browser compatibility checked

## 🔧 Vercel Configuration

The `vercel.json` file is already configured:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.html",
      "use": "@vercel/static"
    }
  ]
}
```

## 🌐 Custom Domain (Optional)

After deployment:

1. Go to Project Settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## 📊 Performance Tips

- ✅ Minify CSS/JS for production
- ✅ Enable Vercel Analytics
- ✅ Use Vercel Edge Network
- ✅ Enable HTTPS (automatic)

## 🐛 Troubleshooting

### Issue: 404 Error

- Check if `index.html` is in root directory
- Verify `vercel.json` configuration

### Issue: CSS/JS Not Loading

- Check file paths are relative
- Verify files exist in correct directories

### Issue: Slow Loading

- Check file sizes
- Consider lazy loading images
- Enable caching

## 📱 Testing

Test your site on:

- Desktop browsers (Chrome, Firefox, Safari)
- Mobile devices (iOS, Android)
- Different screen sizes

## 🔄 Updates

To update your site:

```bash
# Make changes to your code
git add .
git commit -m "Update portfolio"
git push

# Vercel will auto-deploy!
```

## 📞 Support

- Vercel Docs: https://vercel.com/docs
- Vercel Community: https://github.com/vercel/vercel/discussions

---

**Ready to deploy?** Just push to GitHub and connect to Vercel! 🚀
