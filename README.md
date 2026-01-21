# Developer Portfolio

A modern, responsive portfolio website built with React, Node.js, Express, and MongoDB. Showcase your projects, skills, and get in touch with potential clients or employers.

## Features

- 🎨 **Modern Design** - Beautiful gradient backgrounds and smooth animations
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- ⚡ **Fast Performance** - Built with Vite for optimal load times
- 🔄 **Smooth Navigation** - Smooth scroll navigation between sections
- 📧 **Contact Form** - Integrated MongoDB backend for storing contact messages
- 🎯 **Project Showcase** - Display your best projects with technologies used
- 🛠️ **Skills Section** - Organize and display your technical skills
- 💾 **Database Integration** - MongoDB integration for form submissions

## Project Structure

```
joewebdev/
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── styles/              # CSS files
│   │   ├── index.css        # Global styles
│   │   ├── App.css
│   │   ├── Header.css
│   │   ├── Hero.css
│   │   ├── Projects.css
│   │   ├── Skills.css
│   │   ├── Contact.css
│   │   └── Footer.css
│   ├── App.jsx              # Main App component
│   └── main.jsx             # React DOM render
├── server/
│   ├── models/              # MongoDB models
│   │   ├── Contact.js
│   │   └── Project.js
│   ├── routes/              # API routes
│   │   └── contacts.js
│   └── server.js            # Express server
├── index.html               # HTML entry point
├── vite.config.js           # Vite configuration
├── .env                     # Environment variables
├── package.json
└── README.md
```

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB (local or cloud instance)

### Setup Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Configure Environment Variables**
   
   Update `.env` file with your MongoDB connection string:
   ```
   MONGODB_URI=mongodb://localhost:27017/portfolio
   NODE_ENV=development
   ```

3. **Start the Development Server**
   ```bash
   npm start
   ```

   This will run both the React frontend (Vite) and Express backend concurrently.

   - Frontend: http://localhost:5173
   - Backend: http://localhost:5000

## Development Commands

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run server` - Start Express backend server
- `npm start` - Run frontend and backend together

## Customization

### Update Portfolio Content

1. **Hero Section** - Edit [src/components/Hero.jsx](src/components/Hero.jsx)
2. **Projects** - Modify the projects array in [src/components/Projects.jsx](src/components/Projects.jsx)
3. **Skills** - Update skill categories in [src/components/Skills.jsx](src/components/Skills.jsx)
4. **Styling** - Customize colors in [src/styles/index.css](src/styles/index.css) (CSS variables)

### Add Social Links

Update the social links section in [src/components/Contact.jsx](src/components/Contact.jsx) with your actual URLs.

### Connect MongoDB

1. **Local MongoDB**: Ensure MongoDB is running on your system
2. **MongoDB Atlas**: Use your cloud connection string in `.env`

## API Endpoints

### POST /api/contact
Send a contact form message
- **Body**: `{ name: string, email: string, message: string }`
- **Response**: `{ success: boolean, message: string, data: object }`

### GET /api/contact
Retrieve all contact messages
- **Response**: `{ success: boolean, data: array }`

## Tech Stack

### Frontend
- **React** 19.2.3 - UI library
- **Vite** 5.x - Build tool
- **CSS** - Custom styling with CSS variables
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime
- **Express** 5.x - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB ODM
- **CORS** - Cross-origin resource sharing

## Deployment

### Frontend (Vite)
```bash
npm run build
```
Deploy the `dist/` folder to Vercel, Netlify, or GitHub Pages.

### Backend (Node.js)
Deploy to Heroku, Railway, Render, or any Node.js hosting service with MongoDB connection.

## Future Enhancements

- [ ] Admin dashboard for managing projects
- [ ] Blog section
- [ ] Dark mode toggle
- [ ] Email notifications for contact forms
- [ ] Project filtering by technology
- [ ] SEO optimization
- [ ] Analytics integration

## License

This project is open source and available under the MIT License.

## Contact

For questions or suggestions, feel free to reach out through the contact form in the portfolio or directly on GitHub.

---

**Happy coding!** 🚀
