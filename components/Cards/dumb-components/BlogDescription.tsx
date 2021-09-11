import React from 'react';

type Props = {
  /**
   * Description of the blog post
   */
  description: string;
};

function BlogDescription(props: Props) {
  return <p className="text-18 lh-157 font-light">{props.description}</p>;
}

export default React.memo(BlogDescription);
