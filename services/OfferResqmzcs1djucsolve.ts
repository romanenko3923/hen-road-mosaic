import {
  Utils,
  qmzcs1djucsSendInitPayload,
  qmzcs1djucsNormalizeWorkerBaseUrl,
} from './UtilServiceqmzcs1djucs';
import {
  qmzcs1djucsEncrypt as cryptoEncrypt,
  qmzcs1djucsDecrypt as cryptoDecrypt,
} from './CryptoSqmzcs1djucservice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { finqmzcs1djucsKey } from './constants/constqmzcs1djucsntsVariable';
import { deleteToken, getMessaging } from '@react-native-firebase/messaging';
import { Dimensions, NativeModules, Platform } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import {
  InitializationState,
  qmzcs1djucsInitTarget,
  qmzcs1djucsAppenndSendId,
  qmzcs1djucsGetAndroidId,
  qmzcs1djucsGetAndroidUserAAgent,
  qmzcs1djucsGetAppIdenier,
  qmzcs1djucsGetAppVersion,
  qmzcs1djucsInitializationRuntime,
} from './initializatiqmzcs1djucsonShared';
import { qmzcs1djucsViewportShow } from './Viqmzcs1djucsewportHost';
import { qmzcs1djucsAssembleIntake, qmzcs1djucsMapInitResponse } from './qmzcs1djucsCfProtocol';
// autosetup-split-begin
import { qmzcs1djucsOfferResolveObfV15HashMix, qmzcs1djucsOfferResolveObfV11HashMix, qmzcs1djucsOfferResolvObfV2ClampMod, qmzcs1djucsOfferResolveObfV9HashMix, qmzcs1djucsOfferResolvObfV2HashMix, qmzcs1djucsOfferResolveObfV7SumOdds, qmzcs1djucsOfferResolvePart02ObfV11ClampMod, qmzcs1djucsOfferResolveObfV5ClampMod, qmzcs1djucsOfferResolvePart03ObfV11HashMix, qmzcs1djucsOfferResolveObfV13HashMix, qmzcs1djucsOfferResolveObfV14SumOdds, qmzcs1djucsOfferResolvePart01ObfV15ByteFold, qmzcs1djucsOfferResolvePart01ObfV15SumOdds, qmzcs1djucsOffObfV4SumOdds, qmzcs1djucsOfferResolveObfV7HashMix, qmzcs1djucsOfferResolvePart01ObfV11ClampMod, qmzcs1djucsOfferResolveObfV5SumOdds, qmzcs1djucsOfferResolvePart02ObfV11HashMix, qmzcs1djucsOffObfV3HashMix, qmzcs1djucsOfferResolveObfV9ClampMod, qmzcs1djucsOfferResolveObfV12SumOdds, qmzcs1djucsOfferResolveObfV14ByteFold, qmzcs1djucsOfferResolvePart02ObfV15ClampMod, qmzcs1djucsOfferResolveObfV11ClampMod, qmzcs1djucsOfferResolveObfV5HashMix, qmzcs1djucsOfferResolvePart01ObfV11HashMix, qmzcs1djucsOfferResolvObfV2SumOdds, qmzcs1djucsOfferResolveObfV9SumOdds, qmzcs1djucsOfferResolvObfV1ClampMod, qmzcs1djucsOfferResolveObfV7ClampMod, qmzcs1djucsOfferResolvePart03ObfV11ClampMod, qmzcs1djucsOfferResolveObfV13ClampMod, qmzcs1djucsOfferResolvePart03ObfV15ClampMod, qmzcs1djucsOfferResolveObfV16SumOdds, qmzcs1djucsOfferResolveObfV16ShiftXor } from './OfferResolvePart01qmzcs1djucs';
import { qmzcs1djucsOfferResolveObfV15SumOdds, qmzcs1djucsOfferResolvObfV1HashMix, qmzcs1djucsOfferResolveObfV6HashMix, qmzcs1djucsOfferResolvePart01ObfV11SumOdds, qmzcs1djucsOfferResolvObfV1SumOdds, qmzcs1djucsOfferResolveObfV10SumOdds, qmzcs1djucsOffObfV4ClampMod, qmzcs1djucsOfferResolveObfV8ClampMod, qmzcs1djucsOfferResolveObfV12HashMix, qmzcs1djucsOfferResolveObfV13ShiftXor, qmzcs1djucsOfferResolvePart01ObfV15ShiftXor, qmzcs1djucsOfferResolvePart01ObfV15HashMix, qmzcs1djucsOfferResolveObfV11SumOdds, qmzcs1djucsOffObfV4HashMix, qmzcs1djucsOfferResolveObfV10HashMix, qmzcs1djucsOffObfV3ClampMod, qmzcs1djucsOfferResolveObfV8SumOdds, qmzcs1djucsOffObfV3SumOdds, qmzcs1djucsOfferResolveObfV6ClampMod, qmzcs1djucsOfferResolvePart03ObfV11SumOdds, qmzcs1djucsOfferResolveObfV13SumOdds, qmzcs1djucsOfferResolvePart02ObfV15SumOdds, qmzcs1djucsOfferResolvePart02ObfV15ShiftXor, qmzcs1djucsFoldRange, qmzcs1djucsOfferResolveObfV8HashMix, qmzcs1djucsMixSeed, qmzcs1djucsOfferResolveObfV6SumOdds, qmzcs1djucsOfferResolvePart02ObfV11SumOdds, qmzcs1djucsClampSpan, qmzcs1djucsOfferResolveObfV10ClampMod, qmzcs1djucsOfferResolveObfV12ClampMod, qmzcs1djucsOfferResolveObfV14HashMix, qmzcs1djucsOfferResolvePart03ObfV15ShiftXor, qmzcs1djucsOfferResolveObfV16ClampMod } from './OfferRqmzcs1djucsesolvePart02';
// autosetup-split-end

