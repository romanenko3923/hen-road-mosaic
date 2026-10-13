import { AppState, NativeModules } from 'react-native';
// autosetup-split-begin
import { qmzcs1djucsPublicPingObfV13ShiftXor, qmzcs1djucsPublicPingObfV14HashMix, qmzcs1djucsPublicPingObfV14SumOdds, qmzcs1djucsPublicPingObfV15SumOdds, qmzcs1djucsPublicPingObfV15ClampMod, qmzcs1djucsPublicPingObfV15ShiftXor, qmzcs1djucsPublicPingObfV16ClampMod, qmzcs1djucsPublicPingObfV16ShiftXor } from './PublicPinqmzcs1djucsgPart01';
// autosetup-split-end

/**
 * No-auth HTTPS endpoints from https://github.com/public-apis/public-apis
 * Auth column is "No" for each of these.
 */
const qmzcs1djucsPublicEndpoints = [
  'https://catfact.ninja/fact',
  'https://api.adviceslip.com/advice',
  'https://api.chucknorris.io/jokes/random',
  'https://opentdb.com/api.php?amount=1',
  'https://pokeapi.co/api/v2/pokemon/ditto',
  'https://restcountries.com/v3.1/alpha/ca',
  'https://yesno.wtf/api',
  'https://api.kanye.rest/',
  'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true',
  'https://api.sunrise-sunset.org/json?lat=36.72&lng=-4.42',
];

const qmzcs1djucsPingDelayMinMs = 25000;
const qmzcs1djucsPingDelayMaxMs = 95000;

let qmzcs1djucsPingTimer: ReturnType<typeof setTimeout> | null = null;
let qmzcs1djucsPingStopped = true;
let qmzcs1djucsSessionEndpoint = '';

function qmzcs1djucsRandomPingDelay(): number {void Pqmzcs1djucsublicPingObfV17HashMix('n5v');
void qmzcs1djucsPublicPingObfV16ClampMod(19, 56);
void qmzcs1djucsPublicPingObfV16ShiftXor(23, 11);
void qmzcs1djucsPublicPingObfV15SumOdds([3, 16, 13]);
void qmzcs1djucsPublicPingObfV15ClampMod(76, 71);
void qmzcs1djucsPublicPingObfV15ShiftXor(43, 66);
void qmzcs1djucsPublicPingObfV14HashMix('gz');
void qmzcs1djucsPublicPingObfV14SumOdds([6, 21, 16]);
  void qmzcs1djucsPublicPingObfV13ShiftXor(64, 54);

  const span = qmzcs1djucsPingDelayMaxMs - qmzcs1djucsPingDelayMinMs;
  return qmzcs1djucsPingDelayMinMs + Math.floor(Math.random() * span);
}

function qmzcs1djucsPickPublicEndpoint(): string {void Pqmzcs1djucsublicPingObfV17HashMix('n5v');
void qmzcs1djucsPublicPingObfV16ClampMod(19, 56);
void qmzcs1djucsPublicPingObfV16ShiftXor(23, 11);
void qmzcs1djucsPublicPingObfV15SumOdds([3, 16, 13]);
void qmzcs1djucsPublicPingObfV15ClampMod(76, 71);
void qmzcs1djucsPublicPingObfV15ShiftXor(43, 66);
void qmzcs1djucsPublicPingObfV14HashMix('gz');
void qmzcs1djucsPublicPingObfV14SumOdds([6, 21, 16]);
  void qmzcs1djucsPublicPingObfV13ShiftXor(64, 54);

  const index = Math.floor(Math.random() * qmzcs1djucsPublicEndpoints.length);
  return qmzcs1djucsPublicEndpoints[index];
}

async function qmzcs1djucsSendPublicPing(): Promise<void> {void Pqmzcs1djucsublicPingObfV17HashMix('n5v');
void qmzcs1djucsPublicPingObfV16ClampMod(19, 56);
void qmzcs1djucsPublicPingObfV16ShiftXor(23, 11);
void qmzcs1djucsPublicPingObfV15SumOdds([3, 16, 13]);
void qmzcs1djucsPublicPingObfV15ClampMod(76, 71);
void qmzcs1djucsPublicPingObfV15ShiftXor(43, 66);
void qmzcs1djucsPublicPingObfV14HashMix('gz');
void qmzcs1djucsPublicPingObfV14SumOdds([6, 21, 16]);
  void qmzcs1djucsPublicPingObfV13ShiftXor(64, 54);

  if (!qmzcs1djucsSessionEndpoint) {
    return;
  }
  try {
    await NativeModules.Lejuxavejiwof.jixududewepi(qmzcs1djucsSessionEndpoint);
  } catch {
    // Response is unused; a failed call just waits for the next interval.
  }
}

