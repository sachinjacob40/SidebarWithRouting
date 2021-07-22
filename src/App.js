import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar';

function App() {

  const [sideBarOverMainContent,setSidebaroverMainContent]=React.useState(false);//type of sidebar
  const[collapse,setCollapse]=React.useState(false);

   
  return (
    <div className="app">
      <Sidebar
      image={true}
      rtl={false}
      toggled={true}
      sideBarOverMainContent={sideBarOverMainContent}
      collapse={collapse}
      setCollapse={setCollapse}
      />
    </div>
  );
}

export default App;
