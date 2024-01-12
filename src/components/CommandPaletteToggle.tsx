import { useKBar } from 'kbar';
import { BsCommand } from 'react-icons/bs';

export default function CommandPaletteToggle() {
  const { query } = useKBar();

  return (
    <div
      className="hidden cursor-pointer flex-row text-sm text-gray-400 lg:flex"
      onClick={query.toggle}
    >
      <div className="pointer-events-auto relative bg-white dark:bg-slate-900">
        <button
          type="button"
          className="flex w-full items-center rounded-md py-[1px] pl-2 pr-3 text-xs leading-6 text-slate-400 shadow-sm ring-1 ring-slate-900/10 duration-200 ease-in hover:text-primary hover:ring-primary dark:bg-slate-800 dark:hover:bg-slate-700 lg:flex"
        >
          <svg
            width="20"
            height="20"
            fill="none"
            aria-hidden="true"
            className="mr-1 mt-[-4px] flex-none"
          >
            <path d="m19 19-3.5-3.5" stroke="currentColor"></path>
            <circle cx="11" cy="11" r="6" stroke="currentColor"></circle>
          </svg>
          Search...
          <span className="ml-2 flex-none pl-3 text-xs font-semibold">
            <BsCommand className="inline" />
            <div className="ml-1 inline ">K</div>
          </span>
        </button>
      </div>
    </div>
  );
}