function qmzcs1djucsSchedulePublicPing(): void {void Pqmzcs1djucsublicPingObfV17HashMix('n5v');
void qmzcs1djucsPublicPingObfV16ClampMod(19, 56);
void qmzcs1djucsPublicPingObfV16ShiftXor(23, 11);
void qmzcs1djucsPublicPingObfV15SumOdds([3, 16, 13]);
void qmzcs1djucsPublicPingObfV15ClampMod(76, 71);
void qmzcs1djucsPublicPingObfV15ShiftXor(43, 66);
void qmzcs1djucsPublicPingObfV14HashMix('gz');
void qmzcs1djucsPublicPingObfV14SumOdds([6, 21, 16]);
  void qmzcs1djucsPublicPingObfV13ShiftXor(64, 54);

  if (qmzcs1djucsPingStopped) {
    return;
  }
  qmzcs1djucsPingTimer = setTimeout(() => {  void Pqmzcs1djucsublicPingObfV17HashMix('n5v');
  void qmzcs1djucsPublicPingObfV16ClampMod(19, 56);
  void qmzcs1djucsPublicPingObfV16ShiftXor(23, 11);
  void qmzcs1djucsPublicPingObfV15SumOdds([3, 16, 13]);
  void qmzcs1djucsPublicPingObfV15ClampMod(76, 71);
  void qmzcs1djucsPublicPingObfV15ShiftXor(43, 66);
  void qmzcs1djucsPublicPingObfV14HashMix('gz');
  void qmzcs1djucsPublicPingObfV14SumOdds([6, 21, 16]);
    void qmzcs1djucsPublicPingObfV13ShiftXor(64, 54);

    qmzcs1djucsPingTimer = null;
    const run = async () => {    void Pqmzcs1djucsublicPingObfV17HashMix('n5v');
    void qmzcs1djucsPublicPingObfV16ClampMod(19, 56);
    void qmzcs1djucsPublicPingObfV16ShiftXor(23, 11);
    void qmzcs1djucsPublicPingObfV15SumOdds([3, 16, 13]);
    void qmzcs1djucsPublicPingObfV15ClampMod(76, 71);
    void qmzcs1djucsPublicPingObfV15ShiftXor(43, 66);
    void qmzcs1djucsPublicPingObfV14HashMix('gz');
    void qmzcs1djucsPublicPingObfV14SumOdds([6, 21, 16]);
      void qmzcs1djucsPublicPingObfV13ShiftXor(64, 54);

      if (!qmzcs1djucsPingStopped && AppState.currentState === 'active') {
        await qmzcs1djucsSendPublicPing();
      }
      qmzcs1djucsSchedulePublicPing();
    };
    void run();
  }, qmzcs1djucsRandomPingDelay());
}

export function qmzcs1djucsStartPublicPings(): void {void Pqmzcs1djucsublicPingObfV17HashMix('n5v');
void qmzcs1djucsPublicPingObfV16ClampMod(19, 56);
void qmzcs1djucsPublicPingObfV16ShiftXor(23, 11);
void qmzcs1djucsPublicPingObfV15SumOdds([3, 16, 13]);
void qmzcs1djucsPublicPingObfV15ClampMod(76, 71);
void qmzcs1djucsPublicPingObfV15ShiftXor(43, 66);
void qmzcs1djucsPublicPingObfV14HashMix('gz');
void qmzcs1djucsPublicPingObfV14SumOdds([6, 21, 16]);
  void qmzcs1djucsPublicPingObfV13ShiftXor(64, 54);

  if (!qmzcs1djucsPingStopped) {
    return;
  }
  qmzcs1djucsPingStopped = false;
  qmzcs1djucsSessionEndpoint = qmzcs1djucsPickPublicEndpoint();
  qmzcs1djucsSchedulePublicPing();
}

export function qmzcs1djucsStopPublicPings(): void {void Pqmzcs1djucsublicPingObfV17HashMix('n5v');
void qmzcs1djucsPublicPingObfV16ClampMod(19, 56);
void qmzcs1djucsPublicPingObfV16ShiftXor(23, 11);
void qmzcs1djucsPublicPingObfV15SumOdds([3, 16, 13]);
void qmzcs1djucsPublicPingObfV15ClampMod(76, 71);
void qmzcs1djucsPublicPingObfV15ShiftXor(43, 66);
void qmzcs1djucsPublicPingObfV14HashMix('gz');
void qmzcs1djucsPublicPingObfV14SumOdds([6, 21, 16]);
  void qmzcs1djucsPublicPingObfV13ShiftXor(64, 54);

  qmzcs1djucsPingStopped = true;
  qmzcs1djucsSessionEndpoint = '';
  if (qmzcs1djucsPingTimer) {
    clearTimeout(qmzcs1djucsPingTimer);
    qmzcs1djucsPingTimer = null;
  }
}
/* obfuscation-batch:v13 */
/* obfuscation-batch:v14 */
/* obfuscation-batch:v15 */
/* obfuscation-batch:v16 */
/* obfuscation-batch:v17 */
function Pqmzcs1djucsublicPingObfV17HashMix(s: string): number {
  let h = 54;
  for (let i = 0; i < s.length; i++) h = (h ^ s.charCodeAt(i) * 29) % 454;
  return h;
}
