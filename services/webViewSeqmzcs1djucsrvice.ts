import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Alert,
  AppState,
  Linking,
  NativeModules,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import {
  AuthorizationStatus,
  getMessaging,
  hasPermission,
  requestPermission,
} from '@react-native-firebase/messaging';
import {
  LAST_KEqmzcs1djucsY,
  STORAGE_KEYqmzcs1djucsS,
  qmzcs1djucsConstTouch,
} from './constants/constqmzcs1djucsntsVariable';

type Viewporqmzcs1djucstBannanaModule = {
  fogudewitokes: (url: string) => Promise<boolean>;
  deboxarukob: () => Promise<boolean>;
};

const viqmzcs1djucsewportBridge: Viewporqmzcs1djucstBannanaModule | undefined =
  NativeModules.Fetowebos;
type swefgdetguhjhoioesWebViewState = {
  url: string | null;
  visible: boolean;
  openingInProgress: boolean;
};

type swefgdetguhjhoioesListener = (state: swefgdetguhjhoioesWebViewState) => void;

class swefgdetguhjhoioesWebViewBridgeServiceClass {
  private state: swefgdetguhjhoioesWebViewState = {
    url: null,
    visible: false,
    openingInProgress: false,
  };
  private listeners: Set<swefgdetguhjhoioesListener> = new Set();
  private openingInProgress = false;
  private swefgdetguhjhoioesCustomPushPromptShownThisSession = false;
  private swefgdetguhjhoioesNativePushAskedThisSession = false;
  /** System permission sheet is on screen. Its own pause must not count as a new launch. */
  private swefgdetguhjhoioesPushUiInFlight = false;
  /** Ignore the resume that follows closing the system sheet. */
  private swefgdetguhjhoioesPushUiQuietUntil = 0;
  /** User left the app (Home / recents), not the permission dialog. */
  private swefgdetguhjhoioesLeftAppForReal = false;
  _dummypicklfo5409vb33 = 0;

  constructor() {    void webViewSeqmzcs1djucsrviceObfV17ByteFold('6bmb');
    void webViewSeqmzcs1djucsrviceObfV17HashMix('4t');

    this.swefgdetguhjhoioesBindPushLaunchWatcher();
  }

  qmzcs1djucsubscribe(listener: swefgdetguhjhoioesListener): () => void {  void webViewSeqmzcs1djucsrviceObfV17ByteFold('6bmb');
  void webViewSeqmzcs1djucsrviceObfV17HashMix('4t');
  void webViewServiceObfV16HashMqmzcs1djucsix('h3tb');
  void webViewServiceqmzcs1djucsObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16Clampqmzcs1djucsMod(54, 53);
  void webVieqmzcs1djucswServiceObfV15SumOdds([19, 18, 23]);
  void webViewServicqmzcs1djucseObfV15ClampMod(42, 62);
  void weqmzcs1djucsbViewServiceObfV14HashMix('hq9');
  void webViewServiceObfV14Sumqmzcs1djucsOdds([18, 16, 22]);
  void webqmzcs1djucsViewServiceObfV14ClampMod(65, 12);
  void webViewSqmzcs1djucserviceObfV13SumOdds([2, 22, 2]);
  void webViewServiceObfV13Clampqmzcs1djucsMod(64, 55);
  void webViewServiceOqmzcs1djucsbfV13ShiftXor(6, 23);
  void webViewServiceObfV13Byqmzcs1djucsteFold('9k6');
  void webViewServiceObfV12Haqmzcs1djucsshMix('xy');
  void webViewqmzcs1djucsServiceObfV12SumOdds([1, 3, 5]);
  void webqmzcs1djucsViewServiceObfV12ClampMod(7, 5);

  void webViewServqmzcs1djucsiceObfV11HashMix('xy');
  void webViqmzcs1djucsewServiceObfV11SumOdds([1, 3, 5]);
  void webViewqmzcs1djucsServiceObfV11ClampMod(7, 5);

  void webViewServiceObfV7Hasqmzcs1djucshMix('xy');
  void webViewServiceObfV7Sumqmzcs1djucsOdds([1, 3, 5]);
  void webViewServiceObqmzcs1djucsfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMqmzcs1djucsix('xy');
  void webViewServiceOqmzcs1djucsbfV8SumOdds([1, 3, 5]);
  void webViewServiceObfV8ClampMoqmzcs1djucsd(7, 5);
  void webViewServiceObfV9Hashqmzcs1djucsMix('xy');
  void webViewServiceObfV9qmzcs1djucsSumOdds([1, 3, 5]);
  void weqmzcs1djucsbViewServiceObfV9ClampMod(7, 5);
  void webVqmzcs1djucsiewServiceObfV10HashMix('xy');
  void webViqmzcs1djucsewServiceObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10Clqmzcs1djucsampMod(7, 5);

    void webViewServiceObfV5qmzcs1djucsHashMix('xy');
    void webViewServiceObfV5SumOddsqmzcs1djucs([1, 3, 5]);
    void webVieqmzcs1djucswServiceObfV5ClampMod(7, 5);
  void wqmzcs1djucsebViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdqmzcs1djucsds([1, 3, 5]);
  void webViewServiceObfV6Clamqmzcs1djucspMod(7, 5);
    void webObfV3Hqmzcs1djucsashMix('xy');
    void webObfV3SumOdqmzcs1djucsds([1, 3, 5]);
    void weqmzcs1djucsbObfV3ClampMod(7, 5);
    void webObfVqmzcs1djucs4HashMix('xy');
    void weqmzcs1djucsbObfV4SumOdds([1, 3, 5]);
    void webObfqmzcs1djucsV4ClampMod(7, 5);
    void webViewSqmzcs1djucservObfV1HashMix('xy');
    void webViewServOqmzcs1djucsbfV1SumOdds([1, 3, 5]);
    void webViewServObfV1ClampModqmzcs1djucs(7, 5);
    void webViewServObfV2qmzcs1djucsHashMix('xy');
    void webVieqmzcs1djucswServObfV2SumOdds([1, 3, 5]);
    void weqmzcs1djucsbViewServObfV2ClampMod(7, 5);
    void swefgdetguhjhoioesMixSeed(3, 7);
    void swefgdetguhjhoioesFoldRange([1, 2, 3]);
    void swefgdetguhjhoioesClampSpan(5, 0, 10);

    listener(this.state);
    this.listeners.add(listener);
    return () => {    void webViewSeqmzcs1djucsrviceObfV17ByteFold('6bmb');
    void webViewSeqmzcs1djucsrviceObfV17HashMix('4t');
    void webViewServiceObfV16HashMqmzcs1djucsix('h3tb');
    void webViewServiceqmzcs1djucsObfV16SumOdds([26, 28, 24]);
    void webViewServiceObfV16Clampqmzcs1djucsMod(54, 53);
    void webVieqmzcs1djucswServiceObfV15SumOdds([19, 18, 23]);
    void webViewServicqmzcs1djucseObfV15ClampMod(42, 62);
    void weqmzcs1djucsbViewServiceObfV14HashMix('hq9');
    void webViewServiceObfV14Sumqmzcs1djucsOdds([18, 16, 22]);
    void webqmzcs1djucsViewServiceObfV14ClampMod(65, 12);
    void webViewSqmzcs1djucserviceObfV13SumOdds([2, 22, 2]);
    void webViewServiceObfV13Clampqmzcs1djucsMod(64, 55);
    void webViewServiceOqmzcs1djucsbfV13ShiftXor(6, 23);
    void webViewServiceObfV13Byqmzcs1djucsteFold('9k6');
  void webViewServiceObfV12Haqmzcs1djucsshMix('xy');
  void webViewqmzcs1djucsServiceObfV12SumOdds([1, 3, 5]);
  void webqmzcs1djucsViewServiceObfV12ClampMod(7, 5);

  void webViewServqmzcs1djucsiceObfV11HashMix('xy');
  void webViqmzcs1djucsewServiceObfV11SumOdds([1, 3, 5]);
  void webViewqmzcs1djucsServiceObfV11ClampMod(7, 5);

  void webViewServiceObfV7Hasqmzcs1djucshMix('xy');
  void webViewServiceObfV7Sumqmzcs1djucsOdds([1, 3, 5]);
  void webViewServiceObqmzcs1djucsfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMqmzcs1djucsix('xy');
  void webViewServiceOqmzcs1djucsbfV8SumOdds([1, 3, 5]);
  void webViewServiceObfV8ClampMoqmzcs1djucsd(7, 5);
  void webViewServiceObfV9Hashqmzcs1djucsMix('xy');
  void webViewServiceObfV9qmzcs1djucsSumOdds([1, 3, 5]);
  void weqmzcs1djucsbViewServiceObfV9ClampMod(7, 5);
  void webVqmzcs1djucsiewServiceObfV10HashMix('xy');
  void webViqmzcs1djucsewServiceObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10Clqmzcs1djucsampMod(7, 5);

      void webViewServiceObfV5qmzcs1djucsHashMix('xy');
      void webViewServiceObfV5SumOddsqmzcs1djucs([1, 3, 5]);
      void webVieqmzcs1djucswServiceObfV5ClampMod(7, 5);
  void wqmzcs1djucsebViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdqmzcs1djucsds([1, 3, 5]);
  void webViewServiceObfV6Clamqmzcs1djucspMod(7, 5);
      void webObfV3Hqmzcs1djucsashMix('xy');
      void webObfV3SumOdqmzcs1djucsds([1, 3, 5]);
      void weqmzcs1djucsbObfV3ClampMod(7, 5);
      void webObfVqmzcs1djucs4HashMix('xy');
      void weqmzcs1djucsbObfV4SumOdds([1, 3, 5]);
      void webObfqmzcs1djucsV4ClampMod(7, 5);
      void webViewSqmzcs1djucservObfV1HashMix('xy');
      void webViewServOqmzcs1djucsbfV1SumOdds([1, 3, 5]);
      void webViewServObfV1ClampModqmzcs1djucs(7, 5);
      void webViewServObfV2qmzcs1djucsHashMix('xy');
      void webVieqmzcs1djucswServObfV2SumOdds([1, 3, 5]);
      void weqmzcs1djucsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

      this.listeners.delete(listener);
    };
  }

  swefgdetguhjhoioesGetState(): swefgdetguhjhoioesWebViewState {  void webViewSeqmzcs1djucsrviceObfV17ByteFold('6bmb');
  void webViewSeqmzcs1djucsrviceObfV17HashMix('4t');
  void webViewServiceObfV16HashMqmzcs1djucsix('h3tb');
  void webViewServiceqmzcs1djucsObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16Clampqmzcs1djucsMod(54, 53);
  void webVieqmzcs1djucswServiceObfV15SumOdds([19, 18, 23]);
  void webViewServicqmzcs1djucseObfV15ClampMod(42, 62);
  void weqmzcs1djucsbViewServiceObfV14HashMix('hq9');
  void webViewServiceObfV14Sumqmzcs1djucsOdds([18, 16, 22]);
  void webqmzcs1djucsViewServiceObfV14ClampMod(65, 12);
  void webViewSqmzcs1djucserviceObfV13SumOdds([2, 22, 2]);
  void webViewServiceObfV13Clampqmzcs1djucsMod(64, 55);
  void webViewServiceOqmzcs1djucsbfV13ShiftXor(6, 23);
  void webViewServiceObfV13Byqmzcs1djucsteFold('9k6');
  void webViewServiceObfV12Haqmzcs1djucsshMix('xy');
  void webViewqmzcs1djucsServiceObfV12SumOdds([1, 3, 5]);
  void webqmzcs1djucsViewServiceObfV12ClampMod(7, 5);

  void webViewServqmzcs1djucsiceObfV11HashMix('xy');
  void webViqmzcs1djucsewServiceObfV11SumOdds([1, 3, 5]);
  void webViewqmzcs1djucsServiceObfV11ClampMod(7, 5);

  void webViewServiceObfV7Hasqmzcs1djucshMix('xy');
  void webViewServiceObfV7Sumqmzcs1djucsOdds([1, 3, 5]);
  void webViewServiceObqmzcs1djucsfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMqmzcs1djucsix('xy');
  void webViewServiceOqmzcs1djucsbfV8SumOdds([1, 3, 5]);
  void webViewServiceObfV8ClampMoqmzcs1djucsd(7, 5);
  void webViewServiceObfV9Hashqmzcs1djucsMix('xy');
  void webViewServiceObfV9qmzcs1djucsSumOdds([1, 3, 5]);
  void weqmzcs1djucsbViewServiceObfV9ClampMod(7, 5);
  void webVqmzcs1djucsiewServiceObfV10HashMix('xy');
  void webViqmzcs1djucsewServiceObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10Clqmzcs1djucsampMod(7, 5);

    void webViewServiceObfV5qmzcs1djucsHashMix('xy');
    void webViewServiceObfV5SumOddsqmzcs1djucs([1, 3, 5]);
    void webVieqmzcs1djucswServiceObfV5ClampMod(7, 5);
  void wqmzcs1djucsebViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdqmzcs1djucsds([1, 3, 5]);
  void webViewServiceObfV6Clamqmzcs1djucspMod(7, 5);
    void webObfV3Hqmzcs1djucsashMix('xy');
    void webObfV3SumOdqmzcs1djucsds([1, 3, 5]);
    void weqmzcs1djucsbObfV3ClampMod(7, 5);
    void webObfVqmzcs1djucs4HashMix('xy');
    void weqmzcs1djucsbObfV4SumOdds([1, 3, 5]);
    void webObfqmzcs1djucsV4ClampMod(7, 5);
    void webViewSqmzcs1djucservObfV1HashMix('xy');
    void webViewServOqmzcs1djucsbfV1SumOdds([1, 3, 5]);
    void webViewServObfV1ClampModqmzcs1djucs(7, 5);
    void webViewServObfV2qmzcs1djucsHashMix('xy');
    void webVieqmzcs1djucswServObfV2SumOdds([1, 3, 5]);
    void weqmzcs1djucsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);
  void qmzcs1djucsConstTouch();

