import type { NextPage } from 'next';
import { FaCode } from 'react-icons/fa';
import { GiMeditation } from 'react-icons/gi';
import { LuCandlestickChart } from 'react-icons/lu';

import CustomLink from '@/components/CustomLink';
import LayoutPerPage from '@/components/LayoutPerPage';
// ==================================================== //
import PostList, { PostForPostList } from '@/components/PostList';
import posts from '@/lib/contentLayerAdapter';

const Section = (index: number) => {
  const section = sections[index];
  const filteredPosts = posts.filter((post) => post.tags.includes(section.tag));
  console.log(filteredPosts);
  return (
    <div className="rounded-xl border-2 border-slate-900/30 font-mono">
      <div className="flex rounded-t-xl border-b border-slate-900/10 border-b-gray-200 bg-white p-4 py-6">
        <div className="">{section.icon}</div>
        <div className="ml-2 text-xl">{section.name}</div>
      </div>
      <div className="py-2">
        {filteredPosts.map((post, i) => {
          return (
            <div
              className="p-4 py-2 text-black underline decoration-primary underline-offset-2 hover:text-primary"
              key={i}
            >
              <CustomLink href={post.path}>
                <div key={i}>{post.title}</div>
              </CustomLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const sections = [
  {
    tag: 'quant',
    name: 'Quantitative Finance',
    icon: <LuCandlestickChart className="h-7 w-7" />,
  },
  {
    tag: 'mindfulness',
    name: 'Mindfulness',
    icon: <GiMeditation className="h-7 w-7" />,
  },
  { tag: 'coding', name: 'Coding', icon: <FaCode className="h-7 w-7" /> },
];

const Home: NextPage = (props) => {
  return (
    <LayoutPerPage>
      <div className="container">
        <div className="prose my-12 space-y-2 transition-colors dark:prose-dark md:prose-lg md:space-y-5">
          <h1 className="text-center font-mono sm:text-left">Article Topics</h1>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {sections.map((section, index) => Section(index))}
        </div>
      </div>
    </LayoutPerPage>
  );
};

export default Home;