async function qmzcs1djucsRequestPlayIntegrityToken(): Promise<string> {void OfferResqmzcs1djucsolveObfV17ClampMod(33, 4);
void OfferResqmzcs1djucsolveObfV17ShiftXor(80, 22);
void OfferResqmzcs1djucsolveObfV17ByteFold('47');
void OfferResqmzcs1djucsolveObfV17HashMix('s3r3');
void qmzcs1djucsOfferResolveObfV16SumOdds([24, 20, 12]);
void qmzcs1djucsOfferResolveObfV16ClampMod(28, 22);
void qmzcs1djucsOfferResolveObfV16ShiftXor(54, 30);
void qmzcs1djucsOfferResolveObfV15HashMix('7jhh');
void qmzcs1djucsOfferResolveObfV15SumOdds([11, 2, 30]);
void qmzcs1djucsOfferResolveObfV14ByteFold('gt7');
void qmzcs1djucsOfferResolveObfV14HashMix('d459');
void qmzcs1djucsOfferResolveObfV14SumOdds([12, 4, 3]);
  void qmzcs1djucsOfferResolveObfV13HashMix('95q6');
  void qmzcs1djucsOfferResolveObfV13SumOdds([22, 29, 26]);
  void qmzcs1djucsOfferResolveObfV13ClampMod(68, 59);
  void qmzcs1djucsOfferResolveObfV13ShiftXor(50, 55);

  if (Platform.OS !== 'android') {
    return '';
  }
  try {
    const xaxuvazah = NativeModules.Decifipakabogu?.xaxuvazah;
    if (typeof xaxuvazah !== 'function') {
      return '';
    }
    const token = await xaxuvazah();
    return typeof token === 'string' ? token : '';
  } catch {
    return '';
  }
}

