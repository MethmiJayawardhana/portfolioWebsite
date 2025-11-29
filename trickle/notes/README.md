# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, showcasing skills, projects, and contact information.

## Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Smooth Animations**: Fade-in effects and smooth scroll behavior
- **Sticky Navigation**: Fixed navigation bar with mobile hamburger menu
- **Hero Section**: Eye-catching landing section with gradient background
- **About Section**: Personal bio with education and interests
- **Skills Section**: Visual skill bars showing proficiency levels
- **Projects Section**: Showcase of 4 projects with images and descriptions
- **Contact Form**: Functional contact form with email, phone, and location
- **Social Links**: LinkedIn, GitHub, and Instagram integration
- **Back to Top Button**: Appears when scrolling down for easy navigation
- **Modern UI**: Clean design using Inter font and blue color scheme

## Sections

1. **Home/Hero**: Name, subtitle, call-to-action buttons, social links
2. **About**: Bio, profile photo, education, interests, location
3. **Skills**: 6 skills with progress bars (HTML/CSS, JavaScript, React, UI/UX, Node.js, Git)
4. **Projects**: 4 project cards with images, descriptions, and view buttons
5. **Contact**: Contact information and working form layout
6. **Footer**: Copyright notice and social media links

## Technologies

- React 18
- TailwindCSS
- Lucide Icons
- Google Fonts (Inter)
- Unsplash Images

## Color Scheme

- Primary: Blue (#3B82F6)
- Secondary: Light Blue (#F0F9FF)
- Text Dark: Gray (#1F2937)
- Text Light: Gray (#6B7280)

## Project Structure

```
/app
  ├── index.html
  ├── app.js
  ├── components/
  │   ├── Navbar.js
  │   ├── Hero.js
  │   ├── About.js
  │   ├── Skills.js
  │   ├── Projects.js
  │   ├── Contact.js
  │   ├── Footer.js
  │   └── BackToTop.js
  └── trickle/
      ├── assets/
      │   ├── profile-photo.json
      │   ├── project-ecommerce.json
      │   ├── project-task-app.json
      │   ├── project-weather.json
      │   └── project-portfolio.json
      └── notes/
          └── README.md
```

## Customization

To customize this portfolio:

1. **Personal Information**: Update name, bio, and contact details in respective components
2. **Skills**: Modify the skills array in Skills.js with your own skills and proficiency levels
3. **Projects**: Replace project data in Projects.js with your own projects
4. **Images**: Update image URLs in assets folder
5. **Colors**: Modify CSS variables in index.html style section
6. **Social Links**: Update social media links in Hero.js and Footer.js

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- All images are sourced from Unsplash
- Icons provided by Lucide
- Font: Inter from Google Fonts
- Responsive breakpoints: 768px (tablet), 1024px (desktop)
