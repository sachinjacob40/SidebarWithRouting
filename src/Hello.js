import React from "react";



function Hello({sideBarOverMainContent,collapse}){
    return (
      <main  className={sideBarOverMainContent && !collapse?'blurbackground':''}>        
        <div>ADVERTISEMENT
          <div>
            DATA
          </div>
        </div>
        </main>

      )
}
  

export default Hello;
