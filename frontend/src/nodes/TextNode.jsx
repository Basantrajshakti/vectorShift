// TextNode.js

import { useState, useEffect, useMemo } from 'react';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '');
  const [variables, setVariables] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [textareaHeight, setTextareaHeight] = useState(16); // Initial height for 1 row

  // Function to dynamically resize the textarea height
  const adjustTextareaHeight = (text) => {
    const lineBreaks = text.split('\n').length;
    const newHeight = Math.min(100, lineBreaks * 16); // Calculate new height based on content, max 100px
    setTextareaHeight(newHeight);
  };

  // Function to handle text changes and detect labels
  const handleTextChange = (e) => {
    const text = e.target.value;
    setCurrText(text);
    adjustTextareaHeight(text);

    const regex = /{{\s*([a-zA-Z_$][a-zA-Z_$0-9]*)\s*}}/g;
    const matches = [...text.matchAll(regex)].map((match) => match[1]);

    // Error handling for empty labels
    if (text.includes('{{}}')) {
      setErrorMessage('Variable name is missing.');
    } else {
      setErrorMessage(null);
    }

    // Filter out duplicates before setting variables
    const uniqueMatches = Array.from(new Set(matches));
    setVariables(uniqueMatches);
  };

  useEffect(() => {
    adjustTextareaHeight(currText);
  }, [currText]);

  const inputHandles = useMemo(() => variables.map((variable, index) => ({
    id: variable,
    position: 'left',
    label: variable,
    style: { top: `${(index + 1) * (100 / (variables.length + 1))}%` }, // Distribute handles evenly
  })), [variables]);

  const content = (
    <div>
      <label>
        Text:
        <textarea
          value={currText}
          onChange={handleTextChange}
          style={{
            width: '100%',
            height: `${textareaHeight}px`,
            maxHeight: '100px',
            overflowY: 'scroll', // Show scrollbar after height exceeds 200px
            resize: 'none',
          }}
        />
      </label>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );

  return (
    <BaseNode
      id={id || 'textNode'}
      label="Text"
      data={data}
      inputs={inputHandles} // Pass dynamic handles with styles
      outputs={[{ id: 'output' }]} // You can adjust outputs if needed
      content={content}
    />
  );
};
