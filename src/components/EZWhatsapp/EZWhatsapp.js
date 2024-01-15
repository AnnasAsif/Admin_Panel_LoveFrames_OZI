import React, { useState, useEffect } from 'react';
import './ezwhatsapp.css'

const EZWhatsapp = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categoryData, setCategoryData] = useState([]);

  const loadallvideos = async (tag) => {
    try {
      const api = `http://161.97.164.28:9007/api/ezwhatsapp/getData?tag=${tag}`;
      const response = await fetch(api);
      if (response.ok) {
        const receivedData = await response.json();
        if (receivedData.data.length > 0) {
          setCategoryData(receivedData.data);
        }
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('There was a problem fetching the data:', error);
      // Handle error state or retry mechanism if needed
    }
  };

  // Simulating category data
  useEffect(() => {
    const loaddata = async () => {
        var api = "http://161.97.164.28:9009/ezwhatsappTags";
  
        try {
          const response = await fetch(api);
          if (response.ok) {
            const receivedData = await response.json();
            if(receivedData.data.length>0){
                setCategories(receivedData.data);
                loadallvideos('All');
            }

          } else {
            throw new Error('Network response was not ok.');
          }
        } catch (error) {
          console.error('There was a problem fetching the data:', error);
          // Handle error state or retry mechanism if needed
        }
      };
  
      loaddata();
  }, []);

  // Simulating category data based on selection
  useEffect(() => {
    // Simulating fetching data based on selected category\
    
  
      loadallvideos(selectedCategory)

  }, [selectedCategory]);
  useEffect(() => {
    // Simulating fetching data based on selected category\
    
  
      console.log('Category Data: ============>',categoryData)

  }, [categoryData]);

  const handleCategoryClick = (category) => {
    console.log(category);
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className="categories-container">
        {
            categories.length>0 && 
            categories.map((category, index) => (
              <button
                key={index}
                className={`category-button ${selectedCategory === category.name ? 'active' : ''}`}
                onClick={() => handleCategoryClick(category.name)}
              >
                <img src={category.image} alt={category.name} className="category-image" />
              </button>
        ))}
      </div>
      <div className="video-container">
        <h2>Videos for {selectedCategory}</h2>
        <div className="video-list">
          {categoryData.map((videoUrl, index) => (
            <div key={index} className="video-wrapper">
              <video controls width="320" height="180" className="video-element">
                <source src={videoUrl.url} type="video/mp4" />
                Video playback is not supported by your browser.
              </video>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EZWhatsapp;
