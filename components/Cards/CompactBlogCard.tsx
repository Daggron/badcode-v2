import { memo } from 'react';
import BlogDescription from './dumb-components/BlogDescription';
import BlogMeta from './dumb-components/BlogMeta';

type Props = {
  /**
   * Title of the blog post
   */
  title: string;
  /**
   * Subtitle of the blog post
   */
  subtitle: string;
  /**
   * description of the card
   */
  description: string;
  /**
   * src of the image related with the card
   */
  src?: string;
};

const CompactBlogCard = (props: Props) => (
  <div className="flex-col">
    {props.src ? (
      <div className="flex-1 mb-4">
        <img src={props.src} className="rounded-xl" alt="" />
      </div>
    ) : null}
    <div className="flex-1 mb-2">
      <BlogMeta title={props.title} subtitle={props.subtitle} />
    </div>
    <div className="flex-1">
      <BlogDescription description={props.description} />
    </div>
  </div>
);

CompactBlogCard.defaultProps = {
  src: undefined,
};

export default memo(CompactBlogCard);
