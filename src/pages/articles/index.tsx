import type { NextPage } from 'next';
import { FaCode } from 'react-icons/fa';
import { GiMeditation } from 'react-icons/gi';
import { LuCandlestickChart } from 'react-icons/lu';

import posts from '@/lib/contentLayerAdapter';

import CustomLink from '@/components/CustomLink';
import LayoutPerPage from '@/components/LayoutPerPage';
import LayoutWrapper from '@/components/LayoutWrapper';
// ==================================================== //
import PostList, { PostForPostList } from '@/components/PostList';

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
    icon: <LuCandlestickChart className="size-7" />,
  },
  {
    tag: 'mindfulness',
    name: 'Mindfulness',
    icon: <GiMeditation className="size-7" />,
  },
  { tag: 'coding', name: 'Coding', icon: <FaCode className="size-7" /> },
];

const Home: NextPage = (props) => {
  return (
    <LayoutWrapper>
      <LayoutPerPage>
        <div className="container">
          <div className="title mb-8 w-full text-center">Article Topics</div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            {sections.map((section, index) => Section(index))}
          </div>
        </div>
      </LayoutPerPage>
    </LayoutWrapper>
  );
};

export default Home;