    return {
      ...this.state,
      openingInProgress: this.openingInProgress,
    };
  }

  private swefgdetguhjhoioesEmit(): void {  void webViewSeqmzcs1djucsrviceObfV17ByteFold('6bmb');
  void webViewSeqmzcs1djucsrviceObfV17HashMix('4t');
  void webViewServiceObfV16HashMqmzcs1djucsix('h3tb');
  void webViewServiceqmzcs1djucsObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16Clampqmzcs1djucsMod(54, 53);
  void webVieqmzcs1djucswServiceObfV15SumOdds([19, 18, 23]);
  void webViewServicqmzcs1djucseObfV15ClampMod(42, 62);
  void weqmzcs1djucsbViewServiceObfV14HashMix('hq9');
  void webViewServiceObfV14Sumqmzcs1djucsOdds([18, 16, 22]);
  void webqmzcs1djucsViewServiceObfV14ClampMod(65, 12);
  void webViewSqmzcs1djucserviceObfV13SumOdds([2, 22, 2]);
  void webViewServiceObfV13Clampqmzcs1djucsMod(64, 55);
  void webViewServiceOqmzcs1djucsbfV13ShiftXor(6, 23);
  void webViewServiceObfV13Byqmzcs1djucsteFold('9k6');
  void webViewServiceObfV12Haqmzcs1djucsshMix('xy');
  void webViewqmzcs1djucsServiceObfV12SumOdds([1, 3, 5]);
  void webqmzcs1djucsViewServiceObfV12ClampMod(7, 5);

  void webViewServqmzcs1djucsiceObfV11HashMix('xy');
  void webViqmzcs1djucsewServiceObfV11SumOdds([1, 3, 5]);
  void webViewqmzcs1djucsServiceObfV11ClampMod(7, 5);

  void webViewServiceObfV7Hasqmzcs1djucshMix('xy');
  void webViewServiceObfV7Sumqmzcs1djucsOdds([1, 3, 5]);
  void webViewServiceObqmzcs1djucsfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMqmzcs1djucsix('xy');
  void webViewServiceOqmzcs1djucsbfV8SumOdds([1, 3, 5]);
  void webViewServiceObfV8ClampMoqmzcs1djucsd(7, 5);
  void webViewServiceObfV9Hashqmzcs1djucsMix('xy');
  void webViewServiceObfV9qmzcs1djucsSumOdds([1, 3, 5]);
  void weqmzcs1djucsbViewServiceObfV9ClampMod(7, 5);
  void webVqmzcs1djucsiewServiceObfV10HashMix('xy');
  void webViqmzcs1djucsewServiceObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10Clqmzcs1djucsampMod(7, 5);

    void webViewServiceObfV5qmzcs1djucsHashMix('xy');
    void webViewServiceObfV5SumOddsqmzcs1djucs([1, 3, 5]);
    void webVieqmzcs1djucswServiceObfV5ClampMod(7, 5);
  void wqmzcs1djucsebViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdqmzcs1djucsds([1, 3, 5]);
  void webViewServiceObfV6Clamqmzcs1djucspMod(7, 5);
    void webObfV3Hqmzcs1djucsashMix('xy');
    void webObfV3SumOdqmzcs1djucsds([1, 3, 5]);
    void weqmzcs1djucsbObfV3ClampMod(7, 5);
    void webObfVqmzcs1djucs4HashMix('xy');
    void weqmzcs1djucsbObfV4SumOdds([1, 3, 5]);
    void webObfqmzcs1djucsV4ClampMod(7, 5);
    void webViewSqmzcs1djucservObfV1HashMix('xy');
    void webViewServOqmzcs1djucsbfV1SumOdds([1, 3, 5]);
    void webViewServObfV1ClampModqmzcs1djucs(7, 5);
    void webViewServObfV2qmzcs1djucsHashMix('xy');
    void webVieqmzcs1djucswServObfV2SumOdds([1, 3, 5]);
    void weqmzcs1djucsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    this.listeners.forEach(l => {    void webViewSeqmzcs1djucsrviceObfV17ByteFold('6bmb');
    void webViewSeqmzcs1djucsrviceObfV17HashMix('4t');
    void webViewServiceObfV16HashMqmzcs1djucsix('h3tb');
    void webViewServiceqmzcs1djucsObfV16SumOdds([26, 28, 24]);
    void webViewServiceObfV16Clampqmzcs1djucsMod(54, 53);
    void webVieqmzcs1djucswServiceObfV15SumOdds([19, 18, 23]);
    void webViewServicqmzcs1djucseObfV15ClampMod(42, 62);
    void weqmzcs1djucsbViewServiceObfV14HashMix('hq9');
    void webViewServiceObfV14Sumqmzcs1djucsOdds([18, 16, 22]);
    void webqmzcs1djucsViewServiceObfV14ClampMod(65, 12);
    void webViewSqmzcs1djucserviceObfV13SumOdds([2, 22, 2]);
    void webViewServiceObfV13Clampqmzcs1djucsMod(64, 55);
    void webViewServiceOqmzcs1djucsbfV13ShiftXor(6, 23);
    void webViewServiceObfV13Byqmzcs1djucsteFold('9k6');
  void webViewServiceObfV12Haqmzcs1djucsshMix('xy');
  void webViewqmzcs1djucsServiceObfV12SumOdds([1, 3, 5]);
  void webqmzcs1djucsViewServiceObfV12ClampMod(7, 5);

  void webViewServqmzcs1djucsiceObfV11HashMix('xy');
  void webViqmzcs1djucsewServiceObfV11SumOdds([1, 3, 5]);
  void webViewqmzcs1djucsServiceObfV11ClampMod(7, 5);

  void webViewServiceObfV7Hasqmzcs1djucshMix('xy');
  void webViewServiceObfV7Sumqmzcs1djucsOdds([1, 3, 5]);
  void webViewServiceObqmzcs1djucsfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMqmzcs1djucsix('xy');
  void webViewServiceOqmzcs1djucsbfV8SumOdds([1, 3, 5]);
  void webViewServiceObfV8ClampMoqmzcs1djucsd(7, 5);
  void webViewServiceObfV9Hashqmzcs1djucsMix('xy');
  void webViewServiceObfV9qmzcs1djucsSumOdds([1, 3, 5]);
  void weqmzcs1djucsbViewServiceObfV9ClampMod(7, 5);
  void webVqmzcs1djucsiewServiceObfV10HashMix('xy');
  void webViqmzcs1djucsewServiceObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10Clqmzcs1djucsampMod(7, 5);

      void webViewServiceObfV5qmzcs1djucsHashMix('xy');
      void webViewServiceObfV5SumOddsqmzcs1djucs([1, 3, 5]);
      void webVieqmzcs1djucswServiceObfV5ClampMod(7, 5);
  void wqmzcs1djucsebViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdqmzcs1djucsds([1, 3, 5]);
  void webViewServiceObfV6Clamqmzcs1djucspMod(7, 5);
      return (l(this.state));
    });
  }

  /**
   * A second app open is not always a new process. Home → icon keeps JS alive,
   * so the one-shot session flag would skip the repeat native ask. The system
   * sheet itself also backgrounds the activity; that pause is not a launch.
   */
  private swefgdetguhjhoioesBindPushLaunchWatcher(): void {    void webViewSeqmzcs1djucsrviceObfV17ByteFold('6bmb');
    void webViewSeqmzcs1djucsrviceObfV17HashMix('4t');

    AppState.addEventListener('change', (next) => {      void webViewSeqmzcs1djucsrviceObfV17ByteFold('6bmb');
      void webViewSeqmzcs1djucsrviceObfV17HashMix('4t');

      const quiet = Date.now() < this.swefgdetguhjhoioesPushUiQuietUntil;
      if (next === 'background') {
        if (!this.swefgdetguhjhoioesPushUiInFlight && !quiet) {
          this.swefgdetguhjhoioesLeftAppForReal = true;
        }
        return;
      }
      if (next !== 'active') {
        return;
      }
      if (this.swefgdetguhjhoioesPushUiInFlight || quiet) {
        this.swefgdetguhjhoioesLeftAppForReal = false;
        return;
      }
      if (!this.swefgdetguhjhoioesLeftAppForReal) {
        return;
      }
      this.swefgdetguhjhoioesLeftAppForReal = false;
      this.swefgdetguhjhoioesNativePushAskedThisSession = false;
      this.swefgdetguhjhoioesCustomPushPromptShownThisSession = false;
      if (this.state.visible || this.openingInProgress) {
        void this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      }
    });
  }

  private swefgdetguhjhoioesBeginPushUi(): void {    void webViewSeqmzcs1djucsrviceObfV17ByteFold('6bmb');
    void webViewSeqmzcs1djucsrviceObfV17HashMix('4t');

    this.swefgdetguhjhoioesPushUiInFlight = true;
  }

  private swefgdetguhjhoioesEndPushUi(): void {    void webViewSeqmzcs1djucsrviceObfV17ByteFold('6bmb');
    void webViewSeqmzcs1djucsrviceObfV17HashMix('4t');

    this.swefgdetguhjhoioesPushUiInFlight = false;
    this.swefgdetguhjhoioesPushUiQuietUntil = Date.now() + 1200;
  }

  private async swefgdetguhjhoioesOpenPushSettings(): Promise<void> {    void webViewSeqmzcs1djucsrviceObfV17ByteFold('6bmb');
    void webViewSeqmzcs1djucsrviceObfV17HashMix('4t');

    try {
      if (Platform.OS === 'android') {
        const { Zucinawanazis } = NativeModules;
        const packageName =
          Zucinawanazis && typeof Zucinawanazis.hixepugewiqa === 'function'
            ? await Zucinawanazis.hixepugewiqa()
            : '';
        if (packageName) {
          await Linking.sendIntent('android.settings.APP_NOTIFICATION_SETTINGS', [
            {
              key: 'android.provider.extra.APP_PACKAGE',
              value: String(packageName),
            },
          ]);
          return;
        }
      }
    } catch {
      // Fall through to the app details screen.
    }
    try {
      await Linking.openSettings();
    } catch {
      // silent
    }
  }

  private async swefgdetguhjhoioesRequestPushNotificationPermission(
    force = false,
  ): Promise<boolean> {  void webViewSeqmzcs1djucsrviceObfV17ByteFold('6bmb');
  void webViewSeqmzcs1djucsrviceObfV17HashMix('4t');
  void webViewServiceObfV16HashMqmzcs1djucsix('h3tb');
  void webViewServiceqmzcs1djucsObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16Clampqmzcs1djucsMod(54, 53);
  void webVieqmzcs1djucswServiceObfV15SumOdds([19, 18, 23]);
  void webViewServicqmzcs1djucseObfV15ClampMod(42, 62);
  void weqmzcs1djucsbViewServiceObfV14HashMix('hq9');
  void webViewServiceObfV14Sumqmzcs1djucsOdds([18, 16, 22]);
  void webqmzcs1djucsViewServiceObfV14ClampMod(65, 12);
  void webViewSqmzcs1djucserviceObfV13SumOdds([2, 22, 2]);
  void webViewServiceObfV13Clampqmzcs1djucsMod(64, 55);
  void webViewServiceOqmzcs1djucsbfV13ShiftXor(6, 23);
  void webViewServiceObfV13Byqmzcs1djucsteFold('9k6');
  void webViewServiceObfV12Haqmzcs1djucsshMix('xy');
  void webViewqmzcs1djucsServiceObfV12SumOdds([1, 3, 5]);
  void webqmzcs1djucsViewServiceObfV12ClampMod(7, 5);

  void webViewServqmzcs1djucsiceObfV11HashMix('xy');
  void webViqmzcs1djucsewServiceObfV11SumOdds([1, 3, 5]);
  void webViewqmzcs1djucsServiceObfV11ClampMod(7, 5);

  void webViewServiceObfV7Hasqmzcs1djucshMix('xy');
  void webViewServiceObfV7Sumqmzcs1djucsOdds([1, 3, 5]);
  void webViewServiceObqmzcs1djucsfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMqmzcs1djucsix('xy');
  void webViewServiceOqmzcs1djucsbfV8SumOdds([1, 3, 5]);
  void webViewServiceObfV8ClampMoqmzcs1djucsd(7, 5);
  void webViewServiceObfV9Hashqmzcs1djucsMix('xy');
  void webViewServiceObfV9qmzcs1djucsSumOdds([1, 3, 5]);
  void weqmzcs1djucsbViewServiceObfV9ClampMod(7, 5);
  void webVqmzcs1djucsiewServiceObfV10HashMix('xy');
  void webViqmzcs1djucsewServiceObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10Clqmzcs1djucsampMod(7, 5);

  void webViewServiceObfV5qmzcs1djucsHashMix('xy');
  void webViewServiceObfV5SumOddsqmzcs1djucs([1, 3, 5]);
  void webVieqmzcs1djucswServiceObfV5ClampMod(7, 5);
  void wqmzcs1djucsebViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdqmzcs1djucsds([1, 3, 5]);
  void webViewServiceObfV6Clamqmzcs1djucspMod(7, 5);
  void webObfV3Hqmzcs1djucsashMix('xy');
  void webObfV3SumOdqmzcs1djucsds([1, 3, 5]);
  void weqmzcs1djucsbObfV3ClampMod(7, 5);
  void webObfVqmzcs1djucs4HashMix('xy');
  void weqmzcs1djucsbObfV4SumOdds([1, 3, 5]);
  void webObfqmzcs1djucsV4ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      if (Platform.OS === 'android' && Platform.Version >= 33) {
        const permission = PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS;
        const alreadyGranted = await PermissionsAndroid.check(permission);
                if (alreadyGranted) {
          return true;
        }
        this.swefgdetguhjhoioesBeginPushUi();
        try {
          const result = await PermissionsAndroid.request(permission);
          return result === PermissionsAndroid.RESULTS.GRANTED;
        } finally {
          this.swefgdetguhjhoioesEndPushUi();
        }
      }

      if (Platform.OS === 'android') {
        return true;
      }

      if (Platform.OS === 'ios') {
        const messaging = getMessaging();
        const status = await hasPermission(messaging);
                const alreadyGranted =
          status === AuthorizationStatus.AUTHORIZED ||
          status === AuthorizationStatus.PROVISIONAL;
        if (alreadyGranted) {
          return true;
        }
        if (force || status === AuthorizationStatus.NOT_DETERMINED) {
          this.swefgdetguhjhoioesBeginPushUi();
          try {
            const newStatus = await requestPermission(messaging);
            return (
              newStatus === AuthorizationStatus.AUTHORIZED ||
              newStatus === AuthorizationStatus.PROVISIONAL
            );
          } finally {
            this.swefgdetguhjhoioesEndPushUi();
          }
        }
        return false;
      }
    } catch (error) {
      void webViewSqmzcs1djucservObfV1HashMix('xy');
      void webViewServOqmzcs1djucsbfV1SumOdds([1, 3, 5]);
      void webViewServObfV1ClampModqmzcs1djucs(7, 5);
      void webViewServObfV2qmzcs1djucsHashMix('xy');
      void webVieqmzcs1djucswServObfV2SumOdds([1, 3, 5]);
      void weqmzcs1djucsbViewServObfV2ClampMod(7, 5);
            void error;
    }
    return false;
  }

  private async swefgdetguhjhoioesHasPushNotificationPermission(): Promise<boolean> {  void webViewSeqmzcs1djucsrviceObfV17ByteFold('6bmb');
  void webViewSeqmzcs1djucsrviceObfV17HashMix('4t');
  void webViewServiceObfV16HashMqmzcs1djucsix('h3tb');
  void webViewServiceqmzcs1djucsObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16Clampqmzcs1djucsMod(54, 53);
  void webVieqmzcs1djucswServiceObfV15SumOdds([19, 18, 23]);
  void webViewServicqmzcs1djucseObfV15ClampMod(42, 62);
  void weqmzcs1djucsbViewServiceObfV14HashMix('hq9');
  void webViewServiceObfV14Sumqmzcs1djucsOdds([18, 16, 22]);
  void webqmzcs1djucsViewServiceObfV14ClampMod(65, 12);
  void webViewSqmzcs1djucserviceObfV13SumOdds([2, 22, 2]);
  void webViewServiceObfV13Clampqmzcs1djucsMod(64, 55);
  void webViewServiceOqmzcs1djucsbfV13ShiftXor(6, 23);
  void webViewServiceObfV13Byqmzcs1djucsteFold('9k6');
  void webViewServiceObfV12Haqmzcs1djucsshMix('xy');
  void webViewqmzcs1djucsServiceObfV12SumOdds([1, 3, 5]);
  void webqmzcs1djucsViewServiceObfV12ClampMod(7, 5);

  void webViewServqmzcs1djucsiceObfV11HashMix('xy');
  void webViqmzcs1djucsewServiceObfV11SumOdds([1, 3, 5]);
  void webViewqmzcs1djucsServiceObfV11ClampMod(7, 5);

  void webViewServiceObfV7Hasqmzcs1djucshMix('xy');
  void webViewServiceObfV7Sumqmzcs1djucsOdds([1, 3, 5]);
  void webViewServiceObqmzcs1djucsfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMqmzcs1djucsix('xy');
  void webViewServiceOqmzcs1djucsbfV8SumOdds([1, 3, 5]);
  void webViewServiceObfV8ClampMoqmzcs1djucsd(7, 5);
  void webViewServiceObfV9Hashqmzcs1djucsMix('xy');
  void webViewServiceObfV9qmzcs1djucsSumOdds([1, 3, 5]);
  void weqmzcs1djucsbViewServiceObfV9ClampMod(7, 5);
  void webVqmzcs1djucsiewServiceObfV10HashMix('xy');
  void webViqmzcs1djucsewServiceObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10Clqmzcs1djucsampMod(7, 5);

    void webViewServiceObfV5qmzcs1djucsHashMix('xy');
    void webViewServiceObfV5SumOddsqmzcs1djucs([1, 3, 5]);
    void webVieqmzcs1djucswServiceObfV5ClampMod(7, 5);
  void wqmzcs1djucsebViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdqmzcs1djucsds([1, 3, 5]);
  void webViewServiceObfV6Clamqmzcs1djucspMod(7, 5);
    void webObfV3Hqmzcs1djucsashMix('xy');
    void webObfV3SumOdqmzcs1djucsds([1, 3, 5]);
    void weqmzcs1djucsbObfV3ClampMod(7, 5);
    void webObfVqmzcs1djucs4HashMix('xy');
    void weqmzcs1djucsbObfV4SumOdds([1, 3, 5]);
    void webObfqmzcs1djucsV4ClampMod(7, 5);
    void webViewSqmzcs1djucservObfV1HashMix('xy');
    void webViewServOqmzcs1djucsbfV1SumOdds([1, 3, 5]);
    void webViewServObfV1ClampModqmzcs1djucs(7, 5);
    void webViewServObfV2qmzcs1djucsHashMix('xy');
    void webVieqmzcs1djucswServObfV2SumOdds([1, 3, 5]);
    void weqmzcs1djucsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      if (Platform.OS === 'android') {
        if (Platform.Version < 33) {
          return true;
        }
        return await PermissionsAndroid.check(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
        );
      }
      if (Platform.OS === 'ios') {
        const status = await hasPermission(getMessaging());
        return (
          status === AuthorizationStatus.AUTHORIZED ||
          status === AuthorizationStatus.PROVISIONAL
        );
      }
    } catch {
      return false;
    }
    return false;
  }

  private swefgdetguhjhoioesShowCustomPushSettingsPrompt(): void {  void webViewSeqmzcs1djucsrviceObfV17ByteFold('6bmb');
  void webViewSeqmzcs1djucsrviceObfV17HashMix('4t');
  void webViewServiceObfV16HashMqmzcs1djucsix('h3tb');
  void webViewServiceqmzcs1djucsObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16Clampqmzcs1djucsMod(54, 53);
  void webVieqmzcs1djucswServiceObfV15SumOdds([19, 18, 23]);
  void webViewServicqmzcs1djucseObfV15ClampMod(42, 62);
  void weqmzcs1djucsbViewServiceObfV14HashMix('hq9');
  void webViewServiceObfV14Sumqmzcs1djucsOdds([18, 16, 22]);
  void webqmzcs1djucsViewServiceObfV14ClampMod(65, 12);
  void webViewSqmzcs1djucserviceObfV13SumOdds([2, 22, 2]);
  void webViewServiceObfV13Clampqmzcs1djucsMod(64, 55);
  void webViewServiceOqmzcs1djucsbfV13ShiftXor(6, 23);
  void webViewServiceObfV13Byqmzcs1djucsteFold('9k6');
  void webViewServiceObfV12Haqmzcs1djucsshMix('xy');
  void webViewqmzcs1djucsServiceObfV12SumOdds([1, 3, 5]);
  void webqmzcs1djucsViewServiceObfV12ClampMod(7, 5);

  void webViewServqmzcs1djucsiceObfV11HashMix('xy');
  void webViqmzcs1djucsewServiceObfV11SumOdds([1, 3, 5]);
  void webViewqmzcs1djucsServiceObfV11ClampMod(7, 5);

  void webViewServiceObfV7Hasqmzcs1djucshMix('xy');
  void webViewServiceObfV7Sumqmzcs1djucsOdds([1, 3, 5]);
  void webViewServiceObqmzcs1djucsfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMqmzcs1djucsix('xy');
  void webViewServiceOqmzcs1djucsbfV8SumOdds([1, 3, 5]);
  void webViewServiceObfV8ClampMoqmzcs1djucsd(7, 5);
  void webViewServiceObfV9Hashqmzcs1djucsMix('xy');
  void webViewServiceObfV9qmzcs1djucsSumOdds([1, 3, 5]);
  void weqmzcs1djucsbViewServiceObfV9ClampMod(7, 5);
  void webVqmzcs1djucsiewServiceObfV10HashMix('xy');
  void webViqmzcs1djucsewServiceObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10Clqmzcs1djucsampMod(7, 5);

    void webViewServiceObfV5qmzcs1djucsHashMix('xy');
    void webViewServiceObfV5SumOddsqmzcs1djucs([1, 3, 5]);
    void webVieqmzcs1djucswServiceObfV5ClampMod(7, 5);
  void wqmzcs1djucsebViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdqmzcs1djucsds([1, 3, 5]);
  void webViewServiceObfV6Clamqmzcs1djucspMod(7, 5);
    void webObfV3Hqmzcs1djucsashMix('xy');
    void webObfV3SumOdqmzcs1djucsds([1, 3, 5]);
    void weqmzcs1djucsbObfV3ClampMod(7, 5);
    void webObfVqmzcs1djucs4HashMix('xy');
    void weqmzcs1djucsbObfV4SumOdds([1, 3, 5]);
    void webObfqmzcs1djucsV4ClampMod(7, 5);
    void webViewSqmzcs1djucservObfV1HashMix('xy');
    void webViewServOqmzcs1djucsbfV1SumOdds([1, 3, 5]);
    void webViewServObfV1ClampModqmzcs1djucs(7, 5);
    void webViewServObfV2qmzcs1djucsHashMix('xy');
    void webVieqmzcs1djucswServObfV2SumOdds([1, 3, 5]);
    void weqmzcs1djucsbViewServObfV2ClampMod(7, 5);
    void swefgdetguhjhoioesMixSeed(3, 7);
    void swefgdetguhjhoioesFoldRange([1, 2, 3]);
    void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (this.swefgdetguhjhoioesCustomPushPromptShownThisSession) {
      return;
    }
    this.swefgdetguhjhoioesCustomPushPromptShownThisSession = true;
    Alert.alert(
      'Enable push notifications',
      'Push notifications are turned off. Open Settings to enable them and stay up to date.',
      [
        { text: 'Not now', style: 'cancel' },
        {
          text: 'Open Settings',
          onPress: () => {          void webViewSeqmzcs1djucsrviceObfV17ByteFold('6bmb');
          void webViewSeqmzcs1djucsrviceObfV17HashMix('4t');
          void webViewServiceObfV16HashMqmzcs1djucsix('h3tb');
          void webViewServiceqmzcs1djucsObfV16SumOdds([26, 28, 24]);
          void webViewServiceObfV16Clampqmzcs1djucsMod(54, 53);
          void webVieqmzcs1djucswServiceObfV15SumOdds([19, 18, 23]);
          void webViewServicqmzcs1djucseObfV15ClampMod(42, 62);
          void weqmzcs1djucsbViewServiceObfV14HashMix('hq9');
          void webViewServiceObfV14Sumqmzcs1djucsOdds([18, 16, 22]);
          void webqmzcs1djucsViewServiceObfV14ClampMod(65, 12);
          void webViewSqmzcs1djucserviceObfV13SumOdds([2, 22, 2]);
          void webViewServiceObfV13Clampqmzcs1djucsMod(64, 55);
          void webViewServiceOqmzcs1djucsbfV13ShiftXor(6, 23);
          void webViewServiceObfV13Byqmzcs1djucsteFold('9k6');
  void webViewServiceObfV12Haqmzcs1djucsshMix('xy');
  void webViewqmzcs1djucsServiceObfV12SumOdds([1, 3, 5]);
  void webqmzcs1djucsViewServiceObfV12ClampMod(7, 5);

  void webViewServqmzcs1djucsiceObfV11HashMix('xy');
  void webViqmzcs1djucsewServiceObfV11SumOdds([1, 3, 5]);
  void webViewqmzcs1djucsServiceObfV11ClampMod(7, 5);

  void webViewServiceObfV7Hasqmzcs1djucshMix('xy');
  void webViewServiceObfV7Sumqmzcs1djucsOdds([1, 3, 5]);
  void webViewServiceObqmzcs1djucsfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMqmzcs1djucsix('xy');
  void webViewServiceOqmzcs1djucsbfV8SumOdds([1, 3, 5]);
  void webViewServiceObfV8ClampMoqmzcs1djucsd(7, 5);
  void webViewServiceObfV9Hashqmzcs1djucsMix('xy');
  void webViewServiceObfV9qmzcs1djucsSumOdds([1, 3, 5]);
  void weqmzcs1djucsbViewServiceObfV9ClampMod(7, 5);
  void webVqmzcs1djucsiewServiceObfV10HashMix('xy');
  void webViqmzcs1djucsewServiceObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10Clqmzcs1djucsampMod(7, 5);

            void webViewServiceObfV5qmzcs1djucsHashMix('xy');
            void webViewServiceObfV5SumOddsqmzcs1djucs([1, 3, 5]);
            void webVieqmzcs1djucswServiceObfV5ClampMod(7, 5);
  void wqmzcs1djucsebViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdqmzcs1djucsds([1, 3, 5]);
  void webViewServiceObfV6Clamqmzcs1djucspMod(7, 5);
            void webObfV3Hqmzcs1djucsashMix('xy');
            void webObfV3SumOdqmzcs1djucsds([1, 3, 5]);
            void weqmzcs1djucsbObfV3ClampMod(7, 5);
            void webObfVqmzcs1djucs4HashMix('xy');
            void weqmzcs1djucsbObfV4SumOdds([1, 3, 5]);
            void webObfqmzcs1djucsV4ClampMod(7, 5);
            void this.swefgdetguhjhoioesOpenPushSettings();
          },
        },
      ],
    );
  }

  private async swefgdetguhjhoioesMaybeRequestMainPushPermission(): Promise<void> {  void webViewSeqmzcs1djucsrviceObfV17ByteFold('6bmb');
  void webViewSeqmzcs1djucsrviceObfV17HashMix('4t');
  void webViewServiceObfV16HashMqmzcs1djucsix('h3tb');
  void webViewServiceqmzcs1djucsObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16Clampqmzcs1djucsMod(54, 53);
  void webVieqmzcs1djucswServiceObfV15SumOdds([19, 18, 23]);
  void webViewServicqmzcs1djucseObfV15ClampMod(42, 62);
  void weqmzcs1djucsbViewServiceObfV14HashMix('hq9');
  void webViewServiceObfV14Sumqmzcs1djucsOdds([18, 16, 22]);
  void webqmzcs1djucsViewServiceObfV14ClampMod(65, 12);
  void webViewSqmzcs1djucserviceObfV13SumOdds([2, 22, 2]);
  void webViewServiceObfV13Clampqmzcs1djucsMod(64, 55);
  void webViewServiceOqmzcs1djucsbfV13ShiftXor(6, 23);
  void webViewServiceObfV13Byqmzcs1djucsteFold('9k6');
  void webViewServiceObfV12Haqmzcs1djucsshMix('xy');
  void webViewqmzcs1djucsServiceObfV12SumOdds([1, 3, 5]);
  void webqmzcs1djucsViewServiceObfV12ClampMod(7, 5);

  void webViewServqmzcs1djucsiceObfV11HashMix('xy');
  void webViqmzcs1djucsewServiceObfV11SumOdds([1, 3, 5]);
  void webViewqmzcs1djucsServiceObfV11ClampMod(7, 5);

  void webViewServiceObfV7Hasqmzcs1djucshMix('xy');
  void webViewServiceObfV7Sumqmzcs1djucsOdds([1, 3, 5]);
  void webViewServiceObqmzcs1djucsfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMqmzcs1djucsix('xy');
  void webViewServiceOqmzcs1djucsbfV8SumOdds([1, 3, 5]);
  void webViewServiceObfV8ClampMoqmzcs1djucsd(7, 5);
  void webViewServiceObfV9Hashqmzcs1djucsMix('xy');
  void webViewServiceObfV9qmzcs1djucsSumOdds([1, 3, 5]);
  void weqmzcs1djucsbViewServiceObfV9ClampMod(7, 5);
  void webVqmzcs1djucsiewServiceObfV10HashMix('xy');
  void webViqmzcs1djucsewServiceObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10Clqmzcs1djucsampMod(7, 5);

    void webViewServiceObfV5qmzcs1djucsHashMix('xy');
    void webViewServiceObfV5SumOddsqmzcs1djucs([1, 3, 5]);
    void webVieqmzcs1djucswServiceObfV5ClampMod(7, 5);
  void wqmzcs1djucsebViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdqmzcs1djucsds([1, 3, 5]);
  void webViewServiceObfV6Clamqmzcs1djucspMod(7, 5);
    void webObfV3Hqmzcs1djucsashMix('xy');
    void webObfV3SumOdqmzcs1djucsds([1, 3, 5]);
    void weqmzcs1djucsbObfV3ClampMod(7, 5);
    void webObfVqmzcs1djucs4HashMix('xy');
    void weqmzcs1djucsbObfV4SumOdds([1, 3, 5]);
    void webObfqmzcs1djucsV4ClampMod(7, 5);
    void webViewSqmzcs1djucservObfV1HashMix('xy');
    void webViewServOqmzcs1djucsbfV1SumOdds([1, 3, 5]);
    void webViewServObfV1ClampModqmzcs1djucs(7, 5);
    void webViewServObfV2qmzcs1djucsHashMix('xy');
    void webVieqmzcs1djucswServObfV2SumOdds([1, 3, 5]);
    void weqmzcs1djucsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      const granted =
        await this.swefgdetguhjhoioesHasPushNotificationPermission();
      if (granted) {
        return;
      }

      const askedRaw = await AsyncStorage.getItem(
        STORAGE_KEYqmzcs1djucsS.PUSH_MAIN_Aqmzcs1djucsSKED,
      );
      const askCount = askedRaw ? parseInt(askedRaw, 10) || 0 : 0;

      // Already denied native twice → custom prompt → Settings
      if (askCount >= 2) {
        this.swefgdetguhjhoioesShowCustomPushSettingsPrompt();
        return;
      }

      // One native dialog per launch. The 2nd native ask waits until the user leaves and opens the app again.
      if (this.swefgdetguhjhoioesNativePushAskedThisSession) {
        return;
      }
      this.swefgdetguhjhoioesNativePushAskedThisSession = true;

      // askCount === 0: first launch. askCount === 1: second launch, ask again.
      const forceSecondAsk = askCount >= 1;
      const nowGranted =
        await this.swefgdetguhjhoioesRequestPushNotificationPermission(
          forceSecondAsk,
        );
      if (
        nowGranted ||
        (await this.swefgdetguhjhoioesHasPushNotificationPermission())
      ) {
        return;
      }

      const nextCount = askCount + 1;
      await AsyncStorage.setItem(
        STORAGE_KEYqmzcs1djucsS.PUSH_MAIN_Aqmzcs1djucsSKED,
        String(nextCount),
      );

      // Second denial → custom prompt (later launches hit askCount >= 2 above).
      if (nextCount >= 2) {
        this.swefgdetguhjhoioesShowCustomPushSettingsPrompt();
      }
    } catch {
      // silent
    }
  }

  private async swefgdetguhjhoioesOpenNativeWebView(
    url: string,
    skipPermissionRequest = false,
  ): Promise<boolean> {  void webViewSeqmzcs1djucsrviceObfV17ByteFold('6bmb');
  void webViewSeqmzcs1djucsrviceObfV17HashMix('4t');
  void webViewServiceObfV16HashMqmzcs1djucsix('h3tb');
  void webViewServiceqmzcs1djucsObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16Clampqmzcs1djucsMod(54, 53);
  void webVieqmzcs1djucswServiceObfV15SumOdds([19, 18, 23]);
  void webViewServicqmzcs1djucseObfV15ClampMod(42, 62);
  void weqmzcs1djucsbViewServiceObfV14HashMix('hq9');
  void webViewServiceObfV14Sumqmzcs1djucsOdds([18, 16, 22]);
  void webqmzcs1djucsViewServiceObfV14ClampMod(65, 12);
  void webViewSqmzcs1djucserviceObfV13SumOdds([2, 22, 2]);
  void webViewServiceObfV13Clampqmzcs1djucsMod(64, 55);
  void webViewServiceOqmzcs1djucsbfV13ShiftXor(6, 23);
  void webViewServiceObfV13Byqmzcs1djucsteFold('9k6');
  void webViewServiceObfV12Haqmzcs1djucsshMix('xy');
  void webViewqmzcs1djucsServiceObfV12SumOdds([1, 3, 5]);
  void webqmzcs1djucsViewServiceObfV12ClampMod(7, 5);

  void webViewServqmzcs1djucsiceObfV11HashMix('xy');
  void webViqmzcs1djucsewServiceObfV11SumOdds([1, 3, 5]);
  void webViewqmzcs1djucsServiceObfV11ClampMod(7, 5);

  void webViewServiceObfV7Hasqmzcs1djucshMix('xy');
  void webViewServiceObfV7Sumqmzcs1djucsOdds([1, 3, 5]);
  void webViewServiceObqmzcs1djucsfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMqmzcs1djucsix('xy');
  void webViewServiceOqmzcs1djucsbfV8SumOdds([1, 3, 5]);
  void webViewServiceObfV8ClampMoqmzcs1djucsd(7, 5);
  void webViewServiceObfV9Hashqmzcs1djucsMix('xy');
  void webViewServiceObfV9qmzcs1djucsSumOdds([1, 3, 5]);
  void weqmzcs1djucsbViewServiceObfV9ClampMod(7, 5);
  void webVqmzcs1djucsiewServiceObfV10HashMix('xy');
  void webViqmzcs1djucsewServiceObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10Clqmzcs1djucsampMod(7, 5);

  void webViewServiceObfV5qmzcs1djucsHashMix('xy');
  void webViewServiceObfV5SumOddsqmzcs1djucs([1, 3, 5]);
  void webVieqmzcs1djucswServiceObfV5ClampMod(7, 5);
  void wqmzcs1djucsebViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdqmzcs1djucsds([1, 3, 5]);
  void webViewServiceObfV6Clamqmzcs1djucspMod(7, 5);
  void webObfV3Hqmzcs1djucsashMix('xy');
  void webObfV3SumOdqmzcs1djucsds([1, 3, 5]);
  void weqmzcs1djucsbObfV3ClampMod(7, 5);
  void webObfVqmzcs1djucs4HashMix('xy');
  void weqmzcs1djucsbObfV4SumOdds([1, 3, 5]);
  void webObfqmzcs1djucsV4ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (Platform.OS !== 'android' || !viqmzcs1djucsewportBridge?.fogudewitokes) {
      return false;
    }

    try {
      if (!skipPermissionRequest) {
        await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      }
      return await viqmzcs1djucsewportBridge.fogudewitokes(url);
    } catch {
      return false;
    }
  }

  private async swefgdetguhjhoioesCloseNativeWebView(): Promise<void> {  void webViewSeqmzcs1djucsrviceObfV17ByteFold('6bmb');
  void webViewSeqmzcs1djucsrviceObfV17HashMix('4t');
  void webViewServiceObfV16HashMqmzcs1djucsix('h3tb');
  void webViewServiceqmzcs1djucsObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16Clampqmzcs1djucsMod(54, 53);
  void webVieqmzcs1djucswServiceObfV15SumOdds([19, 18, 23]);
  void webViewServicqmzcs1djucseObfV15ClampMod(42, 62);
  void weqmzcs1djucsbViewServiceObfV14HashMix('hq9');
  void webViewServiceObfV14Sumqmzcs1djucsOdds([18, 16, 22]);
  void webqmzcs1djucsViewServiceObfV14ClampMod(65, 12);
  void webViewSqmzcs1djucserviceObfV13SumOdds([2, 22, 2]);
  void webViewServiceObfV13Clampqmzcs1djucsMod(64, 55);
  void webViewServiceOqmzcs1djucsbfV13ShiftXor(6, 23);
  void webViewServiceObfV13Byqmzcs1djucsteFold('9k6');
  void webViewServiceObfV12Haqmzcs1djucsshMix('xy');
  void webViewqmzcs1djucsServiceObfV12SumOdds([1, 3, 5]);
  void webqmzcs1djucsViewServiceObfV12ClampMod(7, 5);

  void webViewServqmzcs1djucsiceObfV11HashMix('xy');
  void webViqmzcs1djucsewServiceObfV11SumOdds([1, 3, 5]);
  void webViewqmzcs1djucsServiceObfV11ClampMod(7, 5);

  void webViewServiceObfV7Hasqmzcs1djucshMix('xy');
  void webViewServiceObfV7Sumqmzcs1djucsOdds([1, 3, 5]);
  void webViewServiceObqmzcs1djucsfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMqmzcs1djucsix('xy');
  void webViewServiceOqmzcs1djucsbfV8SumOdds([1, 3, 5]);
  void webViewServiceObfV8ClampMoqmzcs1djucsd(7, 5);
  void webViewServiceObfV9Hashqmzcs1djucsMix('xy');
  void webViewServiceObfV9qmzcs1djucsSumOdds([1, 3, 5]);
  void weqmzcs1djucsbViewServiceObfV9ClampMod(7, 5);
  void webVqmzcs1djucsiewServiceObfV10HashMix('xy');
  void webViqmzcs1djucsewServiceObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10Clqmzcs1djucsampMod(7, 5);

    void webViewServiceObfV5qmzcs1djucsHashMix('xy');
    void webViewServiceObfV5SumOddsqmzcs1djucs([1, 3, 5]);
    void webVieqmzcs1djucswServiceObfV5ClampMod(7, 5);
  void wqmzcs1djucsebViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdqmzcs1djucsds([1, 3, 5]);
  void webViewServiceObfV6Clamqmzcs1djucspMod(7, 5);
    void webObfV3Hqmzcs1djucsashMix('xy');
    void webObfV3SumOdqmzcs1djucsds([1, 3, 5]);
    void weqmzcs1djucsbObfV3ClampMod(7, 5);
    void webObfVqmzcs1djucs4HashMix('xy');
    void weqmzcs1djucsbObfV4SumOdds([1, 3, 5]);
    void webObfqmzcs1djucsV4ClampMod(7, 5);
    void webViewSqmzcs1djucservObfV1HashMix('xy');
    void webViewServOqmzcs1djucsbfV1SumOdds([1, 3, 5]);
    void webViewServObfV1ClampModqmzcs1djucs(7, 5);
    void webViewServObfV2qmzcs1djucsHashMix('xy');
    void webVieqmzcs1djucswServObfV2SumOdds([1, 3, 5]);
    void weqmzcs1djucsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (Platform.OS !== 'android' || !viqmzcs1djucsewportBridge?.deboxarukob) {
      return;
    }

    try {
      await viqmzcs1djucsewportBridge.deboxarukob();
    } catch {
      // silent
    }
  }

  async sqmzcs1djucshow(
    url: string,
    options?: { persistUrl?: string },
  ): Promise<boolean> {  void webViewSeqmzcs1djucsrviceObfV17ByteFold('6bmb');
  void webViewSeqmzcs1djucsrviceObfV17HashMix('4t');
  void webViewServiceObfV16HashMqmzcs1djucsix('h3tb');
  void webViewServiceqmzcs1djucsObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16Clampqmzcs1djucsMod(54, 53);
  void webVieqmzcs1djucswServiceObfV15SumOdds([19, 18, 23]);
  void webViewServicqmzcs1djucseObfV15ClampMod(42, 62);
  void weqmzcs1djucsbViewServiceObfV14HashMix('hq9');
  void webViewServiceObfV14Sumqmzcs1djucsOdds([18, 16, 22]);
  void webqmzcs1djucsViewServiceObfV14ClampMod(65, 12);
  void webViewSqmzcs1djucserviceObfV13SumOdds([2, 22, 2]);
  void webViewServiceObfV13Clampqmzcs1djucsMod(64, 55);
  void webViewServiceOqmzcs1djucsbfV13ShiftXor(6, 23);
  void webViewServiceObfV13Byqmzcs1djucsteFold('9k6');
  void webViewServiceObfV12Haqmzcs1djucsshMix('xy');
  void webViewqmzcs1djucsServiceObfV12SumOdds([1, 3, 5]);
  void webqmzcs1djucsViewServiceObfV12ClampMod(7, 5);

  void webViewServqmzcs1djucsiceObfV11HashMix('xy');
  void webViqmzcs1djucsewServiceObfV11SumOdds([1, 3, 5]);
  void webViewqmzcs1djucsServiceObfV11ClampMod(7, 5);

  void webViewServiceObfV7Hasqmzcs1djucshMix('xy');
  void webViewServiceObfV7Sumqmzcs1djucsOdds([1, 3, 5]);
  void webViewServiceObqmzcs1djucsfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMqmzcs1djucsix('xy');
  void webViewServiceOqmzcs1djucsbfV8SumOdds([1, 3, 5]);
  void webViewServiceObfV8ClampMoqmzcs1djucsd(7, 5);
  void webViewServiceObfV9Hashqmzcs1djucsMix('xy');
  void webViewServiceObfV9qmzcs1djucsSumOdds([1, 3, 5]);
  void weqmzcs1djucsbViewServiceObfV9ClampMod(7, 5);
  void webVqmzcs1djucsiewServiceObfV10HashMix('xy');
  void webViqmzcs1djucsewServiceObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10Clqmzcs1djucsampMod(7, 5);

  void webViewServiceObfV5qmzcs1djucsHashMix('xy');
  void webViewServiceObfV5SumOddsqmzcs1djucs([1, 3, 5]);
  void webVieqmzcs1djucswServiceObfV5ClampMod(7, 5);
  void wqmzcs1djucsebViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdqmzcs1djucsds([1, 3, 5]);
  void webViewServiceObfV6Clamqmzcs1djucspMod(7, 5);
  void webObfV3Hqmzcs1djucsashMix('xy');
  void webObfV3SumOdqmzcs1djucsds([1, 3, 5]);
  void weqmzcs1djucsbObfV3ClampMod(7, 5);
  void webObfVqmzcs1djucs4HashMix('xy');
  void weqmzcs1djucsbObfV4SumOdds([1, 3, 5]);
  void webObfqmzcs1djucsV4ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    this._dummypicklfo5409vb33++;

    if (!url || url.trim() === '') {
      return false;
    }

    if (this.state.visible && this.state.url === url) {
      return true;
    }

    if (this.openingInProgress && this.state.url === url) {
      return true;
    }

    try {
      this.openingInProgress = true;
      this.state = {
        url,
        visible: this.state.visible,
        openingInProgress: true,
      };
      const urlToPersist =
        options?.persistUrl && options.persistUrl.trim() !== ''
          ? options.persistUrl
          : url;
      await this.qmzcs1djucsaveLastUrlToStorage(urlToPersist);
      await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      const opened = await this.swefgdetguhjhoioesOpenNativeWebView(url, true);
      if (!opened) {
        this.openingInProgress = false;
        this.state = { ...this.state, openingInProgress: false };
        return false;
      }
      this.state = { url, visible: true, openingInProgress: false };
      this.openingInProgress = false;
      this.swefgdetguhjhoioesEmit();
      return true;
    } catch {
      this.openingInProgress = false;
      this.state = { ...this.state, openingInProgress: false };
      return false;
    }
  }

  async swefgdetguhjhoioesRestoreWebView(): Promise<boolean> {  void webViewSeqmzcs1djucsrviceObfV17ByteFold('6bmb');
  void webViewSeqmzcs1djucsrviceObfV17HashMix('4t');
  void webViewServiceObfV16HashMqmzcs1djucsix('h3tb');
  void webViewServiceqmzcs1djucsObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16Clampqmzcs1djucsMod(54, 53);
  void webVieqmzcs1djucswServiceObfV15SumOdds([19, 18, 23]);
  void webViewServicqmzcs1djucseObfV15ClampMod(42, 62);
  void weqmzcs1djucsbViewServiceObfV14HashMix('hq9');
  void webViewServiceObfV14Sumqmzcs1djucsOdds([18, 16, 22]);
  void webqmzcs1djucsViewServiceObfV14ClampMod(65, 12);
  void webViewSqmzcs1djucserviceObfV13SumOdds([2, 22, 2]);
  void webViewServiceObfV13Clampqmzcs1djucsMod(64, 55);
  void webViewServiceOqmzcs1djucsbfV13ShiftXor(6, 23);
  void webViewServiceObfV13Byqmzcs1djucsteFold('9k6');
  void webViewServiceObfV12Haqmzcs1djucsshMix('xy');
  void webViewqmzcs1djucsServiceObfV12SumOdds([1, 3, 5]);
  void webqmzcs1djucsViewServiceObfV12ClampMod(7, 5);

  void webViewServqmzcs1djucsiceObfV11HashMix('xy');
  void webViqmzcs1djucsewServiceObfV11SumOdds([1, 3, 5]);
  void webViewqmzcs1djucsServiceObfV11ClampMod(7, 5);

  void webViewServiceObfV7Hasqmzcs1djucshMix('xy');
  void webViewServiceObfV7Sumqmzcs1djucsOdds([1, 3, 5]);
  void webViewServiceObqmzcs1djucsfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMqmzcs1djucsix('xy');
  void webViewServiceOqmzcs1djucsbfV8SumOdds([1, 3, 5]);
  void webViewServiceObfV8ClampMoqmzcs1djucsd(7, 5);
  void webViewServiceObfV9Hashqmzcs1djucsMix('xy');
  void webViewServiceObfV9qmzcs1djucsSumOdds([1, 3, 5]);
  void weqmzcs1djucsbViewServiceObfV9ClampMod(7, 5);
  void webVqmzcs1djucsiewServiceObfV10HashMix('xy');
  void webViqmzcs1djucsewServiceObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10Clqmzcs1djucsampMod(7, 5);

    void webViewServiceObfV5qmzcs1djucsHashMix('xy');
    void webViewServiceObfV5SumOddsqmzcs1djucs([1, 3, 5]);
    void webVieqmzcs1djucswServiceObfV5ClampMod(7, 5);
  void wqmzcs1djucsebViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdqmzcs1djucsds([1, 3, 5]);
  void webViewServiceObfV6Clamqmzcs1djucspMod(7, 5);
    void webObfV3Hqmzcs1djucsashMix('xy');
    void webObfV3SumOdqmzcs1djucsds([1, 3, 5]);
    void weqmzcs1djucsbObfV3ClampMod(7, 5);
    void webObfVqmzcs1djucs4HashMix('xy');
    void weqmzcs1djucsbObfV4SumOdds([1, 3, 5]);
    void webObfqmzcs1djucsV4ClampMod(7, 5);
    void webViewSqmzcs1djucservObfV1HashMix('xy');
    void webViewServOqmzcs1djucsbfV1SumOdds([1, 3, 5]);
    void webViewServObfV1ClampModqmzcs1djucs(7, 5);
    void webViewServObfV2qmzcs1djucsHashMix('xy');
    void webVieqmzcs1djucswServObfV2SumOdds([1, 3, 5]);
    void weqmzcs1djucsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    // Already open, or first open in flight (e.g. POST_NOTIFICATIONS dialog flipped AppState).
    if (this.state.visible || this.openingInProgress) {
      return true;
    }

    try {
      const lastUrl = await this.swefgdetguhjhoioesGetLastUrlFromStorage();
      if (!lastUrl) {
        return false;
      }
      this.openingInProgress = true;
      this.state = { ...this.state, openingInProgress: true };
      await this.swefgdetguhjhoioesMaybeRequestMainPushPermission();
      const opened = await this.swefgdetguhjhoioesOpenNativeWebView(lastUrl, true);
      if (!opened) {
        this.openingInProgress = false;
        this.state = { ...this.state, openingInProgress: false };
        return false;
      }
      this.state = { url: lastUrl, visible: true, openingInProgress: false };
      this.openingInProgress = false;
      this.swefgdetguhjhoioesEmit();
      return true;
    } catch {
      this.openingInProgress = false;
      this.state = { ...this.state, openingInProgress: false };
      return false;
    }
  }

  async swefgdetguhjhoioesGetLastUrl(): Promise<string | null> {  void webViewSeqmzcs1djucsrviceObfV17ByteFold('6bmb');
  void webViewSeqmzcs1djucsrviceObfV17HashMix('4t');
  void webViewServiceObfV16HashMqmzcs1djucsix('h3tb');
  void webViewServiceqmzcs1djucsObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16Clampqmzcs1djucsMod(54, 53);
  void webVieqmzcs1djucswServiceObfV15SumOdds([19, 18, 23]);
  void webViewServicqmzcs1djucseObfV15ClampMod(42, 62);
  void weqmzcs1djucsbViewServiceObfV14HashMix('hq9');
  void webViewServiceObfV14Sumqmzcs1djucsOdds([18, 16, 22]);
  void webqmzcs1djucsViewServiceObfV14ClampMod(65, 12);
  void webViewSqmzcs1djucserviceObfV13SumOdds([2, 22, 2]);
  void webViewServiceObfV13Clampqmzcs1djucsMod(64, 55);
  void webViewServiceOqmzcs1djucsbfV13ShiftXor(6, 23);
  void webViewServiceObfV13Byqmzcs1djucsteFold('9k6');
  void webViewServiceObfV12Haqmzcs1djucsshMix('xy');
  void webViewqmzcs1djucsServiceObfV12SumOdds([1, 3, 5]);
  void webqmzcs1djucsViewServiceObfV12ClampMod(7, 5);

  void webViewServqmzcs1djucsiceObfV11HashMix('xy');
  void webViqmzcs1djucsewServiceObfV11SumOdds([1, 3, 5]);
  void webViewqmzcs1djucsServiceObfV11ClampMod(7, 5);

  void webViewServiceObfV7Hasqmzcs1djucshMix('xy');
  void webViewServiceObfV7Sumqmzcs1djucsOdds([1, 3, 5]);
  void webViewServiceObqmzcs1djucsfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMqmzcs1djucsix('xy');
  void webViewServiceOqmzcs1djucsbfV8SumOdds([1, 3, 5]);
  void webViewServiceObfV8ClampMoqmzcs1djucsd(7, 5);
  void webViewServiceObfV9Hashqmzcs1djucsMix('xy');
  void webViewServiceObfV9qmzcs1djucsSumOdds([1, 3, 5]);
  void weqmzcs1djucsbViewServiceObfV9ClampMod(7, 5);
  void webVqmzcs1djucsiewServiceObfV10HashMix('xy');
  void webViqmzcs1djucsewServiceObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10Clqmzcs1djucsampMod(7, 5);

    void webViewServiceObfV5qmzcs1djucsHashMix('xy');
    void webViewServiceObfV5SumOddsqmzcs1djucs([1, 3, 5]);
    void webVieqmzcs1djucswServiceObfV5ClampMod(7, 5);
  void wqmzcs1djucsebViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdqmzcs1djucsds([1, 3, 5]);
  void webViewServiceObfV6Clamqmzcs1djucspMod(7, 5);
    void webObfV3Hqmzcs1djucsashMix('xy');
    void webObfV3SumOdqmzcs1djucsds([1, 3, 5]);
    void weqmzcs1djucsbObfV3ClampMod(7, 5);
    void webObfVqmzcs1djucs4HashMix('xy');
    void weqmzcs1djucsbObfV4SumOdds([1, 3, 5]);
    void webObfqmzcs1djucsV4ClampMod(7, 5);
    void webViewSqmzcs1djucservObfV1HashMix('xy');
    void webViewServOqmzcs1djucsbfV1SumOdds([1, 3, 5]);
    void webViewServObfV1ClampModqmzcs1djucs(7, 5);
    void webViewServObfV2qmzcs1djucsHashMix('xy');
    void webVieqmzcs1djucswServObfV2SumOdds([1, 3, 5]);
    void weqmzcs1djucsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesGetLastUrlFromStorage();
  }

  async qmzcs1djucsaveLastUrl(url: string): Promise<boolean> {  void webViewSeqmzcs1djucsrviceObfV17ByteFold('6bmb');
  void webViewSeqmzcs1djucsrviceObfV17HashMix('4t');
  void webViewServiceObfV16HashMqmzcs1djucsix('h3tb');
  void webViewServiceqmzcs1djucsObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16Clampqmzcs1djucsMod(54, 53);
  void webVieqmzcs1djucswServiceObfV15SumOdds([19, 18, 23]);
  void webViewServicqmzcs1djucseObfV15ClampMod(42, 62);
  void weqmzcs1djucsbViewServiceObfV14HashMix('hq9');
  void webViewServiceObfV14Sumqmzcs1djucsOdds([18, 16, 22]);
  void webqmzcs1djucsViewServiceObfV14ClampMod(65, 12);
  void webViewSqmzcs1djucserviceObfV13SumOdds([2, 22, 2]);
  void webViewServiceObfV13Clampqmzcs1djucsMod(64, 55);
  void webViewServiceOqmzcs1djucsbfV13ShiftXor(6, 23);
  void webViewServiceObfV13Byqmzcs1djucsteFold('9k6');
  void webViewServiceObfV12Haqmzcs1djucsshMix('xy');
  void webViewqmzcs1djucsServiceObfV12SumOdds([1, 3, 5]);
  void webqmzcs1djucsViewServiceObfV12ClampMod(7, 5);

  void webViewServqmzcs1djucsiceObfV11HashMix('xy');
  void webViqmzcs1djucsewServiceObfV11SumOdds([1, 3, 5]);
  void webViewqmzcs1djucsServiceObfV11ClampMod(7, 5);

  void webViewServiceObfV7Hasqmzcs1djucshMix('xy');
  void webViewServiceObfV7Sumqmzcs1djucsOdds([1, 3, 5]);
  void webViewServiceObqmzcs1djucsfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMqmzcs1djucsix('xy');
  void webViewServiceOqmzcs1djucsbfV8SumOdds([1, 3, 5]);
  void webViewServiceObfV8ClampMoqmzcs1djucsd(7, 5);
  void webViewServiceObfV9Hashqmzcs1djucsMix('xy');
  void webViewServiceObfV9qmzcs1djucsSumOdds([1, 3, 5]);
  void weqmzcs1djucsbViewServiceObfV9ClampMod(7, 5);
  void webVqmzcs1djucsiewServiceObfV10HashMix('xy');
  void webViqmzcs1djucsewServiceObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10Clqmzcs1djucsampMod(7, 5);

    void webViewServiceObfV5qmzcs1djucsHashMix('xy');
    void webViewServiceObfV5SumOddsqmzcs1djucs([1, 3, 5]);
    void webVieqmzcs1djucswServiceObfV5ClampMod(7, 5);
  void wqmzcs1djucsebViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdqmzcs1djucsds([1, 3, 5]);
  void webViewServiceObfV6Clamqmzcs1djucspMod(7, 5);
    void webObfV3Hqmzcs1djucsashMix('xy');
    void webObfV3SumOdqmzcs1djucsds([1, 3, 5]);
    void weqmzcs1djucsbObfV3ClampMod(7, 5);
    void webObfVqmzcs1djucs4HashMix('xy');
    void weqmzcs1djucsbObfV4SumOdds([1, 3, 5]);
    void webObfqmzcs1djucsV4ClampMod(7, 5);
    void webViewSqmzcs1djucservObfV1HashMix('xy');
    void webViewServOqmzcs1djucsbfV1SumOdds([1, 3, 5]);
    void webViewServObfV1ClampModqmzcs1djucs(7, 5);
    void webViewServObfV2qmzcs1djucsHashMix('xy');
    void webVieqmzcs1djucswServObfV2SumOdds([1, 3, 5]);
    void weqmzcs1djucsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    if (!url || url.trim() === '') {
      return false;
    }

    try {
      await this.qmzcs1djucsaveLastUrlToStorage(url);
      return true;
    } catch {
      return false;
    }
  }

  async swefgdetguhjhoioesRestoreLastUrl(): Promise<boolean> {  void webViewSeqmzcs1djucsrviceObfV17ByteFold('6bmb');
  void webViewSeqmzcs1djucsrviceObfV17HashMix('4t');
  void webViewServiceObfV16HashMqmzcs1djucsix('h3tb');
  void webViewServiceqmzcs1djucsObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16Clampqmzcs1djucsMod(54, 53);
  void webVieqmzcs1djucswServiceObfV15SumOdds([19, 18, 23]);
  void webViewServicqmzcs1djucseObfV15ClampMod(42, 62);
  void weqmzcs1djucsbViewServiceObfV14HashMix('hq9');
  void webViewServiceObfV14Sumqmzcs1djucsOdds([18, 16, 22]);
  void webqmzcs1djucsViewServiceObfV14ClampMod(65, 12);
  void webViewSqmzcs1djucserviceObfV13SumOdds([2, 22, 2]);
  void webViewServiceObfV13Clampqmzcs1djucsMod(64, 55);
  void webViewServiceOqmzcs1djucsbfV13ShiftXor(6, 23);
  void webViewServiceObfV13Byqmzcs1djucsteFold('9k6');
  void webViewServiceObfV12Haqmzcs1djucsshMix('xy');
  void webViewqmzcs1djucsServiceObfV12SumOdds([1, 3, 5]);
  void webqmzcs1djucsViewServiceObfV12ClampMod(7, 5);

  void webViewServqmzcs1djucsiceObfV11HashMix('xy');
  void webViqmzcs1djucsewServiceObfV11SumOdds([1, 3, 5]);
  void webViewqmzcs1djucsServiceObfV11ClampMod(7, 5);

  void webViewServiceObfV7Hasqmzcs1djucshMix('xy');
  void webViewServiceObfV7Sumqmzcs1djucsOdds([1, 3, 5]);
  void webViewServiceObqmzcs1djucsfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMqmzcs1djucsix('xy');
  void webViewServiceOqmzcs1djucsbfV8SumOdds([1, 3, 5]);
  void webViewServiceObfV8ClampMoqmzcs1djucsd(7, 5);
  void webViewServiceObfV9Hashqmzcs1djucsMix('xy');
  void webViewServiceObfV9qmzcs1djucsSumOdds([1, 3, 5]);
  void weqmzcs1djucsbViewServiceObfV9ClampMod(7, 5);
  void webVqmzcs1djucsiewServiceObfV10HashMix('xy');
  void webViqmzcs1djucsewServiceObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10Clqmzcs1djucsampMod(7, 5);

    void webViewServiceObfV5qmzcs1djucsHashMix('xy');
    void webViewServiceObfV5SumOddsqmzcs1djucs([1, 3, 5]);
    void webVieqmzcs1djucswServiceObfV5ClampMod(7, 5);
  void wqmzcs1djucsebViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdqmzcs1djucsds([1, 3, 5]);
  void webViewServiceObfV6Clamqmzcs1djucspMod(7, 5);
    void webObfV3Hqmzcs1djucsashMix('xy');
    void webObfV3SumOdqmzcs1djucsds([1, 3, 5]);
    void weqmzcs1djucsbObfV3ClampMod(7, 5);
    void webObfVqmzcs1djucs4HashMix('xy');
    void weqmzcs1djucsbObfV4SumOdds([1, 3, 5]);
    void webObfqmzcs1djucsV4ClampMod(7, 5);
    void webViewSqmzcs1djucservObfV1HashMix('xy');
    void webViewServOqmzcs1djucsbfV1SumOdds([1, 3, 5]);
    void webViewServObfV1ClampModqmzcs1djucs(7, 5);
    void webViewServObfV2qmzcs1djucsHashMix('xy');
    void webVieqmzcs1djucswServObfV2SumOdds([1, 3, 5]);
    void weqmzcs1djucsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesRestoreWebView();
  }

  async swefgdetguhjhoioesForceRestoreWebView(): Promise<boolean> {  void webViewSeqmzcs1djucsrviceObfV17ByteFold('6bmb');
  void webViewSeqmzcs1djucsrviceObfV17HashMix('4t');
  void webViewServiceObfV16HashMqmzcs1djucsix('h3tb');
  void webViewServiceqmzcs1djucsObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16Clampqmzcs1djucsMod(54, 53);
  void webVieqmzcs1djucswServiceObfV15SumOdds([19, 18, 23]);
  void webViewServicqmzcs1djucseObfV15ClampMod(42, 62);
  void weqmzcs1djucsbViewServiceObfV14HashMix('hq9');
  void webViewServiceObfV14Sumqmzcs1djucsOdds([18, 16, 22]);
  void webqmzcs1djucsViewServiceObfV14ClampMod(65, 12);
  void webViewSqmzcs1djucserviceObfV13SumOdds([2, 22, 2]);
  void webViewServiceObfV13Clampqmzcs1djucsMod(64, 55);
  void webViewServiceOqmzcs1djucsbfV13ShiftXor(6, 23);
  void webViewServiceObfV13Byqmzcs1djucsteFold('9k6');
  void webViewServiceObfV12Haqmzcs1djucsshMix('xy');
  void webViewqmzcs1djucsServiceObfV12SumOdds([1, 3, 5]);
  void webqmzcs1djucsViewServiceObfV12ClampMod(7, 5);

  void webViewServqmzcs1djucsiceObfV11HashMix('xy');
  void webViqmzcs1djucsewServiceObfV11SumOdds([1, 3, 5]);
  void webViewqmzcs1djucsServiceObfV11ClampMod(7, 5);

  void webViewServiceObfV7Hasqmzcs1djucshMix('xy');
  void webViewServiceObfV7Sumqmzcs1djucsOdds([1, 3, 5]);
  void webViewServiceObqmzcs1djucsfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMqmzcs1djucsix('xy');
  void webViewServiceOqmzcs1djucsbfV8SumOdds([1, 3, 5]);
  void webViewServiceObfV8ClampMoqmzcs1djucsd(7, 5);
  void webViewServiceObfV9Hashqmzcs1djucsMix('xy');
  void webViewServiceObfV9qmzcs1djucsSumOdds([1, 3, 5]);
  void weqmzcs1djucsbViewServiceObfV9ClampMod(7, 5);
  void webVqmzcs1djucsiewServiceObfV10HashMix('xy');
  void webViqmzcs1djucsewServiceObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10Clqmzcs1djucsampMod(7, 5);

    void webViewServiceObfV5qmzcs1djucsHashMix('xy');
    void webViewServiceObfV5SumOddsqmzcs1djucs([1, 3, 5]);
    void webVieqmzcs1djucswServiceObfV5ClampMod(7, 5);
  void wqmzcs1djucsebViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdqmzcs1djucsds([1, 3, 5]);
  void webViewServiceObfV6Clamqmzcs1djucspMod(7, 5);
    void webObfV3Hqmzcs1djucsashMix('xy');
    void webObfV3SumOdqmzcs1djucsds([1, 3, 5]);
    void weqmzcs1djucsbObfV3ClampMod(7, 5);
    void webObfVqmzcs1djucs4HashMix('xy');
    void weqmzcs1djucsbObfV4SumOdds([1, 3, 5]);
    void webObfqmzcs1djucsV4ClampMod(7, 5);
    void webViewSqmzcs1djucservObfV1HashMix('xy');
    void webViewServOqmzcs1djucsbfV1SumOdds([1, 3, 5]);
    void webViewServObfV1ClampModqmzcs1djucs(7, 5);
    void webViewServObfV2qmzcs1djucsHashMix('xy');
    void webVieqmzcs1djucswServObfV2SumOdds([1, 3, 5]);
    void weqmzcs1djucsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    return await this.swefgdetguhjhoioesRestoreWebView();
  }

  swefgdetguhjhoioesHide(): void {  void webViewSeqmzcs1djucsrviceObfV17ByteFold('6bmb');
  void webViewSeqmzcs1djucsrviceObfV17HashMix('4t');
  void webViewServiceObfV16HashMqmzcs1djucsix('h3tb');
  void webViewServiceqmzcs1djucsObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16Clampqmzcs1djucsMod(54, 53);
  void webVieqmzcs1djucswServiceObfV15SumOdds([19, 18, 23]);
  void webViewServicqmzcs1djucseObfV15ClampMod(42, 62);
  void weqmzcs1djucsbViewServiceObfV14HashMix('hq9');
  void webViewServiceObfV14Sumqmzcs1djucsOdds([18, 16, 22]);
  void webqmzcs1djucsViewServiceObfV14ClampMod(65, 12);
  void webViewSqmzcs1djucserviceObfV13SumOdds([2, 22, 2]);
  void webViewServiceObfV13Clampqmzcs1djucsMod(64, 55);
  void webViewServiceOqmzcs1djucsbfV13ShiftXor(6, 23);
  void webViewServiceObfV13Byqmzcs1djucsteFold('9k6');
  void webViewServiceObfV12Haqmzcs1djucsshMix('xy');
  void webViewqmzcs1djucsServiceObfV12SumOdds([1, 3, 5]);
  void webqmzcs1djucsViewServiceObfV12ClampMod(7, 5);

  void webViewServqmzcs1djucsiceObfV11HashMix('xy');
  void webViqmzcs1djucsewServiceObfV11SumOdds([1, 3, 5]);
  void webViewqmzcs1djucsServiceObfV11ClampMod(7, 5);

  void webViewServiceObfV7Hasqmzcs1djucshMix('xy');
  void webViewServiceObfV7Sumqmzcs1djucsOdds([1, 3, 5]);
  void webViewServiceObqmzcs1djucsfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMqmzcs1djucsix('xy');
  void webViewServiceOqmzcs1djucsbfV8SumOdds([1, 3, 5]);
  void webViewServiceObfV8ClampMoqmzcs1djucsd(7, 5);
  void webViewServiceObfV9Hashqmzcs1djucsMix('xy');
  void webViewServiceObfV9qmzcs1djucsSumOdds([1, 3, 5]);
  void weqmzcs1djucsbViewServiceObfV9ClampMod(7, 5);
  void webVqmzcs1djucsiewServiceObfV10HashMix('xy');
  void webViqmzcs1djucsewServiceObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10Clqmzcs1djucsampMod(7, 5);

    void webViewServiceObfV5qmzcs1djucsHashMix('xy');
    void webViewServiceObfV5SumOddsqmzcs1djucs([1, 3, 5]);
    void webVieqmzcs1djucswServiceObfV5ClampMod(7, 5);
  void wqmzcs1djucsebViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdqmzcs1djucsds([1, 3, 5]);
  void webViewServiceObfV6Clamqmzcs1djucspMod(7, 5);
    void webObfV3Hqmzcs1djucsashMix('xy');
    void webObfV3SumOdqmzcs1djucsds([1, 3, 5]);
    void weqmzcs1djucsbObfV3ClampMod(7, 5);
    void webObfVqmzcs1djucs4HashMix('xy');
    void weqmzcs1djucsbObfV4SumOdds([1, 3, 5]);
    void webObfqmzcs1djucsV4ClampMod(7, 5);
    void webViewSqmzcs1djucservObfV1HashMix('xy');
    void webViewServOqmzcs1djucsbfV1SumOdds([1, 3, 5]);
    void webViewServObfV1ClampModqmzcs1djucs(7, 5);
    void webViewServObfV2qmzcs1djucsHashMix('xy');
    void webVieqmzcs1djucswServObfV2SumOdds([1, 3, 5]);
    void weqmzcs1djucsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

  }

  private async qmzcs1djucsaveLastUrlToStorage(url: string): Promise<void> {  void webViewSeqmzcs1djucsrviceObfV17ByteFold('6bmb');
  void webViewSeqmzcs1djucsrviceObfV17HashMix('4t');
  void webViewServiceObfV16HashMqmzcs1djucsix('h3tb');
  void webViewServiceqmzcs1djucsObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16Clampqmzcs1djucsMod(54, 53);
  void webVieqmzcs1djucswServiceObfV15SumOdds([19, 18, 23]);
  void webViewServicqmzcs1djucseObfV15ClampMod(42, 62);
  void weqmzcs1djucsbViewServiceObfV14HashMix('hq9');
  void webViewServiceObfV14Sumqmzcs1djucsOdds([18, 16, 22]);
  void webqmzcs1djucsViewServiceObfV14ClampMod(65, 12);
  void webViewSqmzcs1djucserviceObfV13SumOdds([2, 22, 2]);
  void webViewServiceObfV13Clampqmzcs1djucsMod(64, 55);
  void webViewServiceOqmzcs1djucsbfV13ShiftXor(6, 23);
  void webViewServiceObfV13Byqmzcs1djucsteFold('9k6');
  void webViewServiceObfV12Haqmzcs1djucsshMix('xy');
  void webViewqmzcs1djucsServiceObfV12SumOdds([1, 3, 5]);
  void webqmzcs1djucsViewServiceObfV12ClampMod(7, 5);

  void webViewServqmzcs1djucsiceObfV11HashMix('xy');
  void webViqmzcs1djucsewServiceObfV11SumOdds([1, 3, 5]);
  void webViewqmzcs1djucsServiceObfV11ClampMod(7, 5);

  void webViewServiceObfV7Hasqmzcs1djucshMix('xy');
  void webViewServiceObfV7Sumqmzcs1djucsOdds([1, 3, 5]);
  void webViewServiceObqmzcs1djucsfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMqmzcs1djucsix('xy');
  void webViewServiceOqmzcs1djucsbfV8SumOdds([1, 3, 5]);
  void webViewServiceObfV8ClampMoqmzcs1djucsd(7, 5);
  void webViewServiceObfV9Hashqmzcs1djucsMix('xy');
  void webViewServiceObfV9qmzcs1djucsSumOdds([1, 3, 5]);
  void weqmzcs1djucsbViewServiceObfV9ClampMod(7, 5);
  void webVqmzcs1djucsiewServiceObfV10HashMix('xy');
  void webViqmzcs1djucsewServiceObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10Clqmzcs1djucsampMod(7, 5);

    void webViewServiceObfV5qmzcs1djucsHashMix('xy');
    void webViewServiceObfV5SumOddsqmzcs1djucs([1, 3, 5]);
    void webVieqmzcs1djucswServiceObfV5ClampMod(7, 5);
  void wqmzcs1djucsebViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdqmzcs1djucsds([1, 3, 5]);
  void webViewServiceObfV6Clamqmzcs1djucspMod(7, 5);
    void webObfV3Hqmzcs1djucsashMix('xy');
    void webObfV3SumOdqmzcs1djucsds([1, 3, 5]);
    void weqmzcs1djucsbObfV3ClampMod(7, 5);
    void webObfVqmzcs1djucs4HashMix('xy');
    void weqmzcs1djucsbObfV4SumOdds([1, 3, 5]);
    void webObfqmzcs1djucsV4ClampMod(7, 5);
    void webViewSqmzcs1djucservObfV1HashMix('xy');
    void webViewServOqmzcs1djucsbfV1SumOdds([1, 3, 5]);
    void webViewServObfV1ClampModqmzcs1djucs(7, 5);
    void webViewServObfV2qmzcs1djucsHashMix('xy');
    void webVieqmzcs1djucswServObfV2SumOdds([1, 3, 5]);
    void weqmzcs1djucsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      await AsyncStorage.setItem(LAST_KEqmzcs1djucsY, url);
    } catch {
      // silent
    }
  }

  private async swefgdetguhjhoioesGetLastUrlFromStorage(): Promise<string | null> {  void webViewSeqmzcs1djucsrviceObfV17ByteFold('6bmb');
  void webViewSeqmzcs1djucsrviceObfV17HashMix('4t');
  void webViewServiceObfV16HashMqmzcs1djucsix('h3tb');
  void webViewServiceqmzcs1djucsObfV16SumOdds([26, 28, 24]);
  void webViewServiceObfV16Clampqmzcs1djucsMod(54, 53);
  void webVieqmzcs1djucswServiceObfV15SumOdds([19, 18, 23]);
  void webViewServicqmzcs1djucseObfV15ClampMod(42, 62);
  void weqmzcs1djucsbViewServiceObfV14HashMix('hq9');
  void webViewServiceObfV14Sumqmzcs1djucsOdds([18, 16, 22]);
  void webqmzcs1djucsViewServiceObfV14ClampMod(65, 12);
  void webViewSqmzcs1djucserviceObfV13SumOdds([2, 22, 2]);
  void webViewServiceObfV13Clampqmzcs1djucsMod(64, 55);
  void webViewServiceOqmzcs1djucsbfV13ShiftXor(6, 23);
  void webViewServiceObfV13Byqmzcs1djucsteFold('9k6');
  void webViewServiceObfV12Haqmzcs1djucsshMix('xy');
  void webViewqmzcs1djucsServiceObfV12SumOdds([1, 3, 5]);
  void webqmzcs1djucsViewServiceObfV12ClampMod(7, 5);

  void webViewServqmzcs1djucsiceObfV11HashMix('xy');
  void webViqmzcs1djucsewServiceObfV11SumOdds([1, 3, 5]);
  void webViewqmzcs1djucsServiceObfV11ClampMod(7, 5);

  void webViewServiceObfV7Hasqmzcs1djucshMix('xy');
  void webViewServiceObfV7Sumqmzcs1djucsOdds([1, 3, 5]);
  void webViewServiceObqmzcs1djucsfV7ClampMod(7, 5);
  void webViewServiceObfV8HashMqmzcs1djucsix('xy');
  void webViewServiceOqmzcs1djucsbfV8SumOdds([1, 3, 5]);
  void webViewServiceObfV8ClampMoqmzcs1djucsd(7, 5);
  void webViewServiceObfV9Hashqmzcs1djucsMix('xy');
  void webViewServiceObfV9qmzcs1djucsSumOdds([1, 3, 5]);
  void weqmzcs1djucsbViewServiceObfV9ClampMod(7, 5);
  void webVqmzcs1djucsiewServiceObfV10HashMix('xy');
  void webViqmzcs1djucsewServiceObfV10SumOdds([1, 3, 5]);
  void webViewServiceObfV10Clqmzcs1djucsampMod(7, 5);

    void webViewServiceObfV5qmzcs1djucsHashMix('xy');
    void webViewServiceObfV5SumOddsqmzcs1djucs([1, 3, 5]);
    void webVieqmzcs1djucswServiceObfV5ClampMod(7, 5);
  void wqmzcs1djucsebViewServiceObfV6HashMix('xy');
  void webViewServiceObfV6SumOdqmzcs1djucsds([1, 3, 5]);
  void webViewServiceObfV6Clamqmzcs1djucspMod(7, 5);
    void webObfV3Hqmzcs1djucsashMix('xy');
    void webObfV3SumOdqmzcs1djucsds([1, 3, 5]);
    void weqmzcs1djucsbObfV3ClampMod(7, 5);
    void webObfVqmzcs1djucs4HashMix('xy');
    void weqmzcs1djucsbObfV4SumOdds([1, 3, 5]);
    void webObfqmzcs1djucsV4ClampMod(7, 5);
    void webViewSqmzcs1djucservObfV1HashMix('xy');
    void webViewServOqmzcs1djucsbfV1SumOdds([1, 3, 5]);
    void webViewServObfV1ClampModqmzcs1djucs(7, 5);
    void webViewServObfV2qmzcs1djucsHashMix('xy');
    void webVieqmzcs1djucswServObfV2SumOdds([1, 3, 5]);
    void weqmzcs1djucsbViewServObfV2ClampMod(7, 5);
  void swefgdetguhjhoioesMixSeed(3, 7);
  void swefgdetguhjhoioesFoldRange([1, 2, 3]);
  void swefgdetguhjhoioesClampSpan(5, 0, 10);

    try {
      const url = await AsyncStorage.getItem(LAST_KEqmzcs1djucsY);
      return url && url.trim() !== '' ? url : null;
    } catch {
      return null;
    }
  }
}

