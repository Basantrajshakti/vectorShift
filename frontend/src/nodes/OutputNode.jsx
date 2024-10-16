// OutputNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => setCurrName(e.target.value);
  const handleTypeChange = (e) => setOutputType(e.target.value);

  const content = (
    <div className="space-y-4">
      <label className="block text-xs font-medium text-gray-700">
        Name:
        <input
          type="text"
          value={currName}
          onChange={handleNameChange}
          className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </label>

      <label className="block text-xs font-medium text-gray-700">
        Type:
        <select
          value={outputType}
          onChange={handleTypeChange}
          className="mt-1 block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="Text">Text</option>
          <option value="File">Image</option>
        </select>
      </label>
    </div>

  );

  return (
    <BaseNode
      id={id}
      label="Output"
      data={data}
      inputs={[{ id: 'value' }]}
      outputs={[]}
      content={content}
    />
  );
};
