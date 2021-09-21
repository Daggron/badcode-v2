import useSWR from 'swr';
import { LinkComponent } from '../Typography';
import SpotifySvg from './SpotifySvg';

import styles from './NowPlaying.module.css';

export default function NowPlaying() {
  const { data } = useSWR('/api/fetchCurrentPlayingSong', {
    refreshInterval: 21000, // polling after 3 min 10 sec - avg song length,
    refreshWhenHidden: true,
  });

  if (data?.isPlaying) {
    return (
      <p className="flex items-center mb-8">
        {[1, 2, 3].map((i) => (
          <span key={i} className={styles.crest} />
        ))}
        <span className="mr4" />
        <LinkComponent
          text={`${data.title} - ${data.artist}`}
          href={data.songUrl}
          type="external"
          ariaLabel={`I am linking to ${data.title} by ${data.artist}`}
        />
      </p>
    );
  }

  return (
    <p className="flex items-center mb-8">
      <span className="mr4">
        <SpotifySvg />
      </span>
      <span>Not Playing &mdash; Spotify</span>
    </p>
  );
}
