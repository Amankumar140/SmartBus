import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const LandingScreen = ( { navigation }) => {

  

  return (
    <SafeAreaView style={styles.container}>
      {/* Background road graphic */}
      <Image
        source={require('../Assets/LandingPage/Road.png')}
        style={styles.roadImage}
      />

      {/* Top Language Button
      <TouchableOpacity style={styles.languageButton}>
        <View style={styles.radioIcon} />
        <Text style={styles.languageText}>English</Text>
      </TouchableOpacity> */}

      {/* Main content container */}
      <View style={styles.content}>
        <Image
          source={require('../Assets/LandingPage/Punjab.png')}
          style={styles.logo}
        />
       <View style={styles.textSlogan}>
         <Text style={styles.title}>Never miss your Bus again</Text>
        <Text style={styles.subtitle}>Apka Safar Sarthi</Text>
       </View>

        <View style={styles.busIconContainer}>
          <Image
            source={require('../Assets/LandingPage/locationIcon.png')}
            style={styles.busIcon}
          />
        </View>
      </View>

      {/* Bottom 'Get Started' Button */}
      <TouchableOpacity
        style={styles.getStartedButton}
       onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.getStartedButtonText}> Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F2F1', // A light beige background color from your UI
  },
  // The road is an absolute-positioned image at the bottom of the screen
  roadImage: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 300, // Adjust height as needed for your image
    resizeMode: 'stretch',
  },
  // The language button is positioned absolutely at the top-right
  // languageButton: {
  //   position: 'absolute',
  //   top: 20,
  //   right: 20,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   backgroundColor: '#EAE6E4',
  //   paddingVertical: 8,
  //   paddingHorizontal: 12,
  //   borderRadius: 20,
  // },
  radioIcon: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#8E4DFF',
    backgroundColor: '#C5A6FF',
    marginRight: 8,
  },
  // languageText: {
  //   fontSize: 14,
  //   color: '#333',
  // },
  // This container holds the content that should be centered
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingBottom: 100, // Push content up to avoid the road
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 100,
  },
  title: {
    fontFamily: 'serif', // This will default to a system serif font
    fontSize: 26,
    color: '#333',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: '#555',
    textAlign: 'center',
    marginTop: 10,
  },
  busIconContainer: {
    width: '100%',
    alignItems: 'flex-end', // Pushes the icon to the right
    paddingRight: 20,
    marginBottom:110
  },
  busIcon: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  // The main button is also positioned absolutely from the bottom
  getStartedButton: {
    position: 'absolute',
    bottom: 60,
    left: '10%', // Positioned 10% from the left
    width: '80%', // Takes up 80% of the screen width
    backgroundColor: '#8E4DFF',
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    // Adding a subtle shadow for depth
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  getStartedButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textSlogan:{
    marginBottom:100
  }
});

export default LandingScreen;
