import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArticleJsonLd } from 'next-seo';

import {
  getCommandPalettePosts,
  PostForCommandPalette,
} from '@/components/CommandPalette/getCommandPalettePosts';
import { useCommandPalettePostActions } from '@/components/CommandPalette/useCommandPalettePostActions';
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
import { TbAlpha } from 'react-icons/tb';

const Home: NextPage<Props> = ({ posts, commandPalettePosts }) => {
  useCommandPalettePostActions(commandPalettePosts);

  return (
    <LayoutPerPage>
      <div className="py-16 sm:py-20 lg:py-48">
        <div className="text-center font-inter">
          <h1 className="text-3xl tracking-tight text-gray-900 sm:text-8xl">
            <div className="inline">Finding and cultivating</div>
            <TbAlpha className="inline inline text-4xl text-red-600 sm:text-8xl lg:ml-4" />
          </h1>
        </div>
      </div>
    </LayoutPerPage>
  );
};

export default Home;
