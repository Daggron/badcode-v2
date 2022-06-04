import React from 'react';
import Link from 'next/link';
import { BlogCard } from '../Cards';
import { BlogPostData } from '../../types/blogfrontMatter';

type Props = {
  blogs: BlogPostData[];
};

/**
 * renderer function to render an array of blogs
 */
function BlogsRenderer(props: Props) {
  return (
    <>
      {props.blogs.map(({ data: blog }) => (
        <div className="mb24" key={blog.slug}>
          <Link href={`/blog/${blog.slug}`}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <BlogCard
                title={blog.title}
                subtitle={blog.subtitle}
                description={blog.description}
              />
            </a>
          </Link>
        </div>
      ))}
    </>
  );
}

export default React.memo(BlogsRenderer);
