'use client';
import React, { useCallback, useState, useEffect } from 'react';
import ReactFlow, { Background } from 'reactflow';

import { useNodesState, useEdgesState } from 'reactflow';
import { initialNodes, initialEdges } from '@/components/flow/createFlowData';
import { PPNode, SectionNode } from '@/components/flow/nodes';

export default function New() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const proOptions = { hideAttribution: true };

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  console.log(edges);
  console.log(nodes);

  return (
    <div className="h-screen w-screen bg-[#202124]">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={{ sectionNode: SectionNode, ppNode: PPNode }}
        fitView
        proOptions={proOptions}
        nodesDraggable
        onConnect={onConnect}
      >
        <Background />
      </ReactFlow>
    </div>
  );
}
