import { ComponentMeta, ComponentStory } from '@storybook/react';
import ThemeSwitcher from '../../components/ThemeSwitcher/ThemeSwitcher';

export const Default: ComponentStory<typeof ThemeSwitcher> = () => (
  <ThemeSwitcher />
);

export default {
  title: 'Components/ThemeSwitcher',
  component: ThemeSwitcher,
} as ComponentMeta<typeof ThemeSwitcher>;
