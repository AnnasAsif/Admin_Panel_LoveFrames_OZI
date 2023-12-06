import React from 'react';
import './../styles.css'; // Import the CSS file

import ImageSlider from '../extraComponents/ImageSlider';
import Category from './cards/Category';
import Image from './cards/Image';
import FrameList from './cards/FrameList';

const DisplayAllData = (props) => {
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
                <h4><u>{props.data.categories.title}</u></h4>
                <div style={{display: 'flex', overflowX: 'auto', width: '98.7vw' }}>
                    {
                        props.data.categories.content.map(result=>(
                            
                            <> 
                                <span style={{margin:'5px'}}>
                                    <Category
                                        image={result.thumbnail}
                                        name={result.name}
                                        id={result._id}
                                        width='250px'
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
                <h4><u>{props.data.effects.title}</u></h4>
                <div style={{display: 'flex', overflowX: 'auto', width: '98.7vw' }}>
                    {
                        props.data.effects.content.map(result=>(
                            
                            <> 
                                <span style={{margin:'10px'}}>
                                    <Category
                                        image={result.image}
                                        name={result.name}
                                        width='420px'
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
                <h4><u>{props.data.top.title}</u></h4>
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
      {props.data.top_bundles && (
      <div>
        {
            <div style={{textAlign:'center',borderBottom:'solid 1px black'}}>
                <h4><u>{props.data.top_bundles.title}</u></h4>
                <div style={{display:'flex', flexDirection:'row'}}>
                    {
                        <span style={{width:'10%', margin:10}}>
                            
                            <FrameList
                                data={props.data.top_bundles.content}
                            />
                            
                        </span>
                        
                    }

                
                </div>
            </div>
        }
      </div>
    )}
      {props.data.category_details && (
      <div>
        {
            <div style={{textAlign:'center',borderBottom:'solid 1px black'}}>
                <div>
                    {
                        props.data.category_details.content.map(category=>{
                            
                            return(
                            <span style={{width:'10%', margin:10,}}>
                                <h4>{category.categoryName}</h4>
                                {
                                    <FrameList
                                        data={category.content}
                                    />
                                }
                                <hr/>
                            </span>
                            )

                        })
                        
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
