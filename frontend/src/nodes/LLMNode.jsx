// LLMNode.js

import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  const content = (
    <div>
      <span>This is an LLM node.</span>
    </div>
  );

  return (
    <BaseNode
      id={id}
      label="LLM"
      data={data}
      inputs={[
        { id: 'system', style: { top: '33%' } },
        { id: 'prompt', style: { top: '66%' } },
      ]}
      outputs={[{ id: 'response' }]}
      content={content}
    />
  );
};
