import React from 'react';
import './../styles.css'; // Import the CSS file

import ImageSlider from '../extraComponents/ImageSlider';
import Category from './cards/Category';
import Image from './cards/Image';

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
      {props.data.categories && (
      <div>
        {
            <div style={{textAlign:'center',borderBottom:'solid 1px black'}}>
                <h4>{props.data.categories.title}</h4>
                <div style={{display:'flex', flexDirection:'row'}}>
                    {
                        props.data.categories.content.map(result=>(
                            
                            <> 
                                <span style={{width:'20%', margin:10}}>
                                    <Category
                                        image={result.thumbnail}
                                        name={result.name}
                                    />
                                </span>                
                            </>
                            ))
                            }

                
                </div>
            </div>
        }
      </div>
    )}
      {props.data.effects && (
      <div>
        {
            <div style={{textAlign:'center',borderBottom:'solid 1px black'}}>
                <h4>{props.data.effects.title}</h4>
                <div style={{display:'flex', flexDirection:'row'}}>
                    {
                        props.data.effects.content.map(result=>(
                            
                            <> 
                                <span style={{width:'20%', margin:10}}>
                                    <Category
                                        image={result.image}
                                        name={result.name}
                                    />
                                </span>                
                            </>
                            ))
                            }

                
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
                <div style={{display:'flex', flexDirection:'row'}}>
                    {
                        props.data.top.content.map(result=>(
                            <span style={{width:'10%', margin:10}}>
                                <Image
                                    image={result.thumbnail}
                                />
                                

                            </span>
                            
                            ))
                            }

                
                </div>
            </div>
        }
      </div>
    )}


    </div>
  );
};

export default DisplayAllData;
