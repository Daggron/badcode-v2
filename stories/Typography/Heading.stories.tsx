import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Heading } from '../../components/Typography';

export const H1: ComponentStory<typeof Heading.H1> = (args) => (
  <Heading.H1 text={args.text} />
);

export const H2: ComponentStory<typeof Heading.H2> = (args) => (
  <Heading.H2 text={args.text} />
);

export const H3: ComponentStory<typeof Heading.H3> = (args) => (
  <Heading.H3 text={args.text} />
);

export const H4: ComponentStory<typeof Heading.H4> = (args) => (
  <Heading.H4 text={args.text} />
);

export const H5: ComponentStory<typeof Heading.H5> = (args) => (
  <Heading.H5 text={args.text} />
);

export const H6: ComponentStory<typeof Heading.H6> = (args) => (
  <Heading.H6 text={args.text} />
);

export default {
  title: 'Typography/Heading/H1',
  component: Heading.H1,
  args: {
    text: 'Heading',
  },
} as ComponentMeta<typeof Heading.H1>;
