import React from 'react';
import BlogsRenderer from '../../components/BlogsRenderer';
import { BlogCard } from '../../components/Cards';
import Line from '../../components/Line';
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
  };
  filePath: string;
}

type Props = {
  blogMetaData: BlogPostMeta[];
}

function Home(props: Props) {
  const latestPost = props.blogMetaData[0];
  return (
    <div>
      <Heading.H2 text="Latest Post" className="mb12" />
      <div className="mb12">
        <BlogsRenderer blogs={[latestPost]} />
      </div>
      {
        props.blogMetaData.length > 1  ? (
          <div className="mb12">
            <Line />
            <Heading.H2 text="All Posts" className="mb12" />
            <BlogsRenderer blogs={props.blogMetaData.slice(1)} />
          </div>
        ) : (
          null
        )
      }
    </div>
  );
}

export default React.memo(Home);
