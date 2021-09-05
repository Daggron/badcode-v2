import React from 'react';
import { serialize } from 'next-mdx-remote/serialize';

import BlogPost from '../../scenes/BlogPost/BlogPost';
import SeoManager from '../../components/SeoManager/SeoManager';

import { getAllPosts, getPostBySlug } from '../../utils/index';

function BlogPosts(props) {
  return (
    <>
      <SeoManager
        pageTitle={props.frontMatter.pageTitle}
        title={props.frontMatter.title}
        description={props.frontMatter.description}
        tags={props.frontMatter.tags}
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
    fallback: false
  }
}

export async function getStaticProps(pageData) {
  const postData = getPostBySlug(pageData.params.slug);
  const mdxSource = await serialize(postData.content, {
    mdxOptions: {
      remarkPlugins: [
        require('remark-prism'),
        {
          transformInlineCode: true,
        },
      ],
      rehypePlugins: [],
    },
    scope: postData.data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: postData.data,
    }
  }
}

export default BlogPosts;