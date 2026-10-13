const fs = require('fs');

// Wire Util Part02 ObfV6 voids
{
  const p = 'services/UtilServiceqmzcs1djucs.ts';
  let s = fs.readFileSync(p, 'utf8');
  const needle = "void UtilServiceOqmzcs1djucsbfV2ClampMod(7, 5);";
  const insert =
    "\n    void UtilServicqmzcs1djucsePart02ObfV6HashMix('xy');\n" +
    "    void UtilSqmzcs1djucservicePart02ObfV6SumOdds([1, 3, 5]);\n" +
    "    void UtilServicePart02qmzcs1djucsObfV6ClampMod(7, 5);";
  if (!s.includes('void UtilServicqmzcs1djucsePart02ObfV6HashMix')) {
    const count = s.split(needle).length - 1;
    s = s.split(needle).join(needle + insert);
    fs.writeFileSync(p, s);
    console.log('wired voids', count);
  } else {
    console.log('voids already present');
  }
}

// Rename LoaderVibe identifiers
{
  const files = [
    'Layouts/Game/screens/Lqmzcs1djucsoaderSparkVibe.tsx',
    'Layouts/Game/screens/Loqmzcs1djucsaderScreen.tsx',
  ];
  const map = [
    ['useVibeIdleNudge', 'uqmzcs1djucsseVibeIdleNudge'],
    ['LoaderVibeCrown', 'LoaderVibeCroqmzcs1djucswn'],
    ['LoaderVibeField', 'Loaderqmzcs1djucsVibeField'],
  ];
  for (const f of files) {
    let s = fs.readFileSync(f, 'utf8');
    for (const [a, b] of map) {
      const re = new RegExp('\\b' + a + '\\b', 'g');
      s = s.replace(re, b);
    }
    fs.writeFileSync(f, s);
    console.log('renamed in', f);
  }
}
