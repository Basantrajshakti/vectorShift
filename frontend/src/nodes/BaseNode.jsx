// BaseNode.js
import React, { useState } from 'react';
import { Handle, Position } from 'reactflow';

const BaseNode = ({ id, data, type, handles, content }) => {
  const [state, setState] = useState(data);

  const handleChange = (key, value) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <div style={{ width: 200, height: 80, border: '1px solid black' }}>
      <div>
        <span>{type}</span>
      </div>
      <div>
        {content(state, handleChange)}
      </div>
      {handles.map((handle) => (
        <Handle
          key={handle.id}
          type={handle.type}
          position={handle.position}
          id={handle.id}
          style={handle.style}
        />
      ))}
    </div>
  );
};

export default BaseNode;
