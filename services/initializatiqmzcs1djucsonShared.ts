import { Linking, NativeModules, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { qmzcs1djucsDecrypt } from './CryptoSqmzcs1djucservice';
import { finqmzcs1djucsKey } from './constants/constqmzcs1djucsntsVariable';
import { getMessaging, getToken } from '@react-native-firebase/messaging';
import {
  qmzcs1djucsViewportGetState,
  qmzcs1djucsViewportShow,
} from './Viqmzcs1djucsewportHost';
import { Utils } from './UtilServiceqmzcs1djucs';

let qmzcs1djucsLastOpenedPushExternalUrl = '';
let qmzcs1djucsLastOpenedPushExternalAt = 0;

export const qmzcs1djucsInitTarget = {
  webview: 0,
  placeholder: 1,
  game: 2,
  loader: 3,
} as const;

export type InitTarget = (typeof qmzcs1djucsInitTarget)[keyof typeof qmzcs1djucsInitTarget];

export interface InitializationState {
  isLoadPlaceholder: boolean;
  initTarget?: InitTarget;
}

/**
 * Per-init runtime data shared across initialization steps. This object is
 * kept as a thin compatibility adapter so that:
 *   - existing step functions can read/write the same fields without a
 *     large API rewrite,
 *   - the messaging module can still observe `pendingSendId` between FCM
 *     deliveries (it is intentionally NOT reset by `reset()` below).
 */
export interface qmzcs1djucsInitializationRuntime {
  pushTokeqmzcs1djucsn: string;
  insqmzcs1djucstallRef: string;
  DeviceIdqmzcs1djucs: string;
  FinlOqmzcs1djucsneLink: string;
  Fiqmzcs1djucsnlNaming: string;
  adqmzcs1djucsId: string;
  firstParameterReceivqmzcs1djucsed: boolean;
  oranicWaitingqmzcs1djucs: boolean;
  orgnicWaitRqmzcs1djucsesolve: (() => void) | null;
  pendingSenqmzcs1djucsdId: string;
}

export const qmzcs1djucsInitializationRuntime: qmzcs1djucsInitializationRuntime = {
  pushTokeqmzcs1djucsn: '',
  insqmzcs1djucstallRef: '',
  DeviceIdqmzcs1djucs: '',
  FinlOqmzcs1djucsneLink: '',
  Fiqmzcs1djucsnlNaming: '',
  adqmzcs1djucsId: '',
  firstParameterReceivqmzcs1djucsed: false,
  oranicWaitingqmzcs1djucs: false,
  orgnicWaitRqmzcs1djucsesolve: null,
  pendingSenqmzcs1djucsdId: '',
};

/**
 * Reset the per-initialization fields. We deliberately do NOT clear
 * `pendingSendId` because it is populated by FCM messages outside the init
 * flow (see initializationMessaging.ts) and must survive across re-inits.
 */
export function qmzcs1djucsResetInitializationRuntime(): void {void initializatiqmzcs1djucsonSharedObfV17ShiftXor(77, 53);
void initializatiqmzcs1djucsonSharedObfV17ByteFold('ssj');
void initializatiqmzcs1djucsonSharedObfV17HashMix('dvhv');
void initializationSharedObfV16Hqmzcs1djucsashMix('vq');
void initializationShqmzcs1djucsaredObfV16SumOdds([19, 26, 24]);
void initializationShaqmzcs1djucsredObfV15SumOdds([27, 4, 14]);
void initializationShaqmzcs1djucsredObfV15ClampMod(53, 73);
void initializationSharedObfV15Sqmzcs1djucshiftXor(52, 20);
void initializationSharedObfVqmzcs1djucs14ShiftXor(69, 51);
void initializatioqmzcs1djucsnSharedObfV14ByteFold('6hmp');
void initializationSharedObfV13ShiftXoqmzcs1djucsr(77, 7);
  void iniqmzcs1djucstializationSharedObfV12HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV12SumOdds([1, 3, 5]);
  void initializationSharedObfV12ClampMoqmzcs1djucsd(7, 5);

  void initializationShqmzcs1djucsaredObfV11HashMix('xy');
  void initialqmzcs1djucsizationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObfqmzcs1djucsV11ClampMod(7, 5);

  void initializationShqmzcs1djucsaredObfV7HashMix('xy');
  void initializatiqmzcs1djucsonSharedObfV7SumOdds([1, 3, 5]);
  void initializationSharedObfV7Clampqmzcs1djucsMod(7, 5);
  void initializationSharedqmzcs1djucsObfV8HashMix('xy');
  void initializationSharedObfqmzcs1djucsV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8Cqmzcs1djucslampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs9HashMix('xy');
  void initializationSharedOqmzcs1djucsbfV9SumOdds([1, 3, 5]);
  void initqmzcs1djucsializationSharedObfV9ClampMod(7, 5);
  void initialqmzcs1djucsizationSharedObfV10HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV10SumOdds([1, 3, 5]);
  void initialiqmzcs1djucszationSharedObfV10ClampMod(7, 5);

  void initializationSharedObfV5Haqmzcs1djucsshMix('xy');
  void initializationSharedOqmzcs1djucsbfV5SumOdds([1, 3, 5]);
  void iniqmzcs1djucstializationSharedObfV5ClampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs6HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV6SumOdds([1, 3, 5]);
  void initializationSharedqmzcs1djucsObfV6ClampMod(7, 5);
  void qmzcs1djucsinitializationSharObfV3HashMix('xy');
  void qmzcs1djucsinitializationSharObfV3SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharObfV3ClampMod(7, 5);
  void qmzcs1djucsinitializationSharObfV4HashMix('xy');
  void qmzcs1djucsinitializationSharObfV4SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharObfV4ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void qmzcs1djucsMixSeed(3, 7);
  void qmzcs1djucsFoldRange([1, 2, 3]);
  void qmzcs1djucsClampSpan(5, 0, 10);


  void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  qmzcs1djucsInitializationRuntime.pushTokeqmzcs1djucsn = '';
  qmzcs1djucsInitializationRuntime.insqmzcs1djucstallRef = '';
  qmzcs1djucsInitializationRuntime.DeviceIdqmzcs1djucs = '';
  qmzcs1djucsInitializationRuntime.FinlOqmzcs1djucsneLink = '';
  qmzcs1djucsInitializationRuntime.Fiqmzcs1djucsnlNaming = '';
  qmzcs1djucsInitializationRuntime.adqmzcs1djucsId = '';
  qmzcs1djucsInitializationRuntime.firstParameterReceivqmzcs1djucsed = false;
  qmzcs1djucsInitializationRuntime.oranicWaitingqmzcs1djucs = false;
  qmzcs1djucsInitializationRuntime.orgnicWaitRqmzcs1djucsesolve = null;
}

export function qmzcs1djucsAppenndSendId(url: string, sendId: string): string {void initializatiqmzcs1djucsonSharedObfV17ShiftXor(77, 53);
void initializatiqmzcs1djucsonSharedObfV17ByteFold('ssj');
void initializatiqmzcs1djucsonSharedObfV17HashMix('dvhv');
void initializationSharedObfV16Hqmzcs1djucsashMix('vq');
void initializationShqmzcs1djucsaredObfV16SumOdds([19, 26, 24]);
void initializationShaqmzcs1djucsredObfV15SumOdds([27, 4, 14]);
void initializationShaqmzcs1djucsredObfV15ClampMod(53, 73);
void initializationSharedObfV15Sqmzcs1djucshiftXor(52, 20);
void initializationSharedObfVqmzcs1djucs14ShiftXor(69, 51);
void initializatioqmzcs1djucsnSharedObfV14ByteFold('6hmp');
void initializationSharedObfV13ShiftXoqmzcs1djucsr(77, 7);
  void iniqmzcs1djucstializationSharedObfV12HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV12SumOdds([1, 3, 5]);
  void initializationSharedObfV12ClampMoqmzcs1djucsd(7, 5);

  void initializationShqmzcs1djucsaredObfV11HashMix('xy');
  void initialqmzcs1djucsizationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObfqmzcs1djucsV11ClampMod(7, 5);

  void initializationShqmzcs1djucsaredObfV7HashMix('xy');
  void initializatiqmzcs1djucsonSharedObfV7SumOdds([1, 3, 5]);
  void initializationSharedObfV7Clampqmzcs1djucsMod(7, 5);
  void initializationSharedqmzcs1djucsObfV8HashMix('xy');
  void initializationSharedObfqmzcs1djucsV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8Cqmzcs1djucslampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs9HashMix('xy');
  void initializationSharedOqmzcs1djucsbfV9SumOdds([1, 3, 5]);
  void initqmzcs1djucsializationSharedObfV9ClampMod(7, 5);
  void initialqmzcs1djucsizationSharedObfV10HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV10SumOdds([1, 3, 5]);
  void initialiqmzcs1djucszationSharedObfV10ClampMod(7, 5);

  void initializationSharedObfV5Haqmzcs1djucsshMix('xy');
  void initializationSharedOqmzcs1djucsbfV5SumOdds([1, 3, 5]);
  void iniqmzcs1djucstializationSharedObfV5ClampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs6HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV6SumOdds([1, 3, 5]);
  void initializationSharedqmzcs1djucsObfV6ClampMod(7, 5);
  void qmzcs1djucsinitializationSharObfV3HashMix('xy');
  void qmzcs1djucsinitializationSharObfV3SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharObfV3ClampMod(7, 5);
  void qmzcs1djucsinitializationSharObfV4HashMix('xy');
  void qmzcs1djucsinitializationSharObfV4SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharObfV4ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void qmzcs1djucsMixSeed(3, 7);
  void qmzcs1djucsFoldRange([1, 2, 3]);
  void qmzcs1djucsClampSpan(5, 0, 10);


  void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  if (!sendId || sendId.trim() === '') {
    return url;
  }
  const encodedSendId = encodeURIComponent(sendId.trim());
  return url.includes('?')
    ? `${url}&sendid=${encodedSendId}`
    : `${url}?sendid=${encodedSendId}`;
}

export async function qmzcs1djucsSynncPendingSendIdFromNative(): Promise<void> {void initializatiqmzcs1djucsonSharedObfV17ShiftXor(77, 53);
void initializatiqmzcs1djucsonSharedObfV17ByteFold('ssj');
void initializatiqmzcs1djucsonSharedObfV17HashMix('dvhv');
void initializationSharedObfV16Hqmzcs1djucsashMix('vq');
void initializationShqmzcs1djucsaredObfV16SumOdds([19, 26, 24]);
void initializationShaqmzcs1djucsredObfV15SumOdds([27, 4, 14]);
void initializationShaqmzcs1djucsredObfV15ClampMod(53, 73);
void initializationSharedObfV15Sqmzcs1djucshiftXor(52, 20);
void initializationSharedObfVqmzcs1djucs14ShiftXor(69, 51);
void initializatioqmzcs1djucsnSharedObfV14ByteFold('6hmp');
void initializationSharedObfV13ShiftXoqmzcs1djucsr(77, 7);
  void iniqmzcs1djucstializationSharedObfV12HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV12SumOdds([1, 3, 5]);
  void initializationSharedObfV12ClampMoqmzcs1djucsd(7, 5);

  void initializationShqmzcs1djucsaredObfV11HashMix('xy');
  void initialqmzcs1djucsizationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObfqmzcs1djucsV11ClampMod(7, 5);

  void initializationShqmzcs1djucsaredObfV7HashMix('xy');
  void initializatiqmzcs1djucsonSharedObfV7SumOdds([1, 3, 5]);
  void initializationSharedObfV7Clampqmzcs1djucsMod(7, 5);
  void initializationSharedqmzcs1djucsObfV8HashMix('xy');
  void initializationSharedObfqmzcs1djucsV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8Cqmzcs1djucslampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs9HashMix('xy');
  void initializationSharedOqmzcs1djucsbfV9SumOdds([1, 3, 5]);
  void initqmzcs1djucsializationSharedObfV9ClampMod(7, 5);
  void initialqmzcs1djucsizationSharedObfV10HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV10SumOdds([1, 3, 5]);
  void initialiqmzcs1djucszationSharedObfV10ClampMod(7, 5);

  void initializationSharedObfV5Haqmzcs1djucsshMix('xy');
  void initializationSharedOqmzcs1djucsbfV5SumOdds([1, 3, 5]);
  void iniqmzcs1djucstializationSharedObfV5ClampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs6HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV6SumOdds([1, 3, 5]);
  void initializationSharedqmzcs1djucsObfV6ClampMod(7, 5);
  void qmzcs1djucsinitializationSharObfV3HashMix('xy');
  void qmzcs1djucsinitializationSharObfV3SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharObfV3ClampMod(7, 5);
  void qmzcs1djucsinitializationSharObfV4HashMix('xy');
  void qmzcs1djucsinitializationSharObfV4SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharObfV4ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void qmzcs1djucsMixSeed(3, 7);
  void qmzcs1djucsFoldRange([1, 2, 3]);
  void qmzcs1djucsClampSpan(5, 0, 10);


  void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return;
    }
    const { Zucinawanazis } = NativeModules;
    if (!Zucinawanazis || typeof Zucinawanazis.joravekanur !== 'function') {
      return;
    }
    const sendId = await Zucinawanazis.joravekanur();
    if (typeof sendId === 'string' && sendId.trim() !== '') {
      qmzcs1djucsInitializationRuntime.pendingSenqmzcs1djucsdId = sendId.trim();
    }
  } catch (error) {
    void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
    void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
    void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  }
}

