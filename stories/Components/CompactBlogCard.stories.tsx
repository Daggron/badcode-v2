import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CompactBlogCard } from '../../components/Cards';

export const TemplatedBlogCard: ComponentStory<typeof CompactBlogCard> = (
  args,
) => (
  <CompactBlogCard
    title={args.title}
    subtitle={args.subtitle}
    src={args.src}
    description={args.description}
  />
);

export default {
  title: 'Cards/Blog/CompactBlogCard',
  component: CompactBlogCard,
  args: {
    title: 'How State works in react',
    subtitle:
      'my state mistakes which were causing problems with the components performance',
    description: 'Lets take a look at the children components',
    src: 'https://images.unsplash.com/photo-1628191079535-d1900add3533?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80',
  },
} as ComponentMeta<typeof CompactBlogCard>;
