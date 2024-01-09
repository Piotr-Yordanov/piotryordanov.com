import type { NextPage } from 'next';

import LayoutPerPage from '@/components/LayoutPerPage';
import PreparePostLists, {
  GetStaticProps,
  Props,
} from '@/components/PreparePostLists';

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  return await PreparePostLists(context);
};

// ==================================================== //

import PostList, { PostForPostList } from '@/components/PostList';

const Home: NextPage = (props) => {
  return (
    <LayoutPerPage>
      <div className="prose my-12 space-y-2 transition-colors md:prose-lg dark:prose-dark md:space-y-5">
        <h1 className="text-center font-mono sm:text-left">Article Topics</h1>
      </div>

      <div className="my-4 divide-y divide-gray-200 transition-colors dark:divide-gray-700">
        <PostList posts={props.posts} />
      </div>
    </LayoutPerPage>
  );
};

export default Home;
