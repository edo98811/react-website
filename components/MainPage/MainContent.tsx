import React from "react";
import './MainContent.css'; // Import the CSS file

const MainContent = () => {
    return (
      <div className="container">
        <div className="text-container">
          <h1>Wlcome to my Website</h1>
          <p>
            I am Edoardo Filippi, a bioinformatician working in the lab of Federico Marini, this is what I do, 
            
          </p>
        </div>
  
        <div className="image-container">
          <img
            src="./src/test.jpg" // Replace with your image URL
            alt="profile"
            className="image"
          />
        </div>
      </div>
    );
  };
  


export default MainContent;