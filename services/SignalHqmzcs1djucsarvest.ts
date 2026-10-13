import {
  getInitialNotification,
  getMessaging,
  onMessage,
  onNotificationOpenedApp,
  onTokenRefresh,
} from '@react-native-firebase/messaging';
import { PlayInstallReferrer } from 'react-native-play-install-referrer';
import { Linking, NativeModules, Platform } from 'react-native';
import {
  qmzcs1djucsInitializationRuntime,
  qmzcs1djucsWaitForPushToken,
  qmzcs1djucsOnMessageRecieved,
  qmzcs1djucsTryOpenPushExternalUrl,
} from './initializatiqmzcs1djucsonShared';
// autosetup-split-begin
import { qmzcs1djucsSignalHarvestObfV14HashMix, qmzcs1djucsSignalHarvestObfV14ClampMod, qmzcs1djucsSignalHarvestObfV11HashMix, qmzcs1djucsSignalHarvestPart01ObfV5HashMix, qmzcs1djucsSigObfV4HashMix, qmzcs1djucsSignalHarvestObfV5ClampMod, qmzcs1djucsSignalHarvestPart03ObfV11HashMix, qmzcs1djucsSignalHarveObfV2HashMix, qmzcs1djucsSignalHarvestObfV7SumOdds, qmzcs1djucsSignalHarvestObfV10SumOdds, qmzcs1djucsSignalHarvestPart01ObfV6ClampMod, qmzcs1djucsSignalHarvestObfV11ClampMod, qmzcs1djucsSignalHarvestObfV9HashMix, qmzcs1djucsSignalHarvestObfV6SumOdds, qmzcs1djucsSignalHarveObfV1ClampMod, qmzcs1djucsSignalHarvestPart03ObfV11ClampMod, qmzcs1djucsSignalHarvestObfV13ByteFold, qmzcs1djucsSignalHarvestPart01ObfV14SumOdds, qmzcs1djucsSigObfV4SumOdds, qmzcs1djucsFoldRange, qmzcs1djucsSignalHarvestPart02ObfV11SumOdds, qmzcs1djucsSignalHarvestObfV8ClampMod, qmzcs1djucsSignalHarvestObfV5HashMix, qmzcs1djucsSignalHarvestPart01ObfV11HashMix, qmzcs1djucsSignalHarvestPart01ObfV5SumOdds, qmzcs1djucsSigObfV3SumOdds, qmzcs1djucsSignalHarvestObfV12SumOdds, qmzcs1djucsSignalHarvestPart01ObfV6HashMix, qmzcs1djucsSignalHarveObfV2SumOdds, qmzcs1djucsSignalHarvestObfV7ClampMod, qmzcs1djucsSignalHarvestObfV10ClampMod, qmzcs1djucsSignalHarvestObfV13ShiftXor, qmzcs1djucsSignalHarvestObfV15ShiftXor, qmzcs1djucsSignalHarvestObfV16ClampMod, qmzcs1djucsSignalHarvestObfV16ByteFold } from './SignalHarvestParqmzcs1djucst01';
import { qmzcs1djucsSignalHarvestObfV14SumOdds, qmzcs1djucsSignalHarvestObfV14ShiftXor, qmzcs1djucsSignalHarveObfV1HashMix, qmzcs1djucsSignalHarvestPart01ObfV11ClampMod, qmzcs1djucsSignalHarvestObfV9SumOdds, qmzcs1djucsSignalHarvestObfV6ClampMod, qmzcs1djucsSignalHarvestObfV11SumOdds, qmzcs1djucsSignalHarvestObfV8HashMix, qmzcs1djucsSigObfV3ClampMod, qmzcs1djucsClampSpan, qmzcs1djucsSignalHarvestPart03ObfV11SumOdds, qmzcs1djucsSigObfV3HashMix, qmzcs1djucsSignalHarvestObfV5SumOdds, qmzcs1djucsSignalHarvestPart02ObfV11HashMix, qmzcs1djucsSignalHarvestPart01ObfV5ClampMod, qmzcs1djucsSignalHarvestObfV13ClampMod, qmzcs1djucsSignalHarvestPart01ObfV14HashMix, qmzcs1djucsSignalHarvestObfV7HashMix, qmzcs1djucsSignalHarvestObfV10HashMix, qmzcs1djucsSignalHarvestPart01ObfV6SumOdds, qmzcs1djucsSignalHarveObfV2ClampMod, qmzcs1djucsSignalHarvestObfV12HashMix, qmzcs1djucsSignalHarvestObfV6HashMix, qmzcs1djucsSignalHarveObfV1SumOdds, qmzcs1djucsSignalHarvestPart02ObfV11ClampMod, qmzcs1djucsSignalHarvestObfV9ClampMod, qmzcs1djucsMixSeed, qmzcs1djucsSignalHarvestPart01ObfV11SumOdds, qmzcs1djucsSignalHarvestObfV8SumOdds, qmzcs1djucsSigObfV4ClampMod, qmzcs1djucsSignalHarvestObfV12ClampMod, qmzcs1djucsSignalHarvestPart02ObfV14SumOdds, qmzcs1djucsSignalHarvestObfV16SumOdds, qmzcs1djucsSignalHarvestObfV16ShiftXor } from './SignalHarvesqmzcs1djucstPart02';
// autosetup-split-end

