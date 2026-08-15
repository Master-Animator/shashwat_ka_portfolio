import React, { useEffect, useState } from 'react';
import {
  StyleSheet, Text, View,
  Image, Pressable, ScrollView,
  Linking, Dimensions,Platform,
} from 'react-native';
const { width } = Dimensions.get('window');

const COLORS = {
  bg: '#020506',
  green: '#00ff66',
  cyan: '#00d9ff',
  white: '#ffffff',
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingStep, setLoadingStep] = useState(0);
  const [isViewProjectHovered, setViewProjectHovered] = useState(false)
  const [isConcatHovered, setConcatHovered] = useState(false)

  const openLink = (url) => {
    Linking.openURL(url);
  };

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setLoadingStep(1);
    }, 1000);

    const timer2 = setTimeout(() => {
      setLoadingStep(2);
    }, 2000);

    const timer3 = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <View style={styles.loadingScreen}>

          <Text style={styles.loadingTitle}>
            {'> INITIALIZING PORTFOLIO...'}
          </Text>

          {loadingStep >= 1 && (
            <Text style={styles.loadingLine}>
              {'> EMBEDDED_SYSTEMS ........ OK'}
            </Text>
          )}

          {loadingStep >= 2 && (
            <Text style={styles.loadingLine}>
              {'> SOFTWARE ................ OK'}
            </Text>
          )}

        </View>
      ) : (

<View style={styles.page}>
  <ScrollView
    showsVerticalScrollIndicator={false}
    contentContainerStyle={styles.scrollContent}
  >
    <View style={styles.hero}>

      <Image
        source={
          Platform.OS === 'web'
            ? require('./assets/background.png')
            : require('./assets/andris.png')
        }
        style={styles.heroBackground}
      />

      <View style={styles.heroOverlay} />
      <View style={styles.heroContent}>

        <Text style={styles.terminalLine}>
          {'> SYSTEM ONLINE.'}
        </Text>
        <Text style={styles.greeting}>
          Heyy, I’m
        </Text>
        <Text style={styles.name}>
          Shashwat
        </Text>
      <Text style={styles.role}>
        🚀 Aspiring developer
      </Text>
        <Text style={styles.description}>
          Building things where software meets hardware.
        </Text>

        <View style={styles.buttonRow}>

          <Pressable
            style={({ pressed }) => [
              styles.greenButton,
              pressed && styles.buttonPressed,
            ]}
            onPress={() =>
              openLink('https://github.com/shashwat-dev')
            }
            onHoverIn={()=>setConcatHovered(true)}
            onHoverOut={()=>setConcatHovered(false)}
          ><Text style={styles.githubIcon}>●</Text>
            <Text style={styles.greenButtonText}>
              VIEW PROJECTS
            </Text>
          </Pressable>

          <Pressable
            style={({ pressed }) => [
              styles.cyanButton,
              pressed && styles.buttonPressed,
            ]}
            onPress={() =>
              openLink(
                'mailto:shashwat.sharma.dev@gmail.com'
              )
            }
          >
            <Text style={styles.arrowIcon}>
              ↓
            </Text>

            <Text style={styles.cyanButtonText}>
              CONNECT
            </Text>
          </Pressable>

        </View>

      </View>

      <View style={styles.systemStatus}>

        <View style={styles.statusDot} />

        <Text style={styles.statusText}>
          STATUS CODE:200
        </Text>

      </View>

    </View>
  </ScrollView>
</View>
      )}
    </>
  );
};

const styles = StyleSheet.create({

  loadingScreen: {
    flex: 1,
    backgroundColor: '#020506',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },

  loadingTitle: {
    color: COLORS.green,
    fontFamily: 'monospace',
    fontSize: 14,
    marginBottom: 18,
  },

  loadingLine: {
    color: '#d4d7d8',
    fontFamily: 'monospace',
    fontSize: 13,
    marginBottom: 14,
  },


  /* =========================
     PAGE
     ========================= */

  page: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },

  scrollContent: {
    backgroundColor: COLORS.bg,
  },


  /* =========================
     HERO
     ========================= */

  hero: {
    width: '100%',
    height: 660,
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#020506',
  },

  heroBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },

  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
  },

  heroContent: {
    position: 'relative',
    zIndex: 2,

    paddingTop: 76,
    paddingLeft: 40,
    paddingRight: 40,

    maxWidth: 720,
  },


  /* =========================
     TEXT
     ========================= */

  terminalLine: {
    color: COLORS.green,
    fontSize: 12,
    fontFamily: 'monospace',
    marginBottom: 24,
  },

  greeting: {
    color: COLORS.white,
    fontSize: 48,
    fontWeight: '700',
    lineHeight: 54,
  },

  name: {
    color: COLORS.green,
    fontSize: 54,
    fontWeight: '800',
    lineHeight: 58,
    marginBottom: 22,
  },

  role: {
    color: COLORS.white,
    fontSize: 18,
    marginBottom: 18,
  },

  description: {
    color: '#b7bcbc',
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 28,
  },


  /* =========================
     BUTTONS
     ========================= */

  buttonRow: {
    flexDirection: 'row',
    gap: 16,
  },

  greenButton: {
    height: 48,
    minWidth: 165,

    borderWidth: 1,
    borderColor: COLORS.green,
    borderRadius: 5,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: 18,

    backgroundColor: 'rgba(0, 255, 102, 0.025)',
  },

  cyanButton: {
    height: 48,
    minWidth: 140,

    borderWidth: 1,
    borderColor: COLORS.cyan,
    borderRadius: 5,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    paddingHorizontal: 18,

    backgroundColor: 'rgba(0, 217, 255, 0.025)',
  },

  greenButtonText: {
    color: COLORS.green,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  cyanButtonText: {
    color: COLORS.cyan,
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  githubIcon: {
    color: COLORS.white,
    fontSize: 17,
    marginRight: 10, marginBottom:5
  },

  arrowIcon: {
    color: COLORS.cyan,
    fontSize: 27,
    marginRight: 10,
    lineHeight: 27,
  },

  buttonPressed: {
    opacity: 0.55,
    transform: [{ scale: 0.98 }],
  },


  /* =========================
     SYSTEM STATUS
     ========================= */

  systemStatus: {
    position: 'absolute',

    top: 20,
    right: 28,

    flexDirection: 'row',
    alignItems: 'center',

    zIndex: 5,
  },

  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,

    backgroundColor: COLORS.green,

    marginRight: 8,
  },

  statusText: {
    color: COLORS.green,
    fontFamily: 'monospace',
    fontSize: 10,
    fontWeight: '700',
  },

});


/* =========================
   MOBILE
   ========================= */

if (width < 700) {

  styles.heroContent = {
    ...styles.heroContent,

    paddingTop: 80,
    paddingLeft: 22,
    paddingRight: 22,
  };

  styles.greeting = {
    ...styles.greeting,

    fontSize: 38,
    lineHeight: 44,
  };

  styles.name = {
    ...styles.name,

    fontSize: 44,
    lineHeight: 48,
  };

  styles.buttonRow = {
    ...styles.buttonRow,

    flexWrap: 'wrap',
  };

}

export default App;