import clsx from 'clsx';

import styles from './PostBody.module.scss';
import PostCTA from './PostCTA';

type Props = {
  children: React.ReactNode;
};

export default function PostBody({ children }: Props) {
  return (
    <div
      className={clsx(
        'mx-auto max-w-full pt-12 font-inter transition-colors dark:prose-dark sm:prose sm:pr-20',
        styles.postBod
      )}
    >
      {children}
      <PostCTA />
    </div>
  );
}
