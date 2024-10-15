// BaseNode.js

import { Handle, Position } from 'reactflow';
import PropTypes from 'prop-types';

export const BaseNode = ({ id, label, data, inputs, outputs, content }) => {
  return (
    <div style={{ width: 200, height: 80, border: '1px solid black', padding: 10 }}>
      <div style={{ marginBottom: 10 }}>
        <strong>{label}</strong>
      </div>

      <div>
        {content}
      </div>

      {/* Render input handles */}
      {inputs.map((input, index) => (
        <Handle
          key={`input-${index}`}
          type="target"
          position={input.position || Position.Left}
          id={`${id}-${input.id}`}
          style={input.style || {}}
        />
      ))}

      {/* Render output handles */}
      {outputs.map((output, index) => (
        <Handle
          key={`output-${index}`}
          type="source"
          position={output.position || Position.Right}
          id={`${id}-${output.id}`}
          style={output.style || {}}
        />
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