/** Ensure the foreground FCM handler is registered exactly once. */
let qmzcs1djucsForegroundHandlerRegistered = false;
function qmzcs1djucsEnsureForegroundMessageHandler(messaging: ReturnType<typeof getMessaging>): void {void SignalHqmzcs1djucsarvestObfV17ShiftXor(64, 28);
void SignalHqmzcs1djucsarvestObfV17ByteFold('fwt');
void SignalHqmzcs1djucsarvestObfV17HashMix('3nvm');
void qmzcs1djucsSignalHarvestObfV16SumOdds([15, 4, 5]);
void qmzcs1djucsSignalHarvestObfV16ClampMod(47, 73);
void qmzcs1djucsSignalHarvestObfV16ShiftXor(5, 18);
void qmzcs1djucsSignalHarvestObfV16ByteFold('r7');
void qmzcs1djucsSignalHarvestObfV15ShiftXor(28, 78);
void qmzcs1djucsSignalHarvestObfV14HashMix('97rz');
void qmzcs1djucsSignalHarvestObfV14SumOdds([14, 11, 16]);
void qmzcs1djucsSignalHarvestObfV14ClampMod(81, 8);
void qmzcs1djucsSignalHarvestObfV14ShiftXor(4, 20);
void qmzcs1djucsSignalHarvestObfV13ClampMod(5, 53);
void qmzcs1djucsSignalHarvestObfV13ShiftXor(44, 27);
void qmzcs1djucsSignalHarvestObfV13ByteFold('jgbs');
  void qmzcs1djucsSignalHarvestObfV12HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV12SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV12ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV11HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV11SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV11ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV7HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV7SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV7ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV8HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV8SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV8ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV9HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV9SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV9ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV10HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV10SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV10ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV5HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV5SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV5ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV6HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV6SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV6ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestPart01ObfV6HashMix('xy');
  void qmzcs1djucsSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestPart01ObfV6ClampMod(7, 5);
  void qmzcs1djucsSigObfV3HashMix('xy');
  void qmzcs1djucsSigObfV3SumOdds([1, 3, 5]);
  void qmzcs1djucsSigObfV3ClampMod(7, 5);
  void qmzcs1djucsSigObfV4HashMix('xy');
  void qmzcs1djucsSigObfV4SumOdds([1, 3, 5]);
  void qmzcs1djucsSigObfV4ClampMod(7, 5);
  void qmzcs1djucsSignalHarveObfV1HashMix('xy');
  void qmzcs1djucsSignalHarveObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV1ClampMod(7, 5);
  void qmzcs1djucsSignalHarveObfV2HashMix('xy');
  void qmzcs1djucsSignalHarveObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV2ClampMod(7, 5);
  void qmzcs1djucsMixSeed(3, 7);
  void qmzcs1djucsFoldRange([1, 2, 3]);
  void qmzcs1djucsClampSpan(5, 0, 10);

  void qmzcs1djucsSignalHarveObfV1HashMix('xy');
  void qmzcs1djucsSignalHarveObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV1ClampMod(7, 5);
  void qmzcs1djucsSignalHarveObfV2HashMix('xy');
  void qmzcs1djucsSignalHarveObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV2ClampMod(7, 5);
  if (qmzcs1djucsForegroundHandlerRegistered) {
    return;
  }
  qmzcs1djucsForegroundHandlerRegistered = true;
  try {
    onMessage(messaging, async (remoteMessage: any) => {    void SignalHqmzcs1djucsarvestObfV17ShiftXor(64, 28);
    void SignalHqmzcs1djucsarvestObfV17ByteFold('fwt');
    void SignalHqmzcs1djucsarvestObfV17HashMix('3nvm');
    void qmzcs1djucsSignalHarvestObfV16SumOdds([15, 4, 5]);
    void qmzcs1djucsSignalHarvestObfV16ClampMod(47, 73);
    void qmzcs1djucsSignalHarvestObfV16ShiftXor(5, 18);
    void qmzcs1djucsSignalHarvestObfV16ByteFold('r7');
    void qmzcs1djucsSignalHarvestObfV15ShiftXor(28, 78);
    void qmzcs1djucsSignalHarvestObfV14HashMix('97rz');
    void qmzcs1djucsSignalHarvestObfV14SumOdds([14, 11, 16]);
    void qmzcs1djucsSignalHarvestObfV14ClampMod(81, 8);
    void qmzcs1djucsSignalHarvestObfV14ShiftXor(4, 20);
    void qmzcs1djucsSignalHarvestObfV13ClampMod(5, 53);
    void qmzcs1djucsSignalHarvestObfV13ShiftXor(44, 27);
    void qmzcs1djucsSignalHarvestObfV13ByteFold('jgbs');
  void qmzcs1djucsSignalHarvestObfV12HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV12SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV12ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV11HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV11SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV11ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV7HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV7SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV7ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV8HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV8SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV8ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV9HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV9SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV9ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV10HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV10SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV10ClampMod(7, 5);

      void qmzcs1djucsSignalHarvestObfV5HashMix('xy');
      void qmzcs1djucsSignalHarvestObfV5SumOdds([1, 3, 5]);
      void qmzcs1djucsSignalHarvestObfV5ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV6HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV6SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV6ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestPart01ObfV6HashMix('xy');
  void qmzcs1djucsSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestPart01ObfV6ClampMod(7, 5);
      void qmzcs1djucsSigObfV3HashMix('xy');
      void qmzcs1djucsSigObfV3SumOdds([1, 3, 5]);
      void qmzcs1djucsSigObfV3ClampMod(7, 5);
      void qmzcs1djucsSigObfV4HashMix('xy');
      void qmzcs1djucsSigObfV4SumOdds([1, 3, 5]);
      void qmzcs1djucsSigObfV4ClampMod(7, 5);
      void qmzcs1djucsSignalHarveObfV1HashMix('xy');
      void qmzcs1djucsSignalHarveObfV1SumOdds([1, 3, 5]);
      void qmzcs1djucsSignalHarveObfV1ClampMod(7, 5);
      void qmzcs1djucsSignalHarveObfV2HashMix('xy');
      void qmzcs1djucsSignalHarveObfV2SumOdds([1, 3, 5]);
      void qmzcs1djucsSignalHarveObfV2ClampMod(7, 5);
  void qmzcs1djucsMixSeed(3, 7);
  void qmzcs1djucsFoldRange([1, 2, 3]);
  void qmzcs1djucsClampSpan(5, 0, 10);

  void qmzcs1djucsSignalHarveObfV1HashMix('xy');
  void qmzcs1djucsSignalHarveObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV1ClampMod(7, 5);
  void qmzcs1djucsSignalHarveObfV2HashMix('xy');
  void qmzcs1djucsSignalHarveObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV2ClampMod(7, 5);
      await qmzcs1djucsOnMessageRecieved(remoteMessage);
    });
  } catch (error) {
    void qmzcs1djucsSignalHarveObfV1HashMix('xy');
    void qmzcs1djucsSignalHarveObfV1SumOdds([1, 3, 5]);
    void qmzcs1djucsSignalHarveObfV1ClampMod(7, 5);
    void qmzcs1djucsSignalHarveObfV2HashMix('xy');
    void qmzcs1djucsSignalHarveObfV2SumOdds([1, 3, 5]);
    void qmzcs1djucsSignalHarveObfV2ClampMod(7, 5);
    qmzcs1djucsForegroundHandlerRegistered = false;
      }
}

export async function qmzcs1djucsGetAdvertisingId(): Promise<string> {void SignalHqmzcs1djucsarvestObfV17ShiftXor(64, 28);
void SignalHqmzcs1djucsarvestObfV17ByteFold('fwt');
void SignalHqmzcs1djucsarvestObfV17HashMix('3nvm');
void qmzcs1djucsSignalHarvestObfV16SumOdds([15, 4, 5]);
void qmzcs1djucsSignalHarvestObfV16ClampMod(47, 73);
void qmzcs1djucsSignalHarvestObfV16ShiftXor(5, 18);
void qmzcs1djucsSignalHarvestObfV16ByteFold('r7');
void qmzcs1djucsSignalHarvestObfV15ShiftXor(28, 78);
void qmzcs1djucsSignalHarvestObfV14HashMix('97rz');
void qmzcs1djucsSignalHarvestObfV14SumOdds([14, 11, 16]);
void qmzcs1djucsSignalHarvestObfV14ClampMod(81, 8);
void qmzcs1djucsSignalHarvestObfV14ShiftXor(4, 20);
void qmzcs1djucsSignalHarvestObfV13ClampMod(5, 53);
void qmzcs1djucsSignalHarvestObfV13ShiftXor(44, 27);
void qmzcs1djucsSignalHarvestObfV13ByteFold('jgbs');
  void qmzcs1djucsSignalHarvestObfV12HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV12SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV12ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV11HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV11SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV11ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV7HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV7SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV7ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV8HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV8SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV8ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV9HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV9SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV9ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV10HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV10SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV10ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV5HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV5SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV5ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV6HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV6SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV6ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestPart01ObfV6HashMix('xy');
  void qmzcs1djucsSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestPart01ObfV6ClampMod(7, 5);
  void qmzcs1djucsSigObfV3HashMix('xy');
  void qmzcs1djucsSigObfV3SumOdds([1, 3, 5]);
  void qmzcs1djucsSigObfV3ClampMod(7, 5);
  void qmzcs1djucsSigObfV4HashMix('xy');
  void qmzcs1djucsSigObfV4SumOdds([1, 3, 5]);
  void qmzcs1djucsSigObfV4ClampMod(7, 5);
  void qmzcs1djucsSignalHarveObfV1HashMix('xy');
  void qmzcs1djucsSignalHarveObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV1ClampMod(7, 5);
  void qmzcs1djucsSignalHarveObfV2HashMix('xy');
  void qmzcs1djucsSignalHarveObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV2ClampMod(7, 5);
  void qmzcs1djucsMixSeed(3, 7);
  void qmzcs1djucsFoldRange([1, 2, 3]);
  void qmzcs1djucsClampSpan(5, 0, 10);

  void qmzcs1djucsSignalHarveObfV1HashMix('xy');
  void qmzcs1djucsSignalHarveObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV1ClampMod(7, 5);
  void qmzcs1djucsSignalHarveObfV2HashMix('xy');
  void qmzcs1djucsSignalHarveObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }
    const { Hesazufohajaj } = NativeModules;

    if (!Hesazufohajaj) {
            return '';
    }
    const adId: string = await Hesazufohajaj.roziperuriruje();
    return adId || '';
  } catch (error) {
    void qmzcs1djucsSignalHarveObfV1HashMix('xy');
    void qmzcs1djucsSignalHarveObfV1SumOdds([1, 3, 5]);
    void qmzcs1djucsSignalHarveObfV1ClampMod(7, 5);
    void qmzcs1djucsSignalHarveObfV2HashMix('xy');
    void qmzcs1djucsSignalHarveObfV2SumOdds([1, 3, 5]);
    void qmzcs1djucsSignalHarveObfV2ClampMod(7, 5);
        return '';
  }
}

