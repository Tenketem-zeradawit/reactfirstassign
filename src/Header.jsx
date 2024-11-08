
import React from "react";
import "./App.css"
function Header() {
    return (
      <header>
        <div className="between">
        <h1>Company Name</h1>
        
        <nav>
            <ul>
                
            <li><a href="#"> Home</a></li>
            <li><a href="#"> Feature</a></li>
            <li><a href="#"> Enterprise</a></li>
            <li><a href="#"> Support</a></li>
            </ul>
        </nav>
        </div>
       <hr />
      </header>
    );
  }
  
  export default Header