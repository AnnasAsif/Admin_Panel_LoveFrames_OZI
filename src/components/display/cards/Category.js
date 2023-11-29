import React from 'react'
import './card.css'

function Category(props) {
    return (
        
        <span className="card">
          <img src={props.image} alt="Avatar" style={{width:'100%'}}/>
          <span className="container">
            <p style={{marginTop:5, marginBottom:5}}>{props.name}</p>
          </span>
          <input type='submit' value='Show Data' onClick={()=>{props.onClick()}}/>
        </span>
            
    );
}

export default Category