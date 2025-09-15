import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LandingScreen from './src/Screens/LandingScreen';

import LoginScreen from './src/Screens/Login_Signup/LoginScreen'
import SignupScreen from './src/Screens/Login_Signup/SignupScreen'
import HomeSearch from './src/Screens/Home/HomeSearch'
import SearchResultScreen from './src/Screens/SearchResults/SearchResultScreen'
const App = () => {
  return (
    <View style={{flex:1}}>
      <SearchResultScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
