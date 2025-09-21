import React from "react";
import NavbarDemo from "./pages/navbardemo/NavbarDemo";
import ButtonsDemo from "./pages/buttonsdemo/ButtonsDemo";
import CardsDemo from "./pages/cardsdemo/CardsDemo";
import ModalsDemo from "./pages/modalsdemo/ModalsDemo";
import FancyButtonsDemo from "./pages/fancybuttonsdemo/FancyButtonsDemo";
import DemoFlipCard from "./pages/demoflipcard/DemoFlipCard";
import AlertsDemo from "./pages/alertsdemo/AlertsDemo";



import "./index.css";
import BadgeDemo from "./pages/badgesdemo/BadgeDemo";




function App() {
  return (
    <div className="app-wrapper">
      <h1>✨ My Custom React UI Library ✨</h1>

      <section>
        <h2>🌐 Navbar Showcase</h2>
        <NavbarDemo />
      </section>
      
    

      <section>
         <h2>🔘  Buttons Showcase</h2>
         <ButtonsDemo />
      </section>


      <section>
        <h2>🔘 Fancy Buttons Showcase</h2>
        <FancyButtonsDemo />
      </section>

      <section>
        <h2>Alerts Showcase</h2>
        <AlertsDemo />

      </section>


      <section>
         <h2>🏷️ Badges Showcase</h2>
         <BadgeDemo />
      </section>

      <section>
        <h2>🃏 Cards Showcase</h2>
        <CardsDemo />
      </section>

       <section>
        <h2>🃏 FlipCards Showcase</h2>
        <DemoFlipCard />
      </section>

      <section>
        <h2>🪟 Modals Showcase</h2>
        <ModalsDemo />
      </section>
    </div>
  );
}

export default App;
