import { useEffect, useState } from 'react';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import ToggleSoundWrapped from '../ToggleSound/ToggleSound';

export default function FeatureNavBar() {
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const muteStatus = localStorage.getItem('isMuted');
    setIsMuted(muteStatus === 'true');
  }, []);

  const toggleSound = () => {
    setIsMuted(!isMuted);
    window.localStorage.setItem('isMuted', String(!isMuted));
  };

  return (
    <div className="flex items-center">
      <div className="mr-4">
        <ThemeSwitcher isMuted={isMuted} />
      </div>
      <ToggleSoundWrapped isMuted={isMuted} toggleSound={toggleSound} />
    </div>
  );
}
