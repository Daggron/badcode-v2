import { ComponentMeta, ComponentStory } from '@storybook/react';
import LinkComponent from '../../components/Typography/Links/index';

export const Template: ComponentStory<typeof LinkComponent> = (args) => (
  <LinkComponent text={args.text} type={args.type} href={args.href} />
);

export default {
  title: 'Typography/Link',
  component: LinkComponent,
  argTypes: {
    type: {
      options: ['internal', 'external'],
      control: { type: 'radio' },
    },
    text: {
      control: 'text',
    },
    href: {
      control: 'text',
    },
  },
  args: {
    type: 'internal',
    text: 'Link',
    href: 'https://www.google.com',
  },
} as ComponentMeta<typeof LinkComponent>;