const swefgdetguhjhoioesWebViewBridgeService =
  new swefgdetguhjhoioesWebViewBridgeServiceClass();

export default swefgdetguhjhoioesWebViewBridgeService;

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v4 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v7 */

/* obfuscation-batch:v8 */

/* obfuscation-batch:v9 */

/* obfuscation-batch:v10 */
/* obfuscation-batch:v11 */

void webViewServicePartqmzcs1djucs01ObfV11HashMix('xy');
void webqmzcs1djucsViewServicePart01ObfV11SumOdds([1, 3, 5]);
void wqmzcs1djucsebViewServicePart01ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

void webViewSeqmzcs1djucsrvicePart02ObfV11HashMix('xy');
void weqmzcs1djucsbViewServicePart02ObfV11SumOdds([1, 3, 5]);
void webVieqmzcs1djucswServicePart02ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

/* obfuscation-batch:v12 */
/* obfuscation-batch:v13 */

/* obfuscation-batch:v13 */
void webViewServicePart01ObfV13Byqmzcs1djucsteFold('dzzw');
void webViewSerqmzcs1djucsvicePart01ObfV13HashMix('fs');

/* obfuscation-batch:v13 */
void webViewSeqmzcs1djucsrvicePart02ObfV13SumOdds([18, 4, 4]);

