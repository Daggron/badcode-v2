import React from 'react';
import { BlogCard } from "../Cards";
import { blogFrontMatter } from "../../types/blogfrontMatter";
import Link from 'next/link';

type Props = {
  blogs: blogFrontMatter[]
}

/**
 * renderer function to render an array of blogs
 * 
 * @param {Props} props - props to be passed to the component
 * @param {blogFrontMatter[]} props.blogs - array of blogs to be rendered
 * @returns {React.ReactComponent} - returns a react component
 */

function BlogsRenderer(props: Props) {
  return (
    <>
      {props.blogs.map(({ data: blog }) => (
        <div className="mb24" key={blog.slug}>
          <Link href={`/blog/${blog.slug}`}>
            <a>
              <BlogCard
                title={blog.title}
                subtitle={blog.subtitle}
                description={blog.description}
                src={blog.src}
              />
            </a>
          </Link>
        </div>
      ))}
    </>
  );
}

export default React.memo(BlogsRenderer);