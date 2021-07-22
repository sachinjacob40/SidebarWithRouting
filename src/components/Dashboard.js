import React from 'react';

const Dashboard = ({
  collapsed,
  rtl,
  image,
  handleToggleSidebar,
  handleCollapsedChange,
  handleRtlChange,
  handleImageChange,
  collapse
}) => {
  
  
  return (
    <main style={{marginLeft:collapse?50:250}}>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
      </div>
      <header>
        <p>POLI SANAM</p>
        <p>description</p>
        <div className="social-bagdes">
          <a
            href="https://github.com/sachinjacob40"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="GitHub stars"
              src="https://img.shields.io/github/stars/sachinjacob40/responsivewebsite?style=social"
            />
          </a>
          <a
            href="https://github.com/sachinjacob40/responsivewebsite"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              alt="GitHub forks"
              src="https://img.shields.io/github/forks/sachinjacob40/responsivewebsite?style=social"
            />
          </a>
        </div>
      </header>
      <div className="block ">
        
        <span> sample sidebar </span>
      </div>
      <div className="block">
       
        <span>lorem ipsum</span>
      </div>
      <div className="block">
        
        <span>image</span>
      </div>

      <footer>
        <br />
        <div className="social-bagdes">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <img
              alt="GitHub followers"
              src="https://img.shields.io/github/followers/sachinjacob40?label=github&style=social"
            />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img
              alt="Twitter Follow"
              src="https://img.shields.io/twitter/follow/?label=twitter&style=social"
            />
          </a>
        </div>
      </footer>
    </main>
  );
};

export default Dashboard;