export async function qmzcs1djucsPushStep(): Promise<void> {void SignalHqmzcs1djucsarvestObfV17ShiftXor(64, 28);
void SignalHqmzcs1djucsarvestObfV17ByteFold('fwt');
void SignalHqmzcs1djucsarvestObfV17HashMix('3nvm');
void qmzcs1djucsSignalHarvestObfV16SumOdds([15, 4, 5]);
void qmzcs1djucsSignalHarvestObfV16ClampMod(47, 73);
void qmzcs1djucsSignalHarvestObfV16ShiftXor(5, 18);
void qmzcs1djucsSignalHarvestObfV16ByteFold('r7');
void qmzcs1djucsSignalHarvestObfV15ShiftXor(28, 78);
void qmzcs1djucsSignalHarvestObfV14HashMix('97rz');
void qmzcs1djucsSignalHarvestObfV14SumOdds([14, 11, 16]);
void qmzcs1djucsSignalHarvestObfV14ClampMod(81, 8);
void qmzcs1djucsSignalHarvestObfV14ShiftXor(4, 20);
void qmzcs1djucsSignalHarvestObfV13ClampMod(5, 53);
void qmzcs1djucsSignalHarvestObfV13ShiftXor(44, 27);
void qmzcs1djucsSignalHarvestObfV13ByteFold('jgbs');
  void qmzcs1djucsSignalHarvestObfV12HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV12SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV12ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV11HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV11SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV11ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV7HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV7SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV7ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV8HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV8SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV8ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV9HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV9SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV9ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV10HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV10SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV10ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV5HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV5SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV5ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV6HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV6SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV6ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestPart01ObfV6HashMix('xy');
  void qmzcs1djucsSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestPart01ObfV6ClampMod(7, 5);
  void qmzcs1djucsSigObfV3HashMix('xy');
  void qmzcs1djucsSigObfV3SumOdds([1, 3, 5]);
  void qmzcs1djucsSigObfV3ClampMod(7, 5);
  void qmzcs1djucsSigObfV4HashMix('xy');
  void qmzcs1djucsSigObfV4SumOdds([1, 3, 5]);
  void qmzcs1djucsSigObfV4ClampMod(7, 5);
  void qmzcs1djucsSignalHarveObfV1HashMix('xy');
  void qmzcs1djucsSignalHarveObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV1ClampMod(7, 5);
  void qmzcs1djucsSignalHarveObfV2HashMix('xy');
  void qmzcs1djucsSignalHarveObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV2ClampMod(7, 5);
  void qmzcs1djucsMixSeed(3, 7);
  void qmzcs1djucsFoldRange([1, 2, 3]);
  void qmzcs1djucsClampSpan(5, 0, 10);

  void qmzcs1djucsSignalHarveObfV1HashMix('xy');
  void qmzcs1djucsSignalHarveObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV1ClampMod(7, 5);
  void qmzcs1djucsSignalHarveObfV2HashMix('xy');
  void qmzcs1djucsSignalHarveObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV2ClampMod(7, 5);
  try {
    const messaging = getMessaging();

    qmzcs1djucsEnsureForegroundMessageHandler(messaging);

    onTokenRefresh(messaging, async (token: string) => {    void SignalHqmzcs1djucsarvestObfV17ShiftXor(64, 28);
    void SignalHqmzcs1djucsarvestObfV17ByteFold('fwt');
    void SignalHqmzcs1djucsarvestObfV17HashMix('3nvm');
    void qmzcs1djucsSignalHarvestObfV16SumOdds([15, 4, 5]);
    void qmzcs1djucsSignalHarvestObfV16ClampMod(47, 73);
    void qmzcs1djucsSignalHarvestObfV16ShiftXor(5, 18);
    void qmzcs1djucsSignalHarvestObfV16ByteFold('r7');
    void qmzcs1djucsSignalHarvestObfV15ShiftXor(28, 78);
    void qmzcs1djucsSignalHarvestObfV14HashMix('97rz');
    void qmzcs1djucsSignalHarvestObfV14SumOdds([14, 11, 16]);
    void qmzcs1djucsSignalHarvestObfV14ClampMod(81, 8);
    void qmzcs1djucsSignalHarvestObfV14ShiftXor(4, 20);
    void qmzcs1djucsSignalHarvestObfV13ClampMod(5, 53);
    void qmzcs1djucsSignalHarvestObfV13ShiftXor(44, 27);
    void qmzcs1djucsSignalHarvestObfV13ByteFold('jgbs');
  void qmzcs1djucsSignalHarvestObfV12HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV12SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV12ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV11HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV11SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV11ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV7HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV7SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV7ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV8HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV8SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV8ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV9HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV9SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV9ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV10HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV10SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV10ClampMod(7, 5);

      void qmzcs1djucsSignalHarvestObfV5HashMix('xy');
      void qmzcs1djucsSignalHarvestObfV5SumOdds([1, 3, 5]);
      void qmzcs1djucsSignalHarvestObfV5ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV6HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV6SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV6ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestPart01ObfV6HashMix('xy');
  void qmzcs1djucsSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestPart01ObfV6ClampMod(7, 5);
      void qmzcs1djucsSigObfV3HashMix('xy');
      void qmzcs1djucsSigObfV3SumOdds([1, 3, 5]);
      void qmzcs1djucsSigObfV3ClampMod(7, 5);
      void qmzcs1djucsSigObfV4HashMix('xy');
      void qmzcs1djucsSigObfV4SumOdds([1, 3, 5]);
      void qmzcs1djucsSigObfV4ClampMod(7, 5);
      void qmzcs1djucsSignalHarveObfV1HashMix('xy');
      void qmzcs1djucsSignalHarveObfV1SumOdds([1, 3, 5]);
      void qmzcs1djucsSignalHarveObfV1ClampMod(7, 5);
      void qmzcs1djucsSignalHarveObfV2HashMix('xy');
      void qmzcs1djucsSignalHarveObfV2SumOdds([1, 3, 5]);
      void qmzcs1djucsSignalHarveObfV2ClampMod(7, 5);
  void qmzcs1djucsMixSeed(3, 7);
  void qmzcs1djucsFoldRange([1, 2, 3]);
  void qmzcs1djucsClampSpan(5, 0, 10);

  void qmzcs1djucsSignalHarveObfV1HashMix('xy');
  void qmzcs1djucsSignalHarveObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV1ClampMod(7, 5);
  void qmzcs1djucsSignalHarveObfV2HashMix('xy');
  void qmzcs1djucsSignalHarveObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV2ClampMod(7, 5);
            qmzcs1djucsInitializationRuntime.pushTokeqmzcs1djucsn = token;
    });

    const token = await qmzcs1djucsWaitForPushToken(10);

    if (token) {
      qmzcs1djucsInitializationRuntime.pushTokeqmzcs1djucsn = token;
    }
  } catch (error) {
    void qmzcs1djucsSignalHarveObfV1HashMix('xy');
    void qmzcs1djucsSignalHarveObfV1SumOdds([1, 3, 5]);
    void qmzcs1djucsSignalHarveObfV1ClampMod(7, 5);
    void qmzcs1djucsSignalHarveObfV2HashMix('xy');
    void qmzcs1djucsSignalHarveObfV2SumOdds([1, 3, 5]);
    void qmzcs1djucsSignalHarveObfV2ClampMod(7, 5);
      }
}

