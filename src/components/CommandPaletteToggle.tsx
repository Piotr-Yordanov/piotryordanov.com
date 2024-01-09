import { useKBar } from 'kbar';

export default function CommandPaletteToggle() {
  const { query } = useKBar();

  return (
    <div
      className="flex cursor-pointer flex-row p-[4px] text-sm text-gray-400"
      onClick={query.toggle}
    >
      <div className="pointer-events-auto relative bg-white dark:bg-slate-900">
        <button
          type="button"
          className="dark:highlight-white/5 flex w-full items-center rounded-md py-1.5 pl-2 pr-3 text-sm leading-6 text-slate-400 shadow-sm ring-1 ring-slate-900/10 hover:ring-slate-300 lg:flex dark:bg-slate-800 dark:hover:bg-slate-700"
        >
          <svg
            width="24"
            height="24"
            fill="none"
            aria-hidden="true"
            className="mr-1 flex-none"
          >
            <path d="m19 19-3.5-3.5" stroke="currentColor"></path>
            <circle cx="11" cy="11" r="6" stroke="currentColor"></circle>
          </svg>
          Search...
          <span className="ml-2 flex-none pl-3 text-xs font-semibold">
            Ctrl K
          </span>
        </button>
      </div>
    </div>
  );
}
