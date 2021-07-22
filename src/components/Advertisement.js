import React from "react";
import Card from './Card';
import websites from '../websites';



function Advertisement({sideBarOverMainContent,collapse}){
  
    return (
      <main  className={sideBarOverMainContent && !collapse?'blurbackground':''} style={{padding:7,overflowY:'inherit'}}>        
        
      <div>
        {websites.map((website, index) => (
          <Card
            key={website.description}
            hexa={website.hexa}
            title={website.title}
            description={website.description}
            image={website.image}
          />
        ))}
    
    </div>
        </main>

      )
}
  

export default Advertisement;