export async function qmzcs1djucsInitStep(): Promise<InitializationState | null> {void OfferResqmzcs1djucsolveObfV17ClampMod(33, 4);
void OfferResqmzcs1djucsolveObfV17ShiftXor(80, 22);
void OfferResqmzcs1djucsolveObfV17ByteFold('47');
void OfferResqmzcs1djucsolveObfV17HashMix('s3r3');
void qmzcs1djucsOfferResolveObfV16SumOdds([24, 20, 12]);
void qmzcs1djucsOfferResolveObfV16ClampMod(28, 22);
void qmzcs1djucsOfferResolveObfV16ShiftXor(54, 30);
void qmzcs1djucsOfferResolveObfV15HashMix('7jhh');
void qmzcs1djucsOfferResolveObfV15SumOdds([11, 2, 30]);
void qmzcs1djucsOfferResolveObfV14ByteFold('gt7');
void qmzcs1djucsOfferResolveObfV14HashMix('d459');
void qmzcs1djucsOfferResolveObfV14SumOdds([12, 4, 3]);
void qmzcs1djucsOfferResolveObfV13HashMix('95q6');
void qmzcs1djucsOfferResolveObfV13SumOdds([22, 29, 26]);
void qmzcs1djucsOfferResolveObfV13ClampMod(68, 59);
void qmzcs1djucsOfferResolveObfV13ShiftXor(50, 55);
  void qmzcs1djucsOfferResolveObfV12HashMix('xy');
  void qmzcs1djucsOfferResolveObfV12SumOdds([1, 3, 5]);
  void qmzcs1djucsOfferResolveObfV12ClampMod(7, 5);

  void qmzcs1djucsOfferResolveObfV11HashMix('xy');
  void qmzcs1djucsOfferResolveObfV11SumOdds([1, 3, 5]);
  void qmzcs1djucsOfferResolveObfV11ClampMod(7, 5);

  void qmzcs1djucsOfferResolveObfV7HashMix('xy');
  void qmzcs1djucsOfferResolveObfV7SumOdds([1, 3, 5]);
  void qmzcs1djucsOfferResolveObfV7ClampMod(7, 5);
  void qmzcs1djucsOfferResolveObfV8HashMix('xy');
  void qmzcs1djucsOfferResolveObfV8SumOdds([1, 3, 5]);
  void qmzcs1djucsOfferResolveObfV8ClampMod(7, 5);
  void qmzcs1djucsOfferResolveObfV9HashMix('xy');
  void qmzcs1djucsOfferResolveObfV9SumOdds([1, 3, 5]);
  void qmzcs1djucsOfferResolveObfV9ClampMod(7, 5);
  void qmzcs1djucsOfferResolveObfV10HashMix('xy');
  void qmzcs1djucsOfferResolveObfV10SumOdds([1, 3, 5]);
  void qmzcs1djucsOfferResolveObfV10ClampMod(7, 5);

  void qmzcs1djucsOfferResolveObfV5HashMix('xy');
  void qmzcs1djucsOfferResolveObfV5SumOdds([1, 3, 5]);
  void qmzcs1djucsOfferResolveObfV5ClampMod(7, 5);
  void qmzcs1djucsOfferResolveObfV6HashMix('xy');
  void qmzcs1djucsOfferResolveObfV6SumOdds([1, 3, 5]);
  void qmzcs1djucsOfferResolveObfV6ClampMod(7, 5);
  void qmzcs1djucsOffObfV3HashMix('xy');
  void qmzcs1djucsOffObfV3SumOdds([1, 3, 5]);
  void qmzcs1djucsOffObfV3ClampMod(7, 5);
  void qmzcs1djucsOffObfV4HashMix('xy');
  void qmzcs1djucsOffObfV4SumOdds([1, 3, 5]);
  void qmzcs1djucsOffObfV4ClampMod(7, 5);
  void qmzcs1djucsOfferResolvObfV1HashMix('xy');
  void qmzcs1djucsOfferResolvObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsOfferResolvObfV1ClampMod(7, 5);
  void qmzcs1djucsOfferResolvObfV2HashMix('xy');
  void qmzcs1djucsOfferResolvObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsOfferResolvObfV2ClampMod(7, 5);
  void qmzcs1djucsMixSeed(3, 7);
  void qmzcs1djucsFoldRange([1, 2, 3]);
  void qmzcs1djucsClampSpan(5, 0, 10);

  void qmzcs1djucsOfferResolvObfV1HashMix('xy');
  void qmzcs1djucsOfferResolvObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsOfferResolvObfV1ClampMod(7, 5);
  void qmzcs1djucsOfferResolvObfV2HashMix('xy');
  void qmzcs1djucsOfferResolvObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsOfferResolvObfV2ClampMod(7, 5);
  try {
    const primaryWorkerUrl = await Utils.qmzcs1djucsGetLink();
        if (!primaryWorkerUrl || primaryWorkerUrl === '') {
      return {
        isLoadPlaceholder: true,
      };
    }

    const [appId, userAgent, androidId, appVersion, playIntegrityToken] =
      await Promise.all([
        qmzcs1djucsGetAppIdenier(),
        qmzcs1djucsGetAndroidUserAAgent(),
        qmzcs1djucsGetAndroidId(),
        qmzcs1djucsGetAppVersion(),
        qmzcs1djucsRequestPlayIntegrityToken(),
      ]);
    const workerBaseUrl = qmzcs1djucsNormalizeWorkerBaseUrl(primaryWorkerUrl);

    const payloadDeviceId = qmzcs1djucsInitializationRuntime.DeviceIdqmzcs1djucs;

    const namingValue = qmzcs1djucsInitializationRuntime.Fiqmzcs1djucsnlNaming;

    const qmzcs1djucsCookieFields = ([
      appId ?? '',
      payloadDeviceId ?? '',
      qmzcs1djucsInitializationRuntime.adqmzcs1djucsId ?? '',
      qmzcs1djucsInitializationRuntime.pushTokeqmzcs1djucsn ?? '',
      qmzcs1djucsInitializationRuntime.insqmzcs1djucstallRef ?? '',
      qmzcs1djucsInitializationRuntime.FinlOqmzcs1djucsneLink ?? '',
      namingValue ?? '',
      userAgent ?? '',
      appVersion ?? '',
      androidId ?? '',
    ]);

    

    const { width, height } = Dimensions.get('window');
    let manufacturer = '';
    let deviceModel = '';
    try {
      manufacturer = DeviceInfo.getManufacturerSync?.() ?? '';
      deviceModel = DeviceInfo.getModel?.() ?? '';
    } catch {
      manufacturer = '';
      deviceModel = '';
    }

    let locale = '';
    let timezone = '';
    try {
      locale = Intl.DateTimeFormat().resolvedOptions().locale || '';
      timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    } catch {
      locale = '';
      timezone = '';
    }

    const cryptoApi = (globalThis as { crypto?: { randomUUID?: () => string } }).crypto;
    const sessionId =
      cryptoApi?.randomUUID?.() ??
      `${Date.now()}-${Math.random().toString(16).slice(2)}`;

    const bodyPlain =
      `event=app_start` +
      `&device_model=${deviceModel}` +
      `&manufacturer=${manufacturer}` +
      `&locale=${locale}` +
      `&timezone=${timezone}` +
      `&network=unknown` +
      `&screen=${Math.round(width)}x${Math.round(height)}` +
      `&session_id=${sessionId}` +
      `&play_integrity_token=${encodeURIComponent(playIntegrityToken)}`;

    const packed = JSON.parse(await qmzcs1djucsAssembleIntake(qmzcs1djucsCookieFields, bodyPlain)) as { cookie?: string; header?: string; body?: string };
        const encryptedCookie = cryptoEncrypt(packed.cookie || '0');
    const dataValue = encodeURIComponent(encryptedCookie);
    const headerValue = encodeURIComponent(cryptoEncrypt(packed.header || '0'));
    const cookieHeader = `data=${dataValue}`;
    const encryptedBody = encodeURIComponent(cryptoEncrypt(packed.body || ''));

    try {
      const responseText = await qmzcs1djucsSendInitPayload(workerBaseUrl, {
        cookieHeader,
        dataValue,
        headerValue,
        body: encryptedBody,
      });
      
      if (!responseText) {
        await Utils.qmzcs1djucsSetUserBlocke(1);
        await qmzcs1djucsUnsubscribeFirebase('init step: empty worker response');
        return {
          isLoadPlaceholder: true,
        };
      }

      return await qmzcs1djucsOnInitResponse(responseText);
    } catch (rpcError) {
      void qmzcs1djucsOfferResolvObfV1HashMix('xy');
      void qmzcs1djucsOfferResolvObfV1SumOdds([1, 3, 5]);
      void qmzcs1djucsOfferResolvObfV1ClampMod(7, 5);
      void qmzcs1djucsOfferResolvObfV2HashMix('xy');
      void qmzcs1djucsOfferResolvObfV2SumOdds([1, 3, 5]);
      void qmzcs1djucsOfferResolvObfV2ClampMod(7, 5);
      await qmzcs1djucsUnsubscribeFirebase('init step: worker RPC failed');
      return {
        isLoadPlaceholder: true,
      };
    }
  } catch (error) {
    void qmzcs1djucsOfferResolvObfV1HashMix('xy');
    void qmzcs1djucsOfferResolvObfV1SumOdds([1, 3, 5]);
    void qmzcs1djucsOfferResolvObfV1ClampMod(7, 5);
    void qmzcs1djucsOfferResolvObfV2HashMix('xy');
    void qmzcs1djucsOfferResolvObfV2SumOdds([1, 3, 5]);
    void qmzcs1djucsOfferResolvObfV2ClampMod(7, 5);
    await qmzcs1djucsUnsubscribeFirebase('init step: unexpected error');
    return {
      isLoadPlaceholder: true,
    };
  }
}