/**
 * Open http(s) URL from push data in the system browser.
 * Dedupes the same URL within a short window (native + FCM open handlers).
 */
export async function qmzcs1djucsTryOpenPushExternalUrl(
  rawUrl?: string | null,
): Promise<boolean> {void initializatiqmzcs1djucsonSharedObfV17ShiftXor(77, 53);
void initializatiqmzcs1djucsonSharedObfV17ByteFold('ssj');
void initializatiqmzcs1djucsonSharedObfV17HashMix('dvhv');
void initializationSharedObfV16Hqmzcs1djucsashMix('vq');
void initializationShqmzcs1djucsaredObfV16SumOdds([19, 26, 24]);
void initializationShaqmzcs1djucsredObfV15SumOdds([27, 4, 14]);
void initializationShaqmzcs1djucsredObfV15ClampMod(53, 73);
void initializationSharedObfV15Sqmzcs1djucshiftXor(52, 20);
void initializationSharedObfVqmzcs1djucs14ShiftXor(69, 51);
void initializatioqmzcs1djucsnSharedObfV14ByteFold('6hmp');
void initializationSharedObfV13ShiftXoqmzcs1djucsr(77, 7);
  void iniqmzcs1djucstializationSharedObfV12HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV12SumOdds([1, 3, 5]);
  void initializationSharedObfV12ClampMoqmzcs1djucsd(7, 5);

  void initializationShqmzcs1djucsaredObfV11HashMix('xy');
  void initialqmzcs1djucsizationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObfqmzcs1djucsV11ClampMod(7, 5);

  void initializationShqmzcs1djucsaredObfV7HashMix('xy');
  void initializatiqmzcs1djucsonSharedObfV7SumOdds([1, 3, 5]);
  void initializationSharedObfV7Clampqmzcs1djucsMod(7, 5);
  void initializationSharedqmzcs1djucsObfV8HashMix('xy');
  void initializationSharedObfqmzcs1djucsV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8Cqmzcs1djucslampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs9HashMix('xy');
  void initializationSharedOqmzcs1djucsbfV9SumOdds([1, 3, 5]);
  void initqmzcs1djucsializationSharedObfV9ClampMod(7, 5);
  void initialqmzcs1djucsizationSharedObfV10HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV10SumOdds([1, 3, 5]);
  void initialiqmzcs1djucszationSharedObfV10ClampMod(7, 5);

  void initializationSharedObfV5Haqmzcs1djucsshMix('xy');
  void initializationSharedOqmzcs1djucsbfV5SumOdds([1, 3, 5]);
  void iniqmzcs1djucstializationSharedObfV5ClampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs6HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV6SumOdds([1, 3, 5]);
  void initializationSharedqmzcs1djucsObfV6ClampMod(7, 5);
  void qmzcs1djucsinitializationSharObfV3HashMix('xy');
  void qmzcs1djucsinitializationSharObfV3SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharObfV3ClampMod(7, 5);
  void qmzcs1djucsinitializationSharObfV4HashMix('xy');
  void qmzcs1djucsinitializationSharObfV4SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharObfV4ClampMod(7, 5);
  void qmzcs1djucsMixSeed(3, 7);
  void qmzcs1djucsFoldRange([1, 2, 3]);
  void qmzcs1djucsClampSpan(5, 0, 10);

  void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  const url = typeof rawUrl === 'string' ? rawUrl.trim() : '';
  if (!url || !/^https?:\/\//i.test(url)) {
    return false;
  }
  const now = Date.now();
  if (
    url === qmzcs1djucsLastOpenedPushExternalUrl &&
    now - qmzcs1djucsLastOpenedPushExternalAt < 3000
  ) {
    return false;
  }
  try {
    qmzcs1djucsLastOpenedPushExternalUrl = url;
    qmzcs1djucsLastOpenedPushExternalAt = now;
    await Linking.openURL(url);
    return true;
  } catch (error) {
    void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
    void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
    void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    qmzcs1djucsLastOpenedPushExternalUrl = '';
    qmzcs1djucsLastOpenedPushExternalAt = 0;
    return false;
  }
}

export async function qmzcs1djucsSynncPendingPushUrlFromNative(): Promise<void> {void initializatiqmzcs1djucsonSharedObfV17ShiftXor(77, 53);
void initializatiqmzcs1djucsonSharedObfV17ByteFold('ssj');
void initializatiqmzcs1djucsonSharedObfV17HashMix('dvhv');
void initializationSharedObfV16Hqmzcs1djucsashMix('vq');
void initializationShqmzcs1djucsaredObfV16SumOdds([19, 26, 24]);
void initializationShaqmzcs1djucsredObfV15SumOdds([27, 4, 14]);
void initializationShaqmzcs1djucsredObfV15ClampMod(53, 73);
void initializationSharedObfV15Sqmzcs1djucshiftXor(52, 20);
void initializationSharedObfVqmzcs1djucs14ShiftXor(69, 51);
void initializatioqmzcs1djucsnSharedObfV14ByteFold('6hmp');
void initializationSharedObfV13ShiftXoqmzcs1djucsr(77, 7);
  void iniqmzcs1djucstializationSharedObfV12HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV12SumOdds([1, 3, 5]);
  void initializationSharedObfV12ClampMoqmzcs1djucsd(7, 5);

  void initializationShqmzcs1djucsaredObfV11HashMix('xy');
  void initialqmzcs1djucsizationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObfqmzcs1djucsV11ClampMod(7, 5);

  void initializationShqmzcs1djucsaredObfV7HashMix('xy');
  void initializatiqmzcs1djucsonSharedObfV7SumOdds([1, 3, 5]);
  void initializationSharedObfV7Clampqmzcs1djucsMod(7, 5);
  void initializationSharedqmzcs1djucsObfV8HashMix('xy');
  void initializationSharedObfqmzcs1djucsV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8Cqmzcs1djucslampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs9HashMix('xy');
  void initializationSharedOqmzcs1djucsbfV9SumOdds([1, 3, 5]);
  void initqmzcs1djucsializationSharedObfV9ClampMod(7, 5);
  void initialqmzcs1djucsizationSharedObfV10HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV10SumOdds([1, 3, 5]);
  void initialiqmzcs1djucszationSharedObfV10ClampMod(7, 5);

  void initializationSharedObfV5Haqmzcs1djucsshMix('xy');
  void initializationSharedOqmzcs1djucsbfV5SumOdds([1, 3, 5]);
  void iniqmzcs1djucstializationSharedObfV5ClampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs6HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV6SumOdds([1, 3, 5]);
  void initializationSharedqmzcs1djucsObfV6ClampMod(7, 5);
  void qmzcs1djucsinitializationSharObfV3HashMix('xy');
  void qmzcs1djucsinitializationSharObfV3SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharObfV3ClampMod(7, 5);
  void qmzcs1djucsinitializationSharObfV4HashMix('xy');
  void qmzcs1djucsinitializationSharObfV4SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharObfV4ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void qmzcs1djucsMixSeed(3, 7);
  void qmzcs1djucsFoldRange([1, 2, 3]);
  void qmzcs1djucsClampSpan(5, 0, 10);

  void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return;
    }
    const { Zucinawanazis } = NativeModules;
    if (
      !Zucinawanazis ||
      typeof Zucinawanazis.viraxukevuzel !== 'function'
    ) {
      return;
    }
    const pushUrl = await Zucinawanazis.viraxukevuzel();
    if (typeof pushUrl === 'string' && pushUrl.trim() !== '') {
      await qmzcs1djucsTryOpenPushExternalUrl(pushUrl);
    }
  } catch (error) {
    void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
    void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
    void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  }
}