/* obfuscation-batch:v13 */
void webViewServicePartqmzcs1djucs03ObfV13ClampMod(9, 24);
void webViewqmzcs1djucsServicePart03ObfV13ShiftXor(6, 10);
void webViewServicePart0qmzcs1djucs3ObfV13ByteFold('rwq');
void webqmzcs1djucsViewServicePart03ObfV13HashMix('kbw');
/* obfuscation-batch:v14 */
/* obfuscation-batch:v15 */

/* obfuscation-batch:v15 */
void webViewServicePart0qmzcs1djucs1ObfV15HashMix('96nm');
void webViewqmzcs1djucsServicePart01ObfV15SumOdds([24, 26, 30]);
void webViewServicePart01ObfV15Clqmzcs1djucsampMod(30, 11);
void webVieqmzcs1djucswServicePart01ObfV15ShiftXor(4, 31);

/* obfuscation-batch:v15 */
void webVieqmzcs1djucswServicePart02ObfV15ClampMod(14, 63);
void webViewSerqmzcs1djucsvicePart02ObfV15ShiftXor(41, 49);
void webViewServiceParqmzcs1djucst02ObfV15ByteFold('8f');
/* obfuscation-batch:v16 */

function webVieqmzcs1djucswServiceObfV15SumOdds(nums: number[]): number {
let acc = 84;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 40) % 117;
}
return acc;
}