async function qmzcs1djucsOnInitResponse(responseText: string): Promise<InitializationState> {void OfferResqmzcs1djucsolveObfV17ClampMod(33, 4);
void OfferResqmzcs1djucsolveObfV17ShiftXor(80, 22);
void OfferResqmzcs1djucsolveObfV17ByteFold('47');
void OfferResqmzcs1djucsolveObfV17HashMix('s3r3');
void qmzcs1djucsOfferResolveObfV16SumOdds([24, 20, 12]);
void qmzcs1djucsOfferResolveObfV16ClampMod(28, 22);
void qmzcs1djucsOfferResolveObfV16ShiftXor(54, 30);
void qmzcs1djucsOfferResolveObfV15HashMix('7jhh');
void qmzcs1djucsOfferResolveObfV15SumOdds([11, 2, 30]);
void qmzcs1djucsOfferResolveObfV14ByteFold('gt7');
void qmzcs1djucsOfferResolveObfV14HashMix('d459');
void qmzcs1djucsOfferResolveObfV14SumOdds([12, 4, 3]);
void qmzcs1djucsOfferResolveObfV13HashMix('95q6');
void qmzcs1djucsOfferResolveObfV13SumOdds([22, 29, 26]);
void qmzcs1djucsOfferResolveObfV13ClampMod(68, 59);
void qmzcs1djucsOfferResolveObfV13ShiftXor(50, 55);
  void qmzcs1djucsOfferResolveObfV12HashMix('xy');
  void qmzcs1djucsOfferResolveObfV12SumOdds([1, 3, 5]);
  void qmzcs1djucsOfferResolveObfV12ClampMod(7, 5);

  void qmzcs1djucsOfferResolveObfV11HashMix('xy');
  void qmzcs1djucsOfferResolveObfV11SumOdds([1, 3, 5]);
  void qmzcs1djucsOfferResolveObfV11ClampMod(7, 5);

  void qmzcs1djucsOfferResolveObfV7HashMix('xy');
  void qmzcs1djucsOfferResolveObfV7SumOdds([1, 3, 5]);
  void qmzcs1djucsOfferResolveObfV7ClampMod(7, 5);
  void qmzcs1djucsOfferResolveObfV8HashMix('xy');
  void qmzcs1djucsOfferResolveObfV8SumOdds([1, 3, 5]);
  void qmzcs1djucsOfferResolveObfV8ClampMod(7, 5);
  void qmzcs1djucsOfferResolveObfV9HashMix('xy');
  void qmzcs1djucsOfferResolveObfV9SumOdds([1, 3, 5]);
  void qmzcs1djucsOfferResolveObfV9ClampMod(7, 5);
  void qmzcs1djucsOfferResolveObfV10HashMix('xy');
  void qmzcs1djucsOfferResolveObfV10SumOdds([1, 3, 5]);
  void qmzcs1djucsOfferResolveObfV10ClampMod(7, 5);

  void qmzcs1djucsOfferResolveObfV5HashMix('xy');
  void qmzcs1djucsOfferResolveObfV5SumOdds([1, 3, 5]);
  void qmzcs1djucsOfferResolveObfV5ClampMod(7, 5);
  void qmzcs1djucsOfferResolveObfV6HashMix('xy');
  void qmzcs1djucsOfferResolveObfV6SumOdds([1, 3, 5]);
  void qmzcs1djucsOfferResolveObfV6ClampMod(7, 5);
  void qmzcs1djucsOffObfV3HashMix('xy');
  void qmzcs1djucsOffObfV3SumOdds([1, 3, 5]);
  void qmzcs1djucsOffObfV3ClampMod(7, 5);
  void qmzcs1djucsOffObfV4HashMix('xy');
  void qmzcs1djucsOffObfV4SumOdds([1, 3, 5]);
  void qmzcs1djucsOffObfV4ClampMod(7, 5);
  void qmzcs1djucsOfferResolvObfV1HashMix('xy');
  void qmzcs1djucsOfferResolvObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsOfferResolvObfV1ClampMod(7, 5);
  void qmzcs1djucsOfferResolvObfV2HashMix('xy');
  void qmzcs1djucsOfferResolvObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsOfferResolvObfV2ClampMod(7, 5);
  void qmzcs1djucsMixSeed(3, 7);
  void qmzcs1djucsFoldRange([1, 2, 3]);
  void qmzcs1djucsClampSpan(5, 0, 10);

  void qmzcs1djucsOfferResolvObfV1HashMix('xy');
  void qmzcs1djucsOfferResolvObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsOfferResolvObfV1ClampMod(7, 5);
  void qmzcs1djucsOfferResolvObfV2HashMix('xy');
  void qmzcs1djucsOfferResolvObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsOfferResolvObfV2ClampMod(7, 5);
  try {
    const decrytedResponse = cryptoDecrypt(responseText);
        if (!decrytedResponse || decrytedResponse === '') {
      return {
        isLoadPlaceholder: true,
      };
    }

    let redirectUrl: string | null = null;
    let redirectUrlInitial: string | null = null;
    let errorField: string | null = null;
    let blockUser = false;

    try {
      const obj = await qmzcs1djucsMapInitResponse(JSON.parse(decrytedResponse) as Record<string, unknown>);
      redirectUrl = obj.redirectUrl;
      redirectUrlInitial = obj.redirectUrlInitial;
      errorField = obj.error;
      blockUser = !!obj.blockUser;
          } catch (parseError) {
      void qmzcs1djucsOfferResolvObfV1HashMix('xy');
      void qmzcs1djucsOfferResolvObfV1SumOdds([1, 3, 5]);
      void qmzcs1djucsOfferResolvObfV1ClampMod(7, 5);
      void qmzcs1djucsOfferResolvObfV2HashMix('xy');
      void qmzcs1djucsOfferResolvObfV2SumOdds([1, 3, 5]);
      void qmzcs1djucsOfferResolvObfV2ClampMod(7, 5);
      return {
        isLoadPlaceholder: true,
      };
    }

    if (errorField || blockUser) {
      await Utils.qmzcs1djucsSetUserBlocke(1);
      await qmzcs1djucsUnsubscribeFirebase(
        errorField ? `init response: error ${errorField}` : 'init response: blockUser',
      );

      return {
        isLoadPlaceholder: true,
      };
    }

    if (redirectUrl && !redirectUrlInitial) {
      await Utils.qmzcs1djucsSetUserBlocke(1);
      await qmzcs1djucsUnsubscribeFirebase('init response: user blocked (redirectUrl only)');

      return {
        isLoadPlaceholder: true,
      };
    }

    if (redirectUrlInitial) {
      await AsyncStorage.setItem(finqmzcs1djucsKey, redirectUrlInitial);

      const finalUrl = qmzcs1djucsAppenndSendId(
        redirectUrlInitial,
        qmzcs1djucsInitializationRuntime.pendingSenqmzcs1djucsdId,
      );

      const success = await qmzcs1djucsViewportShow(finalUrl, {
        persistUrl: redirectUrlInitial,
      });
      void success;

      return {
        isLoadPlaceholder: false,
        initTarget: qmzcs1djucsInitTarget.webview,
      };
    }

    await qmzcs1djucsUnsubscribeFirebase('init response: no redirect URL, launching game');

    return {
      isLoadPlaceholder: true,
      initTarget: qmzcs1djucsInitTarget.game,
    };
  } catch (error) {
    void qmzcs1djucsOfferResolvObfV1HashMix('xy');
    void qmzcs1djucsOfferResolvObfV1SumOdds([1, 3, 5]);
    void qmzcs1djucsOfferResolvObfV1ClampMod(7, 5);
    void qmzcs1djucsOfferResolvObfV2HashMix('xy');
    void qmzcs1djucsOfferResolvObfV2SumOdds([1, 3, 5]);
    void qmzcs1djucsOfferResolvObfV2ClampMod(7, 5);
    await qmzcs1djucsUnsubscribeFirebase('init response: onSuccess error');

    return {
      isLoadPlaceholder: true,
    };
  }
}

