# A1 Adorners Website

## Configuration Management

All website content is now centrally managed through the configuration file located at:
```
assets/js/config.js
```

### How to Update Content

To update any text, phone numbers, email, or other content across the entire website:

1. Open `assets/js/config.js`
2. Modify the relevant values in the configuration object
3. Save the file

The changes will automatically appear across all pages without needing to edit individual HTML files.

### Key Configuration Sections:

- **Business Information**: Business name, tagline
- **Contact Information**: Phone, WhatsApp, email, address, Google Maps link
- **Navigation**: Menu items and URLs
- **Home Page Content**: Hero section, welcome text, services preview
- **Services**: All service descriptions and icons
- **Gallery**: Image descriptions and titles
- **About Page**: Story, mission, vision, features
- **Call-to-Action Messages**: All CTA text across pages
- **Footer**: Copyright text

## Recommended Image Sizes

### Event Banner (banner-placeholder.jpg)
- **Recommended Size**: 1920x1080 pixels (16:9 aspect ratio)
- **Minimum Size**: 1200x675 pixels
- **Format**: JPG or PNG
- **File Size**: Under 500KB for web optimization
- **Usage**: Home page hero section

### Gallery Images (placeholder1.jpg through placeholder5.jpg)
- **Recommended Size**: 800x600 pixels (4:3 aspect ratio)
- **Minimum Size**: 600x450 pixels
- **Format**: JPG or PNG
- **File Size**: Under 300KB each for web optimization
- **Usage**: Gallery page cards (will be cropped to 250px height with object-fit: cover)

### Image Optimization Tips:
1. **Compress images** before uploading to reduce loading times
2. **Use descriptive filenames** for better SEO
3. **Maintain consistent aspect ratios** for better visual alignment
4. **Consider retina displays** - you can use 2x the recommended sizes for crisp display on high-DPI screens

### Adding New Images:
1. Add images to the `assets/images/` folder
2. Update the gallery configuration in `assets/js/config.js`
3. Add new entries to the `gallery` array with image path, title, and description

## File Structure
```
├── index.html
├── services.html
├── gallery.html
├── about.html
├── contact.html
├── assets/
│   ├── css/
│   │   └── style.css (legacy, no longer used)
│   ├── images/
│   │   ├── banner-placeholder.jpg
│   │   ├── placeholder1.jpg
│   │   ├── placeholder2.jpg
│   │   ├── placeholder3.jpg
│   │   ├── placeholder4.jpg
│   │   └── placeholder5.jpg
│   └── js/
│       ├── config.js (Main configuration file)
│       └── utils.js (Utility functions)
```

## Deployment

This website is ready for GitHub Pages deployment. Simply:
1. Upload all files to your GitHub repository
2. Enable GitHub Pages in repository settings
3. Your website will be live!

No build process required - the website uses CDN resources for Bootstrap and manages content through client-side JavaScript.
