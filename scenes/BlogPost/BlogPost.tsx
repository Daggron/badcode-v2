import React from 'react';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';

import { H1, H2, H3, H4, H5, H6 } from '../../components/Typography/Heading';
import { LinkComponent } from '../../components/Typography';
import { CodeSandbox, CodePen } from 'mdx-embed';

const components = {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  LinkComponent,
  Image,
  CodeSandbox,
  CodePen,
};

function BlogPost(props) {
  return (
    <main className="content">
      <MDXRemote {...props.source} components={components} />
    </main>
  );
}

export default BlogPost;
