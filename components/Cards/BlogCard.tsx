import * as React from 'react';
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
   * blog post related with the field 
   */
  tags?: string;
  /**
   * description of the card 
   */
  description: string;
  /**
   * src of the image related with the card
   */
  src?: string;
};

function BlogCard(props: Props) {
    return (
      <div className={styles['blog-card']}>
        <div className={styles['blog-meta']}>
          <div className="flex-col mb-2">
            <BlogMeta
              title={props.title}
              subtitle={props.subtitle}
            />
          </div>
          <BlogDescription
            description={props.description}
          />
        </div>
      </div>
    );
}

// https://images.unsplash.com/photo-1628191079535-d1900add3533?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80
BlogCard.defaultProps = {
  src: null,
  tags: null,
};

export default React.memo(BlogCard);