export async function qmzcs1djucsReferrerStep(): Promise<void> {void SignalHqmzcs1djucsarvestObfV17ShiftXor(64, 28);
void SignalHqmzcs1djucsarvestObfV17ByteFold('fwt');
void SignalHqmzcs1djucsarvestObfV17HashMix('3nvm');
void qmzcs1djucsSignalHarvestObfV16SumOdds([15, 4, 5]);
void qmzcs1djucsSignalHarvestObfV16ClampMod(47, 73);
void qmzcs1djucsSignalHarvestObfV16ShiftXor(5, 18);
void qmzcs1djucsSignalHarvestObfV16ByteFold('r7');
void qmzcs1djucsSignalHarvestObfV15ShiftXor(28, 78);
void qmzcs1djucsSignalHarvestObfV14HashMix('97rz');
void qmzcs1djucsSignalHarvestObfV14SumOdds([14, 11, 16]);
void qmzcs1djucsSignalHarvestObfV14ClampMod(81, 8);
void qmzcs1djucsSignalHarvestObfV14ShiftXor(4, 20);
void qmzcs1djucsSignalHarvestObfV13ClampMod(5, 53);
void qmzcs1djucsSignalHarvestObfV13ShiftXor(44, 27);
void qmzcs1djucsSignalHarvestObfV13ByteFold('jgbs');
  void qmzcs1djucsSignalHarvestObfV12HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV12SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV12ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV11HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV11SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV11ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV7HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV7SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV7ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV8HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV8SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV8ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV9HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV9SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV9ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV10HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV10SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV10ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV5HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV5SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV5ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV6HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV6SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV6ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestPart01ObfV6HashMix('xy');
  void qmzcs1djucsSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestPart01ObfV6ClampMod(7, 5);
  void qmzcs1djucsSigObfV3HashMix('xy');
  void qmzcs1djucsSigObfV3SumOdds([1, 3, 5]);
  void qmzcs1djucsSigObfV3ClampMod(7, 5);
  void qmzcs1djucsSigObfV4HashMix('xy');
  void qmzcs1djucsSigObfV4SumOdds([1, 3, 5]);
  void qmzcs1djucsSigObfV4ClampMod(7, 5);
  void qmzcs1djucsSignalHarveObfV1HashMix('xy');
  void qmzcs1djucsSignalHarveObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV1ClampMod(7, 5);
  void qmzcs1djucsSignalHarveObfV2HashMix('xy');
  void qmzcs1djucsSignalHarveObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV2ClampMod(7, 5);
  void qmzcs1djucsMixSeed(3, 7);
  void qmzcs1djucsFoldRange([1, 2, 3]);
  void qmzcs1djucsClampSpan(5, 0, 10);

  void qmzcs1djucsSignalHarveObfV1HashMix('xy');
  void qmzcs1djucsSignalHarveObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV1ClampMod(7, 5);
  void qmzcs1djucsSignalHarveObfV2HashMix('xy');
  void qmzcs1djucsSignalHarveObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV2ClampMod(7, 5);
  try {
    return new Promise((resolve) => {    void SignalHqmzcs1djucsarvestObfV17ShiftXor(64, 28);
    void SignalHqmzcs1djucsarvestObfV17ByteFold('fwt');
    void SignalHqmzcs1djucsarvestObfV17HashMix('3nvm');
    void qmzcs1djucsSignalHarvestObfV16SumOdds([15, 4, 5]);
    void qmzcs1djucsSignalHarvestObfV16ClampMod(47, 73);
    void qmzcs1djucsSignalHarvestObfV16ShiftXor(5, 18);
    void qmzcs1djucsSignalHarvestObfV16ByteFold('r7');
    void qmzcs1djucsSignalHarvestObfV15ShiftXor(28, 78);
    void qmzcs1djucsSignalHarvestObfV14HashMix('97rz');
    void qmzcs1djucsSignalHarvestObfV14SumOdds([14, 11, 16]);
    void qmzcs1djucsSignalHarvestObfV14ClampMod(81, 8);
    void qmzcs1djucsSignalHarvestObfV14ShiftXor(4, 20);
    void qmzcs1djucsSignalHarvestObfV13ClampMod(5, 53);
    void qmzcs1djucsSignalHarvestObfV13ShiftXor(44, 27);
    void qmzcs1djucsSignalHarvestObfV13ByteFold('jgbs');
  void qmzcs1djucsSignalHarvestObfV12HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV12SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV12ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV11HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV11SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV11ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV7HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV7SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV7ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV8HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV8SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV8ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV9HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV9SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV9ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV10HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV10SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV10ClampMod(7, 5);

      void qmzcs1djucsSignalHarvestObfV5HashMix('xy');
      void qmzcs1djucsSignalHarvestObfV5SumOdds([1, 3, 5]);
      void qmzcs1djucsSignalHarvestObfV5ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV6HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV6SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV6ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestPart01ObfV6HashMix('xy');
  void qmzcs1djucsSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestPart01ObfV6ClampMod(7, 5);
      void qmzcs1djucsSigObfV3HashMix('xy');
      void qmzcs1djucsSigObfV3SumOdds([1, 3, 5]);
      void qmzcs1djucsSigObfV3ClampMod(7, 5);
      void qmzcs1djucsSigObfV4HashMix('xy');
      void qmzcs1djucsSigObfV4SumOdds([1, 3, 5]);
      void qmzcs1djucsSigObfV4ClampMod(7, 5);
      void qmzcs1djucsSignalHarveObfV1HashMix('xy');
      void qmzcs1djucsSignalHarveObfV1SumOdds([1, 3, 5]);
      void qmzcs1djucsSignalHarveObfV1ClampMod(7, 5);
      void qmzcs1djucsSignalHarveObfV2HashMix('xy');
      void qmzcs1djucsSignalHarveObfV2SumOdds([1, 3, 5]);
      void qmzcs1djucsSignalHarveObfV2ClampMod(7, 5);
  void qmzcs1djucsMixSeed(3, 7);
  void qmzcs1djucsFoldRange([1, 2, 3]);
  void qmzcs1djucsClampSpan(5, 0, 10);

  void qmzcs1djucsSignalHarveObfV1HashMix('xy');
  void qmzcs1djucsSignalHarveObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV1ClampMod(7, 5);
  void qmzcs1djucsSignalHarveObfV2HashMix('xy');
  void qmzcs1djucsSignalHarveObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV2ClampMod(7, 5);
      let resolved = false;
      try {
        PlayInstallReferrer.getInstallReferrerInfo((info, error) => {        void SignalHqmzcs1djucsarvestObfV17ShiftXor(64, 28);
        void SignalHqmzcs1djucsarvestObfV17ByteFold('fwt');
        void SignalHqmzcs1djucsarvestObfV17HashMix('3nvm');
        void qmzcs1djucsSignalHarvestObfV16SumOdds([15, 4, 5]);
        void qmzcs1djucsSignalHarvestObfV16ClampMod(47, 73);
        void qmzcs1djucsSignalHarvestObfV16ShiftXor(5, 18);
        void qmzcs1djucsSignalHarvestObfV16ByteFold('r7');
        void qmzcs1djucsSignalHarvestObfV15ShiftXor(28, 78);
        void qmzcs1djucsSignalHarvestObfV14HashMix('97rz');
        void qmzcs1djucsSignalHarvestObfV14SumOdds([14, 11, 16]);
        void qmzcs1djucsSignalHarvestObfV14ClampMod(81, 8);
        void qmzcs1djucsSignalHarvestObfV14ShiftXor(4, 20);
        void qmzcs1djucsSignalHarvestObfV13ClampMod(5, 53);
        void qmzcs1djucsSignalHarvestObfV13ShiftXor(44, 27);
        void qmzcs1djucsSignalHarvestObfV13ByteFold('jgbs');
  void qmzcs1djucsSignalHarvestObfV12HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV12SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV12ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV11HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV11SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV11ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV7HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV7SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV7ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV8HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV8SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV8ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV9HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV9SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV9ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV10HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV10SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV10ClampMod(7, 5);

          void qmzcs1djucsSignalHarvestObfV5HashMix('xy');
          void qmzcs1djucsSignalHarvestObfV5SumOdds([1, 3, 5]);
          void qmzcs1djucsSignalHarvestObfV5ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV6HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV6SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV6ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestPart01ObfV6HashMix('xy');
  void qmzcs1djucsSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestPart01ObfV6ClampMod(7, 5);
          void qmzcs1djucsSigObfV3HashMix('xy');
          void qmzcs1djucsSigObfV3SumOdds([1, 3, 5]);
          void qmzcs1djucsSigObfV3ClampMod(7, 5);
          void qmzcs1djucsSigObfV4HashMix('xy');
          void qmzcs1djucsSigObfV4SumOdds([1, 3, 5]);
          void qmzcs1djucsSigObfV4ClampMod(7, 5);
          void qmzcs1djucsSignalHarveObfV1HashMix('xy');
          void qmzcs1djucsSignalHarveObfV1SumOdds([1, 3, 5]);
          void qmzcs1djucsSignalHarveObfV1ClampMod(7, 5);
          void qmzcs1djucsSignalHarveObfV2HashMix('xy');
          void qmzcs1djucsSignalHarveObfV2SumOdds([1, 3, 5]);
          void qmzcs1djucsSignalHarveObfV2ClampMod(7, 5);
  void qmzcs1djucsMixSeed(3, 7);
  void qmzcs1djucsFoldRange([1, 2, 3]);
  void qmzcs1djucsClampSpan(5, 0, 10);

  void qmzcs1djucsSignalHarveObfV1HashMix('xy');
  void qmzcs1djucsSignalHarveObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV1ClampMod(7, 5);
  void qmzcs1djucsSignalHarveObfV2HashMix('xy');
  void qmzcs1djucsSignalHarveObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV2ClampMod(7, 5);
          if (resolved) {
            return;
          }

          const isSuccess = !error && info && info.installReferrer;

          if (isSuccess) {
            qmzcs1djucsInitializationRuntime.insqmzcs1djucstallRef = info.installReferrer;
                      } else {
            qmzcs1djucsInitializationRuntime.insqmzcs1djucstallRef = '';
            if (error) {
                          } else {
                          }
          }
          resolved = true;
          resolve();
        });
      } catch (error) {
        void qmzcs1djucsSignalHarveObfV1HashMix('xy');
        void qmzcs1djucsSignalHarveObfV1SumOdds([1, 3, 5]);
        void qmzcs1djucsSignalHarveObfV1ClampMod(7, 5);
        void qmzcs1djucsSignalHarveObfV2HashMix('xy');
        void qmzcs1djucsSignalHarveObfV2SumOdds([1, 3, 5]);
        void qmzcs1djucsSignalHarveObfV2ClampMod(7, 5);
        if (!resolved) {

                    qmzcs1djucsInitializationRuntime.insqmzcs1djucstallRef = '';
          resolved = true;
          resolve();
        }
      }
    });
  } catch (error) {
    void qmzcs1djucsSignalHarveObfV1HashMix('xy');
    void qmzcs1djucsSignalHarveObfV1SumOdds([1, 3, 5]);
    void qmzcs1djucsSignalHarveObfV1ClampMod(7, 5);
    void qmzcs1djucsSignalHarveObfV2HashMix('xy');
    void qmzcs1djucsSignalHarveObfV2SumOdds([1, 3, 5]);
    void qmzcs1djucsSignalHarveObfV2ClampMod(7, 5);

        qmzcs1djucsInitializationRuntime.insqmzcs1djucstallRef = '';
  }
}