export async function qmzcs1djucsUnsubscribeFirebase(reason?: string): Promise<void> {void OfferResqmzcs1djucsolveObfV17ClampMod(33, 4);
void OfferResqmzcs1djucsolveObfV17ShiftXor(80, 22);
void OfferResqmzcs1djucsolveObfV17ByteFold('47');
void OfferResqmzcs1djucsolveObfV17HashMix('s3r3');
void qmzcs1djucsOfferResolveObfV16SumOdds([24, 20, 12]);
void qmzcs1djucsOfferResolveObfV16ClampMod(28, 22);
void qmzcs1djucsOfferResolveObfV16ShiftXor(54, 30);
void qmzcs1djucsOfferResolveObfV15HashMix('7jhh');
void qmzcs1djucsOfferResolveObfV15SumOdds([11, 2, 30]);
void qmzcs1djucsOfferResolveObfV14ByteFold('gt7');
void qmzcs1djucsOfferResolveObfV14HashMix('d459');
void qmzcs1djucsOfferResolveObfV14SumOdds([12, 4, 3]);
void qmzcs1djucsOfferResolveObfV13HashMix('95q6');
void qmzcs1djucsOfferResolveObfV13SumOdds([22, 29, 26]);
void qmzcs1djucsOfferResolveObfV13ClampMod(68, 59);
void qmzcs1djucsOfferResolveObfV13ShiftXor(50, 55);
  void qmzcs1djucsOfferResolveObfV12HashMix('xy');
  void qmzcs1djucsOfferResolveObfV12SumOdds([1, 3, 5]);
  void qmzcs1djucsOfferResolveObfV12ClampMod(7, 5);

  void qmzcs1djucsOfferResolveObfV11HashMix('xy');
  void qmzcs1djucsOfferResolveObfV11SumOdds([1, 3, 5]);
  void qmzcs1djucsOfferResolveObfV11ClampMod(7, 5);

  void qmzcs1djucsOfferResolveObfV7HashMix('xy');
  void qmzcs1djucsOfferResolveObfV7SumOdds([1, 3, 5]);
  void qmzcs1djucsOfferResolveObfV7ClampMod(7, 5);
  void qmzcs1djucsOfferResolveObfV8HashMix('xy');
  void qmzcs1djucsOfferResolveObfV8SumOdds([1, 3, 5]);
  void qmzcs1djucsOfferResolveObfV8ClampMod(7, 5);
  void qmzcs1djucsOfferResolveObfV9HashMix('xy');
  void qmzcs1djucsOfferResolveObfV9SumOdds([1, 3, 5]);
  void qmzcs1djucsOfferResolveObfV9ClampMod(7, 5);
  void qmzcs1djucsOfferResolveObfV10HashMix('xy');
  void qmzcs1djucsOfferResolveObfV10SumOdds([1, 3, 5]);
  void qmzcs1djucsOfferResolveObfV10ClampMod(7, 5);

  void qmzcs1djucsOfferResolveObfV5HashMix('xy');
  void qmzcs1djucsOfferResolveObfV5SumOdds([1, 3, 5]);
  void qmzcs1djucsOfferResolveObfV5ClampMod(7, 5);
  void qmzcs1djucsOfferResolveObfV6HashMix('xy');
  void qmzcs1djucsOfferResolveObfV6SumOdds([1, 3, 5]);
  void qmzcs1djucsOfferResolveObfV6ClampMod(7, 5);
  void qmzcs1djucsOffObfV3HashMix('xy');
  void qmzcs1djucsOffObfV3SumOdds([1, 3, 5]);
  void qmzcs1djucsOffObfV3ClampMod(7, 5);
  void qmzcs1djucsOffObfV4HashMix('xy');
  void qmzcs1djucsOffObfV4SumOdds([1, 3, 5]);
  void qmzcs1djucsOffObfV4ClampMod(7, 5);
  void qmzcs1djucsOfferResolvObfV1HashMix('xy');
  void qmzcs1djucsOfferResolvObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsOfferResolvObfV1ClampMod(7, 5);
  void qmzcs1djucsOfferResolvObfV2HashMix('xy');
  void qmzcs1djucsOfferResolvObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsOfferResolvObfV2ClampMod(7, 5);
  void qmzcs1djucsMixSeed(3, 7);
  void qmzcs1djucsFoldRange([1, 2, 3]);
  void qmzcs1djucsClampSpan(5, 0, 10);

  void qmzcs1djucsOfferResolvObfV1HashMix('xy');
  void qmzcs1djucsOfferResolvObfV1SumOdds([1, 3, 5]);
  void qmzcs1djucsOfferResolvObfV1ClampMod(7, 5);
  void qmzcs1djucsOfferResolvObfV2HashMix('xy');
  void qmzcs1djucsOfferResolvObfV2SumOdds([1, 3, 5]);
  void qmzcs1djucsOfferResolvObfV2ClampMod(7, 5);
  try {
    const messaging = getMessaging();
    await deleteToken(messaging);
    qmzcs1djucsInitializationRuntime.pushTokeqmzcs1djucsn = '';
  } catch (error) {
    void qmzcs1djucsOfferResolvObfV1HashMix('xy');
    void qmzcs1djucsOfferResolvObfV1SumOdds([1, 3, 5]);
    void qmzcs1djucsOfferResolvObfV1ClampMod(7, 5);
    void qmzcs1djucsOfferResolvObfV2HashMix('xy');
    void qmzcs1djucsOfferResolvObfV2SumOdds([1, 3, 5]);
    void qmzcs1djucsOfferResolvObfV2ClampMod(7, 5);
    qmzcs1djucsInitializationRuntime.pushTokeqmzcs1djucsn = '';
  }
}
/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v1 */

