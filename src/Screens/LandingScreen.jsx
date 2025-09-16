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
    backgroundColor: '#F4F2F1',
  },
  roadImage: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '35%', // <-- CHANGED: Use percentage for responsive height
    resizeMode: 'cover', // <-- CHANGED: 'cover' often looks better
  },
  content: {
    flex: 1, // This is key for flexbox to work
    justifyContent: 'space-around', // <-- CHANGED: Distributes content evenly
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 20, // <-- CHANGED: Replaced fixed paddingBottom
  },
  logo: {
    width: 250, // Slightly reduced for better fit on small screens
    height: 250,
    resizeMode: 'contain',
    // marginBottom was removed
  },
  textSlogan: {
    alignItems: 'center',
    // marginBottom was removed
  },
  title: {
    fontFamily: 'serif',
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
    alignItems: 'flex-end',
    paddingRight: 20,
    // marginBottom was removed
  },
  busIcon: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  getStartedButton: {
    position: 'absolute',
    bottom: '8%', // <-- CHANGED: Use percentage for responsive positioning
    left: '10%',
    width: '80%',
    backgroundColor: '#8E4DFF',
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
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
  // Radio button styles are not used but kept here for completeness
  radioIcon: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#8E4DFF',
    backgroundColor: '#C5A6FF',
    marginRight: 8,
  },
});

export default LandingScreen;
