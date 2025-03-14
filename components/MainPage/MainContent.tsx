import React from "react";
import Image from 'next/image';
import './MainContent.css'; // Import the CSS file

const MainContent = () => {
    return (
      <div className="container">
        <div className="text-container">
          <h1>Welcome to my Website</h1>
          <p>
            I am Edoardo Filippi, a bioinformatician working in the lab of Federico Marini, this is what I do, 
            
          </p>
        </div>
        <Image
          src="/images/image.jpg"
          className="image"
          alt="Myself"
          width={500} // specify the width
          height={500} // specify the height
        />
      </div>
    );
  };
  


export default MainContent;