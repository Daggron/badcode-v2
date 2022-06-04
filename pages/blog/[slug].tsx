import React from 'react';
import { GetStaticProps } from 'next';
import { serialize } from 'next-mdx-remote/serialize';

import BlogPost from '../../scenes/BlogPost/BlogPost';
import SeoManager from '../../components/SeoManager/SeoManager';

import { getAllPosts, getPostBySlug } from '../../utils/index';
import { BlogFrontMatter } from '../../types/blogfrontMatter';

function BlogPosts(props: { source: any; frontMatter: BlogFrontMatter }) {
  return (
    <>
      <SeoManager
        pageTitle={`Bad Code | ${props.frontMatter.pageTitle}`}
        title={props.frontMatter.title}
        description={props.frontMatter.description}
        tags={props.frontMatter.tags.toString()}
        slug={props.frontMatter.slug}
      />
      <BlogPost source={props.source} />
    </>
  );
}

export function getStaticPaths() {
  const posts = getAllPosts();
  const paths = posts.map(({ data: eachPost }) => ({
    params: { slug: eachPost.slug },
  }));
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (pageData) => {
  const postData = getPostBySlug(pageData.params?.slug as string);
  const mdxSource = await serialize(postData.content, {
    mdxOptions: {
      remarkPlugins: [
        [
          require('remark-prism'),
          {
            transformInlineCode: true,
          },
        ],
      ],
      rehypePlugins: [],
    },
    scope: postData.data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: postData.data,
    },
  };
};

export default BlogPosts;