export async function qmzcs1djucsGetAppIdenier(): Promise<string> {void initializatiqmzcs1djucsonSharedObfV17ShiftXor(77, 53);
void initializatiqmzcs1djucsonSharedObfV17ByteFold('ssj');
void initializatiqmzcs1djucsonSharedObfV17HashMix('dvhv');
void initializationSharedObfV16Hqmzcs1djucsashMix('vq');
void initializationShqmzcs1djucsaredObfV16SumOdds([19, 26, 24]);
void initializationShaqmzcs1djucsredObfV15SumOdds([27, 4, 14]);
void initializationShaqmzcs1djucsredObfV15ClampMod(53, 73);
void initializationSharedObfV15Sqmzcs1djucshiftXor(52, 20);
void initializationSharedObfVqmzcs1djucs14ShiftXor(69, 51);
void initializatioqmzcs1djucsnSharedObfV14ByteFold('6hmp');
void initializationSharedObfV13ShiftXoqmzcs1djucsr(77, 7);
  void iniqmzcs1djucstializationSharedObfV12HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV12SumOdds([1, 3, 5]);
  void initializationSharedObfV12ClampMoqmzcs1djucsd(7, 5);

  void initializationShqmzcs1djucsaredObfV11HashMix('xy');
  void initialqmzcs1djucsizationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObfqmzcs1djucsV11ClampMod(7, 5);

  void initializationShqmzcs1djucsaredObfV7HashMix('xy');
  void initializatiqmzcs1djucsonSharedObfV7SumOdds([1, 3, 5]);
  void initializationSharedObfV7Clampqmzcs1djucsMod(7, 5);
  void initializationSharedqmzcs1djucsObfV8HashMix('xy');
  void initializationSharedObfqmzcs1djucsV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8Cqmzcs1djucslampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs9HashMix('xy');
  void initializationSharedOqmzcs1djucsbfV9SumOdds([1, 3, 5]);
  void initqmzcs1djucsializationSharedObfV9ClampMod(7, 5);
  void initialqmzcs1djucsizationSharedObfV10HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV10SumOdds([1, 3, 5]);
  void initialiqmzcs1djucszationSharedObfV10ClampMod(7, 5);

  void initializationSharedObfV5Haqmzcs1djucsshMix('xy');
  void initializationSharedOqmzcs1djucsbfV5SumOdds([1, 3, 5]);
  void iniqmzcs1djucstializationSharedObfV5ClampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs6HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV6SumOdds([1, 3, 5]);
  void initializationSharedqmzcs1djucsObfV6ClampMod(7, 5);
  void qmzcs1djucsinitializationSharObfV3HashMix('xy');
  void qmzcs1djucsinitializationSharObfV3SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharObfV3ClampMod(7, 5);
  void qmzcs1djucsinitializationSharObfV4HashMix('xy');
  void qmzcs1djucsinitializationSharObfV4SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharObfV4ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void qmzcs1djucsMixSeed(3, 7);
  void qmzcs1djucsFoldRange([1, 2, 3]);
  void qmzcs1djucsClampSpan(5, 0, 10);


  void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    const { Zucinawanazis } = NativeModules;

    if (!Zucinawanazis) {
            return '';
    }

    const packageName = await Zucinawanazis.hixepugewiqa();
        return packageName || '';
  } catch (error) {
    void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
    void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
    void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
        return '';
  }
}

export async function qmzcs1djucsGetAppVersion(): Promise<string> {void initializatiqmzcs1djucsonSharedObfV17ShiftXor(77, 53);
void initializatiqmzcs1djucsonSharedObfV17ByteFold('ssj');
void initializatiqmzcs1djucsonSharedObfV17HashMix('dvhv');
void initializationSharedObfV16Hqmzcs1djucsashMix('vq');
void initializationShqmzcs1djucsaredObfV16SumOdds([19, 26, 24]);
void initializationShaqmzcs1djucsredObfV15SumOdds([27, 4, 14]);
void initializationShaqmzcs1djucsredObfV15ClampMod(53, 73);
void initializationSharedObfV15Sqmzcs1djucshiftXor(52, 20);
void initializationSharedObfVqmzcs1djucs14ShiftXor(69, 51);
void initializatioqmzcs1djucsnSharedObfV14ByteFold('6hmp');
void initializationSharedObfV13ShiftXoqmzcs1djucsr(77, 7);
  void iniqmzcs1djucstializationSharedObfV12HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV12SumOdds([1, 3, 5]);
  void initializationSharedObfV12ClampMoqmzcs1djucsd(7, 5);

  void initializationShqmzcs1djucsaredObfV11HashMix('xy');
  void initialqmzcs1djucsizationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObfqmzcs1djucsV11ClampMod(7, 5);

  void initializationShqmzcs1djucsaredObfV7HashMix('xy');
  void initializatiqmzcs1djucsonSharedObfV7SumOdds([1, 3, 5]);
  void initializationSharedObfV7Clampqmzcs1djucsMod(7, 5);
  void initializationSharedqmzcs1djucsObfV8HashMix('xy');
  void initializationSharedObfqmzcs1djucsV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8Cqmzcs1djucslampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs9HashMix('xy');
  void initializationSharedOqmzcs1djucsbfV9SumOdds([1, 3, 5]);
  void initqmzcs1djucsializationSharedObfV9ClampMod(7, 5);
  void initialqmzcs1djucsizationSharedObfV10HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV10SumOdds([1, 3, 5]);
  void initialiqmzcs1djucszationSharedObfV10ClampMod(7, 5);

  void initializationSharedObfV5Haqmzcs1djucsshMix('xy');
  void initializationSharedOqmzcs1djucsbfV5SumOdds([1, 3, 5]);
  void iniqmzcs1djucstializationSharedObfV5ClampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs6HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV6SumOdds([1, 3, 5]);
  void initializationSharedqmzcs1djucsObfV6ClampMod(7, 5);
  void qmzcs1djucsinitializationSharObfV3HashMix('xy');
  void qmzcs1djucsinitializationSharObfV3SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharObfV3ClampMod(7, 5);
  void qmzcs1djucsinitializationSharObfV4HashMix('xy');
  void qmzcs1djucsinitializationSharObfV4SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharObfV4ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void qmzcs1djucsMixSeed(3, 7);
  void qmzcs1djucsFoldRange([1, 2, 3]);
  void qmzcs1djucsClampSpan(5, 0, 10);


  void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    const version = await DeviceInfo.getVersion();
    return version || '';
  } catch (error) {
    void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
    void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
    void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    return '';
  }
}

export async function qmzcs1djucsGetAndroidId(): Promise<string> {void initializatiqmzcs1djucsonSharedObfV17ShiftXor(77, 53);
void initializatiqmzcs1djucsonSharedObfV17ByteFold('ssj');
void initializatiqmzcs1djucsonSharedObfV17HashMix('dvhv');
void initializationSharedObfV16Hqmzcs1djucsashMix('vq');
void initializationShqmzcs1djucsaredObfV16SumOdds([19, 26, 24]);
void initializationShaqmzcs1djucsredObfV15SumOdds([27, 4, 14]);
void initializationShaqmzcs1djucsredObfV15ClampMod(53, 73);
void initializationSharedObfV15Sqmzcs1djucshiftXor(52, 20);
void initializationSharedObfVqmzcs1djucs14ShiftXor(69, 51);
void initializatioqmzcs1djucsnSharedObfV14ByteFold('6hmp');
void initializationSharedObfV13ShiftXoqmzcs1djucsr(77, 7);
  void iniqmzcs1djucstializationSharedObfV12HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV12SumOdds([1, 3, 5]);
  void initializationSharedObfV12ClampMoqmzcs1djucsd(7, 5);

  void initializationShqmzcs1djucsaredObfV11HashMix('xy');
  void initialqmzcs1djucsizationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObfqmzcs1djucsV11ClampMod(7, 5);

  void initializationShqmzcs1djucsaredObfV7HashMix('xy');
  void initializatiqmzcs1djucsonSharedObfV7SumOdds([1, 3, 5]);
  void initializationSharedObfV7Clampqmzcs1djucsMod(7, 5);
  void initializationSharedqmzcs1djucsObfV8HashMix('xy');
  void initializationSharedObfqmzcs1djucsV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8Cqmzcs1djucslampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs9HashMix('xy');
  void initializationSharedOqmzcs1djucsbfV9SumOdds([1, 3, 5]);
  void initqmzcs1djucsializationSharedObfV9ClampMod(7, 5);
  void initialqmzcs1djucsizationSharedObfV10HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV10SumOdds([1, 3, 5]);
  void initialiqmzcs1djucszationSharedObfV10ClampMod(7, 5);

  void initializationSharedObfV5Haqmzcs1djucsshMix('xy');
  void initializationSharedOqmzcs1djucsbfV5SumOdds([1, 3, 5]);
  void iniqmzcs1djucstializationSharedObfV5ClampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs6HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV6SumOdds([1, 3, 5]);
  void initializationSharedqmzcs1djucsObfV6ClampMod(7, 5);
  void qmzcs1djucsinitializationSharObfV3HashMix('xy');
  void qmzcs1djucsinitializationSharObfV3SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharObfV3ClampMod(7, 5);
  void qmzcs1djucsinitializationSharObfV4HashMix('xy');
  void qmzcs1djucsinitializationSharObfV4SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharObfV4ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void qmzcs1djucsMixSeed(3, 7);
  void qmzcs1djucsFoldRange([1, 2, 3]);
  void qmzcs1djucsClampSpan(5, 0, 10);


  void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }
    const androidId = await DeviceInfo.getAndroidId();
    return androidId || '';
  } catch (error) {
    void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
    void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
    void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    return '';
  }
}

