import React from 'react';
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from 'react-pro-sidebar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Main from "./Main";
import sidebarBg from './images/bg1.jpg';
import HamburgerIcon from './images/hamburger.png'
import LeftarrowIcon from './images/leftarrow.png'
import About from './About';
import $ from 'jquery';
import Hello from './Hello'
const Sidebar = ({ image, rtl, toggled, handleToggleSidebar,sideBarOverMainContent,setCollapse,collapse }) => {


  const [prevMenuItem,setPrevMenuItem]=React.useState(getSelectedMenu());


  function getSelectedMenu(){
    if( window.location.pathname.replace('/','#')==='#'){
      return '#dashboard'
    }
   return  window.location.pathname.replace('/','#')
    
  }

  React.useEffect(()=>{
    $(prevMenuItem).addClass('selected')
  },[])

   function doAction(id){
    $(prevMenuItem).removeClass('selected')
    $(id).addClass('selected');
    setPrevMenuItem(id);
   
      
  
  }


  return (
    <Router>
    <ProSidebar
      image={image ? sidebarBg : false} //Background image for sidebar
      rtl={rtl}
      collapsed={collapse}
      toggled={toggled}
      breakPoint="md"
      //onToggle={handleToggleSidebar}
     className={sideBarOverMainContent?'pro-sidebarNew':'pro-sidebar'}
    >
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
           {!collapse && <p style={{display:'inline-block',marginTop:3}}>Sidebar</p>}
          <img src={collapse?HamburgerIcon:LeftarrowIcon} style={{width:collapse?30:20,height:collapse?30:25,float:'right',cursor:'pointer'}}  onClick={()=>(setCollapse(!collapse))}/>
        </div>
      </SidebarHeader>

      <SidebarContent >
        <Menu iconShape="circle"  >
          <MenuItem
            icon={'a'}
            suffix={<span className="badge red">New</span>}
            id='dashboard'
            onClick={()=>(doAction('#dashboard'))}
          >
            Dashboard  <Link to="/"/>
          </MenuItem>
          <MenuItem icon={'b'} id='about'  onClick={()=>(doAction('#about'))}>About <Link to="/about" /></MenuItem>
          <MenuItem icon={'z'} id='advertisement'  onClick={()=>(doAction('#advertisement'))}>Advertisement <Link to="/advertisement" /></MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu  id='withsuffix' 
            suffix={<span className="badge yellow">3</span>}
            title='WithSuffix'
            icon={'c'}
          >
            <MenuItem id='submenu1' onClick={()=>{
              doAction('#submenu1');
              
              }}>Submenu 1</MenuItem>
            <MenuItem>Submenu 2</MenuItem>
            <MenuItem>Submenu 3</MenuItem>
          </SubMenu>
          <SubMenu
            prefix={<span className="badge gray">3</span>}
            title='WithPrefix'
            icon={'d'}
          >
            <MenuItem>Submenu 1</MenuItem>
            <MenuItem>Submenu 2</MenuItem>
            <MenuItem>Submenu 3</MenuItem>
          </SubMenu>
          <SubMenu title='multiLevel' icon={'e'}>
            <MenuItem>Submenu 1 </MenuItem>
            <MenuItem>Submenu 2 </MenuItem>
            <SubMenu title='Submenu 3'>
              <MenuItem>Submenu 3.1 </MenuItem>
              <MenuItem>Submenu 3.2 </MenuItem>
              <SubMenu title='Submenu 3.3'>
                <MenuItem>Submenu 3.3.1 </MenuItem>
                <MenuItem>Submenu 3.3.2 </MenuItem>
                <MenuItem>Submenu 3.3.3 </MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="https://github.com"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            
            <span> Log out</span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
    <Switch>
          <Route path="/about">
            <About
            collapse={collapse}
            sideBarOverMainContent={sideBarOverMainContent}/>
          </Route>
          <Route path="/advertisement">
           <Hello
           collapse={collapse}
           sideBarOverMainContent={sideBarOverMainContent}
           />
          </Route>
          <Route path="/">
            <Main 
            collapse={collapse}
            sideBarOverMainContent={sideBarOverMainContent}
            />
          </Route>
        </Switch>
    </Router>
  );
};

export default Sidebar;
