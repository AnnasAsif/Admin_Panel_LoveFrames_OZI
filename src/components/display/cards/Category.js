import React from 'react'
import './card.css'
import {useNavigate, Link} from 'react-router-dom'

function Category(props) {
    const navigate = useNavigate();

  const handleClick = () => {
    const specificId = props.id; // Replace with your specific ID
    navigate(`/frames?id=${specificId}`);
  };

    // console.log(props.id);
    return (
        
        <span className="card">
            <img 
                className="img" 
                src={props.image} 
                alt="Avatar" 
                style={{width:props.width}} 
                onClick={()=>{
                    handleClick()
                }}
            />
            {/* <Link to={{ pathname: '/frames'}}>{props.name}</Link> */}

            <p style={{fontWeight:'bold',marginTop:5, marginBottom:5}}>{props.name}</p>
          
        </span>
            
    );
}

export default Category