// BaseNode.js
import React from 'react';
import PropTypes from 'prop-types';

const BaseNode = ({ id, type, data, onConnect, onDisconnect }) => {
  return (
    <div className={`node ${type}`}>
      <div className="node-header">{type} Node</div>
      <div className="node-content">
        {data.content}
      </div>
      <div className="node-handles">
        {data.handles.map(handle => (
          <div key={handle.id} className={`handle ${handle.type}`}>
            {handle.label}
          </div>
        ))}
      </div>
    </div>
  );
};

BaseNode.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  data: PropTypes.shape({
    content: PropTypes.node.isRequired,
    handles: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  onConnect: PropTypes.func,
  onDisconnect: PropTypes.func,
};

BaseNode.defaultProps = {
  onConnect: () => { },
  onDisconnect: () => { },
};

export default BaseNode;
