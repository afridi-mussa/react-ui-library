# 🌟 React Components Showcase

A modern React project showcasing **reusable UI components** such as Navbars, Buttons, Fancy Buttons, Alerts, Badges, Cards, FlipCards, and Modals — all styled with gradients, hover effects, and smooth CSS animations.  
This project is designed to demonstrate **component-based development** in React with custom CSS.



---

## 📖 Project Description
This project is a **collection of styled UI components** built using **React.js**.  
It demonstrates how to create reusable components with consistent styling and functionality.  

### ✅ Components Included
- **Navbar (3 styles)** → Gradient, Underline hover, Glassmorphism  
- **Buttons** → Standard buttons with hover effects  
- **Fancy Buttons** → Gradient & animated hover styles  
- **Alerts** → Success, Warning, Error, Info (includes dismissable alert)  
- **Badges** → Gradient, Primary, Success, Warning, Error  
- **Cards** → Simple cards with text & CTA button  
- **FlipCards** → Animated card flip effect  
- **Modal** → Terms of Service / Login modal with header, body, and footer  

---

## ⚙ Installation Instructions

1. **Clone the repository**
   ```bash
   git clone <your-repo-link>
Navigate into the project folder

bash
Copy code
cd react-components-showcase
Install dependencies

bash
Copy code
npm install
Start the development server

bash
Copy code
npm run dev
Open in browser → http://localhost:5173

🚀 Usage Guidelines
Import the components you want to use:

jsx
Copy code
import NavbarDemo from "./components/NavbarDemo";
import ButtonDemo from "./components/ButtonDemo";
import FancyButtonDemo from "./components/FancyButtonDemo";
import AlertDemo from "./components/AlertDemo";
import BadgeDemo from "./components/BadgeDemo";
import CardDemo from "./components/CardDemo";
import FlipCardDemo from "./components/FlipCardDemo";
import ModalDemo from "./components/ModalDemo";
Use them inside App.jsx:

jsx
Copy code
function App() {
  return (
    <div>
      <NavbarDemo />
      <ButtonDemo />
      <FancyButtonDemo />
      <AlertDemo />
      <BadgeDemo />
      <CardDemo />
      <FlipCardDemo />
      <ModalDemo />
    </div>
  );
}
export default App;
Customize styles in App.css or component-specific CSS files.