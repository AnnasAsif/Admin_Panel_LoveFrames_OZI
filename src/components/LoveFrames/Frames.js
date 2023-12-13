import React, {useState, useEffect} from 'react';
// import './styles.css'; // Import the CSS file

import { useLocation } from 'react-router-dom';
import Image from '../display/cards/Image';



const Frames = () => {
  // Inside your component
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id'); // This will give you '5ff5a1d93bbf9374326985de'
  // console.log('ID============================>', id);

  const [datacheck, setDataCheck] = useState(false)
  const [data, setData] = useState({});
    
    useEffect(() => {
        const loaddata = async () => {
          console.log('========================',id);
          var api = `http://161.97.164.28:9010/api/frames/loadCategoryData?categoryId=${id}`;
    
          try {
            const response = await fetch(api);
            if (response.ok) {
              const receivedData = await response.json();
              setData(receivedData.data);
              // console.log('Received======>', receivedData);
              // console.log('======>', data);
              if(data){
                console.log('>>>>>>>>>>>>>>>>',data);
                setDataCheck(true)
                console.log('>>>>>>>>>>>>>>>>',datacheck);

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
      <h1>Frames Page</h1>
      <div style={{textAlign:'center',borderBottom:'solid 1px black'}}>
      {
        datacheck &&
        data.map(element => {
          return(
            <div style={{textAlign:'center',borderBottom:'solid 1px black'}}>
              <h4>{element.bundle}</h4>
              <div style={{display:'flex', overflowX: 'auto', width: '98.7vw' }}>
                    {
                        element.frames.map(result=>(
                          <>
                            <span style={{margin:'20px'}}>
                                <Image
                                    image={result.thumbnail}
                                    width='200px'
                                />
                                

                            </span>
                          </>
                            
                            ))
                            }

                
                </div>
            </div>

          )
        })
      }
        
      </div>
    </div>
  );
};

export default Frames;
