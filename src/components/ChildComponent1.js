import React from 'react';

const ChildComponent1 = ({ onOptionSelect }) => {
  return (
    <div style={{ backgroundColor: 'brown', padding: '10px' }}>
      <h2>Child Component 1</h2>
      <button onClick={() => onOptionSelect('Option 1')}>Option 1</button>
    </div>
  );
};

export default ChildComponent1;