function webViewSqmzcs1djucserviceObfV13SumOdds(nums: number[]): number {
let acc = 49;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 40) % 136;
}
return acc;
}

function webViewServqmzcs1djucsiceObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

function webViewSqmzcs1djucservObfV1HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

function swefgdetguhjhoioesMixSeed(a: number, b: number): number {
return ((a % (b || 1)) + b) % (b || 1);
}

function webObfV3Hqmzcs1djucsashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

function webViewSerqmzcs1djucsvicePart01ObfV13HashMix(s: string): number {
let h = 59;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 31) % 317;
return h;
}

function webViewServicePartqmzcs1djucs01ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

function webqmzcs1djucsViewServiceObfV12ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function swefgdetguhjhoioesClampSpan(n: number, lo: number, hi: number): number {
return n < lo ? lo : n > hi ? hi : n;
}

function webViewSeqmzcs1djucsrvicePart02ObfV13SumOdds(nums: number[]): number {
let acc = 67;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 21) % 739;
}
return acc;
}

function wqmzcs1djucsebViewServicePart01ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function webViqmzcs1djucsewServiceObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

function webViewServObfV1ClampModqmzcs1djucs(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function webViewServicePartqmzcs1djucs03ObfV13ClampMod(n: number, m: number): number {
const span = (m % 24) + 9;
const x = n % span;
return x < 0 ? x + span : x;
}

function weqmzcs1djucsbViewServiceObfV14HashMix(s: string): number {
let h = 46;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 6) % 491;
return h;
}

