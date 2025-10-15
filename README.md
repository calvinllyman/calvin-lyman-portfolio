# Calvin Lyman - Director of Product Design Portfolio

A professional portfolio website showcasing leadership experience and design excellence in product design roles at Paycom and beyond.

## 🎯 Portfolio Highlights

### Three Comprehensive Case Studies:
1. **🤝 Paycom Collaboration Framework** - Cross-functional process design and stakeholder alignment
2. **👥 Leadership Development at Scale** - Team building and individualized coaching across 5 Team Leads  
3. **🛡️ Crisis Leadership Excellence** - Change management during organizational restructuring

### 💼 Professional Features:
- **Director-Level Positioning**: Showcases strategic thinking, people development, and crisis leadership
- **Measurable Impact**: Concrete business outcomes and team results throughout
- **Modern Design**: Professional, responsive layout with smooth animations
- **Resume Integration**: Downloadable PDF resume with seamless brand integration

## 🚀 Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development  
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ ([Download here](https://nodejs.org/))

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd director-product-design-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📸 Adding Professional Images

Replace placeholder images in `/public/images/`:
- `professional-headshot.jpg` - About section hero image
- `case-study-paycom.jpg` - Paycom framework visual
- `case-study-leadership.jpg` - Leadership development image  
- `case-study-crisis.jpg` - Crisis leadership visual

## 🚀 Deployment

### Recommended: Vercel (One-Click Deploy)
1. Push code to GitHub repository
2. Visit [vercel.com](https://vercel.com) and import your GitHub repo
3. Deploy with default settings - Vercel auto-detects Next.js
4. Custom domain setup available in dashboard

### Alternative: Netlify
1. Run `npm run build` to create production build
2. Upload `/out` folder to [netlify.com](https://netlify.com)
3. Configure custom domain in settings

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Homepage
└── components/         # React components
    ├── Hero.tsx        # Hero section
    ├── About.tsx       # About section
    ├── CaseStudies.tsx # Case studies showcase
    ├── Experience.tsx  # Professional experience
    └── Contact.tsx     # Contact information
```

## Customization

To customize this portfolio for your own use:

1. Update the content in each component file
2. Replace placeholder images with your own professional photos
3. Add your actual case study details
4. Update contact information
5. Modify colors and styling in Tailwind configuration

## Deployment

This portfolio can be easily deployed on:

- **Vercel** (recommended for Next.js)
- **Netlify**
- **GitHub Pages**
- **AWS Amplify**

For Vercel deployment:
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with one click

## License

This project is open source and available under the MIT License.