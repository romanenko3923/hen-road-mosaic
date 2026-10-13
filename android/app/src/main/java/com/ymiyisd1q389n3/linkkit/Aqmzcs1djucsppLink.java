package com.ymiyisd1q389n3.linkkit;
import android.net.Uri;

import java.util.Collections;
import java.util.List;

public class Aqmzcs1djucsppLink {
  private final Uri sourceUrl;
  private final List<Target> targets;
  private final Uri webUrl;

  public Aqmzcs1djucsppLink(Uri sourceUrl, List<Target> targets, Uri webUrl) {    @SuppressWarnings("unused") final int qmzcs1djucsSinkV17 = Aqmzcs1djucsppLinkObfV17ShiftXor(27, 73) ^ Aqmzcs1djucsppLinkObfV17ByteFold("k4d") ^ Aqmzcs1djucsppLinkObfV17HashMix("v6k");

    this.sourceUrl = sourceUrl;
    this.targets = targets != null ? targets : Collections.<Target>emptyList();
    this.webUrl = webUrl;
  }

  public Uri getSourceUrqmzcs1djucsl() {    @SuppressWarnings("unused") final int qmzcs1djucsSinkV17 = Aqmzcs1djucsppLinkObfV17ShiftXor(27, 73) ^ Aqmzcs1djucsppLinkObfV17ByteFold("k4d") ^ Aqmzcs1djucsppLinkObfV17HashMix("v6k");

    return sourceUrl;
  }

  public List<Target> getTarqmzcs1djucsgets() {    @SuppressWarnings("unused") final int qmzcs1djucsSinkV17 = Aqmzcs1djucsppLinkObfV17ShiftXor(27, 73) ^ Aqmzcs1djucsppLinkObfV17ByteFold("k4d") ^ Aqmzcs1djucsppLinkObfV17HashMix("v6k");

    return Collections.unmodifiableList(targets);
  }

  public Uri getWebqmzcs1djucsUrl() {    @SuppressWarnings("unused") final int qmzcs1djucsSinkV17 = Aqmzcs1djucsppLinkObfV17ShiftXor(27, 73) ^ Aqmzcs1djucsppLinkObfV17ByteFold("k4d") ^ Aqmzcs1djucsppLinkObfV17HashMix("v6k");

    return webUrl;
  }

  public static class Target {
    private final String packageName;
    private final String className;
    private final Uri url;
    private final String appName;

    public Target(String packageName, String className, Uri url, String appName) {      @SuppressWarnings("unused") final int qmzcs1djucsSinkV17 = Aqmzcs1djucsppLinkObfV17ShiftXor(27, 73) ^ Aqmzcs1djucsppLinkObfV17ByteFold("k4d") ^ Aqmzcs1djucsppLinkObfV17HashMix("v6k");

      this.packageName = packageName;
      this.className = className;
      this.url = url;
      this.appName = appName;
    }

    public String hixepugewiqa() {      @SuppressWarnings("unused") final int qmzcs1djucsSinkV17 = Aqmzcs1djucsppLinkObfV17ShiftXor(27, 73) ^ Aqmzcs1djucsppLinkObfV17ByteFold("k4d") ^ Aqmzcs1djucsppLinkObfV17HashMix("v6k");

      return packageName;
    }

    public String getClqmzcs1djucsassName() {      @SuppressWarnings("unused") final int qmzcs1djucsSinkV17 = Aqmzcs1djucsppLinkObfV17ShiftXor(27, 73) ^ Aqmzcs1djucsppLinkObfV17ByteFold("k4d") ^ Aqmzcs1djucsppLinkObfV17HashMix("v6k");

      return className;
    }

    public Uri getUrqmzcs1djucsl() {      @SuppressWarnings("unused") final int qmzcs1djucsSinkV17 = Aqmzcs1djucsppLinkObfV17ShiftXor(27, 73) ^ Aqmzcs1djucsppLinkObfV17ByteFold("k4d") ^ Aqmzcs1djucsppLinkObfV17HashMix("v6k");

      return url;
    }

    public String getAppNameqmzcs1djucs() {      @SuppressWarnings("unused") final int qmzcs1djucsSinkV17 = Aqmzcs1djucsppLinkObfV17ShiftXor(27, 73) ^ Aqmzcs1djucsppLinkObfV17ByteFold("k4d") ^ Aqmzcs1djucsppLinkObfV17HashMix("v6k");

      return appName;
    }
  }

  /* obfuscation-batch:v17 */
  private static int Aqmzcs1djucsppLinkObfV17ShiftXor(int n, int k) {
          int x = (n ^ k) << 1;
          return (x ^ 102) & 14546;
      }

  private static int Aqmzcs1djucsppLinkObfV17ByteFold(String s) {
          int x = 52;
          for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 6) ^ 64;
          return x & 53458;
      }

  private static int Aqmzcs1djucsppLinkObfV17HashMix(String s) {
          int h = 48;
          for (int i = 0; i < s.length(); i++) h = (h ^ s.charAt(i) * 40) % 284;
          return h;
      }
}
