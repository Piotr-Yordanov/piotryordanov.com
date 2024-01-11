const SimpleDivider = (props: any) => {
  let width = 'w-16';
  if (props.width) width = props.width;

  return (
    <div className="mt-20 flex justify-center">
      <div className={`inline-flex h-1 ${width} rounded-full bg-primary`}></div>
    </div>
  );
};
export default SimpleDivider;
