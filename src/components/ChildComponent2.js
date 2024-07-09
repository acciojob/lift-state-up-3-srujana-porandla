import React from 'react';

const ChildComponent2 = ({ onOptionSelect }) => {
  return (
    <div style={{ backgroundColor: 'orange', padding: '10px' }}>
      <h2>Child Component 2</h2>
      <button onClick={() => onOptionSelect('Option 2')}>Option 2</button>
    </div>
  );
};

export default ChildComponent2;
