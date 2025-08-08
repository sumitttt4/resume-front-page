# Resume Builder Frontend

A modern, responsive React application for building professional resumes with multiple templates and user-friendly interface.

## 🚀 Features

### Core Functionality
- **Homepage**: Two main options - "Add Details" and "Upload Resume"
- **Resume Options**: Three methods to create resume:
  - Upload existing resume (PDF, DOC, DOCX)
  - Type manually from scratch
  - Import from LinkedIn profile
- **Template Selection**: Choose from multiple template types:
  - Normal templates (fully customizable)
  - ATS-friendly templates (optimized for Applicant Tracking Systems)

### User Experience
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Modern UI**: Clean, professional design with smooth animations
- **Login System**: Mock authentication for private data storage
- **Data Persistence**: 
  - Logged-in users: Data saved privately in localStorage
  - Guest users: Data cached temporarily in sessionStorage

## 🛠️ Technology Stack

- **React 18** - Modern React with hooks
- **React Router DOM** - Client-side routing
- **Vite** - Fast build tool and development server
- **CSS3** - Custom CSS with CSS variables and modern layouts
- **SVG Icons** - Lightweight, scalable icons

## 📁 Project Structure

```
src/
├── components/          # Reusable components
├── pages/              # Page components
│   ├── HomePage.jsx    # Landing page with main options
│   ├── ResumeOptions.jsx # Three resume creation methods
│   └── TemplateSelection.jsx # Template chooser with login
├── styles/             # CSS files
│   ├── index.css       # Global styles and variables
│   ├── App.css         # App-wide components
│   ├── HomePage.css    # Homepage styles
│   ├── ResumeOptions.css # Resume options styles
│   └── TemplateSelection.css # Template selection styles
├── App.jsx             # Main app component with routing
└── main.jsx            # Application entry point
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#2563eb)
- **Secondary**: Slate (#64748b)
- **Accent**: Amber (#f59e0b)
- **Success**: Emerald (#10b981)
- **Grays**: Full gray scale from 50-900

### Typography
- **Font**: System font stack for optimal performance
- **Sizes**: Responsive scale from xs (0.75rem) to 4xl (2.25rem)
- **Weights**: 400, 500, 600, 700, 800

### Components
- **Cards**: Elevated design with hover effects
- **Buttons**: Primary, secondary, and specialized variants
- **Modals**: Centered overlays with smooth animations
- **Badges**: Status indicators and labels

## 🚦 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone/Download** the project files
2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open browser** to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔄 User Flow

1. **Homepage** → User chooses "Add Details" or "Upload Resume"
2. **Resume Options** → User selects from 3 methods:
   - Upload existing resume file
   - Type information manually  
   - Connect LinkedIn profile
3. **Template Selection** → User picks from:
   - Normal templates (editable, various designs)
   - ATS templates (optimized, login required for private save)
4. **Authentication** → For ATS templates:
   - Login for private data storage
   - Continue as guest for temporary cache
5. **Continue** → Proceed to resume builder (placeholder)

## 🎯 Key Features Implemented

### Navigation & Routing
- ✅ React Router with programmatic navigation
- ✅ Back button functionality on all pages
- ✅ State passing between routes

### Data Management  
- ✅ Mock authentication system
- ✅ Local storage for logged-in users
- ✅ Session storage for guest users
- ✅ Form state management

### UI/UX
- ✅ Responsive grid layouts
- ✅ Hover effects and animations
- ✅ Loading states and feedback
- ✅ Modal overlays
- ✅ File upload handling

### Template System
- ✅ Multiple template categories
- ✅ Template preview placeholders
- ✅ Selection indicators
- ✅ Feature badges (Editable, ATS-Optimized, etc.)

## 🔧 Customization

### Adding New Templates
1. Add template object to `templates` array in `TemplateSelection.jsx`
2. Include: id, name, type, description, editable flag
3. Add corresponding preview SVG or image

### Styling Changes
- Modify CSS variables in `src/styles/index.css` for global changes
- Component-specific styles in respective CSS files
- Responsive breakpoints: 768px (tablet), 480px (mobile)

### Adding New Pages
1. Create component in `src/pages/`
2. Add route in `App.jsx`
3. Create corresponding CSS file
4. Update navigation links

## 📱 Responsive Design

- **Desktop**: Full grid layouts, hover effects
- **Tablet**: Adjusted grids, maintained functionality  
- **Mobile**: Single column, optimized touch targets
- **Breakpoints**: 768px, 480px

## 🔐 Authentication Flow

- **Mock Implementation**: Simulates real auth system
- **Login**: Generates mock JWT token
- **Persistence**: Checks localStorage for existing token
- **State Management**: React state for login status
- **Conditional UI**: Different experiences for logged/guest users

## 🚀 Deployment Ready

The application is production-ready with:
- Optimized build process
- Clean, maintainable code
- Performance-focused components
- Cross-browser compatibility
- Mobile responsiveness

## 📄 License

This project is available for use and modification.

---

**Built with ❤️ using React and modern web technologies**