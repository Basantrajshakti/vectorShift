// InputNode.js
import React from 'react';
import BaseNode from './BaseNode';
import { Position } from 'reactflow';

export const InputNode = ({ id, data }) => {
  const handles = [
    { type: 'source', position: Position.Right, id: `${id}-value` },
  ];

  const content = (state, handleChange) => (
    <>
      <label>
        Name:
        <input
          type="text"
          value={state.inputName || id.replace('customInput-', 'input_')}
          onChange={(e) => handleChange('inputName', e.target.value)}
        />
      </label>
      <label>
        Type:
        <select
          value={state.inputType || 'Text'}
          onChange={(e) => handleChange('inputType', e.target.value)}
        >
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </>
  );

  return <BaseNode id={id} data={data} type="Input" handles={handles} content={content} />;
};
