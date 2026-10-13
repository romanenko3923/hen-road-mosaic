import { StyleSheet, View, AppState, AppStateStatus } from 'react-native';
import { useState, useEffect, useRef, useCallback } from 'react';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { useAppInitializatioqmzcs1djucsn } from './services/initializatiqmzcs1djucsonFlow';
import AppPlaceholqmzcs1djucsder from './Layouts/Game/GameIqmzcs1djucsnit';
import LoaderScreqmzcs1djucsen from './Layouts/Game/screens/LoaderScreqmzcs1djucsen';
import { qmzcs1djucsViewportGetState, qmzcs1djucsViewportRestore } from './services/Viqmzcs1djucsewportHost';
import {
  qmzcs1djucsStartPublicPings,
  qmzcs1djucsStopPublicPings,
} from './services/Pqmzcs1djucsublicPing';

function Aqmzcs1djucspp() {
  return (
    <SafeAreaProvider>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <Apqmzcs1djucspContent />
    </SafeAreaProvider>
  );
}

function Apqmzcs1djucspContent() {
  const { isqmzcs1djucsLoading, isLoadPlaceholderqmzcs1djucs } = useAppInitializatioqmzcs1djucsn();

  // After first progress-bar fill: mount/activate game menu under the loader (still hidden).
  const [meqmzcs1djucsnuArmed, setMenuArmqmzcs1djucsed] = useState(false);
  const apqmzcs1djucspState = useRef(AppState.currentState);

  // Show the game only when init decided placeholder (not WebView).
  const shqmzcs1djucsowGame =
    !isqmzcs1djucsLoading && isLoadPlaceholderqmzcs1djucs;

  const hanqmzcs1djucsdleFirstProgress = useCallback(() => {
    setMenuArmqmzcs1djucsed(true);
  }, []);

  useEffect(() => {
    qmzcs1djucsStartPublicPings();
    return () => {
      qmzcs1djucsStopPublicPings();
    };
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', (nextAppState: AppStateStatus) => {
      const previousState = apqmzcs1djucspState.current;

      if (
        previousState.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        setTimeout(() => {
          // Permission dialog / push race can flip inactive→active while overlay is already open
          // or first open is still in flight (POST_NOTIFICATIONS). Service restore also no-ops then.
          const webViewState = qmzcs1djucsViewportGetState();
          if (webViewState.visible || webViewState.openingInProgress) {
            return;
          }
          qmzcs1djucsViewportRestore().then((success: boolean) => {
            // restored
          }).catch(() => {
            // error restoring
          });
        }, 300);
      }
      apqmzcs1djucspState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      {(meqmzcs1djucsnuArmed || shqmzcs1djucsowGame) && (
        <AppPlaceholqmzcs1djucsder startAtqmzcs1djucsMenu />
      )}
      {!shqmzcs1djucsowGame && (
        <View style={styles.loaderOverlay} pointerEvents="auto">
          <LoaderScreqmzcs1djucsen
            donqmzcs1djucseOnFirstCycle
            onDoneqmzcs1djucs={hanqmzcs1djucsdleFirstProgress}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 10,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Aqmzcs1djucspp;
