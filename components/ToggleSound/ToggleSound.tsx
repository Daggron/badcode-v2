import useSound from 'use-sound';
import styles from './ToggleSound.module.css';

type Props = {
  /**
   * boolean to check if the user has muted the sound or not and show button
   * accordingly
   */
  isMuted: boolean;
  /**
   * function to toggle the sound on click of the button
   */
  toggleSound: () => void;
};

function ToggleSound(props: Props) {
  const [play] = useSound('/muteClick.mp3', { volume: 0.25 });

  function toggleSound() {
    props.toggleSound();
    play();
  }

  return (
    <button
      title={props.isMuted ? 'Enable Sound' : 'Mute Sound'}
      aria-label={props.isMuted ? 'Enable Sound' : 'Mute Sound'}
      className={styles.button}
      onClick={toggleSound}
      type="button"
    >
      <svg width="32" height="32" viewBox="0 0 18 18" fill="none">
        <path
          d="M8.25 3.75L4.5 6.75H1.5V11.25H4.5L8.25 14.25V3.75Z"
          className={styles.hooter}
        />
        <path
          d="
            M14.3025 3.69751
            C15.7086 5.10397 16.4984 7.01128 16.4984 9.00001
            C16.4984 10.9887 15.7086 12.8961 14.3025 14.3025
          "
          style={{ opacity: props.isMuted ? 0 : 1 }}
          className={styles.soundLine}
        />
        <path
          d="
            M11.655 6.34501
            C12.358 7.04824 12.753 8.00189 12.753 8.99626
            C12.753 9.99063 12.358 10.9443 11.655 11.6475
          "
          style={{ opacity: props.isMuted ? 0 : 1 }}
          className={styles.soundLine}
        />
      </svg>
    </button>
  );
}

function ToggleSoundWrapped(props: Props) {
  return (
    <div className={styles.container}>
      <ToggleSound isMuted={props.isMuted} toggleSound={props.toggleSound} />
    </div>
  );
}

export default ToggleSoundWrapped;
