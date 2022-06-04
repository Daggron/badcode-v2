import { ComponentMeta, ComponentStory } from '@storybook/react';
import HandWave from '../../components/Hand/Hand';

export const Hand: ComponentStory<typeof HandWave> = () => <HandWave />;

export default {
  title: 'Svg/HandWave',
  component: HandWave,
} as ComponentMeta<typeof HandWave>;
