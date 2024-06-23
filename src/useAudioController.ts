import { useRef, useState, type MutableRefObject } from 'react';

interface IAudioController {
  toggleAudioPlay: () => void;
  currentTime: number;
  isPlayed: boolean;
}

export const useAudioController = (audio: string): IAudioController => {
  const { current: audioController }: MutableRefObject<HTMLAudioElement> =
    useRef(new Audio(audio));
  const [currentTime, setCurrentTime] = useState<number>(
    audioController.currentTime
  );
  const toggleAudioPlay = (): void => {
    if (audioController.paused) {
      audioController.play();
    } else {
      audioController.pause();
    }
  };
  audioController.ontimeupdate = (): void => {
    setCurrentTime(audioController.currentTime);
  };

  return { toggleAudioPlay, currentTime, isPlayed: !audioController.paused };
};
