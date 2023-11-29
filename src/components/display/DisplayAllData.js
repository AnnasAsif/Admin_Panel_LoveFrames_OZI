import React from 'react';
import './../styles.css'; // Import the CSS file

import ImageSlider from '../extraComponents/ImageSlider';


const DisplayAllData = (props) => {
    console.log('-------------------------->',props.data.top.content);
  return (
    <div>
      
      {props.data.topFrames && (
      <div>
        {
            <div style={{textAlign:'center',border:'solid 1px black'}}>
                <div>
                    <ImageSlider imageArray={props.data.topFrames.content} intervalTime={3000} /> {/* Change interval time as needed */}

                
                </div>
            </div>
        }
      </div>
    )}
      {props.data.top && (
      <div>
        {
            <div style={{textAlign:'center',borderBottom:'solid 1px black'}}>
                <h4>{props.data.top.title}</h4>
                <div>
                    {
                        props.data.top.content.map(result=>(
                            
                            <img 
                                className='imgShow' 
                                key={result.thumbnail} 
                                src={result.thumbnail} 
                                alt="Frames" 
                                // onClick={()=>{this.props.setTrigger(true); this.props.setPic(result.image)}}
                            ></img>
                            
                            ))
                            }

                
                </div>
            </div>
        }
      </div>
    )}
      
      {/* {props.data['effects'] && (
      <div>
        {
            <h4>{props.data['effects']['title']}</h4>
        }
      </div>
    )}
      {props.data['recommended'] && (
      <div>
        {
            <h4>{props.data['recommended']['title']}</h4>
        }
      </div>
    )}  */}

    </div>
  );
};

export default DisplayAllData;
