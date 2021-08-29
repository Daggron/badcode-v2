import React from 'react';
import { getAllPosts, getPostBySlug } from '../../utils/index';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { H1, H2, H3, H4, H5, H6 } from '../../components/Typography/Heading';
import { LinkComponent } from '../../components/Typography';

const components = {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  LinkComponent,
}

function BlogPost(props) {
  return (
    <div>
      <main>
        <MDXRemote {...props.source} components={components} />
      </main>
    </div>
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
        }
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

export default BlogPost;