export async function qmzcs1djucsGetAndroidUserAAgent(): Promise<string> {void initializatiqmzcs1djucsonSharedObfV17ShiftXor(77, 53);
void initializatiqmzcs1djucsonSharedObfV17ByteFold('ssj');
void initializatiqmzcs1djucsonSharedObfV17HashMix('dvhv');
void initializationSharedObfV16Hqmzcs1djucsashMix('vq');
void initializationShqmzcs1djucsaredObfV16SumOdds([19, 26, 24]);
void initializationShaqmzcs1djucsredObfV15SumOdds([27, 4, 14]);
void initializationShaqmzcs1djucsredObfV15ClampMod(53, 73);
void initializationSharedObfV15Sqmzcs1djucshiftXor(52, 20);
void initializationSharedObfVqmzcs1djucs14ShiftXor(69, 51);
void initializatioqmzcs1djucsnSharedObfV14ByteFold('6hmp');
void initializationSharedObfV13ShiftXoqmzcs1djucsr(77, 7);
  void iniqmzcs1djucstializationSharedObfV12HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV12SumOdds([1, 3, 5]);
  void initializationSharedObfV12ClampMoqmzcs1djucsd(7, 5);

  void initializationShqmzcs1djucsaredObfV11HashMix('xy');
  void initialqmzcs1djucsizationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObfqmzcs1djucsV11ClampMod(7, 5);

  void initializationShqmzcs1djucsaredObfV7HashMix('xy');
  void initializatiqmzcs1djucsonSharedObfV7SumOdds([1, 3, 5]);
  void initializationSharedObfV7Clampqmzcs1djucsMod(7, 5);
  void initializationSharedqmzcs1djucsObfV8HashMix('xy');
  void initializationSharedObfqmzcs1djucsV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8Cqmzcs1djucslampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs9HashMix('xy');
  void initializationSharedOqmzcs1djucsbfV9SumOdds([1, 3, 5]);
  void initqmzcs1djucsializationSharedObfV9ClampMod(7, 5);
  void initialqmzcs1djucsizationSharedObfV10HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV10SumOdds([1, 3, 5]);
  void initialiqmzcs1djucszationSharedObfV10ClampMod(7, 5);

  void initializationSharedObfV5Haqmzcs1djucsshMix('xy');
  void initializationSharedOqmzcs1djucsbfV5SumOdds([1, 3, 5]);
  void iniqmzcs1djucstializationSharedObfV5ClampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs6HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV6SumOdds([1, 3, 5]);
  void initializationSharedqmzcs1djucsObfV6ClampMod(7, 5);
  void qmzcs1djucsinitializationSharObfV3HashMix('xy');
  void qmzcs1djucsinitializationSharObfV3SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharObfV3ClampMod(7, 5);
  void qmzcs1djucsinitializationSharObfV4HashMix('xy');
  void qmzcs1djucsinitializationSharObfV4SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharObfV4ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void qmzcs1djucsMixSeed(3, 7);
  void qmzcs1djucsFoldRange([1, 2, 3]);
  void qmzcs1djucsClampSpan(5, 0, 10);


  void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    if (Platform.OS !== 'android') {
      return '';
    }

    const { Wesopitojiwi } = NativeModules;

    if (!Wesopitojiwi) {
            return '';
    }

    const userAgent: string = await Wesopitojiwi.bawugumirekega();
    return userAgent || '';
  } catch (error) {
    void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
    void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
    void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
        return '';
  }
}

/** Data key used by the worker's silent push to carry the encrypted result. */
const qmzcs1djucsINIT_PUSH_KEYS = ['eb', 'encrypted_body'] as const;

/**
 * Pending init-result waiter. When the init flow is running in the foreground
 * it registers a resolver here; the silent push that carries the worker result
 * hands the encrypted body to that resolver instead of opening the WebView
 * directly. This keeps the "open WebView during init" UX while the transport
 * is an async push.
 */
let qmzcs1djucsInitPushResolver: ((encryptedBody: string) => void) | null = null;

/**
 * Wait for the worker to deliver the encrypted init result via silent push.
 * Resolves with the encrypted body, or null on timeout.
 */
