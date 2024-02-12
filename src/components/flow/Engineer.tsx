const portfolio = [
  {
    link: 'https://zeistab.com',
    text: 'Zeistab',
  },
  {
    link: 'https://hephaestus-theta.vercel.app/',
    text: 'Hephaestus',
  },
  {
    link: 'https://scalpson.piotryordanov.com/',
    text: 'Scalpson',
  },
  {
    link: 'https://gg-landingpage.vercel.app/',
    text: 'Good Ghosting',
  },
];
export default function Engineer() {
  return (
    <div className="px-2 text-[8px]">
      <div className="">10+ years of shippping high quality webapps.</div>
      <div className="">Portfolio</div>
      <ul className="list-disc pl-4">
        {portfolio.map((item) => {
          return (
            <li key={item.text}>
              <a href={item.link} target="_blank">
                {item.text}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
