import React from 'react';
import { MDXRemote } from 'next-mdx-remote';

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
    <main className="content">
      <MDXRemote {...props.source} components={components} />
    </main>
  );
}

export default BlogPost;