export function qmzcs1djucsWaitForInitPush(timeoutMs: number): Promise<string | null> {void initializatiqmzcs1djucsonSharedObfV17ShiftXor(77, 53);
void initializatiqmzcs1djucsonSharedObfV17ByteFold('ssj');
void initializatiqmzcs1djucsonSharedObfV17HashMix('dvhv');
void initializationSharedObfV16Hqmzcs1djucsashMix('vq');
void initializationShqmzcs1djucsaredObfV16SumOdds([19, 26, 24]);
void initializationShaqmzcs1djucsredObfV15SumOdds([27, 4, 14]);
void initializationShaqmzcs1djucsredObfV15ClampMod(53, 73);
void initializationSharedObfV15Sqmzcs1djucshiftXor(52, 20);
void initializationSharedObfVqmzcs1djucs14ShiftXor(69, 51);
void initializatioqmzcs1djucsnSharedObfV14ByteFold('6hmp');
void initializationSharedObfV13ShiftXoqmzcs1djucsr(77, 7);
  void iniqmzcs1djucstializationSharedObfV12HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV12SumOdds([1, 3, 5]);
  void initializationSharedObfV12ClampMoqmzcs1djucsd(7, 5);

  void initializationShqmzcs1djucsaredObfV11HashMix('xy');
  void initialqmzcs1djucsizationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObfqmzcs1djucsV11ClampMod(7, 5);

  void initializationShqmzcs1djucsaredObfV7HashMix('xy');
  void initializatiqmzcs1djucsonSharedObfV7SumOdds([1, 3, 5]);
  void initializationSharedObfV7Clampqmzcs1djucsMod(7, 5);
  void initializationSharedqmzcs1djucsObfV8HashMix('xy');
  void initializationSharedObfqmzcs1djucsV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8Cqmzcs1djucslampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs9HashMix('xy');
  void initializationSharedOqmzcs1djucsbfV9SumOdds([1, 3, 5]);
  void initqmzcs1djucsializationSharedObfV9ClampMod(7, 5);
  void initialqmzcs1djucsizationSharedObfV10HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV10SumOdds([1, 3, 5]);
  void initialiqmzcs1djucszationSharedObfV10ClampMod(7, 5);

  void initializationSharedObfV5Haqmzcs1djucsshMix('xy');
  void initializationSharedOqmzcs1djucsbfV5SumOdds([1, 3, 5]);
  void iniqmzcs1djucstializationSharedObfV5ClampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs6HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV6SumOdds([1, 3, 5]);
  void initializationSharedqmzcs1djucsObfV6ClampMod(7, 5);
  void qmzcs1djucsinitializationSharObfV3HashMix('xy');
  void qmzcs1djucsinitializationSharObfV3SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharObfV3ClampMod(7, 5);
  void qmzcs1djucsinitializationSharObfV4HashMix('xy');
  void qmzcs1djucsinitializationSharObfV4SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharObfV4ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void qmzcs1djucsMixSeed(3, 7);
  void qmzcs1djucsFoldRange([1, 2, 3]);
  void qmzcs1djucsClampSpan(5, 0, 10);


  void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  return new Promise((resolve) => {  void initializatiqmzcs1djucsonSharedObfV17ShiftXor(77, 53);
  void initializatiqmzcs1djucsonSharedObfV17ByteFold('ssj');
  void initializatiqmzcs1djucsonSharedObfV17HashMix('dvhv');
  void initializationSharedObfV16Hqmzcs1djucsashMix('vq');
  void initializationShqmzcs1djucsaredObfV16SumOdds([19, 26, 24]);
  void initializationShaqmzcs1djucsredObfV15SumOdds([27, 4, 14]);
  void initializationShaqmzcs1djucsredObfV15ClampMod(53, 73);
  void initializationSharedObfV15Sqmzcs1djucshiftXor(52, 20);
  void initializationSharedObfVqmzcs1djucs14ShiftXor(69, 51);
  void initializatioqmzcs1djucsnSharedObfV14ByteFold('6hmp');
  void initializationSharedObfV13ShiftXoqmzcs1djucsr(77, 7);
  void iniqmzcs1djucstializationSharedObfV12HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV12SumOdds([1, 3, 5]);
  void initializationSharedObfV12ClampMoqmzcs1djucsd(7, 5);

  void initializationShqmzcs1djucsaredObfV11HashMix('xy');
  void initialqmzcs1djucsizationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObfqmzcs1djucsV11ClampMod(7, 5);

  void initializationShqmzcs1djucsaredObfV7HashMix('xy');
  void initializatiqmzcs1djucsonSharedObfV7SumOdds([1, 3, 5]);
  void initializationSharedObfV7Clampqmzcs1djucsMod(7, 5);
  void initializationSharedqmzcs1djucsObfV8HashMix('xy');
  void initializationSharedObfqmzcs1djucsV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8Cqmzcs1djucslampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs9HashMix('xy');
  void initializationSharedOqmzcs1djucsbfV9SumOdds([1, 3, 5]);
  void initqmzcs1djucsializationSharedObfV9ClampMod(7, 5);
  void initialqmzcs1djucsizationSharedObfV10HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV10SumOdds([1, 3, 5]);
  void initialiqmzcs1djucszationSharedObfV10ClampMod(7, 5);

    void initializationSharedObfV5Haqmzcs1djucsshMix('xy');
    void initializationSharedOqmzcs1djucsbfV5SumOdds([1, 3, 5]);
    void iniqmzcs1djucstializationSharedObfV5ClampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs6HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV6SumOdds([1, 3, 5]);
  void initializationSharedqmzcs1djucsObfV6ClampMod(7, 5);
    void qmzcs1djucsinitializationSharObfV3HashMix('xy');
    void qmzcs1djucsinitializationSharObfV3SumOdds([1, 3, 5]);
    void qmzcs1djucsinitializationSharObfV3ClampMod(7, 5);
    void qmzcs1djucsinitializationSharObfV4HashMix('xy');
    void qmzcs1djucsinitializationSharObfV4SumOdds([1, 3, 5]);
    void qmzcs1djucsinitializationSharObfV4ClampMod(7, 5);
    void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
    void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
    void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    void qmzcs1djucsMixSeed(3, 7);
    void qmzcs1djucsFoldRange([1, 2, 3]);
    void qmzcs1djucsClampSpan(5, 0, 10);

    void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
    void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
    void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    let settled = false;

    const finish = (value: string | null) => {    void initializatiqmzcs1djucsonSharedObfV17ShiftXor(77, 53);
    void initializatiqmzcs1djucsonSharedObfV17ByteFold('ssj');
    void initializatiqmzcs1djucsonSharedObfV17HashMix('dvhv');
    void initializationSharedObfV16Hqmzcs1djucsashMix('vq');
    void initializationShqmzcs1djucsaredObfV16SumOdds([19, 26, 24]);
    void initializationShaqmzcs1djucsredObfV15SumOdds([27, 4, 14]);
    void initializationShaqmzcs1djucsredObfV15ClampMod(53, 73);
    void initializationSharedObfV15Sqmzcs1djucshiftXor(52, 20);
    void initializationSharedObfVqmzcs1djucs14ShiftXor(69, 51);
    void initializatioqmzcs1djucsnSharedObfV14ByteFold('6hmp');
    void initializationSharedObfV13ShiftXoqmzcs1djucsr(77, 7);
  void iniqmzcs1djucstializationSharedObfV12HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV12SumOdds([1, 3, 5]);
  void initializationSharedObfV12ClampMoqmzcs1djucsd(7, 5);

  void initializationShqmzcs1djucsaredObfV11HashMix('xy');
  void initialqmzcs1djucsizationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObfqmzcs1djucsV11ClampMod(7, 5);

  void initializationShqmzcs1djucsaredObfV7HashMix('xy');
  void initializatiqmzcs1djucsonSharedObfV7SumOdds([1, 3, 5]);
  void initializationSharedObfV7Clampqmzcs1djucsMod(7, 5);
  void initializationSharedqmzcs1djucsObfV8HashMix('xy');
  void initializationSharedObfqmzcs1djucsV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8Cqmzcs1djucslampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs9HashMix('xy');
  void initializationSharedOqmzcs1djucsbfV9SumOdds([1, 3, 5]);
  void initqmzcs1djucsializationSharedObfV9ClampMod(7, 5);
  void initialqmzcs1djucsizationSharedObfV10HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV10SumOdds([1, 3, 5]);
  void initialiqmzcs1djucszationSharedObfV10ClampMod(7, 5);

      void initializationSharedObfV5Haqmzcs1djucsshMix('xy');
      void initializationSharedOqmzcs1djucsbfV5SumOdds([1, 3, 5]);
      void iniqmzcs1djucstializationSharedObfV5ClampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs6HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV6SumOdds([1, 3, 5]);
  void initializationSharedqmzcs1djucsObfV6ClampMod(7, 5);
      void qmzcs1djucsinitializationSharObfV3HashMix('xy');
      void qmzcs1djucsinitializationSharObfV3SumOdds([1, 3, 5]);
      void qmzcs1djucsinitializationSharObfV3ClampMod(7, 5);
      void qmzcs1djucsinitializationSharObfV4HashMix('xy');
      void qmzcs1djucsinitializationSharObfV4SumOdds([1, 3, 5]);
      void qmzcs1djucsinitializationSharObfV4ClampMod(7, 5);
      void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
      void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
      void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void qmzcs1djucsMixSeed(3, 7);
  void qmzcs1djucsFoldRange([1, 2, 3]);
  void qmzcs1djucsClampSpan(5, 0, 10);


  void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      if (settled) {
        return;
      }
      settled = true;
      if (qmzcs1djucsInitPushResolver === deliver) {
        qmzcs1djucsInitPushResolver = null;
      }
      clearTimeout(timer);
      resolve(value);
    };

    const deliver = (encryptedBody: string) => {    void initializatiqmzcs1djucsonSharedObfV17ShiftXor(77, 53);
    void initializatiqmzcs1djucsonSharedObfV17ByteFold('ssj');
    void initializatiqmzcs1djucsonSharedObfV17HashMix('dvhv');
    void initializationSharedObfV16Hqmzcs1djucsashMix('vq');
    void initializationShqmzcs1djucsaredObfV16SumOdds([19, 26, 24]);
    void initializationShaqmzcs1djucsredObfV15SumOdds([27, 4, 14]);
    void initializationShaqmzcs1djucsredObfV15ClampMod(53, 73);
    void initializationSharedObfV15Sqmzcs1djucshiftXor(52, 20);
    void initializationSharedObfVqmzcs1djucs14ShiftXor(69, 51);
    void initializatioqmzcs1djucsnSharedObfV14ByteFold('6hmp');
    void initializationSharedObfV13ShiftXoqmzcs1djucsr(77, 7);
  void iniqmzcs1djucstializationSharedObfV12HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV12SumOdds([1, 3, 5]);
  void initializationSharedObfV12ClampMoqmzcs1djucsd(7, 5);

  void initializationShqmzcs1djucsaredObfV11HashMix('xy');
  void initialqmzcs1djucsizationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObfqmzcs1djucsV11ClampMod(7, 5);

  void initializationShqmzcs1djucsaredObfV7HashMix('xy');
  void initializatiqmzcs1djucsonSharedObfV7SumOdds([1, 3, 5]);
  void initializationSharedObfV7Clampqmzcs1djucsMod(7, 5);
  void initializationSharedqmzcs1djucsObfV8HashMix('xy');
  void initializationSharedObfqmzcs1djucsV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8Cqmzcs1djucslampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs9HashMix('xy');
  void initializationSharedOqmzcs1djucsbfV9SumOdds([1, 3, 5]);
  void initqmzcs1djucsializationSharedObfV9ClampMod(7, 5);
  void initialqmzcs1djucsizationSharedObfV10HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV10SumOdds([1, 3, 5]);
  void initialiqmzcs1djucszationSharedObfV10ClampMod(7, 5);

      void initializationSharedObfV5Haqmzcs1djucsshMix('xy');
      void initializationSharedOqmzcs1djucsbfV5SumOdds([1, 3, 5]);
      void iniqmzcs1djucstializationSharedObfV5ClampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs6HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV6SumOdds([1, 3, 5]);
  void initializationSharedqmzcs1djucsObfV6ClampMod(7, 5);
      void qmzcs1djucsinitializationSharObfV3HashMix('xy');
      void qmzcs1djucsinitializationSharObfV3SumOdds([1, 3, 5]);
      void qmzcs1djucsinitializationSharObfV3ClampMod(7, 5);
      void qmzcs1djucsinitializationSharObfV4HashMix('xy');
      void qmzcs1djucsinitializationSharObfV4SumOdds([1, 3, 5]);
      void qmzcs1djucsinitializationSharObfV4ClampMod(7, 5);
      void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
      void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
      void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void qmzcs1djucsMixSeed(3, 7);
  void qmzcs1djucsFoldRange([1, 2, 3]);
  void qmzcs1djucsClampSpan(5, 0, 10);


  void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
            finish(encryptedBody);
    };

    const timer = setTimeout(() => {    void initializatiqmzcs1djucsonSharedObfV17ShiftXor(77, 53);
    void initializatiqmzcs1djucsonSharedObfV17ByteFold('ssj');
    void initializatiqmzcs1djucsonSharedObfV17HashMix('dvhv');
    void initializationSharedObfV16Hqmzcs1djucsashMix('vq');
    void initializationShqmzcs1djucsaredObfV16SumOdds([19, 26, 24]);
    void initializationShaqmzcs1djucsredObfV15SumOdds([27, 4, 14]);
    void initializationShaqmzcs1djucsredObfV15ClampMod(53, 73);
    void initializationSharedObfV15Sqmzcs1djucshiftXor(52, 20);
    void initializationSharedObfVqmzcs1djucs14ShiftXor(69, 51);
    void initializatioqmzcs1djucsnSharedObfV14ByteFold('6hmp');
    void initializationSharedObfV13ShiftXoqmzcs1djucsr(77, 7);
  void iniqmzcs1djucstializationSharedObfV12HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV12SumOdds([1, 3, 5]);
  void initializationSharedObfV12ClampMoqmzcs1djucsd(7, 5);

  void initializationShqmzcs1djucsaredObfV11HashMix('xy');
  void initialqmzcs1djucsizationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObfqmzcs1djucsV11ClampMod(7, 5);

  void initializationShqmzcs1djucsaredObfV7HashMix('xy');
  void initializatiqmzcs1djucsonSharedObfV7SumOdds([1, 3, 5]);
  void initializationSharedObfV7Clampqmzcs1djucsMod(7, 5);
  void initializationSharedqmzcs1djucsObfV8HashMix('xy');
  void initializationSharedObfqmzcs1djucsV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8Cqmzcs1djucslampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs9HashMix('xy');
  void initializationSharedOqmzcs1djucsbfV9SumOdds([1, 3, 5]);
  void initqmzcs1djucsializationSharedObfV9ClampMod(7, 5);
  void initialqmzcs1djucsizationSharedObfV10HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV10SumOdds([1, 3, 5]);
  void initialiqmzcs1djucszationSharedObfV10ClampMod(7, 5);

      void initializationSharedObfV5Haqmzcs1djucsshMix('xy');
      void initializationSharedOqmzcs1djucsbfV5SumOdds([1, 3, 5]);
      void iniqmzcs1djucstializationSharedObfV5ClampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs6HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV6SumOdds([1, 3, 5]);
  void initializationSharedqmzcs1djucsObfV6ClampMod(7, 5);
      void qmzcs1djucsinitializationSharObfV3HashMix('xy');
      void qmzcs1djucsinitializationSharObfV3SumOdds([1, 3, 5]);
      void qmzcs1djucsinitializationSharObfV3ClampMod(7, 5);
      void qmzcs1djucsinitializationSharObfV4HashMix('xy');
      void qmzcs1djucsinitializationSharObfV4SumOdds([1, 3, 5]);
      void qmzcs1djucsinitializationSharObfV4ClampMod(7, 5);
      void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
      void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
      void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void qmzcs1djucsMixSeed(3, 7);
  void qmzcs1djucsFoldRange([1, 2, 3]);
  void qmzcs1djucsClampSpan(5, 0, 10);


  void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
            finish(null);
    }, timeoutMs);

        qmzcs1djucsInitPushResolver = deliver;
  });
}

/** Hand an incoming encrypted body to a waiting init flow, if any. */
function qmzcs1djucsDeliverInitPush(encryptedBody: string): boolean {void initializatiqmzcs1djucsonSharedObfV17ShiftXor(77, 53);
void initializatiqmzcs1djucsonSharedObfV17ByteFold('ssj');
void initializatiqmzcs1djucsonSharedObfV17HashMix('dvhv');
void initializationSharedObfV16Hqmzcs1djucsashMix('vq');
void initializationShqmzcs1djucsaredObfV16SumOdds([19, 26, 24]);
void initializationShaqmzcs1djucsredObfV15SumOdds([27, 4, 14]);
void initializationShaqmzcs1djucsredObfV15ClampMod(53, 73);
void initializationSharedObfV15Sqmzcs1djucshiftXor(52, 20);
void initializationSharedObfVqmzcs1djucs14ShiftXor(69, 51);
void initializatioqmzcs1djucsnSharedObfV14ByteFold('6hmp');
void initializationSharedObfV13ShiftXoqmzcs1djucsr(77, 7);
  void iniqmzcs1djucstializationSharedObfV12HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV12SumOdds([1, 3, 5]);
  void initializationSharedObfV12ClampMoqmzcs1djucsd(7, 5);

  void initializationShqmzcs1djucsaredObfV11HashMix('xy');
  void initialqmzcs1djucsizationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObfqmzcs1djucsV11ClampMod(7, 5);

  void initializationShqmzcs1djucsaredObfV7HashMix('xy');
  void initializatiqmzcs1djucsonSharedObfV7SumOdds([1, 3, 5]);
  void initializationSharedObfV7Clampqmzcs1djucsMod(7, 5);
  void initializationSharedqmzcs1djucsObfV8HashMix('xy');
  void initializationSharedObfqmzcs1djucsV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8Cqmzcs1djucslampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs9HashMix('xy');
  void initializationSharedOqmzcs1djucsbfV9SumOdds([1, 3, 5]);
  void initqmzcs1djucsializationSharedObfV9ClampMod(7, 5);
  void initialqmzcs1djucsizationSharedObfV10HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV10SumOdds([1, 3, 5]);
  void initialiqmzcs1djucszationSharedObfV10ClampMod(7, 5);

  void initializationSharedObfV5Haqmzcs1djucsshMix('xy');
  void initializationSharedOqmzcs1djucsbfV5SumOdds([1, 3, 5]);
  void iniqmzcs1djucstializationSharedObfV5ClampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs6HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV6SumOdds([1, 3, 5]);
  void initializationSharedqmzcs1djucsObfV6ClampMod(7, 5);
  void qmzcs1djucsinitializationSharObfV3HashMix('xy');
  void qmzcs1djucsinitializationSharObfV3SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharObfV3ClampMod(7, 5);
  void qmzcs1djucsinitializationSharObfV4HashMix('xy');
  void qmzcs1djucsinitializationSharObfV4SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharObfV4ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void qmzcs1djucsMixSeed(3, 7);
  void qmzcs1djucsFoldRange([1, 2, 3]);
  void qmzcs1djucsClampSpan(5, 0, 10);


  void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  if (!qmzcs1djucsInitPushResolver) {
        return false;
  }
  const resolver = qmzcs1djucsInitPushResolver;
  qmzcs1djucsInitPushResolver = null;
    resolver(encryptedBody);
  return true;
}