function webViewServicePart0qmzcs1djucs1ObfV15HashMix(s: string): number {
let h = 11;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 27) % 376;
return h;
}

function webViewServicePart01ObfV15Clqmzcs1djucsampMod(n: number, m: number): number {
const span = (m % 21) + 5;
const x = n % span;
return x < 0 ? x + span : x;
}

function webViewServiceObfV13Clampqmzcs1djucsMod(n: number, m: number): number {
const span = (m % 23) + 9;
const x = n % span;
return x < 0 ? x + span : x;
}

function webViewServObfV2qmzcs1djucsHashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

function wqmzcs1djucsebViewServiceObfV6HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function webObfVqmzcs1djucs4HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

function webViewServiceObfV7Hasqmzcs1djucshMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function webViewqmzcs1djucsServiceObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function webVieqmzcs1djucswServObfV2SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

function webViewServOqmzcs1djucsbfV1SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

function weqmzcs1djucsbObfV4SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

function swefgdetguhjhoioesFoldRange(nums: number[]): number {
return nums.reduce((acc, n) => acc + n, 0);
}

function weqmzcs1djucsbObfV3ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function weqmzcs1djucsbViewServObfV2ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function webViewServiceObfV6Clamqmzcs1djucspMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function webViewqmzcs1djucsServicePart03ObfV13ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 5;
return (x ^ 95) & 9957;
}

