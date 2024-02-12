'use client';
import React, { useCallback, useState, useEffect } from 'react';
import ReactFlow, { Background } from 'reactflow';

import { FaCode } from 'react-icons/fa6';
import { LuCandlestickChart } from 'react-icons/lu';
import { GiGrandPiano } from 'react-icons/gi';
import { GiFountainPen } from 'react-icons/gi';

import { Handle, useNodesState, useEdgesState, Position } from 'reactflow';
function getHandlePosition(handlePosition: string) {
  switch (handlePosition) {
    case 'right':
      return Position.Right;
    case 'left':
      return Position.Left;
    case 'top':
      return Position.Top;
    case 'bottom':
      return Position.Bottom;
    default:
      return Position.Right;
  }
}

const defaultIconClass = '';
const icons = {
  engineer: <FaCode className={defaultIconClass} />,
  trader: <LuCandlestickChart className={defaultIconClass} />,
  music: <GiGrandPiano className={defaultIconClass} />,
  writing: <GiFountainPen className={defaultIconClass} />,
};

const sections = [
  {
    label: 'Piotr Yordanov',
    type: 'sectionNode',
    icon: icons.engineer,
    targetHandle: '',
    handles: [
      { type: 'target', position: 'right', id: 'right' },
      { type: 'target', position: 'top', id: 'top' },
      { type: 'target', position: 'bottom', id: 'bottom' },
      { type: 'target', position: 'left', id: 'left' },
    ],
  },
  {
    label: 'FS Engineer',
    type: 'sectionNode',
    icon: icons.engineer,
    targetHandle: 'left',
    handles: [{ type: 'source', position: 'right' }],
  },
  {
    label: 'Trader',
    type: 'sectionNode',
    icon: icons.trader,
    targetHandle: 'top',
    handles: [{ type: 'source', position: 'bottom' }],
  },
  {
    label: 'Pianist',
    type: 'sectionNode',
    icon: icons.music,
    targetHandle: 'bottom',
    handles: [{ type: 'source', position: 'top' }],
  },
  {
    label: 'Writer',
    type: 'sectionNode',
    icon: icons.writing,
    targetHandle: 'right',
    handles: [{ type: 'source', position: 'left' }],
  },
];

const positions = [
  { x: 200, y: 150 },
  { x: 0, y: 150 },
  { x: 200, y: 0 },
  { x: 200, y: 300 },
  { x: 400, y: 150 },
];

const SectionNode = ({ id, data }) => {
  console.log('here');
  return (
    <div className="">
      <div className="h-[50px] w-[50px] rounded border-2 bg-white p-1 text-[8px] shadow">
        {data.label}
      </div>
      {data.handles.map((handle, index) => (
        <Handle
          id={handle.id}
          key={index}
          type={handle.type}
          position={getHandlePosition(handle.position)}
          isConnectable={true}
        />
      ))}
    </div>
  );
};

const createDefaultNodes = () => {
  return sections.map((section, index) => ({
    key: index,
    id: `${index}`,
    type: section.type,
    data: { label: section.label, handles: section.handles },
    draggable: true,
    position: positions[index],
  }));
};

const createDefaultEdges = () => {
  return sections.map((section, index) => ({
    id: `${index}`,
    source: `${index}`,
    target: '0',
    targetHandle: section.targetHandle,
    animated: true,
  }));
};
const initialNodes = createDefaultNodes();
const initialEdges = createDefaultEdges();

export default function New() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const proOptions = { hideAttribution: true };
  console.log(edges);
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="mx-auto h-[800px] max-w-full md:max-w-6xl lg:max-w-6xl">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={{ sectionNode: SectionNode }}
        fitView
        preventScrolling={false}
        proOptions={proOptions}
        nodesDraggable
        onConnect={onConnect}
      >
        <Background />
      </ReactFlow>
    </div>
  );
}