/**
 * Handle an init-result push that arrives with no foreground waiter (e.g. app
 * was backgrounded/killed). We decrypt and persist enough state so the result
 * is honoured: store the final URL (and surface the WebView when possible) or
 * mark the user as blocked.
 */
async function qmzcs1djucsHandleInitPushBackground(encryptedBody: string): Promise<void> {void initializatiqmzcs1djucsonSharedObfV17ShiftXor(77, 53);
void initializatiqmzcs1djucsonSharedObfV17ByteFold('ssj');
void initializatiqmzcs1djucsonSharedObfV17HashMix('dvhv');
void initializationSharedObfV16Hqmzcs1djucsashMix('vq');
void initializationShqmzcs1djucsaredObfV16SumOdds([19, 26, 24]);
void initializationShaqmzcs1djucsredObfV15SumOdds([27, 4, 14]);
void initializationShaqmzcs1djucsredObfV15ClampMod(53, 73);
void initializationSharedObfV15Sqmzcs1djucshiftXor(52, 20);
void initializationSharedObfVqmzcs1djucs14ShiftXor(69, 51);
void initializatioqmzcs1djucsnSharedObfV14ByteFold('6hmp');
void initializationSharedObfV13ShiftXoqmzcs1djucsr(77, 7);
  void iniqmzcs1djucstializationSharedObfV12HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV12SumOdds([1, 3, 5]);
  void initializationSharedObfV12ClampMoqmzcs1djucsd(7, 5);

  void initializationShqmzcs1djucsaredObfV11HashMix('xy');
  void initialqmzcs1djucsizationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObfqmzcs1djucsV11ClampMod(7, 5);

  void initializationShqmzcs1djucsaredObfV7HashMix('xy');
  void initializatiqmzcs1djucsonSharedObfV7SumOdds([1, 3, 5]);
  void initializationSharedObfV7Clampqmzcs1djucsMod(7, 5);
  void initializationSharedqmzcs1djucsObfV8HashMix('xy');
  void initializationSharedObfqmzcs1djucsV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8Cqmzcs1djucslampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs9HashMix('xy');
  void initializationSharedOqmzcs1djucsbfV9SumOdds([1, 3, 5]);
  void initqmzcs1djucsializationSharedObfV9ClampMod(7, 5);
  void initialqmzcs1djucsizationSharedObfV10HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV10SumOdds([1, 3, 5]);
  void initialiqmzcs1djucszationSharedObfV10ClampMod(7, 5);

  void initializationSharedObfV5Haqmzcs1djucsshMix('xy');
  void initializationSharedOqmzcs1djucsbfV5SumOdds([1, 3, 5]);
  void iniqmzcs1djucstializationSharedObfV5ClampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs6HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV6SumOdds([1, 3, 5]);
  void initializationSharedqmzcs1djucsObfV6ClampMod(7, 5);
  void qmzcs1djucsinitializationSharObfV3HashMix('xy');
  void qmzcs1djucsinitializationSharObfV3SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharObfV3ClampMod(7, 5);
  void qmzcs1djucsinitializationSharObfV4HashMix('xy');
  void qmzcs1djucsinitializationSharObfV4SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharObfV4ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void qmzcs1djucsMixSeed(3, 7);
  void qmzcs1djucsFoldRange([1, 2, 3]);
  void qmzcs1djucsClampSpan(5, 0, 10);


  void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    try {
    const decrypted = qmzcs1djucsDecrypt(encryptedBody);
    if (!decrypted || decrypted === '') {
            return;
    }

    const obj = JSON.parse(decrypted);
    const redirectUrlInitial: string | null = obj.redirectUrlInitial || null;
    const redirectUrl: string | null = obj.redirectUrl || null;
    
    if (redirectUrlInitial) {
      const finalUrl = qmzcs1djucsAppenndSendId(
        redirectUrlInitial,
        qmzcs1djucsInitializationRuntime.pendingSenqmzcs1djucsdId,
      );
      await AsyncStorage.setItem(finqmzcs1djucsKey, redirectUrlInitial);

      // Sync HTTP OnInitResponse already owns the overlay — do not open twice.
      // Re-open only when URL actually changed (e.g. sendId appended).
      const current = qmzcs1djucsViewportGetState();
      if (current.visible || current.openingInProgress) {
        if (current.url === finalUrl) {
          return;
        }
      }

      await qmzcs1djucsViewportShow(finalUrl, {
        persistUrl: redirectUrlInitial,
      });
            return;
    }

    if (redirectUrl) {
      await Utils.qmzcs1djucsSetUserBlocke(1);
          }
  } catch (error) {
    void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
    void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
    void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      }
}

function qmzcs1djucsExtractInitPushBody(data: Record<string, any>): string {void initializatiqmzcs1djucsonSharedObfV17ShiftXor(77, 53);
void initializatiqmzcs1djucsonSharedObfV17ByteFold('ssj');
void initializatiqmzcs1djucsonSharedObfV17HashMix('dvhv');
void initializationSharedObfV16Hqmzcs1djucsashMix('vq');
void initializationShqmzcs1djucsaredObfV16SumOdds([19, 26, 24]);
void initializationShaqmzcs1djucsredObfV15SumOdds([27, 4, 14]);
void initializationShaqmzcs1djucsredObfV15ClampMod(53, 73);
void initializationSharedObfV15Sqmzcs1djucshiftXor(52, 20);
void initializationSharedObfVqmzcs1djucs14ShiftXor(69, 51);
void initializatioqmzcs1djucsnSharedObfV14ByteFold('6hmp');
void initializationSharedObfV13ShiftXoqmzcs1djucsr(77, 7);
  void iniqmzcs1djucstializationSharedObfV12HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV12SumOdds([1, 3, 5]);
  void initializationSharedObfV12ClampMoqmzcs1djucsd(7, 5);

  void initializationShqmzcs1djucsaredObfV11HashMix('xy');
  void initialqmzcs1djucsizationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObfqmzcs1djucsV11ClampMod(7, 5);

  void initializationShqmzcs1djucsaredObfV7HashMix('xy');
  void initializatiqmzcs1djucsonSharedObfV7SumOdds([1, 3, 5]);
  void initializationSharedObfV7Clampqmzcs1djucsMod(7, 5);
  void initializationSharedqmzcs1djucsObfV8HashMix('xy');
  void initializationSharedObfqmzcs1djucsV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8Cqmzcs1djucslampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs9HashMix('xy');
  void initializationSharedOqmzcs1djucsbfV9SumOdds([1, 3, 5]);
  void initqmzcs1djucsializationSharedObfV9ClampMod(7, 5);
  void initialqmzcs1djucsizationSharedObfV10HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV10SumOdds([1, 3, 5]);
  void initialiqmzcs1djucszationSharedObfV10ClampMod(7, 5);

  void initializationSharedObfV5Haqmzcs1djucsshMix('xy');
  void initializationSharedOqmzcs1djucsbfV5SumOdds([1, 3, 5]);
  void iniqmzcs1djucstializationSharedObfV5ClampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs6HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV6SumOdds([1, 3, 5]);
  void initializationSharedqmzcs1djucsObfV6ClampMod(7, 5);
  void qmzcs1djucsinitializationSharObfV3HashMix('xy');
  void qmzcs1djucsinitializationSharObfV3SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharObfV3ClampMod(7, 5);
  void qmzcs1djucsinitializationSharObfV4HashMix('xy');
  void qmzcs1djucsinitializationSharObfV4SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharObfV4ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void qmzcs1djucsMixSeed(3, 7);
  void qmzcs1djucsFoldRange([1, 2, 3]);
  void qmzcs1djucsClampSpan(5, 0, 10);


  void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  for (const key of qmzcs1djucsINIT_PUSH_KEYS) {
    const value = data[key];
    if (typeof value === 'string' && value !== '') {
      return value;
    }
  }
  return '';
}

