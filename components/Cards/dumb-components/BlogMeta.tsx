import * as React from 'react';

type Props = {
  /**
   * The title of the blog post.
   */
  title: string,
  /**
   * The date of the blog post.
   */
  subtitle: string,
}
const BlogMeta = (props: Props) => (
  <>
    <h4 className="text-purple-600 mb-1 text-32 font-medium">{props.title}</h4>
    <p className="text-16 text-gray-500 font-normal lh-157">{props.subtitle}</p>
  </>
)

export default React.memo(BlogMeta);
