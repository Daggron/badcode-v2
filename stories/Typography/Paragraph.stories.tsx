import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Paragraph } from '../../components/Typography';

export const Template: ComponentStory<typeof Paragraph> = ({
  children,
  fontMedium,
}: {
  children: React.ReactNode;
  fontMedium: boolean;
}) => <Paragraph fontMedium={fontMedium}>{children}</Paragraph>;

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
  args: {
    children: 'Hello, world!',
  },
} as ComponentMeta<typeof Paragraph>;