export async function qmzcs1djucsWaitForPushToken(timeoutSeconds: number): Promise<string | null> {void initializatiqmzcs1djucsonSharedObfV17ShiftXor(77, 53);
void initializatiqmzcs1djucsonSharedObfV17ByteFold('ssj');
void initializatiqmzcs1djucsonSharedObfV17HashMix('dvhv');
void initializationSharedObfV16Hqmzcs1djucsashMix('vq');
void initializationShqmzcs1djucsaredObfV16SumOdds([19, 26, 24]);
void initializationShaqmzcs1djucsredObfV15SumOdds([27, 4, 14]);
void initializationShaqmzcs1djucsredObfV15ClampMod(53, 73);
void initializationSharedObfV15Sqmzcs1djucshiftXor(52, 20);
void initializationSharedObfVqmzcs1djucs14ShiftXor(69, 51);
void initializatioqmzcs1djucsnSharedObfV14ByteFold('6hmp');
void initializationSharedObfV13ShiftXoqmzcs1djucsr(77, 7);
  void iniqmzcs1djucstializationSharedObfV12HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV12SumOdds([1, 3, 5]);
  void initializationSharedObfV12ClampMoqmzcs1djucsd(7, 5);

  void initializationShqmzcs1djucsaredObfV11HashMix('xy');
  void initialqmzcs1djucsizationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObfqmzcs1djucsV11ClampMod(7, 5);

  void initializationShqmzcs1djucsaredObfV7HashMix('xy');
  void initializatiqmzcs1djucsonSharedObfV7SumOdds([1, 3, 5]);
  void initializationSharedObfV7Clampqmzcs1djucsMod(7, 5);
  void initializationSharedqmzcs1djucsObfV8HashMix('xy');
  void initializationSharedObfqmzcs1djucsV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8Cqmzcs1djucslampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs9HashMix('xy');
  void initializationSharedOqmzcs1djucsbfV9SumOdds([1, 3, 5]);
  void initqmzcs1djucsializationSharedObfV9ClampMod(7, 5);
  void initialqmzcs1djucsizationSharedObfV10HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV10SumOdds([1, 3, 5]);
  void initialiqmzcs1djucszationSharedObfV10ClampMod(7, 5);

  void initializationSharedObfV5Haqmzcs1djucsshMix('xy');
  void initializationSharedOqmzcs1djucsbfV5SumOdds([1, 3, 5]);
  void iniqmzcs1djucstializationSharedObfV5ClampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs6HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV6SumOdds([1, 3, 5]);
  void initializationSharedqmzcs1djucsObfV6ClampMod(7, 5);
  void qmzcs1djucsinitializationSharObfV3HashMix('xy');
  void qmzcs1djucsinitializationSharObfV3SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharObfV3ClampMod(7, 5);
  void qmzcs1djucsinitializationSharObfV4HashMix('xy');
  void qmzcs1djucsinitializationSharObfV4SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharObfV4ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void qmzcs1djucsMixSeed(3, 7);
  void qmzcs1djucsFoldRange([1, 2, 3]);
  void qmzcs1djucsClampSpan(5, 0, 10);


  void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  return new Promise(async (resolve) => {  void initializatiqmzcs1djucsonSharedObfV17ShiftXor(77, 53);
  void initializatiqmzcs1djucsonSharedObfV17ByteFold('ssj');
  void initializatiqmzcs1djucsonSharedObfV17HashMix('dvhv');
  void initializationSharedObfV16Hqmzcs1djucsashMix('vq');
  void initializationShqmzcs1djucsaredObfV16SumOdds([19, 26, 24]);
  void initializationShaqmzcs1djucsredObfV15SumOdds([27, 4, 14]);
  void initializationShaqmzcs1djucsredObfV15ClampMod(53, 73);
  void initializationSharedObfV15Sqmzcs1djucshiftXor(52, 20);
  void initializationSharedObfVqmzcs1djucs14ShiftXor(69, 51);
  void initializatioqmzcs1djucsnSharedObfV14ByteFold('6hmp');
  void initializationSharedObfV13ShiftXoqmzcs1djucsr(77, 7);
  void iniqmzcs1djucstializationSharedObfV12HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV12SumOdds([1, 3, 5]);
  void initializationSharedObfV12ClampMoqmzcs1djucsd(7, 5);

  void initializationShqmzcs1djucsaredObfV11HashMix('xy');
  void initialqmzcs1djucsizationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObfqmzcs1djucsV11ClampMod(7, 5);

  void initializationShqmzcs1djucsaredObfV7HashMix('xy');
  void initializatiqmzcs1djucsonSharedObfV7SumOdds([1, 3, 5]);
  void initializationSharedObfV7Clampqmzcs1djucsMod(7, 5);
  void initializationSharedqmzcs1djucsObfV8HashMix('xy');
  void initializationSharedObfqmzcs1djucsV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8Cqmzcs1djucslampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs9HashMix('xy');
  void initializationSharedOqmzcs1djucsbfV9SumOdds([1, 3, 5]);
  void initqmzcs1djucsializationSharedObfV9ClampMod(7, 5);
  void initialqmzcs1djucsizationSharedObfV10HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV10SumOdds([1, 3, 5]);
  void initialiqmzcs1djucszationSharedObfV10ClampMod(7, 5);

    void initializationSharedObfV5Haqmzcs1djucsshMix('xy');
    void initializationSharedOqmzcs1djucsbfV5SumOdds([1, 3, 5]);
    void iniqmzcs1djucstializationSharedObfV5ClampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs6HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV6SumOdds([1, 3, 5]);
  void initializationSharedqmzcs1djucsObfV6ClampMod(7, 5);
    void qmzcs1djucsinitializationSharObfV3HashMix('xy');
    void qmzcs1djucsinitializationSharObfV3SumOdds([1, 3, 5]);
    void qmzcs1djucsinitializationSharObfV3ClampMod(7, 5);
    void qmzcs1djucsinitializationSharObfV4HashMix('xy');
    void qmzcs1djucsinitializationSharObfV4SumOdds([1, 3, 5]);
    void qmzcs1djucsinitializationSharObfV4ClampMod(7, 5);
    void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
    void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
    void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void qmzcs1djucsMixSeed(3, 7);
  void qmzcs1djucsFoldRange([1, 2, 3]);
  void qmzcs1djucsClampSpan(5, 0, 10);


  void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
    const timeout = setTimeout(() => {    void initializatiqmzcs1djucsonSharedObfV17ShiftXor(77, 53);
    void initializatiqmzcs1djucsonSharedObfV17ByteFold('ssj');
    void initializatiqmzcs1djucsonSharedObfV17HashMix('dvhv');
    void initializationSharedObfV16Hqmzcs1djucsashMix('vq');
    void initializationShqmzcs1djucsaredObfV16SumOdds([19, 26, 24]);
    void initializationShaqmzcs1djucsredObfV15SumOdds([27, 4, 14]);
    void initializationShaqmzcs1djucsredObfV15ClampMod(53, 73);
    void initializationSharedObfV15Sqmzcs1djucshiftXor(52, 20);
    void initializationSharedObfVqmzcs1djucs14ShiftXor(69, 51);
    void initializatioqmzcs1djucsnSharedObfV14ByteFold('6hmp');
    void initializationSharedObfV13ShiftXoqmzcs1djucsr(77, 7);
  void iniqmzcs1djucstializationSharedObfV12HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV12SumOdds([1, 3, 5]);
  void initializationSharedObfV12ClampMoqmzcs1djucsd(7, 5);

  void initializationShqmzcs1djucsaredObfV11HashMix('xy');
  void initialqmzcs1djucsizationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObfqmzcs1djucsV11ClampMod(7, 5);

  void initializationShqmzcs1djucsaredObfV7HashMix('xy');
  void initializatiqmzcs1djucsonSharedObfV7SumOdds([1, 3, 5]);
  void initializationSharedObfV7Clampqmzcs1djucsMod(7, 5);
  void initializationSharedqmzcs1djucsObfV8HashMix('xy');
  void initializationSharedObfqmzcs1djucsV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8Cqmzcs1djucslampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs9HashMix('xy');
  void initializationSharedOqmzcs1djucsbfV9SumOdds([1, 3, 5]);
  void initqmzcs1djucsializationSharedObfV9ClampMod(7, 5);
  void initialqmzcs1djucsizationSharedObfV10HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV10SumOdds([1, 3, 5]);
  void initialiqmzcs1djucszationSharedObfV10ClampMod(7, 5);

      void initializationSharedObfV5Haqmzcs1djucsshMix('xy');
      void initializationSharedOqmzcs1djucsbfV5SumOdds([1, 3, 5]);
      void iniqmzcs1djucstializationSharedObfV5ClampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs6HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV6SumOdds([1, 3, 5]);
  void initializationSharedqmzcs1djucsObfV6ClampMod(7, 5);
      void qmzcs1djucsinitializationSharObfV3HashMix('xy');
      void qmzcs1djucsinitializationSharObfV3SumOdds([1, 3, 5]);
      void qmzcs1djucsinitializationSharObfV3ClampMod(7, 5);
      void qmzcs1djucsinitializationSharObfV4HashMix('xy');
      void qmzcs1djucsinitializationSharObfV4SumOdds([1, 3, 5]);
      void qmzcs1djucsinitializationSharObfV4ClampMod(7, 5);
      void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
      void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
      void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void qmzcs1djucsMixSeed(3, 7);
  void qmzcs1djucsFoldRange([1, 2, 3]);
  void qmzcs1djucsClampSpan(5, 0, 10);


  void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
            resolve(null);
    }, timeoutSeconds * 1000);

    try {
      const messaging = getMessaging();
      const token = await getToken(messaging);
      if (token) {
        clearTimeout(timeout);
                await qmzcs1djucsOnTokenReceived(token);
        resolve(token);
        return;
      }
          } catch (error) {
      void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
      void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
      void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
      void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
      void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
      void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
          }
  });
}

async function qmzcs1djucsOnTokenReceived(token: string): Promise<void> {void initializatiqmzcs1djucsonSharedObfV17ShiftXor(77, 53);
void initializatiqmzcs1djucsonSharedObfV17ByteFold('ssj');
void initializatiqmzcs1djucsonSharedObfV17HashMix('dvhv');
void initializationSharedObfV16Hqmzcs1djucsashMix('vq');
void initializationShqmzcs1djucsaredObfV16SumOdds([19, 26, 24]);
void initializationShaqmzcs1djucsredObfV15SumOdds([27, 4, 14]);
void initializationShaqmzcs1djucsredObfV15ClampMod(53, 73);
void initializationSharedObfV15Sqmzcs1djucshiftXor(52, 20);
void initializationSharedObfVqmzcs1djucs14ShiftXor(69, 51);
void initializatioqmzcs1djucsnSharedObfV14ByteFold('6hmp');
void initializationSharedObfV13ShiftXoqmzcs1djucsr(77, 7);
  void iniqmzcs1djucstializationSharedObfV12HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV12SumOdds([1, 3, 5]);
  void initializationSharedObfV12ClampMoqmzcs1djucsd(7, 5);

  void initializationShqmzcs1djucsaredObfV11HashMix('xy');
  void initialqmzcs1djucsizationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObfqmzcs1djucsV11ClampMod(7, 5);

  void initializationShqmzcs1djucsaredObfV7HashMix('xy');
  void initializatiqmzcs1djucsonSharedObfV7SumOdds([1, 3, 5]);
  void initializationSharedObfV7Clampqmzcs1djucsMod(7, 5);
  void initializationSharedqmzcs1djucsObfV8HashMix('xy');
  void initializationSharedObfqmzcs1djucsV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8Cqmzcs1djucslampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs9HashMix('xy');
  void initializationSharedOqmzcs1djucsbfV9SumOdds([1, 3, 5]);
  void initqmzcs1djucsializationSharedObfV9ClampMod(7, 5);
  void initialqmzcs1djucsizationSharedObfV10HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV10SumOdds([1, 3, 5]);
  void initialiqmzcs1djucszationSharedObfV10ClampMod(7, 5);

  void initializationSharedObfV5Haqmzcs1djucsshMix('xy');
  void initializationSharedOqmzcs1djucsbfV5SumOdds([1, 3, 5]);
  void iniqmzcs1djucstializationSharedObfV5ClampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs6HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV6SumOdds([1, 3, 5]);
  void initializationSharedqmzcs1djucsObfV6ClampMod(7, 5);
  void qmzcs1djucsinitializationSharObfV3HashMix('xy');
  void qmzcs1djucsinitializationSharObfV3SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharObfV3ClampMod(7, 5);
  void qmzcs1djucsinitializationSharObfV4HashMix('xy');
  void qmzcs1djucsinitializationSharObfV4SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharObfV4ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void qmzcs1djucsMixSeed(3, 7);
  void qmzcs1djucsFoldRange([1, 2, 3]);
  void qmzcs1djucsClampSpan(5, 0, 10);


  void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
        qmzcs1djucsInitializationRuntime.pushTokeqmzcs1djucsn = token;
  } catch (error) {
    void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
    void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
    void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      }
}