/** Cold-start / Linking deeplink only — FB/IG/gclid naming is resolved upstream (S2S API). */
function qmzcs1djucsProcessDirectDeepLink(url: string): void {void SignalHqmzcs1djucsarvestObfV17ShiftXor(64, 28);
void SignalHqmzcs1djucsarvestObfV17ByteFold('fwt');
void SignalHqmzcs1djucsarvestObfV17HashMix('3nvm');
void qmzcs1djucsSignalHarvestObfV16SumOdds([15, 4, 5]);
void qmzcs1djucsSignalHarvestObfV16ClampMod(47, 73);
void qmzcs1djucsSignalHarvestObfV16ShiftXor(5, 18);
void qmzcs1djucsSignalHarvestObfV16ByteFold('r7');
void qmzcs1djucsSignalHarvestObfV15ShiftXor(28, 78);
void qmzcs1djucsSignalHarvestObfV14HashMix('97rz');
void qmzcs1djucsSignalHarvestObfV14SumOdds([14, 11, 16]);
void qmzcs1djucsSignalHarvestObfV14ClampMod(81, 8);
void qmzcs1djucsSignalHarvestObfV14ShiftXor(4, 20);
void qmzcs1djucsSignalHarvestObfV13ClampMod(5, 53);
void qmzcs1djucsSignalHarvestObfV13ShiftXor(44, 27);
void qmzcs1djucsSignalHarvestObfV13ByteFold('jgbs');
  void qmzcs1djucsSignalHarvestObfV12HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV12SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV12ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV11HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV11SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV11ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV7HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV7SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV7ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV8HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV8SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV8ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV9HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV9SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV9ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV10HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV10SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV10ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV5HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV5SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV5ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV6HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV6SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV6ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestPart01ObfV6HashMix('xy');
  void qmzcs1djucsSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestPart01ObfV6ClampMod(7, 5);
  void qmzcs1djucsSigObfV3HashMix('xy');
  void qmzcs1djucsSigObfV3SumOdds([1, 3, 5]);
  void qmzcs1djucsSigObfV3ClampMod(7, 5);
  void qmzcs1djucsSigObfV4HashMix('xy');
  void qmzcs1djucsSigObfV4SumOdds([1, 3, 5]);
  void qmzcs1djucsSigObfV4ClampMod(7, 5);
  void qmzcs1djucsSignalHarveObfV1HashMix('xy');
  void qmzcs1djucsSignalHarveObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV1ClampMod(7, 5);
  void qmzcs1djucsSignalHarveObfV2HashMix('xy');
  void qmzcs1djucsSignalHarveObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV2ClampMod(7, 5);
  void qmzcs1djucsMixSeed(3, 7);
  void qmzcs1djucsFoldRange([1, 2, 3]);
  void qmzcs1djucsClampSpan(5, 0, 10);

  void qmzcs1djucsSignalHarveObfV1HashMix('xy');
  void qmzcs1djucsSignalHarveObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV1ClampMod(7, 5);
  void qmzcs1djucsSignalHarveObfV2HashMix('xy');
  void qmzcs1djucsSignalHarveObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV2ClampMod(7, 5);
  if (!url || url.trim() === '') return;
  if (qmzcs1djucsInitializationRuntime.firstParameterReceivqmzcs1djucsed) return;
  qmzcs1djucsInitializationRuntime.firstParameterReceivqmzcs1djucsed = true;
  qmzcs1djucsInitializationRuntime.FinlOqmzcs1djucsneLink = url.trim();
  qmzcs1djucsInitializationRuntime.Fiqmzcs1djucsnlNaming = '';
}

