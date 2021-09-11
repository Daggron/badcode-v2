import * as React from 'react';
import { Heading } from '../../Typography';

type Props = {
  /**
   * The title of the blog post.
   */
  title: string;
  /**
   * The date of the blog post.
   */
  subtitle: string;
};
const BlogMeta = (props: Props) => (
  <>
    <Heading.H4
      className="mb-1 heading text-32 font-medium"
      text={props.title}
    />
    <p className="text-16 font-normal lh-157">{props.subtitle}</p>
  </>
);

export default React.memo(BlogMeta);
