import React from 'react';
import './App.scss';
import Sidebar from './components/Sidebar';

function App() {

  const[collapse,setCollapse]=React.useState(true);

   
  return (
    <div className="app">
      <Sidebar
      image={true}
      rtl={false}
      toggled={true}
      collapse={collapse}
      setCollapse={setCollapse}
      />
    </div>
  );
}

export default App;
