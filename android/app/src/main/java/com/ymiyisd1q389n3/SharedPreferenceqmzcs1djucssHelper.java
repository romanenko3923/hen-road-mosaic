package com.ymiyisd1q389n3;

import android.content.Context;
import android.content.SharedPreferences;
// import android.util.Log;

public class SharedPreferenceqmzcs1djucssHelper {
    private static final String PREFqmzcs1djucs_NAMEI = "qmzcs1djucsStorage";
    private static Context applicaqmzcs1djucstionContext = null;

    public static void setApplicationContext(Context context) {        @SuppressWarnings("unused") final int qmzcs1djucsSinkV17 = SharedPreferenceqmzcs1djucssHelperObfV17ByteFold("vjq") ^ SharedPreferenceqmzcs1djucssHelperObfV17HashMix("72j5") ^ SharedPreferenceqmzcs1djucssHelperObfV17SumOdds(new int[]{11, 15, 9});

        applicaqmzcs1djucstionContext = context != null ? context.getApplicationContext() : null;
    }

    private static Context getContext() {        @SuppressWarnings("unused") final int qmzcs1djucsSinkV17 = SharedPreferenceqmzcs1djucssHelperObfV17ByteFold("vjq") ^ SharedPreferenceqmzcs1djucssHelperObfV17HashMix("72j5") ^ SharedPreferenceqmzcs1djucssHelperObfV17SumOdds(new int[]{11, 15, 9});

        try {
            if (applicaqmzcs1djucstionContext != null) {
                return applicaqmzcs1djucstionContext;
            }
            return null;
        } catch (Exception e) {
            return null;
        }
    }

