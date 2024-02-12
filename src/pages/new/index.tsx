'use client';
import React, { useCallback, useState, useEffect } from 'react';
import ReactFlow, {
  ReactFlowProvider,
  Background,
  useNodesState,
  useEdgesState,
  getViewportForBounds,
  useReactFlow,
} from 'reactflow';
import { createNodes, createEdges } from '@/components/flow/createFlowData';
import { PPNode, SectionNode, PortfolioNode } from '@/components/flow/nodes';

const initialNodes = createNodes();
const initialEdges = createEdges();

function App() {
  const [rfInstance, setInstance] = useState();
  const { setViewport, zoomIn, zoomOut } = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const proOptions = { hideAttribution: true };

  useEffect(() => {
    if (rfInstance) {
      rfInstance.setCenter(
        initialNodes[0].position.x,
        initialNodes[0].position.y,
        { zoom: 1, duration: 500 }
      );
    }
  }, [rfInstance]);

  return (
    <div className="h-screen w-screen bg-[#202124]">
      <ReactFlow
        onInit={setInstance}
        defaultNodes={nodes}
        defaultEdges={edges}
        defaultViewport={{
          x: initialNodes[0].position.x,
          y: initialNodes[0].position.y,
          zoom: 1,
        }}
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

export default function Index() {
  return (
    <ReactFlowProvider>
      <App />
    </ReactFlowProvider>
  );
}
