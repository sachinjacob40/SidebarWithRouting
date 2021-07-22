import React from 'react';
import './Card.css'

export default function Card({title,description,image,hexa,animationSize}){
    return(
        <button >
            <div className="figure" style={{background:`url(${image}) 0 0 no-repeat`,backgroundSize:'cover'}}/>
             <div style={{textAlign:'initial',paddingLeft:10,position:'relative',top:12}}>
                 <div style={{fontSize:'1.25em'}}>{title}</div>
                 <div style={{color:'#999999',fontSize:'0.875em'}}>{description}</div>
             </div>
             <div className="colorbar" style={{backgroundColor:hexa}}></div>
        </button>
    )
}