// submit.js

import { useStore } from './store';
import React from 'react';

export const SubmitButton = () => {
    const nodes = useStore((state) => state.nodes);
    const edges = useStore((state) => state.edges);

    const handleSubmit = async () => {
        const pipelineData = {
            nodes,
            edges,
        };

        try {
            const response = await fetch('http://127.0.0.1:8000/pipelines/parse', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(pipelineData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit pipeline');
            }

            const result = await response.json();
            alert(`Nodes: ${result.num_nodes}, Edges: ${result.num_edges}, Is DAG: ${result.is_dag}`);
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while submitting the pipeline.');
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button type="submit" onClick={handleSubmit}>
                Submit
            </button>
        </div>
    );
};
