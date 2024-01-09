import type { NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArticleJsonLd } from 'next-seo';
import { LuCandlestickChart } from 'react-icons/lu';
import { TbAlpha } from 'react-icons/tb';

import {
  getCommandPalettePosts,
  PostForCommandPalette,
} from '@/components/CommandPalette/getCommandPalettePosts';
import { useCommandPalettePostActions } from '@/components/CommandPalette/useCommandPalettePostActions';
import Divider from '@/components/Divider';
import LayoutPerPage from '@/components/LayoutPerPage';
import PostList, { PostForPostList } from '@/components/PostList';
import { siteConfigs } from '@/configs/siteConfigs';
import { allPostsNewToOld } from '@/lib/contentLayerAdapter';
import generateRSS from '@/lib/generateRSS';

type PostForIndexPage = PostForPostList;

type Props = {
  posts: PostForIndexPage[];
  commandPalettePosts: PostForCommandPalette[];
};
export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const locale = context.locale!;

  const commandPalettePosts = getCommandPalettePosts();
  const posts = allPostsNewToOld.map((post) => ({
    slug: post.slug,
    date: post.date,
    title: post.title,
    description: post.description,
    path: post.path,
    tags: post.tags,
  })) as PostForIndexPage[];

  generateRSS();

  return {
    props: {
      ...(await serverSideTranslations(locale, ['indexPage', 'common'])),
      posts,
      commandPalettePosts,
    },
  };
};

const Home: NextPage<Props> = ({ posts, commandPalettePosts }) => {
  useCommandPalettePostActions(commandPalettePosts);

  return (
    <LayoutPerPage>
      <div className="py-16 sm:py-20 lg:py-48">
        <div className="text-center font-inter">
          <h1 className="text-3xl tracking-tight text-[#001C46] sm:text-8xl">
            <div className="inline">Find and cultivate</div>
            <TbAlpha className="inline text-4xl text-red-600 sm:text-8xl lg:ml-4" />
            in the financial markets
            <LuCandlestickChart className="ml-4 inline text-3xl text-cyan-600 sm:text-7xl lg:ml-6" />
          </h1>
        </div>
      </div>
      <Divider />
    </LayoutPerPage>
  );
};

export default Home;
