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

const sections = [
  {
    label: 'Piotr Yordanov',
    type: 'ppNode',
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
    id: 'engineer',
    label: 'FS Engineer',
    type: 'sectionNode',
    icon: icons.engineer,
    targetHandle: 'left',
    body: 'hello world',
    handles: [{ type: 'source', position: 'right' }],
  },
  {
    id: 'quant',
    label: 'Quant Trader',
    type: 'sectionNode',
    icon: icons.trader,
    targetHandle: 'top',
    body: 'hello quant',
    handles: [{ type: 'source', position: 'bottom' }],
  },
  {
    id: 'pianist',
    label: 'Piano Player',
    type: 'sectionNode',
    icon: icons.music,
    targetHandle: 'bottom',
    body: 'hello world',
    color: 'indigo',
    handles: [{ type: 'source', position: 'top' }],
  },
  {
    id: 'writer',
    label: 'Story Writer',
    type: 'sectionNode',
    icon: icons.writing,
    targetHandle: 'right',
    body: 'hello writing',
    color: 'emerald',
    handles: [{ type: 'source', position: 'left' }],
  },
];

const positions = [
  { x: 200, y: 130 },
  { x: 0, y: 150 },
  { x: 200, y: 0 },
  { x: 200, y: 300 },
  { x: 400, y: 150 },
];
const createDefaultNodes = () => {
  return sections.map((section, index) => ({
    key: index,
    id: `${index}`,
    type: section.type,
    data: { section: section, handles: section.handles },
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

export { initialNodes, initialEdges };
