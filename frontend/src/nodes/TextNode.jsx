// TextNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => setCurrText(e.target.value);

  const content = (
    <div>
      <label>
        Text:
        <input type="text" value={currText} onChange={handleTextChange} />
      </label>
    </div>
  );

  return (
    <BaseNode
      id={id}
      label="Text"
      data={data}
      inputs={[]}
      outputs={[{ id: 'output' }]}
      content={content}
    />
  );
};
