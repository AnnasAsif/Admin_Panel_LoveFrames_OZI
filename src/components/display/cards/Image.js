import React from 'react'
import './card.css'

function Image(props) {
    return (
        
        <span className="card">
          <img 
            src={props.image} 
            alt="Avatar" 
            style={{width:props.width}}
          />
        </span>
            
    );
}

export default Image