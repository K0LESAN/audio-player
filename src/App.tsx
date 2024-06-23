import { AppRoot, SimpleCell, Image } from '@vkontakte/vkui';
import { Icon16MoreVertical } from '@vkontakte/icons';
import audioIcon from './assets/audio-icon.webp';
import { useAudioController } from './useAudioController';
import { formatSecondsToTimeString } from './formatSecondsToTimeString';
import audio from './assets/audio.mp3';
import './App.css';

const App = () => {
  const { toggleAudioPlay: onClick, currentTime } = useAudioController(audio);

  return (
    <AppRoot className='root'>
      <div className='wrapper'>
        <div className='wrapper__inner'>
          <SimpleCell>
            <Image
              size={40}
              src={audioIcon}
              onClick={onClick}
            />
          </SimpleCell>
          <SimpleCell subtitle='Death Grips'>Takyon (Death Yon)</SimpleCell>
        </div>
        <SimpleCell before={formatSecondsToTimeString(currentTime)}>
          <Icon16MoreVertical className='menu' />
        </SimpleCell>
      </div>
    </AppRoot>
  );
};

export default App;
