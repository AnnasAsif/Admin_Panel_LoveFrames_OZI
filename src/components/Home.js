import React, { useState, useEffect } from 'react';
import './styles.css'; // Import the CSS file

import DisplayAllData from './display/DisplayAllData';


const Home = () => {
    const [datacheck, setDataCheck] = useState(false)
    const [data, setData] = useState({});
    
    useEffect(() => {
        const loaddata = async () => {
          var api = "http://161.97.164.28:8080/api/frames/gettopframes";
    
          try {
            const response = await fetch(api);
            if (response.ok) {
              const receivedData = await response.json();
              setData(receivedData);
              console.log('Recieved======>', receivedData);
              console.log('======>', data);
              if(data){
                  setDataCheck(true)

              }
            //   alert("Data is loaded");
            } else {
              throw new Error('Network response was not ok.');
            }
          } catch (error) {
            console.error('There was a problem fetching the data:', error);
            // Handle error state or retry mechanism if needed
          }
        };
    
        loaddata();
      }, []); // Empty dependency array ensures this effect runs only once (on mount)
    
    
  return (
    <div>
      {/* <h1>Home Page</h1> */}
      {
        datacheck && (
            <DisplayAllData
              data={data}
            />

        )
      }

    </div>
  );
};

export default Home;
