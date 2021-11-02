import {Audio} from 'expo-av';

await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });

const { sound: playbackObject } = await Audio.Sound.createAsync(
  { uri: 'http://foo/bar.mp3' },
  { shouldPlay: true }
);