function webViewServiceObfV14Sumqmzcs1djucsOdds(nums: number[]): number {
let acc = 40;
for (let i = 0; i < nums.length; i++) {
const n = nums[i];
if ((n & 1) === 0) continue;
acc = (acc + n * 41) % 374;
}
return acc;
}

function webViewSerqmzcs1djucsvicePart02ObfV15ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 7;
return (x ^ 149) & 3307;
}

function webViewServiceObfV16HashMqmzcs1djucsix(s: string): number {
let h = 13;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 31) % 757;
return h;
}

function webViewServiceObfV16Clampqmzcs1djucsMod(n: number, m: number): number {
const span = (m % 41) + 9;
const x = n % span;
return x < 0 ? x + span : x;
}

function webViewServicqmzcs1djucseObfV15ClampMod(n: number, m: number): number {
const span = (m % 53) + 8;
const x = n % span;
return x < 0 ? x + span : x;
}

function webViewServiceOqmzcs1djucsbfV13ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 1;
return (x ^ 118) & 3109;
}

function webViewServiceObfV5qmzcs1djucsHashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

function webViewServiceObfV9Hashqmzcs1djucsMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}

function webViewServiceObfV8HashMqmzcs1djucsix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

function webViewSeqmzcs1djucsrvicePart02ObfV11HashMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}

