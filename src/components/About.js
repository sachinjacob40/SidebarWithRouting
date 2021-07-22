import React from 'react';

const About = ({
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
        <p>About Page</p>
        <p>description</p>
      </header>  
    </main>
  );
};

export default About;
