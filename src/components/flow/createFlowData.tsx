import { FaCode } from 'react-icons/fa6';
import { LuCandlestickChart } from 'react-icons/lu';
import { GiGrandPiano } from 'react-icons/gi';
import { GiFountainPen } from 'react-icons/gi';

const icons = {
  engineer: FaCode,
  trader: LuCandlestickChart,
  music: GiGrandPiano,
  writing: GiFountainPen,
};

import { Engineer, Quant, Writer, Pianist } from '@/components/flow/index';

const writingPortfolio = [
  {
    link: 'https://zeistab.com',
    text: 'Zeistab',
    targetHandle: 'bottom',
    handles: [{ type: 'target', position: 'left' }],
  },
  {
    link: 'https://hephaestus-theta.vercel.app/',
    text: 'Hephaestus',
    targetHandle: 'bottom',
    handles: [{ type: 'target', position: 'left' }],
  },
  {
    link: 'https://scalpson.piotryordanov.com/',
    text: 'Scalpson',
    targetHandle: 'bottom',
    handles: [{ type: 'target', position: 'left' }],
  },
  {
    link: 'https://gg-landingpage.vercel.app/',
    text: 'Good Ghosting',
    targetHandle: 'bottom',
    handles: [{ type: 'target', position: 'left' }],
  },
];

const pianoPortfolio = [
  {
    link: 'https://zeistab.com',
    text: 'Zeistab',
    targetHandle: 'bottom',
    handles: [{ type: 'target', position: 'top' }],
  },
  {
    link: 'https://hephaestus-theta.vercel.app/',
    text: 'Hephaestus',
    targetHandle: 'bottom',
    handles: [{ type: 'target', position: 'top' }],
  },
  {
    link: 'https://scalpson.piotryordanov.com/',
    text: 'Scalpson',
    targetHandle: 'bottom',
    handles: [{ type: 'target', position: 'top' }],
  },
  {
    link: 'https://gg-landingpage.vercel.app/',
    text: 'Good Ghosting',
    targetHandle: 'bottom',
    handles: [{ type: 'target', position: 'top' }],
  },
];

const quantPortfolio = [
  {
    link: 'https://zeistab.com',
    text: 'Zeistab',
    targetHandle: 'top',
    handles: [{ type: 'target', position: 'bottom' }],
  },
  {
    link: 'https://hephaestus-theta.vercel.app/',
    text: 'Hephaestus',
    targetHandle: 'top',
    handles: [{ type: 'target', position: 'bottom' }],
  },
  {
    link: 'https://scalpson.piotryordanov.com/',
    text: 'Scalpson',
    targetHandle: 'top',
    handles: [{ type: 'target', position: 'bottom' }],
  },
  {
    link: 'https://gg-landingpage.vercel.app/',
    text: 'Good Ghosting',
    targetHandle: 'top',
    handles: [{ type: 'target', position: 'bottom' }],
  },
];

const engineerPortfolio = [
  {
    link: 'https://zeistab.com',
    text: 'Zeistab',
    targetHandle: 'left',
    handles: [{ type: 'target', position: 'right' }],
  },
  {
    link: 'https://hephaestus-theta.vercel.app/',
    text: 'Hephaestus',
    targetHandle: 'left',
    handles: [{ type: 'target', position: 'right' }],
  },
  {
    link: 'https://scalpson.piotryordanov.com/',
    text: 'Scalpson',
    targetHandle: 'left',
    handles: [{ type: 'target', position: 'right' }],
  },
  {
    link: 'https://gg-landingpage.vercel.app/',
    text: 'Good Ghosting',
    targetHandle: 'left',
    handles: [{ type: 'target', position: 'right' }],
  },
];

