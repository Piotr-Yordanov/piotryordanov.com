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
        <div className="pt-1">{section.icon}</div>
        <div className="ml-2">{section.name}</div>
      </div>
      {filteredPosts.map((post, i) => {
        console.log(post);
        return (
          <div
            className="p-4 py-6 text-black underline decoration-primary underline-offset-2 hover:text-primary"
            key={i}
          >
            <CustomLink href={post.path}>
              <div key={i}>{post.title}</div>
            </CustomLink>
          </div>
        );
      })}
    </div>
  );
};

const sections = [
  {
    tag: 'quant',
    name: 'Quantitative Finance',
    icon: <LuCandlestickChart />,
  },
  { tag: 'mindfulness', name: 'Mindfulness', icon: <GiMeditation /> },
  { tag: 'coding', name: 'Coding', icon: <FaCode /> },
];

const Home: NextPage = (props) => {
  return (
    <LayoutPerPage>
      <div className="prose my-12 space-y-2 transition-colors md:prose-lg dark:prose-dark md:space-y-5">
        <h1 className="text-center font-mono sm:text-left">Article Topics</h1>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {sections.map((section, index) => Section(index))}
      </div>
    </LayoutPerPage>
  );
};

export default Home;
