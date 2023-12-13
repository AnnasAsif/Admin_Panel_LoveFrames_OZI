import React, {useState, useEffect} from 'react';
// import './styles.css'; // Import the CSS file

import { useLocation } from 'react-router-dom';
import Image from '../display/cards/Image';



const Effects = () => {
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
          var api = `http://161.97.164.28:8080/api/frames/seemore?bundleId=${id}`;
    
          try {
            const response = await fetch(api);
            if (response.ok) {
              const receivedData = await response.json();
              setData(receivedData.content);
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
      <h1>Effects Page</h1>
      <div style={{textAlign:'center',borderBottom:'solid 1px black'}}>
      {
        datacheck &&
        data.map(element => {
          return(
            <span style={{margin:'20px'}}>
              <Image
                  image={element.thumbnail}
                  width='150px'
              />
                                

            </span>

          )
        })
      }
        
      </div>
    </div>
  );
};

export default Effects;
