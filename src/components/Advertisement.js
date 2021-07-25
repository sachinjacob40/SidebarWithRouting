import React from "react";
import Card from './Card';
import websites from '../websites';



function Advertisement({collapse}){
  
    return (
      <main>        
        
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
