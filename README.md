# Tool Elec Website

This is the Tool Elec company website built with React and Vite, using Tailwind CSS for styling. The site includes both French and English versions, showcasing services, projects, and brands.

## Demo

Check out the live demo: https://tool-elec-demo-v2.netlify.app/

## Features

- Responsive website using React components
- Multilingual support (French and English)
- SEO-friendly meta tags with react-helmet-async
- Local business structured data (JSON-LD) included
- Images and assets optimized with alt attributes for accessibility
- Contact section with email and call-to-action buttons
- Trust and brand logo sections

## Technologies Used

- React
- Vite
- Tailwind CSS
- React Router
- React Icons
- react-helmet-async

## Installation

Clone the repository:

git clone https://github.com/yourusername/tool-elec.git
cd tool-elec

Install dependencies:

npm install

## Running Locally

Start the development server:

npm run dev

Your site will be available at http://localhost:5173/

## Building for Production

npm run build

This will create a dist folder ready for deployment.

Preview the production build locally:

npm run preview

## Folder Structure (Simplified)

src/
├─ Components/ # Reusable React components, french and english
├─ Images/ # Static images and logos
├─ Pages/ # Home, Error pages, etc.
├─ data.js # Arrays for projects, brands, trust logos
└─ main.jsx # Entry point

## Deployment

The site is deployed on Netlify. Push your changes to the repository and Netlify will automatically rebuild the demo site.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
