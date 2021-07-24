import React from 'react';
import './About.scss'
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
  

  const[loading,setLoading]=React.useState(0);


  React.useEffect(()=>{
    let k=0;
    const l=setInterval(()=>{
     k=k+5;
     if(k<=100){
      setLoading(k)
     }
     
    },1000)

    return ()=>{
      clearInterval(l);
    }
  },[])
  
  return (
    <main style={{marginLeft:collapse?50:250}}>
    
    <div style={{background: '#d0d0d0',margin:'0rem 21rem'}}>
        <section>
            <article>
                <div class="chart">
                    <div class="bar bar-75 white">
                        <div class="face top">
                            <div class="growing-bar" style={{width:`${loading}%`}}></div>
                        </div>
                        <div class="face side-0">
                            <div class="growing-bar" style={{width:`${loading}%`}}></div>
                        </div>
                        <div class="face floor">
                            <div class="growing-bar" style={{width:`${loading}%`}}></div>
                        </div>
                        <div class="face side-a"></div>
                        <div class="face side-b"></div>
                        <div class="face side-1">
                            <div class="growing-bar" style={{width:`${loading}%`}}></div>
                        </div>
                    </div>
                </div>
                </article>
                </section>
                </div>
    </main>
  );
};

export default About;
