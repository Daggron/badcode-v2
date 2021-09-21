import React from 'react';
import BlogsRenderer from '../../components/BlogsRenderer';
import { Heading } from '../../components/Typography';

type BlogPostMeta = {
  data: {
    title: string;
    subtitle: string;
    date: string;
    description: string;
    slug: string;
    tags?: string[];
    author?: string;
    src?: string;
    pageTitle: string;
  };
  filePath: string;
};

type Props = {
  blogMetaData: BlogPostMeta[];
};

function Home(props: Props) {
  return (
    <>
      <div className="mb32">
        <Heading.H2 text="Blog" className="mb-8" />
        <BlogsRenderer blogs={props.blogMetaData} />
      </div>
    </>
  );
}

export default React.memo(Home);
