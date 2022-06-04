import { ComponentMeta, ComponentStory } from '@storybook/react';
import SpotifySvg from '../../components/Spotify/SpotifySvg';

export const SpotifyLogo: ComponentStory<typeof SpotifySvg> = () => (
  <SpotifySvg />
);

export default {
  title: 'SVG/Spotify',
  component: SpotifySvg,
} as ComponentMeta<typeof SpotifySvg>;
