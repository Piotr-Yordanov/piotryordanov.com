type Props = {
  children: React.ReactNode;
};

export default function PageTitle({ children }: Props) {
  return (
    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 transition-colors dark:text-gray-100 md:text-5xl md:leading-14 lg:text-4xl lg:leading-10">
      {children}
    </h1>
  );
}