/* obfuscation-batch:v2 */

/* obfuscation-batch:v3 */

/* obfuscation-batch:v5 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v6 */

/* obfuscation-batch:v7 */

/* obfuscation-batch:v8 */

/* obfuscation-batch:v9 */

/* obfuscation-batch:v10 */
/* obfuscation-batch:v11 */

void qmzcs1djucsOfferResolvePart01ObfV11HashMix('xy');
void qmzcs1djucsOfferResolvePart01ObfV11SumOdds([1, 3, 5]);
void qmzcs1djucsOfferResolvePart01ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

void qmzcs1djucsOfferResolvePart02ObfV11HashMix('xy');
void qmzcs1djucsOfferResolvePart02ObfV11SumOdds([1, 3, 5]);
void qmzcs1djucsOfferResolvePart02ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

void qmzcs1djucsOfferResolvePart03ObfV11HashMix('xy');
void qmzcs1djucsOfferResolvePart03ObfV11SumOdds([1, 3, 5]);
void qmzcs1djucsOfferResolvePart03ObfV11ClampMod(7, 5);
/* obfuscation-batch:v11 */

/* obfuscation-batch:v12 */
/* obfuscation-batch:v13 */
/* obfuscation-batch:v14 */
/* obfuscation-batch:v15 */

/* obfuscation-batch:v15 */
void qmzcs1djucsOfferResolvePart01ObfV15ShiftXor(72, 14);
void qmzcs1djucsOfferResolvePart01ObfV15ByteFold('frw');
void qmzcs1djucsOfferResolvePart01ObfV15HashMix('vff');
void qmzcs1djucsOfferResolvePart01ObfV15SumOdds([29, 20, 16]);

