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
        'prose mx-auto max-w-full pr-20 pt-12 font-sans transition-colors dark:prose-dark',
        styles.postBod
      )}
    >
      {children}
      <PostCTA />
    </div>
  );
}
