import React from 'react';

const About = ({
  collapsed,
  rtl,
  image,
  handleToggleSidebar,
  handleCollapsedChange,
  handleRtlChange,
  handleImageChange,
  sideBarOverMainContent,
  collapse
}) => {
  
  
  return (
    <main className={sideBarOverMainContent && !collapse?'blurbackground':''}>
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
