'use client';
import React, { useCallback, useEffect, useState } from 'react';
import ReactFlow, {
  Background,
  getViewportForBounds,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
  useReactFlow,
  Controls,
} from 'reactflow';
import { utilServerSideDeviceDetection } from '@/lib/utilServerSideDeviceDetection';

import { createEdges, createNodes } from '@/components/flow/createFlowData';
import { PortfolioNode, PPNode, SectionNode } from '@/components/flow/nodes';

const initialNodes = createNodes();
const initialEdges = createEdges();

function App() {
  const [rfInstance, setInstance] = useState();
  const [isMobile, setIsMobile] = useState();
  const { setViewport, zoomIn, zoomOut } = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const proOptions = { hideAttribution: true };

  useEffect(() => {
    if (rfInstance) {
      const isMobile = window.innerWidth < 768;
      const firstNode = rfInstance.getNodes()[0];
      rfInstance.setCenter(
        firstNode.position.x + firstNode.width / 2,
        firstNode.position.y + firstNode.height / 2,
        { zoom: isMobile ? 0.5 : 1, duration: 500 }
      );
    }
  }, [rfInstance]);

  useEffect(() => {
    if (isMobile === undefined) {
      setIsMobile(window.innerWidth < 768);
    }
  }, [isMobile]);

  return (
    <div className="h-screen w-screen bg-[#202124]">
      <ReactFlow
        onInit={setInstance}
        defaultNodes={nodes}
        defaultEdges={edges}
        nodeTypes={{
          sectionNode: SectionNode,
          ppNode: PPNode,
          portfolioNode: PortfolioNode,
        }}
        proOptions={proOptions}
        maxZoom={isMobile ? 0.8 : 1}
        minZoom={isMobile ? 0.1 : 0.2}
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
