/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import { getMessaging, setBackgroundMessageHandler } from '@react-native-firebase/messaging';
import { qmzcs1djucsOnMessageRecieved } from './services/initializatiqmzcs1djucsonShared';

AppRegistry.registerComponent(appName, () => App);

setImmediate(() => {
  const messaging = getMessaging();
  setBackgroundMessageHandler(messaging, async remoteMessage => {
    await qmzcs1djucsOnMessageRecieved(remoteMessage);
  });
});
