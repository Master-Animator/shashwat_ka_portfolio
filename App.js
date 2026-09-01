import React, { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View,  Image,  Pressable,  ScrollView,
Linking,  Dimensions,
Platform,
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

  const [isViewProjectHovered, setViewProjectHovered] = useState(false);
  const [isProjectText, setProjectText] = useState(false);
  const [isGitHovered , setisGitHovered] = useState(false);
  const [isInstaHovered , setisInstaHovered] = useState(false);
  const [isEmailHovered , setEmailHovered] = useState(false);
  const [isSpotifyHovered , setSpotifyHoveredHovered] = useState(false);
  
  const [isConcatHovered, setConcatHovered] = useState(false);
  const [isConcatText, setConcatText] = useState(false);

  const greenCircle = require('./assets/greencircle.png');
  const blurCircle = require('./assets/bluecircles.png');
  const py = require('./assets/py.png');
  const dev = require("./assets/dev.png");
  const git = require("./assets/git.png");
  const spotify = require("./assets/spotify.webp");
  const email = require("./assets/email.png");
  const insta =  require("./assets/insta.png");
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

                  {/* VIEW PROJECTS */}

                  <Pressable
                    onPress={() =>
                      openLink('https://github.com/shashwat-dev')
                    }

                    onHoverIn={() => {
                      setViewProjectHovered(true);
                      setProjectText(true);
                    }}

                    onHoverOut={() => {
                      setViewProjectHovered(false);
                      setProjectText(false);
                    }}

                    style={({ pressed }) => [
                      styles.greenButton,

                      isViewProjectHovered && {
                        backgroundColor: '#30a341',
                        borderWidth: 0,
                      },

                      pressed && {
                        backgroundColor: '#30a341',
                        opacity: 0.3,
                        borderWidth: 2,
                      },
                    ]}
                  >
                    <Text style={styles.githubIcon}>
                      ●
                    </Text>

                    <Text
                      style={[
                        styles.greenButtonText,
                        isProjectText && {
                          color: '#ffffff',
                        },
                      ]}
                    >
                      VIEW PROJECTS
                    </Text>
                  </Pressable>


                  {/* CONNECT */}

                  <Pressable
                    onPress={() =>
                      openLink(
                        'mailto:shashwat.sharma.dev@gmail.com'
                      )
                    }

                    onHoverIn={() => {
                      setConcatHovered(true);
                      setConcatText(true);
                    }}

                    onHoverOut={() => {
                      setConcatHovered(false);
                      setConcatText(false);
                    }}

                    style={({ pressed }) => [
                      styles.cyanButton,

                      isConcatHovered && {
                        backgroundColor: '#00d9ff',
                      },

                      pressed && {
                        backgroundColor: '#c6d0d2',
                        opacity: 0.3,
                        borderWidth: 2,
                      },
                    ]}
                  >
                    <Text
                      style={[
                        styles.arrowIcon,
                        isConcatText && {
                          color: '#ffffff',
                        },
                      ]}
                    >
                      ↓
                    </Text>

                    <Text
                      style={[
                        styles.cyanButtonText,
                        isConcatText && {
                          color: '#ffffff',
                        },
                      ]}
                    >
                      CONNECT
                    </Text>
                  </Pressable>

                </View>

              </View>


              {/* STATUS */}

              <View style={styles.systemStatus}>

                <View style={styles.statusDot} />

                <Text style={styles.statusText}>
                  STATUS CODE:200
                </Text>

              </View>

            </View>
<View style={{ flexDirection: 'row', gap: 0 }}>
  <View
    style={{
      flex: 1,
      height: 300,
      borderWidth: 1,
      borderColor: '#1a2528',
      // backgroundColor:"#00ffb7",
      borderRadius: 10,
      paddingTop: 30,
    }}
  >
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 18,
      }}
    >

      <Image
        source={greenCircle}
        style={{ height: 10, width: 10 }}
      />

      <Text
        style={{
          color: '#ffffff',
          fontSize: 19,
          fontWeight: 'bold',
        }}
      >
        SKILLS
      </Text>

      <Image
        source={blurCircle}
        style={{ height: 10, width: 10 }}
      />
    </View>
      <View style={{flexDirection:"row", marginTop:25,marginLeft:60, gap:30}}>
          <Image source={py} style={{height:80 , width:80,marginRight:10, marginLeft:90,padding:30}}/>
          <Text style={{marginTop:26,fontSize:16, color:"#fff", marginRight:90}}>Python</Text>
          <Image source={dev} style={{height:80 , width:80}}/>
          <Text style={{marginTop:30,fontSize:16, color:"#fff"}}>Embededd</Text>
      </View>
        <View style={{flexDirection:"row",gap:30,marginLeft:100,paddingTop:15, opacity:0.7}}>
          <LinearGradient
            colors={['transparent', '#00ff66', '#00ff66', 'transparent']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              width: '30%',
              height: 2,
              marginTop: 20,
            }}
          />
          <View style={{paddingLeft:40}}></View>
          <LinearGradient
            colors={['transparent', '#00ff66', '#00ff66', 'transparent']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              width: '30%',
              height: 2,
              marginTop: 20,
            }}
          />
        </View>
  </View>


  <View
    style={{
      flex: 1,
      height: 300,
      borderWidth: 1,
      borderColor: '#1a2528',
      borderRadius: 10,
      paddingTop: 30,
    }}
  >
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft:250,
        gap: 18,
        marginBottom:15
      }}
    >
      <Image
        source={greenCircle}
        style={{ height: 10, width: 10 }}
      />

      <Text
        style={{
          color: '#ffffff',
          fontSize: 19,
          fontWeight: 'bold',
        }}
      >
        CONNECT
      </Text>

      <Image
        source={blurCircle}
        style={{ height: 10, width: 10 }}
      />
    </View>
    <View style={{flexDirection:"row", gap:40}}>
      <Pressable style={({pressed})=>[
        {height:150,width:130, padding:10, borderRadius:10},
        isGitHovered && {backgroundColor:"#e9e4e48a"},
        pressed && {opacity:0.7}
      ]}
        onPress={() =>openLink('https://github.com/shashwat-dev')}
        onHoverIn={()=>setisGitHovered(true)}
        onHoverOut={()=>setisGitHovered(false)}
        >
        <Image source={git} style={{height:80, width:80,marginLeft:15}}/>
        <Text style={{color:"#fff",padding:5,marginLeft:25}}>GitHub</Text>
        <Text style={{color:"#e9e8e8", opacity:0.8}}>@shashwat-dev</Text>
        <View style={{borderWidth:1, borderColor:"#fff", width:"40px",marginTop:20,marginLeft:30}}/>
      </Pressable>

       <Pressable style={({pressed})=>[
        {height:150,width:140, padding:10, borderRadius:10},
        isInstaHovered && {backgroundColor:"#e9e4e48a"},
        pressed && {opacity:0.7}
      ]}
        onPress={() =>openLink('https://www.instagram.com/_.shashwhat?igsh=bTI5M2MzdHV0dWFl')}
        onHoverIn={()=>setisInstaHovered(true)}
        onHoverOut={()=>setisInstaHovered(false)}
        >
        <Image source={insta} style={{height:70, width:70,marginLeft:20, marginTop:5}}/>
        <Text style={{color:"#fff",padding:5,marginLeft:20, paddingTop:10}}>Instagram</Text>
        <Text style={{color:"#e9e8e8", opacity:0.8}}>@shashwat90010</Text>
        <View style={{borderWidth:1, borderColor:"#fff", width:"40px",marginTop:25,marginLeft:30}}/>
      </Pressable>

       <Pressable style={({pressed})=>[
        {height:150,width:130, padding:10, borderRadius:10},
        isEmailHovered && {backgroundColor:"#e9e4e48a"},
        pressed && {opacity:0.7}
      ]}
        onPress={() =>openLink('mailto:raven90010@gmail.com')}
        onHoverIn={()=>setEmailHovered(true)}
        onHoverOut={()=>setEmailHovered(false)}
        >
        <Image source={email} style={{height:60, width:60,marginLeft:20 , marginTop:  15}}/>
        <Text style={{color:"#fff",padding:5,marginLeft:25, paddingTop:10}}>Email</Text>
        <Text style={{color:"#e9e8e8", opacity:0.8,marginLeft:10}}>@raven90010</Text>
        <View style={{borderWidth:1, borderColor:"#fff", width:"40px",marginTop:25,marginLeft:30}}/>
      </Pressable>
      
       <Pressable style={({pressed})=>[
        {height:150,width:130, padding:10, borderRadius:10},
        isSpotifyHovered && {backgroundColor:"#e9e4e48a", opacity:0.8},
        pressed && {opacity:0.7}
      ]}
        onPress={() =>openLink('https://open.spotify.com/user/31upv3me3ade22kstotpg3pdqjcm')}
        onHoverIn={()=>setSpotifyHoveredHovered(true)}
        onHoverOut={()=>setSpotifyHoveredHovered(false)}
        >
        <Image source={spotify} style={{height:80, width:80,marginLeft:15 , marginTop:5}}/>
        <Text style={{color:"#fff",padding:5,marginLeft:25, paddingTop:5}}>Spotify</Text>
        <Text style={{color:"#e9e8e8", opacity:0.8,paddingBottom:5}}>@shashwat-dev</Text>
        <View style={{borderWidth:1, borderColor:"#fff", width:"40px",marginTop:15,marginLeft:30}}/>
      </Pressable>
    </View>
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



  page: {
    flex: 1,
  },

  scrollContent: {
    backgroundColor: COLORS.bg,
  },



  hero: {
    width: '100%',
    height: 570,
    // overflow: 'hidden',
    backgroundColor: '#020506',
  },

  heroBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    width: '100%',
    height: "100%",
  },

  heroOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },

  heroContent: {
    position: 'relative',
    zIndex: 2,

    paddingTop: 76,
    paddingLeft: 40,
    paddingRight: 40,

    maxWidth: 720,
  },


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
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  cyanButtonText: {
    color: COLORS.cyan,
    fontSize: 14,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  githubIcon: {
    color: COLORS.white,
    fontSize: 17,
    marginRight: 10,
    marginBottom: 5,
  },

  arrowIcon: {
    color: COLORS.cyan,
    fontSize: 27,
    marginRight: 10,
    lineHeight: 27,
  },

  cardHolders: {
    backgroundColor: '#8ff9b4',
    marginTop: 30,
    // marginLeft:50,
    height:400
  },


  sectionTitle: {
    // paddingTop:22 ,
    // fontWeight: 'bold',
    // fontSize: 19, padding: 8, color:"#ffff"
    
  },

  systemStatus: {
    position: 'absolute',
    borderWidth:1,
    borderColor: "#bdfe63",
    borderRadius: 30,
    
    top: 20,
    right: 28,

    flexDirection: 'row',
    alignItems: 'center',

    zIndex: 5,
    padding:10
  },

  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,

    // marginTop: 20,
    padding:2,
    backgroundColor: COLORS.green,

    marginRight: 8,
  },

  statusText: {
    color: COLORS.green,
    fontFamily: 'monospace',
    fontSize: 10,
    fontWeight: '700',

    // marginTop: 20,
  },

});
console.log("width:",width)
// if(width > 700){
//     styles.cardHolders = {
//     ...styles.cardHolders,
    
//   }
// }



//  mobil? man idk prolly smartwatch.
if (width < 700) {

  styles.heroContent = {
    ...styles.heroContent,

    paddingTop: 80,
    paddingLeft: 22,
    paddingRight: 22,
    paddingBottom: 25,
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
  styles.heroBackground = {
    ...styles.heroBackground,
    height: '110%',
  }
  
    styles.hero = {
    ...styles.hero,
    height: 490,
  }
}


export default App;