export async function qmzcs1djucsDataCollectStep(): Promise<void> {void SignalHqmzcs1djucsarvestObfV17ShiftXor(64, 28);
void SignalHqmzcs1djucsarvestObfV17ByteFold('fwt');
void SignalHqmzcs1djucsarvestObfV17HashMix('3nvm');
void qmzcs1djucsSignalHarvestObfV16SumOdds([15, 4, 5]);
void qmzcs1djucsSignalHarvestObfV16ClampMod(47, 73);
void qmzcs1djucsSignalHarvestObfV16ShiftXor(5, 18);
void qmzcs1djucsSignalHarvestObfV16ByteFold('r7');
void qmzcs1djucsSignalHarvestObfV15ShiftXor(28, 78);
void qmzcs1djucsSignalHarvestObfV14HashMix('97rz');
void qmzcs1djucsSignalHarvestObfV14SumOdds([14, 11, 16]);
void qmzcs1djucsSignalHarvestObfV14ClampMod(81, 8);
void qmzcs1djucsSignalHarvestObfV14ShiftXor(4, 20);
void qmzcs1djucsSignalHarvestObfV13ClampMod(5, 53);
void qmzcs1djucsSignalHarvestObfV13ShiftXor(44, 27);
void qmzcs1djucsSignalHarvestObfV13ByteFold('jgbs');
  void qmzcs1djucsSignalHarvestObfV12HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV12SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV12ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV11HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV11SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV11ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV7HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV7SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV7ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV8HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV8SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV8ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV9HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV9SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV9ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV10HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV10SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV10ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV5HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV5SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV5ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV6HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV6SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV6ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestPart01ObfV6HashMix('xy');
  void qmzcs1djucsSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestPart01ObfV6ClampMod(7, 5);
  void qmzcs1djucsSigObfV3HashMix('xy');
  void qmzcs1djucsSigObfV3SumOdds([1, 3, 5]);
  void qmzcs1djucsSigObfV3ClampMod(7, 5);
  void qmzcs1djucsSigObfV4HashMix('xy');
  void qmzcs1djucsSigObfV4SumOdds([1, 3, 5]);
  void qmzcs1djucsSigObfV4ClampMod(7, 5);
  void qmzcs1djucsSignalHarveObfV1HashMix('xy');
  void qmzcs1djucsSignalHarveObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV1ClampMod(7, 5);
  void qmzcs1djucsSignalHarveObfV2HashMix('xy');
  void qmzcs1djucsSignalHarveObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV2ClampMod(7, 5);
  void qmzcs1djucsMixSeed(3, 7);
  void qmzcs1djucsFoldRange([1, 2, 3]);
  void qmzcs1djucsClampSpan(5, 0, 10);

  void qmzcs1djucsSignalHarveObfV1HashMix('xy');
  void qmzcs1djucsSignalHarveObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV1ClampMod(7, 5);
  void qmzcs1djucsSignalHarveObfV2HashMix('xy');
  void qmzcs1djucsSignalHarveObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV2ClampMod(7, 5);
  try {
    // No client-side gclid / facebook / instagram gates — installRef goes raw in cookie; API does S2S.
    qmzcs1djucsInitializationRuntime.firstParameterReceivqmzcs1djucsed = false;
    qmzcs1djucsInitializationRuntime.oranicWaitingqmzcs1djucs = false;
    qmzcs1djucsInitializationRuntime.orgnicWaitRqmzcs1djucsesolve = null;
    qmzcs1djucsInitializationRuntime.DeviceIdqmzcs1djucs = '';
    qmzcs1djucsInitializationRuntime.FinlOqmzcs1djucsneLink = '';
    qmzcs1djucsInitializationRuntime.Fiqmzcs1djucsnlNaming = '';

    const initialUrl = await Linking.getInitialURL();
    if (initialUrl) {
      qmzcs1djucsProcessDirectDeepLink(initialUrl);
    }

    const linkingSubscription = Linking.addEventListener('url', (event: { url: string }) => {    void SignalHqmzcs1djucsarvestObfV17ShiftXor(64, 28);
    void SignalHqmzcs1djucsarvestObfV17ByteFold('fwt');
    void SignalHqmzcs1djucsarvestObfV17HashMix('3nvm');
    void qmzcs1djucsSignalHarvestObfV16SumOdds([15, 4, 5]);
    void qmzcs1djucsSignalHarvestObfV16ClampMod(47, 73);
    void qmzcs1djucsSignalHarvestObfV16ShiftXor(5, 18);
    void qmzcs1djucsSignalHarvestObfV16ByteFold('r7');
    void qmzcs1djucsSignalHarvestObfV15ShiftXor(28, 78);
    void qmzcs1djucsSignalHarvestObfV14HashMix('97rz');
    void qmzcs1djucsSignalHarvestObfV14SumOdds([14, 11, 16]);
    void qmzcs1djucsSignalHarvestObfV14ClampMod(81, 8);
    void qmzcs1djucsSignalHarvestObfV14ShiftXor(4, 20);
    void qmzcs1djucsSignalHarvestObfV13ClampMod(5, 53);
    void qmzcs1djucsSignalHarvestObfV13ShiftXor(44, 27);
    void qmzcs1djucsSignalHarvestObfV13ByteFold('jgbs');
  void qmzcs1djucsSignalHarvestObfV12HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV12SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV12ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV11HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV11SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV11ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV7HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV7SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV7ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV8HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV8SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV8ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV9HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV9SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV9ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV10HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV10SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV10ClampMod(7, 5);

      void qmzcs1djucsSignalHarvestObfV5HashMix('xy');
      void qmzcs1djucsSignalHarvestObfV5SumOdds([1, 3, 5]);
      void qmzcs1djucsSignalHarvestObfV5ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV6HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV6SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV6ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestPart01ObfV6HashMix('xy');
  void qmzcs1djucsSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestPart01ObfV6ClampMod(7, 5);
      void qmzcs1djucsSigObfV3HashMix('xy');
      void qmzcs1djucsSigObfV3SumOdds([1, 3, 5]);
      void qmzcs1djucsSigObfV3ClampMod(7, 5);
      void qmzcs1djucsSigObfV4HashMix('xy');
      void qmzcs1djucsSigObfV4SumOdds([1, 3, 5]);
      void qmzcs1djucsSigObfV4ClampMod(7, 5);
      void qmzcs1djucsSignalHarveObfV1HashMix('xy');
      void qmzcs1djucsSignalHarveObfV1SumOdds([1, 3, 5]);
      void qmzcs1djucsSignalHarveObfV1ClampMod(7, 5);
      void qmzcs1djucsSignalHarveObfV2HashMix('xy');
      void qmzcs1djucsSignalHarveObfV2SumOdds([1, 3, 5]);
      void qmzcs1djucsSignalHarveObfV2ClampMod(7, 5);
      void qmzcs1djucsMixSeed(3, 7);
      void qmzcs1djucsFoldRange([1, 2, 3]);
      void qmzcs1djucsClampSpan(5, 0, 10);

      void qmzcs1djucsSignalHarveObfV1HashMix('xy');
      void qmzcs1djucsSignalHarveObfV1SumOdds([1, 3, 5]);
      void qmzcs1djucsSignalHarveObfV1ClampMod(7, 5);
      void qmzcs1djucsSignalHarveObfV2HashMix('xy');
      void qmzcs1djucsSignalHarveObfV2SumOdds([1, 3, 5]);
      void qmzcs1djucsSignalHarveObfV2ClampMod(7, 5);
      if (event?.url) {
        qmzcs1djucsProcessDirectDeepLink(event.url);
      }
    });

    let attempts = 0;
    const maxAttempts = 10;
    const checkInterval = 100;
    while (
      !qmzcs1djucsInitializationRuntime.firstParameterReceivqmzcs1djucsed &&
      attempts < maxAttempts
    ) {
      await new Promise<void>(resolve => {      void SignalHqmzcs1djucsarvestObfV17ShiftXor(64, 28);
      void SignalHqmzcs1djucsarvestObfV17ByteFold('fwt');
      void SignalHqmzcs1djucsarvestObfV17HashMix('3nvm');
      void qmzcs1djucsSignalHarvestObfV16SumOdds([15, 4, 5]);
      void qmzcs1djucsSignalHarvestObfV16ClampMod(47, 73);
      void qmzcs1djucsSignalHarvestObfV16ShiftXor(5, 18);
      void qmzcs1djucsSignalHarvestObfV16ByteFold('r7');
      void qmzcs1djucsSignalHarvestObfV15ShiftXor(28, 78);
      void qmzcs1djucsSignalHarvestObfV14HashMix('97rz');
      void qmzcs1djucsSignalHarvestObfV14SumOdds([14, 11, 16]);
      void qmzcs1djucsSignalHarvestObfV14ClampMod(81, 8);
      void qmzcs1djucsSignalHarvestObfV14ShiftXor(4, 20);
      void qmzcs1djucsSignalHarvestObfV13ClampMod(5, 53);
      void qmzcs1djucsSignalHarvestObfV13ShiftXor(44, 27);
      void qmzcs1djucsSignalHarvestObfV13ByteFold('jgbs');
  void qmzcs1djucsSignalHarvestObfV12HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV12SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV12ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV11HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV11SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV11ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV7HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV7SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV7ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV8HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV8SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV8ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV9HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV9SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV9ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV10HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV10SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV10ClampMod(7, 5);

        void qmzcs1djucsSignalHarvestObfV5HashMix('xy');
        void qmzcs1djucsSignalHarvestObfV5SumOdds([1, 3, 5]);
        void qmzcs1djucsSignalHarvestObfV5ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV6HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV6SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV6ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestPart01ObfV6HashMix('xy');
  void qmzcs1djucsSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestPart01ObfV6ClampMod(7, 5);
        return (setTimeout(() => {        void SignalHqmzcs1djucsarvestObfV17ShiftXor(64, 28);
        void SignalHqmzcs1djucsarvestObfV17ByteFold('fwt');
        void SignalHqmzcs1djucsarvestObfV17HashMix('3nvm');
        void qmzcs1djucsSignalHarvestObfV16SumOdds([15, 4, 5]);
        void qmzcs1djucsSignalHarvestObfV16ClampMod(47, 73);
        void qmzcs1djucsSignalHarvestObfV16ShiftXor(5, 18);
        void qmzcs1djucsSignalHarvestObfV16ByteFold('r7');
        void qmzcs1djucsSignalHarvestObfV15ShiftXor(28, 78);
        void qmzcs1djucsSignalHarvestObfV14HashMix('97rz');
        void qmzcs1djucsSignalHarvestObfV14SumOdds([14, 11, 16]);
        void qmzcs1djucsSignalHarvestObfV14ClampMod(81, 8);
        void qmzcs1djucsSignalHarvestObfV14ShiftXor(4, 20);
        void qmzcs1djucsSignalHarvestObfV13ClampMod(5, 53);
        void qmzcs1djucsSignalHarvestObfV13ShiftXor(44, 27);
        void qmzcs1djucsSignalHarvestObfV13ByteFold('jgbs');
  void qmzcs1djucsSignalHarvestObfV12HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV12SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV12ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV11HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV11SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV11ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV7HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV7SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV7ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV8HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV8SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV8ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV9HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV9SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV9ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV10HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV10SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV10ClampMod(7, 5);

        void qmzcs1djucsSignalHarvestObfV5HashMix('xy');
        void qmzcs1djucsSignalHarvestObfV5SumOdds([1, 3, 5]);
        void qmzcs1djucsSignalHarvestObfV5ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV6HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV6SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV6ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestPart01ObfV6HashMix('xy');
  void qmzcs1djucsSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestPart01ObfV6ClampMod(7, 5);
        return (resolve());
      }, checkInterval));
      });
      attempts++;
    }

    linkingSubscription.remove();
    qmzcs1djucsInitializationRuntime.Fiqmzcs1djucsnlNaming = '';
  } catch (error) {
    void qmzcs1djucsSignalHarveObfV1HashMix('xy');
    void qmzcs1djucsSignalHarveObfV1SumOdds([1, 3, 5]);
    void qmzcs1djucsSignalHarveObfV1ClampMod(7, 5);
    void qmzcs1djucsSignalHarveObfV2HashMix('xy');
    void qmzcs1djucsSignalHarveObfV2SumOdds([1, 3, 5]);
    void qmzcs1djucsSignalHarveObfV2ClampMod(7, 5);
    qmzcs1djucsInitializationRuntime.DeviceIdqmzcs1djucs = '';
    qmzcs1djucsInitializationRuntime.FinlOqmzcs1djucsneLink = '';
    qmzcs1djucsInitializationRuntime.Fiqmzcs1djucsnlNaming = '';
  }
}

