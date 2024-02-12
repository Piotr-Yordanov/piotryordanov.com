'use client';
import React, { useCallback, useState, useEffect } from 'react';
import ReactFlow, { Background } from 'reactflow';

import { useNodesState, useEdgesState } from 'reactflow';
import { createNodes, createEdges } from '@/components/flow/createFlowData';
import { PPNode, SectionNode, PortfolioNode } from '@/components/flow/nodes';

const initialNodes = createNodes();
const initialEdges = createEdges();

export default function New() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const proOptions = { hideAttribution: true };

  return (
    <div className="h-screen w-screen bg-[#202124]">
      <ReactFlow
        defaultNodes={nodes}
        defaultEdges={edges}
        defaultViewport={{ x: 800, y: 200, zoom: 1 }}
        nodeTypes={{
          sectionNode: SectionNode,
          ppNode: PPNode,
          portfolioNode: PortfolioNode,
        }}
        proOptions={proOptions}
      >
        <Background />
      </ReactFlow>
    </div>
  );
}
