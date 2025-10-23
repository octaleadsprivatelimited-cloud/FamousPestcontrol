# Pest Control Hyderabad - Professional Business Website

A modern, responsive, and professional business website for pest control services built with React and Vite. This website features a complete business structure with professional UI/UX design standards.

## 🌟 Features

### **Professional Business Design**
- **Full-screen hero sections** with professional messaging
- **Service categories** (Residential vs Commercial)
- **Company statistics** and achievements
- **Customer testimonials** with avatars and ratings
- **Professional contact forms** with service selection
- **404 error page** with helpful navigation

### **Technical Features**
- **Responsive Design**: Perfect on desktop, tablet, and mobile
- **React Router**: Single-page application with smooth navigation
- **Professional Forms**: Enhanced contact form with validation
- **Service Images**: Professional images with hover effects
- **Loading States**: Professional loading animations
- **SEO Optimized**: Meta tags, structured data, and Open Graph
- **Accessibility**: Focus states and keyboard navigation

### **Business Features**
- **Lead Generation**: Professional contact forms with service selection
- **WhatsApp Integration**: Direct WhatsApp contact
- **Service Areas**: Comprehensive coverage information
- **Team Information**: Professional team details
- **Company Story**: Mission, values, and company history

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   Visit: http://localhost:5173

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/              # Reusable components
│   ├── Header.jsx          # Professional header with navigation
│   ├── Footer.jsx          # Business footer with contact info
│   └── ServiceCard.jsx    # Enhanced service cards with images
├── pages/                  # Business pages
│   ├── Home.jsx           # Professional homepage
│   ├── Services.jsx       # Service categories and listings
│   ├── ServiceDetail.jsx  # Individual service details
│   ├── About.jsx          # Company information and team
│   ├── Contact.jsx        # Professional contact form
│   └── NotFound.jsx       # 404 error page
├── styles/                # Professional styling
│   ├── main.css          # Main business styles
│   └── responsive.css     # Mobile-responsive design
└── App.jsx               # Main application router
```

## 🎨 Design Features

### **Professional Business Layout**
- **Hero Sections**: Full-screen with professional messaging
- **Service Cards**: Images, icons, and hover effects
- **Testimonials**: Customer avatars and ratings
- **Contact Forms**: Professional validation and loading states
- **Statistics**: Company achievements and metrics

### **Modern UI/UX**
- **Card-based layouts** throughout
- **Professional color scheme** with business standards
- **Smooth animations** and transitions
- **Loading states** for better UX
- **Professional typography** and spacing

## ⚙️ Configuration

### **Contact Form Setup**
The contact form uses Formspree for professional form handling:

1. Create a Formspree account at [formspree.io](https://formspree.io)
2. Create a new form and get your form endpoint
3. Create a `.env` file in the root directory:
   ```
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
   ```

### **Customization Options**
- **Colors**: Update CSS variables in `src/styles/main.css`
- **Content**: Modify service information in page components
- **Contact Info**: Update phone/email in `Header.jsx` and `Footer.jsx`
- **Company Details**: Edit company information in `About.jsx`

## 📱 Responsive Design

### **Breakpoints**
- **Desktop**: 1024px+ (Full business layout)
- **Tablet**: 768px-1023px (Optimized grid layouts)
- **Mobile**: <768px (Single-column layout)

### **Mobile Features**
- **Touch-friendly** navigation
- **Optimized forms** for mobile input
- **Fast loading** with lazy images
- **Professional mobile** experience

## 🚀 Deployment

### **Static Hosting (Recommended)**
- **Netlify**: Connect GitHub for automatic deployments
- **Vercel**: Zero-configuration deployment
- **GitHub Pages**: Automated deployment with GitHub Actions

### **Traditional Hosting**
1. Run `npm run build`
2. Upload the `dist` folder to your web server
3. Configure your server for SPA routing

### **Environment Variables**
For production deployment, set up:
```
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

## 🔧 Technologies Used

- **React 18**: Modern React with hooks and functional components
- **React Router DOM**: Professional client-side routing
- **Vite**: Fast build tool and development server
- **CSS3**: Modern CSS with custom properties and animations
- **Formspree**: Professional form handling service
- **Unsplash**: Professional stock images

## 📊 Performance

- **Build Size**: ~205KB (gzipped: ~61KB)
- **CSS Size**: ~23KB (gzipped: ~4.5KB)
- **Fast Loading**: Optimized images and lazy loading
- **SEO Ready**: Meta tags and structured data included

## 🎯 Business Ready Features

- **Lead Generation**: Professional contact forms
- **Service Showcase**: Comprehensive service listings
- **Company Credibility**: About page with team and values
- **Contact Methods**: Phone, email, and WhatsApp integration
- **Professional Design**: Business-grade UI/UX standards

## 📞 Support

For technical support or customization requests, contact the development team.

---

**Built with ❤️ for professional pest control businesses**