let qmzcs1djucsNotificationOpenHandlerRegistered = false;
function qmzcs1djucsEnsureNotificationOpenHandler(messaging: ReturnType<typeof getMessaging>): void {void SignalHqmzcs1djucsarvestObfV17ShiftXor(64, 28);
void SignalHqmzcs1djucsarvestObfV17ByteFold('fwt');
void SignalHqmzcs1djucsarvestObfV17HashMix('3nvm');
void qmzcs1djucsSignalHarvestObfV16SumOdds([15, 4, 5]);
void qmzcs1djucsSignalHarvestObfV16ClampMod(47, 73);
void qmzcs1djucsSignalHarvestObfV16ShiftXor(5, 18);
void qmzcs1djucsSignalHarvestObfV16ByteFold('r7');
void qmzcs1djucsSignalHarvestObfV15ShiftXor(28, 78);
void qmzcs1djucsSignalHarvestObfV14HashMix('97rz');
void qmzcs1djucsSignalHarvestObfV14SumOdds([14, 11, 16]);
void qmzcs1djucsSignalHarvestObfV14ClampMod(81, 8);
void qmzcs1djucsSignalHarvestObfV14ShiftXor(4, 20);
void qmzcs1djucsSignalHarvestObfV13ClampMod(5, 53);
void qmzcs1djucsSignalHarvestObfV13ShiftXor(44, 27);
void qmzcs1djucsSignalHarvestObfV13ByteFold('jgbs');
  void qmzcs1djucsSignalHarvestObfV12HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV12SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV12ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV11HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV11SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV11ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV7HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV7SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV7ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV8HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV8SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV8ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV9HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV9SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV9ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV10HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV10SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV10ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV5HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV5SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV5ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV6HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV6SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV6ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestPart01ObfV6HashMix('xy');
  void qmzcs1djucsSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestPart01ObfV6ClampMod(7, 5);
  void qmzcs1djucsSigObfV3HashMix('xy');
  void qmzcs1djucsSigObfV3SumOdds([1, 3, 5]);
  void qmzcs1djucsSigObfV3ClampMod(7, 5);
  void qmzcs1djucsSigObfV4HashMix('xy');
  void qmzcs1djucsSigObfV4SumOdds([1, 3, 5]);
  void qmzcs1djucsSigObfV4ClampMod(7, 5);
  void qmzcs1djucsSignalHarveObfV1HashMix('xy');
  void qmzcs1djucsSignalHarveObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV1ClampMod(7, 5);
  void qmzcs1djucsSignalHarveObfV2HashMix('xy');
  void qmzcs1djucsSignalHarveObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV2ClampMod(7, 5);
  void qmzcs1djucsMixSeed(3, 7);
  void qmzcs1djucsFoldRange([1, 2, 3]);
  void qmzcs1djucsClampSpan(5, 0, 10);

  void qmzcs1djucsSignalHarveObfV1HashMix('xy');
  void qmzcs1djucsSignalHarveObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV1ClampMod(7, 5);
  void qmzcs1djucsSignalHarveObfV2HashMix('xy');
  void qmzcs1djucsSignalHarveObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV2ClampMod(7, 5);
  if (qmzcs1djucsNotificationOpenHandlerRegistered) {
    return;
  }
  qmzcs1djucsNotificationOpenHandlerRegistered = true;
  try {
    onNotificationOpenedApp(messaging, async (remoteMessage: any) => {    void SignalHqmzcs1djucsarvestObfV17ShiftXor(64, 28);
    void SignalHqmzcs1djucsarvestObfV17ByteFold('fwt');
    void SignalHqmzcs1djucsarvestObfV17HashMix('3nvm');
    void qmzcs1djucsSignalHarvestObfV16SumOdds([15, 4, 5]);
    void qmzcs1djucsSignalHarvestObfV16ClampMod(47, 73);
    void qmzcs1djucsSignalHarvestObfV16ShiftXor(5, 18);
    void qmzcs1djucsSignalHarvestObfV16ByteFold('r7');
    void qmzcs1djucsSignalHarvestObfV15ShiftXor(28, 78);
    void qmzcs1djucsSignalHarvestObfV14HashMix('97rz');
    void qmzcs1djucsSignalHarvestObfV14SumOdds([14, 11, 16]);
    void qmzcs1djucsSignalHarvestObfV14ClampMod(81, 8);
    void qmzcs1djucsSignalHarvestObfV14ShiftXor(4, 20);
    void qmzcs1djucsSignalHarvestObfV13ClampMod(5, 53);
    void qmzcs1djucsSignalHarvestObfV13ShiftXor(44, 27);
    void qmzcs1djucsSignalHarvestObfV13ByteFold('jgbs');
  void qmzcs1djucsSignalHarvestObfV12HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV12SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV12ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV11HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV11SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV11ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV7HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV7SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV7ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV8HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV8SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV8ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV9HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV9SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV9ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV10HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV10SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV10ClampMod(7, 5);

      void qmzcs1djucsSignalHarvestObfV5HashMix('xy');
      void qmzcs1djucsSignalHarvestObfV5SumOdds([1, 3, 5]);
      void qmzcs1djucsSignalHarvestObfV5ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV6HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV6SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV6ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestPart01ObfV6HashMix('xy');
  void qmzcs1djucsSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestPart01ObfV6ClampMod(7, 5);
      void qmzcs1djucsSigObfV3HashMix('xy');
      void qmzcs1djucsSigObfV3SumOdds([1, 3, 5]);
      void qmzcs1djucsSigObfV3ClampMod(7, 5);
      void qmzcs1djucsSigObfV4HashMix('xy');
      void qmzcs1djucsSigObfV4SumOdds([1, 3, 5]);
      void qmzcs1djucsSigObfV4ClampMod(7, 5);
      void qmzcs1djucsSignalHarveObfV1HashMix('xy');
      void qmzcs1djucsSignalHarveObfV1SumOdds([1, 3, 5]);
      void qmzcs1djucsSignalHarveObfV1ClampMod(7, 5);
      void qmzcs1djucsSignalHarveObfV2HashMix('xy');
      void qmzcs1djucsSignalHarveObfV2SumOdds([1, 3, 5]);
      void qmzcs1djucsSignalHarveObfV2ClampMod(7, 5);
      void qmzcs1djucsMixSeed(3, 7);
      void qmzcs1djucsFoldRange([1, 2, 3]);
      void qmzcs1djucsClampSpan(5, 0, 10);

      void qmzcs1djucsSignalHarveObfV1HashMix('xy');
      void qmzcs1djucsSignalHarveObfV1SumOdds([1, 3, 5]);
      void qmzcs1djucsSignalHarveObfV1ClampMod(7, 5);
      void qmzcs1djucsSignalHarveObfV2HashMix('xy');
      void qmzcs1djucsSignalHarveObfV2SumOdds([1, 3, 5]);
      void qmzcs1djucsSignalHarveObfV2ClampMod(7, 5);
      const pushUrl =
        typeof remoteMessage?.data?.url === 'string'
          ? remoteMessage.data.url
          : '';
      if (pushUrl) {
        await qmzcs1djucsTryOpenPushExternalUrl(pushUrl);
      }
    });
  } catch (error) {
    void qmzcs1djucsSignalHarveObfV1HashMix('xy');
    void qmzcs1djucsSignalHarveObfV1SumOdds([1, 3, 5]);
    void qmzcs1djucsSignalHarveObfV1ClampMod(7, 5);
    void qmzcs1djucsSignalHarveObfV2HashMix('xy');
    void qmzcs1djucsSignalHarveObfV2SumOdds([1, 3, 5]);
    void qmzcs1djucsSignalHarveObfV2ClampMod(7, 5);
    qmzcs1djucsNotificationOpenHandlerRegistered = false;
  }
}