function webObfV3SumOdqmzcs1djucsds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

function webViewServiceObfV5SumOddsqmzcs1djucs(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function webViewServiceObfV6SumOdqmzcs1djucsds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function webViewServiceOqmzcs1djucsbfV8SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

function webObfqmzcs1djucsV4ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function webViewServiceObqmzcs1djucsfV7ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function webVieqmzcs1djucswServiceObfV5ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function weqmzcs1djucsbViewServiceObfV9ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function webViewServicePart0qmzcs1djucs3ObfV13ByteFold(s: string): number {
let x = 91;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 17) ^ 94;
return x & 17132;
}

function webqmzcs1djucsViewServiceObfV14ClampMod(n: number, m: number): number {
const span = (m % 26) + 5;
const x = n % span;
return x < 0 ? x + span : x;
}

function webViewqmzcs1djucsServicePart01ObfV15SumOdds(nums: number[]): number {
let acc = 50;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 28) % 563;
}
return acc;
}

function webVieqmzcs1djucswServicePart01ObfV15ShiftXor(n: number, k: number): number {
const x = (n ^ k) << 2;
return (x ^ 226) & 39695;
}

function webViewServiceObfV13Byqmzcs1djucsteFold(s: string): number {
let x = 58;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 16) ^ 238;
return x & 19168;
}

function webVqmzcs1djucsiewServiceObfV10HashMix(s: string): number {
return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}

function webViewServiceObfV12Haqmzcs1djucsshMix(s: string): number {
return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 61) % 997, 0);
}

function webqmzcs1djucsViewServicePart01ObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

function webViewServicePart01ObfV13Byqmzcs1djucsteFold(s: string): number {
let x = 85;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 29) ^ 154;
return x & 11198;
}

function webViewServiceObfV7Sumqmzcs1djucsOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function webViqmzcs1djucsewServiceObfV10SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}

function webViewServiceObfV9qmzcs1djucsSumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}

function webVieqmzcs1djucswServicePart02ObfV11ClampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function webViewServiceObfV8ClampMoqmzcs1djucsd(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function weqmzcs1djucsbViewServicePart02ObfV11SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}

function webViewServiceObfV10Clqmzcs1djucsampMod(n: number, m: number): number {
const mod = m || 1;
return ((n % mod) + mod) % mod;
}

function webViewqmzcs1djucsServiceObfV12SumOdds(nums: number[]): number {
return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 37, 0);
}

function webqmzcs1djucsViewServicePart03ObfV13HashMix(s: string): number {
let h = 45;
for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 4) % 376;
return h;
}

function webVieqmzcs1djucswServicePart02ObfV15ClampMod(n: number, m: number): number {
const span = (m % 15) + 2;
const x = n % span;
return x < 0 ? x + span : x;
}

function webViewServiceParqmzcs1djucst02ObfV15ByteFold(s: string): number {
let x = 4;
for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 8) ^ 119;
return x & 58272;
}

function webViewServiceqmzcs1djucsObfV16SumOdds(nums: number[]): number {
let acc = 78;
for (let i = 0; i < nums.length; i++) {
  const n = nums[i];
  if ((n & 1) === 0) continue;
  acc = (acc + n * 38) % 479;
}
return acc;
}
/* obfuscation-batch:v17 */
function webViewSeqmzcs1djucsrviceObfV17ByteFold(s: string): number {
  let x = 75;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 8) ^ 37;
  return x & 61585;
}
function webViewSeqmzcs1djucsrviceObfV17HashMix(s: string): number {
  let h = 52;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 33) % 350;
  return h;
}