const sections = [
  {
    label: 'Piotr Yordanov',
    type: 'ppNode',
    icon: icons.engineer,
    targetHandle: 'left',
    handles: [
      { type: 'source', position: 'right', id: 'right' },
      { type: 'source', position: 'top', id: 'top' },
      { type: 'source', position: 'bottom', id: 'bottom' },
      { type: 'source', position: 'left', id: 'left' },
    ],
  },
  {
    id: 'engineer',
    label: 'FS Engineer',
    type: 'sectionNode',
    icon: icons.engineer,
    targetHandle: 'left',
    body: Engineer,
    handles: [
      { type: 'target', position: 'right' },
      { type: 'source', position: 'left' },
    ],
  },
  {
    id: 'quant',
    label: 'Quant Trader',
    type: 'sectionNode',
    icon: icons.trader,
    targetHandle: 'top',
    body: Quant,
    handles: [
      { type: 'target', position: 'bottom' },
      { type: 'source', position: 'top' },
    ],
  },
  {
    id: 'pianist',
    label: 'Piano Player',
    type: 'sectionNode',
    icon: icons.music,
    targetHandle: 'bottom',
    body: Pianist,
    color: 'indigo',
    handles: [
      { type: 'target', position: 'top' },
      { type: 'source', position: 'bottom' },
    ],
  },
  {
    id: 'writer',
    label: 'Article Writer',
    type: 'sectionNode',
    icon: icons.writing,
    targetHandle: 'right',
    body: Writer,
    color: 'emerald',
    handles: [
      { type: 'target', position: 'left' },
      { type: 'source', position: 'right' },
    ],
  },
];

const positions = [
  { x: 450, y: 250 },
  { x: 0, y: 250 },
  { x: 350, y: 0 },
  { x: 350, y: 500 },
  { x: 700, y: 250 },
];
const createNodes = () => {
  let runningIndex = 0;
  const mainNodes = sections.map((section, index) => {
    const newItem = {
      key: runningIndex,
      id: `${runningIndex}`,
      type: section.type,
      data: { section: section, handles: section.handles },
      draggable: true,
      position: positions[index],
    };
    runningIndex++;
    return newItem;
  });

  const portfolio = engineerPortfolio.map((section, index) => {
    const newItem = {
      key: runningIndex,
      id: `${runningIndex}`,
      type: 'portfolioNode',
      data: { section: section, handles: section.handles },
      draggable: true,
      position: { x: -850, y: -450 + 400 * index },
    };
    runningIndex++;
    return newItem;
  });

  const quant = quantPortfolio.map((section, index) => {
    const newItem = {
      key: runningIndex,
      id: `${runningIndex}`,
      type: 'portfolioNode',
      data: { section: section, handles: section.handles },
      draggable: true,
      position: { x: -350 + 450 * index, y: -650 },
    };
    runningIndex++;
    return newItem;
  });

  const pianist = pianoPortfolio.map((section, index) => {
    const newItem = {
      key: runningIndex,
      id: `${runningIndex}`,
      type: 'portfolioNode',
      data: { section: section, handles: section.handles },
      draggable: true,
      position: { x: -350 + 450 * index, y: 850 },
    };
    runningIndex++;
    return newItem;
  });

  const writing = writingPortfolio.map((section, index) => {
    const newItem = {
      key: runningIndex,
      id: `${runningIndex}`,
      type: 'portfolioNode',
      data: { section: section, handles: section.handles },
      draggable: true,
      position: { x: 1500, y: -450 + 400 * index },
    };
    runningIndex++;
    return newItem;
  });

  return [...mainNodes, ...portfolio, ...quant, ...pianist, ...writing];
};

const createEdges = () => {
  let runningIndex = 0;
  const edges = sections.map((section, index) => ({
    id: `${runningIndex++}`,
    source: '0',
    target: `${index}`,
    sourceHandle: section.targetHandle,
    animated: true,
  }));

  const engineer = engineerPortfolio.map((section, index) => {
    const newItem = {
      id: `${runningIndex}`,
      source: '1',
      target: `${runningIndex}`,
      sourceHandle: section.targetHandle,
      animated: true,
    };
    runningIndex++;
    return newItem;
  });

  const quant = quantPortfolio.map((section, index) => {
    const newItem = {
      id: `${runningIndex}`,
      source: '2',
      target: `${runningIndex}`,
      sourceHandle: section.targetHandle,
      animated: true,
    };
    runningIndex++;
    return newItem;
  });

  const pianist = pianoPortfolio.map((section, index) => {
    const newItem = {
      id: `${runningIndex}`,
      source: '3',
      target: `${runningIndex}`,
      sourceHandle: section.targetHandle,
      animated: true,
    };
    runningIndex++;
    return newItem;
  });

  const writing = writingPortfolio.map((section, index) => {
    const newItem = {
      id: `${runningIndex}`,
      source: '4',
      target: `${runningIndex}`,
      sourceHandle: section.targetHandle,
      animated: true,
    };
    runningIndex++;
    return newItem;
  });

  return [...edges, ...engineer, ...quant, ...pianist, ...writing];
};

export { createNodes, createEdges };