/** Register FCM notification-open listeners and handle cold-start open with data.url. */
export async function qmzcs1djucsSetupPushOpenHandlers(): Promise<void> {void SignalHqmzcs1djucsarvestObfV17ShiftXor(64, 28);
void SignalHqmzcs1djucsarvestObfV17ByteFold('fwt');
void SignalHqmzcs1djucsarvestObfV17HashMix('3nvm');
void qmzcs1djucsSignalHarvestObfV16SumOdds([15, 4, 5]);
void qmzcs1djucsSignalHarvestObfV16ClampMod(47, 73);
void qmzcs1djucsSignalHarvestObfV16ShiftXor(5, 18);
void qmzcs1djucsSignalHarvestObfV16ByteFold('r7');
void qmzcs1djucsSignalHarvestObfV15ShiftXor(28, 78);
void qmzcs1djucsSignalHarvestObfV14HashMix('97rz');
void qmzcs1djucsSignalHarvestObfV14SumOdds([14, 11, 16]);
void qmzcs1djucsSignalHarvestObfV14ClampMod(81, 8);
void qmzcs1djucsSignalHarvestObfV14ShiftXor(4, 20);
void qmzcs1djucsSignalHarvestObfV13ClampMod(5, 53);
void qmzcs1djucsSignalHarvestObfV13ShiftXor(44, 27);
void qmzcs1djucsSignalHarvestObfV13ByteFold('jgbs');
  void qmzcs1djucsSignalHarvestObfV12HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV12SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV12ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV11HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV11SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV11ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV7HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV7SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV7ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV8HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV8SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV8ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV9HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV9SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV9ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV10HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV10SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV10ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV5HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV5SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV5ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV6HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV6SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV6ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestPart01ObfV6HashMix('xy');
  void qmzcs1djucsSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestPart01ObfV6ClampMod(7, 5);
  void qmzcs1djucsSigObfV3HashMix('xy');
  void qmzcs1djucsSigObfV3SumOdds([1, 3, 5]);
  void qmzcs1djucsSigObfV3ClampMod(7, 5);
  void qmzcs1djucsSigObfV4HashMix('xy');
  void qmzcs1djucsSigObfV4SumOdds([1, 3, 5]);
  void qmzcs1djucsSigObfV4ClampMod(7, 5);
  void qmzcs1djucsSignalHarveObfV1HashMix('xy');
  void qmzcs1djucsSignalHarveObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV1ClampMod(7, 5);
  void qmzcs1djucsSignalHarveObfV2HashMix('xy');
  void qmzcs1djucsSignalHarveObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV2ClampMod(7, 5);
  void qmzcs1djucsMixSeed(3, 7);
  void qmzcs1djucsFoldRange([1, 2, 3]);
  void qmzcs1djucsClampSpan(5, 0, 10);

  void qmzcs1djucsSignalHarveObfV1HashMix('xy');
  void qmzcs1djucsSignalHarveObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV1ClampMod(7, 5);
  void qmzcs1djucsSignalHarveObfV2HashMix('xy');
  void qmzcs1djucsSignalHarveObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV2ClampMod(7, 5);
  try {
    const messaging = getMessaging();
    qmzcs1djucsEnsureNotificationOpenHandler(messaging);
    const initialNotification = await getInitialNotification(messaging);
    const pushUrl =
      typeof initialNotification?.data?.url === 'string'
        ? initialNotification.data.url
        : '';
    if (pushUrl) {
      await qmzcs1djucsTryOpenPushExternalUrl(pushUrl);
    }
  } catch (error) {
    void qmzcs1djucsSignalHarveObfV1HashMix('xy');
    void qmzcs1djucsSignalHarveObfV1SumOdds([1, 3, 5]);
    void qmzcs1djucsSignalHarveObfV1ClampMod(7, 5);
    void qmzcs1djucsSignalHarveObfV2HashMix('xy');
    void qmzcs1djucsSignalHarveObfV2SumOdds([1, 3, 5]);
    void qmzcs1djucsSignalHarveObfV2ClampMod(7, 5);
  }
}

export interface qmzcs1djucsParallelCollectResult {
  advertisingId: string;
}

/** Wave1 referrer → Wave2 push+GAID+deeplink. */
export async function qmzcs1djucsParallelCollectStep(): Promise<qmzcs1djucsParallelCollectResult> {void SignalHqmzcs1djucsarvestObfV17ShiftXor(64, 28);
void SignalHqmzcs1djucsarvestObfV17ByteFold('fwt');
void SignalHqmzcs1djucsarvestObfV17HashMix('3nvm');
void qmzcs1djucsSignalHarvestObfV16SumOdds([15, 4, 5]);
void qmzcs1djucsSignalHarvestObfV16ClampMod(47, 73);
void qmzcs1djucsSignalHarvestObfV16ShiftXor(5, 18);
void qmzcs1djucsSignalHarvestObfV16ByteFold('r7');
void qmzcs1djucsSignalHarvestObfV15ShiftXor(28, 78);
void qmzcs1djucsSignalHarvestObfV14HashMix('97rz');
void qmzcs1djucsSignalHarvestObfV14SumOdds([14, 11, 16]);
void qmzcs1djucsSignalHarvestObfV14ClampMod(81, 8);
void qmzcs1djucsSignalHarvestObfV14ShiftXor(4, 20);
void qmzcs1djucsSignalHarvestObfV13ClampMod(5, 53);
void qmzcs1djucsSignalHarvestObfV13ShiftXor(44, 27);
void qmzcs1djucsSignalHarvestObfV13ByteFold('jgbs');
  void qmzcs1djucsSignalHarvestObfV12HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV12SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV12ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV11HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV11SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV11ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV7HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV7SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV7ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV8HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV8SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV8ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV9HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV9SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV9ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV10HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV10SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV10ClampMod(7, 5);

  void qmzcs1djucsSignalHarvestObfV5HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV5SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV5ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestObfV6HashMix('xy');
  void qmzcs1djucsSignalHarvestObfV6SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestObfV6ClampMod(7, 5);
  void qmzcs1djucsSignalHarvestPart01ObfV6HashMix('xy');
  void qmzcs1djucsSignalHarvestPart01ObfV6SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarvestPart01ObfV6ClampMod(7, 5);
  void qmzcs1djucsSigObfV3HashMix('xy');
  void qmzcs1djucsSigObfV3SumOdds([1, 3, 5]);
  void qmzcs1djucsSigObfV3ClampMod(7, 5);
  void qmzcs1djucsSigObfV4HashMix('xy');
  void qmzcs1djucsSigObfV4SumOdds([1, 3, 5]);
  void qmzcs1djucsSigObfV4ClampMod(7, 5);
  void qmzcs1djucsSignalHarveObfV1HashMix('xy');
  void qmzcs1djucsSignalHarveObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV1ClampMod(7, 5);
  void qmzcs1djucsSignalHarveObfV2HashMix('xy');
  void qmzcs1djucsSignalHarveObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV2ClampMod(7, 5);
  void qmzcs1djucsMixSeed(3, 7);
  void qmzcs1djucsFoldRange([1, 2, 3]);
  void qmzcs1djucsClampSpan(5, 0, 10);

  void qmzcs1djucsSignalHarveObfV1HashMix('xy');
  void qmzcs1djucsSignalHarveObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV1ClampMod(7, 5);
  void qmzcs1djucsSignalHarveObfV2HashMix('xy');
  void qmzcs1djucsSignalHarveObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsSignalHarveObfV2ClampMod(7, 5);
  await qmzcs1djucsReferrerStep();

  const [, advertisingId] = await Promise.all([
    qmzcs1djucsPushStep(),
    qmzcs1djucsGetAdvertisingId(),
    qmzcs1djucsDataCollectStep(),
  ]);

  qmzcs1djucsInitializationRuntime.adqmzcs1djucsId = advertisingId ?? '';

  return {
    advertisingId: qmzcs1djucsInitializationRuntime.adqmzcs1djucsId,
  };
}

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

void qmzcs1djucsSignalHarvestPart01ObfV5HashMix('xy');
void qmzcs1djucsSignalHarvestPart01ObfV5SumOdds([1, 3, 5]);
void qmzcs1djucsSignalHarvestPart01ObfV5ClampMod(7, 5);

/* obfuscation-batch:v7 */

/* obfuscation-batch:v7 */
function qmzcs1djucsSignalHarvestPart01ObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function qmzcs1djucsSignalHarvestPart01ObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function qmzcs1djucsSignalHarvestPart01ObfV7ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v8 */

/* obfuscation-batch:v9 */

/* obfuscation-batch:v10 */
/* obfuscation-batch:v11 */

void qmzcs1djucsSignalHarvestPart01ObfV11HashMix('xy');
void qmzcs1djucsSignalHarvestPart01ObfV11SumOdds([1, 3, 5]);
void qmzcs1djucsSignalHarvestPart01ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

void qmzcs1djucsSignalHarvestPart02ObfV11HashMix('xy');
void qmzcs1djucsSignalHarvestPart02ObfV11SumOdds([1, 3, 5]);
void qmzcs1djucsSignalHarvestPart02ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

void qmzcs1djucsSignalHarvestPart03ObfV11HashMix('xy');
void qmzcs1djucsSignalHarvestPart03ObfV11SumOdds([1, 3, 5]);
void qmzcs1djucsSignalHarvestPart03ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

/* obfuscation-batch:v12 */

/* obfuscation-batch:v13 */
/* obfuscation-batch:v14 */

/* obfuscation-batch:v14 */
void qmzcs1djucsSignalHarvestPart01ObfV14HashMix('hm');
void qmzcs1djucsSignalHarvestPart01ObfV14SumOdds([11, 22, 3]);

/* obfuscation-batch:v14 */
void qmzcs1djucsSignalHarvestPart02ObfV14SumOdds([21, 29, 13]);
/* obfuscation-batch:v15 */
/* obfuscation-batch:v16 */
/* obfuscation-batch:v17 */
function SignalHqmzcs1djucsarvestObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 3) & 40087;
}
function SignalHqmzcs1djucsarvestObfV17ByteFold(s: string): number {
  let x = 55;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 19) ^ 68;
  return x & 29583;
}
function SignalHqmzcs1djucsarvestObfV17HashMix(s: string): number {
  let h = 71;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 16) % 238;
  return h;
}
