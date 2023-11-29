import React, { useState, useEffect } from 'react';
import './sliderstyle.css';

const ImageSlider = ({ imageArray, intervalTime }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === imageArray.length - 1 ? 0 : prevIndex + 1
      );
    }, intervalTime);

    return () => clearInterval(interval);
  }, [imageArray, intervalTime]);

  return (
    <div className="slider-container"> {/* Apply styles through class */}
      <div className="slider-content"> {/* Apply styles through class */}
        <img src={imageArray[currentImageIndex].image} alt={`Slide ${currentImageIndex + 1}`} />
        <div className="slider-overlay">
          <div className="slider-bar">
            <img src={imageArray[currentImageIndex].icon} alt="Icon" className="icon" />
            <span className="text">
                <p style={{textAlign:'left', marginBottom:0, marginTop:0, fontWeight:'bold', fontSize:24}}>
                {imageArray[currentImageIndex].name}
                </p>
                <p style={{textAlign:'left', marginTop:0, fontSize:14}}>
                {imageArray[currentImageIndex].description}
                </p>
            </span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ImageSlider;