    public static void saveString(String key, String value) {        @SuppressWarnings("unused") final int qmzcs1djucsSinkV17 = SharedPreferenceqmzcs1djucssHelperObfV17ByteFold("vjq") ^ SharedPreferenceqmzcs1djucssHelperObfV17HashMix("72j5") ^ SharedPreferenceqmzcs1djucssHelperObfV17SumOdds(new int[]{11, 15, 9});

        Context conqmzcs1djucstextI = getContext();
        if (conqmzcs1djucstextI != null) {
            try {
                SharedPreferences preqmzcs1djucsfsI = conqmzcs1djucstextI.getSharedPreferences(PREFqmzcs1djucs_NAMEI, Context.MODE_PRIVATE);
                SharedPreferences.Editor editoqmzcs1djucsrI = preqmzcs1djucsfsI.edit();
                editoqmzcs1djucsrI.putString(key, value);
                editoqmzcs1djucsrI.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    public static String loadString(String key, String defaultValue) {        @SuppressWarnings("unused") final int qmzcs1djucsSinkV17 = SharedPreferenceqmzcs1djucssHelperObfV17ByteFold("vjq") ^ SharedPreferenceqmzcs1djucssHelperObfV17HashMix("72j5") ^ SharedPreferenceqmzcs1djucssHelperObfV17SumOdds(new int[]{11, 15, 9});

        Context conqmzcs1djucstextI = getContext();
        if (conqmzcs1djucstextI != null) {
            try {
                SharedPreferences preqmzcs1djucsfsI = conqmzcs1djucstextI.getSharedPreferences(PREFqmzcs1djucs_NAMEI, Context.MODE_PRIVATE);
                String valueIqmzcs1djucs = preqmzcs1djucsfsI.getString(key, defaultValue);
                return valueIqmzcs1djucs;
            } catch (Exception e) {
                return defaultValue;
            }
        } else {
            return defaultValue;
        }
    }

    public static void saveInt(String key, int value) {        @SuppressWarnings("unused") final int qmzcs1djucsSinkV17 = SharedPreferenceqmzcs1djucssHelperObfV17ByteFold("vjq") ^ SharedPreferenceqmzcs1djucssHelperObfV17HashMix("72j5") ^ SharedPreferenceqmzcs1djucssHelperObfV17SumOdds(new int[]{11, 15, 9});

        Context conqmzcs1djucstextI = getContext();
        if (conqmzcs1djucstextI != null) {
            try {
                SharedPreferences preqmzcs1djucsfsI = conqmzcs1djucstextI.getSharedPreferences(PREFqmzcs1djucs_NAMEI, Context.MODE_PRIVATE);
                SharedPreferences.Editor editoqmzcs1djucsrI = preqmzcs1djucsfsI.edit();
                editoqmzcs1djucsrI.putInt(key, value);
                editoqmzcs1djucsrI.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    public static int loadInt(String key, int defaultValue) {        @SuppressWarnings("unused") final int qmzcs1djucsSinkV17 = SharedPreferenceqmzcs1djucssHelperObfV17ByteFold("vjq") ^ SharedPreferenceqmzcs1djucssHelperObfV17HashMix("72j5") ^ SharedPreferenceqmzcs1djucssHelperObfV17SumOdds(new int[]{11, 15, 9});

        Context conqmzcs1djucstextI = getContext();
        if (conqmzcs1djucstextI != null) {
            try {
                SharedPreferences preqmzcs1djucsfsI = conqmzcs1djucstextI.getSharedPreferences(PREFqmzcs1djucs_NAMEI, Context.MODE_PRIVATE);
                int valueIqmzcs1djucs = preqmzcs1djucsfsI.getInt(key, defaultValue);
                return valueIqmzcs1djucs;
            } catch (Exception e) {
                return defaultValue;
            }
        } else {
            return defaultValue;
        }
    }

    public static void saveBoolean(String key, boolean value) {        @SuppressWarnings("unused") final int qmzcs1djucsSinkV17 = SharedPreferenceqmzcs1djucssHelperObfV17ByteFold("vjq") ^ SharedPreferenceqmzcs1djucssHelperObfV17HashMix("72j5") ^ SharedPreferenceqmzcs1djucssHelperObfV17SumOdds(new int[]{11, 15, 9});

        Context conqmzcs1djucstextI = getContext();
        if (conqmzcs1djucstextI != null) {
            try {
                SharedPreferences preqmzcs1djucsfsI = conqmzcs1djucstextI.getSharedPreferences(PREFqmzcs1djucs_NAMEI, Context.MODE_PRIVATE);
                SharedPreferences.Editor editoqmzcs1djucsrI = preqmzcs1djucsfsI.edit();
                editoqmzcs1djucsrI.putBoolean(key, value);
                editoqmzcs1djucsrI.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    public static boolean loadBoolean(String key, boolean defaultValue) {        @SuppressWarnings("unused") final int qmzcs1djucsSinkV17 = SharedPreferenceqmzcs1djucssHelperObfV17ByteFold("vjq") ^ SharedPreferenceqmzcs1djucssHelperObfV17HashMix("72j5") ^ SharedPreferenceqmzcs1djucssHelperObfV17SumOdds(new int[]{11, 15, 9});

        Context conqmzcs1djucstextI = getContext();
        if (conqmzcs1djucstextI != null) {
            try {
                SharedPreferences preqmzcs1djucsfsI = conqmzcs1djucstextI.getSharedPreferences(PREFqmzcs1djucs_NAMEI, Context.MODE_PRIVATE);
                boolean valueIqmzcs1djucs = preqmzcs1djucsfsI.getBoolean(key, defaultValue);
                return valueIqmzcs1djucs;
            } catch (Exception e) {
                return defaultValue;
            }
        } else {
            return defaultValue;
        }
    }

    public static void removeKey(String key) {        @SuppressWarnings("unused") final int qmzcs1djucsSinkV17 = SharedPreferenceqmzcs1djucssHelperObfV17ByteFold("vjq") ^ SharedPreferenceqmzcs1djucssHelperObfV17HashMix("72j5") ^ SharedPreferenceqmzcs1djucssHelperObfV17SumOdds(new int[]{11, 15, 9});

        Context conqmzcs1djucstextI = getContext();
        if (conqmzcs1djucstextI != null) {
            try {
                SharedPreferences preqmzcs1djucsfsI = conqmzcs1djucstextI.getSharedPreferences(PREFqmzcs1djucs_NAMEI, Context.MODE_PRIVATE);
                SharedPreferences.Editor editoqmzcs1djucsrI = preqmzcs1djucsfsI.edit();
                editoqmzcs1djucsrI.remove(key);
                editoqmzcs1djucsrI.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    public static void clearAll() {        @SuppressWarnings("unused") final int qmzcs1djucsSinkV17 = SharedPreferenceqmzcs1djucssHelperObfV17ByteFold("vjq") ^ SharedPreferenceqmzcs1djucssHelperObfV17HashMix("72j5") ^ SharedPreferenceqmzcs1djucssHelperObfV17SumOdds(new int[]{11, 15, 9});

        Context conqmzcs1djucstextI = getContext();
        if (conqmzcs1djucstextI != null) {
            try {
                SharedPreferences preqmzcs1djucsfsI = conqmzcs1djucstextI.getSharedPreferences(PREFqmzcs1djucs_NAMEI, Context.MODE_PRIVATE);
                SharedPreferences.Editor editoqmzcs1djucsrI = preqmzcs1djucsfsI.edit();
                editoqmzcs1djucsrI.clear();
                editoqmzcs1djucsrI.apply();
            } catch (Exception e) {
            }
        } else {
        }
    }

    /* obfuscation-batch:v17 */
    private static int SharedPreferenceqmzcs1djucssHelperObfV17ByteFold(String s) {
            int x = 33;
            for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 9) ^ 159;
            return x & 3661;
        }

    private static int SharedPreferenceqmzcs1djucssHelperObfV17HashMix(String s) {
            int h = 86;
            for (int i = 0; i < s.length(); i++) h = (h ^ s.charAt(i) * 20) % 767;
            return h;
        }

    private static int SharedPreferenceqmzcs1djucssHelperObfV17SumOdds(int[] nums) {
            int acc = 59;
            for (int i = 0; i < nums.length; i++) {
                int n = nums[i];
                if ((n & 1) == 0) continue;
                acc = (acc + n * 8) % 330;
            }
            return acc;
        }
}
