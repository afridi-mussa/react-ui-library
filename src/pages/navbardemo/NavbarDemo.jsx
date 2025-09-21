import React from "react";
import Navbar1 from "../../components/navbar/Navbar1";
import Navbar2 from "../../components/navbar/Navbar2";
import Navbar3 from "../../components/navbar/Navbar3";

const NavbarDemo = () => {
  return (
    <div className="navbar-demo">
      
      

      <div style={{ margin: "20px 0" }}>
        
        <Navbar1 />
      </div>

      <div style={{ margin: "20px 0" }}>
       
        <Navbar2 />
      </div>

      <div style={{ margin: "20px 0" }}>
        
        <Navbar3 />
      </div>
    </div>
  );
};

export default NavbarDemo;
