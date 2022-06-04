import React from 'react';
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';
import { CodeSandbox, CodePen } from 'mdx-embed';

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
  Image,
  CodeSandbox,
  CodePen,
};

function BlogPost(props: any) {
  return (
    <main className="content">
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <MDXRemote {...props.source} components={components} />
    </main>
  );
}

export default BlogPost;
