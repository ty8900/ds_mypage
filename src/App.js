import React from 'react';
import './App.css';
import Icons from './components/Icons'
import Title from './components/Title'
import Maintext from './components/Maintext'


function App() {
  return (
    <div className="App">
      <div className="background">
       <Title />
      </div>
      <div className="maintext">
      <Maintext />
      </div>
      <Icons/>
    </div>
  );
}

export default App;
