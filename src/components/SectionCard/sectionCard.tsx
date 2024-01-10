import classnames from 'classnames';

export const SectionCardIcon = ({ bg, text, d, icon }) => {
  return (
    <div
      className={classnames(
        'mb-5 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full',
        bg,
        text
      )}
    >
      {icon}
    </div>
  );
};
export const SectionCardContent = ({ title, content, btn }) => {
  return (
    <div className="grow">
      <h2 className="mb-3 text-xl font-medium">{title}</h2>
      <p className="text-justify text-sm leading-relaxed">{content}</p>
      {btn}
    </div>
  );
};

export const SectionCard = ({ children }) => {
  return (
    <div className="mb-6 flex flex-col p-10 md:mb-0 md:w-full ">
      <div className="pattern-dots-md fill-current text-gray-600">
        <div className="-translate-y-6 translate-x-6 rounded border-2 border-solid bg-white p-4 dark:border-transparent dark:bg-gray-800 dark:text-white">
          {children}
        </div>
      </div>
    </div>
  );
};
