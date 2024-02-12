import { Handle, Position } from 'reactflow';
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

import ReactPlayer from 'react-player';
const PortfolioNode = ({ id, data }) => {
  console.log(data);
  return (
    <BaseNode data={data}>
      <div className="rounded bg-white">
        <div className="">Image</div>
        <div className="text-[8px]">Body</div>
        <div className="">URL</div>
        <ReactPlayer
          url="https://soundcloud.com/miami-nights-1984/accelerated"
          width="350px"
          height="250px"
          soundcloud
        />
      </div>
    </BaseNode>
  );
};

const BaseNode = (props) => {
  return (
    <div className="">
      {props.children}
      {props.data.handles.map((handle, index) => (
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
const PPNode = ({ id, data }) => {
  return (
    <BaseNode data={data}>
      <div className="h-28 w-28 rounded-full bg-[url('/profile-pic.png')] bg-cover bg-center shadow-2"></div>
    </BaseNode>
  );
};

const border = {
  engineer: 'border-red-500',
  quant: 'border-amber-500',
  writer: 'border-indigo-500',
  pianist: 'border-green-500',
};
const text = {
  engineer: 'text-red-500',
  quant: 'text-amber-500',
  writer: 'text-indigo-500',
  pianist: 'text-green-500',
};

const SectionNode = ({ id, data }) => {
  const { section } = data;

  return (
    <BaseNode data={data}>
      <div className="w-[300px] rounded font-inter text-[16px] shadow-2">
        <div
          className={`black flex flex-row justify-center rounded-t border-b-[1px] bg-black py-2 text-center ${
            border[section.id]
          }`}
        >
          <div className="pt-0.5">
            <section.icon className={`${text[section.id]}`} />
          </div>
          <div className={`${text[section.id]} ml-1 font-mono `}>
            {section.label}
          </div>
        </div>
        <div className="bg-zinc-800 pt-2 text-gray-300">
          <section.body />
        </div>
      </div>
    </BaseNode>
  );
};

export { PPNode, SectionNode, PortfolioNode };