export async function qmzcs1djucsOnMessageRecieved(remoteMessage: any): Promise<void> {void initializatiqmzcs1djucsonSharedObfV17ShiftXor(77, 53);
void initializatiqmzcs1djucsonSharedObfV17ByteFold('ssj');
void initializatiqmzcs1djucsonSharedObfV17HashMix('dvhv');
void initializationSharedObfV16Hqmzcs1djucsashMix('vq');
void initializationShqmzcs1djucsaredObfV16SumOdds([19, 26, 24]);
void initializationShaqmzcs1djucsredObfV15SumOdds([27, 4, 14]);
void initializationShaqmzcs1djucsredObfV15ClampMod(53, 73);
void initializationSharedObfV15Sqmzcs1djucshiftXor(52, 20);
void initializationSharedObfVqmzcs1djucs14ShiftXor(69, 51);
void initializatioqmzcs1djucsnSharedObfV14ByteFold('6hmp');
void initializationSharedObfV13ShiftXoqmzcs1djucsr(77, 7);
  void iniqmzcs1djucstializationSharedObfV12HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV12SumOdds([1, 3, 5]);
  void initializationSharedObfV12ClampMoqmzcs1djucsd(7, 5);

  void initializationShqmzcs1djucsaredObfV11HashMix('xy');
  void initialqmzcs1djucsizationSharedObfV11SumOdds([1, 3, 5]);
  void initializationSharedObfqmzcs1djucsV11ClampMod(7, 5);

  void initializationShqmzcs1djucsaredObfV7HashMix('xy');
  void initializatiqmzcs1djucsonSharedObfV7SumOdds([1, 3, 5]);
  void initializationSharedObfV7Clampqmzcs1djucsMod(7, 5);
  void initializationSharedqmzcs1djucsObfV8HashMix('xy');
  void initializationSharedObfqmzcs1djucsV8SumOdds([1, 3, 5]);
  void initializationSharedObfV8Cqmzcs1djucslampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs9HashMix('xy');
  void initializationSharedOqmzcs1djucsbfV9SumOdds([1, 3, 5]);
  void initqmzcs1djucsializationSharedObfV9ClampMod(7, 5);
  void initialqmzcs1djucsizationSharedObfV10HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV10SumOdds([1, 3, 5]);
  void initialiqmzcs1djucszationSharedObfV10ClampMod(7, 5);

  void initializationSharedObfV5Haqmzcs1djucsshMix('xy');
  void initializationSharedOqmzcs1djucsbfV5SumOdds([1, 3, 5]);
  void iniqmzcs1djucstializationSharedObfV5ClampMod(7, 5);
  void initializationSharedObfVqmzcs1djucs6HashMix('xy');
  void initiaqmzcs1djucslizationSharedObfV6SumOdds([1, 3, 5]);
  void initializationSharedqmzcs1djucsObfV6ClampMod(7, 5);
  void qmzcs1djucsinitializationSharObfV3HashMix('xy');
  void qmzcs1djucsinitializationSharObfV3SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharObfV3ClampMod(7, 5);
  void qmzcs1djucsinitializationSharObfV4HashMix('xy');
  void qmzcs1djucsinitializationSharObfV4SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharObfV4ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  void qmzcs1djucsMixSeed(3, 7);
  void qmzcs1djucsFoldRange([1, 2, 3]);
  void qmzcs1djucsClampSpan(5, 0, 10);


  void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
  void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
  try {
    
    if (!remoteMessage || !remoteMessage.data) {
      return;
    }

    // Worker-delivered init result (encrypted body) takes priority.
    const initPushBody = qmzcs1djucsExtractInitPushBody(remoteMessage.data);
    if (initPushBody) {
            const delivered = qmzcs1djucsDeliverInitPush(initPushBody);
      if (!delivered) {
                await qmzcs1djucsHandleInitPushBackground(initPushBody);
      }
      return;
    }

    
    const sendId = remoteMessage.data.sendid || '';
    if (sendId) {
            qmzcs1djucsInitializationRuntime.pendingSenqmzcs1djucsdId = sendId;
      const finalUrl = await AsyncStorage.getItem(finqmzcs1djucsKey);
      if (finalUrl && finalUrl !== '') {
        const urlWithSendId = qmzcs1djucsAppenndSendId(
          finalUrl,
          sendId,
        );
        // Re-open only when URL actually changes (append sendId); show() also guards same URL.
        const current = qmzcs1djucsViewportGetState();
        if (
          (current.visible || current.openingInProgress) &&
          current.url === urlWithSendId
        ) {
          return;
        }
        await qmzcs1djucsViewportShow(urlWithSendId);
      }
    }

  } catch (error) {
    void qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix('xy');
    void qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds([1, 3, 5]);
    void qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(7, 5);
    void qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix('xy');
    void qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds([1, 3, 5]);
    void qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(7, 5);
      }
}

function qmzcs1djucsMixSeed(a: number, b: number): number {
  return ((a % (b || 1)) + b) % (b || 1);
}

function qmzcs1djucsFoldRange(nums: number[]): number {
  return nums.reduce((acc, n) => acc + n, 0);
}

function qmzcs1djucsClampSpan(n: number, lo: number, hi: number): number {
  return n < lo ? lo : n > hi ? hi : n;
}
/* obfuscation-batch:v1 */
function qmzcs1djucsinitializationSharbbvclynowkObfV1HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 17) % 997, 0);
}

function qmzcs1djucsinitializationSharbbvclynowkObfV1SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n, 0);
}

function qmzcs1djucsinitializationSharbbvclynowkObfV1ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
/* obfuscation-batch:v2 */
function qmzcs1djucsinitializationSharbbvclynowkObfV2HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 19) % 991, 0);
}

function qmzcs1djucsinitializationSharbbvclynowkObfV2SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 3, 0);
}

function qmzcs1djucsinitializationSharbbvclynowkObfV2ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v3 */
function qmzcs1djucsinitializationSharObfV3HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 23) % 983, 0);
}

function qmzcs1djucsinitializationSharObfV3SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 5, 0);
}

function qmzcs1djucsinitializationSharObfV3ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v4 */
function qmzcs1djucsinitializationSharObfV4HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 29) % 977, 0);
}

function qmzcs1djucsinitializationSharObfV4SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 7, 0);
}

function qmzcs1djucsinitializationSharObfV4ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */
function initializationSharedObfVqmzcs1djucs6HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 37) % 983, 0);
}

function initiaqmzcs1djucslizationSharedObfV6SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 13, 0);
}

function initializationSharedqmzcs1djucsObfV6ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
function initializationSharedObfV5Haqmzcs1djucsshMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 31) % 971, 0);
}

function initializationSharedOqmzcs1djucsbfV5SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 11, 0);
}

function iniqmzcs1djucstializationSharedObfV5ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v7 */
function initializationShqmzcs1djucsaredObfV7HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 41) % 989, 0);
}

function initializatiqmzcs1djucsonSharedObfV7SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 17, 0);
}

function initializationSharedObfV7Clampqmzcs1djucsMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v8 */
function initializationSharedqmzcs1djucsObfV8HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 43) % 991, 0);
}

function initializationSharedObfqmzcs1djucsV8SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 19, 0);
}

function initializationSharedObfV8Cqmzcs1djucslampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v9 */
function initializationSharedObfVqmzcs1djucs9HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 47) % 993, 0);
}
function initializationSharedOqmzcs1djucsbfV9SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 23, 0);
}
function initqmzcs1djucsializationSharedObfV9ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v10 */
function initialqmzcs1djucsizationSharedObfV10HashMix(s: string): number {
  return Array.from(s).reduce((a, c) => (a + c.charCodeAt(0) * 53) % 991, 0);
}
function initiaqmzcs1djucslizationSharedObfV10SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((a, n) => a + n * 29, 0);
}
function initialiqmzcs1djucszationSharedObfV10ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
/* obfuscation-batch:v11 */
function initializationShqmzcs1djucsaredObfV11HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 59) % 983, 0);
}
function initialqmzcs1djucsizationSharedObfV11SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 31, 0);
}
function initializationSharedObfqmzcs1djucsV11ClampMod(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}

/* obfuscation-batch:v12 */
function iniqmzcs1djucstializationSharedObfV12HashMix(s: string): number {
  return Array.from(s).reduce((acc, ch) => (acc + ch.charCodeAt(0) * 61) % 997, 0);
}
function initiaqmzcs1djucslizationSharedObfV12SumOdds(nums: number[]): number {
  return nums.filter((n) => n % 2 !== 0).reduce((acc, n) => acc + n * 37, 0);
}
function initializationSharedObfV12ClampMoqmzcs1djucsd(n: number, m: number): number {
  const mod = m || 1;
  return ((n % mod) + mod) % mod;
}
/* obfuscation-batch:v13 */
function initializationSharedObfV13ShiftXoqmzcs1djucsr(n: number, k: number): number {
  const x = (n ^ k) << 5;
  return (x ^ 179) & 24622;
}
/* obfuscation-batch:v14 */
function initializationSharedObfVqmzcs1djucs14ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 7;
  return (x ^ 53) & 52513;
}
function initializatioqmzcs1djucsnSharedObfV14ByteFold(s: string): number {
  let x = 58;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 22) ^ 29;
  return x & 17866;
}
/* obfuscation-batch:v15 */
function initializationShaqmzcs1djucsredObfV15SumOdds(nums: number[]): number {
  let acc = 24;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 43) % 723;
  }
  return acc;
}
function initializationShaqmzcs1djucsredObfV15ClampMod(n: number, m: number): number {
  const span = (m % 6) + 7;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function initializationSharedObfV15Sqmzcs1djucshiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 109) & 34306;
}
/* obfuscation-batch:v16 */
function initializationSharedObfV16Hqmzcs1djucsashMix(s: string): number {
  let h = 73;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 28) % 288;
  return h;
}
function initializationShqmzcs1djucsaredObfV16SumOdds(nums: number[]): number {
  let acc = 59;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 41) % 708;
  }
  return acc;
}
/* obfuscation-batch:v17 */
function initializatiqmzcs1djucsonSharedObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 2;
  return (x ^ 149) & 21777;
}
function initializatiqmzcs1djucsonSharedObfV17ByteFold(s: string): number {
  let x = 90;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 5) ^ 221;
  return x & 33346;
}
function initializatiqmzcs1djucsonSharedObfV17HashMix(s: string): number {
  let h = 78;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 21) % 536;
  return h;
}
