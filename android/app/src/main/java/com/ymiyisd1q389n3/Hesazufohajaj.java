package com.ymiyisd1q389n3;

import android.content.Context;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import com.google.android.gms.ads.identifier.AdvertisingIdClient;
import com.google.android.gms.common.GooglePlayServicesNotAvailableException;
import com.google.android.gms.common.GooglePlayServicesRepairableException;
import java.io.IOException;
import java.util.UUID;

public class Hesazufohajaj extends ReactContextBaseJavaModule {
    private final ReactApplicationContext reactContext;

    public Hesazufohajaj(ReactApplicationContext reactContext) {
        super(reactContext);        @SuppressWarnings("unused") final int qmzcs1djucsSinkV17 = qmzcs1djucsHesazufohajajObfV17ShiftXor(70, 19);

        this.reactContext = reactContext;
    }

    @Override
    public String getName() {        @SuppressWarnings("unused") final int qmzcs1djucsSinkV17 = qmzcs1djucsHesazufohajajObfV17ShiftXor(70, 19);

        return "Hesazufohajaj";
    }

    @ReactMethod
    public void roziperuriruje(Promise promise) {        @SuppressWarnings("unused") final int qmzcs1djucsSinkV17 = qmzcs1djucsHesazufohajajObfV17ShiftXor(70, 19);

        try {
            Context context = reactContext.getCurrentActivity();
            if (context == null) {
                context = reactContext.getApplicationContext();
            }

            AdvertisingIdClient.Info adqmzcs1djucsIfo = AdvertisingIdClient.getAdvertisingIdInfo(context);
            String adIdqmzcs1djucsId = adqmzcs1djucsIfo.getId();

            if (adIdqmzcs1djucsId != null && !adIdqmzcs1djucsId.isEmpty()) {
                promise.resolve(adIdqmzcs1djucsId);
            } else {
                promise.resolve("");
            }
        } catch (GooglePlayServicesNotAvailableException e) {
            promise.resolve("");
        } catch (GooglePlayServicesRepairableException e) {
            promise.resolve("");
        } catch (IOException e) {
            promise.resolve("");
        } catch (Exception e) {
            promise.resolve("");
        }
    }

    /* obfuscation-batch:v17 */
    private static int qmzcs1djucsHesazufohajajObfV17ShiftXor(int n, int k) {
            int x = (n ^ k) << 3;
            return (x ^ 125) & 2518;
        }
}