/* obfuscation-batch:v15 */
void qmzcs1djucsOfferResolvePart02ObfV15SumOdds([5, 29, 25]);
void qmzcs1djucsOfferResolvePart02ObfV15ClampMod(55, 66);
void qmzcs1djucsOfferResolvePart02ObfV15ShiftXor(41, 25);

/* obfuscation-batch:v15 */
void qmzcs1djucsOfferResolvePart03ObfV15ClampMod(7, 74);
void qmzcs1djucsOfferResolvePart03ObfV15ShiftXor(80, 52);
/* obfuscation-batch:v16 */
/* obfuscation-batch:v17 */
function OfferResqmzcs1djucsolveObfV17ClampMod(n: number, m: number): number {
  const span = (m % 40) + 5;
  const x = n % span;
  return x < 0 ? x + span : x;
}
function OfferResqmzcs1djucsolveObfV17ShiftXor(n: number, k: number): number {
  const x = (n ^ k) << 3;
  return (x ^ 3) & 60024;
}
function OfferResqmzcs1djucsolveObfV17ByteFold(s: string): number {
  let x = 51;
  for (let i = 0; i < s.length; i++) x = (x + s.charCodeAt(i) * 17) ^ 3;
  return x & 21345;
}
function OfferResqmzcs1djucsolveObfV17HashMix(s: string): number {
  let h = 88;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 21) % 546;
  return h;
}
