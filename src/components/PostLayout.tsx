import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

// import Comment from '@/components/Comment';
// import CustomLink from '@/components/CustomLink';
// import TableOfContents from '@/components/TableOfContents';
import PageTitle from '@/components/PageTitle';
import PostBody from '@/components/PostBody';
import formatDate from '@/lib/formatDate';

export interface PostForPostLayout {
  date: string;
  title: string;
  body: { raw: string };
}

export type RelatedPostForPostLayout = {
  title: string;
  path: string;
} | null;

type Props = {
  post: PostForPostLayout;
  nextPost: RelatedPostForPostLayout;
  prevPost: RelatedPostForPostLayout;
  children: React.ReactNode;
};

export default function PostLayout({
  post,
  nextPost,
  prevPost,
  children,
}: Props) {
  const {
    date,
    title,
    body: { raw },
  } = post;

  const { locale } = useRouter();
  const { t } = useTranslation(['common']);

  return (
    <article>
      <div className="divide-y divide-gray-200 transition-colors dark:divide-gray-700">
        <div
          className="pb-8 transition-colors lg:grid lg:grid-cols-4 lg:gap-x-6"
          style={{ gridTemplateRows: 'auto 1fr' }}
        >
          <div className="divide-y divide-gray-200 pb-8 pt-16 transition-colors dark:divide-gray-700 lg:col-span-3 lg:border-r-[1px]">
            <header className="pb-4 font-mono">
              <div className="space-y-1">
                <dl className="space-y-10">
                  <div>
                    <dt className="sr-only">{t('published-time')}</dt>
                    <dd className="text-base font-medium leading-6 text-blue-500 transition-colors">
                      <time dateTime={date}>{formatDate(date, locale)}</time>
                    </dd>
                  </div>
                </dl>

                <div className="mb-4">
                  <PageTitle>{title}</PageTitle>
                </div>
              </div>
              <div className="">#{post.tags}</div>
            </header>
            <PostBody>{children}</PostBody>
          </div>

          {/* DESKTOP TABLE OF CONTENTS 
                <TableOfContents source={raw} />
            */}
        </div>

        {/*
        <div className="divide-y divide-gray-200 pb-8 transition-colors dark:divide-gray-700">
          <Comment />

          <footer>
            <div className="flex flex-col gap-4 pt-4 text-base font-medium sm:flex-row sm:justify-between xl:gap-8 xl:pt-8">
              {prevPost ? (
                <div className="basis-6/12">
                  <h2 className="mb-1 text-xs uppercase tracking-wide text-gray-500 transition-colors dark:text-gray-400">
                    {t('previous-article')}
                  </h2>
                  <CustomLink
                    href={prevPost.path}
                    className="text-primary-500 transition-colors hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    &larr; {prevPost.title}
                  </CustomLink>
                </div>
              ) : (
                <div />
              )}
              {nextPost && (
                <div className="basis-6/12">
                  <h2 className="mb-1 text-left text-xs uppercase tracking-wide text-gray-500 transition-colors sm:text-right dark:text-gray-400">
                    {t('next-article')}
                  </h2>
                  <CustomLink
                    href={nextPost.path}
                    className="block text-primary-500 transition-colors hover:text-primary-600 sm:text-right dark:hover:text-primary-400"
                  >
                    {nextPost.title} &rarr;
                  </CustomLink>
                </div>
              )}
            </div>
          </footer>
        </div>
         */}
      </div>
    </article>
  );
}
