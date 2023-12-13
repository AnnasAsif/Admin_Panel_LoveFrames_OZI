import React, { useState, useEffect } from 'react';
import './../styles.css'; // Import the CSS file

import DisplayLoveData from './DisplayLoveData';
import LoadingAnimation from './../Animations/LoadingAnimation';

const LoveFrames = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [datacheck, setDataCheck] = useState(false)
    const [data, setData] = useState({});
    
    useEffect(() => {
        const loaddata = async () => {
          var api = "http://161.97.164.28:8080/api/frames/gettopframes?versionCode=29";
    
          try {
            const response = await fetch(api);
            if (response.ok) {
              const receivedData = await response.json();
              setData(receivedData);
              // console.log('Received======>', receivedData);
              // console.log('======>', data);
              if(data){
                  setIsLoading(false)
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
      {/* <h1>LoveFrames Page</h1> */}
      {
        isLoading && 
        <>
          <br/><br/><br/><br/>
          <br/><br/><br/><br/>
          <br/><br/><br/><br/>
          <LoadingAnimation/>
        </>
      }
      {
        datacheck && (
            <DisplayLoveData
              data={data}
            />

        )
      }

    </div>
  );
};

export default LoveFrames;
