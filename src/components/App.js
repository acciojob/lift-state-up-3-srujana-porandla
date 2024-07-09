
import React, { useState } from "react";

import './../styles/App.css';
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";



const App = () => {
  const [selectedOption, setSelectedOption] =useState('');
   const handleOptionChange=(option)=>{
    setSelectedOption(option);
   };

  return (
    <div className="parent" style={{ backgroundColor: 'limegreen', padding: '20px' }}>
       <h1>Parent Component</h1>
       <ChildComponent1 onOptionSelect={handleOptionChange} />
       <ChildComponent2 onOptionSelect={handleOptionChange} />
       <p>Selected Option: {selectedOption}</p>
        
    </div>
  )
}

export default App
