// BaseNode.js

import { Handle, Position, useUpdateNodeInternals } from 'reactflow';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

export const BaseNode = ({ id, label, data, inputs, outputs, content }) => {
  const updateNodeInternals = useUpdateNodeInternals(id)

  useEffect(() => {
    updateNodeInternals(id)
  }, [inputs, id, updateNodeInternals]);

  return (
    <div className="w-52 p-2 border border-gray-300 rounded-lg shadow-sm bg-white relative">
      <div className="mb-2">
        <h4 className="text-sm font-medium text-gray-700">{label}</h4>
      </div>

      <div className="text-xs text-gray-600">
        {content}
      </div>

      {/* Render input handles on the left side */}
      {inputs.map((input, index) => (
        <Handle
          key={`input-${index}`}
          type="target"
          position={input.position || Position.Left}
          id={`${id}-${input.id}`}
          style={input.style || {}}
          isConnectable
          className="custom-handle relative left-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-300 hover:bg-blue-500"
        >
          <div className="text-xs text-gray-600 hover:text-blue-500 absolute right-2 -top-3">{input.label}</div>
        </Handle>
      ))}

      {/* Render output handles on the right side */}
      {outputs.map((output, index) => (
        <Handle
          key={`output-${index}`}
          type="source"
          position={output.position || Position.Right}
          id={`${id}-${output.id}`}
          style={output.style || {}}
          className="custom-handle relative right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-300 hover:bg-blue-500"
        >
          <div className="text-xs text-gray-600 hover:text-blue-500">{output.label}</div>
        </Handle>
      ))}
    </div>

  );
};

BaseNode.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  data: PropTypes.object,
  inputs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    position: PropTypes.string,
    style: PropTypes.object,
  })),
  outputs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    position: PropTypes.string,
    style: PropTypes.object,
  })),
  content: PropTypes.element,  // This allows specific nodes to pass their custom content
};
