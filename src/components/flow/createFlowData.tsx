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
    type: 'player',
    text: 'Allegorie Playlist',
    settings: {
      url: 'https://www.youtube.com/playlist?list=PLcq6MfI_5J69msAjQ1hZ_ozBi_yIxgZhn',
    },
    targetHandle: 'bottom',
    handles: [{ type: 'target', position: 'top' }],
  },
  {
    type: 'player',
    text: 'Piano Pieces',
    settings: {
      url: 'https%3A//api.soundcloud.com/playlists/1754035467&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
      soundcloud: true,
    },
    targetHandle: 'bottom',
    handles: [{ type: 'target', position: 'top' }],
  },
  {
    type: 'player',
    text: 'Deep House Production',
    settings: {
      url: 'https%3A//api.soundcloud.com/playlists/42672943&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
      soundcloud: true,
    },
    targetHandle: 'bottom',
    handles: [{ type: 'target', position: 'top' }],
  },
  {
    type: 'player',
    text: 'Voice Overs',
    settings: {
      url: 'https%3A//api.soundcloud.com/playlists/42672874&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
      soundcloud: true,
    },
    targetHandle: 'bottom',
    handles: [{ type: 'target', position: 'top' }],
  },
];

const quantPortfolio = [
  {
    link: 'https://www.piotryordanov.com/trading#tradingview',
    text: 'TradingView Scripts',
    description: 'TV scripts you can use to for yourself',
    targetHandle: 'top',
    handles: [{ type: 'target', position: 'bottom' }],
  },
  {
    link: 'https://collective2.com/details/145905281',
    text: 'Trading Bot',
    description: 'A live trading bot that you can copy!',
    targetHandle: 'top',
    handles: [{ type: 'target', position: 'bottom' }],
  },
  {
    link: 'https://quantbt.com/',
    text: 'Quantbt',
    description: 'A Hyperperformant backtester',
    targetHandle: 'top',
    handles: [{ type: 'target', position: 'bottom' }],
  },
  {
    link: 'https://scalpson.piotryordanov.com/',
    text: 'Scalpson',
    description: 'A trading journal',
    targetHandle: 'top',
    handles: [{ type: 'target', position: 'bottom' }],
  },
  {
    link: 'https://www.piotryordanov.com/trading#youtube',
    text: 'Live Trading',
    description: 'Videos of me trading live!',
    targetHandle: 'top',
    handles: [{ type: 'target', position: 'bottom' }],
  },
];

const engineerPortfolio = [
  {
    link: 'https://zeistab.com',
    text: 'Zeistab',
    description: 'A chrome extension that helps you manage bookmarks',
    img: '/site-samples/zt.png',
    targetHandle: 'left',
    handles: [{ type: 'target', position: 'right' }],
  },
  {
    link: 'https://hephaestus-theta.vercel.app/',
    description: 'A UI to build a trading strategy with a drag and drop UI',
    img: '/site-samples/hepha.png',
    text: 'Hephaestus',
    targetHandle: 'left',
    handles: [{ type: 'target', position: 'right' }],
  },
  {
    link: 'https://scalpson.piotryordanov.com/',
    description: 'A trading journal',
    img: '/site-samples/scalpson.png',
    text: 'Scalpson',
    targetHandle: 'left',
    handles: [{ type: 'target', position: 'right' }],
  },
  {
    link: 'https://gg-landingpage.vercel.app/',
    text: 'Good Ghosting',
    img: '/site-samples/gg.png',
    image: 'gg.png',
    description: 'A passive income software',
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
  { x: -150, y: 200 },
  { x: 350, y: -100 },
  { x: 350, y: 500 },
  { x: 800, y: 200 },
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
      position: { x: -265 + 425 * index, y: 900 },
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
    source: '0',
    id: `${runningIndex++}`,
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
