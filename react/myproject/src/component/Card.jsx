import React from "react";

const Card = ({name}) => {
  return (
    <div style={{display:'flex',justifyContent:'center',marginTop:'100px'}}>
      <div style={{ border: "2px solid green", width: "400px", height: "400px",borderRadius:'25px',backgroundColor:'#FFECC0'}}>
        <h1 style={{ color: "red",justifyContent:'center',display:'flex' }}>ABES Student Card</h1>  
        <div>
         <img src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThta0AbYiNAB-v_IJeiRQsnxg7uc5vdkJ0efiR2Mnbtg&s" alt="react logo" style={{ width: '90px', height:'90px',marginLeft:'30px',borderRadius:'50%'}} />
        </div>
        <ul>
          <li>B.TECH (DS-A)</li>
          <br />
          <li>{name}</li>
          <br />
          <li>3rd Year</li>
        </ul>      
      </div>
      <div>
        
      </div>

    </div>
  );
};

export default Card;
