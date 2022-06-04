import { memo } from 'react';
import BlogDescription from './dumb-components/BlogDescription';
import BlogMeta from './dumb-components/BlogMeta';

import styles from './Blogcard.module.css';

type Props = {
  /**
   * Title of the blog post
   */
  title: string;
  /**
   * Subtitle of the blog post
   */
  subtitle: string;
  /**
   * description of the card
   */
  description: string;
};

function BlogCard(props: Props) {
  return (
    <div className={styles['blog-card']}>
      <div className={styles['blog-meta']}>
        <div className="flex-col mb-2">
          <BlogMeta title={props.title} subtitle={props.subtitle} />
        </div>
        <BlogDescription description={props.description} />
      </div>
    </div>
  );
}

export default memo(BlogCard);
