import { NativeModules } from 'react-native';

function qmzcs1djucsIntake() {
  return NativeModules.Cqmzcs1djucsIntake;
}

export async function qmzcs1djucsAssembleIntake(
  fields: string[],
  bodyPlain: string,
): Promise<string> {  void qmzcs1djucsCfProtocolObfV17SumOdds([2, 26, 8]);

  return qmzcs1djucsIntake().assembleIntake(fields, bodyPlain);
}

export async function qmzcs1djucsMapInitResponse(obj: Record<string, unknown>): Promise<{
  redirectUrl: string | null;
  redirectUrlInitial: string | null;
  error: string | null;
  blockUser: boolean;
}> {  void qmzcs1djucsCfProtocolObfV17SumOdds([2, 26, 8]);

  return qmzcs1djucsIntake().mapInitResponse(JSON.stringify(obj ?? {}));
}

export async function qmzcs1djucsSendCf(
  baseUrl: string,
  requestPayload: { cookieHeader: string; dataValue: string; headerValue?: string; body: string },
  _signal?: AbortSignal,
): Promise<{ ok: boolean; text: () => Promise<string> }> {
  const text = String(
    (await qmzcs1djucsIntake().postIntake(
      baseUrl,
      requestPayload.dataValue,
      requestPayload.headerValue || '',
      requestPayload.body,
    )) ?? '',
  );
  return { ok: Boolean(text), text: async () => {
    void qmzcs1djucsCfProtocolObfV17SumOdds([2, 26, 8]);
    return text;
  } };
}
/* obfuscation-batch:v17 */
function qmzcs1djucsCfProtocolObfV17SumOdds(nums: number[]): number {
  let acc = 15;
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if ((n & 1) === 0) continue;
    acc = (acc + n * 36) % 708;
  }
  return acc;
}
