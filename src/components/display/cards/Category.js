import React from 'react'
import './card.css'

function Category(props) {
    return (        
        <span className="card">
            <img 
                className="img" 
                src={props.image} 
                alt="Avatar" 
                style={{width:props.width}} 
                onClick={()=>{
                    props.handleClick(props.id)
                }}
            />
            <p style={{fontWeight:'bold',marginTop:5, marginBottom:5}}>{props.name}</p>
          
        </span>
            
    );
}

export default Category